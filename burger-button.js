document.addEventListener('DOMContentLoaded', function() {
  const burgerButton = document.querySelector('.header-burger-button');
  const headerMenu = document.querySelector('.header-menu');
  
  if (window.innerWidth <= 430) {
    headerMenu.style.display = 'none';
  }

  burgerButton.addEventListener('click', function() {
    if (headerMenu.style.display === 'none' || headerMenu.style.display === '') {
      openMenu();
    } else {
      closeMenu();
    }
  });
  

  function openMenu() {
    headerMenu.style.display = 'block';

    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    overlay.style.zIndex = '998';
    overlay.addEventListener('click', closeMenu);
    document.body.appendChild(overlay);
    
    headerMenu.style.position = 'fixed';
    headerMenu.style.top = '0';
    headerMenu.style.left = '0';
    headerMenu.style.width = '80%';
    headerMenu.style.maxWidth = '430px';
    headerMenu.style.height = '100vh';
    headerMenu.style.backgroundColor = '#fff';
    headerMenu.style.zIndex = '999';
    headerMenu.style.overflowY = 'auto';
    headerMenu.style.padding = '20px';
    headerMenu.style.boxSizing = 'border-box';

    const menuList = headerMenu.querySelector('.header-menu-list');
    menuList.style.flexDirection = 'column';
    menuList.style.gap = '15px';
    menuList.style.marginTop = '60px';
    menuList.style.color = '#000'; 
    
    const closeButton = document.createElement('button');
    closeButton.innerHTML = '&times;';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '20px';
    closeButton.style.right = '20px';
    closeButton.style.background = 'none';
    closeButton.style.border = 'none';
    closeButton.style.fontSize = '24px';
    closeButton.style.cursor = 'pointer';
    closeButton.style.color = '#000'; 
    closeButton.addEventListener('click', closeMenu);
    closeButton.className = 'menu-close-button'; 
    headerMenu.appendChild(closeButton);
    
    document.body.style.overflow = 'hidden';
  }
  
  function closeMenu() {
    headerMenu.style.display = 'none';
    headerMenu.style = ''; 

    const closeButton = document.querySelector('.menu-close-button');
    if (closeButton) closeButton.remove();
    
    const overlay = document.querySelector('.menu-overlay');
    if (overlay) overlay.remove();

    document.body.style.overflow = '';
  }

  window.addEventListener('resize', function() {
    if (window.innerWidth > 430) {
      headerMenu.style.display = '';
      headerMenu.style = '';
      closeMenu();
    } else {
      headerMenu.style.display = 'none';
    }
  });
});