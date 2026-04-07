// Product Data
const products = [
    // Roasted Nuts
    { id: 1, name: 'BBQ Cashews', category: 'nuts', price: 9.99, range: '10-25', image: 'https://madenataltybat.com/wp-content/uploads/2024/05/BBQ-Cashews-2--scaled.jpg' },
    { id: 2, name: 'Salted Almonds', category: 'nuts', price: 12.99, range: '10-25', image: 'https://madenataltybat.com/wp-content/uploads/2024/05/Salted-Almond-2-scaled.jpg' },
    { id: 3, name: 'Turkish Pistachio', category: 'nuts', price: 11.99, range: '10-25', image: 'https://madenataltybat.com/wp-content/uploads/2024/05/Turkey-Pistachio-3-scaled.jpg' },
    { id: 4, name: 'Smoked Pecans', category: 'nuts', price: 10.99, range: '10-25', image: 'https://madenataltybat.com/wp-content/uploads/2024/05/Smoked-Pecans-1--scaled.jpg' },
    
    // Spices
    { id: 5, name: 'Thyme Zatar', category: 'spices', price: 7.99, range: 'under-10', image: 'https://madenataltybat.com/wp-content/uploads/2024/05/Thyme-Zatar-2-scaled.jpg' },
    { id: 6, name: 'Sumac Baladi', category: 'spices', price: 8.99, range: 'under-10', image: 'https://madenataltybat.com/wp-content/uploads/2024/05/Sumac-baladi-4-scaled.jpg' },
    { id: 7, name: 'Cumin Powder', category: 'spices', price: 9.99, range: 'under-10', image: 'https://madenataltybat.com/wp-content/uploads/2024/05/Cumin-powder-2-scaled.jpg' },
    { id: 8, name: 'Coriander Powder', category: 'spices', price: 14.99, range: '10-25', image: 'https://madenataltybat.com/wp-content/uploads/2024/05/Coriander-3-scaled.jpg' },
    { id: 9, name: 'Ground Cardamom', category: 'spices', price: 19.99, range: '10-25', image: 'https://madenataltybat.com/wp-content/uploads/2024/05/Ground-cardamom-3-scaled.jpg' },
    { id: 10, name: 'Kabsa Spice', category: 'spices', price: 9.99, range: 'under-10', image: 'https://madenataltybat.com/wp-content/uploads/2024/05/Kabsa-spice-2-scaled.jpg' },
    
    // Chocolates
    { id: 11, name: 'Milk Chocolate w/ Hazelnut', category: 'chocolates', price: 16.50, range: '10-25', image: 'https://madenataltybat.com/wp-content/uploads/2024/05/No-sugar-added-milk-chocolate-w-hazelnut-2-scaled.jpg' },
    { id: 12, name: 'Dark Chocolate w/ Hazelnut', category: 'chocolates', price: 16.50, range: '10-25', image: 'https://madenataltybat.com/wp-content/uploads/2024/05/Dark-Chocolate-w-Hazelnut-6-scaled.jpg' },
    { id: 13, name: 'White Chocolate Filled', category: 'chocolates', price: 15.50, range: '10-25', image: 'https://madenataltybat.com/wp-content/uploads/2024/05/White-Chocolate-filled-gianduja-rice-crispy-3-scaled.jpg' },
    { id: 14, name: 'Milk Chocolate Covered Oreo', category: 'chocolates', price: 17.50, range: '10-25', image: 'https://madenataltybat.com/wp-content/uploads/2024/05/Milk-Chocolate-covered-Oreo-biscuit-4-scaled.jpg' },
    { id: 15, name: 'Hazelnut Covered Dark Chocolate', category: 'chocolates', price: 16.50, range: '10-25', image: 'https://madenataltybat.com/wp-content/uploads/2024/05/Hazelnut-covered-with-dark-chocolate-1-scaled.jpg' },
    
    // Coffee
    { id: 16, name: 'Blonde Coffee Beans', category: 'coffee', price: 8.99, range: 'under-10', image: 'https://madenataltybat.com/wp-content/uploads/2024/05/Blond-Coffee-Beans.jpg' },
    { id: 17, name: 'Dark Coffee Beans', category: 'coffee', price: 9.99, range: 'under-10', image: 'https://madenataltybat.com/wp-content/uploads/2024/05/Dark-Coffee-Beans.jpg' },
    { id: 18, name: 'Premium Roast Blend', category: 'coffee', price: 12.99, range: '10-25', image: 'https://madenataltybat.com/wp-content/uploads/2024/05/Dark-Coffee-Beans.jpg' },
    
    // Dried Fruits
    { id: 19, name: 'Dried Fruit Apricot', category: 'dried-fruits', price: 9.99, range: 'under-10', image: 'https://madenataltybat.com/wp-content/uploads/2024/05/Apricot-dried-fruit-2-scaled.jpg' },
    { id: 20, name: 'Dried Fruit Mango', category: 'dried-fruits', price: 9.99, range: 'under-10', image: 'https://madenataltybat.com/wp-content/uploads/2024/05/Mango-dried-fruit-3-scaled.jpg' },
    { id: 21, name: 'Mixed Raisins', category: 'dried-fruits', price: 9.99, range: 'under-10', image: 'https://madenataltybat.com/wp-content/uploads/2024/05/Mixed-raisins-3-scaled.jpg' },
    { id: 22, name: 'Dried Fruit Pineapple', category: 'dried-fruits', price: 9.99, range: 'under-10', image: 'https://madenataltybat.com/wp-content/uploads/2024/05/PIneapple-dried-fruit-3-scaled.jpg' },
    
    // Gift Accessories
    { id: 23, name: 'Wood Quran Box', category: 'gifts', price: 120.00, range: 'over-50', image: 'https://madenataltybat.com/wp-content/uploads/2024/07/img_5626-scaled.jpeg' },
    { id: 24, name: 'Small Gold Quran Box', category: 'gifts', price: 25.00, range: '25-50', image: 'https://madenataltybat.com/wp-content/uploads/2024/07/img_5630-scaled.jpeg' },
    { id: 25, name: 'Medium Quran Box', category: 'gifts', price: 70.00, range: '25-50', image: 'https://madenataltybat.com/wp-content/uploads/2024/07/img_5617-scaled.jpeg' },
    { id: 26, name: 'Wood Multipurpose Box Palestinian Embroidery', category: 'gifts', price: 50.00, range: '25-50', image: 'https://madenataltybat.com/wp-content/uploads/2024/07/img_5646-scaled.jpeg' },
    { id: 27, name: 'Double Insulated Magic Bag', category: 'gifts', price: 40.00, range: '25-50', image: 'https://madenataltybat.com/wp-content/uploads/2024/07/img_5639-scaled.jpeg' },
];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadProducts(products);
    setupFilters();
});

// Load products to grid
function loadProducts(productsToLoad) {
    const grid = document.getElementById('productsGrid');
    
    if (productsToLoad.length === 0) {
        grid.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1;">
                <h3>No products found</h3>
                <p>Try adjusting your filters</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = productsToLoad.map(product => `
        <div class="product-item">
            <div class="product-image ${product.image ? '' : 'no-image'}">
                ${product.image ? `<img src="${product.image}" alt="${product.name}">` : `<span>${product.name}</span>`}
            </div>
            <div class="product-info">
                <div class="product-category">${capitalizeCategory(product.category)}</div>
                <div class="product-name">${product.name}</div>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <div class="product-actions">
                    <button class="btn-add-cart" onclick="addToCart(${product.id}, '${product.name}', ${product.price})">Add to Cart</button>
                    <button class="btn-view-details" onclick="viewDetails(${product.id})">View</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Setup filters
function setupFilters() {
    const categoryFilters = document.querySelectorAll('.category-filter');
    const priceFilters = document.querySelectorAll('input[name="price"]');
    
    categoryFilters.forEach(filter => {
        filter.addEventListener('change', applyFilters);
    });
    
    priceFilters.forEach(filter => {
        filter.addEventListener('change', applyFilters);
    });
}

// Apply filters
function applyFilters() {
    const categoryFilters = document.querySelectorAll('.category-filter:checked');
    const priceFilter = document.querySelector('input[name="price"]:checked').value;
    
    let selectedCategories = Array.from(categoryFilters).map(f => f.value);
    
    if (selectedCategories.includes('all')) {
        selectedCategories = ['nuts', 'spices', 'chocolates', 'coffee', 'dried-fruits', 'gifts'];
    }
    
    let filtered = products.filter(product => {
        const categoryMatch = selectedCategories.includes(product.category);
        let priceMatch = true;
        
        if (priceFilter !== 'all') {
            priceMatch = product.range === priceFilter;
        }
        
        return categoryMatch && priceMatch;
    });
    
    loadProducts(filtered);
}

// Capitalize category name
function capitalizeCategory(category) {
    return category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Add to cart
function addToCart(id, name, price) {
    alert(`Added "${name}" ($${price.toFixed(2)}) to cart!`);
}

// View details
function viewDetails(id) {
    alert(`Viewing details for product ID: ${id}`);
}
