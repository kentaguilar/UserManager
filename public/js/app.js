$(function(){
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
		if($('#txtusername').val() != "" && $('#txtpassword').val() != ""){
			objParams = {	
				'username': $('#txtusername').val(),		
				'password': $('#txtpassword').val(),					
			};

			ApiHelper.saveData(
				"/api/auth-user", 
				objParams, 
				function(response){
					if(response.status){						
						window.location = "/dashboard";
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
	});
});

function clearRegistrationFields(){
	$('#txtname').val('');
	$('#txtemail').val('');
	$('#txtusername').val('');
	$('#txtpassword').val('');
	$('#txtname').focus();
}