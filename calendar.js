"use strict";

/**
 * Updates calendar.html to display the desired month.
 *
 * @param date a JavaScript Date object set to a day in the month to be displayed.
 */
var update = function (date) {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var daysInCurrentMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    // *** Remember to use getElementsByTagName when possible.  It avoids a lot of the hassle of looking through each child. ***
    

    document.getElementById('yearHeader').innerHTML=date.getFullYear();
    document.getElementById('monthHeader').innerHTML =months[date.getMonth()];
    // Calculate the previous and next month
    var previousMonth=date.getMonth()-1;
    var year=date.getFullYear();
     //
   //  console.log(previousMonth);

    // (You may use this for adding links to the left arrow)
    var nextMonth = date.getMonth()  + 1;
    var i,j;
    var el=document.getElementById("tr");
    var rowl=document.getElementsByTagName("td");
    var rightButton = document.getElementById("rightArrow");
    var leftButton=document.getElementById("leftArrow");

   
    

   console.log(daysInCurrentMonth);

   var tcell=document.querySelectorAll("#calendarTable td");

   var day = date.getDay();
   console.log(day);
   
    var j=1;
    for(var i=day;i<tcell.length;i++)
    {
       
        if(j<=daysInCurrentMonth)
        {
            tcell[i].innerHTML=j;
            j=j+1;
        }

    }

//2 to 7

    // var j=1;
    // for(i=2;i<=35;i++)
    // {
    
    // if(j<=daysInCurrentMonth){
    //     rowl[i].innerHTML=j;
    //     j=j+1;
    // }

    // }

    



     var nextMonthis=function()
    {
        
       
         if (nextMonth >= 12) {
        // Remember:  Months are numbered beginning with 0.
        nextMonth = 0;
        year=year+1;
    }

     var j=1;
    for(var i=day;i<tcell.length;i++)
    {
       
        if(j<=daysInCurrentMonth)
        {
            tcell[i].innerHTML="";
            j=j+1;
        }

    }

        date.setFullYear(year);
        date.setMonth(nextMonth);
        update(date);

    };


    var previousMonthis=function()
    {

         var j=1;
    for(var i=day;i<tcell.length;i++)
    {
       
        if(j<=daysInCurrentMonth)
        {
            tcell[i].innerHTML="";
            j=j+1;
        }

    }
        
        date.setFullYear(year);
        date.setMonth(previousMonth);
        update(date);
        

    };

    leftButton.addEventListener("click",previousMonthis);
    rightButton.addEventListener("click",nextMonthis);
   
    
    
}
