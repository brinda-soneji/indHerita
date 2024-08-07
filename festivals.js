const galleryElements = document.querySelectorAll('.gallery-element');
const navDotsContainer = document.createElement('div');
navDotsContainer.className = 'nav-dots';
document.body.appendChild(navDotsContainer);
for (let i = 0; i < Math.ceil(galleryElements.length / 3); i++) {
    const dot = document.createElement('span');
    dot.className="nav-dot";
    dot.textContent = '·';
    dot.addEventListener('click', () => {
         showGalleryElements(i * 3);
    });
    navDotsContainer.appendChild(dot);
}
showGalleryElements(0);// initially first three
function showGalleryElements(index) {
  galleryElements.forEach(element => {
    element.classList.remove('show');
});
for (let i = index; i < index + 3; i++) {
    if (i < galleryElements.length) {
      galleryElements[i].classList.add('show');
    }
  }
      const navDots = document.querySelectorAll('.nav-dots span');
      navDots.forEach(dot => {
      dot.classList.remove('active');
      });
      navDots[index / 3].classList.add('active');
        }
                
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
    video.style.display = 'none';
    });
        
galleryItems.forEach(item => {
const imageElement = item.querySelector('img');
const videoElement = item.querySelector('video');
const content=item.querySelector('content')
item.addEventListener('mouseover', () => {
    videoElement.style.display = 'block';
    videoElement.play();
    imageElement.style.display = 'none';
    content.style.opacity=1;
    });
        
item.addEventListener('mouseout', () => {
    videoElement.style.display = 'none';
    videoElement.pause();
    imageElement.style.display = 'block';
    });
});
});