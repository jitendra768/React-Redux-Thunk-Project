Array.prototype.myReduce = function (cb, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < this.length; i++) {
      accumulator = accumulator ? cb(this[i], i, this) : this[i];
    }
    return accumulator;
  };
  
  const arr = [2,3,4,5];
  
  const addData = arr.myReduce((accu,curr)=>{
      return accu + curr;
  },0)
  console.log("🚀 ~ addData ~ addData:", addData)