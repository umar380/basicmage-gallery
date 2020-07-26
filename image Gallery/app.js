const modal = document.querySelector('.modal');
const previews = document.querySelectorAll('.img-container img');
const largeImage = document.querySelector('.modal .large');
const caption = document.querySelector('.modal .caption');
 previews.forEach((preview) => {
    preview.addEventListener('click', () => {
        modal.classList.add('open');
        largeImage.classList.add('open');
        const imageSrc = preview.getAttribute('data-original') 
        largeImage.src = `./full-images/${imageSrc}`;
        caption.textContent=preview.alt; 
    })
 })

 modal.addEventListener('click', (e) => {
     if(e.target.classList.contains('modal')) {
         modal.classList.remove('open');
        largeImage.classList.remove('open');
     }
 })
