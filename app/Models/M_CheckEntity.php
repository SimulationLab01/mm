<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class M_CheckEntity extends Model
{
    protected $table = 'm_check';
    protected $primaryKey = 'ID';

    public function materials()
    {
        return $this->hasMany("App/Models/MaterialsEntity");
    }
}
