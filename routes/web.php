<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/index','NewsController@index');

Route::get('/get_main','NewsController@get_main');

//Route::get('/ajax/get_form','FormController@get_form');

Route::get('/ajax/{name_view}', 'FormController@get_form');

Route::prefix('materials')->group(function () {
    // Route::get('/', 'api\MaterialsController@get_m_col_data');
    // Route::get('/counts', 'api\MaterialsController@get_m_attr_count');
    // Route::get('/typeList', 'api\MaterialsController@get_m_type_list');
    // Route::get('/{id}', 'api\MaterialsController@get_one');
    Route::get('/', 'MaterialsController@get_m_col_data');
    Route::get('/counts', 'MaterialsController@get_m_attr_count');
    Route::get('/typeList', 'MaterialsController@get_m_type_list');
    Route::get('/{id}', 'MaterialsController@get_one');
    
});