<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use DB;

class MaterialsEntity extends Model
{
    protected $table = 'materials';
    protected $primaryKey = 'ID';

    public $timestamps = True;
    protected $guarded = ['ID'];


    //// constant ////
    public const ATTR_PRECIOUS = 1;
    public const ATTR_GENERAL = 2;
    public const ATTR_CONSUMABLE = 3;



    public function status()
    {
        return $this->belongsTo('App\Models\M_StatusEntity');
    }
    public function type()
    {
        return $this->belongsTo('App\Models\M_TypeEntity');
    }
    public function check()
    {
        return $this->belongsTo('App\Models\M_CheckEntity');
    }
    public function attribute()
    {
        return $this->belongsTo('App\Models\M_AttrEntity');
    }


    public static  function get_m_col_data()
    {
        return $data = DB::table('materials')
                        ->join('m_attribute', 'materials.ATTRIBUTE', '=', 'm_attribute.ID')
                        ->join('m_type', 'materials.TYPE', '=', 'm_type.ID')
                        ->join('m_status', 'materials.TYPE', '=', 'm_status.ID')
                        ->select('materials.ID', 
                                'm_attribute.ATTR_NAME', 
                                'materials.NAME',
                                'm_type.TYPE_NAME', 
                                'materials.PLACE', 
                                'materials.SPEC',
                                'materials.BUILD_DATE', 
                                'm_status.STATUS_NAME')
                        ->get();
    }

    public static function get_m_attr_count($attr_id)
    {
        $m_attr_items = DB::table('materials')
                        ->where('materials.ATTRIBUTE','=',$attr_id)
                        ->get();

        return count($m_attr_items);
    }
    
}
