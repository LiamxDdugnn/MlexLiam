function openPopup(qrImg, bankImg, titleText = '', bottomText = '') {
  document.getElementById('popup-img-top').src = qrImg;
  document.getElementById('popup-img-bottom').src = bankImg;
  document.getElementById('popup-title').innerText = titleText;
  document.getElementById('popup-text').innerText = bottomText;
  document.getElementById('popup').style.display = 'block';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}
