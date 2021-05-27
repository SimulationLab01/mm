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

// Route::get('/ajax/get_form','FormController@get_form');

Route::get('/ajax/{name_view}', 'FormController@get_form');
