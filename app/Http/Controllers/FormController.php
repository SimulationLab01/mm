<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FormController extends Controller
{
    public function get_form()
    {
    	//$filter = $_GET['href'];
        // $view = DB::table('property_details')
        // ->where('sale_or_rent', 'LIKE', '%' . $filter . '%')
        // ->get();
        // return Response::json($view);
        return response()->json([
                    'name' => 'test',
                    'state' => 'CA',
                ]);
    	//return return View::make('ajax.get_form')->render();
    }
}
