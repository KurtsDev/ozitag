<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiController;


Route::get('/index', [ApiController::class, 'index']);
