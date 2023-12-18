
export interface Product {

    idProduct: string;
    description: string;
    price: number

}

export interface TaxCalculationOptions {

    tax: number;
    products: Product[];

}

const phone: Product = {
    idProduct: 'NKA1',
    description: 'Nokia A1',
    price: 150
}

const tablet: Product = {
    idProduct: 'IPAIR',
    description: 'iPad Air',
    price: 250
}

const shoppingCart = [phone,tablet];
const tax = 0.15;


//destructuracion
export function taxCalculation(options: TaxCalculationOptions): [number,number]{

     let total = 0;
     const { tax ,products }  = options;

     //destructuracion
     products.forEach(({price}) => {

        total += price;

        
     });

     return [total,total*tax]
}

//destructuracion
const [total, taxResult] = taxCalculation({
    tax,
    products: shoppingCart
});

/* console.log('Total: ', total);
console.log('Tax: ', taxResult); */



