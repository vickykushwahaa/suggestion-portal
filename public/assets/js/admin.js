// Login functionality
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorElement = document.getElementById('loginError');
    
    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      
      const result = await response.json();
      
      if (response.ok) {
        window.location.href = '/admin';
      } else {
        errorElement.textContent = result.error || 'Login failed';
      }
    } catch (error) {
      console.error('Error:', error);
      errorElement.textContent = 'Network error. Please try again.';
    }
  });
}

// Admin dashboard functionality
const logoutBtn = document.getElementById('logoutBtn');
const searchInput = document.getElementById('searchInput');
const tableBody = document.querySelector('#submissionsTable tbody');

if (logoutBtn) {
  logoutBtn.addEventListener('click', async () => {
    try {
      await fetch('/api/admin/logout', { method: 'POST' });
      window.location.href = '/login';
    } catch (error) {
      console.error('Logout error:', error);
    }
  });
}

// Load submissions
async function loadSubmissions(search = '') {
  try {
    const response = await fetch('/api/admin/submissions');
    if (!response.ok) {
      if (response.status === 403) {
        window.location.href = '/login';
      }
      throw new Error('Failed to fetch data');
    }
    
    const submissions = await response.json();
    
    // Filter if search term exists
    const filtered = search 
      ? submissions.filter(sub => 
          sub.name.toLowerCase().includes(search.toLowerCase()) ||
          sub.email.toLowerCase().includes(search.toLowerCase()) ||
          sub.phone.includes(search))
      : submissions;
    
    // Render table
    tableBody.innerHTML = filtered.map(sub => `
      <tr>
        <td>${sub.name}</td>
        <td>${sub.email}</td>
        <td>${sub.phone}</td>
        <td>${sub.description || '-'}</td>
        <td>${new Date(sub.createdAt).toLocaleString()}</td>
      </tr>
    `).join('');
  } catch (error) {
    console.error('Error loading submissions:', error);
  }
}

// Initialize admin dashboard
if (tableBody) {
  // Load initial data
  loadSubmissions();
  
  // Setup search
  searchInput.addEventListener('input', (e) => {
    loadSubmissions(e.target.value);
  });
}