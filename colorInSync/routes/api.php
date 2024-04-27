<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use app\Http\Controllers\DocumentController;
use app\Http\Controllers\ColorProfileController;





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

Route::get('colorProfile', [ColorProfileController::class, 'show']);
Route::get('/document/{id}', [DocumentController::class, 'show']);

#Route::group(['prefix' => 'v1', 'namespace' => 'app\Http\Controllers\Api\v1'], function(){
#   Route::get('colorProfile', [ColorProfileController::class, 'show']);
#   Route::get('/document/{id}', [DocumentController::class, 'show']);
#});
