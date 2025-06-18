// Productos basados en las imágenes disponibles
const products = [
    {
        id: 1,
        name: "Pulsera Elegante #1",
        image: "img/1-5000.jpeg",
        price: 5000,
        description: "Pulsera elegante ideal para uso diario",
        category: "regular"
    },
    {
        id: 2,
        name: "Pulsera Premium #1",
        image: "img/1-8000.jpeg",
        price: 8000,
        description: "Diseño sofisticado con acabados de calidad",
        category: "regular"
    },
    {
        id: 3,
        name: "Pulsera Deluxe #1",
        image: "img/1-16000.jpeg",
        price: 16000,
        description: "Pulsera de lujo con detalles únicos",
        category: "regular"
    },
    {
        id: 4,
        name: "Pulsera Exclusiva #1",
        image: "img/1-20000.jpeg",
        price: 20000,
        description: "Edición exclusiva con materiales premium",
        category: "regular"
    },
    {
        id: 5,
        name: "Pulsera Colección #1",
        image: "img/1-25000.jpeg",
        price: 25000,
        description: "Pieza de colección con diseño único",
        category: "regular"
    },
    {
        id: 6,
        name: "Pulsera Pareja #1",
        image: "img/1-5000-pareja.jpeg",
        price: 5000,
        description: "Pulsera especial para parejas - Set de 2 unidades",
        category: "pareja"
    },
    {
        id: 7,
        name: "Pulsera Elegante #2",
        image: "img/2-5000.jpeg",
        price: 5000,
        description: "Segunda colección - Diseño moderno",
        category: "regular"
    },
    {
        id: 8,
        name: "Pulsera Premium #2",
        image: "img/2-8000.jpeg",
        price: 8000,
        description: "Estilo contemporáneo con acabado brillante",
        category: "regular"
    },
    {
        id: 9,
        name: "Pulsera Deluxe #2",
        image: "img/2-16000.jpeg",
        price: 16000,
        description: "Diseño elegante para ocasiones especiales",
        category: "regular"
    },
    {
        id: 10,
        name: "Pulsera Exclusiva #2",
        image: "img/2-20000.jpeg",
        price: 20000,
        description: "Artesanía fina con detalles meticulosos",
        category: "regular"
    },
    {
        id: 11,
        name: "Pulsera Colección #2",
        image: "img/2-25000.jpeg",
        price: 25000,
        description: "Edición limitada segunda serie",
        category: "regular"
    },
    {
        id: 12,
        name: "Pulsera Pareja #2",
        image: "img/2-5000-pareja.jpeg",
        price: 5000,
        description: "Set romántico para parejas - 2 pulseras",
        category: "pareja"
    },
    {
        id: 13,
        name: "Pulsera Premium #3",
        image: "img/3-8000.jpeg",
        price: 8000,
        description: "Tercera colección con estilo único",
        category: "regular"
    },
    {
        id: 14,
        name: "Pulsera América #3",
        image: "img/3-25000-america.jpeg",
        price: 25000,
        description: "Edición especial inspirada en América",
        category: "regional"
    },
    {
        id: 15,
        name: "Pulsera Elegante #4",
        image: "img/4-5000.jpeg",
        price: 5000,
        description: "Cuarta serie con diseño minimalista",
        category: "regular"
    },
    {
        id: 16,
        name: "Pulsera Premium #4",
        image: "img/4-8000.jpeg",
        price: 8000,
        description: "Estilo moderno con toques clásicos",
        category: "regular"
    },
    {
        id: 17,
        name: "Pulsera Deluxe #4",
        image: "img/4-16000.jpeg",
        price: 16000,
        description: "Diseño sofisticado cuarta generación",
        category: "regular"
    },
    {
        id: 18,
        name: "Pulsera Colección #4",
        image: "img/4-25000.jpeg",
        price: 25000,
        description: "Pieza premium de la cuarta colección",
        category: "regular"
    },
    {
        id: 19,
        name: "Pulsera Elegante #5",
        image: "img/5-5000.jpeg",
        price: 5000,
        description: "Quinta serie con acabado mate",
        category: "regular"
    },
    {
        id: 20,
        name: "Pulsera Premium #5",
        image: "img/5-8000.jpeg",
        price: 8000,
        description: "Diseño versátil para cualquier ocasión",
        category: "regular"
    },
    {
        id: 21,
        name: "Pulsera Deluxe #5",
        image: "img/5-16000.jpeg",
        price: 16000,
        description: "Elegancia refinada quinta edición",
        category: "regular"
    },
    {
        id: 22,
        name: "Pulsera Cali #5",
        image: "img/5-25000-cali.jpeg",
        price: 25000,
        description: "Edición especial Cali - Orgullo vallecaucano",
        category: "regional"
    },
    {
        id: 23,
        name: "Pulsera Elegante #6",
        image: "img/6-5000.jpeg",
        price: 5000,
        description: "Sexta colección con estilo juvenil",
        category: "regular"
    },
    {
        id: 24,
        name: "Pulsera Deluxe #6",
        image: "img/6-16000.jpeg",
        price: 16000,
        description: "Diseño atemporal sexta serie",
        category: "regular"
    },
    {
        id: 25,
        name: "Pulsera Colección #6",
        image: "img/6-25000.jpeg",
        price: 25000,
        description: "Obra maestra de la sexta colección",
        category: "regular"
    },
    {
        id: 26,
        name: "Pulsera Elegante #7",
        image: "img/7-5000.jpeg",
        price: 5000,
        description: "Séptima serie con líneas limpias",
        category: "regular"
    },
    {
        id: 27,
        name: "Pulsera Deluxe #7",
        image: "img/7-16000.jpeg",
        price: 16000,
        description: "Lujo accesible séptima edición",
        category: "regular"
    },
    {
        id: 28,
        name: "Pulsera Colección #7",
        image: "img/7-25000.jpeg",
        price: 25000,
        description: "Máxima expresión séptima colección",
        category: "regular"
    },
    {
        id: 29,
        name: "Pulsera Elegante #8",
        image: "img/8-5000.jpeg",
        price: 5000,
        description: "Octava serie con diseño innovador",
        category: "regular"
    },
    {
        id: 30,
        name: "Pulsera Cali #8",
        image: "img/8-16000-cali.jpeg",
        price: 16000,
        description: "Edición Cali premium - Estilo vallecaucano",
        category: "regional"
    },
    {
        id: 31,
        name: "Pulsera Acero Inoxidable #9",
        image: "img/9-16000-aceroinocidable.jpeg",
        price: 16000,
        description: "Pulsera en acero inoxidable - Duración garantizada",
        category: "acero"
    }
];

// Variables globales
let cart = [];
let currentFilter = 'all';

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', function() {
    displayProducts(products);
    updateCartCount();
    setupEventListeners();
    updateMobileCartVisibility();
});

// Configurar event listeners
function setupEventListeners() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentFilter = button.getAttribute('data-filter');
            filterProducts(currentFilter);
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    document.getElementById('cartOverlay').addEventListener('click', function(e) {
        if (e.target === this) {
            toggleCart();
        }
    });

    // Event listeners para móvil
    document.getElementById('mobileMenuOverlay').addEventListener('click', function(e) {
        if (e.target === this) {
            toggleMobileMenu();
        }
    });

    document.getElementById('mobileCartOverlay').addEventListener('click', function(e) {
        if (e.target === this) {
            toggleMobileCart();
        }
    });
}

function displayProducts(productsToShow) {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';
    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-category', product.category);
    
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-price">$${product.price.toLocaleString()} COP</div>
            <button class="add-to-cart" onclick="addToCart(${product.id})">
                <i class="fas fa-shopping-cart"></i> Agregar al Carrito
            </button>
        </div>
    `;
    return card;
}

function filterProducts(filter) {
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
            card.classList.remove('hidden');
            card.classList.add('show');
        } else {
            card.classList.add('hidden');
            card.classList.remove('show');
        }
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCartDisplay();
    updateCartCount();
    showCartNotification();
    updateMobileCartDisplay();
}

function showCartNotification() {
    const cartIcon = document.querySelector('.cart-icon');
    cartIcon.style.transform = 'scale(1.2)';
    setTimeout(() => { cartIcon.style.transform = 'scale(1)'; }, 200);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
    updateCartCount();
    updateMobileCartDisplay();
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartDisplay();
            updateCartCount();
            updateMobileCartDisplay();
        }
    }
}

function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    const mobileCartCount = document.querySelector('.mobile-cart-count');
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    
    if (cartCount) cartCount.textContent = totalItems;
    if (mobileCartCount) mobileCartCount.textContent = totalItems;
    
    updateMobileCartVisibility();
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #666; padding: 2rem;">Tu carrito está vacío</p>';
        cartTotal.textContent = '0';
        return;
    }
    
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">$${item.price.toLocaleString()} COP</div>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    <button class="remove-item" onclick="removeFromCart(${item.id})">Eliminar</button>
                </div>
            </div>
        `;
        cartItems.appendChild(cartItem);
        total += item.price * item.quantity;
    });
    
    cartTotal.textContent = total.toLocaleString();
    
    // Update mobile cart totals
    updateMobileCartTotals(total);
}

function updateMobileCartTotals(total) {
    const mobileCartTotal = document.getElementById('mobileCartTotal');
    const mobileCartTotalFooter = document.getElementById('mobileCartTotalFooter');
    
    if (mobileCartTotal) mobileCartTotal.textContent = total.toLocaleString();
    if (mobileCartTotalFooter) mobileCartTotalFooter.textContent = total.toLocaleString();
}

function toggleCart() {
    const cartOverlay = document.getElementById('cartOverlay');
    cartOverlay.classList.toggle('active');
    updateCartDisplay();
}

function checkout() {
    if (cart.length === 0) {
        alert('Tu carrito está vacío');
        return;
    }
    
    // Cerrar carrito móvil si está abierto
    const mobileCartOverlay = document.getElementById('mobileCartOverlay');
    if (mobileCartOverlay.classList.contains('active')) {
        toggleMobileCart();
    }
    
    let message = '¡Hola! Me interesa comprar las siguientes pulseras:\n\n';
    let total = 0;
    
    cart.forEach(item => {
        const subtotal = item.price * item.quantity;
        message += `• ${item.name}\n`;
        message += `  Cantidad: ${item.quantity}\n`;
        message += `  Precio unitario: $${item.price.toLocaleString()} COP\n`;
        message += `  Subtotal: $${subtotal.toLocaleString()} COP\n\n`;
        total += subtotal;
    });
    
    message += `💰 TOTAL: $${total.toLocaleString()} COP\n\n`;
    message += 'Por favor, confirma la disponibilidad y los detalles del envío. ¡Gracias!';
    
    const phoneNumber = '573176150649';
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappURL, '_blank');
}

// Funciones para móvil
function toggleMobileMenu() {
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    
    mobileMenuOverlay.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
}

function toggleMobileCart() {
    const mobileCartOverlay = document.getElementById('mobileCartOverlay');
    mobileCartOverlay.classList.toggle('active');
    updateMobileCartDisplay();
}

function updateMobileCartDisplay() {
    const mobileCartItems = document.getElementById('mobileCartItems');
    
    if (cart.length === 0) {
        mobileCartItems.innerHTML = '<p style="text-align: center; color: #666; padding: 2rem;">Tu carrito está vacío</p>';
        return;
    }
    
    mobileCartItems.innerHTML = '';
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">$${item.price.toLocaleString()} COP</div>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    <button class="remove-item" onclick="removeFromCart(${item.id})">Eliminar</button>
                </div>
            </div>
        `;
        mobileCartItems.appendChild(cartItem);
    });
}

function updateMobileCartVisibility() {
    const mobileCartBottom = document.getElementById('mobileCartBottom');
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    
    if (totalItems > 0) {
        mobileCartBottom.classList.add('show');
    } else {
        mobileCartBottom.classList.remove('show');
    }
} 