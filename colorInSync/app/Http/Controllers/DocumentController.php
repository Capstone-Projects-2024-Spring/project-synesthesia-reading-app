<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreDocumentRequest;
use App\Http\Requests\UpdateDocumentRequest;
use App\Http\Controllers\Controller;
use vendor\smalot\pdfParser;
use App\Models\Document;

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
        #Step 1: Validate request has pdf
        #Step 2: Extract text from pdf
        #Step 3: Retrieve color associations
        #Step 4: Send text + colors to flask
        #Step 5: Wait on response from flask
        #Step 6: Store colored page as string in database
        #Step 7: Send 201 created to frontend
        /*
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
        }*/
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

        return response()->json($staticJson);
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
