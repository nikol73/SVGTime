function graphicSVG(){
	
	function Alg_Construction(defs, parametrs){
		var TnumberSVG = "", htUse = "",
			idName = "man",
			scale 				=  parametrs.scale != undefined ? parametrs.scale : 1,
			background 			= parametrs.background != undefined ? parametrs.background : "black",
			x 					= parametrs.x != undefined ? parametrs.x : 0,
			y 					= parametrs.y != undefined ? parametrs.y : 0;
		var backgroundM 		= parametrs.backgroundM != undefined ? parametrs.backgroundM : [];
		var backgroundRandom	= parametrs.backgroundRandom != undefined ? parametrs.backgroundRandom : false;
		var time 				= parametrs.time != undefined ? parametrs.time : "8";
		var dividerBackground 	= parametrs.dividerBackground != undefined ? parametrs.dividerBackground : "";
		var dividerRadius 		= parametrs.dividerRadius != undefined ? parametrs.dividerRadius : 0;
		var dividerDisplay		= parametrs.dividerDisplay != undefined ? parametrs.dividerDisplay : true;
		var center 				= parametrs.center != undefined ? parametrs.center : false;
		var idElements 			= parametrs.idElement != undefined ? parametrs.idElement : "";
		var timeCount			= parametrs.timeCount != undefined && (parametrs.timeCount == 2 || parametrs.timeCount == 1)  ? parametrs.timeCount : 3;
		var timeSecondsFlag		= parametrs.timeSecondsFlag != undefined ? parametrs.timeSecondsFlag : false;
		var timeSecondsh = 50;
		
		if(parametrs.idElement != undefined){
			var tc = "";
			for(var i=1; i < parametrs.idElement.length; i++){
				tc += parametrs.idElement.charAt(i);
			}
			idName = "graphicSVG"+tc;
		}
		
		if(center == true){
			var height = getIdElement(""+idElements).height();
			var width = getIdElement(""+idElements).width();
			var size = 0;
			if(height > width){
				size = height;
			} else if(height < width){
				size = width;
			}
			scale = (size/100)/7.8;
		}
				
		var timeflag = false;
		var timeMas = [];
		for(var i=0; i<time.length; i++){
			if(time.charAt(i) == ':'){
				timeflag = true;
			}
		}
		
		if( timeflag == true){
			timeMas = time.split(":");
		}
				
		if(timeMas.length < 3 || timeMas.length > 3){
			timeMas = "";
		}
				
		for(var i=0; i<timeMas.length; i++){
			if(timeMas[i].length == 1){
				timeMas[i] = "0"+timeMas[i];
			}
			if(timeMas[i].length > 2){
				timeMas[i] = "00";
			}
		}
				
		function random(min, max) {
			var range = max - min + 1;
			return Math.floor(Math.random()*range) + min;
		}
		function shuffle(arr) {
			var r_i, v;
			for (var i = 0; i < arr.length-1; i++) {
				r_i = random(0, arr.length-1);
				v = arr[r_i];
				arr[r_i] = arr[arr.length-1];
				arr[arr.length-1] = v;
			}
			return arr;
		}
		function randBackground(bgckM){
			var masBackground = [];
			var bgckM1 = [];
			var c = 0;
			for(var i=0; i<bgckM.length; i++){
				masBackground[masBackground.length] = i;
			}
			masBackground = shuffle(masBackground);
			
			for(var i=0; i<bgckM.length; i++){
				for(var j=0; j<masBackground.length; j++){
					if(parseInt(masBackground[j]) == i){
						bgckM1[bgckM1.length] = bgckM[j];
					}
				}
			}
					
			return bgckM1;
		}
		
		/*
		TnumberSVG += SVG_HTMLnumber(idName+"1", backgroundM, 8);
		htUse += SVG_HTMLUse(x, y, scale, background, idName+"1");
		TnumberSVG += SVG_HTMLnumber(idName+"2", backgroundM, 8);
		htUse += SVG_HTMLUse(x+120, y, scale, background, idName+"2");
		*/
		
		
				
		if(timeMas != ""){
			TnumberSVG += SVG_HTMLnumber(idName+"1", (backgroundRandom == true ? randBackground(backgroundM) : backgroundM), parseInt(timeMas[0].charAt(0)));
			htUse += SVG_HTMLUse(x, y, scale, background, idName+"1");
			TnumberSVG += SVG_HTMLnumber(idName+"2", (backgroundRandom == true ? randBackground(backgroundM) : backgroundM), parseInt(timeMas[0].charAt(1)));
			htUse += SVG_HTMLUse(x+120, y, scale, background, idName+"2");
			
			if(timeCount != 1){
				if(dividerDisplay == true){
					TnumberSVG += SVG_HTMLRect(idName+"3", 25-scale, dividerRadius, dividerBackground);
					htUse += SVG_HTMLUse((x+240), y+70, scale, background, idName+"3");
				}
				
				TnumberSVG += SVG_HTMLnumber(idName+"4", (backgroundRandom == true ? randBackground(backgroundM) : backgroundM), parseInt(timeMas[1].charAt(0)));
				htUse += SVG_HTMLUse(x+280, y, scale, background, idName+"4");
				TnumberSVG += SVG_HTMLnumber(idName+"5", (backgroundRandom == true ? randBackground(backgroundM) : backgroundM), parseInt(timeMas[1].charAt(1)));
				htUse += SVG_HTMLUse(x+400, y, scale, background, idName+"5");
			}
				
			if(timeCount != 1){
				if(timeCount != 2){
					if(dividerDisplay == true){
						if(timeSecondsFlag == false){
							TnumberSVG += SVG_HTMLRect(idName+"6", 25-scale, dividerRadius, dividerBackground);
							htUse += SVG_HTMLUse((x+520), y+70, scale, background, idName+"6");
						}
					}
					
					var yy = (timeSecondsFlag == false ? y : (y+(timeSecondsh)+10));
					var xx1 = (timeSecondsFlag == false ? (x+560) : ((x+560)+(timeSecondsh+100)));
					var xx2 = (timeSecondsFlag == false ? (x+680) : (x+680)+(timeSecondsh+100));
					
					TnumberSVG += SVG_HTMLnumber(idName+"7", (backgroundRandom == true ? randBackground(backgroundM) : backgroundM), parseInt(timeMas[2].charAt(0)));
					htUse += SVG_HTMLUse(xx1, yy, (timeSecondsFlag == false ? scale : (scale/1.3)), background, idName+"7");
					TnumberSVG += SVG_HTMLnumber(idName+"8", (backgroundRandom == true ? randBackground(backgroundM) : backgroundM), parseInt(timeMas[2].charAt(1)));
					htUse += SVG_HTMLUse(xx2, yy, (timeSecondsFlag == false ? scale : (scale/1.3)), background, idName+"8");
				}
			}
		}
		
		return TnumberSVG + defs + htUse;
	}
			
	function setIdElement(svg, idElement){
		$(idElement).html(svg);
	}
			
	function getIdElement(idElement){
		return $(idElement);
	}
	
	function sleep(millis) {
		var t = (new Date()).getTime();
		var i = 0;
		while (((new Date()).getTime() - t) < millis) {
			i++;
		}
	}
			
	function SVG_HTMLConscruction(parametrs){
		if(parametrs.idElements != undefined){
			
			var idElmas = parametrs.idElements.split(" ");
			
			for(var i=0; i<idElmas.length; i++){
				if(idElmas[i] != ""){
					
					var htBeginSVG 	= "<svg style='height: 100%; width: 100%;'>",
					htEndSVG 	= "</svg>",
					htBeginDefs = "<defs>",
					htEndDefs 	= "</defs>";
						
					var construction = Alg_Construction(htEndDefs, parametrs);
					
					setIdElement(htBeginSVG + htBeginDefs + construction + htEndSVG, idElmas[i]);
				}
			}
		} else {
			var htBeginSVG 	= "<svg style='height: 100%; width: 100%;'>",
				htEndSVG 	= "</svg>",
				htBeginDefs = "<defs>",
				htEndDefs 	= "</defs>";
					
			var construction = Alg_Construction(htEndDefs, parametrs);
			
			setIdElement(htBeginSVG + htBeginDefs + construction + htEndSVG, parametrs.idElement);
		}
		
	}
			
	function SVG_HTMLUse(x, y, scale, background, idName){
		return "<use x='"+x+"' y='"+y+"' transform='scale("+scale+")' fill='"+background+"' xlink:href='#"+idName+"'/>"
	}
			
	function SVG_HTMLRect(idName, size, radius, dividerBackground){
		var htBeginG 	= "<g id='"+idName+"'>",
			htEngG 		= "</g>",
			rect 		= " <rect width='"+size+"' height='"+size+"' x='0' y='0' rx='"+radius+"' ry='0' fill='"+(dividerBackground != undefined ? dividerBackground : "")+"'/>";
			rect1 		= " <rect width='"+size+"' height='"+size+"' x='0' y='40' rx='"+radius+"' ry='0' fill='"+(dividerBackground != undefined ? dividerBackground : "")+"'/>";
		return htBeginG + rect + rect1 + htEngG;
	}
			
	function SVG_HTMLnumber(idName, backgroundM, number){
		var htBeginG 	= "<g id='"+idName+"'>";
		var htEngG 		= "</g>";
		var n1SVG = "<polyline points='0,0 20,20 80,20 100,0' stroke='black' stroke-width='0' fill='"+(backgroundM[0] != undefined ? backgroundM[0] : "")+"'/>",
			n2SVG = "<polyline points='0,5 0,90 10,100 20,90 20,25' stroke='black' stroke-width='0' fill='"+(backgroundM[1] != undefined ? backgroundM[1] : "")+"'/>",
			n3SVG = "<polyline points='80,26 100,6 100,90 90,100 80,90' stroke='black' stroke-width='0' fill='"+(backgroundM[2] != undefined ? backgroundM[2] : "")+"'/>",
			n4SVG = "<polyline points='23,91 76,91 86,102 76,112 23,112 13,102' stroke='black' stroke-width='0' fill='"+(backgroundM[3] != undefined ? backgroundM[3] : "")+"'/>",
			n5SVG = "<polyline points='81,113 90,104 100,113 100,197 81,177' stroke='black' stroke-width='0' fill='"+(backgroundM[4] != undefined ? backgroundM[4] : "")+"'/>",
			n6SVG = "<polyline points='0,113 9,104 19,113 19,177 0,197' stroke='black' stroke-width='0' fill='"+(backgroundM[5] != undefined ? backgroundM[5] : "")+"'/>",
			n7SVG = "<polyline points='22,180 2,200 97,200 78,180' stroke='black' stroke-width='0' fill='"+(backgroundM[6] != undefined ? backgroundM[6] : "")+"'/>";
				
		var nnSVG = "";
			
		if(number == 0){
			nnSVG = htBeginG + n1SVG + n2SVG + n3SVG + n5SVG + n6SVG + n7SVG + htEngG;
		} else if(number == 1){
			nnSVG = htBeginG + n3SVG + n5SVG + htEngG;
		} else if(number == 2){
			nnSVG = htBeginG + n1SVG + n3SVG + n4SVG + n6SVG + n7SVG + htEngG;
		} else if(number == 3){
			nnSVG = htBeginG + n1SVG + n3SVG + n4SVG + n5SVG + n7SVG + htEngG;
		} else if(number == 4){
			nnSVG = htBeginG + n2SVG + n3SVG + n4SVG + n5SVG + htEngG;
		} else if(number == 5){
			nnSVG = htBeginG + n1SVG + n2SVG + n4SVG + n5SVG + n7SVG + htEngG;
		} else if(number == 6){
			nnSVG = htBeginG + n1SVG + n2SVG + n4SVG + n5SVG + n6SVG + n7SVG + htEngG;
		} else if(number == 7){
			nnSVG = htBeginG + n1SVG + n3SVG + n5SVG + htEngG;
		} else if(number == 8){
			nnSVG = htBeginG + n1SVG + n2SVG + n3SVG + n4SVG + n5SVG + n6SVG + n7SVG + htEngG;
		} else if(number == 9){
			nnSVG = htBeginG + n1SVG + n2SVG + n3SVG + n4SVG + n5SVG + n7SVG + htEngG;
		}
		//nnSVG = htBeginG + n1SVG + n2SVG + n3SVG + n4SVG + n5SVG + n6SVG + n7SVG + htEngG;
				
		return nnSVG;
	}
			
			
	
	this.numberTime = function(graphicSVG_parametrs){
		SVG_HTMLConscruction(graphicSVG_parametrs);
	};
};




/*
<svg style='height: 500px;'>
	<defs>
		<g id="man">
				<polyline points='0,0 20,20 80,20 100,0' stroke='black' stroke-width='0' />
				<polyline points='0,5 0,90 10,100 20,90 20,25' stroke='black' stroke-width='0' />
				<polyline points='80,26 100,6 100,90 90,100 80,90' stroke='black' stroke-width='0' />
				<polyline points='23,91 76,91 86,102 76,112 23,112 13,102' stroke='black' stroke-width='0' />
				<polyline points='81,113 90,104 100,113 100,197 81,177' stroke='black' stroke-width='0' />
				<polyline points='0,113 9,104 19,113 19,177 0,197' stroke='black' stroke-width='0' />
				<polyline points='22,180 2,200 97,200 78,180' stroke='black' stroke-width='0'/>
		</g>
	</defs>
			
	<use x="50" y="0" transform="scale(1)" fill="blue" xlink:href="#man"/>
</svg>
*/