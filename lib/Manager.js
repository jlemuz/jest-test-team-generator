const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    
          //Role will return different value depending on class
          this.getRole = function() {
            return 'Manager';
          };
    }

}

module.exports = Manager;