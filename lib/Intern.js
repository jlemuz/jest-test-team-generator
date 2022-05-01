const Employee = require('./Employee');

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;

        this.getSchool = function() {
            return this.school;
          };
    
          //Role will return different value depending on class
          this.getRole = function() {
            return 'Intern';
          };
    }

}

module.exports = Intern;