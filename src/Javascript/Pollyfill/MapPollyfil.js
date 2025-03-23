Array.prototype.myMap = function (cb){
    let temp = [];
    for (let i = 0; i < this.length; i++) {
      temp.push(cb(this[i], i, this));
    }
    return temp;
  };
  
  
  const arr= [2,3,4,5];
  const result = arr.myMap((x) => x * 2);
  console.log(result);           // [4, 6, 8, 10]