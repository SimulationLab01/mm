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
       fetchData(page);
        //e.preventDefault();
    });
  }

  function fetchData(page) {
    //alert('fetch: '+page)
    var ajax_url = '/ajax/'+page;
    $("body").loading();
    //load HTML View
    $.ajax({
        type: "GET",
        url: ajax_url,
        data: {
            href: ajax_url
        },
        success: function(data) {
          $('#m_partial').html(data)
          //fetchData(page);
          ajax_url = '/api/materials';
          //load DATA
          $.ajax({
              type: "GET",
              url: ajax_url,
              dataType: 'json',
              success: function(data) {
                //alert(data.columns[0].field)
                //$('#m_partial').html(data)
                pageSel(page,data);
                $('body').loading('stop');
              },
              error:function(error){
                console.log(error)
              }
          })
        },
        error:function(error){
          console.log(error)
        }
    })
  }

  function pageSel(page,data) 
  {
    //alert('pageSel: '+page+','+data);
    if(page == 'body')
    {
      fillBody(data);
    }
    else if(page == 'detract')
    {
      alert('detract');
    }
    else if(page == 'check')
    {
      alert('check');
    }
    else if(page == 'delete')
    {
      alert('delete');
    }
    //alert('fetch : '+page);
    //handleTable(data);
  }

  function fillBody(data)
  {
    //alert('fillBody : '+data)
    data.columns[0]['align'] = 'center';
    data.columns[0]['valign'] = 'middle';

    data.columns[1]['align'] = 'center';
    data.columns[1]['valign'] = 'middle';
    data.columns[1]['width'] = 50;
    data.columns[1]['formatter'] = attLook;

    data.columns[7]['align'] = 'center';
    data.columns[7]['valign'] = 'middle';
    data.columns[7]['width'] = 100;
    data.columns[7]['events'] = statusEvents;
    data.columns[7]['formatter'] = statusLook;


    $('#table').bootstrapTable({
      search: true,
      //showRefresh: true,
      buttonsAlign: "left",
      //clickToSelect: true, 
      columns: data.columns,
      data: data.data,
      onAll: tableEvents
    })
    //alert('fillBody');
  }

  function statusLook(value,row,index) {
    var val = value;
    if( val == 1 )
    {
      return[
      '<div class="toggle-container">'+
      '<input type="checkbox" checked data-toggle="toggle" class="usage-toggle">'+
      '</div>'
      ].join("")
    }
    else if( val == 2 )
    {
      return[
      '<div class="toggle-container">'+
      '<input type="checkbox" data-toggle="toggle" class="usage-toggle">'+
      '</div>'
      ].join("")
    }
    else if( val == 3 )
    {
      return[
      '仍有存量'
      ].join("")
    }
    else if( val == 4 )
    {
      return[
      '待補充'
      ].join("")
    }
  }

  function attLook(value,row,index) {
    var val = value;
    if( val == 1 )
    {
      return[
      '<i class="fas fa-money-bill-alt"></i>'
      ].join("")
    }
    else if( val == 2 )
    {
      return[
      '<i class="fas fa-tools"></i>'
      ].join("")
    }
    else if( val == 3 )
    {
      return[
      '<i class="fas fa-peace"></i>'
      ].join("")
    }
  }

  window.statusEvents = {
    "click .toggle-container":function(e,value,row,index) {
      var toggle = $(e.target).parent().parent().find('.usage-toggle');
      //alert(toggle.attr('class'))
      $.confirm({
          title: '資產確認',
          content: '請確認資產狀態是否良好， 並將物品放回1號櫃子。',
          buttons: {
              稍後歸還: function () {
                //$.alert($(this));
                toggle.bootstrapToggle('off');
              },
              確認: function () {
                //$.alert($(this));
                //toggle.bootstrapToggle('off');
              }
          }
      });
      //alert("財產"+row.id+"已更新");
    }
  }

  function tableEvents(name,args) {
    //set toggle
    $('.usage-toggle').bootstrapToggle({
      on: '可使用',
      off: '使用中',
      size: 'small'
    });
  }

  return {
    init: function() {
      // var url = $(location).attr('href');
      // var tag = url.split('#');
      // loadPartial(tag[1]);

      handleHeader();
      handleNavbar();
      //handleTable();
      fetchData("body");
    },
  };

}();
