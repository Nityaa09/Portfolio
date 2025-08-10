function sendMessage() {
      alert("Thank you! Your message has been sent.");
    }
 document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const formData = {
      name: this.name.value,
      email: this.email.value,
      message: this.message.value
    };

    const res = await fetch('/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const data = await res.json();
    if (data.success) {
      alert("Thank you! Your message was sent.");
      this.reset();
    } else {
      alert("Something went wrong.");
    }
  });