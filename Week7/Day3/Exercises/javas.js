const nameElement = document.getElementById("name")
const heightElement = document.getElementById("height")
const genderElement = document.getElementById("gender")
const birthyearElement = document.getElementById("birth-year")
const homeworldElement = document.getElementById("home-world")

async function retrieveUserdata(id){
    const url = "https://www.swapi.tech/api/people/" + id;
    document.getElementById("error").classList.remove("show");
    document.getElementById("error").classList.add("hidden");
   try  {
    const res = await fetch(url)
    const resJson = await res.json();
    const {name, height, gender, birth_year, homeworld} = 
    resJson.result.properties;
    const homeworldName = await fetchHomeWorld(homeworld);
    [nameElement, heightElement, genderElement, birthyearElement, homeworldElement].forEach((el) =>{
        el.classList.add("show");
        el.classList.remove("hidden")
    }
);
    displayProperties(name, height, gender, birth_year, homeworldName)
} catch(error){
console.error(error);
document.getElementById("error").classList.add("show");
document.getElementById("error").classList.remove("hidden");
[nameElement, heightElement, genderElement, birthyearElement, homeworldElement].forEach((el) =>{
    el.classList.remove("show");
    el.classList.add("hidden")
}
);
}
}

function displayProperties(name, height, gender, birth_year, homeworld){
    const nameElement = document.getElementById("name")
    const heightElement = document.getElementById("height")
    const genderElement = document.getElementById("gender")
    const birthyearElement = document.getElementById("birth-year")
    const homeworldElement = document.getElementById("home-world")

    nameElement.innerText =  name;
    heightElement.innerText = "Height:" + " " + height + " " + "cm";
    genderElement.innerText = "Gender:" + " " + gender;
    birthyearElement.innerText = "Birth Year:" + " " + birth_year;
    homeworldElement.innerText = "Homeworld:" + " " + homeworld;
}


async  function fetchHomeWorld(homeworld){
   try{
    const res = await fetch(homeworld)
    const resJson = await res.json()
    const homeworldName =  resJson.result.properties.name;
    return homeworldName
   } catch (error){
   }
}


function handleClick(e){
    const randomId = getRandomId();
    retrieveUserdata(randomId)
}



function getRandomId(){
    const MAX_NUMBER = 83;
    return Math.floor(Math.random()* MAX_NUMBER + 1);
}

document.getElementById("button")?.addEventListener("click", handleClick);

