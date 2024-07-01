const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

const initials = names.map(name => name.charAt(0)).sort().join('');

console.log(initials); 
