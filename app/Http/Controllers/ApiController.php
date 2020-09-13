<?php

namespace App\Http\Controllers;

use App\Models\Ad;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function index(Request $request)
    {
        $filterJSON = $request->get('filter');
        $filter = json_decode($filterJSON);


        return Ad::query()
            ->when($filter->room !== '', function ($query) use ($filter) {
                return $query->where('rooms', $filter->room);
            })
            ->when($filter->costMin !== '', function ($query) use ($filter) {
                return $query->where('cost', '>=', $filter->costMin);
            })
            ->when($filter->costMax !== '', function ($query) use ($filter) {
                return $query->where('cost', '<=', $filter->costMax);
            })
            ->get();
    }
}
