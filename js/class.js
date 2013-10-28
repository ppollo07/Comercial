var Personas = function () {
    this.loguin = false;
    this.id = "";
    this.usuario = "";
    this.nombre = "";
    this.apellido = "";
    this.mail = "";
    this.birthday = "";
    this.edad = "";
    this.sexo = "";
    this.telefono = "";    

    this.Validar = function (){
        if(this.id == ""){
            return "ID OB";
        }
        if(this.nombre == ""){
            return "nombre OB";
        }
    }

    this.Sexo = function (dato) {
        if(dato == "male"){
            this.sexo = "1";
            return this.sexo;
        }
        if(dato == "female"){
            this.sexo = "0";
            return this.sexo;
        }
    }

    this.Edad = function (dato) {
        var fecha = dato.split('/');
        monthEdad = fecha[0];
        dayEdad = fecha[1];
        yearEdad = fecha[2];
        console.log(dayEdad+'/'+monthEdad+'/'+yearEdad);

        var date_now = new Date();
        var day = date_now.getDate();
        var month = date_now.getMonth();
        var year = date_now.getFullYear();
        console.log(day+'/'+month+'/'+year);
        fullEdad = year - yearEdad;

        if (month < (monthEdad - 1)){
            fullEdad--;
        }
        if (((monthEdad - 1) === month) && (day < dayEdad)){
            fullEdad--;
        }
        if (fullEdad > dato){
            fullEdad -= dato;
        }

        this.edad = fullEdad;
        return this.edad;
    }
}
/*
function Personas () {
    this.loguin = false;
    this.id;
    this.nombre;
    this.apellido;
    this.mail;
    this.telefono;
    this.edad;

    this.Validar = function (){
        if(this.id == ""){
            return "ID OB"
        }
        if(this.nombre == ""){
            return "nombre OB"
        }
    }
}
*/