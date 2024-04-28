<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
#use App\Http\Controllers\Api\v1\DocumentController;
#use App\Http\Controllers\Api\v1\ColorProfileController;
use App\Http\Controllers\DocumentController;
use App\Http\Controllers\ColorProfileController;





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

Route::get('colorProfileDown', [ColorProfileController::class, 'show']);
Route::post('colorProfileUp', [ColorProfileController::class, 'store']);

Route::get('documentDown', [DocumentController::class, 'show']);
Route::post('documentUp', [DocumentController::class, 'store']);

/*Route::group(['prefix' => 'v1', 'namespace' => 'App\Http\Controllers\Api\v1'], function(){
    #Route::get('/colorProfile', [ColorProfileController::class, 'show']);
    Route::get('/document/{id}', [DocumentController::class, 'show']);
});*/
