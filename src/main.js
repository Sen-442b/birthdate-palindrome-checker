const date = document.getElementById('date-input');
var dateArraySpec;


date.addEventListener('click',()=>{
    let dateNum ="" ;

dateArray = date.value.split("-");
dateArray.forEach((e)=>{
    dateNum= e + dateNum ;
     

})
const dateNumMonth= [...dateNum];
dateNumMonth.splice(1,0,[...dateNum][])
const dateNumReverse = [...dateNum].reverse().join("");

console.log(dateNumMonth.join(""))
console.log(dateNumReverse)


    if(dateNum ===dateNumReverse){
        console.log("noice");
    };
})


// you figured out half part of it  on how it is adding the new element
function array_move(arr, old_index, new_index) {
    if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
            arr.push(undefined);
        }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr; // for testing
};

// returns [2, 1, 3]
console.log(array_move([1, 2, 3], 0, 1));

//^refer - https://stackoverflow.com/questions/5306680/move-an-array-element-from-one-array-position-to-another