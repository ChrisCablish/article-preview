const shareButton = document.querySelector(".share");
const wrapper = document.querySelector(".share__button__wrapper")



// MOUSE OVER
shareButton.addEventListener("mouseover", ()=>{
    // REACH INTO SVG DOCUMENT AND THEN INTO PATH ELEMENT --> SET <PATH> FILL PROPERTY TO WHITE
    shareButton.getSVGDocument().getElementById("path").setAttribute("fill", "white");
    wrapper.style.backgroundColor = '#6E8098';
});

// MOUSE OUT
shareButton.addEventListener("mouseout", ()=>{
    shareButton.getSVGDocument().getElementById("path").setAttribute("fill", "#6E8098");
    wrapper.style.backgroundColor = 'hsl(210, 46%, 95%)';
});







