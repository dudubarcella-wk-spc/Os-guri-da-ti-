// Ano dinâmico no rodapé
document.getElementById('year').textContent = new Date().getFullYear();

// Menu mobile
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('nav--open');
  navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

// Fecha o menu ao clicar em um link (mobile)
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('nav--open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Formulário de contato -> redireciona para o WhatsApp com a mensagem preenchida
const form = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nome = form.nome.value.trim();
  const telefone = form.telefone.value.trim();
  const mensagem = form.mensagem.value.trim();

  const texto = `Olá! Meu nome é ${nome} (${telefone}). ${mensagem}`;
  const numeroWhats = '5551999999999'; // ajuste para o número real da empresa

  const url = `https://wa.me/${numeroWhats}?text=${encodeURIComponent(texto)}`;

  formNote.textContent = 'Abrindo o WhatsApp...';
  window.open(url, '_blank');

  form.reset();
});