<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreDocumentRequest;
use App\Http\Requests\UpdateDocumentRequest;
use App\Http\Controllers\Controller;
use vendor\smalot\pdfParser;
use App\Models\Document;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class DocumentController extends Controller
{
    /**
     * Display a listing of the document.
     */
    public function index()
    {
        $documents = Document::all();
        return view('documents.index', compact('documents'));
    }

    /**
     * Show the form for creating a new document.
     */
    public function create()
    {
        return view('documents.create');
    }

    /**
     * Store a newly created document in storage.
     */
    public function store(StoreDocumentRequest $request)
    {
        //
        if ($request->hasFile('pdf') && $request->file('pdf')->isValid()) {
            $parser = new Parser();
            $pdf = $parser->parseFile($request->file('pdf')->path());
            $text = $pdf->getText();
    
            $document = new Document();
            $document->content = $text; 
            $document->save();
    
            return redirect()->route('documents.show', $document->id);
        } else {
            Log::error('File upload failed or no file uploaded.');
            return back()->withErrors('File upload failed or no file uploaded.');
        }
    }

    /**
     * Display the specified document.
     */
    public function show(Document $document)
    {
        $staticJson = [
            "words" => ["The ", "over", "weight ", "red ", "fox ", "jumped ", "over ", "the ", "sleeping ", "brown ", "dog", "."],
            "word_color_map" => [
                "jumped " => "rgb(255,227,46)",
                "over " => "rgb(97,186,250)",
                "The " => "rgb(255,246,69)",
                "fox " => "rgb(227,16,16)",
                "dog" => "rgb(5,29,153)",
                "brown " => "rgb(29,26,214)",
                "red " => "rgb(145,67,230)",
                "weight " => "rgb(8,39,196)",
                "the " => "rgb(255,246,69)",
                "over" => "rgb(97,186,250)",
                "." => "rgb(0,0,0)",
                "sleeping " => "rgb(255,252,69)"
            ]
        ];

        $pageInfoJson = [
            "color-profile" => [
                "grapheme-color map" => [
                    "A"=> "rgb(230,16,16)",
                    "B"=> "rgb(29,26,214)",
                    "C"=> "rgb(250,247,65)",
                    "D"=> "rgb(5,29,153)",
                    "E"=> "rgb(11,176,16)",
                    "F"=> "rgb(227,16,16)",
                    "G"=> "rgb(16,163,21)",
                    "H"=> "rgb(255,239,15)",
                    "I"=> "rgb(216,242,242)",
                    "J"=> "rgb(255,227,46)",
                    "K"=> "rgb(255,248,33)",
                    "L"=> "rgb(245,29,29)",
                    "M"=> "rgb(252,10,10)",
                    "N"=> "rgb(71,4,148)",
                    "O"=> "rgb(97,186,250)",
                    "P"=> "rgb(250,240,50)",
                    "Q"=> "rgb(170,197,242)",
                    "R"=> "rgb(145,67,230)",
                    "S"=> "rgb(255,252,69)",
                    "T"=> "rgb(255,246,69)",
                    "U"=> "rgb(46,162,230)",
                    "V"=> "rgb(198,200,247)",
                    "W"=> "rgb(8,39,196)",
                    "X"=> "rgb(80,80,82)",
                    "Y"=> "rgb(255,242,0)",
                    "Z"=> "rgb(197,228,232)"
                ],
                "exceptions-color map" => ["angelic" => "rgb(250,250,250)"]
            ],
            "text" => "Nevertheless, the angelic being persevered."
            
        ];

        $response = Http::get('http://127.0.0.1:5000' . $pageInfoJson);
        $coloredPageObject = $response->json();

        return $coloredPageObject;
    }

    /**
     * Show the form for editing the specified document.
     */
    public function edit(Document $document)
    {
        return view('documents.edit', compact('document'));
    }

    /**
     * Update the specified document in storage.
     */
    public function update(UpdateDocumentRequest $request, Document $document)
    {
        if ($request->has('content')) {
            $document->content = $request->input('content');
            $document->save();
            return redirect()->route('documents.show', $document->id);
        } else {
            return back()->withErrors('No changes detected.');
        }
    }

    /**
     * Remove the specified document from storage.
     */
    public function destroy(Document $document)
    {
        $document->delete();
        return redirect()->route('documents.index');
    }
}
