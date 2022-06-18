let container = document.getElementById("container");
function creator(n){
    if(n>1){
        const rows = document.querySelectorAll(".rows");
        rows.forEach(element => {
            element.remove();
        });
    }
    if(n>200){
        n=200;
    }
    first(n);
}
function first(n){
    for(let i=0;i<n;i++){
        let row = document.createElement('div');
        row.classList.add("rows");
        container.appendChild(row);
        for(let j=0;j<n;j++){
            let div = document.createElement('div');
            div.classList.add("square","remove");
            div.addEventListener("mouseover", () => {
                div.classList.add("painted");
                })
            row.appendChild(div);
        }
    }  
} 
first(100);

let button = document.querySelector("button");
button.addEventListener("click",() => {creator(prompt("Please enter the amount of pixels."))})





