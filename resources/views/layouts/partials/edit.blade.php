<div class="right_pannel">
  <nav class="navbar navbar-default rp_nav group_v group_e group_h">
    <ul class="nav navbar-nav">
      <li id="viewTab" class="active"><a>品項資訊</a></li>
      <li id="historyTab"><a>歷史紀錄</a></li>
    </ul>
  </nav>
  <div class="row rp_content">

    <div id="viewer" class="group_v group_e">
      <form method="post" enctype="multipart/form-data" id="update-form" class="form-horizontal">
        <div class="form-group row">
          <div class="v_text">
            <div class="col-sm-6 v_head">
              No. <label id="v_id" class="">XXX</label>
            </div>
            <div class="col-sm-6 v_head">
              <label id="v_att" style="float:right" value="1">屬性</label>
            </div>
          </div>
        </div>
        <div class="form-group-title row">
          <div class="v_text col-sm-12">
            <label id="v_name" class="v_title group_v">XXX</label>
            <input id="e_name" class="form-control v_input group_e" type="text" name="e_name" placeholder="品項名稱">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-3 v_field">類別</label>
          <div class="col-sm-9 v_text">
            <label id="v_type" class="v_value group_v">OOO</label>
            <select id="e_type" class="browser-default custom-select form-control v_input group_e" name="e_type" placeholder="">
            </select>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-3 v_field">位置</label>
          <div class="col-sm-9 v_text">
            <label id="v_place" class="v_value group_v">OOO</label>
            <input id="e_place" name="e_place" type="text" class="form-control v_input group_e"  placeholder="">
          </div>
        </div>
        <div class="form-group row att_c">
            <label class="col-sm-3 v_field">數量</label>
            <div class="col-sm-9 v_text">
              <label id="v_number" class="v_value group_v">OOO</label>
              <input id="e_number" name="e_number" class="form-control v_input group_e" type="number" min="1" max="1000" placeholder="數量">
            </div>
        </div>
        <div class="form-group row att_c">
            <label class="col-sm-3 v_field">單位</label>
            <div class="col-sm-9 v_text">
              <label id="v_unit" class="v_value group_v">OOO</label>
              <input id="e_unit" name="e_unit" class="form-control v_input group_e" type="text" placeholder="單位">
            </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-3 v_field">規格</label>
          <div class="col-sm-9 v_text">
            <label id="v_spec" class="v_value group_v">OOO</label>
            <input type="text" class="form-control v_input group_e" id="e_spec" name="e_spec" placeholder="">
          </div>
        </div>
        <div class="form-group row att_a att_b">
          <label class="col-sm-3 v_field">使用人</label>
          <div class="col-sm-9 v_text">
            <label id="v_user" class="v_value group_v">OOO</label>
            <input type="text" class="form-control v_input group_e" id="e_user" name="e_user" placeholder="">
          </div>
        </div>
        <div class="form-group row att_a att_b">
          <label class="col-sm-3 v_field">用途</label>
          <div class="col-sm-9 v_text">
            <label id="v_purpose" class="v_value group_v">OOO</label>
            <input type="text" class="form-control v_input group_e" id="e_purpose" name="e_purpose" placeholder="">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-3 v_field">料號</label>
          <div class="col-sm-9 v_text">
            <label id="v_purchase_num" class="v_value group_v">OOO</label>
            <input type="text" class="form-control v_input group_e" id="e_purchase_num" name="e_user" placeholder="">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-3 v_field">價格</label>
          <div class="col-sm-9 v_text">
            <label id="v_price" class="v_value group_v">OOO</label>
            <input id="e_price" name="e_price" type="number" class="form-control v_input group_e"  placeholder="NTD">
          </div>
        </div>
      </form>
    </div>

    <div id="history" class="group_h">
      <!-- <div class="h_list">
        <div class="h_date">
          2021.02.21 16:45
        </div>
        <div class="h_body">
          <label>
            <span class="h_name">Jay</span>
            <span class="h_event">歸還</span>
            品項 
          </label>
        </div>
      </div> -->
    </div>

    <div id="generator" class="group_n">
      <form id="insert-form" class="form-horizontal">
        <div class="form-group row">
<!--           <label for="inputTitle" class="col-sm-4 col-form-label">Title</label> -->
          <div class="col-sm-12">
            <input id="n_name" name="n_name" class="form-control" type="text" placeholder="品項名稱">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-3 v_field">屬性</label>
          <div class="col-sm-9 v_text">
            <select id="n_attr" name="n_attr" class="browser-default custom-select form-control" placeholder="選擇屬性">
            </select>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-3 v_field">類別</label>
          <div class="col-sm-9 v_text">
            <select id="n_type" name="n_type" class="browser-default custom-select form-control" placeholder="選擇類別">
            </select>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-3 v_field">位置</label>
          <div class="col-sm-9 v_text">
            <input id="n_place" name="n_place" class="form-control" type="text" placeholder="存放位置">
          </div>
        </div>

        <div class="form-group row att_c">
            <label class="col-sm-3 v_field">數量</label>
            <div class="col-sm-9 v_text">
              <input id="n_number" name="n_number" class="form-control" type="number" min="1" max="1000" placeholder="數量">
            </div>
        </div>

        <div class="form-group row att_c">
            <label class="col-sm-3 v_field">單位</label>
            <div class="col-sm-9 v_text">
              <input id="n_unit" name="n_unit" class="form-control" type="text" placeholder="單位">
            </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-3 v_field">規格</label>
          <div class="col-sm-9 v_text">
            <textarea id="n_spec" name="n_spec" class="form-control" rows="3" placeholder="物品規格"></textarea>
          </div>
        </div>
        <div class="form-group row att_a">
          <label class="col-sm-3 v_field">用途</label>
          <div class="col-sm-9 v_text">
            <input id="n_purpose" name="n_purpose" class="form-control" type="text" placeholder="使用專案,內部測試...">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-3 v_field">料號</label>
          <div class="col-sm-9 v_text">
            <input id="n_purchase_num" name="n_purchase_num" class="form-control" type="text" placeholder="料號">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-3 v_field">價格</label>
          <div class="col-sm-9 v_text">
            <input id="n_price" name="n_price" class="form-control" type="number" placeholder="NTD">
          </div>
        </div>
        <div class="form-group row att_a">
          <div class="radio col-sm-6 v_field">
            <label><input id="n_owned_y" type="radio" name="optradio" value="1" checked>有掛帳</label>
          </div>
          <div class="radio col-sm-6 v_field">
            <label><input id="n_owned_n" type="radio" name="optradio" value="0">無掛帳</label>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-3 v_field">附註</label>
          <div class="col-sm-9 v_text">
            <textarea id="n_note" name="n_note" class="form-control" rows="3" placeholder="附註"></textarea>
          </div>
        </div>
<!--         <div class="form-group row">
          <label for="inputRd" class="col-sm-4 col-form-label">Release Date</label>
          <div class="col-sm-8">
            <div class="input-group date datepicker">
              <input type="text" class="form-control" id="inputRd" name="Release_date" readonly>
              <div class="input-group-addon">
                <span class="glyphicon glyphicon-th"></span>
              </div>
            </div>
          </div>
        </div> -->
      </form>
    </div>
  </div>
  
  
  <div class="row rp_btn_group">
    <div class="row" align="right">
      <div class="rp_editmenu_field list-group hide">
        <a id="deleteBtn" class="list-group-item">刪除</a>
        <a id="editBtn" class="list-group-item">更改資訊</a>
      </div>
      <div class="rp_btn_field">
        <!-- <button id="borrowBtn" type="button" name="submitBtn" class="btn btn-success group_v">使用登記</button> -->
        <button id="closeBtn" type="button" name="submitBtn" class="btn btn-success group_v">取消</button>
        <button id="editMenuBtn" type="button" name="submitBtn" class="btn btn-success group_v"><i class="fas fa-pencil-alt"></i> 編輯 <i class="fas fa-caret-down"></i></button>
        <button id="editNBtn" type="button" name="submitBtn" class="btn btn-success group_e">取消</button>
        <button id="editYBtn" type="button" name="submitBtn" class="btn btn-success group_e">完成</button>
        <button id="addNBtn" type="button" name="submitBtn" class="btn btn-success group_n">取消</button>
        <button id="addYBtn" type="button" name="submitBtn" class="btn btn-success group_n">建立</button>
      </div>
    </div>
  </div>
</div>

<a id="addBtn" class="rounded-Btn"><span>+</span></a>