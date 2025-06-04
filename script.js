function openPopup(qr, bank, title) {
  document.getElementById('qr-img').src = qr;
  document.getElementById('bank-img').src = bank;
  document.getElementById('popup-title').textContent = title;
  document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}
