export function submitForm() {
  const form = document.querySelector('.contacts__form');
  const submitButton = form.querySelector('[type="submit"]');
  const modal = document.getElementById('modal-success');
  const modalContent = modal.querySelector('.modal__title').parentElement;
  const modalName = document.getElementById('modal-name');
  const modalEmail = document.getElementById('modal-email');
  const closeModalBtn = modal.querySelector('.modal__btn');
  const body = document.body;
  const html = document.documentElement;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.name.value;
    const email = form.email.value;

    modalName.textContent = name;
    modalEmail.textContent = email;

    body.classList.add('modal-active');
    html.classList.add('active');
    modal.classList.add('active');

    form.reset();

    submitButton.disabled = true;
    submitButton.setAttribute('tabindex', '-1');
  });

  const closeModal = () => {
    body.classList.remove('modal-active');
    html.classList.remove('active');
    modal.classList.remove('active');
  };

  closeModalBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (!modalContent.contains(e.target) && e.target !== modalContent) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}