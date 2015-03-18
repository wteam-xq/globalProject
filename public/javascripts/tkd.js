// 用户列表脚本
$(function(){

  // 删除 确认弹出框
  var $confirm_dialog = $('#removeConfirm');
  var $remove_submit = $('#removeSubmit');
  var $remove_cancel = $('#removeCancel');
  var $remove_tips = $('#removeTips');

  // 规则页面逻辑
  var $rule_cont = $('#rule');
  var $remove_btn = $rule_cont.find('.removeRule');
  // 存储待删除用户ID隐藏域
  var $selected_id = $rule_cont.find('#selectId');
  

  $remove_btn.on('click', function(){
    var $this = $(this);
    var _id = $this.attr('data-id');
    $selected_id.val(_id);
    // 改变提示内容
    $remove_tips.html('确定要删除该规则吗？');
    $confirm_dialog.modal({backdrop:'static'});
  });

  $remove_submit.on('click', function(){
    // 异步请求
    var $this = $(this);
    var _id = $selected_id.val();

    return false;
    $.post('/admin/tkd/rule/delete', {id: _id}, function(data){
      if (data.error){
        $('#removeTips').html('删除异常:' + data.error + '  请刷新重试。');
      }else{
        window.location.href = '/admin/tkd';
      }
    }, 'json');

  });

  $remove_cancel.on('click', function(){
    $selected_id.val('');
  });

  // 测试 bootstrap 居中
  $confirm_dialog.on('shown.bs.modal', function(){
    var $this = $(this);
    var $modal_dialog = $this.find('.modal-dialog');
    var m_top = ( $(document).height() - $modal_dialog.height() )/2;
    $modal_dialog.css({'margin': m_top + 'px auto'});
  });

  // 二级页面逻辑
  var $main_menu = $('#mainmenu');
  var $rule_add_btn = $('#rule-add'); 
  var $sub_panel = $('#sub-panel');
  $rule_add_btn.on('click', function(){
    var $this = $(this);
    $sub_panel.find('.row').hide();
    $sub_panel.show();
    $sub_panel.find('.add-panel').show();
    $main_menu.hide();
  });
  $main_menu.find('.rule-update').on('click', function(){
    var $this = $(this);
    var _id = $this.attr('data-id');
    $sub_panel.find('.row').hide();
    $sub_panel.show();
    $sub_panel.find('.update-panel').show();
    $main_menu.hide();
  });
  $sub_panel.find('.back-main').on('click', function(){
    var $this = $(this);
    var $parent_panel = $this.parents('.panel');
    $sub_panel.find('.row').hide();
    $main_menu.show();
  });

  // 百度编辑器初始化
  $Ue = UE.getEditor('add-content');
  // 是弹出框居中。。。
  // var $modal_dialog = $(this.$element[0]).find('.modal-dialog');
  // var m_top = ( $(window).height() - $modal_dialog.height() )/2;
  // $modal_dialog.css({'margin': m_top + 'px auto'});
});