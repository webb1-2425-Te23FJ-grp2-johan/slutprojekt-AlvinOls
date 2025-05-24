document.addEventListener('DOMContentLoaded', () => {
    const cookieBar = document.getElementById('simple-cookie-bar');
    const acceptBtn = document.getElementById('accept-simple-cookies-btn');

    
    const hasAcceptedCookies = localStorage.getItem('cookieConsentGiven');

    if (!hasAcceptedCookies) {
       
        cookieBar.classList.remove('hidden'); 
    }

   
    acceptBtn.addEventListener('click', () => {
      
        localStorage.setItem('cookieConsentGiven', 'true');
       
        cookieBar.classList.add('hidden'); 
    });
});