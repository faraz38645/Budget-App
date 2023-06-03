// document.getElementById("par").innerHTML="HELLO WORLD"; 


// Author:Faraz Gul 

// i had defined an Object In which there are two properties Budget which is set to null and a Empty Array(Expense)
var budget_Data={
    budget:null,
    expense:[]
}


//function to add the value in Expense list whenever called
function Amount_Spend(value){

        this.value =value;
        budget_Data.expense.unshift(value);
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
        if(budget_Data.budget === null ){
            alert("DEFINE BUDGET");
           
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
                console.log("asdsad",sum," budget",budget_Data.budget);
    
                budget_Data.expense.shift();
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
    
    
            // else(budget_Data<sum){
            //     console.log("con2");
            //     alert("Enter Correct Expense Value Should be lower then Budget");
            //     budget_Data.expense.shift;
            // }
            
            
            
        }
    }
    


}
var button = document.getElementById("btn_Sub");
button.addEventListener('click',Form_values);


var del_btn;
setInterval(function() {del_btn= document.getElementById("del_image");
del_btn.addEventListener('click',Remove);}, 1000);


//To remove paragraph on clicking the icon which has an id="del_image";
function Remove(){
    let val = budget_Data.expense.pop();

    let bal=document.getElementById("Bal");
    let exp=document.getElementById("Total");

    exp=parseInt(exp.textContent)

    console.log(bal.textContent);
    bal=parseInt(bal.textContent);

    document.getElementById("Total").innerHTML=exp-val;

    let reAdd=bal+val;
    document.getElementById("Bal").innerHTML=reAdd;
    budget_Data.budget=reAdd;
    console.log("clicking");
    let par=del_btn.parentNode.parentNode;
    par.remove();
}



// function Remove(event) {
//     const parent = document.getElementById("Expense-List_Sec");
//     const p = event.target.parentNode; // Get the parent <p> element of the clicked <span>
//     parent.removeChild(p); // Remove the <p> element from its parent
//   }
  
//   // Add event listener to all elements with class "icon"
//   const icons = document.getElementById("delete");

//   for (let i = 0; i < icons.length; i++) {
//     console.log("working");
//     icons[i].addEventListener("click", Remove);
//   }
