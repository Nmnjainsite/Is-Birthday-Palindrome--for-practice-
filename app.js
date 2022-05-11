
// function reverse (str){
//   return str.split("").reverse().join("");
//  }
 
//  function checkPalindrome (str){
//   var reversed = reverse(str);

//   if(str === reversed){
//     return true
//   } else {
//     return false;
//   }
// }


// function convertToStr(date){
//   var dateStr = {day: '', month: '', year: ''};

//   if(date.day < 10){
//     dateStr.day = '0' + date.day;
//   } else {
//     dateStr.day = date.day.toString()
//   } if(date.month < 10){
//     dateStr.month = '0' + date.month
//   } else
//   {
    
//     dateStr.month = date.month.toString ()
//   }
//   dateStr.year = date.year.toString()
// return dateStr;
// }


// function checkAllDateFormat (date){
//   var dateStr = convertToStr(date);

//   var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year
//   var mmddyyyy = dateStr.month + dateStr.day + dateStr.year
//   var yyyymmdd = dateStr.year + dateStr.month + dateStr.day
//   var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2)
//   var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2)
//   var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day
//   return [ddmmyyyy , mmddyyyy,yyyymmdd,ddmmyy,mmddyy,yymmdd]
// }


// function checkPalindromeForAllDateFormats (date){
//   var listOfPalindrome = checkAllDateFormat(date);

//   var flag = false;
//   for(var i=0; i<listOfPalindrome.length; i++){
//     if(checkPalindrome(listOfPalindrome[i])){
//         flag = true;
//         break;
//     }
//   }
//   return flag;
// }
// function leapYear(year){
//   if(year%400 === 0){
//     return true
//   }  
//     if(year%100===0){
//     return false 
      
//   } 
//     if (year %4 === 0){
//     return true 
//   }
//     return false;
//   }



//   function getNextDate(date){
//     var day = date.day + 1;
//     var month = date.month;
//     var year = date.year;
  
//     var daysInMonth = [31, 28, 31, 30, 31, 30, 31,31,30,31,30,31]
  
//     if(month === 2){
//       if(leapYear(year)){
//         if(day > 29){
//           day = 1;
//           month++
//         }
//       } else  if(day > 28){
//         day = 1;
//         month++
//       }
//     } else if(day > daysInMonth[month-1]){
//       day = 1;
//       month++
//     } if(month > 12){
//       month=1;
//       year++
//     } return {
//       day : day,
//       month: month,
//     year: year
//     }
//   }
//   function getNextPalindromeDate(date){
//     var ctr = 0;
//     var nextDate = getNextDate(date);
//   while (1){
//     ctr++;
//     var checkPalindrome = checkPalindromeForAllDateFormats(nextDate);
//     if(checkPalindrome) {
//        break;
//     }
//      nextDate = getNextDate(nextDate);
//   }
//     return [ctr, nextDate];
//   }
  
// var input = document.querySelector("#input");
// var btnCheck = document.querySelector("#btn-check");
// var output = document.querySelector ("#output");

// btnCheck.addEventListener('click', clickHandler)

// function clickHandler(){ 
//   var bdayStr = input.value;
  
//   if(bdayStr !== ''){
//    var listOfDate = bdayStr.split('-');


//     var date = {
//        day:Number(listOfDate[2]),
//      month: Number(listOfDate[1]),
//  year: Number(listOfDate[0])
// };
//  var checkPalindrome =   checkPalindromeForAllDateFormats(date);
// if(checkPalindrome){
//   output.innerText = "your birthday is a palindrome"
// } else{

//   var [ctr,nextDate] = getNextPalindromeDate (date);
//   output.innerText = `next date is ${nextDate.day}-${nextDate.month}-${nextDate.year}, you missed it by ${ctr} days`
// }
//   }
// }


// var date = {
//   day : 28,
//   month : 2,
//   year: 2020
// }
// console.log(getNextDate(date))
 



function reverse (str){
  return str.split("").reverse().join("");
 }
 
 function checkPalindrome (str){
  var reversed = reverse(str);

  if(str === reversed){
    return true
  } else {
    return false;
  }
}


 function convertToStr(date){
   var dateStr = {day: '', month: '', year: ''};
 
   if(date.day < 10){
     dateStr.day = '0' + date.day;
   } else {
     dateStr.day = date.day.toString()
   } if(date.month < 10){
     dateStr.month = '0' + date.month
   } else
   {
     
     dateStr.month = date.month.toString ()
   }
   dateStr.year = date.year.toString()
 return dateStr;
 }
 
 function getAllDateFormats (date){
   var dateStr = convertToStr(date);
 
   var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year
   var mmddyyyy = dateStr.month + dateStr.day + dateStr.year
   var yyyymmdd = dateStr.year + dateStr.month + dateStr.day
   var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2)
   var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2)
   var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day
   return [ddmmyyyy , mmddyyyy,yyyymmdd,ddmmyy,mmddyy,yymmdd]
 }
 

 function leapYear(year){
  if(year%400 === 0){
    return true
  }  
    if(year%100===0){
    return false 
      
  } 
    if (year %4 === 0){
    return true 
  }
    return false;
  }

function getNextDate(date){
  var day = date.day + 1;
  var month = date.month;
  var year = date.year;

  var daysInMonth = [31, 28, 31, 30, 31, 30, 31,31,30,31,30,31]

  if(month === 2){
    if(leapYear(year)){
      if(day > 29){
        day = 1;
        month++
      }
    } else  if(day > 28){
      day = 1;
      month++
    }
  } else if(day > daysInMonth[month-1]){
    day = 1;
    month++
  } if(month > 12){
    month=1;
    year++
  } return {
    day : day,
    month: month,
  year: year
  }
}
function checkPalindromeForAllDateFormats (date){
  var listOfPalindrome = getAllDateFormats(date);

  var flag = false;
  for(var i=0; i<listOfPalindrome.length; i++){
    if(checkPalindrome(listOfPalindrome[i])){
        flag = true;
        break;
    }
  }
  return flag;
}
function getNextPalindromeDate(date){
  var ctr = 0;
  var nextDate = getNextDate(date);
while (1){
  ctr++;
  var checkPalindrome = checkPalindromeForAllDateFormats(nextDate);
  if(checkPalindrome) {
     break;
  }
   nextDate = getNextDate(nextDate);
}
  return [ctr, nextDate];
}

  




 
 var input = document.querySelector("#input");
 var btnCheck = document.querySelector("#btn-check");
 var output = document.querySelector ("#output");
 
 function clickHandler(){ 
  var bdayStr = input.value;
  
  if(bdayStr !== ''){
   var listOfDate = bdayStr.split('-');


    var date = {
       day:Number(listOfDate[2]),
     month: Number(listOfDate[1]),
 year: Number(listOfDate[0])
};
 var checkPalindrome =   checkPalindromeForAllDateFormats(date);
if(checkPalindrome){
  output.innerText = "your birthday is palindrome"
} else{

  var [ctr,nextDate] = getNextPalindromeDate (date);
  output.innerText = `next date is ${nextDate.day}-${nextDate.month}-${nextDate.year}, you missed it by ${ctr} days`
}
  }
 }

var date = {
  day : 28,
  month : 2,
  year: 2020
}
console.log(getNextPalindromeDate(date));



btnCheck.addEventListener('click',clickHandler)


 



function getPreviousDate(date){
  var day = date.day - 1;
  var month = date.month;
  var year = date.year;

  var daysInMonth = [31, 28, 31, 30, 31, 30, 31,31,30,31,30,31]

  if(month === 3){
    if(leapYear(year)){
      if(day < 1){
        day = 29;
        month--
      }
    }  else  if(day < 1){
      day = 28;
      month--
    }
   } 
    
  if(month < 1){
    month=12;
    year--
  }  
 
  return {
    day : day,
    month: month,
  year: year
  }
}

function evenMonths(month){
  var day = date.day - 1;
  var month = date.month;
  var year = date.year;


  var daysInMonth = [31, 28, 31, 30, 31, 30, 31,31,30,31,30,31]
  if(day < daysInMonth[month -1]){
   day = 31;
   month--
  } if(month === 4){
    day = 30;
    month--
  } if(month === 6){
    day = 30;
    month--

}
if(month === 9){
  day = 30;
  month--
 }
 if(month === 11){
  day = 30;
  month--
 }
 return {
   day : day,
month : month,
year: year
 }
}


var date = {
  day : 5,
  month : 1,
  year: 2020
}
console.log(getPreviousDate(date));

    

