<?php

namespace Tests\Unit;

use PHPUnit\Framework\TestCase;

class ProofOfTestingTest extends TestCase
{
    /**
     * A basic unit test example.
     */
    /** @test */
    public function hasColorProfileTest(): void
    {
        $testUser = new User();
        $this->assertTrue($testUser->has(ColorProfile::class));
    }
}
