<?php

namespace App\Http\Controllers\api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\MaterialsEntity;


class MaterialsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(MaterialsEntity::all(), 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $mInfo = MaterialsEntity::create($request->all());
        return response()->json($mInfo, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return response()->json(MaterialsEntity::find($id), 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $mInfo = MaterialsEntity::findOrFail($id);
        $mInfo->update($request->all());

        return response()->json($mInfo, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        MaterialsEntity::find($id)->delete();

        return response()->json(null, 204);
    }



    public function get_m_col_data()
    {
        $data = MaterialsEntity::get_m_col_data();
        $get_m_cul = array(
            'columns' => array(
                array(
                    'field' => 'id',
                    'title' => '編號',
                    'sortable' => true
                ),
                array(
                    'field' => 'attribute',
                    'title' => '屬性',
                    'sortable' => true
                ),
                array(
                    'field' => 'name',
                    'title' => '名稱',
                    'sortable' => true
                ),
                array(
                    'field' => 'type',
                    'title' => '分類',
                    'sortable' => true
                ),
                array(
                    'field' => 'place',
                    'title' => '位置',
                    'sortable' => true
                ),
                array(
                    'field' => 'spec',
                    'title' => '規格',
                    'sortable' => true
                ),array(
                    'field' => 'buildTime',
                    'title' => '建立時間',
                    'sortable' => true
                ),
                array(
                    'field' => 'status',
                    'title' => '使用狀態',
                    'sortable' => true
                )
            ),
            'data' => $data
        );

        return response()->json($get_m_cul, 200);
    } 
}

