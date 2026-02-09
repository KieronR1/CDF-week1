/* Step 4: Particles.js Configuration */
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 100,
            "density": { "enable": true, "value_area": 800 }
        },
        "color": { "value": "#db3838" },
        "shape": { "type": "circle" },
        "opacity": {
            "value": 0.8,
            "random": false
        },
    
    "size": {
    "value": 5,
    "random": true
},
    "line_linked": {
    "enable": true,
    "distance": 150,
    "color": "#083e78",
    "opacity": 0.6,
    "width": 1
},
    "move": {
    "enable": true,
    "speed": 3,
    "direction": "none",
    "random": false,
    "straight": false,
    "out_mode": "out",
    "bounce": false
}
    },
    "interactivity": {
    "detect_on": "canvas",
    "events": {
        "onhover": { "enable": true, "mode": "grab" },
        "onclick": { "enable": true, "mode": "push" },
        "resize": true
    }
},
    "retina_detect": true
    });
console.log("Seminar 3 script loaded and particles initialized.");