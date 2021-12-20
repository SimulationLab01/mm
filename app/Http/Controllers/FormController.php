<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use View;

class FormController extends Controller
{
    public function get_form($name_view)
    {
    	//$filter = $_GET['href'];
    	$filter = $name_view;
        // $view = DB::table('property_details')
        // ->where('sale_or_rent', 'LIKE', '%' . $filter . '%')
        // ->get();
        // return Response::json($view);
        // return response()->json([
        //             'name' => $filter,
        //             'state' => 'CA',
        //         ]);
    	return View::make('ajax.'.$name_view)->render();
    	// return view('ajax.get_form');
    }
}
