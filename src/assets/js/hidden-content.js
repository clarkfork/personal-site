document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card.clickable');
    const clickInfos = document.querySelectorAll('.view-more');
  
    cards.forEach((card, index) => {
      card.addEventListener('click', () => {
        const hiddenContent = card.querySelector('.hidden-content');
        hiddenContent.classList.toggle('hide');
  
        // Toggle visibility of the clickInfo associated with the current card
        clickInfos[index].style.display = hiddenContent.classList.contains('hide') ? 'block' : 'none';
      });
    });
});