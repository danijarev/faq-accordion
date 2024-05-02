var fetchPlusIcon = document.querySelectorAll('.plus-icon');
var fetchMinusIcon = document.querySelectorAll('.minus-icon');

fetchPlusIcon.forEach((icon) => {
    icon.addEventListener('click', () => {
        icon.classList.add('hidden');
        let secMinusIcon = icon.nextElementSibling;
        secMinusIcon.classList.remove('hidden');
        let fetchSectionEl = secMinusIcon.nextElementSibling;
        fetchSectionEl.classList.remove('hidden');
        fetchIcons();
    })
});

fetchMinusIcon.forEach((minusIcon) => {
         minusIcon.addEventListener('click', () => {
            minusIcon.classList.add('hidden');
            let secPlusIcon = minusIcon.previousElementSibling;
            secPlusIcon.classList.remove('hidden');
            let fetchSectionEl = minusIcon.nextElementSibling;
            fetchSectionEl.classList.add('hidden');
            fetchIcons();   
        })
     })

async function fetchIcons() {
    fetchPlusIcon = await document.querySelectorAll('.plus-icon');
    fetchMinusIcon = await document.querySelectorAll('.minus-icon');
}