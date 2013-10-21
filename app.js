
  $(document).ready(function() {
  $('#item').focus();
  $('#add').click(submit);
  $('#item').keydown(function(e){
      if (e.keyCode == 13) {
        submit();
      }
    });
// Re-order the list
$("#shopping-list").sortable();
}); // End of document ready

var item = {}
var onList = [];

// Submitting user input
function submit(){
  var list = document.getElementById("item").value;
  strikeThrough();
  validation (list)
// Reset input after submit   
    $("#item").val('');

// Validating user input  
function validation (list){
  if (list == "" || list == " ") {
    shake();
    return;
  }
  else addItem();
}
function shake(){
    $("#item").addClass('shake animated').delay(1000).queue(function(next){
    $(this).removeClass('shake animated');
    next();
    });
  };
  
// Adding items to the array
  function addItem() {
    onList.push(list);{
    var lastNum = onList.length;
    var finalNum = (lastNum - 1);
    onList[finalNum];
    var newListItem = "<li>" + "<input class='checkbox' type='checkbox'>" + "<span>"  + onList[finalNum] + "</span>" + "</li>";
    $(newListItem).appendTo(".shopping-list").hide().slideDown("fast");

  };
  };

// Removing items from the list / array
$("#subtract").click(function(){
$(".shopping-list input:checked").each(function() {
    var index = $.trim($(".shopping-list input:checkbox").index(this));
    onList.splice(index);
    $(".shopping-list li:eq(" + index + ")").slideUp("fast")
  });
});


}; // End of submit function

// Crossing items off
function strikeThrough() {
 $('input:checkbox').change(function(){
   if($(this).is(':checked')) {
       $(this).parent().addClass('checked-off');
    }
  else 
      $(this).parent().removeClass('checked-off'); 

  });
}









