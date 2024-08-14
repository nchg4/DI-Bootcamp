import { validateUnionType } from './src/validateUnionType'; 

const var1 = "Hello";
const var2 = 42;
const var3 = true;

console.log(validateUnionType(var1, ["string", "number"])); 
console.log(validateUnionType(var2, ["string", "boolean"])); 
console.log(validateUnionType(var3, ["boolean", "object"])); 