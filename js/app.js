var App = {
    Contenidos : {

    },
    PersonasControl : {
        init : function() {
            App.PersonasControl.controlUser();
        },
        newUser : function(persona) {
            console.log(persona);
            persona.Sexo(persona.sexo);
            document.getElementById('avatar').innerHTML = persona.avatar;
            document.getElementById('id').value = persona.id;
            document.getElementById('nombre').value = persona.nombre;
            document.getElementById('apellido').value = persona.apellido;
            document.getElementById('mail').value = persona.mail;
            document.getElementById('birthday').value = persona.birthday;
            //document.getElementById('edad').value = persona.edad;
            document.getElementById('telefono').value = persona.telefono;
            document.getElementById('sexo').options.selectedIndex = persona.sexo;
            document.getElementById('usuario').value = persona.usuario;
            $('#formulario').fadeIn();
            $('#capa_control').fadeIn();
        },
        isLogin : function() {},
        showLogin : function() {},
        controlUser : function() {
            if (typeof this.config === 'object'){
                if (this.config.logueo === 'false'){
                    //console.log("no pasa");
                    return false;
                }else{
                    //console.log("pasa");
                };  
            }
        },
        offLogin : function() {
            var datosUser = {
                logueo : null,
                id:null,
                mail:null,
                telefono:null
            }
        }
    }
}
App.PersonasControl.init();