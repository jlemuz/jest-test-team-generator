function Employee(name = '') {
    this.name = name;
    this.id = Math.floor(Math.random() * 10 + 95);
    this.email = '';

    this.getName = function() {
        return this.name;
      };

      this.getId = function() {
        return this.id;
      };

      this.getEmail = function() {
        return this.email;
      };

      this.getRole = function() {
        return 'Employee';
      };

  }
  
  module.exports = Employee;