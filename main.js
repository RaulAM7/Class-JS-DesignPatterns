//Singleton Pattern


class Singleton {
    static instance

    constructor(name) {
        if (!Singleton.instance){
            Singleton.instance = this
            this.name = name
        }
        return Singleton.instance
    }
}


const newSingleton = new Singleton('Raul')

console.log(newSingleton)

const newSingleton2 = new Singleton('Alberto')

console.log(newSingleton2)

// Como vemos por mucho que instanciemos la clase Singleton todo se referencia a su unica instancia 