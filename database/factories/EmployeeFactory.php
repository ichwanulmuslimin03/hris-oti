<?php

namespace Database\Factories;

use App\Models\Employee;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Employee>
 */
class EmployeeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'department' => fake()->randomElement(['Mining', 'HSE', 'Maintenance', 'HR']),
            'position' => fake()->randomElement(['Operator', 'Supervisor', 'Technician', 'Officer']),
            'site' => fake()->randomElement(['North Pit', 'Site B', 'Maintenance Yard', 'Head Office']),
            'status' => fake()->randomElement(['Active', 'Probation']),
        ];
    }
}
