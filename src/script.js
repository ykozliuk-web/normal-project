const openBtn = document.querySelector('.btn-primary');
const message = document.querySelector('.message');
const form = document.querySelector('.form');

const overlay = document.querySelector('#modalOverlay');
const closeBtn = document.querySelector('.modal-close');
const modalBody = document.querySelector('.modal-body');

let opened = false;

function showMessage(text) {
  message.textContent = text;
  message.classList.add('show');
}

function clearMessage() {
  message.classList.remove('show');
  setTimeout(() => { message.textContent = ''; }, 250);
}

function openModal() {
  opened = true;

  overlay.classList.add('show');
  overlay.setAttribute('aria-hidden', 'false');

  modalBody.appendChild(form);
  form.classList.remove('hidden');
  form.querySelector('input[name="name"]').focus();
  document.body.style.overflow = 'hidden';

  openBtn.textContent = 'Закрити';
  showMessage('Заповни форму у модалці 😎');
}

function closeModal() {
  opened = false;

  overlay.classList.remove('show');
  overlay.setAttribute('aria-hidden', 'true');

  form.classList.add('hidden');
  document.body.style.overflow = '';

  openBtn.textContent = 'Написати мені';
  clearMessage();
}

openBtn.addEventListener('click', () => {
  if (!opened) openModal();
  else closeModal();
});

closeBtn.addEventListener('click', closeModal);

overlay.addEventListener('click', (e) => {
  if (e.target === overlay) closeModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !overlay.classList.contains('hidden')) closeModal();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  showMessage('Готово! Повідомлення “ніби” відправлено ✅');
  form.reset();
  closeModal();
});