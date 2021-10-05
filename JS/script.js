var inputs = document.getElementsByClassName ('formulario__input');
for (var i = 0; i < inputs.length; i++){
    inputs[i].addEventListener('keyup', function(){
        if(this.value.length>=1){
            this.nextElementSibling.classList.add('fijar');
        }else{
            this.nextElementSibling.classList.remove('fijar');
        }
    });
}

$('#formulario').on('submit',function(e){
    e.preventDefault();
    const ciudad = $('#ciudad').val()
    if(ciudad.toLowerCase() == 'bogota'){
        return $('form')[0].submit()
    }
    alert('No atendemos en ' + ciudad)
    const email = $('#email').val()
    if (!isEmail(email))
    {
        alert('Este no es un correo valido')
    }
})
function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }