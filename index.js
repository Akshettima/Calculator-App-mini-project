let output  = document.querySelector("#display");
let buttons  = document.querySelectorAll(".digit");
for(i of buttons){
    i.addEventListener("click", function(){
        output.value += this.getAttribute("data-value")
    })
}
let remove = document.querySelector("#clear");
remove.addEventListener("click", function(){
    output.value = "";
})

let answer = document.querySelector("#equal");
answer.addEventListener("click", function(){
    try{
        output.value = eval(output.value);
    }
    catch{
        display.value = "error";
    }
    
})