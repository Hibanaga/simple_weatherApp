
let pricePerWord = 40;
let message = 'Donec orci lectus aliquam est magnis';//Промышленная кровать скачать это здорово 


const calculateEngravingPrice = function(message,pricePerWord) {
    return message.split(" ").length * pricePerWord;
}

console.log(calculateEngravingPrice(message,pricePerWord));

