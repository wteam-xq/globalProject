// 用户列表脚本
$(function(){
  // 路径导航条
  var $admin_crumb = $('#admin-crumb');
  var $to_tkd = $('#to-tkd');
  
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
  
  // 删除规则
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

  // bootstrap 居中
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
    // 导航条出现
    $admin_crumb.find('.active:first').html('添加规则');
    $admin_crumb.show();
  });
  $main_menu.find('.rule-update').on('click', function(){
    var $this = $(this);
    var _id = $this.attr('data-id');
    $sub_panel.find('.row').hide();
    $sub_panel.show();
    $sub_panel.find('.update-panel').show();
    $main_menu.hide();
    // 导航条出现
    $admin_crumb.find('.active:first').html('更新规则');
    $admin_crumb.show();
  });
  $sub_panel.find('.back-main').on('click', function(){
    var $this = $(this);
    $sub_panel.find('.row').hide();
    $main_menu.show();
    // 导航条隐藏
    $admin_crumb.hide();
  });

  // 百度编辑器初始化
  $Ue = UE.getEditor('add-content');
  $Ue2 = UE.getEditor('update-content');
  
  // 路径导航条事件
  $to_tkd.on('click', function(){
    $sub_panel.find('.back-main').trigger('click');
  });
  
  // 隐藏上传图标相关节点
  var $upload_form = $('#upload-form');
  var $upload_tips = null;
  var $upload_pro = null;
  var $file_dom = $upload_form.find('#upload-file');
  // 触发上传控件的按钮
  var $form_ico = $('#sub-panel').find('div.upload-ico');
  $form_ico.on('click', function(){
    var $this = $(this);
    var _upload_type = $this.attr('data-type');
    var $parnet_grounp = $this.parents('.form-group');

    $upload_form.attr('data-type', _upload_type);
    $upload_tips = $parnet_grounp.find('.upload-tips');
    $upload_pro = $parnet_grounp.find('.upload-pro');

    $upload_tips.empty().hide();
    $upload_pro.hide();
    $upload_pro.find('.progress-bar').css('width', '0%').html('');
    // 触发隐藏上传文件控件
    $file_dom.trigger('click');
  });

  // 上传图标 代码
  $file_dom.fileupload({
        url: '/admin/upload/ico',
        dataType: 'json',
        //autoUpload: false,
        //acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i,
        maxFileSize: 5000000, // 5 MB
        // Enable image resizing, except for Android and Opera,
        // which actually support image resizing, but fail to
        // send Blob objects via XHR requests:
        disableImageResize: /Android(?!.*Chrome)|Opera/
            .test(window.navigator.userAgent),
        previewMaxWidth: 100,
        previewMaxHeight: 100,
        previewCrop: true
    }).on('fileuploadadd', function (e, data) {
        // 显示上传图片的文件名
        $upload_tips.show();
        data.context = $('<div/>').appendTo($upload_tips);
        $.each(data.files, function (index, file) {
            var node = $('<p/>')
                    .append($('<span/>').text(file.name));
            node.appendTo(data.context);
        });
    }).on('fileuploadprocessalways', function (e, data) {

        var index = data.index,
            file = data.files[index],
            node = $(data.context.children()[index]);
        if (file.preview) {
            node
                .prepend('<br>')
                .prepend(file.preview);
        }
        if (file.error) {
            node
                .append('<br>')
                .append($('<span class="text-danger"/>').text(file.error));
        }
        if (index + 1 === data.files.length) {
            data.context.find('button')
                .text('Upload')
                .prop('disabled', !!data.files.error);
        }
    }).on('fileuploadprogressall', function (e, data) {
        // 文件上传完成后， 前端进度条样式改变
        $upload_pro.show();
        var progress = parseInt(data.loaded / data.total * 100, 10);
        $upload_pro.find('.progress-bar').css(
            'width',
            progress + '%'
        );
        $upload_pro.find('.progress-bar').html(progress + '%');
    }).on('fileuploaddone', function (e, data) {
        // 文件上传完成
        $.each(data.result.files, function (index, file) {
            if (file.url) {
                var link = $('<a>')
                    .attr('target', '_blank')
                    .prop('href', file.url);
                $(data.context.children()[index])
                    .wrap(link);
            } else if (file.error) {
                var error = $('<span class="text-danger"/>').text(file.error);
                $(data.context.children()[index])
                    .append('<br>')
                    .append(error);
            }
        });
    }).on('fileuploadfail', function (e, data) {
        $.each(data.files, function (index, file) {
            var error = $('<span class="text-danger"/>').text('File upload failed.');
            $(data.context.children()[index])
                .append('<br>')
                .append(error);
        });
    }).prop('disabled', !$.support.fileInput)
        .parent().addClass($.support.fileInput ? undefined : 'disabled'); 
  
});