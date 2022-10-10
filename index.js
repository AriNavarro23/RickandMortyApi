const buttonAll = document.getElementById('buttonAll');
const cardGroup = document.getElementById('group');


//search all

//first step create a event
buttonAll.onclick = async () => {
    //second step create const where save fetch
    const info = await fetch ('https://rickandmortyapi.com/api/character');
    //create const for change json, of method fetch
    const infoJson = await info.json()
    const character = infoJson.results
    console.log(character)

    //create div for each character


}