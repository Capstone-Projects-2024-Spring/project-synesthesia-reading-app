<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreDocumentRequest;
use App\Http\Requests\UpdateDocumentRequest;
use App\Http\Controllers\Controller;
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
        return [];
        //return view('documents.show', compact('document'));
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
