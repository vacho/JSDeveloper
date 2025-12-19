function calculateTax(amount:number, taxRate?:number):number {
    return Math.round(amount * (taxRate || 0.13) *100)/100;
}

console.log("The tax is:" + calculateTax(100));