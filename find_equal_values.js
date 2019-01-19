// How to find equal values in two arrays

var numbers_one         = [1,2,3];
var numbers_two         = [1,2,3,4,6];
var numbers_combined    = [];

for (i in numbers_one){        

    for (j in numbers_two){

        if (numbers_one[i] == numbers_two[j]){

            var tst_hora = numbers_two[j];
        }
    }
        
    if(tst_hora != null){

        numbers_combined.push(tst_hora);
        tst_hora = null;
    }

    else{
    
        numbers_combined.push(numbers_one[i]);
    
    };

}; 

console.log(numbers_one);
console.log(numbers_two);
console.log(numbers_combined);