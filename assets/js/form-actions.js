$(function(){
	var InSearch = false;
	$(document).ready(function(){
		$("#search-bt").bind('click',function(e){
			e.preventDefault();
			$(".searchForm, .search-results").fadeIn();
			$("#menu-bt").attr("src","assets/images/icons/back.svg");
			InSearch = true;
		});
		$("#menu-bt").bind('click',function(e){
			e.preventDefault();
			if(InSearch){
				$(".searchForm, .search-results").fadeOut();
				$("#menu-bt").attr("src","assets/images/icons/menu.svg");
				InSearch = false;
			}
			else{
				alert("Not In Search");
			}
		});
		$.ajax({
	        type: 'GET',
	        url: "http://sh1t.hol.es/",
	        dataType: 'text',
	        crossDomain: true,
	        success: function(data, ts, xhr){
	        	var json = JSON.parse(data);
	            console.log(json);
	            for (var i = 0; i < json.length; i++) {
	            	var breakCardLine = "";
	            	if((i+1)%2){
	            		breakCardLine = "last"
	            	}
	            	else{
	            		breakCardLine = "";
	            	}
	            	var sinopes = json[i].livro.sinopse.substr(0,200);
	            	$("#card").append("<div class='card column half "+breakCardLine+"'><div class='card_header'><div class='user_pic' style='background-image: url(\"http://img.sh1t.hol.es/user/"+json[i].user.hash+".jpg\");'></div><b>"+json[i].livro.nome+"</b> foi encontrado<br><span class='secondLine'><b>"+json[i].user.nome+"</b> o encontrou na <b>"+json[i].loja.nome+"</b></span><div class='book_cover' style='background-image: url(\"http://img.sh1t.hol.es/book/"+(i+1)+".jpg\");'></div><div class='description'>"+sinopes+"...</div><div class='options'><img src='assets/images/icons/like.svg' class='opitionBt icon'><img src='assets/images/icons/share.svg' class='opitionBt icon'></div></div></div>")
	            };
	        }
	    });
	});
});