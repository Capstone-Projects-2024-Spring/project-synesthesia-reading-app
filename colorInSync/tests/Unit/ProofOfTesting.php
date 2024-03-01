<?php

namespace Tests\Unit;

use PHPUnit\Framework\TestCase;

class ProofOfTesting extends TestCase
{
    /**
     * A basic unit test example.
     */
    public function hasColorProfile(): void
    {
        $testUser = new User();
        $this->assertTrue($testUser->has(ColorProfile::class));
    }
}
