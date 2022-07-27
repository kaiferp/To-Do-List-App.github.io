let getInputData = document.getElementById("inputValue");
let addItem = document.getElementById("btn");
let result = document.getElementById("result");

 addItem.addEventListener('click', function(){
        let para = document.createElement('p');
        para.innerText = getInputData.value;
        result.appendChild(para);

        let button = document.createElement('button');
          button.type = "button";
          button.innerHTML="Delete";
          result.appendChild(button);

          button.onclick = ()=>{
                para.innerText = "";
                button.innerHTML = "";
          }


 })