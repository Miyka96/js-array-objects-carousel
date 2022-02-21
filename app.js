// CREO ARRAY PER IMG
const images = ["img-carousel/img-1.jpg", 
                "img-carousel/img-2.jpeg",
                "img-carousel/img-3.jpg",
                "img-carousel/img-4.jpg",
                "img-carousel/img-5.jpg",
                "img-carousel/img-6.jpg"];


// CREO ARRAY PER TITOLO DESCRIZIONI
const descriptionTitle = ["Doom Eternal", 
                          "Hollow Knight", 
                          "Undertale", 
                          "Bloodborne", 
                          "The Legend of Zelda BOTW", 
                          "Death Stranding"];

const descriptionP = ["Questo gioco è ottimo per rilassarsi, spaccare il cranio ai demoni si è rivelato scientificamente antistress",
                      "Questo metroidvania è un capolavoro indie, platform, roguelike con una lore dalle sfumature soulslike",
                      "Questo è puro meta, ha cambiato la storia del gaming, pioniere e rivoluzionario",
                      "Questo è uno dei più bei soulslike di sempre, gioco di punta della From Software",
                      "Questo gioco è uno dei migliori Zelda open world di sempre",
                      "Questo è un capolavoro autoriale del maestro Hideo Kojima"];

// CREO VARIABILI PER I DUE BUTTON
const btnUp = document.querySelector('.up');
const btnDown = document.querySelector('.down');

// CREO VARIABILE PER INSERIRE I DIV NELLA ROW-COLS-6 ,NELL'IMG-WRAPPER, NEL DESCR.TITLE WRAPPER.
let imgWrapper= document.querySelector('.img-wrapper')
let previewWrapper = document.querySelector('.row-cols-6');
let descriptionTitleWrapper=document.querySelector('.description');
let descriptionPWrapper= document.querySelector('.description-bis')

// CREO CICLI

let currentIndex = 0

// Ciclo per immagini grandi
for ( let i=0; i<images.length; i++){
    const previewImages = `<img src="${images [i]}">`;
    const imgDivItem = document.createElement('div');
    imgWrapper.append(imgDivItem);
    imgDivItem.classList.add('item');
    imgDivItem.innerHTML=previewImages;

    if(currentIndex===i){
        imgDivItem.classList.add('active');
    }
}

// Ciclo per le anteprime a destra
for ( let i=0; i<images.length; i++){
    const previewImages = `<img src="${images [i]}">`;
    const rowCol = document.createElement('div');
    previewWrapper.append(rowCol);
    rowCol.classList.add('row-col-2');
    rowCol.innerHTML=previewImages;

    if(currentIndex===i){
        rowCol.classList.add('active-preview');
    }
}


// Ciclo per i Titoli della descrizione 
for (let i=0; i<descriptionTitle.length; i++){
    const titleContent = `${descriptionTitle [i]}`;
    const titleTag = document.createElement('h3');
    descriptionTitleWrapper.append(titleTag);
    titleTag.classList.add('description-title');
    titleTag.innerHTML=titleContent;

    if(currentIndex===i){
        titleTag.classList.add('active');
    }
}

// Ciclo per i paragrafi della descrizione
for (let i=0; i<descriptionP.length; i++){
    const paragraphContent = `${descriptionP [i]}`;
    const paragraphTag = document.createElement('p');
    descriptionPWrapper.append(paragraphTag);
    paragraphTag.classList.add('description-text');
    paragraphTag.innerHTML=paragraphContent;

    if(currentIndex===i){
        paragraphTag.classList.add('active');
    }
}


// -------------------------------------------------------------------------------------

// Creo delle variabili per selezionare contemporaneamente tutti i div dove ho messo le imagini e le descrizioni
let rowColGroup = document.querySelectorAll('.row-col-2');
let imgDivGroup = document.querySelectorAll('.item')
let titleDivGroup = document.querySelectorAll('.description-title');
let paragraphGroup = document.querySelectorAll('.description-text');


// Aggiungo gli event listener ai bottoni
btnDown.addEventListener('click', function(){
    if(currentIndex<5){
        rowColGroup [currentIndex].classList.remove('active-preview');
        imgDivGroup [currentIndex].classList.remove('active');
        titleDivGroup [currentIndex].classList.remove('active');
        paragraphGroup [currentIndex].classList.remove('active');
        currentIndex++
        rowColGroup [currentIndex].classList.add('active-preview');
        imgDivGroup [currentIndex].classList.add('active');
        titleDivGroup [currentIndex].classList.add('active');
        paragraphGroup [currentIndex].classList.add('active');
    }
    else if(currentIndex==5){
        rowColGroup [currentIndex].classList.remove('active-preview');
        imgDivGroup [currentIndex].classList.remove('active');
        titleDivGroup [currentIndex].classList.remove('active');
        paragraphGroup [currentIndex].classList.remove('active');
        currentIndex=0
        rowColGroup [currentIndex].classList.add('active-preview');
        imgDivGroup [currentIndex].classList.add('active');
        titleDivGroup [currentIndex].classList.add('active');
        paragraphGroup [currentIndex].classList.add('active');

    }
})

btnUp.addEventListener('click' , function(){
    if(currentIndex>0){
        rowColGroup [currentIndex].classList.remove('active-preview');
        imgDivGroup [currentIndex].classList.remove('active');
        titleDivGroup [currentIndex].classList.remove('active');
        paragraphGroup [currentIndex].classList.remove('active');
        currentIndex--
        rowColGroup [currentIndex].classList.add('active-preview');
        imgDivGroup [currentIndex].classList.add('active');
        titleDivGroup [currentIndex].classList.add('active');
        paragraphGroup [currentIndex].classList.add('active');
    }
    else if(currentIndex==0){
        rowColGroup [currentIndex].classList.remove('active-preview');
        imgDivGroup [currentIndex].classList.remove('active');
        titleDivGroup [currentIndex].classList.remove('active');
        paragraphGroup [currentIndex].classList.remove('active');
        currentIndex=5
        rowColGroup [currentIndex].classList.add('active-preview');
        imgDivGroup [currentIndex].classList.add('active');
        titleDivGroup [currentIndex].classList.add('active');
        paragraphGroup [currentIndex].classList.add('active');
    }
})

