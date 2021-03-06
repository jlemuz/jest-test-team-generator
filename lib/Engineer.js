const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;

        this.getGithub = function() {
            return this.github;
          };
    
          //Role will return different value depending on class
          this.getRole = function() {
            return 'Engineer';
          };
    }

}

module.exports = Engineer;