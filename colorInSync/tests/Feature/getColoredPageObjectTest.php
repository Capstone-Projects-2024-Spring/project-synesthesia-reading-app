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
        $colorProfile = '"color-profile": {
            "grapheme-color map": {
                "A": "rgb(230,16,16)",
                "B": "rgb(29,26,214)",
                "C": "rgb(250,247,65)",
                "D": "rgb(5,29,153)",
                "E": "rgb(11,176,16)",
                "F": "rgb(227,16,16)",
                "G": "rgb(16,163,21)",
                "H": "rgb(255,239,15)",
                "I": "rgb(216,242,242)",
                "J": "rgb(255,227,46)",
                "K": "rgb(255,248,33)",
                "L": "rgb(245,29,29)",
                "M": "rgb(252,10,10)",
                "N": "rgb(71,4,148)",
                "O": "rgb(97,186,250)",
                "P": "rgb(250,240,50)",
                "Q": "rgb(170,197,242)",
                "R": "rgb(145,67,230)",
                "S": "rgb(255,252,69)",
                "T": "rgb(255,246,69)",
                "U": "rgb(46,162,230)",
                "V": "rgb(198,200,247)",
                "W": "rgb(8,39,196)",
                "X": "rgb(80,80,82)",
                "Y": "rgb(255,242,0)",
                "Z": "rgb(197,228,232)"
            },
            "exceptions-color map": {"angelic": "rgb(250,250,250)"}
        }';
        $text = 'Nevertheless, the angelic being persevered.';
        $requestBody = '{' . $colorProfile . ', "text": "' . $text . '"}';
        $controller = new DocumentController;
        $document = new Document;
        $response = $controller->show($colorProfile, $text);
        $this->assertIsString($response, $message= $requestBody);
        
    }
}
