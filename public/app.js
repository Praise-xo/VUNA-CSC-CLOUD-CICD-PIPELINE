const form = document.getElementById('payment-form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent default form submission

  // Simulate form validation (replace with actual validation logic)
  const studentName = document.getElementById('student-name').value;
  const matricNumber = document.getElementById('matric-number').value;
  const cardNumber = document.getElementById('card-number').value;
  const expiryDate = document.getElementById('expiry-date').value;
  const cvv = document.getElementById('cvv').value;

  if (!studentName || !matricNumber || !cardNumber || !expiryDate || !cvv) {
    alert('Please fill out all required fields.');
    return;
  }

  // Simulate form submission (replace with actual payment processing)
  alert(`Processing payment for ${studentName} with Matric Number ${matricNumber}`);
});