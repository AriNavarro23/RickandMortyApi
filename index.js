const buttonAll = document.getElementById('buttonAll');
const cardGroup = document.getElementById('group');
const buttonFilter = document.getElementById('buttonFilter');
const inputName = document.getElementById('name');
const selectStatus = document.getElementById('select');


//search all

//first step create a event
buttonAll.onclick = async () => {
    //second step create const where save fetch
    const info = await fetch('https://rickandmortyapi.com/api/character');
    //create const for change json, of method fetch
    const infoJson = await info.json()
    const character = infoJson.results
    console.log(character)
    character.splice(10)
    character.forEach((element) => {
        const divCharacter = document.createElement('div')
            divCharacter.setAttribute('class','card')
            divCharacter.innerHTML = `
                    <img src=${element.image} class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${element.name}</h5>
                        <p class="card-text">${element.status}</p>
                        <p class="card-text"><small class="text-muted">${element.species}</small></p>
                    </div>`
        cardGroup.append(divCharacter)
    });

    //create div for each character


}