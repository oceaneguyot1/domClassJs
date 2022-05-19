let divs = document.getElementsByClassName('jsClassSelector'); //retourne une collection d'élements


for (let i = 0; i < divs.length; i++) {
    let divIndiv = divs[i];

    //Ne pas oublier de les supprimer au fur et à mesure
    console.log('----------');
    console.log(i);
    console.log(divIndiv);
    console.log('----------');

    if (i != 2) {
        divIndiv.classList.add('jsClassStyle');
    } else {
        divIndiv.style.color = "green";
    }


}


let divsMap = Array.from(document.getElementsByClassName("jsClassSelector"));

divsMap.map(element => {
    element.classList.add('jsClassStyleMap');
})


let divForeach = document.querySelectorAll(".jsClassSelector"); //retourne une nodeList
let divForeachIndiv = document.querySelector(".jsClassSelector"); //retourne une nodeList

console.log(divForeach);
console.log(divForeachIndiv);

divForeach.forEach(element => {
    element.classList.add('jsClassStyleForeach');
})