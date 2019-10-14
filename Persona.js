class Persona {
    constructor(nombre, hambre, sueño, sed, diversion, ganas_sexo) {
        this.nombre = nombre;
        this.hambre = hambre;
        this.sueño = sueño;
        this.sed = sed;
        this.diversion = diversion;
        this.ganas_sexo = ganas_sexo;
    }
    comer() {
        this.hambre -= 2;
        this.sueño++;
        this.sed++;
        this.diversion++;
        this.ganas_sexo++;
    }
    dormir() {
        this.hambre++;
        this.sueño -= 2;
        this.sed++;
        this.diversion++;
        this.ganas_sexo++;
    }
    beber() {
        this.hambre++;
        this.sueño++;
        this.sed -= 2;
        this.diversion++;
        this.ganas_sexo++;
    }
    jugar_videojuegos () {
        this.hambre++;
        this.sueño++;
        this.sed++;
        this.diversion -= 2;
        this.ganas_sexo++;
    }
    hacerse_paja() {
        this.hambre++;
        this.sueño++;
        this.sed++;
        this.diversion++;
        this.ganas_sexo -= 2;
    }
    static IMC(altura, peso) {
        return (altura / (peso ** 2)) * 10000 
    }
}

var personaje = prompt("Elige a tu personaje: Ramón, Sofía o Manolo");
personaje = personaje.toLowerCase();
if (personaje !== "sofía" && personaje !== "manolo" && personaje !== "ramón") {
    var personaje = prompt("Elige a un personaje válido: Ramón, Sofía o Manolo");
} else if (personaje === "ramón") {
    personaje = new Persona("Ramón", 5, 5, 5, 5, 5);
} else if (personaje === "sofía") {
    personaje = new Persona("Sofía", 4, 4, 4, 6, 6);
} else if (personaje === "manolo") {
    personaje = new Persona("Manolo", 3, 3, 6, 4, 3);
}
//Parámetros: hambre, sueño, sed, diversion, ganas_sexo
while (personaje.hambre < 10 && personaje.sueño < 10 && personaje.sed < 10 && personaje.diversion < 10 && personaje.ganas_sexo < 10) {
    var action = prompt("Escoge una acción: \n -Comer. \n -Beber. \n -Dormir. \n -Jugar a videojuegos. \n -Masturbarse. \n -Comprobar estado. \n -Acabar con todo.")
    action = action.toLowerCase();
    switch(action) {
        case "comer":
            personaje.comer()
            console.log(personaje.nombre + " está comiendo.")
            break;
        case "beber":
            personaje.beber()
            console.log(personaje.nombre + " está bebiendo.")
            break;
        case "dormir":
            personaje.dormir()
            console.log(personaje.nombre + " está durmiendo.")
            break;
        case "jugar a videojuegos":
            personaje.jugar_videojuegos()
            console.log(personaje.nombre + " está jugando a videojuegos.")
            break;
        case "masturbarse":
            personaje.hacerse_paja()
            console.log(personaje.nombre + " está masturbándose.")
            break;
        case "acabar con todo":
            personaje.sueño = 10;
            console.log("Tu personaje ha metido los dedos en el enchufe y ha muerto")
            break;
        default:
            console.log("Introduce una acción válida.")
    }
    console.log("Este es el estado de " + personaje.nombre + ": \n -Hambre: " + personaje.hambre + " \n -Sueño: " + personaje.sueño + " \n -Sed: " + personaje.sed + " \n -Diversión: " + personaje.diversion + " \n -Ganas de sexo: " + personaje.ganas_sexo + "\n")
}
console.log("Tu personaje ha muerto");