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
const monthDayYearTwo = monthDayYearTwoArr.join("")

/*
monthDayYearArr.splice(4,2); //removing initials of an year 
const monthDayYear=monthDayYearArr.join(""); // converting the array to a number
console.log(monthDayYear);
*/


//d-mm-yyyy
const oneDigitDayMonthYearArr = dateNum.split("");
if(oneDigitDayMonthYearArr[0]==="0"){
oneDigitDayMonthYearArr.splice(0,1);
console.log(oneDigitDayMonthYearArr);
}

const oneDigitDayMonthYear=oneDigitDayMonthYearArr.join("");
console.log(oneDigitDayMonthYear);
console.log(`year month etc ${yearMonthDay} ,
 day month etc${dayMonthYear},
 month day year${monthDayYear}, 
 month day year without ini ${monthDayYearTwo}
 and one digit day ${oneDigitDayMonthYear}  `)




    if(getDataBoolean(yearMonthDay)||
       getDataBoolean(dayMonthYear)||
       getDataBoolean(monthDayYear)||
       getDataBoolean(monthDayYearTwo)||
       getDataBoolean(oneDigitDayMonthYear)){
        console.log("noice");
    }
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



function getReverseString(string){
    if(string===""){
        return"";
    }else{
        return getReverseString(string.substr(1))+ string.charAt(0);

    }

} //note- find out  how is it working with whitespace as well 
function getDataBoolean(date){
    return date ===getReverseString(date);

}





/*
 *Note to remember for me 
 1)splice("") method mutates the  original array, whereas other methods like reverse(), join() and split()  stores result in a separate assigned variable
 2) substr() returns  the string after a specified index and charAt() returns the character at the specified index  
 3)^refer - https://stackoverflow.com/questions/5306680/move-an-array-element-from-one-array-position-to-another
*/