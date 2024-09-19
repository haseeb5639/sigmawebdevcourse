console.log("Let's write JS");

async function getSongs(){
    let a = await fetch("http://127.0.0.1:3000/Lecture%2084/songs/")
    let response = await a.text();
    console.log(response);
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")
    let songs = [];
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if(element.href.endsWith(".mp3")){
            songs.push(element.href);
        }
        
    }
    return songs
    
}

async function main() {
    // get the list of all the songs
    let songs = await getSongs();
    console.log(songs);

    // Play the first song
    var audio = new Audio(songs[0]);
    audio.play();
}

async function playSelectedSongs(songIndex) {
    let songs = await getSongs();
    var audio = new Audio(songs[songindex]);
    audio.play();

}

function playNextSong() {

}

function playPrevSong() {

}

function playPause(isPlay) {
    
}







// main();
playSelectedSongs(3);


