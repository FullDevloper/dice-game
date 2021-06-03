//Тоглогчийн ээлжийг хадгалах хувьсагч ,нэгдүгээр тоглогчийг A ,хоёрдугаар тоглогчийг Bгэж тэмдэглэе
var activePlayer = 0;
//Тоглогчийн цуглуулсан оноог хадгалах хувьсагч
var score = [0,0];
//Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хуьсагч
var roundScore=0;
//Шооны алт талаараа буусныг хадгалах хувьсагч хэрэгтэй , 1-6 гэсэн утгыг энэ хувьсагчид снамсаргүйгээр үүсгэж өгнө.

// <div class="player-score" id="score-0">43</div>

// HTML Хандах :
//document.querySelector('#score-1').innerHTML="<em> Yes!</em>";

//document.querySelector('.dice')
//console.log("Шоо "+dice);
//Эхлэхэд бэлтгэх:
// <div class="player-score" id="score-0">43</div>
// Query gee iluu hurdan ajilladag
document.getElementById("score-0").textContent="0";
document.getElementById("score-1").textContent="0";

//document.querySelector('#score-0').textContent=0;
//document.querySelector('#score-1').textContent=0;
//Шооны оноо 
//document.querySelector('score-0').textContent=dice;
//document.querySelector('score-1').textContent=dice;
//Шоо зураг хайх <img src="dice-5.png" alt="Dice" class="dice">
var diceDom = document.querySelector(".dice");
diceDom.style.display="none";
//авсан оноо 
//<div class="player-current-score" id="current-0">11</div>
//document.querySelector('#current-0').textContent=0;
document.getElementById("current-0").textContent="0";
document.getElementById("current-1").textContent="0";
//document.querySelector('#current-1').textContent=0;
//Товч хийх шоо шидэх  эвент листенер

document.querySelector(".btn-roll").addEventListener("click",function ()
{
    //1-ээс 6 хүртэл санамсаргүй тоо буулгах
    var diceNumber = Math.floor(Math.random()*6+1);
    //Шоо зураг гаргаж ирнэ
    diceDom.style.display="block";
//Буусан санамсаргүй тоонд харгалзах шооны зургийг харуулна
    diceDom.src="dice-"+diceNumber+".png";
    //Буусан  тоо нэгээс ялгаатай бол  идэвхтэй тоглогчийн оноог  нэмэгдүүлнэ
    if(diceNumber!==1)
    {
        //1 ээс ялгаатай тоо буулаа
        roundScore=roundScore+diceNumber;
        document.getElementById("current-"+activePlayer).textContent=roundScore;
    }
    else
    {
        //Тоглогчийн ээлжийг солих
        if(activePlayer===0)
        {
            activePlayer=1;
        }
        else
        {
            activePlayer=0;
        }
         
    }

    
});

