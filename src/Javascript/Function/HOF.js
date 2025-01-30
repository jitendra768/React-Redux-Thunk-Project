//Higher order functions are functions that take functions as arguments and also return a function as a value.
// map, filter, forEach, find, findIndex, some, and every

function add(a, b, cb) {
  let result = a + b;
  cb(result);
}

function showResult(result) {
  console.log(result);
}

add(2, 4, showResult);

// const getProductList = async(query="",callBack,role)=>{
//     let url = 'https://dummyjson.com/products';
//     if(query){
//         url += `/search?q=${query}`;
//     }
//     const response = await fetch(url);
//     const data = await response.json();

//     if(role=='admin'){
//         data.products.map((product) => {})
//     }
//     // return await data;
//     // return data;
//     // if(data){
//     //     return {
//     //         productTotal: data.total,
//     //         productList : data.products
//     //     }
//     // }
//     callBack(data.total,data,data.products)
// }
// console.log(getProductList())
// getProductList("iphone",productListCallBack);

// const productListCallBack = (total,list)=>{

// }
