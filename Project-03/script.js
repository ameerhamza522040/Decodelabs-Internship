/* =============================================================
   PROJECT 3 — INTERACTIVE WEB ELEMENTS
   -------------------------------------------------------------
   Every feature below follows the same 3-step pattern
   (this is the "IPO loop" from your training slides):

   1. INPUT   -> select the element(s) + listen for an event
   2. PROCESS -> run a function that decides what should happen
   3. OUTPUT  -> update the DOM so the user sees the change

   We wrap everything in "DOMContentLoaded" to make sure the
   full HTML page has loaded BEFORE JavaScript tries to grab
   any elements. If we skip this, document.querySelector() might
   return null because the element doesn't exist yet.
============================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ===========================================================
     FEATURE 1: DARK MODE TOGGLE
     Concept: classList.toggle() + localStorage (remembers choice)
  =========================================================== */

  // 1. INPUT: grab the button and the label text inside it
  const themeToggleBtn = document.querySelector('.js-theme-toggle');
  const themeLabel = document.querySelector('.js-theme-label');

  // Helper function that actually applies the theme.
  // We separate this out so we can reuse it both on page load
  // AND when the button is clicked (DRY principle).
  function applyTheme(isDark) {
    document.body.classList.toggle('dark-mode', isDark);
    themeLabel.textContent = isDark ? 'Light Mode' : 'Dark Mode';
  }

  // On page load, check if the user chose dark mode last time.
  // localStorage lets us save small pieces of data in the browser
  // that survive even after the page is refreshed.
  const savedTheme = localStorage.getItem('theme');
  applyTheme(savedTheme === 'dark');

  // 2 & 3. PROCESS + OUTPUT: when clicked, flip the theme and save it
  themeToggleBtn.addEventListener('click', () => {
    const isDarkNow = !document.body.classList.contains('dark-mode');
    applyTheme(isDarkNow);
    localStorage.setItem('theme', isDarkNow ? 'dark' : 'light');
  });


  /* ===========================================================
     FEATURE 2: MOBILE HAMBURGER MENU
     Concept: toggling a class to show/hide the nav on small screens
  =========================================================== */

  const hamburgerBtn = document.querySelector('.js-hamburger-btn');
  const mainNav = document.querySelector('.js-main-nav');

  hamburgerBtn.addEventListener('click', () => {
    // classList.toggle() adds the class if it's missing,
    // and removes it if it's already there — perfect for on/off switches.
    const isOpen = mainNav.classList.toggle('is-open');

    // aria-expanded tells screen readers whether the menu is open.
    // Good accessibility practice, and it's free to add!
    hamburgerBtn.setAttribute('aria-expanded', isOpen);
  });


  /* ===========================================================
     FEATURE 3: SHOW / HIDE TOGGLE BOX
     Concept: simplest possible "input -> process -> output" loop
  =========================================================== */

  const toggleBoxBtn = document.querySelector('.js-toggle-box-btn');
  const toggleBoxLabel = document.querySelector('.js-toggle-box-label');
  const revealBox = document.querySelector('.js-reveal-box');

  toggleBoxBtn.addEventListener('click', () => {
    const isVisible = revealBox.classList.toggle('is-visible');
    // We also update the button's own text so it always makes sense
    toggleBoxLabel.textContent = isVisible ? 'Hide Details' : 'Show Details';
  });


  /* ===========================================================
     FEATURE 4: LIVE COUNTER (STATE MANAGEMENT)
     Concept: a variable ("state") that JS keeps track of in memory,
     and the DOM is just a reflection of that variable's value.
  =========================================================== */

  const counterValueEl = document.querySelector('.js-counter-value');
  const incrementBtn = document.querySelector('.js-increment-btn');
  const decrementBtn = document.querySelector('.js-decrement-btn');
  const resetBtn = document.querySelector('.js-reset-btn');

  // "let" because this value WILL change — that's the whole point.
  let count = 0;

  // A single function that keeps the DOM in sync with our variable.
  // Whenever "count" changes, we call this to push the update to screen.
  function renderCounter() {
    // textContent is SAFE — it never runs any code, just inserts plain text.
    // (innerHTML would be riskier here, even though it's not user input.)
    counterValueEl.textContent = count;
  }

  incrementBtn.addEventListener('click', () => {
    count = count + 1;   // update the STATE first...
    renderCounter();     // ...then update the DOM to match it
  });

  decrementBtn.addEventListener('click', () => {
    count = count - 1;
    renderCounter();
  });

  resetBtn.addEventListener('click', () => {
    count = 0;
    renderCounter();
  });


  /* ===========================================================
     FEATURE 5: FAQ ACCORDION
     Concept: looping through a group of similar elements with
     document.querySelectorAll(), and only allowing ONE to be
     open at a time (shared state across multiple items).
  =========================================================== */

  // querySelectorAll returns a LIST of every matching element,
  // not just the first one — that's why we loop over it with forEach.
  const faqItems = document.querySelectorAll('.js-faq-item');

  faqItems.forEach((item) => {
    const questionBtn = item.querySelector('.js-faq-question');

    questionBtn.addEventListener('click', () => {
      const isAlreadyOpen = item.classList.contains('is-open');

      // First, close every FAQ item (so only one is ever open).
      faqItems.forEach((otherItem) => {
        otherItem.classList.remove('is-open');
      });

      // Then, if the clicked one WASN'T already open, open it.
      // (If it WAS already open, we leave it closed — this creates
      // the "click again to close" behaviour.)
      if (!isAlreadyOpen) {
        item.classList.add('is-open');
      }
    });
  });


  /* ===========================================================
     FEATURE 6: LIVE FORM VALIDATION
     Concept: listening to "input" events (fires on every keystroke)
     and giving the user instant feedback before they submit.
  =========================================================== */

  const nameInput = document.querySelector('.js-name-input');
  const nameHint = document.querySelector('.js-name-hint');
  const emailInput = document.querySelector('.js-email-input');
  const emailHint = document.querySelector('.js-email-hint');
  const submitBtn = document.querySelector('.js-submit-btn');
  const miniForm = document.querySelector('.js-mini-form');
  const formSuccess = document.querySelector('.js-form-success');

  // A simple, readable regular expression to check "is this a valid-looking email?"
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // This function checks BOTH fields and decides if the Submit
  // button should be enabled. We call it after every keystroke.
  function validateForm() {
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();

    // --- Validate name ---
    const isNameValid = nameValue.length >= 2;
    nameInput.classList.toggle('is-valid', isNameValid && nameValue.length > 0);
    nameInput.classList.toggle('is-invalid', !isNameValid && nameValue.length > 0);
    nameHint.textContent = nameValue.length === 0
      ? ''
      : isNameValid ? 'Looks good!' : 'Name must be at least 2 characters.';
    nameHint.classList.toggle('is-success', isNameValid && nameValue.length > 0);
    nameHint.classList.toggle('is-error', !isNameValid && nameValue.length > 0);

    // --- Validate email ---
    const isEmailValid = emailPattern.test(emailValue);
    emailInput.classList.toggle('is-valid', isEmailValid);
    emailInput.classList.toggle('is-invalid', !isEmailValid && emailValue.length > 0);
    emailHint.textContent = emailValue.length === 0
      ? ''
      : isEmailValid ? 'Looks good!' : 'Please enter a valid email address.';
    emailHint.classList.toggle('is-success', isEmailValid);
    emailHint.classList.toggle('is-error', !isEmailValid && emailValue.length > 0);

    // --- Enable/disable submit button based on BOTH fields ---
    submitBtn.disabled = !(isNameValid && isEmailValid);
  }

  // "input" fires every time the user types, deletes, or pastes text
  nameInput.addEventListener('input', validateForm);
  emailInput.addEventListener('input', validateForm);

  // When the form is submitted, stop the default page-reload behaviour
  // and instead show our own success message using JavaScript.
  miniForm.addEventListener('submit', (event) => {
    event.preventDefault(); // stops the browser from reloading the page

    formSuccess.classList.add('is-visible');
    miniForm.reset();       // clears the input fields
    validateForm();         // re-run validation so button disables again
  });

});