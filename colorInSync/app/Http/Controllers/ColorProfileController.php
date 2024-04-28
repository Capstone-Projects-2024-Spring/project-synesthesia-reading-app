<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreColorProfileRequest;
use App\Http\Requests\UpdateColorProfileRequest;
use App\Http\Controllers\Controller;
use App\Models\ColorProfile;

class ColorProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return ColorProfile::all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreColorProfileRequest $request)
    {
        $this->validate($request,[
            'letter_colors' => ['required']
        ]); #validate the request
        $colorProfile = ColorProfile::create([
            'user_id' => 1,
            'letter_colors' => $request->letter_colors
        ]);#create new colorProfile
        return response()->json('CREATED',201);#201 response code
    }

    /**
     * Display the specified resource.
     */
    public function show(ColorProfile $colorProfile)
    {
        return [];
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ColorProfile $colorProfile)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateColorProfileRequest $request, ColorProfile $colorProfile)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ColorProfile $colorProfile)
    {
        //
    }
}
