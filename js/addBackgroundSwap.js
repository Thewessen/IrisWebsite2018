document.addEventListener('scroll', (function() {
    let start = document.getElementsByTagName('h1');
    let wh = window.innerHeight;

    let imgs = [
        {
            url: "url('./img/brug_intro_large.jpg')",
            rgb: "rgb(77,74,73)",
            rgba: "rgba(77,74,73,0.5)"
        },{
            url: "url('./img/brug_overhetij_large.jpg')",
            rgb: "rgb(77,63,47)",
            rgba: "rgba(77,63,47,0.5)"
        },{
            url: "url('./img/brug_kelder.jpg')",
            rgb: "rgb(104,128,167)",
            rgba: "rgba(104,128,167,0.5)"
        },{
            url: "url('./img/brug_toronto_large.jpg')",
            rgb: "rgb(101,99,97)",
            rgba: "rgba(101,99,97,0.5)"
        },{
            url: "url('./img/brug_credits.jpg')",
            rgb: "rgb(143,139,136)",
            rgba: "rgba(143,139,136,0.5)"
        }
    ]
        
    let last_sec = 0;
    let current_sec = 0;

    return function() {
      for( let i = 0; i < start.length; i += 1 ) {
        let st = start[i].getBoundingClientRect().top;

        if ( st < wh ) {
          current_sec = i;
        }
      }
      if ( current_sec !== last_sec ) {
        // Change background image and color
        let img = document.getElementById('background_img');
        img.style.opacity = 0.2;
        img.style.filter = 'alpha(opacity=20)'
        window.setTimeout(function() {
          img.style.backgroundImage=imgs[current_sec].url;
          img.style.backgroundColor=imgs[current_sec].rgb;
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
})())
