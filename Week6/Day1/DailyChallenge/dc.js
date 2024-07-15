let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

const displayGroceries = (obj) => {
    const fruits = obj.fruits
    fruits.forEach(fruit => console.log(fruit))
}
// displayGroceries(groceries)

const cloneGroceries = () => {
    let user = client  ///user = 'John'
    user = "Betty";
    const shopping = groceries
    shopping.totalPrice = "$35";
    shopping.other.payed = false;
    console.log(user, client);
    console.log("shopping", shopping);
    console.log("groceries", groceries);
};

displayGroceries(groceries)
cloneGroceries()