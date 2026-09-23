<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RecruitmentCandidate extends Model
{
    /** @use HasFactory<\Database\Factories\RecruitmentCandidateFactory> */
    use HasFactory;

    protected $fillable = [
        'name',
        'role',
        'stage',
        'status',
    ];
}
