<?php

namespace App\Http\Controllers;

use App\Models\Ad;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function index()
    {
        return Ad::all();
    }
}
