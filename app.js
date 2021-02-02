function newItem(){

  //Replacing the following with jQuery
  //1. Adding a new item to the list of items: 
     let li = $('<li></li>'); //creating a new li element
     let inputValue = $("#input").val();//syntax for selecting value in jQuery is '.val()'
     li.append(inputValue);
  
     if (inputValue === '') {
       alert("You must write something!");
     } else {
       $('#list').append(li);
     }
  
   //2. Crossing out an item from the list of items:
     function crossOut() {
       li.toggleClass("strike");
     }
  
     li.on("dblclick",crossOut);//replace addEventListener with 'on'
  
   //3(i). Adding the delete button "X": 
     let crossOutButton = $("<crossOutButton></crossOutButton");
     crossOutButton.append(document.createTextNode("X"));
     li.append(crossOutButton);
  
     crossOutButton.on("click", deleteListItem);
   //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
     function deleteListItem(){
       li.addClass("delete")
     }
   // 4. Reordering the items: 
     $('#list').sortable();
  
  }
  