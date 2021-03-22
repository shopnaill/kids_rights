
document.getElementById('open-menu').addEventListener('click',open_menu);
side_menu = document.getElementById('side-menu');
left_side = document.getElementById('left-side');


function open_menu()
{
  if (side_menu.style.display === "none") {
    side_menu.style.display = "block";
    left_side.className =  left_side.className.replace(/\bcol-lg-12\b/g, "col-lg-10")
  
    
 
  } else {

    side_menu.style.setProperty("display", "none", "important");
    left_side.className =  left_side.className.replace(/\bcol-lg-10\b/g, "col-lg-12")


  }
}



$(document).on('click','.go-right2',function(){
  $('.active').removeClass('active');
  $('.active-sub').removeClass('active-sub');
  $(this).addClass('active');
});

$(document).on('click','.nav-sub',function(){
  $('.active-sub').removeClass('active-sub');
  $('.active').removeClass('active');

  $(this).parent().parent().parent().find('.go-right2').addClass('active');
  $(this).addClass('active-sub');
});

$(document).on('click','.go-right2',function(){
   $('.go-right2').next('.nav_sb').hide();
   $(this).next('.nav_sb').toggle();
  });

