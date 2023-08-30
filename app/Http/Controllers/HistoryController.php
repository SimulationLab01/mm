<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\HistoryEntity;

class HistoryController extends Controller
{
    //
    public function get_all()
    {
        return HistoryEntity::all();
    }

    public function create_one_from_ctl($request)
    {
        $history = new HistoryEntity;

        $history->M_ID = $request['ID'];
        $history->EVENT = $request['EVENT'];
        $history->WHO = $request['WHO'];
        $history->PURPOSE = $request['PURPOSE'];

        $history->save();
    }

    public function get_h_col_data($id)
    {
        $data = HistoryEntity::get_h_col_data($id);
        return response()->json($data, 200);
    } 
}
