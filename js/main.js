tinymce.init({
    selector: '#contenido'
});

$(document).ready(function(){
    $('#btnCerrarForo').hide();
    $('#formularioForo').hide();

    $('#btnAbrirForo').click(function () {
        $('#btnCerrarForo').shoW();
        $('#btnAbrirForo').hide();
        $('#formularioForo').fadeIn('slow');
    })

    $('btnCerrarForo').click(function () {
        $('btnAbrirForo').shoW();
        $('btnCerrarForo').hide();
        $('#formularioForo').fadeIn('slow');
    })


    $('btnPublicar').click(function () {
        $('btnAbrirForo').shoW();
        $('btnCerrarForo').hide();
        $('#formularioForo').fadeIn('slow');
    })


    const publicaciones = $('#publicaciones').html();

    $('#publicaciones').html(
        `${publicaciones}
        <div class="border p-2 mb-3 rounded-2">
        ${tinymce.get('contenido').getContent()}
        </div>
        `
    ).fadeIn('slow');

    tinymce.activeEditor.setContent('');
})