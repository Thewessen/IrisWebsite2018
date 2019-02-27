function swapBackground( imgs ) {
  document.addEventListener('scroll', (function() {
    let start = document.getElementsByTagName('h1');
    let wh = window.innerHeight;

    let img = document.getElementById('background_img');

    let last_sec = 0;
    let current_sec = 0;

    return function() {
      for( let i = 0; i < start.length; i += 1 ) {
        // Search for current section on page scroll
        let st = start[i].getBoundingClientRect().top;

        if ( st < wh ) {
          current_sec = i;
        }
      }
      if ( current_sec !== last_sec ) {
        // Change background image, color and position
        img.style.opacity = 0.2;
        img.style.filter = 'alpha(opacity=20)'
        window.setTimeout(function() {
          img.style.backgroundImage=imgs[current_sec].url;
          img.style.backgroundColor=imgs[current_sec].rgb;
          img.style.backgroundPosition=imgs[current_sec]['bg-pos'];
          img.style.opacity = 1;
          img.style.filter = 'alpha(opacity=100)'
        },300)
        last_sec = current_sec;
        
        // Change blur
        let blur_els = document.getElementsByClassName('blur');
        for( let j = 0; j < blur_els.length; j += 1 ) {
          blur_els[j].style.backgroundColor=imgs[current_sec].rgba;
        }
      } 
    }
})())}
