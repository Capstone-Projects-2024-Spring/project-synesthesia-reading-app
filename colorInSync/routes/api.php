<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
#use App\Http\Controllers\Api\v1\DocumentController;
#use App\Http\Controllers\Api\v1\ColorProfileController;





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

Route::group(['prefix' => 'v1', 'namespace' => 'app\Http\Controllers\Api\v1'], function(){
    Route::apiResource('colorProfile', ColorProfileController::class);
    Route::get('/document/{id}', [DocumentController::class, 'show']);
});
