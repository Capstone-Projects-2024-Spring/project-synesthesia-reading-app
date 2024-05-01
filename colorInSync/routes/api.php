<?php

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
#use App\Http\Controllers\Api\v1\DocumentController;
#use App\Http\Controllers\Api\v1\ColorProfileController;
use App\Http\Controllers\DocumentController;
use App\Http\Controllers\ColorProfileController;



Route::post('/documents',[DocumentController::class, 'store']);


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

Route::get('color-profile', [ColorProfileController::class, 'show']);
//Route::middleware('auth:sanctum')->post('color-profile', [ColorProfileController::class, 'store']);
Route::post('color-profile', [ColorProfileController::class, 'store']);

Route::get('document', [DocumentController::class, 'show']);
Route::post('document', [DocumentController::class, 'store']);

/*Route::group(['prefix' => 'v1', 'namespace' => 'App\Http\Controllers\Api\v1'], function(){
    #Route::get('/colorProfile', [ColorProfileController::class, 'show']);
    Route::get('/document/{id}', [DocumentController::class, 'show']);
});*/
