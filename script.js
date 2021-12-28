const container$$ = document.querySelector(".container");
const divAddText$$ = document.querySelector(".addText");
const input$$ = document.querySelector("input");
const addButton$$ = document.querySelector(".add");
const divLiContainer$$ = document.querySelector(".li-container");
const ul$$ = document.createElement("ul");
divLiContainer$$.appendChild(ul$$);
const divEmpty$$ = document.querySelector(".empty");

let liCount = 0;

function addItem() {
    if (input$$.value == '' || input$$.value == undefined){
        alert("¡Tienes que escribir algo!");
    } else {
        const createdDivLi$$ = document.createElement('li');
        ul$$.appendChild(createdDivLi$$);
        const createdLi$$ = document.createElement('p');
        createdLi$$.innerText= input$$.value;
        createdDivLi$$.appendChild(createdLi$$);
        createdDivLi$$.classList.add("elementoLista");
        liCount++;
        
        const deleteButton$$ = document.createElement('button');
        deleteButton$$.innerText = "X";
        deleteButton$$.addEventListener('click', () => {
            createdDivLi$$.remove();
            liCount--;
            if (liCount == 0) {
                divEmpty$$.style.visibility = "visible";
            }
        });
        createdDivLi$$.appendChild(deleteButton$$);
        input$$.value = "";
    };
    if (liCount > 0) {
        divEmpty$$.style.visibility = "hidden";
    };
    
};

addButton$$.addEventListener('click', addItem);

