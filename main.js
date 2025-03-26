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
//LLAMAR FUNCION

mas.addEventListener('click', () => {

    const tarea = input.value

    if(tarea) {

        agragarTarea(tarea)

    }

    input.value = "";

})