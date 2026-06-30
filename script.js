
(function initNav(){
  try{
    var toggle = document.querySelector('.nav-toggle');
    var navMenu = document.querySelector('.nav-menu');
    if(!toggle || !navMenu) return;
    toggle.addEventListener('click', function(){
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      navMenu.classList.toggle('is-open', !open);
    });
    var anchors = navMenu.querySelectorAll('a');
    for(var i = 0; i < anchors.length; i++){
      anchors[i].addEventListener('click', function(){
        toggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('is-open');
      });
    }
  }catch(err){  }
})();

var PRODUCTS = [
  {
    id: 'sourdough-classic',
    name: 'Classic Sourdough',
    category: 'breads',
    price: 48000,
    tag: 'Best Seller',
    desc: 'Naturally leavened, 48-hour cold ferment, thick caramelised crust.',
    long: 'Our flagship loaf — wild-yeast starter fed daily, fermented cold for 48 hours so the crumb stays open and lightly tangy. Baked in a wood-fired hearth oven until the crust turns deep amber.',
    icon: 'loaf',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&q=80',
    weight: '700g',
    bake: 'Baked daily, 6AM',
    allergen: 'Wheat, gluten'
  },
  {
    id: 'rustic-baguette',
    name: 'Rustic Baguette',
    category: 'breads',
    price: 28000,
    tag: null,
    desc: 'Crisp, blistered crust with an airy, chewy centre.',
    long: 'A slow-proofed French-style baguette finished with steam injection for that signature blistered, glassy crust and a chewy, irregular crumb.',
    icon: 'baguette',
    image: 'https://images.unsplash.com/photo-1589367920969-ab8e050bfbb7?w=500&q=80',
    weight: '250g',
    bake: 'Baked twice daily',
    allergen: 'Wheat, gluten'
  },
  {
    id: 'honey-wheat-loaf',
    name: 'Honey Wheat Loaf',
    category: 'breads',
    price: 42000,
    tag: 'Fresh',
    desc: 'Soft sandwich loaf sweetened with local hearth honey.',
    long: 'Stone-ground whole wheat folded with local hearth honey for a soft, faintly sweet crumb — built for thick sandwiches and morning toast.',
    icon: 'loaf',
    image: 'https://images.unsplash.com/photo-1598373182133-52452f7691ef?w=500&q=80',
    weight: '500g',
    bake: 'Baked daily, 6AM',
    allergen: 'Wheat, gluten, honey'
  },
  {
    id: 'butter-croissant',
    name: 'Butter Croissant',
    category: 'pastries',
    price: 22000,
    tag: 'Best Seller',
    desc: 'Laminated 27 times with cultured butter, shatter-crisp shell.',
    long: 'Laminated through 27 folds with cultured European-style butter, proofed overnight, then baked until the shell shatters and the inside stays honeycombed and tender.',
    icon: 'croissant',
    image: 'https://images.unsplash.com/photo-1555507036-ab1e4006aa07?w=500&q=80',
    weight: '90g',
    bake: 'Baked daily, 6AM',
    allergen: 'Wheat, gluten, dairy, egg'
  },
  {
    id: 'cinnamon-roll',
    name: 'Hearth Cinnamon Roll',
    category: 'pastries',
    price: 26000,
    tag: 'Fresh',
    desc: 'Brown-butter cinnamon swirl glazed with brown-sugar icing.',
    long: 'Enriched dough rolled with brown-butter cinnamon filling, baked until pillowy, then finished with a warm brown-sugar glaze while still hot from the oven.',
    icon: 'cinnamon',
    image: 'https://images.unsplash.com/photo-1509365465994-3d8eb5127214?w=500&q=80',
    weight: '140g',
    bake: 'Baked daily, 7AM',
    allergen: 'Wheat, gluten, dairy, egg'
  },
  {
    id: 'sourdough-pretzel',
    name: 'Sourdough Pretzel',
    category: 'pastries',
    price: 24000,
    tag: null,
    desc: 'Lye-dipped, deep mahogany shell, coarse sea salt.',
    long: 'Our sourdough discard finds its way into this lye-dipped pretzel — a deep mahogany shell, soft chewy interior, finished with coarse sea salt.',
    icon: 'pretzel',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500&q=80',
    weight: '110g',
    bake: 'Baked daily, 7AM',
    allergen: 'Wheat, gluten'
  },
  {
    id: 'apple-pie',
    name: 'Hearth Apple Pie',
    category: 'pies',
    price: 95000,
    tag: 'Best Seller',
    desc: 'All-butter lattice crust, slow-stewed orchard apples.',
    long: 'A double all-butter crust encasing slow-stewed orchard apples, brown sugar, and warm spice — finished with a hand-woven lattice and an egg wash glaze.',
    icon: 'pie',
    image: 'https://images.unsplash.com/photo-1587248720327-8eb72564be1e?w=500&q=80',
    weight: '20cm',
    bake: 'Baked Thu–Sun',
    allergen: 'Wheat, gluten, dairy, egg'
  },
  {
    id: 'pecan-pie',
    name: 'Bourbon Pecan Pie',
    category: 'pies',
    price: 110000,
    tag: 'Fresh',
    desc: 'Toasted pecans set in a bourbon-caramel custard.',
    long: 'Toasted whole pecans set into a deep bourbon-caramel custard inside a blind-baked all-butter shell — rich, dense, and best served slightly warm.',
    icon: 'pie',
    image: 'https://images.unsplash.com/photo-1601000938259-9e92002320b2?w=500&q=80',
    weight: '20cm',
    bake: 'Baked Thu–Sun',
    allergen: 'Wheat, gluten, dairy, egg, nuts'
  },
  {
    id: 'farmhouse-rye',
    name: 'Farmhouse Rye',
    category: 'breads',
    price: 46000,
    tag: null,
    desc: 'Dense, dark, and earthy with caraway seed.',
    long: 'A dense, dark rye built for slicing thin — earthy, faintly sour, studded with caraway seed. Pairs well with cured meats and sharp cheese.',
    icon: 'loaf',
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=500&q=80',
    weight: '650g',
    bake: 'Baked daily, 6AM',
    allergen: 'Wheat, rye, gluten'
  }
];

function formatPrice(n){
  return 'Rp ' + n.toLocaleString('id-ID');
}

function productIcon(type){
  var icons = {
    loaf: '<svg viewBox="0 0 64 64" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 30c0-12 10-18 24-18s24 6 24 18v14c0 6-10 10-24 10S8 50 8 44V30z"/><path d="M16 26c4-2 9-3 16-3s12 1 16 3" /><path d="M20 34h0M28 33h0M36 34h0M44 33h0" stroke-width="3"/></svg>',
    baguette: '<svg viewBox="0 0 64 64" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 40C20 18 44 14 58 22c2 8-2 16-12 22-16 10-34 8-40-4z"/><path d="M16 30l4 6M24 26l4 7M32 24l4 7M40 24l4 6"/></svg>',
    croissant: '<svg viewBox="0 0 64 64" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 38C6 24 18 12 32 12c8 0 13 4 16 8-6-2-12 0-15 5 5-1 10 1 12 6-5-1-9 1-11 5 4 0 7 2 9 6-8 6-20 8-30 4-4-2-5-6-5-8z"/></svg>',
    cinnamon: '<svg viewBox="0 0 64 64" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="32" cy="32" r="22"/><path d="M32 14a18 18 0 0 1 0 36 12 12 0 0 1 0-24 6 6 0 1 1 0 12"/></svg>',
    pretzel: '<svg viewBox="0 0 64 64" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 14c10 0 6 16 18 16s8-16 18-16c10 0 12 12 4 18-6 4-12 2-12 2s8 4 8 12c0 6-6 10-12 8-4-2-6-6-6-10s-2-8-2-8-2 6-2 10-2 8-6 10c-6 2-12-2-12-8 0-8 8-12 8-12s-6 2-12-2c-8-6-6-18 4-20z"/></svg>',
    pie: '<svg viewBox="0 0 64 64" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 46c0-4 12-8 26-8s26 4 26 8-12 8-26 8-26-4-26-8z"/><path d="M10 44V30c0-12 10-20 22-20s22 8 22 20v14"/><path d="M14 28c4-2 11-3 18-3s14 1 18 3M20 18l3 8M32 14v9M44 18l-3 8"/></svg>'
  };
  return icons[type] || icons.loaf;
}

function wheatMarkSVG(size){
  size = size || 22;
  return '<svg class="wheat-mark" width="'+size+'" height="'+size+'" viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21V5"/><path d="M12 6l-4-3M12 6l4-3M12 10l-4-3M12 10l4-3M12 14l-4-3M12 14l4-3M12 18l-4-3M12 18l4-3"/></svg>';
}

function renderProductGrid(){
  var grid = document.querySelector('[data-product-grid]');
  if(!grid) return;

  var tabs = document.querySelectorAll('.filter-tab');
  var active = 'all';

  function draw(){
    var items = active === 'all' ? PRODUCTS : PRODUCTS.filter(function(p){ return p.category === active; });
    grid.innerHTML = items.map(function(p){
      return '' +
        '<article class="collection-card">' +
          '<a href="product-detail.html?id=' + p.id + '" class="collection-card-art">' +
            '<img src="' + p.image + '" alt="' + p.name + '" style="width:100%;height:100%;object-fit:cover;">' +
          '</a>' +
          '<div class="collection-card-body">' +
            '<div class="collection-card-title">' +
              '<span>' + p.name + '</span>' +
              '<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" style="color:var(--crust);"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>' +
            '</div>' +
            '<div class="collection-card-info">' +
              '<span>' + formatPrice(p.price) + '</span>' +
              '<span style="color:#dcb38a;">1 loaf</span>' +
            '</div>' +
            '<div class="collection-qty">' +
              '<button aria-label="Decrease">-</button>' +
              '<span style="font-size:14px;font-family:var(--body);font-weight:600;">1</span>' +
              '<button aria-label="Increase">+</button>' +
            '</div>' +
            '<div class="collection-buttons">' +
              '<button class="collection-btn collection-btn-cart">Add to Cart</button>' +
              '<button class="collection-btn collection-btn-basket">Add to Basket</button>' +
            '</div>' +
          '</div>' +
        '</article>';
    }).join('');
  }

  tabs.forEach(function(tab){
    tab.addEventListener('click', function(){
      tabs.forEach(function(t){ t.classList.remove('active'); t.setAttribute('aria-pressed','false'); });
      tab.classList.add('active');
      tab.setAttribute('aria-pressed','true');
      active = tab.dataset.filter;
      draw();
    });
  });

  draw();
}

function renderFeatured(){
  var track = document.querySelector('[data-featured-carousel]');
  if(!track) return;
  var items = PRODUCTS.filter(function(p){ return p.tag != null; });
  if (items.length < 5) {
    items = items.concat(PRODUCTS.slice(0, 6 - items.length));
  }
  
  track.innerHTML = items.map(function(p){
    var isHot = p.tag === 'Best Seller' || p.tag === 'Fresh' ? 'HOT' : 'NEW';
    return '' +
      '<div class="carousel-slide">' +
        '<a href="product-detail.html?id=' + p.id + '" class="card-tlj" style="display:block;">' +
          '<div class="card-tlj-art">' +
             '<div class="card-tlj-badge">' + isHot + '</div>' +
             '<img src="' + p.image + '" alt="' + p.name + '" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">' +
          '</div>' +
          '<h3 class="card-tlj-name">' + p.name + '</h3>' +
          '<span class="card-tlj-cat">' + p.category.replace('-', ' ') + '</span>' +
        '</a>' +
      '</div>';
  }).join('');

  var wrap = document.querySelector('.carousel-track-wrap');
  var prevBtn = document.querySelector('.carousel-btn.prev');
  var nextBtn = document.querySelector('.carousel-btn.next');
  
  var currentIndex = 0;
  var slideInterval;

  function getCardsPerView() {
    if (window.innerWidth <= 480) return 1;
    if (window.innerWidth <= 768) return 2;
    return 3;
  }

  function updateCarousel() {
    var cardsPerView = getCardsPerView();
    var maxIndex = items.length - cardsPerView;
    if (currentIndex > maxIndex) currentIndex = 0;
    if (currentIndex < 0) currentIndex = maxIndex;
    
    var slide = track.querySelector('.carousel-slide');
    if(slide) {
       var slideWidth = slide.offsetWidth;
       var gap = 30; 
       var moveAmount = (slideWidth + gap) * currentIndex;
       track.style.transform = 'translateX(-' + moveAmount + 'px)';
    }
  }

  function nextSlide() {
    var cardsPerView = getCardsPerView();
    var maxIndex = items.length - cardsPerView;
    currentIndex++;
    if(currentIndex > maxIndex) currentIndex = 0;
    updateCarousel();
  }

  function prevSlide() {
    var cardsPerView = getCardsPerView();
    var maxIndex = items.length - cardsPerView;
    currentIndex--;
    if(currentIndex < 0) currentIndex = maxIndex;
    updateCarousel();
  }

  nextBtn.addEventListener('click', function() {
    nextSlide();
    resetInterval();
  });
  
  prevBtn.addEventListener('click', function() {
    prevSlide();
    resetInterval();
  });

  function startInterval() {
    slideInterval = setInterval(nextSlide, 5000);
  }

  function resetInterval() {
    clearInterval(slideInterval);
    startInterval();
  }

  window.addEventListener('resize', updateCarousel);
  
  updateCarousel();
  startInterval();
}

function renderSignatureCollections() {
  var grid = document.querySelector('[data-signature-grid]');
  if(!grid) return;
  var items = PRODUCTS.slice(0, 3);
  grid.innerHTML = items.map(function(p){
    return '' +
      '<article class="card" style="border:none; background:transparent;">' +
        '<a href="product-detail.html?id=' + p.id + '" class="card-art" style="border-radius:20px; overflow:hidden;">' +
          (p.tag ? '<span class="card-tag">' + p.tag + '</span>' : '') +
          '<img src="' + p.image + '" alt="' + p.name + '" style="width:100%;height:100%;object-fit:cover;">' +
        '</a>' +
        '<div class="card-body" style="background:var(--bg); border-radius:20px; margin-top:-20px; position:relative; z-index:2; padding:20px; box-shadow:0 10px 20px rgba(0,0,0,0.05); border:1px solid var(--line);">' +
          '<span class="card-cat" style="color:var(--crust);">' + p.category + '</span>' +
          '<h3 style="color:var(--crust-dark); font-size:20px; margin:5px 0;">' + p.name + '</h3>' +
          '<div style="display:flex; justify-content:space-between; align-items:center; margin-top:15px;">' +
             '<span class="price" style="color:#d1754f; font-weight:bold;">' + formatPrice(p.price) + '</span>' +
             '<a class="btn btn--primary btn--pill" href="product-detail.html?id=' + p.id + '" style="border-radius:30px; padding:8px 16px; font-size:14px;">Add to Cart</a>' +
          '</div>' +
        '</div>' +
      '</article>';
  }).join('');
}

function initTestiSlider() {
  var container = document.querySelector('[data-testi-slider]');
  if(!container) return;
  var cards = Array.from(container.querySelectorAll('.testi-card'));
  var prevBtn = document.querySelector('.testi-btn.prev');
  var nextBtn = document.querySelector('.testi-btn.next');
  if(!cards.length || !prevBtn || !nextBtn) return;

  var currentIndex = 0;

  function updateCards() {
    cards.forEach(function(card, index) {
      card.style.opacity = '0';
      card.style.zIndex = '0';
      card.style.transform = 'scale(0.8)';
      card.style.right = '40px';
      card.style.top = '60px';
    });

    var c0 = cards[currentIndex];
    var c1 = cards[(currentIndex + 1) % cards.length];
    var c2 = cards[(currentIndex + 2) % cards.length];

    c0.style.opacity = '1';
    c0.style.zIndex = '3';
    c0.style.transform = 'scale(1)';
    c0.style.right = '0';
    c0.style.top = '0';

    c1.style.opacity = '0.8';
    c1.style.zIndex = '2';
    c1.style.transform = 'scale(0.95)';
    c1.style.right = '20px';
    c1.style.top = '30px';

    c2.style.opacity = '0.6';
    c2.style.zIndex = '1';
    c2.style.transform = 'scale(0.9)';
    c2.style.right = '40px';
    c2.style.top = '60px';
  }

  nextBtn.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCards();
  });

  prevBtn.addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateCards();
  });
  
  updateCards();
}

function renderProductDetail(){
  var root = document.querySelector('[data-detail-root]');
  if(!root) return;

  var params = new URLSearchParams(window.location.search);
  var id = params.get('id');
  var product = PRODUCTS.find(function(p){ return p.id === id; }) || PRODUCTS[0];

  if(!product){
    root.style.display = 'none';
    document.getElementById('detail-empty').style.display = 'block';
    return;
  }

  document.title = product.name + ' — Hearth & Wheat';
  var breadcrumb = document.querySelector('[data-breadcrumb-name]');
  if(breadcrumb) breadcrumb.textContent = product.name;

  var qty = 1;
  var qtyEl = document.querySelector('[data-qty]');

  root.querySelector('[data-detail-icon]').innerHTML = '<img src="' + product.image + '" alt="' + product.name + '" style="width:100%;height:100%;object-fit:cover;">';
  root.querySelector('[data-detail-cat]').textContent = product.category;
  root.querySelector('[data-detail-name]').textContent = product.name;
  root.querySelector('[data-detail-price]').textContent = formatPrice(product.price);
  root.querySelector('[data-detail-desc]').textContent = product.long;
  root.querySelector('[data-detail-weight]').textContent = product.weight;
  root.querySelector('[data-detail-bake]').textContent = product.bake;
  root.querySelector('[data-detail-allergen]').textContent = product.allergen;

  var tagEl = root.querySelector('[data-detail-tag]');
  if(product.tag){ tagEl.textContent = product.tag; tagEl.style.display = 'inline-flex'; }
  else { tagEl.style.display = 'none'; }

  function updateQty(){ qtyEl.textContent = qty; }

  root.querySelector('[data-qty-minus]').addEventListener('click', function(){
    if(qty > 1){ qty--; updateQty(); }
  });
  root.querySelector('[data-qty-plus]').addEventListener('click', function(){
    qty++; updateQty();
  });

  var waBtn = root.querySelector('[data-wa-order]');
  if(waBtn){
    waBtn.addEventListener('click', function(e){
      e.preventDefault();
      var msg = 'Halo Hearth & Wheat, saya mau pesan: ' + product.name + ' x' + qty + ' (' + formatPrice(product.price) + '/pcs).';
      window.open('https://wa.me/6281234567890?text=' + encodeURIComponent(msg), '_blank');
    });
  }

    var relatedGrid = document.querySelector('[data-related-grid]');
  if(relatedGrid){
    var related = PRODUCTS.filter(function(p){ return p.category === product.category && p.id !== product.id; }).slice(0,3);
    relatedGrid.innerHTML = related.map(function(p){
      return '' +
        '<article class="card">' +
          '<a href="product-detail.html?id=' + p.id + '" class="card-art">' +
            (p.tag ? '<span class="card-tag">' + p.tag + '</span>' : '') +
            '<img src="' + p.image + '" alt="' + p.name + '" style="width:100%;height:100%;object-fit:cover;">' +
          '</a>' +
          '<div class="card-body">' +
            '<span class="card-cat">' + p.category + '</span>' +
            '<h3>' + p.name + '</h3>' +
            '<p class="card-desc">' + p.desc + '</p>' +
            '<div class="card-foot">' +
              '<span class="price">' + formatPrice(p.price) + '</span>' +
              '<a class="card-link" href="product-detail.html?id=' + p.id + '">View &rarr;</a>' +
            '</div>' +
          '</div>' +
        '</article>';
    }).join('');
  }
}

function initContactForm(){
  var form = document.querySelector('[data-contact-form]');
  if(!form) return;
  var success = document.querySelector('[data-form-success]');

  form.addEventListener('submit', function(e){
    e.preventDefault();
    var valid = true;
    ['name','email','message'].forEach(function(key){
      var field = form.querySelector('[name="' + key + '"]');
      var wrap = field.closest('.field');
      var ok = field.value.trim().length > 0;
      if(key === 'email' && ok){
        ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim());
      }
      wrap.classList.toggle('is-invalid', !ok);
      if(!ok) valid = false;
    });

    if(!valid){
      success.classList.remove('is-visible');
      return;
    }

    success.classList.add('is-visible');
    form.reset();
    success.scrollIntoView({ behavior:'smooth', block:'center' });
  });
}

function initNewsletter(){
  document.querySelectorAll('[data-newsletter-form]').forEach(function(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var btn = form.querySelector('button');
      var original = btn.textContent;
      btn.textContent = 'Subscribed';
      btn.disabled = true;
      setTimeout(function(){ btn.textContent = original; btn.disabled = false; form.reset(); }, 2200);
    });
  });
}

function initLoafOptions(){
  var container = document.querySelector('.loaf-options');
  if(!container) return;
  var btns = container.querySelectorAll('button');
  btns.forEach(function(btn){
    btn.addEventListener('click', function(){
      btns.forEach(function(b){
        b.classList.remove('active');
        b.style.background = 'transparent';
        b.style.color = 'var(--crust)';
        b.style.borderColor = 'var(--line)';
      });
      btn.classList.add('active');
      btn.style.background = 'rgba(209,117,79,0.1)';
      btn.style.color = '#d1754f';
      btn.style.borderColor = '#d1754f';
    });
  });
}

document.addEventListener('DOMContentLoaded', function(){
  renderFeatured();
  renderSignatureCollections();
  initTestiSlider();
  renderProductGrid();
  renderProductDetail();
  initContactForm();
  initNewsletter();
  initMap();
  initLoafOptions();

  document.querySelectorAll('[data-wheat-mark]').forEach(function(el){
    el.innerHTML = wheatMarkSVG(el.dataset.wheatMark || 22);
  });
});

function initMap() {
  var mapEl = document.getElementById('map');
  if (!mapEl) return;
  
  var map = L.map('map').setView([-6.7320, 108.5523], 15);
  
  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
    subdomains: 'abcd',
    maxZoom: 19
  }).addTo(map);
  
  L.marker([-6.7320, 108.5523]).addTo(map)
    .bindPopup('<b>Hearth & Wheat Bakery</b><br>Jl. Wheatfield No. 12, Cirebon')
    .openPopup();
}
