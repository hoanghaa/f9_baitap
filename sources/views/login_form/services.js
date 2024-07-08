import swal from 'sweetalert'
class services {

    account = { userName: "hoangha@gmail.com", passWord: "ha06102004" };

    checkLogin = () =>{
        let inValUserName = $$("UserName").getValue();
        let inValUserPassWord = $$("Password").getValue();
        if(inValUserName == '' || inValUserName == undefined){
            $$("UserName").focus();
            return false;
        } else if(inValUserPassWord == '' || inValUserPassWord == undefined) {
            $$("Password").focus();
            return false;
        } else if(inValUserName == this.account.userName && 
                  inValUserPassWord == this.account.passWord){
            return true;
        }
    };

    btnLogin_click = () => {
        if(this.checkLogin()){
                window.location.assign("/#!/top/start");
                swal("Success!", "Login Success!", "success", {buttons: false ,timer: 1500});
        } else {
            swal("Fail!", "Login Fail!", "error", {buttons: false ,timer: 2000});
            $$("UserName").focus();
        }
    }

    resetAuthor = () =>{
        $$("UserName").setValue("");
        $$("Password").setValue("");
    }
}
export default new services();