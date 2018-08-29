$(function(){
	$('#txtusernamename').focus();
	$('.btn-register-now').click(function(){
		if($('#txtname').val() != "" && $('#txtusername').val() != "" && $('#txtpassword').val() != ""){
			objParams = {	
				'name': $('#txtname').val(),		
				'email': $('#txtemail').val(),			
				'username': $('#txtusername').val(),		
				'password': $('#txtpassword').val(),					
			};

			ApiHelper.saveData(
				"/api/register-user", 
				objParams, 
				function(response){
					if(response.status){
						clearRegistrationFields();
						toastr.success("User successfully saved!");
					}
					else{
						toastr.warning("Error while saving leave");
					}
				}
			);
		}
		else{
			toastr.warning("Please enter required fields");
		}
	});

	$('.btn-login-now').click(function(){
		authenticateUser();
	});

	$('#txtpassword').keypress(function(e){
		if (e.keyCode == 13) {
			authenticateUser();
		}
	});
});

function clearRegistrationFields(){
	$('#txtname').val('');
	$('#txtemail').val('');
	$('#txtusername').val('');
	$('#txtpassword').val('');
	$('#txtname').focus();
}

function authenticateUser(){
	if($('#txtusername').val() != "" && $('#txtpassword').val() != ""){
		objParams = {	
			'username': $('#txtusername').val(),		
			'password': $('#txtpassword').val(),					
		};

		ApiHelper.saveData(
			"/api/auth-user", 
			objParams, 
			function(obj){
				console.log(obj);
				if(obj.response.status){						
					window.location = "/dashboard?id=" + obj.response.result._id + "&name=" + obj.response.result.name;
				}
				else{
					toastr.warning("Login failed. Please enter correct credentials");
				}
			}
		);
	}
	else{
		toastr.warning("Please enter required fields");
	}
}