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
          $('#m_partial').html(data)
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

  function AddfunctionAlty(value,row,index) {
    var val = row.usage;
    if( val == 1 )
    {
      return[
      '<input type="checkbox" checked data-toggle="toggle" class="usage-toggle">'
      ].join("")
    }
    else if( val == 2 )
    {
      return[
      '<input type="checkbox" data-toggle="toggle" class="usage-toggle">'
      ].join("")
    }
    else if( val == 3 )
    {
      return[
      '待補充'
      ].join("")
    }
  }

  window.operateEvents = {
    // "click #tableEdit":function(e,value,row,index) {
    //   alert(row.id);
    // },
    "change .usage-toggle":function(e,value,row,index) {
      var toggle = $(e.target);
      //alert(toggle);
      $.confirm({
          title: '資產確認',
          content: '請確認資產狀態是否良好， 並將物品放回1號櫃子。',
          buttons: {
              稍後歸還: function () {
                //$.alert($(this));
                //toggle.bootstrapToggle('off');
              },
              確認: function () {
                $.alert($(this));
              }
          }
      });
      //alert("財產"+row.id+"已更新");
    }
  }

  function handleTable(page) {
    $('#table').bootstrapTable({
      search: true,
      showRefresh: true,
      buttonsAlign: "left",
      clickToSelect: true, 
      columns: [{
        field: 'id',
        title: '編號',
        align: 'right',
        width: 50,
        sortable: true
      }, {
        field: 'cate',
        title: '屬性',
        align: 'center',
        width: 50,
        sortable: true
      }, {
        field: 'name',
        title: '名稱',
        sortable: true
      }, {
        field: 'type',
        title: '分類',
        sortable: true
      }, {
        field: 'place',
        title: '位置',
        sortable: true
      }, {
        field: 'spec',
        title: '規格'
      }, {
        field: 'date',
        title: '更新時間',
        sortable: true
      }, {
        field: 'usage',
        title: '',
        align: 'center',
        valign: 'middle',
        width: 100,
        events: operateEvents,
        formatter: AddfunctionAlty,
      }],
      data: [{
        id: 1,
        name: 'Item 1',
        place: '櫃子',
        usage: '1'
      }, {
        id: 2,
        name: 'Item 2',
        place: '櫃子',
        usage: '2'
      },{
        id: 3,
        name: 'Item 1',
        place: '櫃子',
        usage: '1'
      },{
        id: 4,
        name: 'Item 1',
        place: '櫃子',
        usage: '3'
      },{
        id: 5,
        name: 'Item 3',
        place: '櫃子',
        usage: '2'
      },{
        id: 6,
        name: 'Item 2',
        place: '櫃子',
        usage: '1'
      },{
        id: 7,
        name: 'Item 1',
        place: '櫃子',
        usage: '1'
      },{
        id: 8,
        name: 'Item 1',
        place: '櫃子',
        usage: '2'
      },{
        id: 9,
        name: 'Item 2',
        place: '櫃子',
        usage: '1'
      },{
        id: 10,
        name: 'Item 3',
        place: '櫃子',
        usage: '3'
      },{
        id: 11,
        name: 'Item 1',
        place: '櫃子',
        usage: '1'
      },],
      onAll: tableEvents
    })
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
      handleTable();
      loadPartial("body");
    },
  };

}();
