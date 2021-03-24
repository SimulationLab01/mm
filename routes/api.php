<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('materials', 'api\MaterialsController@index');
Route::get('materials/{id}', 'api\MaterialsController@show');
Route::post('materials', 'api\MaterialsController@store');
Route::put('materials/{id}', 'api\MaterialsController@update');
Route::delete('materials/{id}', 'api\MaterialsController@destroy');
# ==> Route::apiResource('materials', 'api\MaterialsController');
