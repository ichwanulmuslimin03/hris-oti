<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Roster extends Model
{
    /** @use HasFactory<\Database\Factories\RosterFactory> */
    use HasFactory;

    protected $fillable = [
        'employee_id',
        'day',
        'shift',
        'crew',
        'coverage',
        'status',
    ];

    public function employee()
    {
        return $this->belongsTo(Employee::class);
    }
}
