const Engineer = require('../lib/Engineer');

test('creates a Engineer object and tests properties', () => {
    const engineer = new Engineer('Jose', 5, 'email@email.com', 'jlemuz');
  
    expect(engineer.name).toBe('Jose');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));

  });

  test('creates a Engineer object and test methods', () => {
    const engineer = new Engineer('Lemuz', 10, 'email@email.com');

    expect(engineer.getName()).toEqual(engineer.name);
    expect(engineer.getId()).toEqual(engineer.id);
    expect(engineer.getEmail()).toEqual(engineer.email);
    expect(engineer.getRole()).toEqual('Engineer');
  });