let sum = function(numbers) {
   
    let result =numbers;
    let i= 0;
    while (i < numbers.lenght); {

        result = result + numbers[i];
        i=i+1;
    }
 
    return result;
};

alert(sum([1, 5, 6]));