const fecha = document.getElementById("fecha");

const input = document.getElementById("agregar_una_tarea");

const mas = document.getElementById("agragar");

const lista = document.getElementById("Thi_ul");

const hecho = 'fa-check-circle';

const pendiente = 'fa-circle';

const tachado = 'tachado';

let id = 0;

let LIST = [];

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
                    
                    <i class="far ${estado} check" id="${id}" data="check"></i>
                    
                    <p class="tarea ${tachar}"> ${tarea} </p>
                    
                    <i class="fas fa-trash de" id="${id}" data="borrar"></i>
                
                </li>`

                lista.insertAdjacentHTML("beforeend", elemento);
};

const tareaRealizada = (element) => {

    element.classList.toggle(hecho);

    element.classList.toggle(pendiente);

    element.parentNode.querySelector('.tarea').classList.toggle(tachado);

    LIST[element.id].check = !LIST[element.id].check;
    console.log(LIST[element.id]);
};

const tareaEliminada = (element) => {

    element.parentNode.parentNode.removeChild(element.parentNode);

    LIST[element.id].eliminado = true;
    console.log(LIST[element.id]);
}

const cambiarEstilo = () => {

    const link = document.getElementById('style');

    link.href = link.href.includes("style.css")? "style2.css" : "style.css";
};

//LLAMAR FUNCION POR CLICK

mas.addEventListener('click', () => {

    const tarea = input.value

    if(tarea.length > 20) {

        alert("La tarea no puede tener mas de 20 caracteres")

        return;

    }

    if(tarea) {

        agragarTarea(tarea, false, false, id);

        LIST.push({

            tarea:tarea,
            
            check:false,
            
            eliminado:false,

            id:id

        });

        localStorage.setItem('GUARDADO',JSON.stringify(LIST));

        id++;

    }

    input.value = "";
console.log(LIST);
});
//LLAMAR POR ENTER

document.addEventListener('keyup', (e) => {

    if(e.key == 'Enter') {

        const tarea = input.value

        if(tarea.length > 20) {

            alert("La tarea no puede tener mas de 20 caracteres")
    
            return;
            
        }

    if(tarea) {

        agragarTarea(tarea, false, false, id);

        LIST.push({

            tarea:tarea,
            
            check:false,
            
            eliminado:false,

            id:id

        });

        localStorage.setItem('GUARDADO',JSON.stringify(LIST));

        id++;

    }

    input.value = "";
console.log(LIST);
    }

});

lista.addEventListener('click', function(event) {

    const element = event.target;

    const elementData = element.getAttribute("data");

    if(elementData == 'check'){
        
        tareaRealizada(element)

    }

    else if(elementData == 'borrar'){

        tareaEliminada(element)

    }

    localStorage.setItem('GUARDADO',JSON.stringify(LIST));

});

let data = localStorage.getItem('GUARDADO');

if(data){

    LIST = JSON.parse(data);
    console.log(LIST);

    id = LIST.length;

    cargarLista(LIST);
}else {

    LIST = [];

    id = 0;
};

function cargarLista(array){

    array.forEach(function(item){

        agragarTarea(item.tarea,item.id,item.check,item.eliminado)
    })
};