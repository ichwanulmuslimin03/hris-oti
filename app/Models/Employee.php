<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    /** @use HasFactory<\Database\Factories\EmployeeFactory> */
    use HasFactory;

    protected $fillable = [
        'name',
        'department',
        'position',
        'site',
        'status',
    ];

    public function attendances()
    {
        return $this->hasMany(Attendance::class);
    }

    public function rosters()
    {
        return $this->hasMany(Roster::class);
    }
}
