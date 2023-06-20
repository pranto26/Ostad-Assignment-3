

//1.Date Object  

 const getDayOfWeek = function(dateString) {
 const date = new Date(dateString);
 const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
 const dayIndex = date.getDay();
 const dayOfWeek = daysOfWeek[dayIndex];
 return dayOfWeek;
}
const date = '2023-06-18';
console.log(getDayOfWeek(date));



//2. Math Object

const getresult = function(numbers){
    var SumofSqr = 0;
    for (var i =0; i< numbers.length; i++){
        SumofSqr += Math.pow(numbers[i], 2);
    }
    return Math.sqrt(SumofSqr);
}

var numbers=[2,4,5];
console.log(getresult(numbers));


//3.Numbers

const isPrime = function(number){
    if (number <= 1){
        return false;
    }
    for (var i=2; i<= Math.sqrt(number); i++){
        if (number % i === 0) {
            return false;
          }
    }

    return true;
}

var number = 17;
console.log(isPrime(number));

//4.Window Object

//Please Check  Window.html file

//5. Navigator Object

//Please Check navigator.html file

//6.GeoLocation
//Please checkGeolocation.html file
  



