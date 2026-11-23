/* Zorgboerderij Axel&co: kleine, rustige interacties */
(() => {
  /* ---------- Header: zachte rand zodra er gescrold wordt ---------- */
  const header = document.querySelector('[data-header]');
  const navLinks = [...document.querySelectorAll('.nav-link')];
  const targets = navLinks
    .map((link) => ({ link, el: document.querySelector(link.getAttribute('href')) }))
    .filter((t) => t.el);

  const onScroll = () => {
    header.classList.toggle('border-sand', window.scrollY > 8);
    header.classList.toggle('border-sand/0', window.scrollY <= 8);

    // Actieve sectie: de laatste waarvan de bovenkant boven 40% van het scherm staat
    const line = window.innerHeight * 0.4;
    let active = null;
    targets.forEach((t) => {
      if (t.el.getBoundingClientRect().top <= line) active = t;
    });
    const atEnd = window.innerHeight + window.scrollY >= document.body.scrollHeight - 4;
    if (atEnd) active = targets[targets.length - 1];
    targets.forEach((t) => {
      if (t === active) t.link.setAttribute('aria-current', 'location');
      else t.link.removeAttribute('aria-current');
    });
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Mobiel menu ---------- */
  const toggle = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-menu]');
  const setMenu = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.querySelector('[data-menu-label]').textContent = open ? 'Menu sluiten' : 'Menu openen';
    toggle.querySelector('[data-icon-open]').classList.toggle('hidden', open);
    toggle.querySelector('[data-icon-close]').classList.toggle('hidden', !open);
    menu.classList.toggle('hidden', !open);
  };
  toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      toggle.focus();
    }
  });
  window.matchMedia('(min-width: 1024px)').addEventListener('change', (e) => e.matches && setMenu(false));

  /* ---------- Contactformulier (opent het eigen e-mailprogramma) ---------- */
  const form = document.querySelector('[data-contact-form]');
  const success = document.querySelector('[data-form-success]');
  const submit = form.querySelector('[data-submit]');
  const recipient = (form.dataset.contactEmail || '').trim();
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  const notice = form.querySelector('[data-form-unavailable]');

  if (recipient) {
    // Het adres ook gewoon tonen, als terugval wanneer mailto niets opent.
    document.querySelectorAll('[data-recipient-link]').forEach((a) => {
      a.href = `mailto:${recipient}`;
      a.textContent = recipient;
    });
    form.querySelector('[data-recipient-wrap]').classList.remove('hidden');
  } else {
    // Nog geen adres ingesteld: eerlijk melden in plaats van doen alsof er iets verstuurd wordt.
    form.querySelector('[data-form-intro]').classList.add('hidden');
    notice.classList.remove('hidden');
    form.querySelectorAll('input, textarea').forEach((f) => (f.disabled = true));
    form.setAttribute('aria-describedby', notice.id);
    submit.setAttribute('aria-disabled', 'true');
    submit.setAttribute('aria-describedby', notice.id);
  }

  const validators = {
    naam: (v) => v.trim().length > 0,
    email: (v) => emailRe.test(v.trim()),
    bericht: (v) => v.trim().length > 0,
  };

  const check = (field) => {
    const ok = validators[field.name](field.value);
    field.setAttribute('aria-invalid', String(!ok));
    document.getElementById(field.name + '-err').classList.toggle('hidden', ok);
    return ok;
  };

  Object.keys(validators).forEach((name) => {
    const field = form.elements[name];
    field.addEventListener('blur', () => field.value && check(field));
    field.addEventListener('input', () => field.getAttribute('aria-invalid') === 'true' && check(field));
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!recipient) {
      // Knop doet zichtbaar iets: breng de uitleg in beeld en in focus.
      notice.focus();
      return;
    }

    const fields = Object.keys(validators).map((n) => form.elements[n]);
    const firstInvalid = fields.find((f) => !check(f));
    if (firstInvalid) {
      firstInvalid.focus();
      return;
    }

    const data = new FormData(form);
    const naam = data.get('naam').trim();
    const organisatie = (data.get('organisatie') || '').trim();
    const rol = data.get('rol');
    const subject = `Axel&co: bericht van ${naam}${organisatie ? ` (${organisatie})` : ''}`;
    const lines = [data.get('bericht').trim(), '', naam];
    if (organisatie) lines.push(`Organisatie: ${organisatie}`);
    if (rol) lines.push(`Schrijft als: ${rol}`);
    lines.push(`E-mail: ${data.get('email').trim()}`);
    const body = lines.join('\n');

    window.location.href =
      `mailto:${encodeURIComponent(recipient)}` +
      `?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    form.classList.add('hidden');
    success.classList.remove('hidden');
    success.focus();
  });

  document.querySelector('[data-form-back]').addEventListener('click', () => {
    success.classList.add('hidden');
    form.classList.remove('hidden');
    form.elements.bericht.focus();
  });

  /* ---------- Jaartal ---------- */
  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
})();
