let countdownInterval;

document.querySelectorAll('.app-button').forEach(button => {
  button.addEventListener('click', () => {
    const downloadUrl = button.getAttribute('data-url');
    openPopup(downloadUrl);
  });
});

function openPopup(downloadUrl) {
  document.getElementById('popup').style.display = 'flex';
  document.getElementById('countdown').textContent = 10;
  document.getElementById('download-section').style.display = 'none';

  let count = 10;
  countdownInterval = setInterval(() => {
    count--;
    document.getElementById('countdown').textContent = count;

    if (count === 0) {
      clearInterval(countdownInterval);
      document.getElementById('download-section').style.display = 'block';
      document.getElementById('download-link').href = downloadUrl;
    }
  }, 1000);
}

function closePopup() {
  clearInterval(countdownInterval);
  document.getElementById('popup').style.display = 'none';
}
