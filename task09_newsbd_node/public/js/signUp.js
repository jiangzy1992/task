String.prototype.format = function(args) {
    var result = this;
    if (arguments.length > 0) {
        if (arguments.length == 1 && typeof(args) == "object") {
            for (var key in args) {
                if (args[key] != undefined) {
                    var reg = new RegExp("({" + key + "})", "g");
                    result = result.replace(reg, args[key]);
                }
            }
        } else {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] != undefined) {
                    var reg = new RegExp("({)" + i + "(})", "g");
                    result = result.replace(reg, arguments[i]);
                }
            }
        }
    }
    return result;
}

$(function() {
    $('#btnSub').on('click', function() {
        var
            $username = $('#username'),
            usernameVal = $.trim($username.val()),
            $password = $('#password'),
            passwordVal = $.trim($password.val()),
            $Rpassword = $('#Rpassword'),
            RpasswordVal = $.trim($Rpassword.val()),
            errorTip = '<div id="errorTip" class="alert alert-warning">{0}</div> ';

        $("#errorTip,#alt_sucess,#alt_warning").remove();

        if (usernameVal.length == 0) {
            $("#container").prepend(errorTip.format('用户名不能为空'));
            $username.focus();
            return false;
        }

        if (passwordVal.length == 0) {
            $("#container").prepend(errorTip.format('密码不能为空'));
            $txtUserPwd.focus();
            return false;
        }

        if (RpasswordVal.length == 0) {
            $("#container").prepend(errorTip.format('重复密码不能为空'));
            $Rpassword.focus();
            return false;
        }

        if (passwordVal != RpasswordVal) {
            $("#container").prepend(errorTip.format('两次密码不一致'));
            $Rpassword.focus();
            return false;
        }

        return true;
    })
});
