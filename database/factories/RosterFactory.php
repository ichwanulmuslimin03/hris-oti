<?php

namespace Database\Factories;

use App\Models\Roster;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Roster>
 */
class RosterFactory extends Factory
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
            'day' => fake()->randomElement(['Mon', 'Tue', 'Wed', 'Thu', 'Fri']),
            'shift' => fake()->randomElement(['A Shift', 'B Shift', 'C Shift']),
            'crew' => fake()->randomElement(['Mining Crew 1', 'Mining Crew 2', 'Processing', 'Maintenance']),
            'coverage' => fake()->randomElement(['90%', '92%', '94%', '96%', '98%']),
            'status' => fake()->randomElement(['On track', 'Watchlist', 'Risk']),
        ];
    }
}
