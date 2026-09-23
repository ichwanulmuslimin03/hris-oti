<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
    Route::inertia('attendance', 'attendance')->name('attendance');
    Route::inertia('roster', 'roster')->name('roster');
    Route::inertia('payroll', 'payroll')->name('payroll');
    Route::inertia('compliance', 'compliance')->name('compliance');
    Route::inertia('employees', 'employees')->name('employees');
    Route::inertia('recruitment', 'recruitment')->name('recruitment');
    Route::inertia('onboarding', 'onboarding')->name('onboarding');
    Route::inertia('leave', 'leave')->name('leave');
    Route::inertia('overtime', 'overtime')->name('overtime');
    Route::inertia('performance', 'performance')->name('performance');
});

require __DIR__ . '/settings.php';
