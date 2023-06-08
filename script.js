const n = 10;
const arr=[];
init();
function init(){
    for(let i=0;i<n;i++){
        arr[i]=Math.random()*100;
    }
    showBars();
}
function play(array){
    bubbleSort(array);
    showBars();
}
function bubbleSort(array){
while(1){
    var x = false;
    for(let i = 1;i<n;i++){
        if(arr[i]<arr[i-1]){
            x = true;
            var temp = arr[i];
            arr[i]=arr[i-1];
            arr[i-1]=temp;
        }
    }
    if(x==false){
        break;
    }
}
}
function showBars(){
    container.innerHTML="";
for(let i = 0;i<n;i++){
    const bar=document.createElement("div");
    bar.style.height = arr[i]+"%";
    bar.classList.add("bar");
    container.appendChild(bar);
}
}