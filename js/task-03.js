function createGallary(images) {
    const ulGallary = document.querySelector('#gallery');
    ulGallary.classList.add('title')
    const markUpString = images.reduce((string, image) => (string + `<li><img class = 'item-img'
    'scrs = '${image.url}'
    alt = '${image.alt}'
    ></li>`), '')
    ulGallary.insertAdjacentHTML('afterbegin', markUpString)
}