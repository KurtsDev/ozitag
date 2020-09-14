Запуск:

1 Склонировать проект

2 composer install

3 npm install

4 Создать БД mySql, в файле .env прописать DB_DATABASE,DB_USERNAME, DB_PASSWORD

5 php artisan migrate

6 php artisan parse:realt

7 php artisan serve

8 Возможно, если не будут отображатся изображения, сделать php artisan storage:link

Тестовое задание (PHP developer)

Сделать парсер сайта realt.by, раздел “Аренда недвижимости / Квартира на сутки ”

https://realt.by/rent/flat-for-day/

Результат работы должен из себя представлять веб-приложение, в котором можно
просмотреть объявления скачанные с сайта realt.by.
Запуск парсера сделать через консольную команду.
В приложении предусмотреть поиск по кол-ву комнат и по цене.
В объявлении должна содержаться информация:
1. Заголовок
2. Изображение
3. Дата обновления объявления
4. Стоимость на сутки
5. Телефон для связи
6. Описание

Дизайн приложения остается на усмотрение исполнителя и никаким образом
на оценку результата не влияет
Предпочтения по технологиям:
● База данных - MySQL
● Бекенд - PHP + Laravel
● Фронтенд - React.JS
