
$(document).ready(function() {

    $('#data-success').hide();
    // Validate First Name
    $('#Firstcheck').hide();
    let firstnameError = true;  
    $('#first_name').keyup(function(){
        validateFirstName();
    });

    function validateFirstName() {
        let firstname = $('#first_name').val();

        if(firstname.length == '') {
            $('#Firstcheck').show();
            firstnameError = false;
            return false; 
        }
        else if ((firstname.length < 3) || (firstname.length > 10)) {
            $('#Firstcheck').show();
            $('#Firstcheck').html("First name between 3 to 15");
            firstnameError = false;
            return false;
        }
        else {
            $('#Firstcheck').hide();
        }
    }

    //  Validate last Name 
    $('#Lastcheck').hide();
    let lastnameError = true;  
    $('#last_name').keyup(function(){
        validateLastName();
    });

    function validateLastName() {
        let lastname = $('#last_name').val();

        if(lastname.length == '') {
            $('#Lastcheck').show();
            lastnameError = false;
            return false; 
        }
        else if ((lastname.length < 3) || (lastname.length > 10)) {
            $('#Lastcheck').show();
            $('#Lastcheck').html("Last name between 3 to 15");
            lastnameError = false;
            return false;
        }
        else {
            $('#Lastcheck').hide();
        }
    }

    // Validate Email 
     $('#Emailcheck').hide();
     let emailError = true;  
     $('#email').blur(function(){
         validateEmail();
     });

 
     function validateEmail() {
        let email = $('#email').val();
        // console.log(email);
        let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        
         if(email.length == '') {
             $('#Emailcheck').show();
             emailError = false;
             return false; 
         }
         else if (!regex.test(email)) {
             $('#Emailcheck').show();
             $('#Emailcheck').html("Enter Valid Email.");
             emailError = false;
             return false;
         }
         else {
             $('#Emailcheck').hide();
         }
     }


    //   Validate Mobile number

    $('#Mobcheck').hide();
     let mobError = true;  
     $('#mob_num').keyup(function(){
         validateMob();
     });

 
     function validateMob() {
        let mob = $('#mob_num').val();
        // console.log(email);
        const regex = /^([+]\d{2})?\d{10}$/;
        
         if(mob.length == '') {
             $('#Mobcheck').show();
             mobError = false;
             return false; 
         }
         else if (mob.length <= 10 || regex.test(mob)) {
             $('#Mobcheck').show();
             $('#Mobcheck').html("Enter Valid Mobile number.");
             mobError = false;
             return false;
         }
         else {
             $('#Mobcheck').hide();
         }
     }

     $('#Filecheck').hide();
    //  let fileError = true;  
    //  $('#stu_img').click(function(){
         
    //     if($('#stu_img').val() == '') {
    //         $('#Filecheck').show();
    //         $('#Filecheck').html("Plz Select File");
    //         fileError = false;
    //         return false;
    //     }
    //     else {
    //         $('#Filecheck').hide();
    //     }
    //  });





    // Submit the Form 
    $('#student_form').submit(function(event) {
        event.preventDefault();

        validateFirstName();
        validateLastName();
        validateEmail();
        validateMob();


        var form = $('#student_form')[0];
        // var data = form.serialize();
        // console.log(data);
        var formdata = new FormData(form);
        
        // formdata.append('image', $('#stu_img')[0].files[0]);
        

        $.ajax({
            type: 'POST',
            headers: {
                'Content-Type': "application/json",
            },
            dataType: 'json',
            // enctype: 'multipart/form-data',
            url: '/api/studentReg/',
            processData: false,
            ContentType: false,
            data: JSON.stringify(formdata),
            success :function(data){
                $('#data-success').show();
                console.log(data);
                // $('#subBtn').prop('disabled', false);
            },
            error: function(e) {
                console.log(e);
            }
        });


    });
});