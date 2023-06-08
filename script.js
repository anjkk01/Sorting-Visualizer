const n = 10;
const arr=[];
init();
function init(){
    for(let i=0;i<n;i++){
        arr[i]=Math.random()*100;
    }
    showBars();
}
function play(){
    const temp =  [...arr];
    const swaps = bubbleSort(temp);
    // showBars();
    animate(swaps);
}
function animate(swaps){
    if(swaps.length==0){
        return;
    }

    const [i,j]=swaps.shift();
    [arr[i],arr[j]]=[arr[j],arr[i]];
    showBars();
    setTimeout(function(){
        animate(swaps);
    },50);

}
function bubbleSort(array){
const swaps=[];
while(1){
    var x = false;
    for(let i = 1;i<n;i++){
        if(array[i]<array[i-1]){
            x = true;
            swaps.push([i-1,i]);
            [array[i-1],array[i]]=[array[i],array[i-1]];
        }
    }
    if(x==false)break;
}
return swaps;
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
