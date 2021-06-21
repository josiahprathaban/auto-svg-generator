$("Button").on("click", function(){
    let svg = svgGenerator();
    $("#viewer").empty();
    $("#viewer").append(svg);
    a(svg);
})

function a(svg) {
    $('a.download').attr('href', 'data:image/svg+xml;utf-8,' + encodeURIComponent(svg));
}

function svgGenerator(){
    let start = `<svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">`;
    let contend = pathsGenerator();
    let end =`</svg>`
    return start + contend + end;
}

function pathsGenerator(){
    no_of_paths = getRandomInt(10, 30);
    let paths = ``;
    for(let x = 0; x <= no_of_paths; x++){
        paths = paths + 
        `<path d="` + mGenerator().slice(0, -2) + `" style="fill:rgba(` + getRGB() + `, ` + getRGB() + `, ` + getRGB() + `, ` + Math.random().toFixed(1) + `);"></path>`;
        + " ";
    }
    return paths;
}

function mGenerator(){
    let no_of_m = getRandomInt(1, 50);
    let m = `M `;
    for(let x = 0; x <= no_of_m; x++){
        m = m + " " + cGenerator() + " C";
    }
    return m
}

function cGenerator(){
    let no_of_c = getRandomInt(1, 10);
    var c = ``;
    for(let x = 0; x <= no_of_c; x++){
        c = c + " " + getRandomArbitrary(-100, 700);
    }
    return c
}

function getRandomArbitrary(min, max) {
    return (Math.random() * (max - min) + min).toFixed(3);
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  function getRGB() {
    min = Math.ceil(0);
    max = Math.floor(255);
    return Math.floor(Math.random() * (max - min) + min);
  }

  