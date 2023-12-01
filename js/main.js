tinymce.init({
    selector: '#contenido'
});

const btnAbrirForo = document.getElementById('btnAbrirForo')
const btnCerrarForo = document.getElementById('btnCerrarForo')
const btnPublicar = document.getElementById('btnPublicar')
const formularioForo = document.getElementById('formularioForo')
const publicaciones = document.getElementById('publicaciones')
const contenido = document.getElementById('contenido')
const classButtons = 'btn btn-'

btnAbrirForo.addEventListener('click', function() {
    btnAbrirForo.setAttribute('class', 'd-none')
    btnCerrarForo.removeAttribute('class')
    btnCerrarForo.setAttribute('class', classButtons+ 'danger')

    formularioForo.removeAttribute('class')
    formularioForo.setAttribute('class', 'row')
})

btnCerrarForo.addEventListener('click', function() {
    btnCerrarForo.setAttribute('class', 'd-none')
    btnAbrirForo.removeAttribute('class')
    btnAbrirForo.setAttribute('class', classButtons +'primary')

    formularioForo.removeAttribute('class')
    formularioForo.setAttribute('class', 'd-none')

})

btnPublicar.addEventListener('click', function() {
    publicaciones.innerHTML = `
    <div class="border p-2 mb-3 rounded-pill">
    ${contenido}
    </div>
    `
})