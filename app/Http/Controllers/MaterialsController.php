<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\MaterialsEntity;
use App\Models\M_TypeEntity;
use App\Models\M_CheckEntity;
use App\Models\M_AttrEntity;
use App\Models\M_StatusEntity;


class MaterialsController extends Controller
{
    public function get_all()
    {
        // return response()->json(MaterialsEntity::all(), 200);
        return MaterialsEntity::all();
    }

    public function get_one($id)
    {
        return response()->json(MaterialsEntity::find($id), 200);
    }

    public function create_one(Request $request)
    {
        echo(json_encode($request->all()));
        $mInfo = MaterialsEntity::create($request->all());

        return response()->json($mInfo, 201);
    }

    public function update_one(Request $request, $id)
    {
        $mInfo = MaterialsEntity::findOrFail($id);
        $mInfo->update($request->all());

        return response()->json($mInfo, 200);
    }

    public function delete_one($id)
    {
        MaterialsEntity::find($id)->delete();

        return response()->json(null, 204);
    }


    //// ====more than basic CRUD==== ////
    public function get_m_col_data()
    {
        $data = MaterialsEntity::get_m_col_data();
        // $data = MaterialsController::get_all();
        $get_m_cul = array(
            'columns' => array(
                array(
                    'field' => 'ID',
                    'title' => '編號',
                    'sortable' => true
                ),
                array(
                    'field' => 'ATTRIBUTE',
                    'title' => '屬性',
                    'sortable' => true
                ),
                array(
                    'field' => 'NAME',
                    'title' => '名稱',
                    'sortable' => true
                ),
                array(
                    'field' => 'TYPE_NAME',
                    'title' => '分類',
                    'sortable' => true
                ),
                array(
                    'field' => 'PLACE',
                    'title' => '位置',
                    'sortable' => true
                ),
                array(
                    'field' => 'SPEC',
                    'title' => '規格',
                    'sortable' => true
                ),array(
                    'field' => 'updated_at',
                    'title' => '更新時間',
                    'sortable' => true
                ),
                array(
                    'field' => 'STATUS',
                    'title' => '使用狀態',
                    'sortable' => true,
                )
            ),
            'data' => $data
        );

        return response()->json($get_m_cul, 200);
    } 

    public function get_m_attr_count()
    {
        $precious_m = MaterialsEntity::get_m_attr_count(MaterialsEntity::ATTR_PRECIOUS);
        $general_m = MaterialsEntity::get_m_attr_count(MaterialsEntity::ATTR_GENERAL);
        $consumables = MaterialsEntity::get_m_attr_count(MaterialsEntity::ATTR_CONSUMABLE);

        $data = array($precious_m, $general_m, $consumables);

        return response()->json(array('count'=>$data), 200);
        //return response()->json(config('constant.TEST'),200);
    }

    public function get_m_type_list()
    {
        $arr = array("type" => M_TypeEntity::all(),
                     "check"=> M_CheckEntity::all(),
                     "attr" => M_AttrEntity::all(),
                     "status" => M_StatusEntity::all());
        return response()->json($arr, 200);
    }

}