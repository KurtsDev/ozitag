<?php

namespace App\Http\Controllers;

use App\Models\Ad;
use Illuminate\Http\Request;
use Symfony\Component\DomCrawler\Crawler;


class FrontController extends Controller
{

    public function index()
    {
        return view('index');
    }


}

