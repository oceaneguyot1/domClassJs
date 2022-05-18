let divs = document.getElementsByClassName('jsClassSelector');

for(let i=0; i<divs.length; i++){
    let divIndiv = divs[i];

    //Ne pas oublier de les supprimer au fur et à mesure
    console.log('----------');
    console.log(i);
    console.log(divIndiv);
    console.log('----------');

    if(i != 2){
        divIndiv.classList.add('jsClassStyle');
    } else {
        divIndiv.style.color = "green";
    }

    
}