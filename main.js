const fecha = document.getElementById("fecha");

const input = document.getElementById("agregar_una_tarea");

const mas = document.getElementById("agragar");

const lista = document.getElementById("Thi_ul");

const hecho = 'fa-check-circle';

const pendiente = 'fa-circle';

const tachado = 'tachado';

let id = 0;

const fechaActual = new Date();

fecha.innerHTML = fechaActual.toLocaleDateString('es-AR', {

    weekday:'long',
    
    month:'long',
    
    day:'numeric'

});

const agragarTarea = (tarea, check, eliminado, id) => {

    if(eliminado) {return}

    const estado = check? hecho : pendiente;

    const tachar = check? tachado : "";

    const elemento = `<li class="Thi_li">
                    
                    <i class="far ${estado} check" id="check${id}" data="check"></i>
                    
                    <p class="tarea ${tachar}"> ${tarea} </p>
                    
                    <i class="fas fa-trash de" id="borrar${id}" data="borrar"></i>
                
                </li>`

                lista.insertAdjacentHTML("beforeend", elemento);
};

const tareaRealizada = (element) => {

    element.classList.toggle(hecho);

    element.classList.toggle(pendiente);

    element.parentNode.querySelector('.tarea').classList.toggle(tachado);
};

const tareaEliminada = (element) => {

    element.parentNode.parentNode.removeChild(element.parentNode);
}

const cambiarEstilo = () => {

    const link = document.getElementById('style');

    link.href = link.href.includes("style.css")? "style2.css" : "style.css";
};

//LLAMAR FUNCION POR CLICK

mas.addEventListener('click', () => {

    const tarea = input.value

    if(tarea) {

        agragarTarea(tarea, false, false,id);

        id++;

    }

    input.value = "";

});
//LLAMAR POR ENTER

document.addEventListener('keyup', (e) => {

    if(e.key == 'Enter') {

        const tarea = input.value

    if(tarea) {

        agragarTarea(tarea, false, false,id);

        id++;

    }

    input.value = "";

    }
    
});

lista.addEventListener('click', function(event) {

    const element = event.target;

    const elementData = element.attributes.data.value;

    if(elementData == 'check'){
        
        tareaRealizada(element)

    }

    else if(elementData == 'borrar'){

        tareaEliminada(element)

    }
});