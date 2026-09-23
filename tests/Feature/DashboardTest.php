<?php

use App\Models\User;

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

    $response = $this->get(route('employees'));

    $response->assertOk()
        ->assertSee('Employees')
        ->assertSee('Lifecycle')
        ->assertSee('Active employees');
});

test('recruitment and onboarding pages show the hiring pipeline', function () {
    $user = User::factory()->create();
    $this->actingAs($user);

    $response = $this->get(route('recruitment'));
    $response->assertOk()
        ->assertSee('Recruitment')
        ->assertSee('Candidate pipeline');

    $onboarding = $this->get(route('onboarding'));
    $onboarding->assertOk()
        ->assertSee('Onboarding')
        ->assertSee('Employee readiness');
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
