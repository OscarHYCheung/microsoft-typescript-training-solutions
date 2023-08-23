/*  Module 5: Declare and instantiate classes in TypeScript
    Lab Start  */

/*  EXERCISE 1 */

/* Enum is used for better readability */
enum SortOrder {
  Ascending = "Ascending",
  Descending = "Descending",
}

class ArrayBuilder {
  // // Define the constructor with private members
  // constructor(
  //   private _items: number,
  //   private _sortOrder: SortOrder = SortOrder.Ascending
  // ) {}

  // // Define the accessors
  // get items(): number {
  //   return this._items;
  // }
  // set items(newItems) {
  //   this._items = newItems;
  // }

  // get sortOrder() {
  //   return this._sortOrder;
  // }
  // set sortOrder(newSortOrder) {
  //   this._sortOrder = newSortOrder;
  // }

  /* The above code has been commented out since the same should be achieved using static methods instead. */

  /*  sortDescending is a comparison function that tells the sort method how to sort numbers
  in descending order. */
  private static sortDescending = (a: number, b: number) => {
    if (a > b) {
      return -1;
    } else if (b > a) {
      return 1;
    } else {
      return 0;
    }
  };

  /*  sortAscending is a comparison function that tells the sort method how to sort numbers
    in ascending order. */
  private static sortAscending = (a: number, b: number) => {
    if (a > b) {
      return 1;
    } else if (b > a) {
      return -1;
    } else {
      return 0;
    }
  };

  /*  buildArray builds an array of unique random numbers containing the number of items
  based on the number passed to it. The sortOrder parameter determines whether to sort
  the array in ascending or descending order. */
  static build = (items: number, sortOrder = SortOrder.Ascending): number[] => {
    let randomNumbers: number[] = [];
    let nextNumber: number;
    for (let counter = 0; counter < items; counter++) {
      nextNumber = Math.ceil(Math.random() * (100 - 1));
      if (randomNumbers.indexOf(nextNumber) === -1) {
        randomNumbers.push(nextNumber);
      } else {
        counter--;
      }
    }
    if (sortOrder === SortOrder.Ascending) {
      return randomNumbers.sort(ArrayBuilder.sortAscending);
    } else {
      return randomNumbers.sort(ArrayBuilder.sortDescending);
    }
  };
}

const testArray1 = ArrayBuilder.build(12, SortOrder.Ascending);
const testArray2 = ArrayBuilder.build(8, SortOrder.Descending);
console.log(testArray1);
console.log(testArray2);
