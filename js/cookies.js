// Дата закінчення терміну дії куків
var expirationDateAccept = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toUTCString();
var expirationDateDecline = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toUTCString();

// Функція створення куків
function setCookie(name, value, expires) {
  document.cookie = name + "=" + encodeURIComponent(value) + ";expires=" + expires + ";path=/";
}

// Функція прийняття куків
function acceptCookies() {
  setCookie("form-data-consent", "true", expirationDateAccept);
  closeBanner();
}

// Функція відхилення куків
function declineCookies() {
  setCookie("form-data-consent", "true", expirationDateDecline);
  closeBanner();
}

// Функція закриття банера
function closeBanner() {
  document.getElementById("cookie-banner").style.display = "none";
}

// Додаємо обробник події для кнопок
document.getElementById("accept-cookies").addEventListener("click", acceptCookies);
document.getElementById("decline-cookies").addEventListener("click", declineCookies);

// Перевіряємо, чи вже були прийняті куки
if (document.cookie.indexOf("form-data-consent=true") !== -1) {
  closeBanner();
}
