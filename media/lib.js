$(document).ready(__init__);

function endsWith(str, suffix) {
  return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

function __init__(){
  activeMenuItem();

  if ($('#gdm-nav').length){
    var path = window.location.pathname;
    $('#gdm-nav>li>a').each(function(i){
      if (endsWith(path, $(this).attr('href'))){
        $(this).parent().addClass('active');
      }
    });
  }
}

function activeMenuItem(){
    var path = window.location.pathname;
    if (path == '/'){
        $('.navbar .nav>li:first').addClass('active');
        return;
    }

    $('.navbar .nav>li a').each(function(i){
        if (path.indexOf($(this).attr('href')) == 0){
            $('.navbar .nav>li.active').removeClass('active');
            $(this).parent().addClass('active');
        }
    });
}