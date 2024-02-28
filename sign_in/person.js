/*
    descripcion: this class creates a object named person, wich contains name, middle name, last names, email, and password. Also contains a method witch counts the number of letters have a 
    atribute of the object. 
*/
class Person{
    constructor(name, middleName, LastNames, email, password){
        this.name = name;
        this.middleName=middleName;
        this.LastNames=LastNames;
        this.email=email;
        this.password=password;
    }
    //getters
    getName(){
        return this.name;
        
    }
    getMiddleName(){
        return this.middleName;
        
    }
    getLastNames(){
        return this.LastNames;
        
    }
    getEmail(){
        return this.email;
        
    }
    getPassword(){
        return this.password;
        
    }
    //setters
    setName(newName){
        newName= newName.trim();
        if(newName ===""){
            throw "The name cannot be empty";
        }
        this.name= newName;

    }
    setMiddleName(newMiddleName){
        newMiddleName= newMiddleName.trim();
        if(newMiddleName ===""){
            throw "The name cannot be empty";
        }
        this.middleName= newMiddleName;
        
    }
    setLastNames(newLastNames){
        newLastNames= newLastNames.trim();
        if(newLastNames ===""){
            throw "The name cannot be empty";
        }
        this.lastNames= newLastNames;
        
    }
    setEmail(newEmail){
        newEmail= newEmail.trim();
        if(newEmail ===""){
            throw "The name cannot be empty";
        }
        this.email= newEmail;
        
    }
    setPassword(newPassword){
        newPassword= newPassword.trim();
        if(newPassword ===""){
            throw "The name cannot be empty";
        }
        this.name= newPassword;
        
    }
    lenght(x){
        let text=0;
        for(let i = 0; i< x.length;i++){
            text +=1;
        }
        return text;
    }
}
