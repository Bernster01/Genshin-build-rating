
function checkConsent() {
    let consent = getCookie('consent');
    if (consent == 'true') {
        return true;
    }
    return false;
}
function getCookie(name) {
    let cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].split('=');
        if (cookie[0].trim() == name) {
            return cookie[1];
        }
    }
    return '';
}
function setConsent() {
    setCookie('consent', 'true', 365);
    document.getElementById('consent').style.display = 'none';
}
function setCookie(name, value, days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    let expires = 'expires=' + date.toUTCString();
    document.cookie = name + '=' + value + ';' + expires + ';path=/';
}
function getConesentFromUser() {
    let consent = checkConsent();
    if (!consent) {
        let consentDiv = document.createElement('div');
        consentDiv.id = 'consent';
        let infoBox = document.createElement('div');
        infoBox.innerHTML = 'This website uses cookies to improve your experience. By continuing to use this site, you accept our use of cookies.';
        consentDiv.appendChild(infoBox);
        let button = document.createElement('button');
        button.innerHTML = 'Accept';
        button.onclick = function () {
            setConsent();
            hideConsent();
        };
        document.body.appendChild(consentDiv);

    }
}
function hideConsent() {
    document.getElementById('consent').style.display = 'none';
}
// getConesentFromUser();