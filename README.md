# SVGTime
# Графическое время

Для применения графического времени понадобится подключить 3 javascript файла:
* 1. jquery.min.js
* 2. graphicSVG.js
* 3. animationSVG.js


graphicSVG.js - работает c svg, отрисовки графического времени, где svg это - язык разметки xml масштабируемой векторной графики.
Есть несколько способов применения graphicSVG.js для отрисовки времени:

## 1 Способ.
В обьекте graphicSVG есть функция numberTime которая отрисовывает время c применением свойства center.

center отрисовывает время по всему контенту.
* center : true - применяется
* center : false - отменяется
* idElement : "" - указываем id элемента или класс элемента
* time : "00:00:00" - указываем время в текстовом формате

> <div id="number" style="background: #f5f9da; height: 500px; width: 100%;"></div>
> <script>
>	new graphicSVG().numberTime({
>		idElement : "#number",
>		center: true,
>		time: "22:31:11",
>	});
> </script>

![screenshot of sample](http://nikol73.esy.es/gitHub/img/number0_center.jpg)

## 2 Способ.
Функция numberTime c применением свойства background

background применяет цвет
* background : "#dddddd" - изменяем цвет

`<div id="number" style="background: #f5f9da; height: 500px; width: 100%;"></div>
<script>
	new graphicSVG().numberTime({
		idElement : "#number",
		time: "22:31:11",
		background: "orange"
	});
</script>`
![screenshot of sample](http://nikol73.esy.es/gitHub/img/number0_background.jpg)


![screenshot of sample](http://nikol73.esy.es/gitHub/img/number0.gif)