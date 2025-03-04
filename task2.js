function simpleNum(num){
    if (num>0){
        if (num ==1) {return true};
        for (let i=2; i<num; i++){
          if (num % i ===0){return false};
        };
        return true;
              }
        else {
          return false;
        };
  };
  
  
let a = 7;
  
console.log(simpleNum(a));