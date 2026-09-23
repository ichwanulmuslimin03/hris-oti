<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Inertia\Inertia;
use Inertia\Response;

class RosterController extends Controller
{
  public function index(): Response
  {
    $roster = Employee::with('rosters')->get()->flatMap(function (Employee $employee) {
      return $employee->rosters->map(function ($entry) use ($employee) {
        return [
          'day' => $entry->day,
          'shift' => $entry->shift,
          'crew' => $entry->crew,
          'coverage' => $entry->coverage,
          'status' => $entry->status,
          'employee_name' => $employee->name,
        ];
      });
    })->values()->all();

    return Inertia::render('roster', [
      'roster' => $roster,
    ]);
  }
}
