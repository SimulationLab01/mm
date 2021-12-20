<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use DB;

class MaterialsEntity extends Model
{
    protected $table = 'materials';
    protected $primaryKey = 'ID';
    protected $guarded = ['ID'];

    public $timestamps = true;
    use SoftDeletes; //https://laravel.tw/docs/5.0/eloquent
    protected $dates = ['deleted_at'];

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


    public static function get_m_col_data()
    {
        return $data = DB::table('materials')
                        //->join('m_attribute', 'materials.ATTRIBUTE', '=', 'm_attribute.ID')
                        ->join('m_type', 'materials.TYPE', '=', 'm_type.ID')
                        //->join('m_status', 'materials.STATUS', '=', 'm_status.ID')
                        ->select('materials.ID', 
                                //'m_attribute.ATTRIBUTE_NAME',
                                'materials.ATTRIBUTE', 
                                'materials.NAME',
                                'm_type.TYPE_NAME', 
                                //'materials.TYPE', 
                                'materials.PLACE', 
                                'materials.SPEC',
                                'materials.updated_at',
                                DB::raw("DATE_FORMAT(materials.updated_at, '%Y-%m-%d') as updated_at"), 
                                //'m_status.STATUS_NAME',
                                'materials.STATUS')
                        ->orderBy('materials.ID')
                        ->whereNull('deleted_at')
                        ->get();
    }

    public static function get_m_attr_count($attr_id)
    {
        $m_attr_items = DB::table('materials')
                        ->where('ATTRIBUTE', '=', $attr_id)
                        ->whereNull('deleted_at')
                        ->get();

        return count($m_attr_items);
    }
    
}