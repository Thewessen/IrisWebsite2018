(function() {
    let indices = [
        {
            link:   './index.html',
            content:'Iris van der Ende'
        },{
            link:   './bio_contact.html',
            content:'Biografie + contact'
        },{
            link:   './agenda.html',
            content:'agenda'
        },{
            link:   './begrafenisdienst.html',
            content:'harpiste voor begrafenisdienst'
        },{
            link:   './waai.html',
            content:'theater | Waai'
        },{
            link:   './stellarsounshow.html',
            content:'theater | Stellar Sound Show'
        },{
            link:   './verte.html',
            content:'theater | Verte'
        },{
            link:   './castorpollux.html',
            content:'theater | Castor & Pollux',
        },{
            link:   './stem_van_de_molen.html',
            content:'De stem van de molen'
        },{
            link:   './onder_de_brug2.html',
            content:'Onder de brug'
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
                let span = document.createElement('span');

                // set properties
                link.href=indices[i].link;
                span.className='blur';

                // add event handlers
                function mouseEnter() {
                    span.style.borderBottom='1px solid #FFFFDF';
                    span.className='';
                }
                
                function mouseLeave() {
                    span.style.borderBottom='none';
                    span.className='blur';
                }
                list.addEventListener('mouseenter',mouseEnter);
                list.addEventListener('mouseleave',mouseLeave);

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
