(function() {
    let icon = document.getElementById('menu_icon');
    let art = document.getElementById('article');
    let nav = document.getElementById('nav');

    if ( icon && art && nav ) {
        icon.addEventListener('click',function() {
            getComputedStyle(art,null).display === 'block' ?
                art.style.display = 'none' :
                art.style.display = 'block';
            getComputedStyle(nav,null).display === 'block' ?
                nav.style.display = 'none' :
                nav.style.display = 'block';
        })
    }
})()
