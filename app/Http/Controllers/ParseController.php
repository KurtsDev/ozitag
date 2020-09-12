<?php

namespace App\Http\Controllers;

use App\Models\Ad;
use Illuminate\Http\Request;
use Symfony\Component\DomCrawler\Crawler;


class ParseController extends Controller
{

    public function index()
    {
        Ad::truncate();

        //так как на главной странице нет поля с количесвом комнат, приходится парсить 4 страницы.
        $links = [
            'https://realt.by/rent/flat-for-day/1k',
            'https://realt.by/rent/flat-for-day/2k',
            'https://realt.by/rent/flat-for-day/3k',
            'https://realt.by/rent/flat-for-day/4k',
        ];

        $rooms = 0;

        foreach ($links as $link) {
            $rooms++;

            $html = file_get_contents($link);
            $crawler = new Crawler(null, $link);
            $crawler->addHtmlContent($html, 'UTF-8');

            $crawler->filter('.bd-item')->each(function (Crawler $node) use ($rooms) {
                $title = $node->filter('.title .media-body')->text();
                $image = $node->filter('.bd-item-left img')->attr('data-original');
                $coast = $node->filter('.bd-item-left .price-byr')->text();
                $phone = $node->filter('.bd-item-right .bd-item-right-bottom a')->attr('data-full');
                $description = $node->filter('.bd-item-right-center')->text();
                $updated_at = $node->filter('.bd-item-right .bd-item-right-top p')->text();

                $fill = [
                    'title' => $title,
                    'image' => $image,
                    'cost' => $coast,
                    'phone' => $phone,
                    'rooms' => $rooms,
                    'description' => $description,
                    'updated_at' => $updated_at,
                ];

                Ad::create($fill);
            });
        }
    }


}

