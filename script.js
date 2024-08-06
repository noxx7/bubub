//toggle hearts

function toggleHeart(heart) {
    heart.classList.toggle('hidden');
}

function getRandomInterval() {
    return Math.floor(Math.random() * 2500) + 300;
}

function randomToggleHeart(heart) {
    toggleHeart(heart);
    setTimeout(() => randomToggleHeart(heart), getRandomInterval());
}

function randomToggleHearts() {
    const hearts = document.querySelectorAll('#hearts .fa-heart');
    hearts.forEach(heart => {
        randomToggleHeart(heart);
    });
}

//page transition 

function handlePageTransition(fromPage, toPage, transitionDelay = 500) {
    
    fromPage.forEach(selector => {
        selector.classList.toggle('hide-page-transition');

        setTimeout(() => {
            selector.classList.add('hide-page');
        }, transitionDelay);
    });

    toPage.forEach(selector => {
        selector.classList.toggle('show-page-transition');

        setTimeout(() => {
            selector.classList.remove('hide-page');
        }, transitionDelay);

        setTimeout(() => {
            selector.classList.add('show-page');
        },transitionDelay);
    });
}

function handleNotePageTransition(fromPage, toPage, transitionDelay = 500) {
    
    fromPage.forEach(selector => {
        selector.classList.toggle('hide-page-transition');

        setTimeout(() => {
            selector.classList.add('hide-page');
        }, transitionDelay);
    });

    toPage.forEach(selector => {
        selector.classList.toggle('show-page-transition');

        setTimeout(() => {
            selector.classList.remove('hide-page');
        }, transitionDelay);

        setTimeout(() => {
            selector.classList.add('show-note-page');
        },transitionDelay);
    });

    let delay = 700;

    const gifTx = document.querySelectorAll('.gif-container2');
    const textElements = document.querySelectorAll('.hidden-text');
    
    gifTx.forEach(gif => {
        console.log('adding gif trans');
        setTimeout(() => {
            gif.classList.add('visible');
        }, delay + 190);
    })

    textElements.forEach(textElements => {
        setTimeout(() => {
            textElements.classList.add('visible-text');
        }, delay);

        delay += 700;
    });
}

function handleSongTransition(fromPage, toPage, transitionDelay = 500) {
    
    fromPage.forEach(selector => {
        selector.classList.toggle('hide-page-transition');

        setTimeout(() => {
            selector.classList.add('hide-page');
        }, transitionDelay);
    });

    toPage.forEach(selector => {
        selector.classList.toggle('show-page-transition');

        setTimeout(() => {
            selector.classList.remove('hide-page');
        }, transitionDelay);

        setTimeout(() => {
            selector.classList.add('show-page');
        },transitionDelay);
    });
}

function pageTransition() {

    const firstPage = document.querySelectorAll('.greet, .gif , .p1 , .container-btn');
    const secondPage = document.querySelectorAll('.second-page, .container-second-page-header, .second-page-header-text, .second-page-body-p, .second-page-p, .second-page-gif, .second-gif-goma, .second-gif-peach');
    const lowerPagebtn = document.querySelectorAll('.container-lower, .container-lower-btn, .note-btn');
    const btn = document.getElementById('click-me');

    const secondPageArray = Array.from(secondPage);

    if(!secondPageArray.every(selector => selector.classList.contains('hide-page'))) {
        btn.addEventListener('click', () => {

            console.log('clicked');

            handlePageTransition(firstPage, secondPage);

            let delay = 700;

            const gifTx = document.querySelectorAll('.gif-container');
            const element = document.querySelectorAll('.em-tx');
        
            gifTx.forEach(gif => {
        
                setTimeout(() => {
                    gif.classList.add('visible');
                }, delay + 200);
            })
        
            element.forEach(element => {
                setTimeout(() => {
                    element.classList.add('em-tx-visible');
                }, delay + 200);
            });

            lowerPagebtn.forEach(selector3 => {
                selector3.classList.add('show-page-transition');

                setTimeout(() => {
                    selector3.classList.remove('hide-page');
                },500);

                setTimeout(() => {
                    selector3.classList.add('show-btn');
                },500);
            })
            
        });
    }

}

function notePageTransition() {
    
    const noteBtn = document.getElementById('note-btn');
    const musicBtn = document.getElementById('song-btn');
    const secondPage = document.querySelectorAll('.second-page, .container-second-page-header, .second-page-header-text, .second-page-body-p, .second-page-gif, .second-gif-goma, .second-gif-peach');
    const notePage = document.querySelectorAll('.lower-btn-page, .note, .note-btn-body, .note-p, .note-btn-gif, .note-gif');
    
    const notePageArray = Array.from(notePage);

    if(!notePageArray.every(selector => selector.classList.contains('hide-page'))) {
    
        console.log(`class containts element`);
        noteBtn.addEventListener('click', () => {

            console.log('transition to ntoe page');

            handleNotePageTransition(secondPage, notePage);

            //hide note button
            noteBtn.classList.add('hide-page-transition');

            setTimeout(() => {
                noteBtn.classList.add('hide-page')
            }, 700);
            

            //show music button
            musicBtn.classList.add('show-page-transition');

            setTimeout(() => {
                musicBtn.classList.remove('hide-page');
            },700);

            setTimeout(() => {
                musicBtn.classList.add('show-btn');
            },700);
            

        });
    }
}

function songTransition() {

    const songBtn = document.getElementById('song-btn');
    const notePage = document.querySelectorAll('.note, .note-btn-body, .note-p, .note-btn-gif, .note-gif');
    const songPage = document.querySelectorAll('.song-page, .song-header, .song-body, .cassette, .song-footer');

    const songPageArray = Array.from(songPage);

    if(!songPageArray.every(selector => selector.classList.contains('hide-page'))) {
        console.log('page containts hide page')
        songBtn.addEventListener('click', () => {

            handleSongTransition(notePage, songPage);

            //hide music button
            songBtn.classList.add('hide-page-transition');

            setTimeout(() => {
                console.log('hiding song button');
                songBtn.classList.add('hide-page');
            }, 500);

            let delay = 500;

            const songEl = document.querySelectorAll('.song-header-text, .song-gif, .footer-text');

            songEl.forEach(element => {
                setTimeout(() => {
                    element.classList.add('song-el-visible');
                }, delay);
            });
        });
    }
}

function wishTransition() {
    
    const wishBtn = document.getElementById('wish-btn');
    const songPage = document.querySelectorAll('.song, .song-header, .song-body, .song-gif, .song-footer,.music-btn');
    const imageLink = document.getElementById('clickable-img');
    const wishPage = document.querySelectorAll('.wish-page, .wish-text');

    const wishPageArray = Array.from(wishPage);

    if(!wishPageArray.every(selector => selector.classList.contains('hide-page'))) {

        console.log('wish page contains hide page');
        if(imageLink) {
            imageLink.addEventListener('click', () => {
                console.log('image clicked');

                handlePageTransition(songPage, wishPage);
            })
        }
    }
}

function transition() {
    pageTransition();
    notePageTransition();
    songTransition();
    wishTransition();
}

function handle () {
    handlePageTransition();
    handleNotePageTransition();
    handleSongTransition();
}

window.onload = () => {
    transition();
    handle();
}

randomToggleHearts();


