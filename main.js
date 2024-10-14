//Singleton Pattern


class Singleton {
    static instance

    constructor(name, pro1, pro2, pron) {
        if (!Singleton.instance){
            Singleton.instance = this
            this.name = name
            this.pro1 = pro1
            this.pro2 = pro2
            this.pron = pron
        }
        return Singleton.instance
    }
}

const newSingleton = new Singleton('Raul')

console.log(newSingleton)

const newSingleton2 = new Singleton('Alberto')

console.log(newSingleton2)

// Como vemos por mucho que instanciemos la clase Singleton todo se referencia a su unica instancia 


// Ejercicios practica Singleton
/*Ejercicio 1: Gestor de Configuración
Crea una clase llamada ConfigurationManager que implemente el patrón Singleton. Esta clase debe:

Tener un método para cargar configuraciones desde un archivo (puedes simular esto con un diccionario).
Proporcionar métodos para obtener y establecer valores de configuración.
Asegurarse de que solo exista una instancia de esta clase en toda la aplicación.
*/

class ConfigurationManager {
    static instance
    configData


    //Sigue teniendo el constructor publico
    constructor(configDictionary) {
        if (!ConfigurationManager.instance){
            ConfigurationManager.instance = this
            this.configData = configDictionary
        }
        return ConfigurationManager.instance
    }
    //Metodo que nos deje ver la instancia y si no la cree
    static getInstance(){
        if (!ConfigurationManager.instance){
            ConfigurationManager.instance = new ConfigurationManager(configDictionary)
        }
        return ConfigurationManager.instance
    }
    getAllConfig(){
        return {...this.configData}
    }
    viewConfigField(key){
        return this.configData[key]
    }
    set newConfigEntire(newConfig){
        this.configData = newConfig
    }
    newConfigField(key, value){
        this.configData[key] = value
    }
}


// OBSERVER PATTERN

class Subject {
    constructor(name){
        this.name = name
        this.observers = []
    }
    addObserver(observer){
        this.observers.push(observer)
    }
    removeObserver(observer){
        this.observers = this.observers.filter((o) => o !== observer) //Solo incluye los que sean diferentes al que buscamos 
    }
    notifyObservers(observer){
        this.observers.forEach((observer) => observer.updatefromSubject())
    }
    getObservers(){
        return this.observers
    }
    getSubjectName(){
        return this.name
    }
}

class Observer {
    constructor(subject, name){
        this.name = name
        this.subject = subject
        this.subject.addObserver(this)
    }
    updatefromSubject(){
        console.log(`El observer ${this.name} ha sido updateado por el subject ${this.subject.name}`)
    }
}

const newSubject = new Subject('Truman')

const observer1 = new Observer(newSubject, 'Agente0001')
const observer2 = new Observer(newSubject, 'Agente0002')
const observer3 = new Observer(newSubject, 'Agente0003')
const observer4 = new Observer(newSubject, 'Agente0004')
const observer5 = new Observer(newSubject, 'Agente0005')

console.log(newSubject.getObservers())

newSubject.notifyObservers()