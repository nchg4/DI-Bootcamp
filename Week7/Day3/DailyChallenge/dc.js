const planets = [
    {name: "mercury", moons: 0 }, 
    {name: "venus", moons:  0}, 
    {name: "earth", moons: 1 },
    {name: "mars", moons: 2},
    {name: "jupiter", moons: 95},
    {name: "saturn", moons: 146},
    {name: "uranus", moons: 27}, 
    {name: "neptune", moons:  14}
 ]

for(const planet of planets) {
  console.log('planet:', planet);
  const div = document.createElement('div');
  div.classList.add('planet');
  div.classList.add(planet.name);
  console.log('div:', div);

for (let i=0;i < planet.moons;i++){
    const moonDiv = document.createElement("div")
    moonDiv.classList.add("moon")
    moonDiv.style.left = i * 10 + 'px'
    div.appendChild(moonDiv)
}

  const section = document.querySelector(".listPlanets")
  section.appendChild(div)
}

