<?php

namespace Database\Factories;

use App\Models\RecruitmentCandidate;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<RecruitmentCandidate>
 */
class RecruitmentCandidateFactory extends Factory
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
            'role' => fake()->randomElement(['Operator', 'Supervisor', 'Mechanic', 'HSE Officer']),
            'stage' => fake()->randomElement(['Interview', 'Technical test', 'Offer review', 'Background check']),
            'status' => fake()->randomElement(['Scheduled', 'In progress', 'Pending', 'On track']),
        ];
    }
}
