const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 },
  ];

  let productName = 'Захват';


//version 1:
  const calculateTotalPrice = function(allProdcuts, productName) {
      for (let value of allProdcuts) {
       if (value.name === productName) {
           return value.price * value.quantity; 
       }
      }
  };

//version 2:
//   const calculateTotalPrice = function(allProdcuts, productName) {
//         for (let value of allProdcuts) {
//             let valuesArr = Object.values(value);
//             if (valuesArr[0] === productName) {
//                 return valuesArr[1] * valuesArr[2];
//             }
//         }
//     };

  console.log(calculateTotalPrice(products,productName));


