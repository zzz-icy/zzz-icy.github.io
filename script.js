// Javascript for index.html



$(document).ready(function(){
	
	$('#mustTry').click(function(e){
		e.preventDefault();  //To prevent the default anchor tag behaviour
		
		
		if ($("#loadinfo").is(':visible')){
			$("#loadinfo").toggle(); //loadinfo should dispear
			}
		else if ($("#jn").is(':visible')){

				$("#jn").toggle();
			}
		$("#algorithm1").attr('src', 'algorithm.html');
		$("#algorithm1").show();
									});
	//jupyter notebooks
		
	$('#jn1').click(function(e){
		e.preventDefault();  //To prevent the default anchor tag behaviour
		
		if ($("#loadinfo").is(':visible')){
			
			$("#loadinfo").toggle(); 
			}

		else if ($("#algorithm1").is(':visible')){

				$("#algorithm1").toggle();
			}

		$("#jn").attr('src', 'one_for_github.html');
		$("#jn").show();

									});

	$('#jn2').click(function(e){
		e.preventDefault();  //To prevent the default anchor tag behaviour
		
		if ($("#loadinfo").is(':visible')){
			
			$("#loadinfo").toggle(); 
			}

		else if ($("#algorithm1").is(':visible')){

				$("#algorithm1").toggle();
			}

		$("#jn").attr('src', 'two_for_github.html');
		$("#jn").show();

									});
		 
								});


//  $("#algorithm").trigger('load', function(){

//  $(this).attr('href');



// });


 // var url = $(this).attr('href');
        
 //        $("#algorithm").load(url);
 //        // alert("haha")