
function formatString(input: string, toUpper?: boolean): string {
  if (typeof toUpper == "undefined" || toUpper) {
    const output: string = input.toUpperCase();
    return output;
  } else {
    const output: string = input.toLowerCase();
    return output;
  }
}


function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  const filtrateItems = items.filter(
    (item: { title: string; rating: number }) => item?.rating >= 4
  );
  return filtrateItems;
}


function concatenateArrays<T>(...arrays: T[][]): T[] {
  const result: T[] = [];
  arrays.forEach((arr) => result.push(...arr));
  return result;
}


class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  public getInfo(): void {
    console.log(`Make: ${this.make}, Year: ${this.year}`);
  }
}
class Car extends Vehicle {
  private model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }
  getModel(): void {
    console.log(`Model: ${this.model}`);
  }
}


function processValue(value: string | number): number {
  if (typeof value === "number") {
    return value * 2;
  } else {
    return value.length;
  }
}


interface Product {
  name: string;
  price: number;
}
function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) {
    return null;
  }
  let highestPriceProduct = products[0];
  products.forEach((product) => {
    if (product.price > highestPriceProduct.price) {
      highestPriceProduct = product;
    }
  });
  return highestPriceProduct;
}


enum Day {
  Saturday,
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
}

function getDayType(day: Day): string {
  switch (day) {
    case Day.Saturday:
    case Day.Sunday:
      return "Weekend";
    default:
      return "Weekday";
  }
}


async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    if (n < 0) {
      return reject(new Error("Negative number not allowed"));
    }
    setTimeout(() => {
      resolve(n * n);
    }, 1000);
  });
}