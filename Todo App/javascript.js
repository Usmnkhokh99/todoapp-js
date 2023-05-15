
let list=[];
function addItems(){
    let inputData=document.getElementById("input-data")
    list.push(inputData.value);
    inputData.value="";
    showlist();
   
}
function showlist(){
    let displayData=document.getElementById("display-data")
    displayData.innerHTML="";
    
    list.forEach(function(e,i){
        displayData.innerHTML += "<li>"+e+"<a onclick='deleteItems("+i+")'>\u00d7</a></li>";
    })
}
function deleteItems(i){
    list.splice(i,1)
    showlist();
}