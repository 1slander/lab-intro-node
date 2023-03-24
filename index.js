class SortedList {
  constructor() {
    this.items=[];
    this.length=0;
  }

  add(item) {
    this.items.push(item);
    this.length++;
    return this.items.sort((a,b)=>a-b);
  }

  get(pos) {
    if(pos<=this.length){
      return this.items.at(pos);
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
