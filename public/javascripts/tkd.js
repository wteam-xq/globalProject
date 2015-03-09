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

});