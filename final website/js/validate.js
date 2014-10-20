
// Function that validates email address through a regular expression.
// http://stackoverflow.com/questions/2507030/email-validation-using-jquery
function validateEmail(sEmail) {
//    console.log("passed email value : " + sEmail.toString());
    var filter = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    console.log("result : " + filter.test(sEmail));
    if (filter.test(sEmail)) {     
        return true;
    }
    else {
        return false;
    }
}

$(function () {
	$("#submitbtn").click(function(){
                    var data = {
                        browser : $('#browser').val() ,
                        moving : $( "#moving:checked" ).val() ,
                        name : $("#firstname").val(),
						//lastname : $("#lastname").val(),
                        comment : $("#comment").val()
                    };
                    console.log(
						"data: " + data.browser + ", " +
						data.moving + ", " + data.name + ", " + data.comment
					);
                    //checking required fields
                    if (data.name !== '' && data.comment !==''){
                        //if (validateEmail(data.email)){
                            console.log("validated");
                        // send data (?)
                            $('form').attr("action", "mailto:trinityrjbass@gmail.com?subject=form submit" +
                                    "&body= name%20:%20" + data.name +
                                    "%20mail%20:%20" + data.email + 
                                    "%20m/f%20:%20" + data.sex + 
                                    "%20age%20:%20" + data.age);
                            $('form').submit();
                            
                            console.log("mail sent");
                        // how? I'm not sure
                        //}
                        
                    }
                    
                    else {
                        alert("Alert! Required fields must be filled out");
                    }
                });
});
