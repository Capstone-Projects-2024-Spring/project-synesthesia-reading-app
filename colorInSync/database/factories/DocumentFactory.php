<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Document>
 */
class DocumentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'id'=>$this->faker->random_int(),
            'user_id'=>$this->faker->random_int(),
            'file_name'=>$this->faker->file(),
            'file_size'=>$this->faker->random_int(),
            'pages'=> $this->faker->random_int(),
            'time_created'=>$this->faker->timestamps(),
            'last_modified'=>$this->faker->timestamps(),
        ];
    }
}
