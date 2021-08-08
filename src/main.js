
const date = document.getElementById('date-input');
const message=document.querySelector('.message');
const secondMessage = document.querySelector('.message-two');
const submitBtn= document.getElementById('btn-submit');
const anime = document.getElementById('anime');
console.log(anime);

submitBtn.addEventListener('click',()=>{
    let dateNum ="" ;

dateArray = date.value.split("-");
dateArray.forEach((e)=>{
    dateNum= e + dateNum ;
     

})

//yyyy-mm-dd
const yearMonthDay = [...dateArray].join("");

// dd-mm-yyyy
const dayMonthYear =  [...dateArray].reverse().join("");

//mm-dd-yyyy
const monthDayYearArr=[...dateArray].reverse();
arrayMove(monthDayYearArr,0,1);
const monthDayYear = monthDayYearArr.join(""); //storing data as integers
console.log(monthDayYear);
//mm-dd-yy (removing the initials of any year )
const monthDayYearTwoArr  = monthDayYear.split(""); //second format of the date
monthDayYearTwoArr.splice(4,2);// removing the initials
const monthDayYearTwo = monthDayYearTwoArr.join("")

const yearMonthDayTwo = [...[...dateArray].join("")].slice(2,8).join(""); //separate array elements  to string , string to array , slicing array , sliced array to string

console.log(yearMonthDayTwo);
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

 message.innerHTML= "<img src = './media/loading-two.gif' alt='loading'/>";
 secondMessage.innerHTML = "";
 console.log(message)
 if(date.value!==""){
  
    if(getDataBoolean(yearMonthDay)||
       getDataBoolean(dayMonthYear)||
       getDataBoolean(monthDayYear)||
       getDataBoolean(monthDayYearTwo)||
       getDataBoolean(oneDigitDayMonthYear) ||
       getDataBoolean(yearMonthDayTwo)
       ){
       
        setTimeout(()=>{
         message.innerText="Your  Birthdate is a Palindrome "
        },3000);
    }else{
        setTimeout(()=>{
            message.innerText="Your Birthdate is not a Palindrome"
            getPalindromeDate()
           },3000);
       
        

    }
   const a =  new Date(`"${monthDayYearArr}"`)
   console.log(a.toString());
} else{
    message.innerText="Enter a date please"
}



anime.addEventListener("click",()=>{
    anime.innerHTML ="Sddsd";
    anime.style.color="green";
    console.log("Sdsd")
})

function getPalindromeDate(){
    const myDate =  new Date(`"${monthDayYearArr}"`);
    myDate.setDate(1)
    myDate.setMonth(0)
     myDate.setUTCHours(0); 
    
 
     let i =1
  while(1){
     
      console.log(myDate);
      myDate.setDate(myDate.getDate()+i);
      const myDateRaw = myDate.toISOString();
      console.log(myDateRaw);
      const myDateString=myDateRaw.slice(0,10).split("-").join("");
      const myDateStringOne= [...myDateString].slice(2,8).join("");
    //   console.log(myDateStringOne)

      if (getReverseString(myDateStringOne) ===myDateStringOne){
          secondMessage.innerHTML=`<p>${myDateRaw.slice(0,10)} is the closest palindrome date in YY/MM/DD format</p>
          <p>You missed it by ${getDateDifference(monthDayYearArr,myDateRaw)} days, better luck next time .</p>`;

          break;
      };
    //   console.log(myDate , i);


  }
//  const compareDate = new Date(`"${monthDayYearArr}"`)
 
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

function getDateDifference(dateOne,dateTwo){
    const dateFormatOne  = new Date(dateOne);
    const dateFormatTwo  = new Date(dateTwo);
    const millisecondsDiff=Math.abs(dateFormatOne - dateFormatTwo); //abs === absolute of mathematics
    const  daysDiff = Math.ceil(millisecondsDiff/(1000*60*60*24)); //  miliseconds to seconds to min to hour to day
    return daysDiff

}

/*
 *Note to remember for me 
 1)splice("") method mutates the  original array, whereas other methods like reverse(), join() and split()  stores result in a separate assigned variable
 2) substr() returns  the string after a specified index and charAt() returns the character at the specified index  
 3)^refer - https://stackoverflow.com/questions/5306680/move-an-array-element-from-one-array-position-to-another
*/