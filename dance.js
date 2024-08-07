const galleryElements = document.querySelectorAll('.gallery-element');
const navDotsContainer = document.createElement('div');
navDotsContainer.className = 'nav-dots';
document.body.appendChild(navDotsContainer);

let numElementsToShow = window.innerWidth < 768 ? 1 : 3;

for (let i = 0; i < Math.ceil(galleryElements.length / numElementsToShow); i++) {
  const dot = document.createElement('span');
  dot.className = "nav-dot";
  dot.textContent = '·';
  dot.addEventListener('click', () => {
    showGalleryElements(i * numElementsToShow);
  });
  navDotsContainer.appendChild(dot);
}

showGalleryElements(0);

function showGalleryElements(index) {
  galleryElements.forEach(element => {
    element.classList.remove('show');
  });

  for (let i = index; i < index + numElementsToShow; i++) {
    if (i < galleryElements.length) {
      galleryElements[i].classList.add('show');
    }
  }

  const navDots = document.querySelectorAll('.nav-dots span');
  navDots.forEach(dot => {
    dot.classList.remove('active');
  });
  navDots[Math.floor(index / numElementsToShow)].classList.add('active');
}

window.addEventListener('resize', () => {
  numElementsToShow = window.innerWidth < 768 ? 1 : 3;
  const navDotsContainer = document.querySelector('.nav-dots');
  navDotsContainer.innerHTML = '';
  for (let i = 0; i < Math.ceil(galleryElements.length / numElementsToShow); i++) {
    const dot = document.createElement('span');
    dot.className = "nav-dot";
    dot.textContent = '·';
    dot.addEventListener('click', () => {
      showGalleryElements(i * numElementsToShow);
    });
    navDotsContainer.appendChild(dot);
  }
  showGalleryElements(0);
});

const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
  const videos = document.querySelectorAll('video');
  videos.forEach(video => {
    video.style.display = 'none';
  });

  galleryItems.forEach(item => {
    const imageElement = item.querySelector('img');
    const videoElement = item.querySelector('video');
    item.addEventListener('mouseover', () => {
      videoElement.style.display = 'block';
      videoElement.play();
      imageElement.style.display = 'none';
    });

    item.addEventListener('mouseout', () => {
      videoElement.style.display = 'none';
      videoElement.pause();
      imageElement.style.display = 'block';
    });
  });
});