/*
* Template Name: Unify - Responsive Bootstrap Template
* Version: 1.9
* Author: @htmlstream
* Website: http://htmlstream.com
*/

var App = function() {

  function handleNavbar() {
    $(".nav a").on("click", function(){
       $(".nav").find(".active").removeClass("active");
       $(this).parent().addClass("active");
       var tag = $(this).attr('href');
        $.ajax({
            type: "GET",
            url: '/ajax/get_form',
            dataType: "json",
            data: {
                href: tag
            },
            success: function(data) {
              alert(data.name);
            }
        })
    });
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
      }]
    })
  }

  return {
    init: function() {
      handleNavbar();
      handleTable();
    },

  };
}();
