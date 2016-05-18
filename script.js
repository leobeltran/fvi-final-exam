	$(document).ready(function(){
		$("#thehidingform").hide();
        
        $("#finalexam").on("click", function (){
	       $("#thehidingform").show();
	           $(this).hide();
        })
    })