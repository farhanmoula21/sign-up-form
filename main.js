function onChange() {
    const password = document.querySelector('input[name=user-pw]');
    const confirm = document.querySelector('input[name=user-pw-confirm]');
    if (confirm.value === password.value) {
      confirm.setCustomValidity('');
      confirm.nextElementSibling.classList.remove('invalid');

    } else {
      confirm.setCustomValidity('Passwords do not match');
      confirm.nextElementSibling.classList.add('invalid');
    }
  };