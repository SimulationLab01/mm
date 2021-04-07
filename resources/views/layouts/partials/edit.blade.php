<div class="right_pannel">
  <nav class="navbar navbar-default rp_nav">
    <ul class="nav navbar-nav">
      <li id="viewTab" class="active"><a>品項資訊</a></li>
      <li id="historyTab"><a>歷史紀錄</a></li>
    </ul>
  </nav>
  <div class="row rp_content">
    <div id="viewer">
      <form action="insert.php" method="post" enctype="multipart/form-data" id="myform" class="form-horizontal">
        <div class="form-group row">
          <div class="v_head">
            <div class="col-sm-6">
              No. <label id="v_id" class="">XXX</label>
            </div>
            <div class="col-sm-6">
              <label id="v_att" style="float:right">屬性</label>
            </div>
          </div>
        </div>
        <div class="form-group row">
          <label id="v_name" class="col-sm-12 v_title">XXX</label>
          <input type="text" class="form-control v_input" id="e_name" name="e_name" placeholder="物品名稱">
        </div>
        <div class="form-group row">
          <label class="col-sm-3 v_field">類別</label>
          <div class="col-sm-9">
            <label id="v_type" class="v_value">手機</label>
            <input type="text" class="form-control v_input" id="e_type" name="e_type" placeholder="">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-3 v_field">位置</label>
          <div class="col-sm-9">
            <label id="v_place" class="v_value">1號櫃子</label>
            <input type="text" class="form-control v_input" id="e_place" name="e_type" placeholder="">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-3 v_field">規格</label>
          <div class="col-sm-9">
            <label id="v_spec" class="v_value">Sony 4A,6G/128G(5G版本)</label>
            <input type="text" class="form-control v_input" id="e_spec" name="e_type" placeholder="">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-3 v_field">用途</label>
          <div class="col-sm-9">
            <label id="m_purpose" class="v_value">OOO</label>
            <input type="text" class="form-control v_input" id="e_purpose" name="e_type" placeholder="">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-3 v_field">價格</label>
          <div class="col-sm-9">
            <label id="m_price" class="v_value">OOO</label>
            <input type="text" class="form-control v_input" id="e_price" name="e_type" placeholder="">
          </div>
        </div>
      </form>
    </div>
    <div id="history" class="hide">
      <div>
        <div class="h_head">
          2021.02.21 16:45
        </div>
        <div class="h_body">
          No. <label class="">Jay 將品項 歸還</label>
        </div>
      </div>
    </div>
  </div>
<!--     <div id="editor">
      <form action="insert.php" method="post" enctype="multipart/form-data" id="myform" class="form-horizontal">
        <div class="form-group row">
          <label for="inputTitle" class="col-sm-4 col-form-label">Title</label>
          <div class="col-sm-8">
            <input type="text" class="form-control" id="inputTitle" name="Title" placeholder="Title">
          </div>
        </div>
        <div class="form-group row">
          <label for="inputType" class="col-sm-4 col-form-label">Type</label>
            <div class="col-sm-8">
              <select class="browser-default custom-select form-control" id="inputType" name="Type">
                <option value="1">Fashion</option>
                <option value="2">Transport</option>
                <option value="3">Color</option>
                <option value="4">Visual</option>
                <option value="5">CMF</option>
                <option value="6">Form</option>
                <option value="7">Space</option>
                <option value="8">Technology</option>
                <option value="9">UX</option>
                <option value="10">Thinking</option>
                <option value="11">Mechanism</option>
              </select>
            </div>
        </div>
        <div class="form-group row">
          <label for="inputPt" class="col-sm-4 col-form-label">Project Name</label>
          <div class="col-sm-8">
            <input type="text" class="form-control" id="inputPt" name="Product_type" placeholder="Raytrace, Digit etc.">
          </div>
        </div>
        <div class="form-group row">
          <label for="inputDesign" class="col-sm-4 col-form-label">Designer</label>
          <div class="col-sm-8">
            <input type="text" class="form-control" id="inputDesign" name="Designer" placeholder="Designer or company name">
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPlace" class="col-sm-4 col-form-label">Place</label>
          <div class="col-sm-8">
            <input type="text" class="form-control" id="inputPlace" name="Place" placeholder="Gemany, USA, Italy etc.">
          </div>
        </div>
        <div class="form-group row">
          <label for="inputRd" class="col-sm-4 col-form-label">Release Date</label>
          <div class="col-sm-8">
            <div class="input-group date datepicker">
              <input type="text" class="form-control" id="inputRd" name="Release_date" readonly>
              <div class="input-group-addon">
                <span class="glyphicon glyphicon-th"></span>
              </div>
            </div>
          </div>
        </div>
        <div class="form-group row">
          <label for="inputCreator" class="col-sm-4 col-form-label">Creator</label>
          <div class="col-sm-8">
            <input type="text" class="form-control" id="inputCreator" name="Creator" placeholder="AP/XX/XXXX">
          </div>
        </div>
        <div class="form-group row">
          <label for="inputWebsite" class="col-sm-4 col-form-label">Website</label>
          <div class="col-sm-8">
            <input type="text" class="form-control" id="inputWebsite" name="Website" placeholder="https://reurl.cc/EeNLR">
          </div>
        </div>
        <div class="form-group row">
          <label for="inputContent" class="col-sm-4 col-form-label">Inspiration description
</label>
          <div class="col-sm-8">
            <textarea class="form-control" id="inputContent" name="Content" rows="6" placeholder="Please input Content..."></textarea>
          </div>
        </div>
        <div class="form-group row" align="right">
          <div class="btn-field">
            <button type="submit" name="submitBtn" class="btn btn-success">Submit</button>
          </div>
        </div>
      </form>
    </div> -->
  
  <div class="row rp_btn_group">
    <div class="row" align="right">
      <div class="rp_btn_field">
        <button id="borrowBtn" type="button" name="submitBtn" class="btn btn-success">使用登記</button>
        <button id="editBtn" type="button" name="submitBtn" class="btn btn-success">編輯</button>
        <button id="cancelBtn" type="button" name="submitBtn" class="btn btn-success">取消</button>
        <button id="completeBtn" type="button" name="submitBtn" class="btn btn-success">完成</button>
      </div>
    </div>
  </div>
</div>