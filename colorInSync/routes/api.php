<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DocumentController;

Route::get('/document/{id}', [DocumentController::class, 'getPageData']);



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
    Route::get('/document/{id}', [DocumentController::class, 'getPageData']);
});

// Route for serving the static JSON
Route::get('/static-json', function () {
    return response()->json([
        'status' => 'success',
        'data' => [
            'message' => 'This is a static JSON response.'
        ]
    ]);
});
