<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;



class EcoTradeController extends Controller
{

    public function check_user($id)
    {
        //Check  if any input is null and return error json
        if (!$id) {
            return response()->json(['status' => "failed", 'message' => "Invalid user id"]);
        }

        try {
            $user = DB::table('user_profile')->where('wallet_address', $id)->first();
            if ($user) {
                return response()->json(['status' => 'success', 'message' => "User exists", 'user' => $user], 200);
            } else {
                return response()->json(['status' => 'failed', 'message' => "User does not exist"], 500);
            }
        } catch (\PDOException $pDOException) {
            return response()->json(['error' => $pDOException->getMessage()], 500);
        }
    }

    public function login(Request $request)
    {
        //Check  if any input is null and return error json
        if (!$request->email || !$request->wallet_address) {
            return response()->json(['error' => "All fields are required"]);
        }

        $data = [
            "email" => $request->email,
            "wallet_address" => $request->wallet_address,
        ];
        try {
            $user = DB::table('user_profile')->where($data)->first();
            if ($user) {
                return response()->json(['status' => "Login Successful", 'user' => $user], 200);
            } else {
                return response()->json(['error' => "Invalid Credentials"], 400);
            }
        } catch (\PDOException $pDOException) {
            return response()->json(['error' => $pDOException->getMessage()], 500);
        }
    }
    public function signUp(Request $request)
    {
        //Check  if any input is null and return error json
        if (!$request->first_name || !$request->last_name || !$request->wallet_address || !$request->email || !$request->state || !$request->country) {
            return response()->json(['error' => "All fields are required"], 400);
        }

        $data = [
            "first_name" => $request->first_name,
            "last_name" => $request->last_name,
            "wallet_address" => $request->wallet_address,
            "email" => $request->email,
            "state" => $request->state,
            "country" => $request->country,
            "created_at" => now(),
            "updated_at" => now(),
        ];
        try {
            $insert = DB::table('user_profile')->insert($data);
            return response()->json(['status' => "User Registered Successfully"], 200);
        } catch (\PDOException $pDOException) {
            return response()->json(['error' => $pDOException->getMessage()], 500);
        }
    }

    public function updateProfile(Request $request)
    {

    }


}
