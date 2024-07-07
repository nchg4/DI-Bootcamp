const isString = (value) => {
    return typeof value === 'string';
  };

console.log(isString('hello'));
//this will be true

console.log(isString([1,2,4,0]));
//this will be false
