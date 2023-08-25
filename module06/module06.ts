/*  Module 6: DGenerics in TypeScript
    Lab Start */

/*  DataStore is a utility function that can store up to 10 string values in an array.
    Rewrite the DataStore class so the array can store items of any type.

    TODO: Add and apply a type variable. */
class DataStore<T> {
  private _data = new Array<T>(10);

  AddOrUpdate(index: number, item: T) {
    if (index >= 0 && index < 10) {
      this._data[index] = item;
    } else {
      alert("Index is greater than 10");
    }
  }
  GetData(index: number) {
    if (index >= 0 && index < 10) {
      return this._data[index];
    } else {
      return;
    }
  }
}

const cities = new DataStore();
cities.AddOrUpdate(0, "Mumbai");
cities.AddOrUpdate(1, "Chicago");
cities.AddOrUpdate(11, "London"); // item not added

console.log(cities.GetData(0)); // returns 'Mumbai'
console.log(cities.GetData(1)); // returns 'Chicago'
console.log(cities.GetData(2)); // returns 'undefined'
console.log(cities.GetData(11)); // returns 'undefined'

// TODO Test items as numbers.
const empIDs = new DataStore<number>();
empIDs.AddOrUpdate(0, 19);
empIDs.AddOrUpdate(1, 89);
empIDs.AddOrUpdate(2, 64);
empIDs.AddOrUpdate(11, 97);

console.log(empIDs.GetData(0)); // returns 19
console.log(empIDs.GetData(1)); // returns 89
console.log(empIDs.GetData(2)); // returns 64
console.log(empIDs.GetData(3)); // returns undefined
console.log(empIDs.GetData(11)); // returns undefined

// TODO Test items as objects.
type Pets = {
  name: string;
  breed: string;
  age: number;
};
const pets = new DataStore<Pets>();
pets.AddOrUpdate(0, { name: "Rex", breed: "Golden Retriever", age: 5 });
pets.AddOrUpdate(1, { name: "Sparky", breed: "Jack Russell Terrier", age: 3 });
console.log(pets.GetData(1)); // returns { name: 'Sparky', breed: 'Jack Russell Terrier', age: 3 }
