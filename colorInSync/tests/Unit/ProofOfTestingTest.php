<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Models\User;
use App\Models\ColorProfile;
use Illuminate\Foundation\Testing\RefreshDatabase; 
use Illuminate\Foundation\Testing\DatabaseTransactions; 


class ProofOfTestingTest extends TestCase
{
    /**
     * A basic unit test example.
     */
    /** @test */
    public function hasColorProfileTest(): void
    {
        $testUser = new User();
        $this->assertTrue($testUser->colorProfile() == true);
    }
}
