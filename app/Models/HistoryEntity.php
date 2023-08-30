<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use DB;

class HistoryEntity extends Model
{
    protected $table = 'm_history';
    public $primaryKey = 'ID';

    public static function get_h_col_data($id)
    {
        return $data = DB::table('m_history')
                        //->join('m_attribute', 'materials.ATTRIBUTE', '=', 'm_attribute.ID')
                        ->join('m_event', 'm_history.EVENT', '=', 'm_event.ID')
                        //->join('m_status', 'materials.STATUS', '=', 'm_status.ID')
                        ->select('m_history.ID', 
                                //'m_attribute.ATTRIBUTE_NAME',
                                'm_history.M_ID', 
                                'm_history.EVENT',
                                'm_event.EVENT',
                                'm_history.WHO', 
                                //'materials.TYPE', 
                                'm_history.PURPOSE', 
                                'm_history.updated_at',
                                DB::raw("DATE_FORMAT(m_history.updated_at, '%Y-%m-%d %H:%m') as updated_at")
                                )
                        ->where('M_ID',$id)
                        ->orderBy('m_history.updated_at','desc')
                        ->get();
    }
}
