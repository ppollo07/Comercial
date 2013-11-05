$(document).ready(function() {

  RowPri = $('#rowP').position();
  MenuPri = $('#menuP').width();
  Hwindows = $('#wrap').height();
  $('#tiraGris').css({top:0, left:0, width:RowPri.left+MenuPri, height:Hwindows});

  $( window ).resize(function() {
    RowPri = $('#rowP').position();
    MenuPri = $('#menuP').width();
    Hwindows = $('#wrap').height();
    $('#tiraGris').css({top:0, left:0, width:RowPri.left+MenuPri, height:Hwindows});
  });

  $('.menuP > li.principal').on('click', function() {
    $('.menuP > li.principal').each(function(index, el) {
      $(this).attr({class: 'principal'});
    });
    $(this).attr({class: 'principal active'});
  });

  if($('#habilitado-switch').length){
    $('#habilitado-switch').bootstrapSwitch('setSizeClass', '');
  };
  
  if($('.selectpicker').length){
    $('.selectpicker').selectpicker({'selectedText': 'cat'});
  };

  if($('.input-group.date').length){
    $('.input-group.date').datepicker({
      format: "dd/mm/yy",
      language: "es",
      autoclose: true
    });
  };

  if($('.checkbox-control').length){
    $('input[type="checkbox"].checkbox-control').checkbox();
  };

  //$('.dropdown-toggle').dropdown();
  $('.dropdown-toggle').dropdown()



  /*----------Formulario logueo----------------*/

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

  /*----------Formulario  Listado Cliente----------------*/

  if($("form#form-listado-cliente")){
    $(function() {
            //$.validity.setup({ outputMode:"modal"});
            $("form#form-listado-cliente").validity(function() {
              $('#cliente').require();
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

  /*----------Formulario  Nuevo Cliente----------------*/

  if($("form#form-nuevo-cliente")){
    $(function() {
            //$.validity.setup({ outputMode:"modal"});
            $("form#form-nuevo-cliente").validity(function() {
              $('#nombre').require();
              $('#apellido').require();
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