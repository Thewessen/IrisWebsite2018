(function() {
  let indices = [
    {
        link:   './index.html',
        content:'Iris van der Ende'
    },{
        link:   './onder_de_brug.html',
        content:'project | Onder de brug'
    },{
        link:   './stem_van_de_molen.html',
        content:'project | De stem van de molen'
    },{
        link:   './stellarsoundshow.html',
        content:'project | Stellar Sound Show'
    },{
        link:   './castorpollux.html',
        content:'theater | Castor & Pollux',
    },{
        link:   './verte.html',
        content:'theater | Verte'
    },{
        link:   './waai.html',
        content:'theater | Waai'
    },{
        link:   './danielle.html',
        content:'theater | Daniëlle & filiaalmanager'
    },{
        link:   './begrafenisdienst.html',
        content:'harpiste voor begrafenisdienst'
    },{
        link:   './bbrood.html',
        content:'gedachtes van BBrood'
    },{
        link:   './agenda.html',
        content:'agenda'
    },{
        link:   './bio_contact.html',
        content:'biografie + contact'
    }
  ];

  // find/create root elements
  let nav = document.getElementById('nav');
  let lust = document.createElement('ul');

  if ( nav ) {
    for( let i = 0; i < indices.length; i += 1 ) {

      //skip current page (delete nav item)
      let current = '.' + window.location.href.match(/\/[^/]*$/)[0];
      if( current !== indices[i].link) {

        // create other html-elements
        let content = document.createTextNode(indices[i].content);
        let link = document.createElement('a');
        let list = document.createElement('li');
        let span;

        if ( i === 0 ) {
            span = document.createElement('h7');
        }
        else {
            span = document.createElement('span');
            span.className='blur';
        }

        // set properties
        link.href=indices[i].link;

        // add event handlers
        function mouseEnter() {
            span.style.borderBottom='1px solid #FFFFDF';
            span.className='';
        }
        
        function mouseLeave() {
            span.style.borderBottom='none';
            i !== 0 ? span.className='blur': span.classNamen=''; 
        }

        if ( i !== 0 ) {
          list.addEventListener('mouseenter',mouseEnter);
          list.addEventListener('mouseleave',mouseLeave);
        }

        // add elements to root recursive
        span.appendChild(content);
        list.appendChild(span);
        link.appendChild(list);
        lust.appendChild(link);
      }
    }
  }

  // add elements to the DOM
  nav.appendChild(lust);
})();
