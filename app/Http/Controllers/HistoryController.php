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
        // $data = MaterialsController::get_all();
        // $get_h_cul = array(
        //     'columns' => array(
        //         array(
        //             'field' => 'ID',
        //             'title' => '編號',
        //             'sortable' => true
        //         ),
        //         array(
        //             'field' => 'ATTRIBUTE',
        //             'title' => '屬性',
        //             'sortable' => true
        //         ),
        //         array(
        //             'field' => 'NAME',
        //             'title' => '名稱',
        //             'sortable' => true
        //         ),
        //         array(
        //             'field' => 'TYPE_NAME',
        //             'title' => '分類',
        //             'sortable' => true
        //         ),
        //         array(
        //             'field' => 'PLACE',
        //             'title' => '位置',
        //             'sortable' => true
        //         ),
        //         array(
        //             'field' => 'SPEC',
        //             'title' => '規格',
        //             'sortable' => true
        //         ),array(
        //             'field' => 'updated_at',
        //             'title' => '更新時間',
        //             'sortable' => true
        //         ),
        //     ),
        //     'data' => $data
        // );

        return response()->json($data, 200);
    } 
}
