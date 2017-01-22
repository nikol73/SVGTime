function AnimationSVG(){
	
	var flagTime = false, flagTime1 = false, secondTime = 0, fragRandom = true, times;
	function funcTime(){ flagTime = false; flagTime1 = false; fragRandom = true; }
	var parametrsTime = undefined, 
		TimeIntervalTime = undefined;
	var reverseEventTimevar = 0;
	
	function cloneObject(obj) {  
		var newObj = {};  

		for (var prop in obj) {  
			if (typeof obj[prop] == 'object') {  
				newObj[prop] = cloneObject(obj[prop]);  
			} else {
				newObj[prop] = obj[prop];
			}
		} 

		return newObj;  
	}
			
	function presentEventTime(){
		window.requestAnimationFrame(presentEventTime);
		
		if(TimeIntervalTime == undefined){
			TimeIntervalTime = 1000;
		}
		var Data = new Date();
		var Hour = Data.getHours(),
			Minutes = Data.getMinutes(),
			Seconds = Data.getSeconds();
		times = Hour + ":" + Minutes + ":" + Seconds;
		var dividerdisplay = false;
				
		if(secondTime != parseInt(Seconds)){
			secondTime = parseInt(Seconds);
			flagTime = true;
			fragRandom = false;
		} 

		if(parametrsTime.dividerDisplay == true){
			new graphicSVG().numberTime({
				idElement 			: parametrsTime.idElement,
				idElements 			: parametrsTime.idElements,
				time				: times,
				center				: parametrsTime.center,
				dividerBackground	: parametrsTime.dividerBackground,
				background 			: parametrsTime.background,
				backgroundM 		: parametrsTime.backgroundM,
				backgroundRandom	: parametrsTime.backgroundRandom,
				dividerRadius		: parametrsTime.dividerRadius,
				dividerDisplay		: flagTime,
				timeCount			: parametrsTime.timeCount,
				timeSecondsFlag		: parametrsTime.timeSecondsFlag,
				scale 				: parametrsTime.scale,
				x 					: parametrsTime.x,
				y 					: parametrsTime.y
			});
		} else {
			new graphicSVG().numberTime({
				idElement 			: parametrsTime.idElement,
				idElements 			: parametrsTime.idElements,
				time				: times,
				center				: parametrsTime.center,
				dividerBackground	: parametrsTime.dividerBackground,
				background 			: parametrsTime.background,
				backgroundM 		: parametrsTime.backgroundM,
				backgroundRandom	: parametrsTime.backgroundRandom,
				dividerRadius		: parametrsTime.dividerRadius,
				dividerDisplay		: true,
				timeCount			: parametrsTime.timeCount,
				timeSecondsFlag		: parametrsTime.timeSecondsFlag,
				scale 				: parametrsTime.scale,
				x 					: parametrsTime.x,
				y 					: parametrsTime.y
			});
		}
			
		if(flagTime == true){
			if(flagTime1 == false){
				flagTime1 = true;
				setTimeout(funcTime, TimeIntervalTime);
			}
		}
	}

	function reverseEventTime(){
		
		function getTimeS(numberT){
			function recTime(n){
				var fl = false;if(n > 60){ n = n - 60; fl = false; } else { fl = true; }
				return fl == false ? recTime(n) : parseInt(n);
			}
			var hourT = parseInt((numberT/60)/60),
				minutesT = recTime(numberT/60),
				secondT = numberT - (((hourT*60)*60)+(minutesT*60));
			return (hourT < 10 ? "0"+hourT : hourT)+":"+(minutesT < 10 ? "0"+minutesT : minutesT)+":"+(secondT < 10 ? "0"+secondT : secondT);
		}
		
		if(TimeIntervalTime == undefined){
			TimeIntervalTime = 0;
		}
		if(parametrsTime.time == undefined){
			parametrsTime.time = "00:00:00";
		} else {
			if(parametrsTime.time.length == 1 || parametrsTime.time.length == 2 ||
				parametrsTime.time.length == 3 || parametrsTime.time.length == 4||
				parametrsTime.time.length == 5 || parametrsTime.time.length == 6 || 
				parametrsTime.time.length == 7 || parametrsTime.time.length == 8 ){
				if(parametrsTime.time.length == 8){
					var fl = 0;
					for(var i=0; i<parametrsTime.time.length; i++){
						if(parametrsTime.time.charAt(i) == ":"){
							fl++;
						}
					}
					if(fl != 2){
						parametrsTime.time = "00:00:00";
					}
				} else {
					parametrsTime.time = "00:00:00";
				}
			}
		}
		
		setTimeout(function(){
			
			var T = parametrsTime.time.split(":");
			var hour, minutes, second;
			if(T.length == 3){
				hour = parseInt(T[0]),
				minutes = parseInt(T[1]),
				second = parseInt(T[2]);
			}
			
			if(minutes == 0){
				hour = hour - 1;
				second = 0;
				minutes = 60;
			}
			var miCount = (((hour*60)*60) + (minutes*60) + second)-1;
			
			if(miCount != -1){
				window.requestAnimationFrame(reverseEventTime);
			}
			
			var miSecond = getTimeS(miCount);
			
			if(TimeIntervalTime == undefined){
				TimeIntervalTime = 1000;
			}
			

			new graphicSVG().numberTime({
				idElement 			: parametrsTime.idElement,
				idElements 			: parametrsTime.idElements,
				time				: miSecond,
				center				: parametrsTime.center,
				dividerBackground	: parametrsTime.dividerBackground,
				background 			: parametrsTime.background,
				backgroundM 		: parametrsTime.backgroundM,
				backgroundRandom	: parametrsTime.backgroundRandom,
				dividerRadius		: parametrsTime.dividerRadius,
				dividerDisplay		: parametrsTime.dividerDisplay,
				timeCount			: parametrsTime.timeCount,
				timeSecondsFlag		: parametrsTime.timeSecondsFlag,
				scale 				: parametrsTime.scale,
				x 					: parametrsTime.x,
				y 					: parametrsTime.y
			});
			
			
			parametrsTime.time = miSecond;
		
		}, TimeIntervalTime);
	}
	
	function sleep(millis) {
		var t = (new Date()).getTime();
		var i = 0;
		while (((new Date()).getTime() - t) < millis) {
			i++;
		}
	}
	
	
	this.presentTime = function(AnimationSVG_parametrs, AnimationSVG_timeInterval){
		//setTimeout(function () {
			//sleep(500);
			TimeIntervalTime = AnimationSVG_timeInterval;
			parametrsTime = AnimationSVG_parametrs;
			presentEventTime();
		//}, 100);
	};
	
	this.reverseTime = function(AnimationSVG_parametrs, AnimationSVG_timeInterval){
		TimeIntervalTime = AnimationSVG_timeInterval;
		parametrsTime = AnimationSVG_parametrs;
		reverseEventTime();
	};
};