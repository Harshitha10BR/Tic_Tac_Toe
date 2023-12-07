let currentSymbol='X'
let game=false
let res=document.getElementById("res")
let winning_boxes=[[1,2,3],[4,5,6],[7,8,9],[1,5,9],[3,5,7],[1,4,7],[2,5,8],[3,6,9]]
function func(i){
let box=document.getElementById(i.toString())
if(box.innerHTML===""){
box.innerHTML=currentSymbol
winning(i)

}
currentSymbol==='X'?currentSymbol='O':currentSymbol='X'

}
function winning(id){ 
for(let i=0;i<=7;i++){
    for(let j=0;j<=2;j++){
        if(winning_boxes[i][j]===id){
            winning_boxes[i][j]=currentSymbol 
            if(game!=true){ 
            result()
            }
        }                       
    }
}
}

function result(){
winning_boxes.map(data=>{
    const allEqual=data=>data.every(v=>v===data[0]
    )
    if(allEqual(data)===true){ 
        game=true
        res.innerHTML=`${data[0]} wins`
    }
})  
}