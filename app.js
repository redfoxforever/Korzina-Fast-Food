let cheque = cartObj()

let total = 0,
product = ""

for (const key in cheque) {
  // console.log(key); // Lavash Hot-dog Cola
  product += key
  // console.log(cheque[key]); // { info: 'big cheese', price: 15000 } 
  for (const keyID in cheque[key]) {    
    if (keyID == 'info') {
      product += cheque[key][keyID]
    } else if (keyID == 'price') {
      total += cheque[key][keyID]      
    }
    // console.log(keyID); // info price
    // console.log(cheque[key][keyID]);  // big cheese, 15000, mini
  }
}

console.log(`Szzi zakaziz ${product}, Obshiy narx ${total + 7000} min, Dostavkasi bn (Dostavka 7000 min)`);
