// On click all
$(document).ready(function(){
	if(false){
		$("p").click(function(){
			$("p").css("background-color", "rgba(206, 152, 230, 0.697)");
		});
	}
});

// element clicked
$(document).ready(function(){
	if(false){
		$("p").click(function(){
			$(this).css("background-color", "rgba(206, 152, 230, 0.697)");
		});
	}
});

// mouseover
$(document).ready(function(){
	if(true){
		$("p").mouseover(function(){
			$(this).css("background-color", "rgba(206, 152, 230, 0.697)");
		});
	}
});


// mouseout
$(document).ready(function(){
	if(true){
		$("p").mouseout(function(){
			$(this).css("background-color", "");
		});
	}
});

// text input when you are entering text
$(document).ready(function(){
	if(true){
		$("input").focus(function(){
			$(this).css("background-color", "rgb(200, 150, 70)");
		});
	}
});

// text input when you are leaving the text
$(document).on("keydown", function(event){
	if(true){
		$("#change").html(event.which + "");
	}
});

// text input when you are leaving the text
$(document).on("keyup", function(event){
	if(true){
		$("#change").html("");
	}
});