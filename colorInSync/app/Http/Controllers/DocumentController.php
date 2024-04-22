<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreDocumentRequest;
use App\Http\Requests\UpdateDocumentRequest;
use App\Models\Document;

class DocumentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new document.
     */
    public function create()
    {
        //
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
            $document->content = $text; // Assuming there is a 'content' field in your documents table
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
        //
    }

    /**
     * Show the form for editing the specified document.
     */
    public function edit(Document $document)
    {
        //
    }

    /**
     * Update the specified document in storage.
     */
    public function update(UpdateDocumentRequest $request, Document $document)
    {
        //
    }

    /**
     * Remove the specified document from storage.
     */
    public function destroy(Document $document)
    {
        //
    }
}
