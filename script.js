$(document).ready(function() {
  $('#login-form').show();
  $('#signup-form').hide();

  $('#login-form button').click(function(event) {
    event.preventDefault();

    // Login code here
    alert('Login successful!');
  });

  $('#signup-form button').click(function(event) {
    event.preventDefault();

    // Signup code here
    alert('Signup successful!');
  });
});
