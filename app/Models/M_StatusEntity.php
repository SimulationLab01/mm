<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class M_StatusEntity extends Model
{
    protected $table = 'm_status';
    protected $primaryKey = 'ID';

    public function materials()
    {
        return $this->hasMany("App/Models/MaterialsEntity");
    }
}
