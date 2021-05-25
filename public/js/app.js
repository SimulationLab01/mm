/*
* Template Name: Unify - Responsive Bootstrap Template
* Version: 1.9
* Author: @htmlstream
* Website: http://htmlstream.com
*/

var App = function() {

  var mData;
  var typeList;

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

  function handleControlPannel() {
    $('.v_input').addClass('hide');

    $.ajax({
      type: "GET",
      url: "api/materials/typeList",
      // url: "materials/typeList",
      success: function(data) {
        typeList = data;
        $.each(typeList, function (i, item) {
            $('#e_type, #n_type').append($('<option>', { 
                value: item.ID,
                text : item.TYPE_NAME 
            }));
        });
      },
      error:function(error){
        console.log(error)
      }
    })

    $('#addBtn').on("click", addBtnClick);
    $('#addNBtn').on("click", addNBtnClick);
    $('#addYBtn').on("click", addYBtnClick);

    $('#viewTab').on("click", viewTabClick);
    $('#historyTab').on("click", historyTabClick);

    $('#borrowBtn').on("click", borrowBtnClick);
    $('#editBtn').on("click", editBtnClick);
    $('#editNBtn').on("click", editNBtnClick);
    $('#editYBtn').on("click", editYBtnClick);
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
          pageLayout = data;
          ajax_url = '/api/materials';
          // ajax_url = '/materials';
          $.ajax({
              type: "GET",
              url: ajax_url,
              dataType: 'json',
              success: function(data) {
                //alert(data.columns[0].field)
                $('#m_partial').html(pageLayout);
                pageSel(page,data);          
                $('body').loading('stop');
              },
              error:function(error){
                console.log(error);
                $('body').loading('stop');
              }
          });
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

    var ajax_url = '/api/materials/counts';
    // var ajax_url = '/materials/counts';
    $.ajax({
        type: "GET",
        url: ajax_url,
        dataType: 'json',
        success: function(data) {
          //alert(data.count[0]);
          $('#count-rich').text(data.count[0]);
          $('#count-normal').text(data.count[1]);
          $('#count-cheap').text(data.count[2]);
        },
        error:function(error){
          console.log(error);
        }
    });

    $('#table').bootstrapTable({
      search: true,
      //showRefresh: true,
      buttonsAlign: "left",
      //clickToSelect: true, 
      columns: data.columns,
      data: data.data,
      onAll: tableEvents,
      //onPreBody: sorting,
      //onPostBody: resetView,
      onClickRow: rowClick
    })
    //alert('fillBody');
  }


//////////////////////Events/////////////////////
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
      //alert(row.STATUS);
      if(row.STATUS == 2)
      {
        $.confirm({
          title: '資產確認',
          content: '請確認資產狀態是否良好， 並將物品放回'+row.PLACE+'。',
          buttons: {
            稍後歸還: function () {
              //$.alert($(this));
              toggle.bootstrapToggle('off');
            },
            確認: function () {
              //$.alert($(this));
              //toggle.bootstrapToggle('off');
              row.STATUS = 1
            }
          }
        });
      }
      else if(row.STATUS == 1)
      {
        row.STATUS = 2;
      }
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
    //alert(name)
  }

  function sorting() {
    $("body").loading();
    //alert('sort')
  }
  function resetView() {
    $('body').loading('stop');
  }
  function rowClick (row, $element, field) {

    if (field !== 'STATUS') {
        if($element.hasClass('highlight'))
        {
          $element.removeClass('highlight');
          close_info();
        }
        else
        {
          $element.addClass('highlight').siblings().removeClass('highlight');
          view_info(row.ID);
        }
        
    }
    // $(row).addClass('highlight').siblings().removeClass('highlight');
  }

  function addBtnClick () {
    add_info();
  }

  function addNBtnClick () {
    close_info();
  }

  function addYBtnClick () {
    close_info();
  }

  function viewTabClick () {
    view_info();
  }

  function historyTabClick () {
    view_history();
  }

  function borrowBtnClick() {
    alert('borrowBtnClick')
  }

  function editBtnClick () {
    edit_info();
  }

  function editNBtnClick() {
    view_info();
  }

  function editYBtnClick() {
    view_info();
  }

////////////////////// End Events /////////////////////

  function view_info(key) { 
    var ajax_url = '/api/materials/'+key;
    // var ajax_url = '/materials/'+key;

    $('#viewTab').addClass('active');
    $('#historyTab').removeClass('active');
    $('.group_h, .group_e, .group_n').addClass('hide');
    $('.group_v').removeClass('hide');

    if(key != "" && key != null)
    {
      $.ajax({
        type: "GET",
        url: ajax_url,
        success: function(data) {
          mData = data;
          //alert(data.PURPOSE);
          $('#v_id').text(data.ID);
          $('#v_att').text( mapAtt(data.ATTRIBUTE) );
          $('#v_name').text(data.NAME);
          $('#v_type').text( mapType(data.TYPE) );
          $('#v_place').text(data.PLACE);
          $('#v_spec').text(data.SPEC);
          $('#v_purpose').text(data.PURPOSE);
          $('#v_price').text(data.PRICE);
          $('.right_pannel').addClass('show');
        },
        error:function(error){
          console.log(error)
        }
      })
    }
  }
  
  function view_history(key) { 
    $('.group_e, .group_v, .group_n').addClass('hide');
    $('.group_h').removeClass('hide');
    //alert(mData.ID)
  }

  function edit_info(key) { 
    var ajax_url = '/api/materials/'+key;
    // var ajax_url = '/materials/'+key;
    $('.group_h, .group_v, .group_n').addClass('hide');
    $('.group_e').removeClass('hide');

    $('#e_name').val(mData.NAME);
    $('#e_type').val(mData.TYPE);
    $('#e_place').val(mData.PLACE);
    $('#e_spec').val(mData.SPEC);
    $('#e_purpose').val(mData.PURPOSE);
    $('#e_price').val(mData.PRICE);
  }

  function add_info() { 
    $('.group_e, .group_v, .group_h').addClass('hide');
    $('.group_n').removeClass('hide');

    $('.right_pannel').addClass('show');
    //alert(mData.ID)
  }

  function close_info() {
    $('.right_pannel').removeClass('show');
  }

  function mapAtt(key) {
    if(key == 1)
      return "貴重物品";
    else if(key == 2)
      return "一般物品";
    else if(key == 3)
      return "耗材";
  }

  function mapType(key) {
    for(var i=0; i<typeList.length; i++)
      if(typeList[i].ID == key)
        return typeList[i].TYPE_NAME;
  }

  return {
    init: function() {
      handleHeader();
      handleNavbar();
      handleControlPannel();
      fetchData("body");
    },
  };

}();
