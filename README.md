# nutnet-weather

Тестовое задание для Nutnet

## Отклонение от ТЗ

1. Иконки погода в Figma загружены в PNG. Нет смысла их экспортировать в SVG.
Поэтому же нет особого смысла соединять Иконки погоды в спрайт, так как в текущей
версии приложения возможна загрузка максимум 6 из 12 иконок.

## Глобальные моменты по верстке

1. Точка трансформации Десктоп/Мобайл: `665px`:

```css
@media (max-width: 665px) {
  ...
}
```

## TODO List

1. Реализовать работу с API
   - [+] Сделать загрузку погоды о 6 городах на главной странице
   - [+] Сделать загрузку информации на экране города
   - [+] Сделать Историю просмотра городов
   - [+] Сделать Форму поиска с авто-дополнением
2. Исправить верстку
   - [+] сделать загрузку CSS файлов через webpack
   - [+] сделать загрузку SVG файлов через webpack
   - [+] Распределить стили и картинки к соответствующим Блокам и элементам
3. Шлифовка / Багтрекктинг
   - [+] Доделать интерфейс по работе с API
     - [+] Округлить температуру
     - [+] Давление в мм рт. ст.
     - [+] Время заката/Восхода
     - [+] Время обращения
     - [+] Загрузка PNG иконок через WebPack
   - [ ] SVG иконки в одном спрайте
   - [+] На странице города в мобильной версии шапка с логотипом пропадает
   - [+] Стилизация авто-дополнения и работа кнопками
   - [+] Подключить шрифты
   - [ ] Сделать компонент загрузки на сайте
   - [ ] Логирование ошибок от API
   - [ ] Обработка ошибок при проблеме плохого соединения

