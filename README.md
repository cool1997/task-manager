﻿# Задание: Написать примитивный Task Manager

## Должен быть реализован следующий функционал:

Создание, Редактирование, Удаление



## Взаимодействие c API:
### Получения списка:
url: https://test.megapolis-it.ru/api/list

type: GET

Модель: Object<data: Array, length: Number, success: Bool, error: String>

Описание: Метод вернёт список всех задач


### Создание:
url: https://test.megapolis-it.ru/api/list

type: POST

Модель(Request): Object<title: String>

Модель(Response): Object<id: Number, success: Bool, error: String>

Описание: Метод создаст новую запись и вернет ее идентификатор


### Редактирование:
url: https://test.megapolis-it.ru/api/list/{ID}

type: POST

Модель(Request): Object<title: String>

Модель(Response): Object<success: Bool, error: String>

Описание: Метод изменит данные


### Удаление:
url: https://test.megapolis-it.ru/api/list/{ID}

type: DELETE

Модель(Response): Object<success: Bool, error: String>

Описание: Метод удаляет запись


## Дизайн

Дизайн: [Дизайн здесь](https://www.figma.com/file/GXn6kfjXDTTtbuRkT4XvuV/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5)


## github pages

https://cool1997.github.io/task-manager/#/
