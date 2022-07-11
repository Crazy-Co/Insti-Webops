
function addbox(){
    let yt = document.getElementById('icon5');
    let ytlogo = document.createElement('img');
    ytlogo.id = "icon5";
    ytlogo.className = "icon";
    ytlogo.src = "yt-icon.png";
    yt.replaceWith(ytlogo);
    
    let yt_text = document.querySelectorAll('.anchor');
    console.log(yt_text);
    yt_text[4].innerHTML = "YouTube";
}

function openYT(){
    let ytlink = document.querySelectorAll('.anchor');
    ytlink[4].href = "https://www.youtube.com/";
}

function google(){
    
    
}