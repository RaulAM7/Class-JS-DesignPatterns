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