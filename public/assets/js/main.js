document.getElementById('joinForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Clear previous errors
    document.querySelectorAll('.error').forEach(el => el.textContent = '');
    
    // Get form values
    const formData = {
      name: document.getElementById('name').value.trim(),
      phone: document.getElementById('phone').value.trim(),
      email: document.getElementById('email').value.trim(),
      description: document.getElementById('description').value.trim()
    };
    
    // Validate
    let isValid = true;
    
    if (!formData.name) {
      document.getElementById('nameError').textContent = 'Name is required';
      isValid = false;
    }
    
    if (!formData.phone) {
      document.getElementById('phoneError').textContent = 'Phone is required';
      isValid = false;
    } else if (!/^\d{10,}$/.test(formData.phone)) {
      document.getElementById('phoneError').textContent = 'Invalid phone number';
      isValid = false;
    }
    
    if (!formData.email) {
      document.getElementById('emailError').textContent = 'Email is required';
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      document.getElementById('emailError').textContent = 'Invalid email format';
      isValid = false;
    }
    
    if (!isValid) return;
    
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const result = await response.json();
      const message = document.getElementById('message');
      
      if (response.ok) {
        message.textContent = 'Thank you for your submission!';
        message.className = 'message success';
        document.getElementById('joinForm').reset();
      } else {
        message.textContent = result.error || 'Error submitting form';
        message.className = 'message error';
      }
    } catch (error) {
      console.error('Error:', error);
      document.getElementById('message').textContent = 'Network error. Please try again.';
      document.getElementById('message').className = 'message error';
    }
  });