<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ColorProfile extends Model
{
    use HasFactory;

    protected $attributes = [
        'user_id' => -1,
        'letters' => '[]',
        'colors' => '[]'
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }
}
