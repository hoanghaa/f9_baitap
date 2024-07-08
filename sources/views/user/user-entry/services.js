import axios from "axios";
import swal from "sweetalert";

class services {
     listUser =[];
     listRole = [];
     userInRow;

   loadInit= async ()=>{
        await this.getListUser();
        await this.getListRole();
   };
 
 getListRole = async () => {
     let {data: response} = await axios.get("http://localhost:1111/role-api/getAllRole");
     this.listRole = response.data;
     console.log(this.listRole);
     this.loadDataRoleCombobox();
 };
 
 loadDataListUser = () => {
    $$("dataTableListUser").clearAll();
    $$("dataTableListUser").parse(this.listUser);
 };
 
 loadDataRoleCombobox = () => {
     let options = this.listRole.map(role => (
      { 
        "id" : role.roleId,
        "value" : role.roleName
      }
    ));
    console.log(options);
    $$("Role").define("options",options);
    $$("Role").refresh();
 };

   fillInfomation=(userDetail)=>{
     $$("UserId").setValue(userDetail.userId);
     $$("FullName").setValue(userDetail.userName);
     $$("Age").setValue(userDetail.age);
     $$("Address").setValue(userDetail.address);
     $$("Email").setValue(userDetail.email);
     $$("Role").setValue(userDetail.role.roleId);
   }

   getListUser= async() => {
     let {data:response} = await axios.get("http://localhost:1111/user-api/getAllUser");
     this.listUser=response.data;
     this.listUser.map(e=>{
          e.roleName=e.role.roleName;
     });
     console.log(this.listUser);
     this.loadDataListUser();
   }

   

   btnSave_click= async ()=>{
     let userDetail={
          userId: $$("UserId").getValue(),
          fullName: $$("FullName").getValue(),
          age: $$("Age").getValue(),
          address: $$("Address").getValue(),
          email: $$("Email").getValue(),
          password:  $$("Password").getValue(),
          role: $$("Role").getValue()
     }
     console.log(userDetail);
     let {data:response} = await axios.post("http://localhost:1111/user-api/postSaveUser",userDetail);
     if (response.success) {
          swal("Success!", response.message, "success");
     }else{
          swal("Fail!", response.message, "error");
     }
     this.getListUser();
   }

   btnClear_click= async ()=>{
     $$("UserId").setValue(0);
     $$("FullName").setValue('');
     $$("Age").setValue('');
     $$("Address").setValue('');
     $$("Email").setValue('');
     $$("Role").setValue(null);
   }
}
export default new services();