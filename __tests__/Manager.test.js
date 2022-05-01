const Manager = require('../lib/Manager');

test('creates a manager object and tests properties', () => {
    const manager = new Manager('Jose', 5, 'email@email.com', 81);
  
    expect(manager.name).toBe('Jose');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));

  });

  test('creates a manager object and test methods', () => {
    const manager = new Manager('Lemuz', 10, 'email@email.com', 82);

    expect(manager.getName()).toEqual(manager.name);
    expect(manager.getId()).toEqual(manager.id);
    expect(manager.getEmail()).toEqual(manager.email);
    expect(manager.getRole()).toEqual('Manager');
  });