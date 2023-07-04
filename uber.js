class UberPriceCalculator {
  constructor(distance, serviceType) {
    this.distance = distance;
    this.serviceType = serviceType;
  }
  calculatePrice() {
    let basePrice, pricePerKm;
    if (this.serviceType === "UberX") {
      basePrice = 5;
      pricePerKm = 1.5;
    } else if (this.serviceType === "UberBlack") {
      basePrice = 10;
      pricePerKm = 3;
    } else if (this.serviceType === "UberPool") {
      basePrice = 3;
      pricePerKm = 1;
    } else {
      console.log("Invalid service type.");
      return;
    }
    const totalPrice = basePrice + pricePerKm * this.distance;
    return totalPrice;
  }
}
const calculator = new UberPriceCalculator(10, "UberX");
const price = calculator.calculatePrice();
console.log(`The price for the Uber ride is $${price}.`);
