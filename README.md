[index.html](https://github.com/user-attachments/files/26865901/index.html)
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
body {background:transparent;color:white;text-align:center;}
.arena{display:flex;justify-content:center;gap:120px;margin-top:80px;}
.player{text-align:center;}
.hp{font-size:24px;}
.name{margin-top:8px;}
</style>
</head>

<body>

<div class="arena">

<div class="player">
    <div id="hp1" class="hp"></div>
    <img src="assets/p1.png" width="120">
    <div id="name1" class="name"></div>
</div>

<div class="player">
    <div id="hp2" class="hp"></div>
    <img src="assets/p2.png" width="120">
    <div id="name2" class="name"></div>
</div>

</div>

<script>
let hp1=5,hp2=5;
let player1="",player2="";
let lastFight="";

function initHP(){
    hp1Div.innerHTML="❤️❤️❤️❤️❤️";
    hp2Div.innerHTML="❤️❤️❤️❤️❤️";
}

function startFight(n1,n2){
    player1=n1;
    player2=n2;

    document.getElementById("name1").innerText=n1;
    document.getElementById("name2").innerText=n2;

    initHP();
}

const hp1Div=document.getElementById("hp1");
const hp2Div=document.getElementById("hp2");

// قراءة الفايت
setInterval(async ()=>{
    try{
        let res=await fetch("fight.txt?"+Date.now());
        let t=(await res.text()).trim();

        if(t && t!==lastFight){
            lastFight=t;
            let p=t.split(",");
            startFight(p[0],p[1]);
        }
    }catch{}
},1000);
</script>

</body>
</html>
