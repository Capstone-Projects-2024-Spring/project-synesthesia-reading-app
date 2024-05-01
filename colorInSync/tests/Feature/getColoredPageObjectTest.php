<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Http\Controllers\DocumentController as DocumentController;


class getColoredPageObjectTest extends TestCase
{
    /**
     * A basic feature test example.
     */

     
     
    public function test_contacts_flask(): void
    {
        $controller = new DocumentController;
        $document = "Nevertheless, the angelic being persevered.";
        $response = $controller->show($document);

        $response->assertStatus(200);
    }
}
