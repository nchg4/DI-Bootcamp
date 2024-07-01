const family = {
    father: "David",
    mother: "Karine",
    son: "Noam",
    son2: "Eitan",
};

console.log("Keys of the family object:");
for (let key in family) {
    console.log(key);
}

console.log("\nValues of the family object:");
for (let key in family) {
    console.log(family[key]);
}
