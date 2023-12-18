import { Product, TaxCalculationOptions, taxCalculation } from "./06-function-destructuring";

const tax_const: number = 0.15
const shoppingCart: Product[] = [
    {
        idProduct: 'NA1',
        description: 'NokiaA1',
        price: 100
    },
    {
        idProduct: 'IP10',
        description: 'iPhone10',
        price: 150
    }
];

const taxCalculationOption: TaxCalculationOptions = {
    tax: tax_const,
    products: shoppingCart
}



//Tax = 0.15
const [ total, tax ] = taxCalculation(taxCalculationOption);

console.log('Total: ', total);
console.log('tax: ', tax);

