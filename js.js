
var gravedadPlanetas = new Map();

gravedadPlanetas.set("Luna", 1.62)
gravedadPlanetas.set("Mercurio", 3.7)
gravedadPlanetas.set("Venus", 8.87)
gravedadPlanetas.set("Tierra", 9.807)
gravedadPlanetas.set("Marte", 3.71)
gravedadPlanetas.set("Jupiter", 24.79)
gravedadPlanetas.set("Saturno", 10.44)
gravedadPlanetas.set("Urano", 8.87)
gravedadPlanetas.set("Neptuno", 11.15)
gravedadPlanetas.set("#exampleFormControlInput1","#exampleFormControlInput1")
gravedadPlanetas.set()

var currentPlanet = ""
var currentPlanetDefault = ""

function setDatosDefault(planeta){

    currentPlanetDefault =  gravedadPlanetas.get(planeta)

}

function setDatosDefault(planeta){

    currentPlanetDefault =  gravedadPlanetas.get(planeta)

    
}

function setDatos(planeta){

    currentPlanet =  gravedadPlanetas.get(planeta)

    
}

function simularDefault(){

    console.log(currentPlanetDefault, gravedadPlanetas.get(currentPlanetDefault))

    contador1 = 0

    setInterval(function(){
        contador1 = contador1 + 1

        document.querySelector(".balon1").style.marginTop = contador+"px"

    },  currentPlanetDefault * 100)

}

function simular(){

    console.log(currentPlanet, gravedadPlanetas.get(currentPlanet))

    contador = 0

    setInterval(function(){
        contador = contador + 1

        document.querySelector(".balon").style.marginTop = contador+"px"

    },  currentPlanet * 100)

}


let refresh = document.getElementById('refresh');
refresh.addEventListener('click', _ => {
            location.reload();
})
