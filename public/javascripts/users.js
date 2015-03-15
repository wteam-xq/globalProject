// 用户列表脚本
$(function(){

  var $remove_btn = $('.removeUser');
  var $remove_submit = $('#removeSubmit');
  var $remove_cancel = $('#removeCancel');
  // 存储待删除用户ID隐藏域
  var $selected_id = $('#selectId');
  // 删除确认弹出框
  var $confirm_dialog = $('#removeConfirm');

  $remove_btn.on('click', function(){
    var $this = $(this);
    var _id = $this.attr('data-id');
    $selected_id.val(_id);
    $confirm_dialog.modal({backdrop:'static'});
  });

  $remove_submit.on('click', function(){
    // 异步请求
    var $this = $(this);
    var _id = $selected_id.val();
    $.post('/admin/user/delete', {id: _id}, function(data){
      if (data.error){
        $('#removeTips').html('删除异常:' + data.error + '  请刷新重试。');
      }else{
        window.location.href = '/admin/users';
      }
    }, 'json');
  });
  $remove_cancel.on('click', function(){
    $selected_id.val('');
  });

  // 用户添加校验
  var $commit_btn = $('#commitBtn');
  $commit_btn.on('click', function(){
    var $sub_btn = $('#subBtn');
    var $user_form = $('#userform');
    var $add_tips = $('#addTips');
    var _pass = $user_form.find('#pas').val();
    var _confirm_pas = $user_form.find('#confirmPas').val();
    var _email = $user_form.find('#email').val();

    var _flg = true;
    if (!_email || _email == ''){
      $add_tips.removeClass('hidden');
      $add_tips.html('邮箱不能为空');
      _flg = false;
    }else if (!_pass || _pass == ''){
      $add_tips.removeClass('hidden');
      $add_tips.html('密码不能为空');
      _flg = false;
    }else if (_confirm_pas != _pass){
      $add_tips.removeClass('hidden');
      $add_tips.html('确认密码不匹配');
      _flg = false;
    }else if (!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(_email)){
      $add_tips.removeClass('hidden');
      $add_tips.html('邮箱格式不对');
      _flg = false;
    }
    if (_flg){
      // 异步请求， 判断该邮箱是否被使用
      $.get('/admin/user/search', {email: _email},  function(data){
        if (data && data.error){
          $add_tips.removeClass('hidden');
          $add_tips.html('查询异常:' + data.error + '  请刷新重试。');
        }else{
          if (data && data._id){
            $add_tips.removeClass('hidden');
            $add_tips.html('邮箱已被使用，请重新填写');
          }else{
            $user_form.trigger('submit');
          }
        }
      });
    }
  });

});