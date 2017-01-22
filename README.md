>>># SVGTime
# Графическое время

** -> [Пример графического времени](http://nikol73.esy.es/gitHub/number/) <-

Для применения графического времени понадобится подключить 3 javascript файла:
* 1.  jquery.min.js
* 2.  graphicSVG.js
* 3.  animationSVG.js

## graphicSVG.js
graphicSVG.js - работает c svg, отрисовки графического времени, где svg это - язык разметки xml масштабируемой векторной графики.
Есть несколько способов применения graphicSVG.js для отрисовки времени:

### 1 Способ.
В обьекте graphicSVG есть функция numberTime которая отрисовывает время c применением свойства center.

center отрисовывает время по всему контенту.
* center : true - применяется
* center : false - отменяется
* idElement : "" - указываем id элемента или класс элемента
* time : "00:00:00" - указываем время в текстовом формате

>```HTML
<div id="number" style="background: #f5f9da; height: 500px; width: 100%;"></div>
 <script>
	new graphicSVG().numberTime({
		idElement : "#number",
		center: true,
		time: "22:31:11",
	});
</script>
```

![screenshot of sample](http://nikol73.esy.es/gitHub/img/number0_center.jpg)
***
### 2 Способ.
Функция numberTime c применением свойства background

background применяет цвет
* background : "#dddddd" - изменяем цвет

>```HTML
<div id="number" style="background: #f5f9da; height: 500px; width: 100%;"></div>
<script>
	new graphicSVG().numberTime({
		idElement : "#number",
		time: "22:31:11",
		background: "orange"
	});
</script>
```

![screenshot of sample](http://nikol73.esy.es/gitHub/img/number0_background.jpg)
***
### 3 Способ.
Функция numberTime c применением свойства backgroundM

backgroundM запись массива цветов для одной цыфры, в итоге цвета будут применяться ко всем цыфрам одинаково
* backgroundM : ["цвет","цвет","цвет","цвет","цвет","цвет","цвет"] - максимальное колличесво цветов 7

>```HTML
<div id="number" style="background: #f5f9da; height: 500px; width: 100%;"></div>
<script>
	new graphicSVG().numberTime({
		idElement : "#number",
		time: "22:31:11",
		backgroundM: ["orange","black","red","blue","red","red","red"]
	});
</script>
```

![screenshot of sample](http://nikol73.esy.es/gitHub/img/number0_backgroundM.jpg)
***
### 4 Способ.
Функция numberTime c применением свойства backgroundRandom

backgroundRandom устанавливает рандом цвета, которые приходят из массива backgroundM
* backgroundRandom : true - установить рандом цвета
* backgroundRandom : false - убрать рандом цвета

>```HTML
<div id="number" style="background: #f5f9da; height: 500px; width: 100%;"></div>
<script>
	new graphicSVG().numberTime({
		idElement : "#number",
		time: "22:31:11",
		backgroundM: ["orange","black","red","blue","red","red","red"],
		backgroundRandom : true
	});
</script>
```

![screenshot of sample](http://nikol73.esy.es/gitHub/img/number0_backgroundRandom.jpg)
***
### 5 Способ.
Функция numberTime c применением свойства dividerBackground

dividerBackground изменяется цвет разделителей (типа двоиточия)
* dividerBackground : "цвет"

>```HTML
<div id="number" style="background: #f5f9da; height: 500px; width: 100%;"></div>
<script>
	new graphicSVG().numberTime({
		idElement : "#number",
		time: "22:31:11",
		dividerBackground : "red"
	});
</script>
```

![screenshot of sample](http://nikol73.esy.es/gitHub/img/number0_dividerBackground.jpg)
***
### 6 Способ.
Функция numberTime c применением свойства dividerRadius

dividerRadius закругляет углы разделителям (типа двоиточия)
* dividerBackground : 5 - устанавливает числа от 0 до 100

>```HTML
<div id="number" style="background: #f5f9da; height: 500px; width: 100%;"></div>
<script>
	new graphicSVG().numberTime({
		idElement : "#number",
		time: "22:31:11",
		dividerRadius : 5
	});
</script>
```

![screenshot of sample](http://nikol73.esy.es/gitHub/img/number0_dividerRadius.jpg)
***
### 7 Способ.
Функция numberTime c применением свойства dividerDisplay

dividerDisplay пропадает или отображает разделители (типа двоиточия)
* dividerDisplay : true - отображается
* dividerDisplay : false - пропадает

>```HTML
<div id="number" style="background: #f5f9da; height: 500px; width: 100%;"></div>
<script>
	new graphicSVG().numberTime({
		idElement : "#number",
		time: "22:31:11",
		dividerDisplay : false
	});
</script>
```

![screenshot of sample](http://nikol73.esy.es/gitHub/img/number0_dividerDisplay.jpg)
***
### 8 Способ.
Функция numberTime c применением свойства scale

scale устанавливает масштаб отображения графического времени, scale применяется тогда когда свойство center приходит значение false
* scale : 1.2 - пишется дробное число

>```HTML
<div id="number" style="background: #f5f9da; height: 500px; width: 100%;"></div>
<script>
	new graphicSVG().numberTime({
		idElement : "#number",
		time: "22:31:11",
		scale : 1.2
	});
</script>
```

![screenshot of sample](http://nikol73.esy.es/gitHub/img/number0_scale.jpg)
***
### 9 Способ.
Функция numberTime c применением свойства timeCount

timeCount приходит число отображений, какие числа должны отображаться при отрисовки графического времени
* timeCount : 2 - будет показывать только часы и минуты

>```HTML
<div id="number" style="background: #f5f9da; height: 500px; width: 100%;"></div>
<script>
	new graphicSVG().numberTime({
		idElement : "#number",
		time: "22:31:11",
		timeCount : 2
	});
</script>
```

![screenshot of sample](http://nikol73.esy.es/gitHub/img/number0_timeCount.jpg)
***
### 10 Способ.
Функция numberTime c применением свойства timeSecondsFlag

timeSecondsFlag показывать секунды в другом формате
* timeSecondsFlag : true - отрисовка секунд в другом формате
* timeSecondsFlag : false - не отрисовывать секунды в другом формате

>```HTML
<div id="number" style="background: #f5f9da; height: 500px; width: 100%;"></div>
<script>
	new graphicSVG().numberTime({
		idElement : "#number",
		time: "22:31:11",
		timeSecondsFlag : true
	});
</script>
```

![screenshot of sample](http://nikol73.esy.es/gitHub/img/number0_secondsFlag.jpg)
***
### 11 Способ.
Функция numberTime c применением свойства x и y

x и y смещать отрисовку графического время по координатам x и y
* x : 150
* y : 10

>```HTML
<div id="number" style="background: #f5f9da; height: 500px; width: 100%;"></div>
<script>
	new graphicSVG().numberTime({
		idElement : "#number",
		time: "22:31:11",
		x : 150,
		y : 10
	});
</script>
```

![screenshot of sample](http://nikol73.esy.es/gitHub/img/number0_x_y.jpg)

***
***

## animationSVG.js

animationSVG.js - работает c graphicSVG.js, применяет анимацию к элементам,.
* idElements - добавленно новое свойство с помощью которого можно указывать сразу несколько ссылок на элементы которые будут работать однавременно
idElements : "#number1 #number2"

Есть несколько способов animationSVG.js для применения анимации:

### 1 Способ.
Функция presentTime возвращает текущее время. При этом устанавливая время обработки анимацию.

>```HTML
<div id="number" style="background: #f5f9da; height: 500px; width: 100%;"></div>
<script>
	new AnimationSVG().presentTime({
		idElement 			: "#number",
		center				: true,
		dividerBackground	: "#8355ef",
		backgroundM 		: ["","orange","","","orange","",""],
		dividerRadius		: 5,
		timeCount			: 3,
		dividerDisplay 		: true
	}, 500);
</script>
```

![screenshot of sample](http://nikol73.esy.es/gitHub/img/number0.gif)
### 2 Способ.
Функция reverseTime возвращает обратный отсчет времени. При этом устанавливая время обработки анимации.
В свойство time указываем начальный отсчет времени.

>```HTML
<div id="number" style="background: #f5f9da; height: 500px; width: 100%;"></div>
<script>
	new AnimationSVG().reverseTime({
		idElement 			: "#number",
		center				: true,
		time				: "05:00:00",
		dividerBackground : "orange",
		dividerRadius : 100
	}, 10);
</script>
```

![screenshot of sample](http://nikol73.esy.es/gitHub/img/number01.gif)