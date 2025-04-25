
// Download certificate as image
document.querySelector('.download').addEventListener('click', function () {
  html2canvas(document.querySelector('.certificate-wrapper')).then(canvas => {
    const link = document.createElement('a');
    link.download = 'certificate.png';
    link.href = canvas.toDataURL();
    link.click();
  });
});

// Share functionality (copy link to clipboard as example)
document.querySelector('.share').addEventListener('click', function () {
  const dummyLink = 'https://yourdomain.com/certificates/shukurat-adekola'; // replace with actual link
  navigator.clipboard.writeText(dummyLink).then(() => {
    alert("Link copied to clipboard!");
  }, () => {
    alert("Failed to copy link.");
  });
});

document.querySelector('.notification-icon').addEventListener('click', function () {
    alert('You have new notifications!');
});

if (navigator.share) {
    navigator.share({
      title: 'My Certificate',
      text: 'Check out my certificate!',
      url: 'https://yourdomain.com/certificates/shukurat-adekola',
    })
    .then(() => console.log('Shared successfully!'))
    .catch((error) => console.error('Error sharing', error));
  } else {
    alert('Sharing not supported. Link copied to clipboard.');
  }
  
