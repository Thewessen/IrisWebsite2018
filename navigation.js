(function() {
    let links = [
        './index.html',
        './bio_contact.html',
        './agenda.html',
        './begrafenisdienst.html',
        './waai.html',
        './stellarsounshow.html',
        './verte.html',
        './castorpollux.html',
        './stem_van_de_molen.html',
        './onder_de_brug.html'
    ];

    let contents = [
        'Iris van der Ende',
        'Biografie + contact',
        'agenda',
        'harpiste voor begrafenisdienst',
        'theater | Waai',
        'theater | Stellar Sound Show',
        'theater | Verte',
        'theater | Castor & Pollux',
        'De stem van de molen',
        'Onder de brug'
    ];

    // create root element
    let lust = document.createElement('ul');

    for( let i = 0; i < links.length; i += 1 ) {

        //skip current page (delete nav item)
        let current = '.' + window.location.href.match(/\/[^/]*$/)[0];
        if( current !== links[i] ) {
            // create other html-elements
            let content = document.createTextNode(contents[i]);
            let link = document.createElement('a');
            let list = document.createElement('li');
            let span = document.createElement('span');

            // set properties
            link.href=links[i];
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

    // add elements to the DOM
    document.getElementById('nav').appendChild(lust);
})();
