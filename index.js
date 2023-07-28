// Pegar os dados do input
// criar os elementos HTML pelo JS
// Mostrar esses elementos pro usuário
// Salvar no localStorage
// Atualizar a pagina com os dados do LocalStorage
let controller = ()=>{
    let getData = ()=>{
        let form = document.querySelector(".form");
        form.addEventListener("submit", (event)=>{
            event.preventDefault();
            let input = document.querySelector(".input").value;
            setElements(input);
        } )
    }
    getData();
    let setElements = (value)=>{
        //Criando tags HTML pelo JS
        let div = document.createElement("div"); 
        let input = document.createElement("input"); 
        let p = document.createElement("p"); 
        // Add atributos as tags
        div.setAttribute("class", "msgContainer");
        input.setAttribute("type", "checkbox");
        p.setAttribute("class", "msg");
        // Criando estrutura HMTL
        div.appendChild(input);
        div.appendChild(p);
        p.innerHTML = value;
        showListToUser(div);
        saveDataInTheLocalStorage(value)
    }
    let saveDataInTheLocalStorage = (value)=>{
        localStorage.setItem(value, value);
    }
    let showListToUser = (div)=>{
         //Mostrando dados para o Usuário
         let container = document.querySelector(".container");
         container.appendChild(div)
         cleanInput()
    }
    let cleanInput = ()=>{
        let input = document.querySelector(".input");
        input.value = "";
    }
    let onLoad = ()=>{
        let sizeLocal = localStorage.length
        if(sizeLocal > 0 ){
            for (let i = 1; i <= sizeLocal; i++) {
                let data = localStorage.key(i-1)
                setElements(data);
              }
        }
    }
    onLoad()
}
controller();