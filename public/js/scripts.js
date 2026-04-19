/**
 * Kawaii API - Functional Scripts
 */

let sfwCategories = [];
let nsfwCategories = [];
let currentUser = null;

// Initialize when DOM is ready
window.addEventListener('DOMContentLoaded', () => {
    initApp();
});

async function initApp() {
    // 1. Initial State
    setupSidebarToggle();
    setupAuthListeners();
    
    // 2. Load Data
    try {
        await Promise.all([
            fetchCategories(),
            checkAuth()
        ]);
        
        // 3. Render initial view (Waifu SFW by default)
        loadGallery('sfw', 'waifu');
    } catch (err) {
        console.error("Initialization failed:", err);
    }
}

function setupSidebarToggle() {
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }
}

async function fetchCategories() {
    const [sfwRes, nsfwRes] = await Promise.all([
        axios.get('/api/v1/endpoints/sfw'),
        axios.get('/api/v1/endpoints/nsfw')
    ]);
    
    sfwCategories = sfwRes.data;
    nsfwCategories = nsfwRes.data;
    
    renderCategoryMenu();
}

function renderCategoryMenu() {
    const navContainer = document.querySelector('#sidenavAccordion .nav');
    
    // Clear existing menu after Home and Docs
    const homeLink = navContainer.children[0].cloneNode(true);
    const docsLink = navContainer.children[1].cloneNode(true);
    const uploadLink = navContainer.children[2].cloneNode(true);
    const githubLink = navContainer.children[3].cloneNode(true);
    
    navContainer.innerHTML = '';
    navContainer.appendChild(homeLink);
    navContainer.appendChild(docsLink);
    
    // SFW Section
    const sfwHeader = document.createElement('div');
    sfwHeader.className = 'sb-sidenav-menu-heading';
    sfwHeader.textContent = 'SFW Categories';
    navContainer.appendChild(sfwHeader);
    
    sfwCategories.forEach(cat => {
        navContainer.appendChild(createCategoryLink('sfw', cat));
    });
    
    // NSFW Section
    const nsfwHeader = document.createElement('div');
    nsfwHeader.className = 'sb-sidenav-menu-heading';
    nsfwHeader.textContent = 'NSFW Categories';
    navContainer.appendChild(nsfwHeader);
    
    nsfwCategories.forEach(cat => {
        navContainer.appendChild(createCategoryLink('nsfw', cat));
    });
    
    navContainer.appendChild(document.createElement('hr'));
    navContainer.appendChild(uploadLink);
    navContainer.appendChild(githubLink);
}

function createCategoryLink(type, category) {
    const a = document.createElement('a');
    a.className = 'nav-link category-link';
    a.href = '#';
    a.dataset.type = type;
    a.dataset.category = category;
    a.innerHTML = `<div class="sb-nav-link-icon"><i class="fas fa-tag"></i></div> ${category}`;
    
    a.addEventListener('click', (e) => {
        e.preventDefault();
        loadGallery(type, category);
        if (window.innerWidth < 992) {
            document.body.classList.add('sb-sidenav-toggled');
        }
    });
    
    return a;
}

async function checkAuth() {
    try {
        const response = await axios.get('/api/v1/user_data');
        currentUser = response.data;
        if (currentUser && !currentUser.message) {
            setLogged(currentUser);
        } else {
            setNotLogged();
        }
    } catch (err) {
        setNotLogged();
    }
}

function setLogged(user) {
    const loginBtn = document.getElementById('usermenu-action');
    loginBtn.textContent = 'Logout';
    loginBtn.dataset.action = 'logout';
    
    document.getElementById('username').textContent = user.name;
    
    if (user.admin) {
        const adminPanel = document.getElementById('admin-panel');
        adminPanel.classList.remove('d-none');
        setupAdminListeners();
    }
}

function setNotLogged() {
    const loginBtn = document.getElementById('usermenu-action');
    loginBtn.textContent = 'Login with Discord';
    loginBtn.dataset.action = 'login';
    document.getElementById('username').textContent = 'Not Logged';
    document.getElementById('admin-panel').classList.add('d-none');
}

function setupAuthListeners() {
    const loginBtn = document.getElementById('usermenu-action');
    loginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (loginBtn.dataset.action === 'login') {
            window.location.href = "/auth/discord";
        } else {
            axios.get('/logout').then(() => window.location.reload());
        }
    });

    document.getElementById('uploadLink').addEventListener('click', () => {
        if (!currentUser) {
            alert("You must be logged in to upload!");
            return;
        }
        // Legacy upload trigger or custom one
        if (typeof createUploadTest === 'function') createUploadTest();
    });
}

function setupAdminListeners() {
    document.getElementById('view-pending-images').addEventListener('click', () => {
        loadPendingImages();
    });
}

async function loadGallery(type, category) {
    const gallery = document.getElementById('image-gallery');
    
    gallery.innerHTML = '<div class="col-12 text-center py-5"><div class="spinner-border text-primary"></div></div>';
    
    try {
        // Fetch multiple images for variety
        const requests = Array.from({ length: 12 }, () => axios.get(`/api/v1/${type}/${category}`));
        const results = await Promise.allSettled(requests);
        
        gallery.innerHTML = '';
        results.forEach(res => {
            if (res.status === 'fulfilled' && res.value.data && res.value.data.url) {
                renderImageCard(gallery, res.value.data.url);
            }
        });
        
        if (gallery.innerHTML === '') {
            gallery.innerHTML = '<div class="col-12 text-center py-5"><h3>No images found in this category.</h3></div>';
        }
    } catch (err) {
        gallery.innerHTML = '<div class="col-12 text-center py-5 text-danger"><h3>Error loading gallery.</h3></div>';
    }
}

function renderImageCard(container, url) {
    const col = document.createElement('div');
    col.className = 'col-sm-6 col-md-4 col-lg-3 mb-4';
    col.innerHTML = `
        <div class="card h-100 shadow-sm">
            <img src="${url}" class="card-img-top img-fluid rounded" alt="Kawaii Image" style="object-fit: cover; height: 250px;" loading="lazy">
            <div class="card-body p-2 text-center">
                <a href="${url}" target="_blank" class="btn btn-sm btn-outline-primary">View Full</a>
            </div>
        </div>
    `;
    container.appendChild(col);
}

async function loadPendingImages() {
    const gallery = document.getElementById('image-gallery');
    
    gallery.innerHTML = '<div class="col-12 text-center py-5"><div class="spinner-border text-primary"></div></div>';
    
    try {
        const response = await axios.get('/api/v1/admin/pending');
        const images = response.data;
        
        gallery.innerHTML = '';
        if (images.length === 0) {
            gallery.innerHTML = '<div class="col-12 text-center py-5"><h3>No pending images! Good job.</h3></div>';
            return;
        }
        
        images.forEach(img => {
            renderAdminCard(gallery, img);
        });
    } catch (err) {
        gallery.innerHTML = '<div class="col-12 text-center py-5 text-danger"><h3>Failed to load pending images.</h3></div>';
    }
}

function renderAdminCard(container, img) {
    const col = document.createElement('div');
    col.className = 'col-md-6 col-lg-4 mb-4';
    col.innerHTML = `
        <div class="card h-100 border-warning shadow-sm" id="admin-card-${img.id}">
            <img src="${img.link}" class="card-img-top" alt="Pending" style="object-fit: contain; height: 200px; background: #eee;">
            <div class="card-body">
                <p class="small mb-1"><strong>ID:</strong> ${img.id}</p>
                <p class="small mb-1"><strong>Category:</strong> ${img.category} (${img.nsfw ? 'NSFW' : 'SFW'})</p>
                <p class="small mb-2"><strong>User:</strong> ${img.userId}</p>
                <div class="d-flex justify-content-between">
                    <button class="btn btn-success btn-sm approve-btn" data-id="${img.id}">Approve</button>
                    <button class="btn btn-danger btn-sm reject-btn" data-id="${img.id}">Reject</button>
                </div>
            </div>
        </div>
    `;
    
    col.querySelector('.approve-btn').addEventListener('click', () => moderateImage(img.id, 'approve'));
    col.querySelector('.reject-btn').addEventListener('click', () => moderateImage(img.id, 'reject'));
    
    container.appendChild(col);
}

async function moderateImage(id, action) {
    try {
        const url = action === 'approve' ? `/api/v1/admin/approve/${id}` : `/api/v1/admin/reject/${id}`;
        const method = action === 'approve' ? 'post' : 'delete';
        
        await axios({ method, url });
        
        const card = document.getElementById(`admin-card-${id}`);
        card.parentElement.classList.add('fade-out');
        setTimeout(() => card.parentElement.remove(), 500);
    } catch (err) {
        alert(`Failed to ${action} image.`);
    }
}