
  $(document).ready(function() {
  $('#item').focus();
  $('#add').click(submit);
  $('#item').keydown(function(e){
      if (e.keyCode == 13) {
        submit();
      }
    });
$("#shopping-list").sortable();
}); 

var item = {}
var onList = [];

function submit(){
  var list = document.getElementById("item").value;
  strikeThrough();
  validation (list)

 // Reset input after submit   
    $("#item").val('');
  

$("#subtract").click(function(){
$(".shopping-list input:checked").each(function() {
    var index = $.trim($(".shopping-list input:checkbox").index(this));
    onList.splice(index);
    $(".shopping-list li:eq(" + index + ")").remove();
    });
});



  function addItem() {
    onList.push(list);{
    var lastNum = onList.length;
    var finalNum = (lastNum - 1);
    onList[finalNum];
    $(".shopping-list").append("<li>" + "<input class='checkbox' type='checkbox'>" + "<span>"  + onList[finalNum] + "</span>" + "</li>");
  };
  };
  
function validation (list){
  if (list == "") {
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


  };



function strikeThrough() {
 $('input:checkbox').change(function(){
   if($(this).is(':checked')) {
       $(this).parent().addClass('checked-off');
       $('#subtract').css('display', 'inline');


     }
  else 
      $(this).parent().removeClass('checked-off'); 


 });
}








