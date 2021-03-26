

const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 },
  ];

  let findProp = "price";

  const getAllPropValues = function(arr,prop) {
    //initial of arr of results values
      let arrProp = [];
    // loop the arr of objct 
    for (let value of arr) {
      //initial of array keys of object
      let keys  = Object.keys(value);
        //check exists in value object key prop
        if (keys.includes(prop)) {
            //push into array the find value "value is object of array" "value[prop] is property of object"
            arrProp.push(value[prop])
        } else {
            break;
        }
    }
    return arrProp;
  }



  console.log(getAllPropValues(products,findProp));