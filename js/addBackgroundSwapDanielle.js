document.addEventListener('scroll', (function() {
    let start = document.getElementsByTagName('h1');
    let wh = window.innerHeight;

    let imgs = [
        {
            url: "url('./img/danielle_large.jpg')",
            rgb: "rgb(147,128,118)",
            rgba: "rgba(147,128,118,0.5)",
            'bg-pos': "right center"
        },{
            url: "url('./img/filiaalmanager_large.jpg')",
            rgb: "rgb(152,116,81)",
            rgba: "rgba(152,116,81,0.5)",
            'bg-pos': "center center"
        },{
            url: "url('./img/bbrood_large.jpg')",
            rgb: "rgb(10,6,6)",
            rgba: "rgba(10,6,6,0.5)",
            'bg-pos': "center center"
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
})())
