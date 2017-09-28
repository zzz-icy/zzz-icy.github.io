// Javascript for index.html



$(document).ready(function(){
	
	$('#mustTry').click(function(e){
		e.preventDefault();  //To prevent the default anchor tag behaviour
		
		
		if ($("#loadinfo").is(':visible')){
			$("#loadinfo").toggle(); //loadinfo should dispear
			}
		
		if ($("#jn").is(':visible')){

				$("#jn").toggle();
			}
		if ($("#volunteerShow").is(':visible')){

				$("#volunteerShow").toggle();
			}


		if ($("#timeline").is(':visible')){

				$("#timeline").toggle();
			}

		if ($("#marathon_display").is(':visible')){

				$("#marathon_display").toggle();
			}
		if ($("#project_desc_dsp").is(':visible')){

				$("#project_desc_dsp").toggle();
			}

		$("#maintitle1").text("Try this!");
		$("#maintitle2").text("");

		$("#algorithmStep").toggle();
		$("#algorithm1").attr('src', 'must_try/algorithm.html');
		$("#algorithm1").show();
									});
	//jupyter notebooks
		
	$('#jn1').click(function(e){
		e.preventDefault();  //To prevent the default anchor tag behaviour
		
		if ($("#loadinfo").is(':visible')){
			
			$("#loadinfo").toggle(); 
			}

		if ($("#algorithm1").is(':visible')){

				$("#algorithm1").toggle();
			}

		if ($("#volunteerShow").is(':visible')){

				$("#volunteerShow").toggle();
			}


		if ($("#algorithmStep").is(':visible')){

				$("#algorithmStep").toggle();
			}

		if ($("#timeline").is(':visible')){

				$("#timeline").toggle();
			}

		if ($("#marathon_display").is(':visible')){

				$("#marathon_display").toggle();
			}
		if ($("#project_desc_dsp").is(':visible')){

				$("#project_desc_dsp").toggle();
			}


		$("#maintitle1").text("Explore San Fransisco Salaries");
		$("#maintitle2").text("");
		$("#jn").attr('src', 'jupyter/one_for_github.html');
		$("#jn").show();

									});

	$('#jn2').click(function(e){
		e.preventDefault();  //To prevent the default anchor tag behaviour
		
		if ($("#loadinfo").is(':visible')){
			
			$("#loadinfo").toggle(); 
			}

		if ($("#algorithm1").is(':visible')){

				$("#algorithm1").toggle();
			}


		if ($("#algorithmStep").is(':visible')){

				$("#algorithmStep").toggle();
			}

		if ($("#volunteerShow").is(':visible')){

				$("#volunteerShow").toggle();
			}	

		if ($("#timeline").is(':visible')){

				$("#timeline").toggle();
			}

		if ($("#marathon_display").is(':visible')){

				$("#marathon_display").toggle();
			}
		if ($("#project_desc_dsp").is(':visible')){

				$("#project_desc_dsp").toggle();
			}

		$("#maintitle1").text("Yelp Dataset - Reviews");
		$("#maintitle2").text("");
		$("#jn").attr('src', 'jupyter/two_for_github.html');
		$("#jn").show();

									});

		$('#jn3').click(function(e){
		e.preventDefault();  //To prevent the default anchor tag behaviour
		
		if ($("#loadinfo").is(':visible')){
			
			$("#loadinfo").toggle(); 
			}

		if ($("#algorithm1").is(':visible')){

				$("#algorithm1").toggle();
			}

		if ($("#algorithmStep").is(':visible')){

				$("#algorithmStep").toggle();
				}	

		if ($("#volunteerShow").is(':visible')){

				$("#volunteerShow").toggle();
			}	

		if ($("#timeline").is(':visible')){

				$("#timeline").toggle();
			}

		if ($("#marathon_display").is(':visible')){

				$("#marathon_display").toggle();
			}
		if ($("#project_desc_dsp").is(':visible')){

				$("#project_desc_dsp").toggle();
			}


		$("#maintitle1").text("Explore the SVHN Dataset");
		$("#maintitle2").text("");

		$("#jn").attr('src', 'jupyter/three_for_github.html');
		$("#jn").show();
		 
				});


		$('#about').click(function(e){
			e.preventDefault();  //To prevent the default anchor tag behaviour
		
			if ($("#jn").is(':visible')){
			
				$("#jn").toggle(); 
				}

			if ($("#algorithm1").is(':visible')){

				$("#algorithm1").toggle();
				}

			if ($("#algorithmStep").is(':visible')){

				$("#algorithmStep").toggle();
				}

			if ($("#volunteerShow").is(':visible')){

				$("#volunteerShow").toggle();
				}

			if ($("#timeline").is(':visible')){

				$("#timeline").toggle();
			}

			if ($("#marathon_display").is(':visible')){

				$("#marathon_display").toggle();
			}
			if ($("#project_desc_dsp").is(':visible')){

				$("#project_desc_dsp").toggle();
			}

		$("#maintitle1").text("Hi, I'm Han!");
		$("#maintitle2").text("");
		$("#loadinfo").show();

									});



		$('#volunteer').click(function(e){
			e.preventDefault();  //To prevent the default anchor tag behaviour
		
			if ($("#jn").is(':visible')){
				
				$("#jn").toggle(); 
				}

			if ($("#algorithm1").is(':visible')){

				$("#algorithm1").toggle();
			}

			if ($("#algorithmStep").is(':visible')){

				$("#algorithmStep").toggle();
				}

			if ($("#loadinfo").is(':visible')){

				$("#loadinfo").toggle();
			}

			if ($("#timeline").is(':visible')){

				$("#timeline").toggle();
			}

			if ($("#marathon_display").is(':visible')){

				$("#marathon_display").toggle();
			}
			if ($("#project_desc_dsp").is(':visible')){

				$("#project_desc_dsp").toggle();
			}


		$("#maintitle1").text("Stampede of Service");
		$("#maintitle2").text("");
		$("#volunteerShow").toggle();

									});

		$('#experience').click(function(e){
			e.preventDefault();  //To prevent the default anchor tag behaviour
		
			if ($("#jn").is(':visible')){
				
				$("#jn").toggle(); 
				}

			if ($("#algorithm1").is(':visible')){

				$("#algorithm1").toggle();
			}


			if ($("#algorithmStep").is(':visible')){

				$("#algorithmStep").toggle();
				}

			if ($("#loadinfo").is(':visible')){

				$("#loadinfo").toggle();
			}

			if ($("#volunteerShow").is(':visible')){

				$("#volunteerShow").toggle();
			}

			if ($("#marathon_display").is(':visible')){

				$("#marathon_display").toggle();
			}
			if ($("#project_desc_dsp").is(':visible')){

				$("#project_desc_dsp").toggle();
			}			



		$("#maintitle1").text("My Timeline");
		$("#maintitle2").text("");
		$("#timeline").attr('src', 'timeline/timeline.html');
		$("#timeline").show();

									});

		$('#marathon').click(function(e){
			e.preventDefault();  //To prevent the default anchor tag behaviour
		
			if ($("#jn").is(':visible')){
				
				$("#jn").toggle(); 
				}

			if ($("#algorithm1").is(':visible')){

				$("#algorithm1").toggle();
			}

			if ($("#algorithmStep").is(':visible')){

				$("#algorithmStep").toggle();
				}

			if ($("#loadinfo").is(':visible')){

				$("#loadinfo").toggle();
			}

			if ($("#volunteerShow").is(':visible')){

				$("#volunteerShow").toggle();
			}

			if ($("#timeline").is(':visible')){

				$("#timeline").toggle();
			}
			if ($("#project_desc_dsp").is(':visible')){

				$("#project_desc_dsp").toggle();
			}



		$("#maintitle1").text("Running is Fun!");
		$("#maintitle2").text("");
		$("#marathon_display").toggle();
	
	

									});


		$('#project_desc').click(function(e){
			e.preventDefault();  //To prevent the default anchor tag behaviour
		
			if ($("#jn").is(':visible')){
				
				$("#jn").toggle(); 
				}

			if ($("#algorithm1").is(':visible')){

				$("#algorithm1").toggle();
			}

			if ($("#algorithmStep").is(':visible')){

				$("#algorithmStep").toggle();
				}
			if ($("#loadinfo").is(':visible')){

				$("#loadinfo").toggle();
			}

			if ($("#volunteerShow").is(':visible')){

				$("#volunteerShow").toggle();
			}

			if ($("#timeline").is(':visible')){

				$("#timeline").toggle();
			}

			if ($("#marathon_display").is(':visible')){

				$("#marathon_display").toggle();
			}





		$("#maintitle1").text("Professional Experience");
		$("#maintitle2").text("");
		
		$("#project_desc_dsp").toggle();
	
	

									});

});


//  $("#algorithm").trigger('load', function(){

//  $(this).attr('href');



// });


 // var url = $(this).attr('href');
        
 //        $("#algorithm").load(url);
 //        // alert("haha")