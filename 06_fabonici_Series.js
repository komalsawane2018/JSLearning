// 0  1  1   2   3   5   8

function fabSeries(fabTerm){
    let first = 0;
    let second = 1;
    let next = 0;
    for (let index = 1; index <= fabTerm; index++) {
     console.log(first);   
      next = first + second;  // 0+1
      first = second;   //   0==1
      second = next;   // 
    }
}
fabSeries(7);


console.log(`=================2nd way to faboniccies program============`);

// // 0,1,1,2,3,5,8

// function name(num) {
//     let store=[]
//     var first1=0
//     var second2=1
//     store.push(first1)
//     store.push(second2)
//     for (let index = 0; index <=num; index++) {
//         let temp=first1+second2
//         store.push(temp)
//         first1=second2
//         second2=temp
//     }
//     console.log(store);
    
//     }
//     name(10)

