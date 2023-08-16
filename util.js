var mod1 = require('events')
var mod2 = require('util')
var Person = function(name){
    this.name = name;
}
mod2.inherits(Person,mod1.EventEmitter)
var sita = new Person('sita')
var riya = new Person('riya')
var anu = new Person('anu')
var people = [sita,riya,anu]

people.forEach(function(person){
    person.on('did',function(line){
        console.log(person.name+' told'+ ' "'+ line+'"')
    })
})
sita.emit('did','How r u all??')