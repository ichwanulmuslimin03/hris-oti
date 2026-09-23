<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Inertia\Inertia;
use Inertia\Response;

class AttendanceController extends Controller
{
  public function index(): Response
  {
    $attendanceToday = Employee::with('attendances')->get()->map(function (Employee $employee) {
      $latestAttendance = $employee->attendances()->latest()->first();

      return [
        'name' => $employee->name,
        'site' => $latestAttendance?->site ?? $employee->site,
        'status' => $latestAttendance?->status ?? 'Absent',
        'time' => $latestAttendance?->clock_in ?? '-',
        'type' => $latestAttendance?->type ?? 'No record',
      ];
    })->all();

    $counts = [
      'Present' => collect($attendanceToday)->where('status', 'Present')->count(),
      'Late' => collect($attendanceToday)->where('status', 'Late')->count(),
      'Absent' => collect($attendanceToday)->where('status', 'Absent')->count(),
      'Leave' => collect($attendanceToday)->where('status', 'Leave')->count(),
    ];

    $stats = [
      ['label' => 'Present', 'value' => (string) $counts['Present'], 'tone' => 'bg-emerald-500'],
      ['label' => 'Late', 'value' => (string) $counts['Late'], 'tone' => 'bg-amber-500'],
      ['label' => 'Absent', 'value' => (string) $counts['Absent'], 'tone' => 'bg-rose-500'],
      ['label' => 'Leave', 'value' => (string) $counts['Leave'], 'tone' => 'bg-sky-500'],
    ];

    return Inertia::render('attendance', [
      'attendanceToday' => $attendanceToday,
      'stats' => $stats,
    ]);
  }
}
