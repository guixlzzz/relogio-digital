function carregar() {
    var date = new Date()
    var hora = date.getHours()
    var minuto = date.getMinutes()
    var segundos = date.getSeconds()
    var m = document.getElementById('m')
    var h = document.getElementById("h")
    var s = document.getElementById('s')
    m.innerHTML = minuto
    h.innerHTML = hora
    s.innerHTML = segundos
    setInterval(carregar, 1000)
}