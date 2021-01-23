
let myNumber=15;

if(typeof myNumber !== 'number'){
    console.log('This is not a number');
}else if(myNumber%15 === 0){
    console.log('GenBuzz');
}else if(myNumber%3 === 0){
    console.log('Gen')
}else if(myNumber%5){
    console.log('Buzz')
}else{console.log(myNumber);}

let storeList;
 
switch (storeList) {
  case 'shoes':
    console.log('Shoes are $50');
    break;
  case 'jeans':
    console.log('Jeans are $25');
    break;
  case 'hat':
    console.log('Hat are $12');
    break;
    case 'socks':
        console.log('Socks are $2');
        break;
        default:
    console.log('Invalid item');
    break;
}
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min);
}
    console.log( getRandomInt(50, 100) );


