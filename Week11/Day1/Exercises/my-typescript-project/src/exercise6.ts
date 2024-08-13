function getDetails(name: string, age: number): [string, number, string] {
    const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
    return [name, age, greeting];
}