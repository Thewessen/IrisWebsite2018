(function() {
    let icon = document.getElementById('menu_icon');
    let art = document.getElementById('article');
    let nav = document.getElementById('nav');

    if ( icon && art && nav ) {
      
      function show_hide_menu() {
              getComputedStyle(art,null).display === 'flex' ?
                  art.style.display = 'none' :
                  art.style.display = 'flex';
              getComputedStyle(nav,null).display === 'flex' ?
                  nav.style.display = 'none' :
                  nav.style.display = 'flex';
      }

      icon.addEventListener('click',show_hide_menu) 
    }
})()
