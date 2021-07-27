const date = document.getElementById('date-input');
var dateArraySpec;


date.addEventListener('click',()=>{
    let dateNum ="" ;

dateArray = date.value.split("-");
dateArray.forEach((e)=>{
    dateNum= e + dateNum ;
     

})

//yyyy-mm-dd
let yearMonthDay = [...dateArray].join("");

// dd-mm-yyyy
let dayMonthYear =  [...dateArray].reverse().join("");

//mm-dd-yyyy
const monthDayYearArr=[...dateArray].reverse();
arrayMove(monthDayYearArr,0,1);
const monthDayYear = monthDayYearArr.join(""); //storing data as integers
console.log(monthDayYear);
//mm-dd-yy (removing the initials of any year )
const monthDayYearTwoArr  = monthDayYear.split(""); //second format of the date
monthDayYearTwoArr.splice(4,2);// removing the initials
const monthDayYear = monthDayYearArr.join("")

/*
monthDayYearArr.splice(4,2); //removing initials of an year 
const monthDayYear=monthDayYearArr.join(""); // converting the array to a number
console.log(monthDayYear);
*/


//d-mm-yyyy
const oneDigitDayMonthYearArr = dateNum.split("");
oneDigitDayMonthYearArr.splice(0,1);
const oneDigitDayMonthYear=oneDigitDayMonthYearArr.join("");
console.log(oneDigitDayMonthYear);

const dateNumReverse = [...dateNum].reverse().join("");


console.log(dateNumReverse)


    if(dateNum ===dateNumReverse){
        console.log("noice");
    };
})


// you figured out half part of it  on how it is adding the new element
function arrayMove(arr, old_index, new_index) {
   /** if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
            arr.push(undefined);
        }
    }
     */
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr; // for testing
};

// returns [2, 1, 3]
console.log(arrayMove([1, 2, 3], 0, 1));

//^refer - https://stackoverflow.com/questions/5306680/move-an-array-element-from-one-array-position-to-another

/*
 *Note to remember for me 
 1)splice("") method mutates the  original array, whereas other methods like reverse(), join() and split()  stores result in a separate assigned variable 
*/