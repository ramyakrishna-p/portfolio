// Ramya Krishna Parimi — Netflix-style portfolio interactions

// Preloader: fade out once the page has loaded (with a safety timeout)
window.addEventListener('load', function () {
  setTimeout(hidePreloader, 500);
});
setTimeout(hidePreloader, 3000);
function hidePreloader() {
  var p = document.getElementById('preloader');
  if (p) p.classList.add('done');
}

// Navbar: solid background after scrolling
window.addEventListener('scroll', function () {
  var nav = document.getElementById('navbar');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 40);
});

// Modals: open / close, backdrop click and Escape close
function openModal(i) {
  var m = document.getElementById('modal-' + i);
  if (m) {
    m.classList.add('open');
    m.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
}
function closeModal(i) {
  var m = document.getElementById('modal-' + i);
  if (m) {
    m.classList.remove('open');
    m.style.display = 'none';
    document.body.style.overflow = '';
  }
}
function closeAllModals() {
  var modals = document.querySelectorAll('.modal');
  modals.forEach(function (m) {
    m.classList.remove('open');
    m.style.display = 'none';
  });
  document.body.style.overflow = '';
}
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeAllModals();
});
document.querySelectorAll('.modal').forEach(function (m) {
  m.addEventListener('click', function (e) {
    if (e.target === m) {
      m.classList.remove('open');
      m.style.display = 'none';
      document.body.style.overflow = '';
    }
  });
});
// Keyboard access on cards (Enter / Space opens the matching modal)
document.querySelectorAll('.card').forEach(function (card) {
  card.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      card.click();
    }
  });
});
