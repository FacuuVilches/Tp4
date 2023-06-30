/* Como estamos en año electoral vamos a realizar este
Trabajo Practico Definir las clases necesarias para 
representar un Sistema de Voto Electrónico que permita 
manejar: los partidos políticos, los candidatos,
las listas, los votantes, votos.
Tener en cuenta que el sistema debe servir para poder 
realizar elecciones legislativas, provinciales y nacionales.

El trabajo se debe entregar en un repositorio de GitHub 
en grupo de no mas de 3 integrantes
Los nombren de los integrante debe estar en un Readme */

class partidosPoliticos {
    private nombre: string
    private ideologia: string
    private lider: string

    constructor(nombre: string, ideologia: string, lider: string){
        this.nombre = nombre
        this.ideologia = ideologia
        this.lider = lider
    }

    public getNombre(): string {
        return this.nombre;
    }
    
    public getIdeologia(): string {
        return this.ideologia;
    }
    
    public getLider(): string {
        return this.lider;
    }
}
    
class Candidato {
    private nombre: string;
    private partido: partidosPoliticos;
    private lista: string;
    
    constructor(nombre: string, partido: partidosPoliticos, lista: string) {
        this.nombre = nombre;
        this.partido = partido;
        this.lista = lista;
    }
    
    public getNombre(): string {
        return this.nombre;
    }
    
    public getPartido(): partidosPoliticos {
        return this.partido;
    }
    
    public getLista(): string {
        return this.lista;
    }
}
    
class Votante {
    private nombre: string;
    private dni: string;
  
    constructor(nombre: string, dni: string) {
        this.nombre = nombre;
        this.dni = dni;
    }
    
    public getNombre(): string {
        return this.nombre;
    }
    
    public getDNI(): string {
        return this.dni;
    }
}
    
class Voto {
    private votante: Votante;
    private candidato: Candidato;
    
    constructor(votante: Votante, candidato: Candidato) {
        this.votante = votante;
        this.candidato = candidato;
    }
    
    public getVotante(): Votante {
        return this.votante;
    }
    
    public getCandidato(): Candidato {
        return this.candidato;
    }
}

const partidoA = new partidosPoliticos("Partido A", "Ideología A", "Líder A");
const partidoB = new partidosPoliticos("Partido B", "Ideología B", "Líder B");
const partidoC = new partidosPoliticos("Partido C", "Ideologia C", "Lider C");
const partidoD = new partidosPoliticos("Partido D", "Ideologia D", "Lider D")
    
const candidato1 = new Candidato("Candidato 1", partidoA, "Lista A1");
const candidato2 = new Candidato("Candidato 2", partidoA, "Lista A2");
const candidato3 = new Candidato("Candidato 3", partidoB, "Lista B1");
    
const votante1 = new Votante("Votante 1", "32282135");
const votante2 = new Votante("Votante 2", "29468240");
    
const voto1 = new Voto(votante1, candidato1);
const voto2 = new Voto(votante2, candidato3);
    
console.log(partidoA.getNombre());
console.log(candidato2.getPartido().getLider()); 
console.log(votante1.getDNI()); 
console.log(voto2.getVotante().getNombre()); 
console.log(partidoC.getNombre());
console.log(candidato3.getPartido().getLider());
console.log(votante2.getDNI());
console.log(voto1.getVotante().getNombre());
