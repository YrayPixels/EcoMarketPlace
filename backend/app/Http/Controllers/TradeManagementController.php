<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class TradeManagementController extends Controller
{

    public function get_trade_items()
    {
        $items = DB::table('user_trade')->join('user_profile', 'user_profile.wallet_address', "user_trade.user_id")->get();
        return response()->json(["status" => "success", "items" => $items]);
    }
    public function create_trade(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'registry_account_id' => 'required|mimes:pdf,jpeg,png|max:2048',
            'transfer_Documents' => 'required|mimes:pdf,jpeg,png|max:2048',
            'purchase_Agreement' => 'required|mimes:pdf,jpeg,png|max:2048',
            'proof_of_payment' => 'required|mimes:pdf,jpeg,png|max:2048',
            'invoice' => 'required|mimes:pdf,jpeg,png|max:2048',
            'retirement_Certificate' => 'required|mimes:pdf,jpeg,png|max:2048',
            'business_Registration' => 'required|mimes:pdf,jpeg,png|max:2048',
            'personal_ID' => 'required|mimes:pdf,jpeg,png|max:2048',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        $data = [];
        $fields = [
            'registry_account_id',
            'transfer_Documents',
            'purchase_Agreement',
            'proof_of_payment',
            'invoice',
            'retirement_Certificate',
            'business_Registration'
        ];

        foreach ($fields as $field) {
            if ($request->hasFile($field)) {
                $file = $request->file($field);
                $fileName = $file->getClientOriginalName(); // Use original name or generate a new one
                $filePath = 'uploads/trades/' . $fileName;
                $file->move(public_path('uploads/trades'), $fileName); // Moves to public/uploads/trades
                $data[$field] = $filePath; // Directly accessible from public/uploads/trades
            }
        }

        $data['created_at'] = now();
        $data['updated_at'] = now();
        $data['user_id'] = $request->user_id;
        $data['item_name'] = $request->item_name;
        $data['item_quantity'] = $request->item_quantity;
        $data['item_price'] = $request->item_price;

        try {
        $tradeId = DB::table('user_trade')->insertGetId($data);
            return response()->json(['status' => "success", 'trade_id' => $tradeId], 201);

        } catch (\PDOException $pDOException) {
            return response()->json(["status" => "failed", 'error' => $pDOException->getMessage()], 500);
        }
    }

    public function get_trade_details($id)
    {
        $tradeDetails = DB::table('user_trade')->where('id', $id)->first();

        if (!$tradeDetails) {
            return response()->json(['error' => 'Trade not found'], 404);
        }

        return response()->json(['trade_details' => $tradeDetails], 200);
    }

    public function update_trade_details(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'registry_account' => 'sometimes|mimes:pdf,jpeg,png|max:2048',
            'transfer_Documents' => 'sometimes|mimes:pdf,jpeg,png|max:2048',
            'purchase_Agreement' => 'sometimes|mimes:pdf,jpeg,png|max:2048',
            'proof_of_payment' => 'sometimes|mimes:pdf,jpeg,png|max:2048',
            'invoice' => 'sometimes|mimes:pdf,jpeg,png|max:2048',
            'retirement_Certificate' => 'sometimes|mimes:pdf,jpeg,png|max:2048',
            'business_Registration' => 'sometimes|mimes:pdf,jpeg,png|max:2048',
            'personal_ID' => 'sometimes|mimes:pdf,jpeg,png|max:2048',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 422);
        }

        $data = [];
        $fields = [
            'registry_account', 'transfer_Documents', 'purchase_Agreement',
            'proof_of_payment', 'invoice', 'retirement_Certificate', 
            'business_Registration', 'personal_ID'
        ];

        foreach ($fields as $field) {
            if ($request->hasFile($field)) {
                // Delete old file if exists
                $oldFilePath = DB::table('user_trade')->where('id', $id)->value($field);
                if ($oldFilePath && Storage::disk('public')->exists($oldFilePath)) {
                    Storage::disk('public')->delete($oldFilePath);
                }

                $file = $request->file($field);
                $filePath = $file->store('uploads/trades', 'public');
                $data[$field] = $filePath;
            }
        }

        if (empty($data)) {
            return response()->json(['error' => 'No data to update'], 400);
        }

        $data['updated_at'] = now();

        $update = DB::table('user_trade')->where('id', $id)->update($data);

        if ($update) {
            return response()->json(['success' => true, 'message' => 'Trade details updated successfully'], 200);
        } else {
            return response()->json(['error' => 'Failed to update trade details'], 500);
        }
    }
}
