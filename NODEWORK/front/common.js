
function filedSet(obj) {
  for (key in obj) {
    $("#" + key).val(obj[key]);
  }
}


//form 초기화
function formreset(){
  $('form').each(function () {
    this.reset();
  });
}

//input 초기화
function inputreset() {
  $('#listbody').html("");
}