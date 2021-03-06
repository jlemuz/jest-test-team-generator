const Employee = require('../lib/Employee');

test('creates a Employee object and tests properties', () => {
    const employee = new Employee('Jose', 5, 'email@email.com');
  
    expect(employee.name).toBe('Jose');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));


  });

  test('creates a Employee object and test methods', () => {
    const employee = new Employee('Lemuz', 10, 'email@email.com');

    expect(employee.getName()).toEqual(employee.name);
    expect(employee.getId()).toEqual(employee.id);
    expect(employee.getEmail()).toEqual(employee.email);
    expect(employee.getRole()).toEqual('Employee');


  });