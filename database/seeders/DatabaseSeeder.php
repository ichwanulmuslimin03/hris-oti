<?php

namespace Database\Seeders;

use App\Models\Attendance;
use App\Models\Employee;
use App\Models\Roster;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

        $employees = Employee::factory(12)->create();

        foreach ($employees as $employee) {
            $employee->attendances()->createMany([
                [
                    'site' => $employee->site,
                    'status' => 'Present',
                    'clock_in' => '06:05',
                    'type' => 'Clock-in',
                ],
                [
                    'site' => $employee->site,
                    'status' => 'Late',
                    'clock_in' => '07:18',
                    'type' => 'Field check',
                ],
            ]);

            $employee->rosters()->createMany([
                [
                    'day' => 'Mon',
                    'shift' => 'A Shift',
                    'crew' => 'Mining Crew 1',
                    'coverage' => '96%',
                    'status' => 'On track',
                ],
                [
                    'day' => 'Tue',
                    'shift' => 'B Shift',
                    'crew' => 'Mining Crew 2',
                    'coverage' => '94%',
                    'status' => 'Watchlist',
                ],
                [
                    'day' => 'Wed',
                    'shift' => 'C Shift',
                    'crew' => 'Maintenance',
                    'coverage' => '92%',
                    'status' => 'On track',
                ],
            ]);
        }
    }
}
