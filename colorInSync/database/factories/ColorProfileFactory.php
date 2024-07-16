<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ColorProfile>
 */
class ColorProfileFactory extends Factory
{
    const lettersNums = array('A','B','C','D','E','F','G','H','I',
        'J','K','L','M','N','O','P','Q','R','S','T','U','V',
    'W','X','Y','Z','1','2','3','4','4','5','6','7','8','9','0');
    const hexCodes = array("AABBCC", "009900", "112233", "696969", "123456", "ABCDEF", "FFCC00");
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $id = $this->faker->random_int();
        $user_id = $this->faker->random_int();
        $letter_colors = $this->map(faker->randomElement(lettersNums),faker->randomElement(hexCodes));
        return [
            'id'=> $id,
            'user_id'=>$user_id,
            'letter_colors'=>$letter_colors,
            'created_at'=>$this->faker->timestamps(),
            'updated_at'=>$this->faker->timestamps(),

        ];
    }
}
