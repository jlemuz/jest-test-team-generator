const Intern = require('../lib/Intern');

test('creates a Intern object and tests properties', () => {
    const intern = new Intern('Jose', 5, 'email@email.com', 'UCLA');
  
    expect(intern.name).toBe('Jose');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));

  });

  test('creates a Intern object and test methods', () => {
    const intern = new Intern('Lemuz', 10, 'email@email.com');

    expect(intern.getName()).toEqual(intern.name);
    expect(intern.getId()).toEqual(intern.id);
    expect(intern.getEmail()).toEqual(intern.email);
    expect(intern.getRole()).toEqual('Intern');
  });