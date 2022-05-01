class Employee{
// Constructor method required
//Values required for Employee class
constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;

    //Methods
    this.getName = function() {
        return this.name;
      };

      this.getId = function() {
        return this.id;
      };

      this.getEmail = function() {
        return this.email;
      };

      //Role will return different value depending on class
      this.getRole = function() {
        return 'Employee';
      };

    }
}
  
  module.exports = Employee;