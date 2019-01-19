// How to find equal values in two arrays

var numbers_one         = [1,2,3];
var numbers_two         = [1,2,3,4,6];
var equal_numbers       = [];

for (i in numbers_one){        

    for (j in numbers_two){

        if (numbers_one[i] == numbers_two[j]){

            var tst_hora = numbers_two[j];
        }
    }
        
    if(tst_hora != null){

        equal_numbers.push(tst_hora);
        tst_hora = null;
    }

    else{
    
        equal_numbers.push(numbers_one[i]);
    
    };

}; 

console.log(numbers_one);
console.log(numbers_two);
console.log(equal_numbers);