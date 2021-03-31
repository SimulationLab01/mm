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
                    'sortable' => true,
                )
            ),
<<<<<<< HEAD
            'data' => array(
                array(
                    'id' => 1,
                    'name' => 'Item1',
                    'price' => '$1',
                    'status' => 1
                ),
                array(
                    'id' => 2,
                    'name' => 'Item2',
                    'price' => '$2',
                    'status' => 2
                )
            )
=======
            'data' => $data
>>>>>>> b3ebc86b3b9a5b5be5503111ea15c073c7f25378
        );

        return response()->json($get_m_cul, 200);
    } 

    public function get_m_attr_count()
    {
        $precious_m = MaterialsEntity::get_m_attr_count(1);
        $general_m = MaterialsEntity::get_m_attr_count(2);
        $consumables = MaterialsEntity::get_m_attr_count(3);

<<<<<<< HEAD
        return response()->json($get_m_cul, 200);
=======
        $data = array($precious_m, $general_m, $consumables);
>>>>>>> b3ebc86b3b9a5b5be5503111ea15c073c7f25378

        return response()->json(array('count'=>$data), 200);
    }
}

