
document.getElementById("adatok").addEventListener("submit",function(event){
    event.preventDefault();
    const height=parseFloat(document.getElementById("height").value);
    const age=parseFloat(document.getElementById("age").value);
    const weigh=parseFloat(document.getElementById("weight").value);
    const genderbutton=document.querySelector('input[name="gender"]:checked');
    const displayvalue=document.getElementById("displaybmi");
    const sum=weigh/(height*height/10000)
    const sum2=Math.ceil(sum*10)/10
    displayvalue.textContent=`Your BMI is: ${sum2}kg/m²`;
  
});
document.getElementById("clear").addEventListener("click",function(event){
    document.getElementById("height").value = "";
    document.getElementById("age").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("displaybmi").textContent = "";

});