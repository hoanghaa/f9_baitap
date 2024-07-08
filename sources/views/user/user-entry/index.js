import { JetView } from "webix-jet";
import services from "./services";

const chart = () => ({
    view: "chart",
    type: "area",
    xAxis: {
        template: "'#year#"
    },
    yAxis: {
        start: 0,
        step: 10,
        end: 100
    },
    legend: {
        values: [{ text: "Type A", color: "#58dccd" }, { text: "Type B", color: "#914ad8" }, { text: "Type C", color: "#36abee" }],
        valign: "middle",
        align: "right",
        width: 90,
        layout: "y"
    },
    eventRadius: 5,
    series: [
        {
            alpha: 0.7,
            value: "#sales#",
            color: "#58dccd",
            tooltip: {
                template: "type: A<br/>value: #sales#"
            }
        },
        {
            alpha: 0.5,
            value: "#sales2#",
            color: "#914ad8",
            tooltip: {
                template: "type: B<br/>value: #sales2#"
            }
        },
        {
            alpha: 0.5,
            value: "#sales3#",
            color: "#36abee",
            tooltip: {
                template: "type: C<br/>value: #sales3#"
            }
        }
    ],
    data: [
        { sales: "20", sales2: "35", sales3: "55", year: "02" },
        { sales: "40", sales2: "24", sales3: "40", year: "03" },
        { sales: "44", sales2: "20", sales3: "27", year: "04" },
        { sales: "23", sales2: "50", sales3: "43", year: "05" },
        { sales: "21", sales2: "36", sales3: "31", year: "06" },
        { sales: "50", sales2: "40", sales3: "56", year: "07" },
        { sales: "30", sales2: "65", sales3: "75", year: "08" },
        { sales: "90", sales2: "62", sales3: "55", year: "09" },
        { sales: "55", sales2: "40", sales3: "60", year: "10" },
        { sales: "72", sales2: "45", sales3: "54", year: "11" }
    ]
})

const formDetailUser = ()=>({
    view:"form",
    elements:[
        { 
            view:"fieldset", label:"User Information", body:{
            rows:[
                { view:"text", 
                    id:"UserId",
                    label:"UserId",
                    name:"UserId",
                    readonly:true,
                    css:{
                        background:'gray'
                    }
                },
                  { view:"text", 
                    id:"FullName",
                    label:"FullName",
                    name:"FullName",
                
                },
                  { view:"text", 
                    id:"Age",
                    label:"Age",
                    name:"Age",
                },
                { view:"text",
                    id:"Address", 
                    label:"Address",
                    name:"Address"
                }
            ]
          }},
          { 
            view:"fieldset", label:"User Account", body:{
            rows:[
                  { view:"text",
                    id:"Email", 
                    label:"Email",
                    name:"Email"
                },
                { view:"text", 
                  id:"Password",
                  label:"Password",
                  name:"Password"
                },
                { 
                    view:"combo", width:300,
                    id:"Role",
                    name:"Role",
                    label: 'Role'
                }
            ]
          }},
        {
         cols:[
            { 
                view:"button", 
                label:"Save" , 
                type:"form",
                click:services.btnSave_click
            },
            { 
                view:"button"
                ,label:"Cancel" ,
                click:services.btnClear_click
            }
        ]}
  ]

})

const dataTableListUser = () => ({
	view: "datatable",
    id:"dataTableListUser",
    name:"dataTableListUser",
	leftSplit: 0,
	rightSplit: 0,
	columns: [
        {
			id: "userId",
			header: "UserId",
			css: "rank",
			hidden : true 
		},
		{
			id: "userName",
			header: "Full Name",
			css: "rank",
			fillspace: 1
		},
		{
			id: "age",
			header: "Age",
			fillspace: 0.5 
		},

		{
			id: "address",
			header: "Address",
			fillspace: 1
		},
		{
			id: "email",
			header: "Email",
			fillspace: 1
		},
		{
			id: "roleName",
			header: "Role",
			fillspace: 0.5
		}
	],
	select: "row",
	hover: "myhover",
	navigation: true,
    on:{
        onItemClick : function(e){
            var detail=this.getItem(e.row);
            services.isNewUser=true;
            services.fillInfomation(detail);
            services.userInRow=detail.userId;
           
        }
    }
});

const formLeft = () => ({
    view: "form",
    id: "formLeft",
    name: "formLeft",
    rows: [
        dataTableListUser()
    ]
});
const formRight = () => ({
    view: "form",
    id: "formRight",
    name: "formRight",
    rows: [
        formDetailUser()
    ]
});

export default class loginFormView extends JetView {
    config() {
        return {
            view: "form",
            id: "formPage",
            name: "formPage",
            cols: [
                formLeft(),
                formRight()
            ]
        };
    }

    init() {
        services.loadInit();
    }
    ready() { }
}