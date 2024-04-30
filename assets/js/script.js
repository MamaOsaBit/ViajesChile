/* Scroll top animacion hash */
$(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});


/* Formulario */
$(".btn-info").click(function(){
    var mensaje = $("#exampleFormControlTextarea1").val(); // Obtener el valor del campo de mensaje
    if (mensaje.trim() === "") { // Verificar si el mensaje está vacío después de eliminar los espacios en blanco
        alert("Por favor, ingrese un mensaje.");
    } else {
        alert("El mensaje ha sido enviado.");
        $("#exampleFormControlInput1").val(""); // Limpiar el campo de nombre
        $("#exampleFormControlInput2").val(""); // Limpiar el campo de asunto
        $("#exampleFormControlTextarea1").val(""); // Limpiar el campo de mensaje
    }
});




