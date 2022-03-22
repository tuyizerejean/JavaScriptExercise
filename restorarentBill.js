
//1. Convert the previous exercise using arrow function
const dishes = {
    pasta: {
    price: 100,
    ingredients: 'Pasta, Tomatoes, Chilly-Pepper, Onions',
    serving: 4
    },
    rice: {
    price: 97,
    ingredients: 'Rice, Coconout oil, Fish, Beans',
    serving: 2
    },
    beef: {
    price: 125,
    ingredients: 'Beef steak, french fries, mushrooms sauce',
    serving: 3
    }
    }
    
    //retrieving the dish
    const getDish=(dish)=> {
    
    if (dishes[dish] == undefined) {
       
    return 'dish not found' //return string
    }
   
    return dishes[dish]; //returns an object
    }
    
    const printBill=(dish, customerName)=> {
    let ourDish = getDish(dish);
    
    if (typeof ourDish != 'object' ) {
    console.log(`Sorry Mr/Mrs ${customerName}, unfortunately we don't offer that dish...`)
    } else {
    const {price, ingredients, serving} = ourDish;
    
        const  totalPrice = price * serving;
        let taxValue = 0;
        let totalBill = 0;
        let tip = 0;
    
        if (totalPrice <= 100) {
          taxValue = totalPrice * 0.15; //15%
        } else {
          taxValue = totalPrice * 0.20; //20%
        }
    
        totalBill = totalPrice + taxValue;
        tip = totalBill * 0.10;
    
        console.log(`Thank you Mr/Mrs ${customerName} for dinning with us! Your bill is as follows:
        Total: RWF ${totalBill} (incl. tax of ${taxValue}) and you have tipped the waiter RWF ${tip}`)
    
    }
    }
   
    printBill('pasta', 'Isimbi Fionah');