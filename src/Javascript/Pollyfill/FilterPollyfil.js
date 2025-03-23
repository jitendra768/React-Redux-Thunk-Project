Array.prototype.myFilter = function (cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
      if (cb(this[i], i, this)) temp.push(cb(this[i]));
    }
    return temp;
  };
  
  const arr = [2,3,4,5];
  
  const filterData = arr.filter((num)=> num>2);
  console.log(filterData);