$(document).ready(function(){
    // Sidenav initialisation
    $('.sidenav').sidenav();
    // Copyright year initialisation
    $('#copyright').text(new Date().getFullYear());
    // datepicker initialization
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
      format: "dd mmmm, yyyy",
      i18n: {done: "Select"}
    })
    // select init
    $('select').formSelect();
    //collapse init
    $('.collapsible').collapsible();
  });