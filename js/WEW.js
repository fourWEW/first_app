'use strict';
$(function(){
	var showBox=$('.show-box');
	var box=$('.box');
	var dot=$('i','.dotBox');
	var now=0;
	var next=0;
	var falge=true;
	box.css({left:7.5+'rem'}).eq(0).css('left',0);
	function move(type='l'){
		if(!falge){
			return;
		}
		falge=false;
		if(type=='l'){
			next++;
			if(next>=4){
				return;
			}
			box.eq(now).css('left',0);
			box.eq(next).css({left:7.5+'rem'});
			box.eq(now).animate({left:-7.5+'rem'},500);
			box.eq(next).animate({left:0+'rem'},500,function(){
				falge=true;
			});
			dot.eq(now).css('background','#fff');
			dot.eq(next).css('background','#ED0025');
			now=next;
		}
		if(type=='r'){
			next--;
			if(next<0){
				next=2;
			}
		
			box.eq(now).css('left',0);
			box.eq(next).css({left:-7.5+'rem'});
			box.eq(now).animate({left:7.5+'rem'},500);
			box.eq(next).animate({left:0+'rem'},500,function(){
				falge=true;
			});
			dot.eq(now).css('background','#fff');
			dot.eq(next).css('background','#ED0025');
			now=next;
		}
	}

	showBox.click(function(e){
		var x=e.offsetX;
		if(x>300/2){
			move('l');
		}else{
			move('r');
		}
	})
























})