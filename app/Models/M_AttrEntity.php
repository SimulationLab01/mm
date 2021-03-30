<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class M_AttrEntity extends Model
{
    protected $table = 'm_attribute';
    protected $primaryKey = 'ID';

    public function materials()
    {
        return $this->hasMany("App/Models/MaterialsEntity");
    }
}
