<?php

use App\Http\Controllers\EcoTradeController;
use App\Http\Controllers\TradeManagementController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

/**
 * Sign Up //done
 * login //done
 * Update Profile
 * Create a Trade
 * Enter Trade Details 
 * Approve Trade
 * List Trade Items
 * Enter to Buy Trade / Bid
 * Update Trade Details
 * Escrow Program Details
 */



Route::get('/check-status', function () {
    return response()->json(['status' => "Server Services are working properly"]);
});




//Signup user
Route::post('/create-user', [EcoTradeController::class, 'signUp']);

//Login
Route::post('/login', [EcoTradeController::class, 'login']);


Route::get('check-user-available/{id}', [EcoTradeController::class, 'check_user']);


//Trade Endpoints
Route::post('/create-trade', [TradeManagementController::class, 'create_trade']);
Route::get('/get-trade-details/{id}', [TradeManagementController::class, 'get_trade_details']);
Route::post('/update-trade-details/{id}', [TradeManagementController::class, 'update_trade_details']);


Route::post('/verify-trade', [TradeManagementController::class, 'verify_trade']);



//Purchase

Route::post('/buy_credits', [TradeManagementController::class, 'buy_credits']);
// Route::post()