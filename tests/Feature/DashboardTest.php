<?php

use App\Models\Employee;
use App\Models\User;
use Inertia\Testing\AssertableInertia as Assert;

test('home page displays the mining hris landing experience', function () {
    $response = $this->get(route('home'));

    $response->assertOk()
        ->assertSee('Mining HRIS')
        ->assertSee('Workforce management untuk operasi tambang');
});

test('guests are redirected to the login page', function () {
    $response = $this->get(route('dashboard'));
    $response->assertRedirect(route('login'));
});

test('authenticated users can visit the dashboard', function () {
    $user = User::factory()->create();
    $this->actingAs($user);

    $response = $this->get(route('dashboard'));
    $response->assertOk();
});

test('employees page shows workforce and lifecycle overview', function () {
    $user = User::factory()->create();
    $this->actingAs($user);

    Employee::factory()->create([
        'name' => 'Budi Santoso',
        'department' => 'Mining',
        'position' => 'Operator',
        'site' => 'North Pit',
        'status' => 'Active',
    ]);

    $response = $this->get(route('employees'));

    $response->assertOk()
        ->assertSee('Employees')
        ->assertSee('Lifecycle')
        ->assertSee('Active employees')
        ->assertSee('Budi Santoso');
});

test('attendance and roster pages render operational workforce data', function () {
    $user = User::factory()->create();
    $this->actingAs($user);

    $employee = Employee::factory()->create([
        'name' => 'Budi Santoso',
        'department' => 'Mining',
        'position' => 'Operator',
        'site' => 'North Pit',
        'status' => 'Active',
    ]);

    $employee->attendances()->create([
        'site' => 'North Pit',
        'status' => 'Present',
        'clock_in' => '06:02',
        'type' => 'Clock-in',
    ]);

    $employee->rosters()->create([
        'day' => 'Mon',
        'shift' => 'A Shift',
        'crew' => 'Mining Crew 1',
        'coverage' => '96%',
        'status' => 'On track',
    ]);

    $attendance = $this->get(route('attendance'));
    $attendance->assertOk()
        ->assertInertia(fn(Assert $page) => $page
            ->component('attendance')
            ->where('attendanceToday.0.name', 'Budi Santoso')
            ->where('attendanceToday.0.status', 'Present'));

    $roster = $this->get(route('roster'));
    $roster->assertOk()
        ->assertInertia(fn(Assert $page) => $page
            ->component('roster')
            ->where('roster.0.shift', 'A Shift')
            ->where('roster.0.crew', 'Mining Crew 1'));
});

test('recruitment and onboarding pages show the hiring pipeline', function () {
    $user = User::factory()->create();
    $this->actingAs($user);

    \App\Models\RecruitmentCandidate::factory()->create([
        'name' => 'Ayu Lestari',
        'role' => 'Operator',
        'stage' => 'Interview',
        'status' => 'Scheduled',
    ]);

    $response = $this->get(route('recruitment'));
    $response->assertOk()
        ->assertInertia(fn(Assert $page) => $page
            ->component('recruitment')
            ->where('candidates.0.name', 'Ayu Lestari')
            ->where('candidates.0.status', 'Scheduled'));

    $onboarding = $this->get(route('onboarding'));
    $onboarding->assertOk()
        ->assertInertia(fn(Assert $page) => $page->component('onboarding'));
});

test('dashboard displays workforce overview for the mining hris', function () {
    $user = User::factory()->create();
    $this->actingAs($user);

    $response = $this->get(route('dashboard'));

    $response->assertOk()
        ->assertSee('Workforce Overview')
        ->assertSee('Attendance Rate')
        ->assertSee('Compliance Status');
});
