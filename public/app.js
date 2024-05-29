document.getElementById('payment-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const matricNumber = document.getElementById('matric-number').value;
  const email = document.getElementById('email').value;
  const cardNumber = document.getElementById('card-number').value;
  const expiryDate = document.getElementById('expiry-date').value;
  const cvv = document.getElementById('cvv').value;

  if (!validateCardNumber(cardNumber)) {
      alert('Please enter a valid card number.');
      return;
  }

  alert('Payment submitted successfully!');
});

function validateCardNumber(cardNumber) {
  // Simple validation for card number (just checks for 16 digits)
  const regex = /^\d{16}$/;
  return regex.test(cardNumber);
}
