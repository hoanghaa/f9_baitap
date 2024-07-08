import axios from "axios";

class services {
    listRole = [];

    loadInit= async ()=>{
        await this.getListRole();
   };

    getListRole = async () => {
        let{data : response} = await axios.get("http://localhost:1111/role-api/getAllRole");
        this.listRole = response.data;
        this.loadAllRole();
    }

    loadAllRole = () =>{
        console.log(this.listRole);
        $$("dataTable_Role").clearAll();
        $$("dataTable_Role").parse(this.listRole);
    }

    fillDataToForm = async (roleInRow) => {
        $$("role_id").setValue(roleInRow.roleId);
        $$("role_name").setValue(roleInRow.roleName);
        $$("description").setValue(roleInRow.description);
    }

    btnSave_click= async () =>{
        let roleDetai = {
            roleId : $$("role_id").getValue(),
            roleName : $$("role_name").getValue(),
            description : $$("description").getValue(),
            color : $$("color").getValue(),
        }
        console.log(roleDetai);
        let{data : response} = await axios.post("http://localhost:1111/role-api/postSaveRole",roleDetai);

        if (response.success) {
            swal("Success!", response.message, "success");
       }else{
            swal("Fail!", response.message, "error");
       }
       this.getListRole();
    }

    getRoleById = async (role_id) => {
    }

    setDataRoleIntoForm = (RoleData) => {
    }

    
    
    btnClearForm_click = () =>{
        $$("role_id").setValue("");
        $$("role_name").setValue("");
        $$("description").setValue("");
    }

    getDataForChartAnalysisTheNumberOfUserByRole = async () =>{
        
    };
    getDataForChartAnalysisTheNumberOfUserByIsUse = async () =>{
        
    }      
    


}
export default new services();