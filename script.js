const Adult = function (age) {
  if (age >= 18){ 
     return true;
  } 
  else {
    return false;
  }
  };
  
  const Greet = function (age){
    if (Adult (age)){ 
    return "Hello there";
  } else {
    return "Hey Kiddo";
  }
  };
    console.log(Greet(8));
    console.log(Greet(18));
  

const calculateVAT = function(basePrice, VATpercentage){
const VAT= basePrice * (VATpercentage / 100);
return VAT;}

const calculatePrice = function (basePrice, VATpercentage){
  const priceVAT = basePrice + (calculateVAT(basePrice, VATpercentage));
  return priceVAT;
};
console.log(calculatePrice(1000, 9));



 const calculateVAT2 = function(VATpercentage2){
  const VAT2 = 1 + (VATpercentage2 / 100);
  return VAT2;}
  
  const calculatePrice2 = function (PriceVAT2, VATpercentage2){
    const basePrice2 = PriceVAT2 / (calculateVAT2(VATpercentage2));
    const VATprice = PriceVAT2 - basePrice2;
    return [basePrice2, VATprice]; 
  };
  console.log(calculatePrice2(1090,9));




