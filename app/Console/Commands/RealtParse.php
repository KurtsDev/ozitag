<?php

namespace App\Console\Commands;

use App\Models\Ad;
use Illuminate\Console\Command;
use Symfony\Component\DomCrawler\Crawler;

class RealtParse extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'parse:realt';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Parsing ad realt.by';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
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
                $coastString = $node->filter('.bd-item-left .price-byr')->text();
                $phone = $node->filter('.bd-item-right .bd-item-right-bottom a')->attr('data-full');
                $description = $node->filter('.bd-item-right-center')->text();
                $updated_at = $node->filter('.bd-item-right .bd-item-right-top p')->text();

                $coast = preg_replace('/[^0-9]/', '', $coastString);
                if ($coast === '') {
                    $coast = null;
                }

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
