if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/serviceWorker.js');
}


let deferredPrompt;
const addBtn = document.querySelector('.add-button');
addBtn.style.display = 'none';

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    addBtn.style.display = 'block';

});

const addBtn1 = document.querySelector('.add-button1');

addBtn1.addEventListener('click', (e) => {
    if (!("Notification" in window)) {
        alert("Ta przeglądarka nie obsługuje powiadomień");
    }

    // Sprawdźmy czy uprawnienia dla powiadomienia zostały nadane
    else if (Notification.permission === "granted") {
        // jeżeli są tworzymy powiadomienie
        var notification = new Notification("Hello world");
    }

    // W innym przypadku tworzymy zapytanie o uprawnienia
    else if (Notification.permission !== 'denied') {
        Notification.requestPermission(function(permission) {
            //Jeżeli użytkownik zaakceptuje tworzymy powiadomienie
            if (permission === "granted") {
                var notification = new Notification("Hello wrold");
            }
        });
    }

});