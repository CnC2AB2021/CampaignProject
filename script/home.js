onready(() => {
  addStyle('home.css');

  onload(() => {
    let joinForm = document.getElementById('join__form');
    joinForm.addEventListener('submit', () => setTimeout(() => joinForm.reset(), 200));
  });
});