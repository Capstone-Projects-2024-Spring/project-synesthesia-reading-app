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
        $correctResponse = '{"words": ["Never", "the", "less", ",", " ", "the", " ", "angelic", " ", "being", " ", "persevered", "."], "word_color_map": {"Never": "rgb(71,4,148)", "the": "rgb(255,246,69)", ",": "rgb(0,0,0)", " ": "rgb(0,0,0)", ".": "rgb(0,0,0)", "angelic": "rgb(250,250,250)", "being": "rgb(29,26,214)", "persevered": "rgb(250,240,50)", "less": "rgb(245,29,29)"}}';

        $controller = new DocumentController;
        $document = new Document;
        $response = $controller->show($document);
        $this->assertEquals($correctResponse, $response, $message= $response);
        
    }
}
