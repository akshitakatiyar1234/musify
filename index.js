let audio=new Audio('mp1.mp3');
var index=0;
let masterplay=document.getElementById('masterplay');
let bar=document.getElementById('mybar');
let songs=[
    {
        songname:"let me love you",
        address:"mp1.mp3"
    },
    {
        songname:"Piya tose",
        address:"mp2.mp3"
    },
    {
        songname:"Bade acche lagte hein",
        address:"mp3.mp3"
    },
    {
        songname:"Tere hawale",
        address:"mp4.mp3"
    },
    
];
masterplay.addEventListener('click',()=>{
    if(audio.paused || audio.currentTime<=0)
     {
        audio.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        document.querySelector('.bottom img').style.opacity=1;
     }
    
     else{
        audio.pause();
        masterplay.classList.add('fa-circle-play');
        masterplay.classList.remove('fa-circle-pause');
        document.querySelector('.bottom img').style.opacity=0;
     }
}
);

audio.addEventListener('timeupdate',()=>{
let progress=parseInt((audio.currentTime/audio.duration)*100);
bar.value=progress;
if(audio.currentTime>=audio.duration)
{
    audio.pause();
        masterplay.classList.add('fa-circle-play');
        masterplay.classList.remove('fa-circle-pause');
        document.querySelector('.bottom img').style.opacity=0;
}
});


bar.addEventListener('change',()=>
{
  audio.currentTime= bar.value*audio.duration/100;
  
});



const makeAllPlay =()=>{
    Array.from(document.getElementsByClassName('playitem')).forEach((element)=>
    {
        element.classList.add('fa-circle-play');
        element.classList.remove('fa-circle-pause');
    })
}
Array.from(document.getElementsByClassName('playitem')).forEach((element)=>
{
    element.addEventListener('click',(e)=>{
        
        if(audio.paused || audio.currentTime<=0)
        {
            makeAllPlay();
      e.target.classList.remove('fa-circle-play');
      e.target.classList.add('fa-circle-pause');
      
      index=e.target.id;
      audio.src= songs[index].address;
      audio.currentTime=0;
      audio.play();
      masterplay.classList.remove('fa-circle-play');
      masterplay.classList.add('fa-circle-pause');
      document.getElementById('songnameinfo').innerText=songs[index].songname;
      document.querySelector('.bottom img').style.opacity=1;
        }
        else{
            audio.pause();
            e.target.classList.remove('fa-circle-pause');
      e.target.classList.add('fa-circle-play');
      masterplay.classList.add('fa-circle-play');
      masterplay.classList.remove('fa-circle-pause');
      document.querySelector('.bottom img').style.opacity=0;
        }
      
    })


}
)
document.getElementById('prev').addEventListener('click',()=>
{
    if(index<0)
    {
        index=0;
    }
    else
    {
        index-=1;
    }
    audio.src= songs[index].address;
    document.getElementById('songnameinfo').innerText=songs[index].songname;
    audio.play();
    masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        document.querySelector('.bottom img').style.opacity=1;
    
});

document.getElementById('nexts').addEventListener('click',()=>
{
    if(index>3)
    {
        index=0;
    }
    else
    {
        index+=1;
    }
    audio.src= songs[index].address;
    document.getElementById('songnameinfo').innerText=songs[index].songname;
    audio.play();
    masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        document.querySelector('.bottom img').style.opacity=1;
});

