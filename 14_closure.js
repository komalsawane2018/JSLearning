

let globalVariable = 100;      // global variable
function outer() {
    console.log("This is outer function");
    let outerFunVariable = 300;
    let inner = function(){
        console.log("This is inner function");
        let innerFunVariable = 500;
        console.log(innerFunVariable);      // accessing inner (Own Scope) fun
        console.log(outerFunVariable);     // accessing outer fun 
    
        console.log(globalVariable);       // accessing global var
        
    }
    return inner;
}

const innerFun = outer();
innerFun();
// outer()();