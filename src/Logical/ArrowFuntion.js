let obj1 = {
  value: 42,
  valueOfthis: function () {
    return this.value;
  },
};

console.log(obj1.valueOfthis());

let obj2 = {
  value: 82,
  valueOfthis: () => {
    return this.value;
  },
};
console.log(obj2.valueOfthis());
