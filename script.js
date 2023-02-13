// navbar
const menu = document.querySelector(".menu")
const navbar= document.querySelector(".navbar")

menu.addEventListener('click', () => {
    navbar.classList.toggle('change')
    menu.classList.toggle('change')
})


// end of navbar

// section 2 video
const video = document.querySelector('.video')
const btn = document.querySelector('.buttons i')
const bar = document.querySelector(".video-bar")

const playPause = () => {
    if(video.paused){
        video.play()
        btn.className = 'far fa-pause-circle'
    }else{
        video.pause()
        btn.className = 'far fa-play-circle'
    }
    
}

btn.addEventListener('click', () => {
    playPause()
})
// end of section 2 video
