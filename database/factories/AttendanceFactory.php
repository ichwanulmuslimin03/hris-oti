<?php

namespace Database\Factories;

use App\Models\Attendance;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Attendance>
 */
class AttendanceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'employee_id' => \App\Models\Employee::factory(),
            'site' => fake()->randomElement(['North Pit', 'Processing', 'Maintenance', 'Camp Support']),
            'status' => fake()->randomElement(['Present', 'Late', 'On Duty', 'Absent']),
            'clock_in' => fake()->time('H:i'),
            'type' => fake()->randomElement(['Clock-in', 'Field check', 'Leave']),
        ];
    }
}
