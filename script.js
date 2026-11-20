(() => {
  'use strict';

  const translations = {
    bn: {
      navHome: 'হোম', navAbout: 'আমাদের গল্প', navFacilities: 'সুবিধাসমূহ', navPricing: 'মূল্য তালিকা', navReviews: 'মতামত', navBook: 'স্লট বুক করুন',
      heroEyebrow: 'খেলার এক নতুন গভীরতা', heroTitle: 'ডুব দিন<br><em>ফুটবলের</em><br>সুন্দর খেলায়।', heroText: 'যেখানে ফুটবলের উত্তেজনা মিশে যায় গভীর নীলের প্রশান্তিতে। আপনার পরের দুর্দান্ত ম্যাচের জন্য এক প্রিমিয়াম টার্ফ অভিজ্ঞতা।', heroCta: 'আপনার সময় বেছে নিন', heroExplore: 'জোন ঘুরে দেখুন', proofOne: 'প্রিমিয়াম টার্ফ', proofTwo: 'আলোয় ঘেরা খেলা', proofThree: 'টিমের জন্য উপযুক্ত',
      quickKicker: 'আজই খেলার পরিকল্পনা', quickTitle: 'স্লট বুক করুন', dateLabel: 'তারিখ বেছে নিন', timeLabel: 'খেলার সময় বেছে নিন', quickButton: 'খালি স্লট দেখুন', quickNote: 'ডেমো বুকিং · কোনো পেমেন্ট লাগবে না', heroCaption: 'একটি অন্যরকম খেলার জগৎ',
      aboutKicker: 'XY-এর অভিজ্ঞতা', aboutOverline: 'শুধু টার্ফ নয়। সম্পূর্ণ নতুন এক জগৎ।', aboutTitle: 'খেলার নতুন গভীরতা।<br><em>উত্তেজনা আরও বেশি।</em>', aboutText: 'XY Turf Zone-এ আমরা ফুটবলের আনন্দকে নিয়ে এসেছি এক অনন্য পরিবেশে। উন্নত খেলার মাঠ, প্রয়োজনীয় সুবিধা এবং গভীর সমুদ্রের আবহ—যা প্রতিটি ম্যাচকে করে তোলে বিশেষ।', aboutPoint1Title: 'খেলার উপযোগী মাঠ', aboutPoint1Text: 'আরামদায়ক, সমান এবং দ্রুত খেলার উপযোগী।', aboutPoint2Title: 'রাতের খেলার আবহ', aboutPoint2Text: 'সন্ধ্যার ম্যাচের জন্য দারুণ আলোকসজ্জা।', aboutPoint3Title: 'বিশ্রামের সুব্যবস্থা', aboutPoint3Text: 'পরিবর্তন কক্ষ ও শাওয়ার সুবিধা রয়েছে।', aboutLink: 'সুবিধাগুলো দেখুন',
      facilitiesKicker: 'সুন্দর খেলার জন্য তৈরি', facilitiesOverline: 'প্রতিটি বিষয়ে যত্ন', facilitiesTitle: 'প্রয়োজনীয় সবকিছু।<br><em>আরও উন্নতভাবে।</em>', facilitiesText: 'খেলার আগে, খেলার সময় এবং শেষ বাঁশির পর—আপনার দলের প্রয়োজনীয় সবকিছু। মনোযোগ শুধু খেলায়।', facility1Title: 'প্রিমিয়াম টার্ফ', facility1Text: 'দ্রুত পাস ও আত্মবিশ্বাসী ফুটওয়ার্কের জন্য সমান ও আরামদায়ক মাঠ।', facility1Tag: 'খেলার মূল আকর্ষণ', facility2Title: 'চেঞ্জিং রুম', facility2Text: 'সহজেই প্রস্তুত হন, ফ্রেশ হয়ে আবার দিনের কাজে ফিরুন।', facility2Tag: 'প্রস্তুত হোন', facility3Title: 'শাওয়ার সুবিধা', facility3Text: 'প্রতিটি জমজমাট ম্যাচের পর সতেজ হয়ে নিন।', facility3Tag: 'নতুন উদ্যম', facility4Title: 'ফ্লাডলাইট', facility4Text: 'উজ্জ্বল আলোকসজ্জায় সন্ধ্যার পরও খেলা চলুক।', facility4Tag: 'রাতের খেলা',
      pricingKicker: 'সহজ ও স্বচ্ছ মূল্য', pricingOverline: 'খেলা বেশি, হিসাব সহজ।', pricingTitle: 'আপনার পছন্দের<br><em>একটি ঘণ্টা।</em>', pricingText: 'সূর্য ওঠার পর হোক বা সন্ধ্যার আলোয়—মাঠের মান একই। দল নিয়ে আসুন, সময়টুকু উপভোগ করুন।', pricingLink: 'স্লটের সময় দেখুন', dayLabel: 'দিনের সেশন', nightLabel: 'রাতের সেশন', hour: 'ঘণ্টা', dayHours: 'সকাল ৬টা – সন্ধ্যা ৬টা', nightHours: 'সন্ধ্যা ৬টা – ভোর ৪টা', dayMeta: 'উজ্জ্বল দিন। দারুণ এনার্জি।', nightMeta: 'আলোর নিচে, নিজের ছন্দে।', popular: 'খেলোয়াড়দের পছন্দ', pricingNote: 'এই ডেমো ওয়েবসাইটের নমুনা মূল্য। টার্ফ কর্তৃপক্ষ চাইলে মূল্য পরিবর্তন করতে পারবেন।',
      reviewsKicker: 'মাঠের বাইরের গল্প', reviewsOverline: 'ভালো খেলার কথা ছড়িয়ে পড়ে', reviewsTitle: 'পরিবেশটাই<br><em>নিজেই কথা বলে।</em>', review1: '“চমৎকার মাঠ, অসাধারণ পরিবেশ। আমাদের সাপ্তাহিক ম্যাচ এখন আরও জমে উঠেছে।”', review2: '“বুকিং সহজ, পরিবেশ বন্ধুত্বপূর্ণ, আর রাতের আলোকসজ্জা অসাধারণ।”', review3: '“খেলার জন্য দারুণ জায়গা। পরিচ্ছন্ন সুবিধা আর চমৎকার টার্ফ।”', reviewRole: 'নিয়মিত খেলোয়াড়', ctaOverline: 'আপনার পরের ম্যাচ ডাকছে', ctaTitle: 'খেলার জন্য<br><em>প্রস্তুত তো?</em>', ctaText: 'তারিখ বেছে নিন। দল জড়ো করুন। দেখা হবে মাঠের আলোয়।', ctaButton: 'মাঠ বুক করুন', footerTagline: 'যেখানে প্রতিটি ম্যাচ পায় নতুন গভীরতা।', footerExplore: 'ঘুরে দেখুন', footerVisit: 'ঠিকানা', footerReady: 'খেলার পরিকল্পনা আছে?', footerBook: 'চলুন মাঠে দেখা করি', copyright: 'সর্বস্বত্ব সংরক্ষিত।',
      backHome: 'হোমে ফিরুন', bookingKicker: 'মাঠ বুকিং', bookingOverline: 'আপনার সময়। আপনার দল। আপনার মাঠ।', bookingTitle: 'খেলার জন্য<br><em>সময় বেছে নিন।</em>', bookingSub: 'কয়েকটি ধাপেই কিক-অফের প্রস্তুতি। দিন বেছে নিন, সময় ঠিক করুন, আমরা আপনার স্লটটি দেখিয়ে দেব।', stepDate: 'তারিখ বেছে নিন', stepDateSub: 'আপনার দলের সুবিধামতো দিন ঠিক করুন।', dateNote: 'পরবর্তী ৭ দিনের নমুনা স্লট দেখানো হচ্ছে।', stepTime: 'সেশন বেছে নিন', stepTimeSub: 'দিনের আলো, নাকি গভীর নীল রাত?', slotHeading: 'খেলার সময়সমূহ', slotSub: '৬০ মিনিটের একটি স্লট বেছে নিন।', legendAvailable: 'খালি', legendSelected: 'নির্বাচিত', legendBooked: 'বুকড', stepDetails: 'আপনার তথ্য', stepDetailsSub: 'কার নামে মাঠটি রাখা হবে?', nameLabel: 'আপনার নাম', phoneLabel: 'মোবাইল নম্বর', teamLabel: 'দল / গ্রুপের নাম <small>(ঐচ্ছিক)</small>', formHint: 'শুধু ডেমো: আপনার তথ্য এই ব্রাউজারেই থাকবে, সার্ভারে পাঠানো হবে না।', confirmButton: 'ডেমো বুকিং নিশ্চিত করুন', summaryKicker: 'আপনার ম্যাচ পরিকল্পনা', summaryTitle: 'বুকিং সারাংশ', summaryVenue: 'ভেন্যু', summaryAddress: '১২৩ ফুটবল লেন, ঢাকা', summaryDate: 'তারিখ', summaryTime: 'কিক-অফ', summarySession: 'সেশন', summaryRate: 'প্রতি ঘণ্টার মূল্য', estimatedTotal: 'আনুমানিক মোট', summaryNote: 'কোনো পেমেন্ট লাগবে না। এটি একটি নমুনা বুকিং, সরাসরি রিজার্ভেশন নয়।', helpTitle: 'সাহায্য দরকার?', helpText: 'এই ডেমোতে বুকিং বাস্তব টার্ফে পাঠানো হয় না। পরে যোগাযোগের তথ্য যুক্ত করা যাবে।', helpLink: 'মূল্য দেখুন ↗',
      modalKicker: 'আপনার নাম তালিকায় আছে', modalTitle: 'ম্যাচের পরিকল্পনা<br><em>নিশ্চিত হয়েছে।</em>', modalText: 'এটি একটি ডেমো কনফার্মেশন। কোনো বাস্তব রিজার্ভেশন তৈরি হয়নি।', modalDone: 'জোনে ফিরে যান', chooseDate: 'তারিখ বেছে নিন', chooseTime: 'সময় বেছে নিন', daySessionText: 'দিনের সেশন', nightSessionText: 'রাতের সেশন', slotAvailable: 'খালি', slotBooked: 'বুকড', noSlots: 'এই সেশনে কোনো স্লট নেই।', demoConfirm: 'ডেমো বুকিং নিশ্চিত হয়েছে।', selectSlotFirst: 'আগে একটি তারিখ ও সময় বেছে নিন।', invalidPhone: 'সঠিক মোবাইল নম্বর লিখুন।'
    }
  };

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  let currentLanguage = 'en';

  function applyLanguage(language) {
    currentLanguage = language;
    document.documentElement.lang = language === 'bn' ? 'bn' : 'en';
    document.body.classList.toggle('lang-bn', language === 'bn');
    $$('[data-language-label]').forEach(el => { el.textContent = language === 'bn' ? 'English' : 'বাংলা'; });
    $$('[data-language-toggle]').forEach(el => { el.setAttribute('aria-label', language === 'bn' ? 'Switch to English' : 'বাংলায় দেখুন'); });
    $$('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (language === 'bn' && translations.bn[key]) el.innerHTML = translations.bn[key];
      else if (language === 'en') el.innerHTML = el.dataset.originalText || el.innerHTML;
    });
    $$('[data-i18n-placeholder]').forEach(el => {
      if (!el.dataset.originalPlaceholder) el.dataset.originalPlaceholder = el.placeholder;
      el.placeholder = language === 'bn' ? (translations.bn[el.dataset.i18nPlaceholder] || el.dataset.originalPlaceholder) : el.dataset.originalPlaceholder;
    });
    document.dispatchEvent(new CustomEvent('xy:language', { detail: { language } }));
  }

  // Cache the original English copy once so switching languages is reversible.
  $$('[data-i18n]').forEach(el => { el.dataset.originalText = el.innerHTML; });
  $$('[data-language-toggle]').forEach(button => button.addEventListener('click', () => applyLanguage(currentLanguage === 'en' ? 'bn' : 'en')));

  // Mobile navigation.
  const menuButton = $('.menu-toggle');
  const nav = $('.main-nav');
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!isOpen));
      nav.classList.toggle('open', !isOpen);
    });
    $$('a', nav).forEach(link => link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false');
      nav.classList.remove('open');
    }));
    document.addEventListener('click', event => {
      if (!nav.contains(event.target) && !menuButton.contains(event.target)) {
        menuButton.setAttribute('aria-expanded', 'false');
        nav.classList.remove('open');
      }
    });
  }

  // Homepage quick-book card.
  const quickDate = $('#quick-date');
  const quickBookLink = $('#quick-book-link');
  let quickTime = '19:00';
  function dateToISO(date) {
    const offset = date.getTimezoneOffset();
    return new Date(date.getTime() - offset * 60000).toISOString().slice(0, 10);
  }
  function updateQuickLink() {
    if (!quickBookLink) return;
    const date = quickDate?.value || dateToISO(new Date());
    quickBookLink.href = `booking.html?date=${encodeURIComponent(date)}&time=${encodeURIComponent(quickTime)}`;
  }
  if (quickDate) {
    const today = new Date();
    quickDate.min = dateToISO(today);
    quickDate.value = dateToISO(today);
    quickDate.addEventListener('change', updateQuickLink);
    updateQuickLink();
    $$('[data-quick-time]').forEach(button => button.addEventListener('click', () => {
      $$('[data-quick-time]').forEach(item => item.classList.remove('selected'));
      button.classList.add('selected');
      quickTime = button.dataset.quickTime;
      updateQuickLink();
    }));
  }

  // Review rail.
  const reviewTrack = $('[data-review-track]');
  const reviewCards = reviewTrack ? $$('.review-card', reviewTrack) : [];
  const reviewDots = $$('[data-review-dot]');
  let reviewIndex = 0;
  function goToReview(index) {
    if (!reviewTrack || !reviewCards.length) return;
    reviewIndex = (index + reviewCards.length) % reviewCards.length;
    if (window.matchMedia('(max-width: 520px)').matches) {
      const card = reviewCards[reviewIndex];
      reviewTrack.style.transform = `translateX(-${card.offsetLeft - reviewTrack.offsetLeft}px)`;
    } else {
      reviewTrack.style.transform = '';
    }
    reviewDots.forEach((dot, i) => dot.classList.toggle('active', i === reviewIndex));
  }
  $('[data-review-prev]')?.addEventListener('click', () => goToReview(reviewIndex - 1));
  $('[data-review-next]')?.addEventListener('click', () => goToReview(reviewIndex + 1));
  reviewDots.forEach(dot => dot.addEventListener('click', () => goToReview(Number(dot.dataset.reviewDot))));
  window.addEventListener('resize', () => goToReview(reviewIndex));

  // Booking page interactions.
  const dateStrip = $('[data-date-strip]');
  const slotGrid = $('[data-slot-grid]');
  if (dateStrip && slotGrid) initBooking();

  function initBooking() {
    const params = new URLSearchParams(window.location.search);
    const now = new Date();
    const isoToday = dateToISO(now);
    const requestedDate = params.get('date');
    const requestedTime = params.get('time');
    const dates = Array.from({ length: 7 }, (_, index) => {
      const date = new Date(now.getFullYear(), now.getMonth(), now.getDate() + index);
      return { date, iso: dateToISO(date) };
    });
    let selectedDate = dates.some(item => item.iso === requestedDate) ? requestedDate : isoToday;
    let selectedSession = requestedTime && Number(requestedTime.slice(0, 2)) >= 18 || requestedTime && Number(requestedTime.slice(0, 2)) < 4 ? 'night' : 'day';
    let selectedTime = null;
    let toastTimer;
    const bookingForm = $('[data-booking-form]');
    const toast = $('[data-toast]');
    const modal = $('[data-confirmation-modal]');

    function formatDate(iso, long = false) {
      const date = new Date(`${iso}T12:00:00`);
      const locale = currentLanguage === 'bn' ? 'bn-BD' : 'en-US';
      return date.toLocaleDateString(locale, long ? { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' } : { weekday: 'short', day: 'numeric', month: 'short' });
    }
    function renderDates() {
      dateStrip.innerHTML = dates.map(({ date, iso }) => {
        const locale = currentLanguage === 'bn' ? 'bn-BD' : 'en-US';
        const day = date.toLocaleDateString(locale, { weekday: 'short' });
        const month = date.toLocaleDateString(locale, { month: 'short' });
        const dayNo = date.toLocaleDateString(locale, { day: 'numeric' });
        const active = iso === selectedDate;
        return `<button class="date-card${active ? ' active' : ''}" type="button" data-date="${iso}" aria-pressed="${active}"><span class="date-day">${day}</span><b class="date-number">${dayNo}</b><span class="date-month">${month}</span></button>`;
      }).join('');
      $$('[data-date]', dateStrip).forEach(button => button.addEventListener('click', () => {
        selectedDate = button.dataset.date;
        selectedTime = null;
        renderDates();
        renderSlots();
        updateSummary();
      }));
    }

    const timeLabels = {
      day: [
        ['06:00','6–7 AM'],['07:00','7–8 AM'],['08:00','8–9 AM'],['09:00','9–10 AM'],['10:00','10–11 AM'],['11:00','11 AM–12 PM'],['12:00','12–1 PM'],['13:00','1–2 PM'],['14:00','2–3 PM'],['15:00','3–4 PM'],['16:00','4–5 PM'],['17:00','5–6 PM']
      ],
      night: [
        ['18:00','6–7 PM'],['19:00','7–8 PM'],['20:00','8–9 PM'],['21:00','9–10 PM'],['22:00','10–11 PM'],['23:00','11 PM–12 AM'],['00:00','12–1 AM'],['01:00','1–2 AM'],['02:00','2–3 AM'],['03:00','3–4 AM']
      ]
    };
    const bookedSamples = {
      day: [['08:00','13:00'], ['07:00','11:00','16:00'], ['09:00','14:00'], ['06:00','12:00','17:00'], ['08:00','10:00'], ['11:00','15:00'], ['07:00','13:00'] ],
      night: [['20:00','23:00'], ['19:00','22:00'], ['18:00','21:00','00:00'], ['20:00','01:00'], ['19:00','23:00'], ['21:00','02:00'], ['18:00','22:00'] ]
    };
    function dateIndex() { return Math.max(0, dates.findIndex(item => item.iso === selectedDate)); }
    function getBookedTimes() { return new Set(bookedSamples[selectedSession][dateIndex()] || []); }
    function renderSlots() {
      const booked = getBookedTimes();
      const slots = timeLabels[selectedSession];
      const availableCount = slots.filter(([time]) => !booked.has(time)).length;
      const countEl = $('[data-slot-count]');
      if (countEl) countEl.textContent = `${availableCount} ${currentLanguage === 'bn' ? 'টি খালি' : 'OPEN'}`;
      slotGrid.innerHTML = slots.map(([time, label]) => {
        const isBooked = booked.has(time);
        const isSelected = selectedTime === time;
        const status = isBooked ? (currentLanguage === 'bn' ? 'বুকড' : 'Booked') : (isSelected ? (currentLanguage === 'bn' ? 'নির্বাচিত' : 'Selected') : (currentLanguage === 'bn' ? 'খালি' : 'Available'));
        return `<button type="button" class="slot-card ${isBooked ? 'booked' : 'available'}${isSelected ? ' selected' : ''}" data-slot="${time}" ${isBooked ? 'disabled aria-disabled="true"' : `aria-pressed="${isSelected}"`}><b>${label}</b><small>${status}</small></button>`;
      }).join('');
      $$('[data-slot]:not(:disabled)', slotGrid).forEach(button => button.addEventListener('click', () => {
        selectedTime = button.dataset.slot;
        renderSlots();
        updateSummary();
      }));
    }
    function timeDisplay(time) {
      if (!time) return currentLanguage === 'bn' ? 'সময় বেছে নিন' : 'Choose a time';
      const [hour, minute] = time.split(':').map(Number);
      const suffix = hour >= 12 ? 'PM' : 'AM';
      const h = hour % 12 || 12;
      return `${h}:${String(minute).padStart(2, '0')} ${suffix}`;
    }
    function currentRate() { return selectedSession === 'day' ? 2000 : 2400; }
    function money(value) { return `৳ ${value.toLocaleString('en-IN')}`; }
    function updateSummary() {
      const dateEl = $('[data-summary-date]');
      const timeEl = $('[data-summary-time]');
      const sessionEl = $('[data-summary-session]');
      const priceEl = $('[data-summary-price]');
      const totalEl = $('[data-summary-total]');
      if (dateEl) dateEl.textContent = selectedDate ? formatDate(selectedDate, true) : (currentLanguage === 'bn' ? 'তারিখ বেছে নিন' : 'Choose a date');
      if (timeEl) timeEl.textContent = selectedTime ? timeDisplay(selectedTime) : (currentLanguage === 'bn' ? 'সময় বেছে নিন' : 'Choose a time');
      if (sessionEl) sessionEl.textContent = selectedSession === 'day' ? (currentLanguage === 'bn' ? 'দিনের সেশন' : 'Day session') : (currentLanguage === 'bn' ? 'রাতের সেশন' : 'Night session');
      if (priceEl) priceEl.innerHTML = `${money(currentRate())} <small>/ ${currentLanguage === 'bn' ? 'ঘণ্টা' : 'hour'}</small>`;
      if (totalEl) totalEl.textContent = money(currentRate());
    }
    $$('[data-session]').forEach(button => button.addEventListener('click', () => {
      selectedSession = button.dataset.session;
      selectedTime = null;
      $$('[data-session]').forEach(item => item.classList.toggle('active', item === button));
      renderSlots();
      updateSummary();
    }));

    function showToast(message) {
      const messageEl = $('[data-toast-message]');
      if (!toast) return;
      if (messageEl) messageEl.textContent = message;
      toast.classList.add('show');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => toast.classList.remove('show'), 3600);
    }
    $('[data-toast-close]')?.addEventListener('click', () => toast.classList.remove('show'));

    function openModal(data) {
      if (!modal) return;
      const info = $('[data-modal-info]');
      if (info) {
        const name = data.name;
        const team = data.team ? ` · ${data.team}` : '';
        info.innerHTML = `<b>${escapeHTML(name)}</b>${team}<br>${escapeHTML(formatDate(selectedDate, true))}<br>${escapeHTML(timeDisplay(selectedTime))} · ${money(currentRate())}`;
      }
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      $('[data-modal-close]')?.focus();
      document.body.style.overflow = 'hidden';
    }
    function closeModal() {
      if (!modal) return;
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      showToast(currentLanguage === 'bn' ? 'ডেমো বুকিং নিশ্চিত হয়েছে।' : 'Demo booking confirmed.');
    }
    $$('[data-modal-close]').forEach(button => button.addEventListener('click', closeModal));
    modal?.addEventListener('click', event => { if (event.target === modal) closeModal(); });
    document.addEventListener('keydown', event => { if (event.key === 'Escape' && modal?.classList.contains('open')) closeModal(); });

    function attemptBooking() {
      if (!selectedDate || !selectedTime) {
        showToast(currentLanguage === 'bn' ? 'আগে একটি তারিখ ও সময় বেছে নিন।' : 'Choose a date and time first.');
        slotGrid.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }
      if (bookingForm && !bookingForm.reportValidity()) return;
      const formData = bookingForm ? new FormData(bookingForm) : new FormData();
      const phone = String(formData.get('phone') || '').replace(/[\s()-]/g, '');
      if (!/^\+?[0-9]{10,14}$/.test(phone)) {
        const phoneField = bookingForm?.elements.namedItem('phone');
        phoneField?.setCustomValidity(currentLanguage === 'bn' ? 'সঠিক মোবাইল নম্বর লিখুন।' : 'Please enter a valid mobile number.');
        phoneField?.reportValidity();
        phoneField?.addEventListener('input', () => phoneField.setCustomValidity(''), { once: true });
        return;
      }
      openModal({ name: String(formData.get('name') || 'Guest'), team: String(formData.get('team') || '') });
    }
    bookingForm?.addEventListener('submit', event => { event.preventDefault(); attemptBooking(); });
    $('[data-summary-submit]')?.addEventListener('click', attemptBooking);

    document.addEventListener('xy:language', () => {
      renderDates(); renderSlots(); updateSummary();
    });

    if (requestedDate && dates.some(item => item.iso === requestedDate)) selectedDate = requestedDate;
    if (requestedTime && timeLabels[selectedSession].some(([time]) => time === requestedTime) && !getBookedTimes().has(requestedTime)) selectedTime = requestedTime;
    $$('[data-session]').forEach(button => button.classList.toggle('active', button.dataset.session === selectedSession));
    renderDates();
    renderSlots();
    updateSummary();
  }

  function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
  }
})();
