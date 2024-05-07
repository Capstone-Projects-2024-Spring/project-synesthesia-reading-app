<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreDocumentRequest;
use App\Http\Requests\UpdateDocumentRequest;
use App\Http\Controllers\Controller;
use Smalot\PdfParser\Parser;
use App\Models\Document;
use Illuminate\Validation\ValidationException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Http;
use App\Http\Models\ColorProfile;
use App\Http\Controllers\ColorProfileController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Log;



class DocumentController extends Controller
{

    private $uploadedDocument;
    
    


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
        Log::debug($request->all());
        Log::debug($request->file('document'));
        $validatedData = $request->validate([
            'document' => 'required|file|mimes:pdf|max:2048', // Adjust file size and types as needed
            'user_id' => 'required'
        ]);

        if ($request->hasFile('document')) {
            $file = $request->file('document');

            // Store the uploaded file
            $filePath = $file->store('pdfs');

            // Extract text content from the PDF
            $textContent = $this->extractTextFromPDF(storage_path('app/' . $filePath));

            $user_id = $request->user_id;

            // Create the document
            $document = Document::create([
                'user_id' => $user_id,
                'content' => $textContent
                
            ]);

            return response()->json(['document_id' => $document->id],201);
        }

        throw ValidationException::withMessages(['file' => 'File not provided or invalid']);

    }
    private function extractTextFromPDF($filePath)
    {
        $parser = new Parser();
        $pdf = $parser->parseFile($filePath);

        // Get all pages from the PDF
        $pages = $pdf->getPages();

        $textContent = '';

        // Extract text content from each page
        foreach ($pages as $page) {
            $textContent .= $page->getText();
        }

        return $textContent;
    }

    /**
     * Display the specified document.
     */
        

    public function show(Request $request, string $id)
    {
        
       $document = Document::find($id);

        if (!$document) {
            return response()->json(['error' => 'Document not found'], 404);
        }

        $text = $document->content;


        #$text = "Nevertheless, the angelic being persevered.";

        #Internal API call to colorProfile
        $cpRequest = Request::create('/api/color-profile', 'GET');
        $cpResponse = Route::dispatch($cpRequest);
        #$cpJson = json_encode($cpResponse->content());

        Log::info('newer_logs');
        #Log::debug($cpJson);
        #Log::debug($cpResponse[0]);
        Log::debug($cpResponse->content());
        #Log::debug(json_decode($cpJson[0]->grapheme));
        #Log::debug(json_decode($cpJson[0]->color));
        
        $colorProfile = new \stdClass();
        ${'grapheme-color map'} = new \stdClass();
        ${'grapheme-color map'}->A = "rgb(230,16,16)";
        ${'grapheme-color map'}->B = "rgb(29,26,214)";
        ${'grapheme-color map'}->C = "rgb(250,247,65)";
        ${'grapheme-color map'}->D = "rgb(250,247,65)";
        ${'grapheme-color map'}->E = "rgb(250,247,65)";
        ${'grapheme-color map'}->F = "rgb(250,247,65)";
        ${'grapheme-color map'}->G = "rgb(250,247,65)";
        ${'grapheme-color map'}->H = "rgb(250,247,65)";
        ${'grapheme-color map'}->I = "rgb(250,247,65)";
        ${'grapheme-color map'}->J = "rgb(250,247,65)";
        ${'grapheme-color map'}->K = "rgb(250,247,65)";
        ${'grapheme-color map'}->L = "rgb(250,247,65)";
        ${'grapheme-color map'}->M = "rgb(250,247,65)";
        ${'grapheme-color map'}->N = "rgb(250,247,65)";
        ${'grapheme-color map'}->O = "rgb(250,247,65)";
        ${'grapheme-color map'}->P = "rgb(250,247,65)";
        ${'grapheme-color map'}->Q = "rgb(250,247,65)";
        ${'grapheme-color map'}->R = "rgb(250,247,65)";
        ${'grapheme-color map'}->S = "rgb(250,247,65)";
        ${'grapheme-color map'}->T = "rgb(250,247,65)";
        ${'grapheme-color map'}->U = "rgb(250,247,65)";
        ${'grapheme-color map'}->V = "rgb(250,247,65)";
        ${'grapheme-color map'}->W = "rgb(250,247,65)";
        ${'grapheme-color map'}->X = "rgb(250,247,65)";
        ${'grapheme-color map'}->Y = "rgb(250,247,65)";
        ${'grapheme-color map'}->Z = "rgb(250,247,65)";
        
        ${'exceptions-color map'} = new \stdClass();
        ${'exceptions-color map'}->angelic = "rgb(250,250,250)";

        $colorProfile->{'grapheme-color map'} = ${'grapheme-color map'};
        $colorProfile->{'exceptions-color map'} = ${'exceptions-color map'};
        
   

        $object = new \stdClass();
        $object->{'color-profile'} = $colorProfile;
        $object->text = $text;
        $requestBody = json_encode($object);

        Log::debug($requestBody);

        #$requestBody = '{' . $colorProfile . ', "text": "' . $text . '"}';

        

        $response = Http::withBody($requestBody)->get('http://127.0.0.1:5000/');
        $coloredPageObject = $response->body();

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
