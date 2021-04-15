<?php

use Illuminate\Http\Request;
use App\Http\Controllers\Api\MaterialsController;


/*
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
*/
Route::prefix('materials')->group(function () {
    Route::get('/', 'api\MaterialsController@get_m_col_data');
    Route::get('/counts', 'api\MaterialsController@get_m_attr_count');
    Route::get('/typeList', 'api\MaterialsController@get_m_type_list');
    Route::get('/{id}', 'api\MaterialsController@get_one');
    
});


// Route::post('materials', 'api\MaterialsController@store');
// Route::put('materials/{id}', 'api\MaterialsController@update');
// Route::delete('materials/{id}', 'api\MaterialsController@destroy');

Route::get('test', 'api\MaterialsController@test');
# ==> Route::apiResource('materials', 'api\MaterialsController');