const input = document.getElementById("agregar_una_tarea");

const mas = document.getElementById("agragar");

const lista = document.getElementById("Thi_ul");

const agragarTarea = (tarea) => {

    const elemento = `<li class="Thi_li" id="Thi_li">
                    
                    <i class="fas fa-circle co" id="check" data-="check"></i>
                    
                    <p class="tarea tachado" id="tarea"> ${tarea} </p>
                    
                    <i class="fas fa-trash de" id="borrar" data-="borrar"></i>
                
                </li>`

                lista.insertAdjacentHTML("beforeend", elemento);
};

const cambiarEstilo = () => {

    const link = document.getElementById('style');

    link.href = link.href.includes("style.css")? "style2.css" : "style.css";
};
//LLAMAR FUNCION POR CLICK

mas.addEventListener('click', () => {

    const tarea = input.value

    if(tarea) {

        agragarTarea(tarea)

    }

    input.value = "";

});
//LLAMAR POR ENTER

document.addEventListener('keyup', (e) => {

    if(e.key == 'Enter') {

        const tarea = input.value

    if(tarea) {

        agragarTarea(tarea)

    }

    input.value = "";

    }
    
});

