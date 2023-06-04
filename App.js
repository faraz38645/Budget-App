// document.getElementById("par").innerHTML="HELLO WORLD"; 


// Author:Faraz Gul RollNo[87499]

// i had defined an Object In which there are two properties Budget which is set to null and a Empty Array(Expense)
var budget_Data={
    budget:null,
    expense:[],
    inc:0
}


//function to add the value in Expense list whenever called
function Amount_Spend(value){

        this.value =value;
        budget_Data.expense.push(value);
        // let remain=budget_Data.budget-value;
        // budget_Data.budget=remain
        console.log(budget_Data.budget);
    
}

//function to subtract the value from given budget and return the remaining amount
function Amount_remain(value){
        this.value =value;
        let remain=budget_Data.budget-value;
        budget_Data.budget=remain
        console.log(budget_Data.budget);
        return budget_Data.budget;
}







//function to intialize the budget
function intailize_Budget(){

    let bud =document.getElementById("value").value;
    budget_Data.budget=bud;
    console.log(budget_Data.budget);
    document.getElementById("budget").innerHTML=bud;
    document.getElementById("value").value=null;

}



// function testing(e){
//     e.preventDefault();
//     console.log("WORKING...");

// }



//it is called in Formvalues() function to create Elemen ,their childNodes and assigning (id,class)
function val(date,amount,category,des,pay_date){

    var parent_div =document.getElementById("Expense-List_Sec"); 

    let span1=document.createElement("span");
    let span2= document.createElement("span");
    let cate = document.createTextNode(category);

    let span3 = document.createElement("span");
    let span4 =document.createElement("span");
    let span5 =document.createElement("span");

    span4.setAttribute("class","delete");
    span5.setAttribute("class","edit");

    let del_img = document.createElement("img");
    let edit_img =document.createElement("img");


    del_img.src="./ICONS/delete.png";
    del_img.setAttribute("id","del_image");
    edit_img.src="./ICONS/edit.png";

    span4.appendChild(del_img);
    span5.appendChild(edit_img);


    span3.setAttribute("class","icon");
    
    let img= document.createElement("img");

    switch(category) {
        case "Restrurant":
            img.src="./ICONS/restaurant.png";
          break;
        case "Grocery":
            img.src="./ICONS/groceries.png";
          break;
        case "Shoping":
            img.src="./ICONS/bag.png";
          break;
        
        case "Transport":
            img.src="./ICONS/vehicles.png";
          break;
      }

    //img.src="./ICONS/restaurant.png";
    span3.appendChild(img);
    
    // if(category ==="Restrurant"){
    //     //img.setAttribute("class","icon")
    //     img.src="./ICONS/restaurant.png";
    // }
    // console.log(img);
    // span3.appendChild(img);
    // span3.setAttribute("class","icon");
    //let span3=document.createElement("span");
    //let span2;
    span1.appendChild(document.createTextNode(date));
    span1.setAttribute("class","date");

    span2.appendChild(document.createTextNode("-"+amount+"$"));
    span2.setAttribute("class","total");

    var nodeto = document.createElement("p");

    console.log(amount);
    //var Amount=document.createTextNode("hello world");
//    Amount.setAttribute("class","total");
    //var txt =document.createTextNode(amount);  
    nodeto.appendChild(cate);
    nodeto.appendChild(span1);
    nodeto.appendChild(span2);
    nodeto.appendChild(span3);
    nodeto.appendChild(span4);
    nodeto.appendChild(span5);
   // nodeto.appendChild(document.createTextNode(category.setAttribute("class","test")));
    //nodeto.appendChild(Amount.setAttribute("class","total"));
    //nodeto.classList.add("test");
    nodeto.setAttribute("class","test")
    nodeto.setAttribute("id","test"+budget_Data.inc);
    budget_Data.inc+=1;
    parent_div.appendChild(nodeto);

}


/*--to Get the form data or values by using Amount_spend() function recording expenses in an object property(Expenses[])
After that Creating Element using val function by passing nessacery values of form  
and handling possible error.*/
function Form_values(e,f1="due_date",f2="Amount",f3="select",f4="des",f5="pay_date"){
    e.preventDefault();

    if(budget_Data.budget === null ){
        alert("DEFINE BUDGET");
       
    }
    else if(document.getElementById(f2).value==="" || document.getElementById(f1).value===""){
        alert("Please Enter Amount and Due Date");

    }
    
    else{
        let amount=parseInt(document.getElementById(f2).value);
    
    
        Amount_Spend(amount);
    
        let sum=0;
        for(let i =0 ; i < budget_Data.expense.length ;i++){
            sum+=parseInt(budget_Data.expense[i]);
        }
        console.log(sum);
            
        console.log(budget_Data.expense);
        console.log("SUM",sum, budget_Data.budget);
    
        let remain=Amount_remain(amount);
    
        if(remain < 0  ){
            alert("LIST EXPENSE IN ACCORDANCE TO YOUR BUDGET");
            console.log("checking: ",sum," budget",budget_Data.budget);

            let re_add=budget_Data.expense.pop();
            budget_Data.budget+=re_add;
            console.log(budget_Data.expense);
    
        
        }
        else{
            let due_date=document.getElementById(f1).value;
               
            //let amount=parseInt(document.getElementById(f2).value);
            let category=document.getElementById(f3).value;
            let des=document.getElementById(f4).value;
            let pay_date=document.getElementById(f5).value;
    
            console.log("WORKING.....",due_date,amount,category,des,pay_date,budget_Data.expense);
            document.getElementById("Total").innerHTML=sum;
            //let remain=Amount_remain(amount);
            document.getElementById("Bal").innerHTML=remain;
            val(due_date,amount,category,des,pay_date);
        }
            
            
            
            
        
    }
    


}


var button = document.getElementById("btn_Sub");
button.addEventListener('click',Form_values);



//it will check for newly defined paragraph every 1 second to(delete and edit) the selected paragraph;
var del_btn;
setInterval(function() {

    del_btn= document.getElementsByTagName("img");
    //del_btn.addEventListener('click',Remove);
    //console.log("working",del_btn);
    console.log(del_btn.length);
    for (var i = 0; i < del_btn.length; i++) {
        del_btn[i].addEventListener("click", Remove);
        console.log(budget_Data.expense,"Budget: ",budget_Data.budget);
    }
}, 1000);








//To remove paragraph on clicking the icon which has an id="del_image"  and Recalculating Figures;
function Remove(event){
    // let val = budget_Data.expense.pop();
    let tot_bud=document.getElementById("budget");
    let bal=document.getElementById("Bal");
    let exp=document.getElementById("Total");

    exp=parseInt(exp.textContent);
    tot_bud=parseInt(tot_bud.textContent);
    bal=parseInt(bal.textContent);
    
    let par=event.currentTarget;
    par=par.parentNode.parentNode;
    console.log("answer: ",par.getAttribute("id"));

    let id=par.getAttribute("id");
    console.log("id",id);


    p_btn= document.getElementsByTagName("p");
    console.log(p_btn.length);
    
    let select_value=0;
    for (var i = 0; i < p_btn.length; i++) {

        if(id === p_btn[i].getAttribute("id") ){
            console.log("In if",id," index: ",i);

            if(event.currentTarget.getAttribute("src") === "./ICONS/delete.png"){ //to del the para
                console.log("clicked");
                console.log("Target: ",event.currentTarget.getAttribute("src"));
                var paragraph = event.currentTarget.parentNode.parentNode; 

            //console.log("value at index",i," -->",budget_Data.expense.splice(i, 1));
                select_value=budget_Data.expense.splice(i, 1);

                console.log("value of selected: ",select_value,"using parse",parseInt(select_value));
                budget_Data.budget+= parseInt(select_value);
                document.getElementById("Total").innerHTML=exp-select_value;

                document.getElementById("Bal").innerHTML=(bal + parseInt(select_value));

                paragraph.remove(paragraph.children[i]);
            }
            else if(event.currentTarget.getAttribute("src") === "./ICONS/edit.png"){  //to edit the para
                var paragraph = event.currentTarget.parentNode.parentNode;

                //paragraph.childNodes[2]

                let edit_numb =parseInt(prompt("PLEASE RE-ENTER THE AMOUNT: "));
                budget_Data.expense[i]=edit_numb;

                let sum=0;
                for(let j =0 ; j < budget_Data.expense.length ;j++){
                    sum+=parseInt(budget_Data.expense[j]);
                }
                console.log("value of budget",tot_bud,"  ","value of Sum: ",sum);
                
                document.getElementById("Total").innerHTML=sum;
                paragraph.childNodes[2].innerHTML="-"+edit_numb+"$";

                budget_Data.budget=(tot_bud-sum);

                document.getElementById("Bal").innerHTML=(tot_bud-sum);



            }

        }

    }
}

