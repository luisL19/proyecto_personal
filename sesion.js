$(document).ready(function() {
    // Alternar entre el formulario de inicio de sesión y el formulario de registro
    $(".btn").click(function() {
        if ($(this).hasClass("signin-active")) {
            // Si es el botón de "Iniciar Sesión"
            $(".form-signin").removeClass("form-signin-left");
            $(".form-signup").addClass("form-signup-left");
            $(".frame").removeClass("frame-long").addClass("frame-short");
            $(".signin-active").removeClass("signin-active").addClass("signin-inactive");
            $(".signup-inactive").removeClass("signup-inactive").addClass("signup-active");
            $(".forgot").addClass("forgot-left");
        } else if ($(this).hasClass("signup-active")) {
            // Si es el botón de "Registrarse"
            $(".form-signin").addClass("form-signin-left");
            $(".form-signup").removeClass("form-signup-left");
            $(".frame").addClass("frame-long").removeClass("frame-short");
            $(".signin-active").removeClass("signin-inactive").addClass("signin-active");
            $(".signup-inactive").removeClass("signup-active").addClass("signup-inactive");
            $(".forgot").removeClass("forgot-left");
        }
    });

    // Mostrar el formulario de registro y ocultar el de inicio de sesión
    $(".btn-signup").click(function() {
        $(".nav").addClass("nav-up");
        $(".form-signup").removeClass("form-signup-left").addClass("form-signup-down");
        $(".success").addClass("success-left");
        $(".frame").addClass("frame-short");
    });

    // Mostrar el formulario de inicio de sesión y ocultar el de registro
    $(".btn-signin").click(function() {
        $(".btn-animate").toggleClass("btn-animate-grow");
        $(".welcome").toggleClass("welcome-left");
        $(".cover-photo").toggleClass("cover-photo-down");
        $(".frame").toggleClass("frame-short");
        $(".profile-photo").toggleClass("profile-photo-down");
        $(".btn-goback").toggleClass("btn-goback-up");
        $(".forgot").toggleClass("forgot-fade");
    });
});
