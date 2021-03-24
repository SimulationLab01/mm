<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MaterialsEntity extends Model
{
    protected $table = 'materials';
    protected $primaryKey = 'ID';

    public $timestamps = True;
    protected $guarded = ['ID'];

}
