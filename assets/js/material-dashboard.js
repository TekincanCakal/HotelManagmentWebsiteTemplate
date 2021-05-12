var mobile_menu_visible = 0;

function loadGraph()
{
  if ($('#hoteInComeChart').length != 0) 
  {
    hotelInComeChart = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      series: [
        [30, 45, 40, 10, 95, 35, 100], [50, 95, 60, 85, 35, 75, 90]
      ],
    };
    optionsHotelInComeChart = {
      lineSmooth: Chartist.Interpolation.cardinal({
        tension: 0
      }),
      showArea: false,
      low: 0,
      high: 120,
      chartPadding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
    }
    var hotelInComeChart = new Chartist.Line('#hoteInComeChart', hotelInComeChart, optionsHotelInComeChart);
  }
}
$(document).ready(function() 
{
  loadGraph();
});
$(document).on('click', '.navbar-toggler', function() 
{
  $toggle = $(this);
  if (mobile_menu_visible == 1) 
  {
    $('html').removeClass('nav-open');
    $('.close-layer').remove();
    setTimeout(function() 
    {
      $toggle.removeClass('toggled');
    }, 400);
    mobile_menu_visible = 0;
  } 
  else 
  {
    setTimeout(function() 
    {
      $toggle.addClass('toggled');
    }, 430);
    var $layer = $('<div class="close-layer"></div>');
    if ($('body').find('.main-panel').length != 0) 
    {
      $layer.appendTo(".main-panel");
    } 
    else if (($('body').hasClass('off-canvas-sidebar'))) 
    {
      $layer.appendTo(".wrapper-full-page");
    }
    setTimeout(function() 
    {
      $layer.addClass('visible');
    }, 100);
    $layer.click(function() 
    {
      $('html').removeClass('nav-open');
      mobile_menu_visible = 0;
      $layer.removeClass('visible');
      setTimeout(function() 
      {
        $layer.remove();
        $toggle.removeClass('toggled');
      }, 400);
    });
    $('html').addClass('nav-open');
    document.querySelector("div.sidebar-wrapper").style.backgroundColor = "white";
    document.querySelector("div.logo").style.backgroundColor = "white";
    mobile_menu_visible = 1;
  }
});

