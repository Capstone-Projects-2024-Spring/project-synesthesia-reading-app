<?php

namespace Tests\Feature;

use App\Models\Document;
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
        $correctResponse = '{"words": ["Never", "the", "less", ",", " ", "the", " ", "angelic", " ", "being", " ", "persevered", "."], "word_color_map": ';
        
        #$requestBody = '{' . $colorProfile . ', "text": "' . $text . '"}';
        
        $controller = new DocumentController;
        $response = $controller->show(1);
        $this->assertIsString($response, $message= $response);
        
    }
}
