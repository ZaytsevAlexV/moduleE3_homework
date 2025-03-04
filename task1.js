
function getSumEvenInArray(){
    let arr = [4,0,"sd",NaN, true, null, 10, 14, undefined,5,0,6,7];
    
    let sum_even = 0;
    let sum_uneven=0;
    let sum_0=0;
    
    for (let i=0; i<arr.length; i++){
        if ( isNaN(arr[i]) || arr[i] === null || typeof(arr[i]) == String ||  typeof(arr[i]) == "boolean" ||  typeof(arr[i])===undefined){
          console.log(`${arr[i]} not digital`);
        }
        else {
          if (arr[i]==0){sum_0++; console.log(` ноль ${arr[i]}`);}
                       else {
                            if((arr[i]%2)==0){sum_even++; console.log(`четное ${arr[i]}`);} else {sum_uneven++; console.log(`нечетное ${arr[i]}`);}; 
                         
                         
                       };
        };
       debugger;
    };
    
    console.log(`сумма четных=${sum_even},сумма нечетных=${sum_uneven},сумма 0=${sum_0}`);
}
    
    getSumEvenInArray();