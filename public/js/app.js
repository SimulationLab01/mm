/*
* Template Name: Unify - Responsive Bootstrap Template
* Version: 1.9
* Author: @htmlstream
* Website: http://htmlstream.com
*/

var App = function() {

  var mData;
  var typeList;
  var highLightRow;
  var numberThreshold = 10;

  //新增欄位驗證參數
  var n_valided = $('#insert-form')
    .addBack()
    .bootstrapValidator({
      excluded: ':disabled',
      feedbackIcons: {
        //valid: 'glyphicon glyphicon-ok',
        //invalid: 'glyphicon glyphicon-remove',
        //validating: 'glyphicon glyphicon-refresh'
      },
      fields: {
        n_name: {
          validators: {
            notEmpty: {
              message: '請輸入名稱'
            },
            stringLength: {
              min: 1,
              max: 50,
              message: 'The Title must be less than 50 characters'
            }
          }
        },
        n_place: {
          validators: {
            notEmpty: {
              message: '請填寫存放位置'
            },
            stringLength: {
              min: 1,
              max: 20,
              message: 'The Product Type must be less than 20 characters'
            }
          }
        },
        n_spec: {
          validators: {
            notEmpty: {
              message: '請填寫規格'
            },
            stringLength: {
              min: 1,
              max: 100,
              message: 'The Product Type must be less than 100 characters'
            }
          }
        },
        n_number: {
          validators: {
            notEmpty: {
              message: '請填寫數量'
            },
            stringLength: {
              min: 1,
              max: 20,
              message: 'The Product Type must be less than 20 characters'
            }
          }
        },
        n_unit: {
          validators: {
            notEmpty: {
              message: '請填寫單位'
            },
            stringLength: {
              min: 1,
              max: 20,
              message: 'The Product Type must be less than 20 characters'
            }
          }
        },
        n_purpose: {
          validators: {
            notEmpty: {
              message: '請填寫用途'
            },
            stringLength: {
              min: 1,
              max: 20,
              message: 'The Place must be less than 20 characters'
            }
          }
        },
        n_note: {
          validators: {
            // notEmpty: {
            //   message: '請填寫使用人'
            // },
            stringLength: {
              min: 1,
              max: 50,
              message: 'The Designer must be less than 50 characters'
            }
          }
        }
      }
    })

  var e_valided = $('#update-form')
    .addBack()
    .bootstrapValidator({
      excluded: ':disabled',
      feedbackIcons: {
        //valid: 'glyphicon glyphicon-ok',
        //invalid: 'glyphicon glyphicon-remove',
        //validating: 'glyphicon glyphicon-refresh'
      },
      fields: {
        e_name: {
          validators: {
            notEmpty: {
              message: '請輸入名稱'
            },
            stringLength: {
              min: 1,
              max: 50,
              message: 'The Title must be less than 50 characters'
            }
          }
        },
        e_place: {
          validators: {
            notEmpty: {
              message: '請填寫存放位置'
            },
            stringLength: {
              min: 1,
              max: 20,
              message: 'The Product Type must be less than 20 characters'
            }
          }
        },
        e_spec: {
          validators: {
            notEmpty: {
              message: '請填寫規格'
            },
            stringLength: {
              min: 1,
              max: 100,
              message: 'The Product Type must be less than 100 characters'
            }
          }
        },
        e_number: {
          validators: {
            notEmpty: {
              message: '請填寫數量'
            },
            stringLength: {
              min: 1,
              max: 20,
              message: 'The Product Type must be less than 20 characters'
            }
          }
        },
        e_unit: {
          validators: {
            notEmpty: {
              message: '請填寫單位'
            },
            stringLength: {
              min: 1,
              max: 20,
              message: 'The Product Type must be less than 20 characters'
            }
          }
        },
        e_user: {
          validators: {
            // notEmpty: {
            //   message: '請填寫使用人'
            // },
            stringLength: {
              min: 1,
              max: 20,
              message: 'The Place must be less than 20 characters'
            }
          }
        },
        e_purpose: {
          validators: {
            // notEmpty: {
            //   message: '請填寫用途'
            // },
            stringLength: {
              min: 1,
              max: 20,
              message: 'The Place must be less than 20 characters'
            }
          }
        },
        e_price: {
          validators: {
            // notEmpty: {
            //   message: '請填寫使用人'
            // },
            stringLength: {
              min: 1,
              max: 50,
              message: 'The Designer must be less than 50 characters'
            }
          }
        }
      }
    })

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
        attrList = data.attr;
        $.each(attrList, function (i, item) {
            $('#e_attr, #n_attr').append($('<option>', { 
                value: item.ID,
                text : item.ATTR_NAME 
            }));
        });

        typeList = data.type;
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

    $('#n_attr').on('change', attrChange);

    $('#addBtn').on("click", addBtnClick);
    $('#addNBtn').on("click", addNBtnClick);
    $('#addYBtn').on("click", addYBtnClick);

    $('#viewTab').on("click", viewTabClick);
    $('#historyTab').on("click", historyTabClick);

    $('#borrowBtn').on("click", borrowBtnClick);

    $('#editMenuBtn').on("click", editMenuBtnClick);
    $('#closeBtn').on("click", closeBtnClick);
    $('#editBtn').on("click", editBtnClick);
    $('#editNBtn').on("click", editNBtnClick);
    $('#editYBtn').on("click", editYBtnClick);
    $('#deleteBtn').on("click", deleteBtnClick);
    $('#detractBtn').on("click", detractBtnClick);

    //$('body').on("click", bodyClick);
    $('body').on("mousedown", bodyClick);
    $(document).on('keyup', keyPress);
  }

  function handleDateRange() {
    var nowDate = new Date();
    var today = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate(), 0, 0, 0, 0);
    $('input[name="br_dates"]').daterangepicker({
      opens: 'center',
      drops: 'up',
      minDate: today,
      autoApply: true,
      locale: {
            format: 'YYYY/MM/DD'
        },
      alwaysShowCalendars: true
    }, function(start, end, label) {
      console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
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
              //handleDateRange();
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


  function disableScroll() {
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  
    // if any scroll is attempted, set this to the previous value
    window.onscroll = function() {
        window.scrollTo(scrollLeft, scrollTop);
    };
  }
    
  function enableScroll() {
    window.onscroll = function() {};
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
    "click .toggle-container": function(e,value,row,index) {
      var toggle = $(e.target).parent().parent().find('.usage-toggle');
      borrowCorfirm(row,toggle);
    }
  }

  function borrowCorfirm(row,toggle)
  {
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
            //var nowDate = new Date();
            //var today = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate(), nowDate.getHours(), nowDate.getMinutes, nowDate.getSeconds, 0);
            returnBtnClick(row.ID);
            row.STATUS = 1
          }
        }
      });
    }
    else if(row.STATUS == 1)
    {
      $.confirm({
          title: '使用登記',
          content: '' +
          '<form action="" class="formName">' +
          '<div class="form-group">' +
          '<label>使用人</label>' +
          '<input type="text" name="br_user" id="br_user" class="name form-control" required />' +
          '</div>' +
          '<div class="form-group">' +
          '<label>用途</label>' +
          '<input type="text" name="br_purpose" id="br_purpose" class="name form-control" required />' +
          '</div>' +
          '<div class="form-group">' +
          '<label>歸還日期</label>' +
          '<input type="text" name="br_dates" id="br_dates" class="name form-control" required />' +
          '</div>' +
          '</form>',
          buttons: {
              formSubmit: {
                  text: '借用',
                  btnClass: 'btn-blue',
                  action: function () {
                      var name = this.$content.find('#br_user').val();
                      var purpose = this.$content.find('#br_purpose').val();
                      var date = $('input[name="br_dates"]').data('daterangepicker').endDate.format('YYYY-MM-DD HH:mm:ss');
                      if(!name){
                          $.alert('請填寫借用人');
                          return false;
                      }
                      if(!purpose){
                          $.alert('請填寫用途');
                          return false;
                      }
                      //借用API//
                      borrowBtnClick(row.ID,name,purpose,date);
                      row.STATUS = 2;
                      enableScroll();
                  }
              },
              取消: function () {
                  row.STATUS = 1
                  toggle.bootstrapToggle('on');
                  enableScroll();
              },
          },
          onContentReady: function () {
              // bind to events
              var jc = this;
              this.$content.find('form').on('submit', function (e) {
                  // if the user submits the form by pressing enter in the field.
                  e.preventDefault();
                  jc.$$formSubmit.trigger('click'); // reference the button and click it
              });
              handleDateRange();
              disableScroll();
          }
      });
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
    highLightRow = $element;
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

  function attrChange() {
    var attr = $('#n_attr').val();
    $("#insert-form").data('bootstrapValidator').resetForm();
    setFormByAttr(attr);
  }

  function addBtnClick () {
    add_info();
  }

  function addNBtnClick () {
    close_info();
    resetAddForm();
  }

  function addYBtnClick () {
    var bootstrapValidator = $('#insert-form').data('bootstrapValidator');
    //手動觸發驗證
    bootstrapValidator.validate();
    if(bootstrapValidator.isValid()){
      //alert('update');
      var status;
      if($("#n_attr").val() == 3) 
        if($("#n_number").val() > numberThreshold)
          status = 3;
        else
          status = 4;
      else
        status = 1;

      var dataJSON = {
                  "ATTRIBUTE": $("#n_attr").val(),
                  "NAME": $("#n_name").val(),
                  "TYPE": $("#n_type").val(),
                  "NUMBER": $("#n_number").val(),
                  "UNIT": $("#n_unit").val(),
                  "PLACE": $("#n_place").val(),
                  "SPEC": $("#n_spec").val(),
                  "USER": "",
                  "RETURN_DELAY": 0,
                  "PRICE": $("#n_price").val(),
                  "NOTE": $("#n_note").val(),
                  "PURPOSE": $("#n_purpose").val(),
                  "OWNED": $("[name='optradio']:checked").val(),
                  "STATUS": status
                };
      $.ajax({
          url: "/api/materials/create",
          type: "POST",
          cache: false,
          data: dataJSON,
          dataType: "html",
          success: function(data) {
            resetAddForm();
            fetchData('body');
            close_info();
          },
          error:function(xhr, ajaxOptions, thrownError){
            alert(xhr.status);
            alert(thrownError);
            console.log(error)
          }
      })
    }
    //alert($("[name='optradio']:checked").val())
    
  }

  function viewTabClick () {
    view_info();
  }

  function historyTabClick () {
    view_history();
  }

  function borrowBtnClick(id,user,purpose,date) {
    //alert(date);
    var dataJSON = {
                  "USER": user,
                  "RETURN_DATE": date,
                  "PURPOSE": purpose,
                  "STATUS": 2
                };
    $.ajax({
          url: "/api/materials/edit/"+id,
          type: "POST",
          cache: false,
          data: dataJSON,
          dataType: "html",
          success: function(data) {
            $.alert(user + ' 借用完成');
            //$('#insert-form')[0].reset();
            //fetchData('body');
            //close_info();
          },
          error:function(xhr, ajaxOptions, thrownError){
            alert(xhr.status);
            alert(thrownError);
            console.log(error)
          }
      })
  }

  function returnBtnClick(id) {
    var dataJSON = {
                  "USER": '',
                  "PURPOSE": '',
                  "STATUS": 1
                };
    $.ajax({
          url: "/api/materials/edit/"+id,
          type: "POST",
          cache: false,
          data: dataJSON,
          dataType: "html",
          success: function(data) {
            //$('#insert-form')[0].reset();
            //fetchData('body');
            //alert(date);
            //close_info();
          },
          error:function(xhr, ajaxOptions, thrownError){
            alert(xhr.status);
            alert(thrownError);
            console.log(error)
          }
      })
  }

  function closeBtnClick () {
    close_info();
  }

  function editMenuBtnClick () {
    if( $('.rp_editmenu_field').hasClass('hide') )
      $('.rp_editmenu_field').removeClass('hide');
    else
      $('.rp_editmenu_field').addClass('hide');
    //edit_info();
  }

  function editBtnClick () {
    $('.rp_editmenu_field').addClass('hide');
    edit_info();
  }

  function editNBtnClick() {
    resetUpdateForm();
    view_info();
  }

  function editYBtnClick() {
    var bootstrapValidator = $('#update-form').data('bootstrapValidator');
    var id = $("#v_id").text();
    var attr = $("#v_att").attr('value');
    bootstrapValidator.validate();
    if(bootstrapValidator.isValid()){
      var dataJSON = {
            "NAME": $("#e_name").val(),
            "TYPE": $("#e_type").val(),
            "NUMBER": $("#e_number").val(),
            "UNIT": $("#e_unit").val(),
            "PLACE": $("#e_place").val(),
            "SPEC": $("#e_spec").val(),
            "USER": $("#e_user").val(),
            "PURPOSE": $("#e_purpose").val(),
            "PRICE": $("#e_price").val()
          };
      var status;
      if(attr == 3) 
      {
        if($("#e_number").val() > numberThreshold)
          status = 3;
        else
          status = 4;
        dataJSON.STATUS = status;
      }

      $.ajax({
          url: "/api/materials/edit/"+id,
          type: "POST",
          cache: false,
          data: dataJSON,
          dataType: "html",
          success: function(data) {
            resetUpdateForm();
            fetchData('body');
            close_info();
          },
          error:function(xhr, ajaxOptions, thrownError){
            alert(xhr.status);
            alert(thrownError);
            console.log(error)
          }
      })
    }
    //view_info();
  }

  function deleteBtnClick() {
    //alert('delete');
    var id = $("#v_id").text();
    //alert(id);
    $.confirm({
        title: '刪除確認',
        content: '是否確認要刪除資產。',
        buttons: {
          取消: function () {
            
          },
          確認: function () {
            $.ajax({
              url: "/api/materials/delete/"+id,
              type: "GET",
              cache: false,
              dataType: "json",
              success: function(data) {
                fetchData('body');
                close_info();
              },
              error:function(xhr, ajaxOptions, thrownError){
                alert(xhr.status);
                alert(thrownError);
                console.log(error)
              }
          })
          }
        }
    })
  }

  function detractBtnClick() {
    alert('detract');
    highLightRow.removeClass('highlight');
    close_info();
  }

  function bodyClick(e) {
    var id = $(e.target).attr('id');
    if(id == 'body' || id == 'm_partial') {
      close_info();
    }
  }

  function keyPress (e) {
    if (e.keyCode == 27) {
       close_info();
    }
  }

////////////////////// End Events /////////////////////

  function setFormByAttr(attr) {
    //var attr = $('#n_attr').val();
    
    if (attr == 1)
    {
      $('.att_b, .att_c').addClass('hide');
      $('.att_a').removeClass('hide');
      $('#insert-form').bootstrapValidator('enableFieldValidators','n_number', false, 'notEmpty');
      $('#insert-form').bootstrapValidator('enableFieldValidators','n_unit', false, 'notEmpty');
      $('#insert-form').bootstrapValidator('enableFieldValidators','n_purpose', true, 'notEmpty');

      $('#update-form').bootstrapValidator('enableFieldValidators','e_number', false, 'notEmpty');
      $('#update-form').bootstrapValidator('enableFieldValidators','e_unit', false, 'notEmpty');
    }
    else if (attr == 2) 
    {
      $('.att_a, .att_c').addClass('hide');
      $('.att_b').removeClass('hide');
      $('#insert-form').bootstrapValidator('enableFieldValidators','n_number', false, 'notEmpty');
      $('#insert-form').bootstrapValidator('enableFieldValidators','n_unit', false, 'notEmpty');
      $('#insert-form').bootstrapValidator('enableFieldValidators','n_purpose', false, 'notEmpty');

      $('#update-form').bootstrapValidator('enableFieldValidators','e_number', false, 'notEmpty');
      $('#update-form').bootstrapValidator('enableFieldValidators','e_unit', false, 'notEmpty');
    }
    else if (attr = 3)
    {
      $('.att_b, .att_a').addClass('hide');
      $('.att_c').removeClass('hide');
      $('#insert-form').bootstrapValidator('enableFieldValidators','n_number', true, 'notEmpty');
      $('#insert-form').bootstrapValidator('enableFieldValidators','n_unit', true, 'notEmpty');
      $('#insert-form').bootstrapValidator('enableFieldValidators','n_purpose', false, 'notEmpty');

      $('#update-form').bootstrapValidator('enableFieldValidators','e_number', true, 'notEmpty');
      $('#update-form').bootstrapValidator('enableFieldValidators','e_unit', true, 'notEmpty');
    }
  }

  function resetAddForm(){
    $('#insert-form')[0].reset();
    $("#insert-form").data('bootstrapValidator').resetForm();
  }

  function resetUpdateForm(){
    $('#update-form')[0].reset();
    $("#update-form").data('bootstrapValidator').resetForm();
  }

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
          var attr = data.ATTRIBUTE
          $('#v_att').attr('value', attr)
          setFormByAttr(attr);
          $('#v_id').text(data.ID);
          $('#v_att').text( mapAtt(attr) );
          $('#v_name').text(data.NAME);
          $('#v_type').text( mapType(data.TYPE) );
          $('#v_place').text(data.PLACE);
          $('#v_number').text(data.NUMBER);
          $('#v_unit').text(data.UNIT);
          $('#v_spec').text(data.SPEC);
          $('#v_user').text( data.USER == null ? "" : data.USER );
          $('#v_purpose').text( data.PURPOSE == null ? "" : data.PURPOSE );
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
    $('#e_number').val(mData.NUMBER);
    $('#e_unit').val(mData.UNIT);
    $('#e_spec').val(mData.SPEC);
    $('#e_user').val(mData.USER);
    $('#e_purpose').val(mData.PURPOSE);
    $('#e_price').val(mData.PRICE);
  }

  function add_info() { 
    var attr = $('#n_attr').val();
    $('.group_e, .group_v, .group_h').addClass('hide');
    $('.group_n').removeClass('hide');

    setFormByAttr(attr);

    $('.right_pannel').addClass('show');
    //alert(mData.ID)
  }

  function close_info() {
    $('.right_pannel').removeClass('show');
    $('.rp_editmenu_field').addClass('hide');
    $('#table tbody .highlight').removeClass('highlight');
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
