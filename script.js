let divs = document.getElementsByClassName('jsClassSelector'); //retourne une collection d'élements

var tab = [];

tab[0] = "oceane";
tab[1] = "guyot";
tab[2] = "formatrice";

for (let i = 0; i < divs.length; i++) {
    let divIndiv = divs[i]; //récupération de l'élément html

    let idDivIndiv = divIndiv.id; //Récupérer l'id d'un élément

    if(idDivIndiv === "inputTest"){

    }

    //Ne pas oublier de les supprimer au fur et à mesure
    console.log('----------');
    console.dir(divIndiv); //Récupérer le liste des propriété de l'élement
    console.log(idDivIndiv);
    console.log('----------');

    if (i != 2) {
        divIndiv.classList.add('jsClassStyle');
    } else {
        divIndiv.style.color = "green";
    }


}


let divsMap = Array.from(document.getElementsByClassName("jsClassSelector"));

divsMap.map(data => {
    data.classList.add('jsClassStyleMap');
})



let divForeach = document.querySelectorAll(".jsClassSelector"); //retourne une nodeList
let divForeachIndiv = document.querySelector(".jsClassSelector"); //retourne une nodeList

console.log(divForeach[2]);
console.log(divForeachIndiv);

divForeach.forEach(element => {
    element.classList.add('jsClassStyleForeach');
})


//Changer la valeur d'un attribut html
document.getElementById('inputTest').addEventListener('click',(e)=>{
    document.getElementById('inputTest').type = "password";
})





//test REGEX
let texte = "Wikipédia est une encyclopédie universelle et multilingue créée par Jimmy Wales et Larry Sanger le 15 janvier 2001.";


let regex = /(é)/gm;

console.log(texte.search(regex))

let textear = texte.replace('é', '@');

console.log(textear);

let textesplit = texte.split(' ');
console.log(textesplit);