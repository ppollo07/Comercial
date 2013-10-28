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