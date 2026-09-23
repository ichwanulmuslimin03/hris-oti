<?php

namespace App\Http\Controllers;

use App\Models\RecruitmentCandidate;
use Inertia\Inertia;
use Inertia\Response;

class RecruitmentController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('recruitment', [
            'candidates' => RecruitmentCandidate::query()
                ->orderByDesc('created_at')
                ->get()
                ->map(fn($candidate) => [
                    'name' => $candidate->name,
                    'role' => $candidate->role,
                    'stage' => $candidate->stage,
                    'status' => $candidate->status,
                ])
                ->all(),
        ]);
    }
}
