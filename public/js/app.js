/*
* Template Name: Unify - Responsive Bootstrap Template
* Version: 1.9
* Author: @htmlstream
* Website: http://htmlstream.com
*/

var App = function() {

  function handleHeader() {
    // jQuery to collapse the navbar on scroll
    if ($('.navbar').offset().top > 150) {
      $('.navbar-fixed-top').addClass('top-nav-collapse');
    }
    $(window).scroll(function() {
      if ($('.navbar').offset().top > 150) {
        $('.navbar-fixed-top').addClass('top-nav-collapse');
      } else {
        $('.navbar-fixed-top').removeClass('top-nav-collapse');
      }
    });
  }

  function handleNavbar() {
    $(".nav a").on("click", function(e){
       $(".nav").find(".active").removeClass("active");
       $(this).parent().addClass("active");
       var page = $(this).attr('href').replace('#','');
       loadPartial(page);
        //e.preventDefault();
    });
  }

  function loadPartial(page) {
    var ajax_url = '/ajax/'+page;
    $.ajax({
        type: "GET",
        url: ajax_url,
        data: {
            href: ajax_url
        },
        success: function(data) {
          $('#m_table').html(data)
          fetchData(page);
        },
        error:function(error){
          console.log(error)
        }
    })
  }

  function fetchData(page) 
  {
    //alert('fetch : '+page);
    handleTable();
  }

  function handleTable(page) {
    $('#table').bootstrapTable({
      search: true,
      columns: [{
        field: 'id',
        title: 'Item ID',
        sortable: true
      }, {
        field: 'name',
        title: 'Item Name'
      }, {
        field: 'price',
        title: 'Item Price'
      }],
      data: [{
        id: 1,
        name: 'Item 1',
        price: '$1'
      }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
      },{
        id: 1,
        name: 'Item 1',
        price: '$1'
      },{
        id: 1,
        name: 'Item 1',
        price: '$1'
      },{
        id: 1,
        name: 'Item 1',
        price: '$1'
      },{
        id: 1,
        name: 'Item 1',
        price: '$1'
      },{
        id: 1,
        name: 'Item 1',
        price: '$1'
      },{
        id: 1,
        name: 'Item 1',
        price: '$1'
      },{
        id: 1,
        name: 'Item 1',
        price: '$1'
      },{
        id: 1,
        name: 'Item 1',
        price: '$1'
      },{
        id: 1,
        name: 'Item 1',
        price: '$1'
      },]
    })
  }

  return {
    init: function() {
      // var url = $(location).attr('href');
      // var tag = url.split('#');
      // loadPartial(tag[1]);

      handleHeader();
      handleNavbar();
      handleTable();
      loadPartial("body");
    },
  };

}();
