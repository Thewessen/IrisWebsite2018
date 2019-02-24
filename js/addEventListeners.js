(function() {
    let icon = document.getElementById('menu_icon');
    let art = document.getElementById('article');
    let nav = document.getElementById('nav');

    if ( icon && art && nav ) {
    console.log('has als');
        icon.addEventListener('click',function() {
            getComputedStyle(art,null).visibility === 'hidden' ?
                art.style.visibility = 'visible' :
                art.style.visibility = 'hidden';
            getComputedStyle(nav,null).visibility === 'hidden' ?
                nav.style.visibility = 'visible' :
                nav.style.visibility = 'hidden';
           });
    }
})()
