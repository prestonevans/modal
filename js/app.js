const openModal = document.querySelector('body > button');
const modalBody = document.querySelector('.modal');
const modalBtn = document.querySelector('.modalBox button');

openModal.addEventListener('click', () => {
	modalBody.classList.toggle('displayNone');
});

modalBody.addEventListener('click', (e) => {
	if (e.target.className === 'modal') {
		modalBody.classList.toggle('displayNone');
	}
});
modalBtn.addEventListener('click', () => {
	modalBody.classList.toggle('displayNone');
});
