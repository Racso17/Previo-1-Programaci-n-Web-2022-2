var n =0;
function addData(){

    var cuerpo = document.getElementById("tableBody");
    var tableRow = document.createElement("tr");
    tableRow.setAttribute("id", "registro" + n.toString());
    var etiqueta1 = document.createElement("td");
    var etiqueta2 = document.createElement("td");
    var etiqueta3 = document.createElement("td");
    var enlace = document.createElement("a");
    var gusto = document.getElementById("gusto").value;
    var gusto_Dato = document.createTextNode(gusto);
    var porcentaje_Dato = document.createTextNode("0");
    var editContent = document.createTextNode("Editar");
    etiqueta1.setAttribute("id", "gusto"+n);
    etiqueta1.appendChild(gusto_Dato);
    etiqueta2.setAttribute("id", "porcentaje" + n);
    etiqueta2.appendChild(porcentaje_Dato);
    enlace.appendChild(editContent);
    enlace.setAttribute("onclick", "Editar(" + n +")");
    enlace.setAttribute("id", "Editar" + n);
    enlace.setAttribute("class", "link");
    enlace.setAttribute("style", "color: blue; font-weight: 800;")
    etiqueta3.appendChild(enlace);
    tableRow.appendChild(etiqueta1);
    tableRow.appendChild(etiqueta2);
    tableRow.appendChild(etiqueta3);
    cuerpo.appendChild(tableRow);
    n = n+1;
}


numfila = 0;
function Editar(number){
    numfila += 1;
    if (numfila <= 1) {
        var editRow = document.getElementById("Editar"+number);
        var editGusto = document.getElementById("gusto"+number);
        var editPorcentaje = document.getElementById("porcentaje"+number);
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementsByClassName("phone").value;

        var gustoDato= editGusto.innerHTML;
        var porcentajeDato = editPorcentaje.innerHTML;


        editGusto.innerHTML = "<input class='form - control' type='text' aria-label='default input example' size='15' name='gustoDato' id='gusto" + number + "value='" + gustoDato + "'>";
        editPorcentaje.innerHTML = "<input class='form - control' type='text' aria-label='default input example' size='3' name='porcentajeDato' id='porcentaje" + number + "value='" + porcentajeDato + "'>";

        editRow.innerHTML ="<span style='color:#a29ea0; font-weight: 400;'>En edicion</span>";
        document.body.getElementsByClassName('div1')[0].textContent = 'Pulse Aceptar para guardar los cambios o Cancelar para anularlos';
        document.body.getElementsByClassName('div2')[0].innerHTML = '<button type="submit" class="btn btn-outline-secondary" id="Aceptar" >Aceptar</button>';
        document.body.getElementsByClassName('div3')[0].innerHTML = '<button type="reset" class="btn btn-outline-danger" id="Cancelar" onclick="location.reload()">Cancelar</button>';

    }
    else {
        alert("Se puede editar una linea por cada vez, es necesario recargar la pagina");
    }
}