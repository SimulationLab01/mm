<?php

use Illuminate\Http\Request;
use App\Http\Controllers\Api\MaterialsController;


/*
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
*/


Route::prefix('materials')->group(function () {
    Route::get('/', 'MaterialsController@get_m_col_data');
    Route::get('/counts', 'MaterialsController@get_m_attr_count');
    Route::get('/typeList', 'MaterialsController@get_m_type_list');
    Route::get('/{id}', 'MaterialsController@get_one');
    Route::post('/create', 'MaterialsController@create_one');
});


// Route::post('materials', 'MaterialsController@store');
// Route::put('materials/{id}', 'MaterialsController@update');
// Route::delete('materials/{id}', 'MaterialsController@destroy');


Route::get('test', 'MaterialsController@test');
# ==> Route::apiResource('materials', 'MaterialsController');