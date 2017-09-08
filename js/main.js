//do not allow wheelscroll
window.onwheel = function(){ return false; }

/* ---------- LOADER ---------- */
loader();

function loader(_success) {
    var obj = document.querySelector('.preloader'),
    vid = document.getElementById('introVideo'),
    inner = document.querySelector('.preloader_inner'),
    page = document.querySelector('.preloader_page');
    obj.classList.add('preloader_show');
    page.classList.remove('preloader_show');
    var w = 0,
        t = setInterval(function() {
            w = w + 1;
            inner.textContent = w+'%';
            if (w === 100){
                obj.classList.remove('preloader_show');
                vid.play();
                page.classList.add('preloader_show');
                clearInterval(t);
                w = 0;
                if (_success){
                    return _success();
                    
                }
            }
        }, 20);
}
/* ---------- END OF LOADER ---------- */


/* ---------- INTRO VIDEO ---------- */
function previous() {
  let previousBtn = document.getElementById('previousBtn');
  //go to next section on click
  previousBtn.click();
}

function next() {
  let nextBtn = document.getElementById('nextBtn');
  let vid = document.getElementById('introVideo');  
  //go to next section on click + pause video 
  nextBtn.click();
  vid.pause();
  }

document.getElementById('introVideo').addEventListener('ended',function(){
  let nextBtn = document.getElementById('nextBtn');
  //go to next section on click
  nextBtn.click();
  }, false);
/* ---------- END OF INTRO VIDEO ---------- */


/* ---------- DRAG AND DROP ---------- */
interact('.draggable')
  .draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    restrict: {
      restriction: "parent",
      endOnly: true,
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    },
    // disable autoScroll
    autoScroll: false,

    // call this function on every dragmove event
    onmove: dragMoveListener,
  });

  function dragMoveListener (event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }

  // this is used later in the resizing and gesture demos
  window.dragMoveListener = dragMoveListener;

// enable draggables to be dropped into this
interact('.dropzone').dropzone({
  // only accept elements matching this CSS selector
  accept: '#yes-drop',
  overlap: 0.2,

  // listen for drop related events:

  ondropactivate: function (event) {
    // add active dropzone feedback
    event.target.classList.add('drop-active');
  },
  ondragenter: function (event) {
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target;

    // feedback the possibility of a drop
    dropzoneElement.classList.add('drop-target');
    draggableElement.classList.add('can-drop');
  },
  ondragleave: function (event) {
    // remove the drop feedback style
    event.target.classList.remove('drop-target');
    event.relatedTarget.classList.remove('can-drop');
  },
  ondrop: function (event) {
    let nextBtn = document.getElementById('nextBtn');
    let vid = document.getElementById('secondVideo');
    
    nextBtn.click();
    vid.play(); 
  },
  ondropdeactivate: function (event) {
    // remove active dropzone feedback
    event.target.classList.remove('drop-active');
    event.target.classList.remove('drop-target');
  }
});

/* ---------- END DRAG AND DROP ---------- */

/* ---------- SECOND VIDEO ---------- */
function next2() {
  let nextBtn = document.getElementById('nextBtn');
  let video = document.getElementById('secondVideo');
  //go to next section on click + pause video 
  nextBtn.click();
  video.pause();
  }

document.getElementById('secondVideo').addEventListener('ended',function(){
  let nextBtn = document.getElementById('nextBtn');
  //go to next section on click
  nextBtn.click();
  }, false);

/* ---------- END OF SECOND VIDEO ---------- */

/* -------- AUDIO SECTION ---------- */

//Change play/pause button
function playAudio() {
  var ballad = document.getElementById('ballad');
  var balButton = document.getElementById('balButton');
  
  balButton.addEventListener('click', function(event) {
    
    event.preventDefault();
    
    if (ballad.paused) {
		ballad.play();
		balButton.className = "";
		balButton.className = "pause";
	} else {
		ballad.pause();
        ballad.currentTime = 0;
		balButton.className = "";
		balButton.className = "play";
	}
  });

  var balGramo = document.getElementById('balGramo');
  var balGramoButton = document.getElementById('balGramoButton');
  
  balGramoButton.addEventListener('click', function(event) {
    
    event.preventDefault();
    
    if (balGramo.paused) {
		balGramo.play();
		balGramoButton.className = "";
		balGramoButton.className = "pausesm";
	} else {
		balGramo.pause();
        balGramo.currentTime = 0;
		balGramoButton.className = "";
		balGramoButton.className = "playsm";
	}
  });
  
  var typewriter = document.getElementById('typewriter');
  var balTypeButton = document.getElementById('balTypeButton');
  
  balTypeButton.addEventListener('click', function(event) {
    
    event.preventDefault();
    
    if (typewriter.paused) {
		typewriter.play();
		balTypeButton.className = "";
		balTypeButton.className = "pausesm";
	} else {
		typewriter.pause();
        typewriter.currentTime = 0;
		balTypeButton.className = "";
		balTypeButton.className = "playsm";
	}
  });
  
  var balChatter = document.getElementById('balChatter');
  var balChatterButton = document.getElementById('balChatterButton');
  
  balChatterButton.addEventListener('click', function(event) {
    
    event.preventDefault();
    
    if (balChatter.paused) {
		balChatter.play();
		balChatterButton.className = "";
		balChatterButton.className = "pausesm";
	} else {
		balChatter.pause();
        balChatter.currentTime = 0;
		balChatterButton.className = "";
		balChatterButton.className = "playsm";
	}
  });
  
  var cabaret = document.getElementById('cabaret');
  var cabButton = document.getElementById('cabButton');
  
  cabButton.addEventListener('click', function(event) {
    
    event.preventDefault();
    
    if (cabaret.paused) {
		cabaret.play();
		cabButton.className = "";
		cabButton.className = "pause";
	} else {
		cabaret.pause();
        cabaret.currentTime = 0;
		cabButton.className = "";
		cabButton.className = "play";
	}
  });
  
  var cabCheering = document.getElementById('cabCheering');
  var cabCheeringButton = document.getElementById('cabCheeringButton');
  
  cabCheeringButton.addEventListener('click', function(event) {
    
    event.preventDefault();
    
    if (cabCheering.paused) {
		cabCheering.play();
		cabCheeringButton.className = "";
		cabCheeringButton.className = "pausesm";
	} else {
		cabCheering.pause();
        cabCheering.currentTime = 0;
		cabCheeringButton.className = "";
		cabCheeringButton.className = "playsm";
	}
  });
  
  var cabDancing = document.getElementById('cabDancing');
  var cabDancingButton = document.getElementById('cabDancingButton');
  
  cabDancingButton.addEventListener('click', function(event) {
    
    event.preventDefault();
    
    if (cabDancing.paused) {
		cabDancing.play();
		cabDancingButton.className = "";
		cabDancingButton.className = "pausesm";
	} else {
		cabDancing.pause();
        cabDancing.currentTime = 0;
		cabDancingButton.className = "";
		cabDancingButton.className = "playsm";
	}
  });
  
  var cabChatter = document.getElementById('cabChatter');
  var cabChatterButton = document.getElementById('cabChatterButton');
  
  cabChatterButton.addEventListener('click', function(event) {
    
    event.preventDefault();
    
    if (cabChatter.paused) {
		cabChatter.play();
		cabChatterButton.className = "";
		cabChatterButton.className = "pausesm";
	} else {
		cabChatter.pause();
        cabChatter.currentTime = 0;
		cabChatterButton.className = "";
		cabChatterButton.className = "playsm";
	}
  });
  
  var rehearsals = document.getElementById('rehearsals');
  var rehearButton = document.getElementById('rehearButton');
  
  rehearButton.addEventListener('click', function(event) {
    
    event.preventDefault();
    
    if (rehearsals.paused) {
		rehearsals.play();
		rehearButton.className = "";
		rehearButton.className = "pause";
	} else {
		rehearsals.pause();
        rehearsals.currentTime = 0;
		rehearButton.className = "";
		rehearButton.className = "play";
	}
  });
  
  var rehearBeat = document.getElementById('rehearBeat');
  var rehearBeatButton = document.getElementById('rehearBeatButton');
  
  rehearBeatButton.addEventListener('click', function(event) {
    
    event.preventDefault();
    
    if (rehearBeat.paused) {
		rehearBeat.play();
		rehearBeatButton.className = "";
		rehearBeatButton.className = "pausesm";
	} else {
		rehearBeat.pause();
        rehearBeat.currentTime = 0;
		rehearBeatButton.className = "";
		rehearBeatButton.className = "playsm";
	}
  });
  
  var rehearClap = document.getElementById('rehearClap');
  var rehearClapButton = document.getElementById('rehearClapButton');
  
  rehearClapButton.addEventListener('click', function(event) {
    
    event.preventDefault();
    
    if (rehearClap.paused) {
		rehearClap.play();
		rehearClapButton.className = "";
		rehearClapButton.className = "pausesm";
	} else {
		rehearClap.pause();
        rehearClap.currentTime = 0;
		rehearClapButton.className = "";
		rehearClapButton.className = "playsm";
	}
  });
  
  var rehearDancing = document.getElementById('rehearDancing');
  var rehearDancingButton = document.getElementById('rehearDancingButton');
  
  rehearDancingButton.addEventListener('click', function(event) {
    
    event.preventDefault();
    
    if (rehearDancing.paused) {
		rehearDancing.play();
		rehearDancingButton.className = "";
		rehearDancingButton.className = "pausesm";
	} else {
		rehearDancing.pause();
        rehearDancing.currentTime = 0;
		rehearDancingButton.className = "";
		rehearDancingButton.className = "playsm";
	}
  });
  
  var tango = document.getElementById('tango');
  var tangoButton = document.getElementById('tangoButton');
  
  tangoButton.addEventListener('click', function(event) {
    
    event.preventDefault();
    
    if (tango.paused) {
		tango.play();
		tangoButton.className = "";
		tangoButton.className = "pause";
	} else {
		tango.pause();
        tango.currentTime = 0;
		tangoButton.className = "";
		tangoButton.className = "play";
	}
  });
 
  var instrumental = document.getElementById('instrumental');
  var instrumentalButton = document.getElementById('instrumentalButton');
  
  instrumentalButton.addEventListener('click', function(event) {
    
    event.preventDefault();
    
    if (instrumental.paused) {
		instrumental.play();
		instrumentalButton.className = "";
		instrumentalButton.className = "pausesm";
	} else {
		instrumental.pause();
        instrumental.currentTime = 0;
		instrumentalButton.className = "";
		instrumentalButton.className = "playsm";
	}
  });

//  THIS HAS BEEN REMOVED DUE TO NOT GIVING VALUE TO THE PLAYER
//  var instruDancing = document.getElementById('instruDancing');
//  var instruDancingButton = document.getElementById('instruDancingButton');
//  
//  instruDancingButton.addEventListener('click', function(event) {
//    
//    event.preventDefault();
//    
//    if (instruDancing.paused) {
//		instruDancing.play();
//		instruDancingButton.className = "";
//		instruDancingButton.className = "pausesm";
//	} else {
//		instruDancing.pause();
//        instruDancing.currentTime = 0;
//		instruDancingButton.className = "";
//		instruDancingButton.className = "playsm";
//	}
//  });  
//  
//  var instruCheering = document.getElementById('instruCheering');
//  var instruCheeringButton = document.getElementById('instruCheeringButton');
//  
//  instruCheeringButton.addEventListener('click', function(event) {
//    
//    event.preventDefault();
//    
//    if (instruCheering.paused) {
//		instruCheering.play();
//		instruCheeringButton.className = "";
//		instruCheeringButton.className = "pausesm";
//	} else {
//		instruCheering.pause();
//        instruCheering.currentTime = 0;
//		instruCheeringButton.className = "";
//		instruCheeringButton.className = "playsm";
//	}
//  });  
  
}


//Stop the audio when clicking the cross which closes page
function stopAudio() {
  var ballad = document.getElementById('ballad');
  var balButton = document.getElementById('balButton');
  
  var balGramo = document.getElementById('balGramo');
  var balGramoButton = document.getElementById('balGramoButton');
  
  var typewriter = document.getElementById('typewriter');
  var balTypeButton = document.getElementById('balTypeButton');
  
  var balChatter = document.getElementById('balChatter');
  var balChatterButton = document.getElementById('balChatterButton');
  
  var cabaret = document.getElementById('cabaret');
  var cabButton = document.getElementById('cabButton');
  
  var cabCheering = document.getElementById('cabCheering');
  var cabCheeringButton = document.getElementById('cabCheeringButton');
  
  var cabDancing = document.getElementById('cabDancing');
  var cabDancingButton = document.getElementById('cabDancingButton');
  
  var cabChatter = document.getElementById('cabChatter');
  var cabChatterButton = document.getElementById('cabChatterButton');
  
  var rehearsals = document.getElementById('rehearsals');
  var rehearButton = document.getElementById('rehearButton');
  
  var rehearBeat = document.getElementById('rehearBeat');
  var rehearBeatButton = document.getElementById('rehearBeatButton');
  
  var rehearClap = document.getElementById('rehearClap');
  var rehearClapButton = document.getElementById('rehearClapButton');
  
  var rehearDancing = document.getElementById('rehearDancing');
  var rehearDancingButton = document.getElementById('rehearDancingButton');
  
  var tango = document.getElementById('tango');
  var tangoButton = document.getElementById('tangoButton');
  
  var instrumental = document.getElementById('instrumental');
  var instrumentalButton = document.getElementById('instrumentalButton');
  
//  var instruDancing = document.getElementById('instruDancing');
//  var instruDancingButton = document.getElementById('instruDancingButton');
//  
//  var instruCheering = document.getElementById('instruCheering');
//  var instruCheeringButton = document.getElementById('instruCheeringButton');
  
  if (ballad.play){
    ballad.pause();
    ballad.currentTime = 0;
	balButton.className = "";
	balButton.className = "play";
  };
  if (balGramo.play){
    balGramo.pause();
    balGramo.currentTime = 0;
	balGramoButton.className = "";
	balGramoButton.className = "playsm";
  };
  if (typewriter.play){
    typewriter.pause();
    typewriter.currentTime = 0;
	balTypeButton.className = "";
	balTypeButton.className = "playsm";
  };
  if (balChatter.play){
    balChatter.pause();
    balChatter.currentTime = 0;
	balChatterButton.className = "";
	balChatterButton.className = "playsm";
  };
  
  if (cabaret.play){
    cabaret.pause();
    cabaret.currentTime = 0;
	cabButton.className = "";
	cabButton.className = "play";
  };
  if (cabCheering.play){
    cabCheering.pause();
    cabCheering.currentTime = 0;
	cabCheeringButton.className = "";
	cabCheeringButton.className = "playsm";
  };
  if (cabDancing.play){
    cabDancing.pause();
    cabDancing.currentTime = 0;
	cabDancingButton.className = "";
	cabDancingButton.className = "playsm";
  };
  if (cabChatter.play){
    cabChatter.pause();
    cabChatter.currentTime = 0;
	cabChatterButton.className = "";
	cabChatterButton.className = "playsm";
  };  

  if (rehearsals.play){
    rehearsals.pause();
    rehearsals.currentTime = 0;
	rehearButton.className = "";
	rehearButton.className = "play";
  };
  
  if (rehearBeat.play){
    rehearBeat.pause();
    rehearBeat.currentTime = 0;
	rehearBeatButton.className = "";
	rehearBeatButton.className = "playsm";
  };
 
  if (rehearClap.play){
    rehearClap.pause();
    rehearClap.currentTime = 0;
	rehearClapButton.className = "";
	rehearClapButton.className = "playsm";
  };
  
  if (rehearDancing.play){
    rehearDancing.pause();
    rehearDancing.currentTime = 0;
	rehearDancingButton.className = "";
	rehearDancingButton.className = "playsm";
  };
  
  if (tango.play){
    tango.pause();
    tango.currentTime = 0;
	tangoButton.className = "";
	tangoButton.className = "play";
  };

  if (instrumental.play){
    instrumental.pause();
    instrumental.currentTime = 0;
	instrumentalButton.className = "";
	instrumentalButton.className = "playsm";
  };
  
//  if (instruDancing.play){
//    instruDancing.pause();
//    instruDancing.currentTime = 0;
//	instruDancingButton.className = "";
//	instruDancingButton.className = "playsm";
//  };
//  
//  if (instruCheering.play){
//    instruCheering.pause();
//    instruCheering.currentTime = 0;
//	instruCheeringButton.className = "";
//	instruCheeringButton.className = "playsm";
//  };  
}


// stop tango songs from playing at the same time
function stopOther(){
  
  var tango = document.getElementById('tango');
  var tangoButton = document.getElementById('tangoButton');
  
  var instrumental = document.getElementById('instrumental');
  var instrumentalButton = document.getElementById('instrumentalButton');
  
  if (instrumental.play){
    tango.pause();
    tango.currentTime = 0;
	tangoButton.className = "";
	tangoButton.className = "play";
  };
   if (tango.play){
    instrumental.pause();
    instrumental.currentTime = 0;
	instrumentalButton.className = "";
	instrumentalButton.className = "playsm";
  };
}

//MUSIC
stopOther();
playAudio();

//SOUND - setting the volume
  var ballad = document.getElementById('ballad');
  var balGramo = document.getElementById('balGramo');
  var typewriter = document.getElementById('typewriter');  
  var balChatter = document.getElementById('balChatter');
  var cabaret = document.getElementById('cabaret');
  var cabCheering = document.getElementById('cabCheering');
  var cabDancing = document.getElementById('cabDancing');
  var cabChatter = document.getElementById('cabChatter');
  var rehearsals = document.getElementById('rehearsals');
  var rehearBeat = document.getElementById('rehearBeat');
  var rehearClap = document.getElementById('rehearClap');
  var rehearDancing = document.getElementById('rehearDancing');
  var tango = document.getElementById('tango');
  var instrumental = document.getElementById('instrumental');
//  var instruDancing = document.getElementById('instruDancing');
//  var instruCheering = document.getElementById('instruCheering');

ballad.volume = 1;
balGramo.volume = 0.3;
typewriter.volume = 0.3;
balChatter.volume = 0.4;
cabaret.volume = 0.9;
cabCheering.volume = 0.8;
cabDancing.volume = 1;
cabChatter.volume = 0.6;
rehearsals.volume = 0.6;
rehearBeat.volume = 0.5;
rehearClap.volume = 0.1;
rehearDancing.volume = 1;
tango.volume = 0.9;
instrumental.volume = 0.9;
//instruDancing.volume = 0.9;
//instruCheering.volume = 0.6;