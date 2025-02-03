// Theme handling
const themeSwitch = document.getElementById('themeSwitch');
themeSwitch.addEventListener('change', () => {
  document.body.setAttribute('data-theme', themeSwitch.checked ? 'dark' : 'light');
});

// Sidebar toggle
document.getElementById('sidebarCollapse').addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('active');
});

// Sample data
const stats = {
  totalSales: 25024,
  totalExpenses: 14160,
  totalIncome: 10864,
  recentOrders: [
    { id: '85481', name: 'Foldable Mini Drone', status: 'Pending', payment: 'Due' },
    { id: '36521', name: 'LARVENDER KF102 Drone', status: 'Declined', payment: 'Refunded' },
    { id: '49347', name: 'Ruko F11 Pro Drone', status: 'Pending', payment: 'Due' },
    { id: '96995', name: 'Drone with Camera Drone', status: 'Delivered', payment: 'Paid' },
    { id: '22921', name: 'GPS 4k Drone', status: 'Delivered', payment: 'Paid' },
    { id: '81475', name: 'DJI Air 2S', status: 'Pending', payment: 'Due' }
  ],
  recentUpdates: [
    { name: 'Mike Tyson', action: 'received his order of Night lion tech GPS drone', time: '2 Minutes Ago' },
    { name: 'Diana Ayi', action: 'received her order of 2 DJI Air 2S', time: '5 Minutes Ago' },
    { name: 'Mandy Roy', action: 'received his order of LARVENDER KF102 Drone', time: '6 Minutes Ago' }
  ],
  analytics: {
    onlineOrders: { value: 3849, change: '+39%' },
    offlineOrders: { value: 1100, change: '-17%' },
    newCustomers: { value: 849, change: '+25%' }
  }
};

// Page content templates
const pages = {
  dashboard: `
    <div class="row">
      <div class="col-md-4">
        <div class="stat-card">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h6 class="mb-0">Total Sales</h6>
            <div class="icon text-primary">
              <i class="bi bi-currency-dollar fs-4"></i>
            </div>
          </div>
          <h3>$${stats.totalSales.toLocaleString()}</h3>
          <div class="progress mt-3">
            <div class="progress-bar bg-primary" role="progressbar" style="width: 81%" aria-valuenow="81" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <small class="text-muted">Last 24 Hours</small>
        </div>
      </div>
      <div class="col-md-4">
        <div class="stat-card">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h6 class="mb-0">Total Expenses</h6>
            <div class="icon text-danger">
              <i class="bi bi-credit-card fs-4"></i>
            </div>
          </div>
          <h3>$${stats.totalExpenses.toLocaleString()}</h3>
          <div class="progress mt-3">
            <div class="progress-bar bg-danger" role="progressbar" style="width: 62%" aria-valuenow="62" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <small class="text-muted">Last 24 Hours</small>
        </div>
      </div>
      <div class="col-md-4">
        <div class="stat-card">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h6 class="mb-0">Total Income</h6>
            <div class="icon text-success">
              <i class="bi bi-wallet2 fs-4"></i>
            </div>
          </div>
          <h3>$${stats.totalIncome.toLocaleString()}</h3>
          <div class="progress mt-3">
            <div class="progress-bar bg-success" role="progressbar" style="width: 44%" aria-valuenow="44" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <small class="text-muted">Last 24 Hours</small>
        </div>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-md-8">
        <div class="orders-table">
          <div class="d-flex justify-content-between align-items-center mb-4">
            <h5 class="mb-0">Recent Orders</h5>
            <button class="btn btn-primary btn-sm">Show All</button>
          </div>
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Product Number</th>
                  <th>Payment</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                ${stats.recentOrders.map(order => `
                  <tr>
                    <td>${order.name}</td>
                    <td>${order.id}</td>
                    <td>${order.payment}</td>
                    <td><span class="badge bg-${getStatusColor(order.status)}">${order.status}</span></td>
                    <td><a href="#" class="text-primary">Details</a></td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="recent-updates">
          <h5 class="mb-4">Recent Updates</h5>
          ${stats.recentUpdates.map(update => `
            <div class="update-item">
              <img src="https://via.placeholder.com/40" alt="${update.name}">
              <div>
                <p class="mb-0"><strong>${update.name}</strong> ${update.action}</p>
                <small class="text-muted">${update.time}</small>
              </div>
            </div>
          `).join('')}
        </div>
        <div class="stat-card mt-4">
          <h5 class="mb-4">Sales Analytics</h5>
          <div class="d-flex justify-content-between align-items-center mb-3">
            <div>
              <h6 class="mb-1">ONLINE ORDERS</h6>
              <small class="text-success">${stats.analytics.onlineOrders.change}</small>
            </div>
            <h5 class="mb-0">${stats.analytics.onlineOrders.value}</h5>
          </div>
          <div class="d-flex justify-content-between align-items-center mb-3">
            <div>
              <h6 class="mb-1">OFFLINE ORDERS</h6>
              <small class="text-danger">${stats.analytics.offlineOrders.change}</small>
            </div>
            <h5 class="mb-0">${stats.analytics.offlineOrders.value}</h5>
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <h6 class="mb-1">NEW CUSTOMERS</h6>
              <small class="text-success">${stats.analytics.newCustomers.change}</small>
            </div>
            <h5 class="mb-0">${stats.analytics.newCustomers.value}</h5>
          </div>
          <button class="btn btn-primary w-100 mt-4">Add Product</button>
        </div>
      </div>
    </div>
  `
};

// Helper function to get status color
function getStatusColor(status) {
  switch (status.toLowerCase()) {
    case 'pending': return 'warning';
    case 'delivered': return 'success';
    case 'declined': return 'danger';
    default: return 'secondary';
  }
}

// Navigation handling
document.querySelectorAll('[data-page]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const page = e.target.dataset.page;
    loadPage(page);
    
    // Update active state
    document.querySelectorAll('#sidebar li').forEach(item => item.classList.remove('active'));
    e.target.parentElement.classList.add('active');
  });
});

// Load page content
function loadPage(page) {
  const mainContent = document.getElementById('main-content');
  mainContent.innerHTML = pages[page] || '<h2>Page en construction</h2>';
}

// Initial page load
loadPage('dashboard');