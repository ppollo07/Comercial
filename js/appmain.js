$(document).ready(function() {

    if($("form#form-signin")){
        $(function() {
            //$.validity.setup({ outputMode:"modal"});
            $("form#form-signin").validity(function() {
                $('#usuario').require();
                $('#password').require();
                var result = $.validity.end();
                console.log(result.valid);    
                if (result.valid == true) {
                    //Envia_form();
                    return false
                }else{
                    
                };
            });
        });     
    }

});


function Envia_form() {
    $.ajax({    
        url: "script_form.php",
        type: 'POST',
        data:{},
        beforeSend: function (datos) {
            console.log(datos);
        },
        complete: function(datos) {
            console.log(datos);
        },
        error : function(xhr, textStatus, errorThrown) {
            console.log(xhr+"- "+textStatus+"- "+errorThrown);
        },
        success: function(datos){ 
            shareApp('facebook');
            console.log(datos);
        }
    });
    return false;
}