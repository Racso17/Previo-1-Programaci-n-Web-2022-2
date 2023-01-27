function getData() {

    const url = window.location.search;
    const parameters = new URLSearchParams(url);
    var gusto_data = parameters.get("gustoDato");
    var porcentaje_data = parameters.get("porcentajeDato");
    var nombre_data = parameters.get("name");
    var email_data = parameters.get("email");
    var telefono_data = parameters.get("phone");
    document.body.getElementsByClassName("nameData")[0].textContent = nombre_data;
    document.body.getElementsByClassName("emailData")[0].textContent = email_data;
    document.body.getElementsByClassName("phoneData")[0].textContent = telefono_data;
    document.body.getElementsByClassName("gustoData")[0].textContent = gusto_data;
    document.body.getElementsByClassName("porcentajeData")[0].textContent = porcentaje_data;
}