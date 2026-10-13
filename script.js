/**
 * Purr & Pages - Bookstore CafÃ©
 * Core Functionality & Interactivity (script.js)
 * Features: Navigation, Mobile Drawer, Menu Filtering, Cat Profiles Modal,
 * Book Nook Genre Discovery, Shopping Bag / Demo Cart, Contact Form Validation
 */

    document.addEventListener('DOMContentLoaded', () => {
      // 1. Dynamic copyright year
      const yearSpan = document.getElementById('currentYear');
      if (yearSpan) yearSpan.textContent = new Date().getFullYear();

      // ==========================================================================
      // 2. CUSTOM CAT-PAW CURSOR (DESKTOP)
      // ==========================================================================
      const customCursor = document.getElementById('customCursor');
      if (customCursor && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        let mouseX = -100, mouseY = -100;
        let cursorX = -100, cursorY = -100;

        window.addEventListener('mousemove', (e) => {
          mouseX = e.clientX;
          mouseY = e.clientY;
        });

        // Interactive hover states for buttons, links, cards
        const interactiveElements = document.querySelectorAll('a, button, .menu-card, .cat-card, .gallery-item, .bn-card, .merch-card');
        interactiveElements.forEach(el => {
          el.addEventListener('mouseenter', () => customCursor.classList.add('cursor-hover'));
          el.addEventListener('mouseleave', () => customCursor.classList.remove('cursor-hover'));
        });

        // Smooth follow animation
        function renderCursor() {
          cursorX += (mouseX - cursorX) * 0.22;
          cursorY += (mouseY - cursorY) * 0.22;
          customCursor.style.left = `${cursorX}px`;
          customCursor.style.top = `${cursorY}px`;
          requestAnimationFrame(renderCursor);
        }
        requestAnimationFrame(renderCursor);
      }

      // ==========================================================================
      // 3. STICKY HEADER & MOBILE HAMBURGER NAVIGATION
      // ==========================================================================
      const siteHeader = document.getElementById('siteHeader');
      const navToggle = document.getElementById('navToggle');
      const navMenu = document.getElementById('navMenu');
      const navLinks = document.querySelectorAll('.nav-link');

      window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
          siteHeader.classList.add('scrolled');
        } else {
          siteHeader.classList.remove('scrolled');
        }
      });

      // Mobile Toggle
      if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
          const isOpen = navMenu.classList.toggle('open');
          navToggle.setAttribute('aria-expanded', isOpen);
        });

        // Close when clicking nav links
        navLinks.forEach(link => {
          link.addEventListener('click', () => {
            navMenu.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
          });
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape' && navMenu.classList.contains('open')) {
            navMenu.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
          }
        });
      }

      // Scroll Spy for active navigation link
      const sections = document.querySelectorAll('section[id]');
      window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset + 120;
        sections.forEach(current => {
          const sectionHeight = current.offsetHeight;
          const sectionTop = current.offsetTop;
          const sectionId = current.getAttribute('id');
          const correspondingLink = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);

          if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (correspondingLink) correspondingLink.classList.add('active');
          }
        });
      });

      // Back to top button
      const backToTopBtn = document.getElementById('backToTopBtn');
      if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      }

      // ==========================================================================
      // 4. CAFÉ MENU CATEGORY FILTERING
      // ==========================================================================
      const menuTabs = document.querySelectorAll('.menu-tab-btn');
      const menuCards = document.querySelectorAll('.menu-card');
      const catTreatsBox = document.getElementById('catTreatsBox');

      menuTabs.forEach(tab => {
        tab.addEventListener('click', () => {
          menuTabs.forEach(t => {
            t.classList.remove('active');
            t.setAttribute('aria-selected', 'false');
          });
          tab.classList.add('active');
          tab.setAttribute('aria-selected', 'true');

          const category = tab.getAttribute('data-category');

          if (category === 'cat-treats') {
            // Hide human menu items, scroll directly to Cat Treats Box
            menuCards.forEach(card => card.style.display = 'none');
            catTreatsBox.style.display = 'block';
            catTreatsBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
          } else {
            catTreatsBox.style.display = (category === 'all') ? 'block' : 'none';

            menuCards.forEach(card => {
              const cardCat = card.getAttribute('data-category');
              if (category === 'all' || cardCat === category) {
                card.style.display = 'flex';
              } else {
                card.style.display = 'none';
              }
            });
          }
        });
      });

      // "Ask Before You Treat" button scroll
      const askTreatBtn = document.getElementById('askTreatBtn');
      const catSafetyNote = document.getElementById('catSafetyNote');
      if (askTreatBtn && catSafetyNote) {
        askTreatBtn.addEventListener('click', () => {
          catSafetyNote.scrollIntoView({ behavior: 'smooth', block: 'center' });
          catSafetyNote.style.transition = 'outline 0.3s ease';
          catSafetyNote.style.outline = '4px solid var(--color-sage)';
          setTimeout(() => { catSafetyNote.style.outline = 'none'; }, 2000);
        });
      }

      // ==========================================================================
      // 5. RESIDENT CATS DATA & INTERACTIVE MODAL
      // ==========================================================================
      const catsData = {
        1: {
          name: "Mochi",
          role: "The Professional Napper",
          tag: "Sleepy Sweetheart",
          category: "sleepy",
          image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=900&q=80",
          bio: "Mochi believes that every good book deserves a comfortable reading companion and every afternoon deserves at least three naps. Usually found curled up on a cushion beside the window, Mochi has perfected the art of looking adorable without doing absolutely anything. Available for admiration, occasionally available for cuddles.",
          quote: "“One more chapter? Make it one more nap.”",
          spot: "The sunniest window seat",
          activity: "Napping beside open books"
        },
        2: {
          name: "Biscuit",
          role: "The Friendly Little Greeter",
          tag: "Social Butterfly",
          category: "playful",
          image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=900&q=80",
          bio: "Biscuit considers every visitor a potential best friend. This cheerful little greeter loves inspecting shopping bags, supervising café arrivals, and sitting beside anyone who looks like they need company. Biscuit's social calendar is always full, especially when someone sits down with a good book.",
          quote: "“You came for coffee. You stayed for me.”",
          spot: "Near the entrance or a welcoming lounge chair",
          activity: "Greeting visitors and investigating bags"
        },
        3: {
          name: "Pepper",
          role: "The Tiny Mischief-Maker",
          tag: "Curious Chaos",
          category: "curious",
          image: "https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?auto=format&fit=crop&w=900&q=80",
          bio: "Pepper is convinced that bookmarks are toys, paper bags are secret hideouts, and every unattended book needs a thorough inspection. With a curious nose and a talent for appearing where least expected, Pepper adds a little unpredictability to every café visit. Quiet reading time is never guaranteed.",
          quote: "“I didn't knock it over. The book wanted to explore.”",
          spot: "Between the bookshelves",
          activity: "Exploring, investigating, and playing"
        },
        4: {
          name: "Chai",
          role: "The Cosy Companion",
          tag: "Comfort Seeker",
          category: "quiet",
          image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=900&q=80",
          bio: "Chai is the living definition of a slow afternoon. This gentle companion enjoys peaceful corners, quiet company, and the comforting sound of pages turning. Chai is happiest when the café is calm and a favourite human is nearby, enjoying a warm drink and a good story.",
          quote: "“Slow sips. Soft paws. Good stories.”",
          spot: "A cushioned armchair in a quiet corner",
          activity: "Lounging beside peaceful readers"
        },
        5: {
          name: "Waffles",
          role: "The Sleepy Bookworm",
          tag: "Dreamy Reader",
          category: "sleepy",
          image: "https://images.unsplash.com/photo-1513245543132-31f507417b26?auto=format&fit=crop&w=900&q=80",
          bio: "Waffles starts every day with excellent intentions: explore the café, inspect a few books, and perhaps make a new friend. Somehow, these plans always end with a nap in a patch of sunlight. Waffles has never finished a chapter, but has personally tested the comfort of almost every reading cushion.",
          quote: "“I'll finish this chapter after my nap.”",
          spot: "A sunny windowsill beside the shelves",
          activity: "Sleeping on cushions and watching birds"
        },
        6: {
          name: "Fig",
          role: "The Curious Explorer",
          tag: "Little Adventurer",
          category: "curious",
          image: "https://images.unsplash.com/photo-1561948955-570b270e7c36?auto=format&fit=crop&w=900&q=80",
          bio: "Fig is the café's self-appointed explorer. New deliveries, mysterious corners, and freshly arranged bookshelves all demand immediate investigation. Fig approaches everyday life like the beginning of a grand adventure, proving that you don't need to leave the bookstore to discover a whole new world.",
          quote: "“Every corner hides a new chapter.”",
          spot: "Beside the lower bookshelves and cosy hideaways",
          activity: "Exploring new surroundings"
        },
        7: {
          name: "Pickles",
          role: "The Tiny Trouble-Maker",
          tag: "Playful Menace",
          category: "playful",
          image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=900&q=80",
          bio: "Pickles has two hobbies: making unexpected appearances and acting completely innocent afterward. A rustle of paper or the movement of a dangling bookmark is enough to spark a new investigation. Despite the mischief, Pickles has a surprisingly sweet side and can often be found relaxing after a busy day of supervising absolutely everything.",
          quote: "“Trouble? I prefer the term plot development.”",
          spot: "Near the interactive play area",
          activity: "Chasing toys and investigating interesting objects"
        },
        8: {
          name: "Ink",
          role: "The Midnight Poet",
          tag: "Quiet Observer",
          category: "quiet",
          image: "images/ink.jpg",
          bio: "Ink is a quiet soul with a talent for finding the most peaceful corner in the room. While the others entertain the café, Ink prefers to observe from a comfortable distance, as though collecting inspiration for an unpublished novel. A little mysterious, a little independent, and entirely unforgettable.",
          quote: "“Some stories are better told in silence.”",
          spot: "A secluded reading nook",
          activity: "Quiet observation and resting in peaceful places"
        },
        9: {
          name: "Pudding",
          role: "The Royal Reviewer",
          tag: "Queen of Comfort",
          category: "quiet",
          image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=900&q=80",
          bio: "Pudding takes comfort very seriously. Every cushion must meet her standards, every cosy corner deserves an inspection, and every visitor may be observed before being granted the honour of her attention. She is the café's unofficial quality-control expert, ensuring that relaxation remains a first-class experience.",
          quote: "“The cushion is mine. The book may stay.”",
          spot: "The softest armchair in the café",
          activity: "Inspecting comfortable spaces and watching the room"
        },
        10: {
          name: "Noodle",
          role: "The Little Daydreamer",
          tag: "Curious Kitten",
          category: "curious",
          image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=900&q=80",
          bio: "Noodle sees magic in the smallest things: a sunbeam on the floor, a ribbon on a gift, or the gentle movement of a page. Curious, wiggly, and full of wonder, Noodle turns ordinary café moments into tiny adventures. When the exploring is over, a warm, quiet corner is the perfect place to recharge.",
          quote: "“Life is one big story. Let's explore it.”",
          spot: "A cosy, supervised kitten-friendly play corner",
          activity: "Discovering new toys and exploring safely"
        }
      };

      // Cat Filtering
      const catFilterBtns = document.querySelectorAll('.cat-filter-btn');
      const catCards = document.querySelectorAll('.cat-card');

      catFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          catFilterBtns.forEach(b => {
            b.classList.remove('active');
            b.setAttribute('aria-selected', 'false');
          });
          btn.classList.add('active');
          btn.setAttribute('aria-selected', 'true');

          const filter = btn.getAttribute('data-filter');
          catCards.forEach(card => {
            const cardCategory = card.getAttribute('data-cat-category');
            if (filter === 'all' || cardCategory === filter) {
              card.style.display = 'flex';
            } else {
              card.style.display = 'none';
            }
          });
        });
      });

      // Cat Modal Elements
      const catModalBackdrop = document.getElementById('catModalBackdrop');
      const closeCatModalBtn = document.getElementById('closeCatModalBtn');
      const catModalImage = document.getElementById('catModalImage');
      const catModalTag = document.getElementById('catModalTag');
      const catModalName = document.getElementById('catModalName');
      const catModalRole = document.getElementById('catModalRole');
      const catModalQuote = document.getElementById('catModalQuote');
      const catModalBio = document.getElementById('catModalBio');
      const catModalSpot = document.getElementById('catModalSpot');
      const catModalActivity = document.getElementById('catModalActivity');

      function openCatModal(catId) {
        const cat = catsData[catId];
        if (!cat) return;

        catModalImage.src = cat.image;
        catModalImage.alt = `${cat.name} the cat`;
        catModalTag.textContent = cat.tag;
        catModalName.textContent = cat.name;
        catModalRole.textContent = cat.role;
        catModalQuote.textContent = cat.quote;
        catModalBio.textContent = cat.bio;
        catModalSpot.textContent = cat.spot;
        catModalActivity.textContent = cat.activity;

        catModalBackdrop.classList.add('active');
        document.body.style.overflow = 'hidden';
        closeCatModalBtn.focus();
      }

      function closeCatModal() {
        catModalBackdrop.classList.remove('active');
        document.body.style.overflow = '';
      }

      document.querySelectorAll('.btn-meet-cat').forEach(btn => {
        btn.addEventListener('click', () => {
          const catId = btn.getAttribute('data-cat-id');
          openCatModal(catId);
        });
      });

      if (closeCatModalBtn) closeCatModalBtn.addEventListener('click', closeCatModal);

      // Close modal on clicking backdrop
      if (catModalBackdrop) {
        catModalBackdrop.addEventListener('click', (e) => {
          if (e.target === catModalBackdrop) closeCatModal();
        });
      }

            // ==========================================================================
      // 6. GALLERY & ACCESSIBLE LIGHTBOX (7 PHOTOGRAPHS)
      // Easily customize or replace the 7 gallery photographs, titles, and alt text:
      // ==========================================================================
      const galleryItems = document.querySelectorAll('.gallery-item');
      const galleryLightbox = document.getElementById('galleryLightbox');
      const lightboxImg = document.getElementById('lightboxImg');
      const lightboxCaption = document.getElementById('lightboxCaption');
      const closeLightboxBtn = document.getElementById('closeLightboxBtn');
      const lightboxPrevBtn = document.getElementById('lightboxPrevBtn');
      const lightboxNextBtn = document.getElementById('lightboxNextBtn');

      let currentPhotoIndex = 0;
      const galleryData = [
        {
          src: "images/gallery-1-haven.jpg",
          fallback: "gallery-1-haven.jpg",
          title: "Our Bookish Haven",
          alt: "Beautiful independent bookstore cafÃ© interior with tall floor-to-ceiling bookshelves, cosy leather reading armchair, warm natural morning light, and welcoming coffee counter"
        },
        {
          src: "images/gallery-2-coffee-corner.jpg",
          fallback: "gallery-2-coffee-corner.jpg",
          title: "Coffee Corner",
          alt: "Warm cafÃ© interior with rustic coffee counter, professional stainless steel espresso machine, hanging Edison pendant lights, and ceramic cups"
        },
        {
          src: "images/gallery-3-cat-resident.jpg",
          fallback: "gallery-3-cat-resident.jpg",
          title: "Our Curious Residents",
          alt: "Real domestic black cat with bright golden eyes resting cosily on a knitted beige cushion beside stacks of hardcover books in the cafÃ©"
        },
        {
          src: "images/gallery-4-shelves.jpg",
          fallback: "gallery-4-shelves.jpg",
          title: "Stories on Every Shelf",
          alt: "Close-up of beautifully arranged wooden bookshelves with visible spines of diverse novels, antique brass bookend, and soft ambient library lighting"
        },
        {
          src: "images/gallery-5-barista.jpg",
          fallback: "gallery-5-barista.jpg",
          title: "The Art of Brewing",
          alt: "Skilled barista in canvas apron carefully pouring water from a gooseneck kettle into a glass V60 pour-over coffee dripper in an authentic cafÃ© environment"
        },
        {
          src: "images/gallery-6-sip-happiness.jpg",
          fallback: "gallery-6-sip-happiness.jpg",
          title: "A Little Sip of Happiness",
          alt: "Stoneware ceramic coffee mug with latte art on a rustic wooden cafÃ© table beside an open hardcover novel, reading glasses, and a cinnamon pastry"
        },
        {
          src: "images/gallery-7-paws-pages.jpg",
          fallback: "gallery-7-paws-pages.jpg",
          title: "Paws Among the Pages",
          alt: "Domestic fluffy ginger tabby cat sleeping peacefully curled up on a plaid blanket beside vintage books and coffee on a sunlit bookstore windowsill"
        }
      ];

      function showLightbox(index) {
        if (!galleryLightbox || !lightboxImg) return;
        if (index < 0) index = galleryData.length - 1;
        if (index >= galleryData.length) index = 0;
        currentPhotoIndex = index;

        const photo = galleryData[currentPhotoIndex];
        lightboxImg.src = photo.src;
        lightboxImg.alt = photo.alt;
        lightboxImg.onerror = function() {
          if (this.src.indexOf('images/') !== -1) {
            this.src = photo.fallback;
          }
        };
        if (lightboxCaption) lightboxCaption.textContent = photo.title;
        galleryLightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
        if (closeLightboxBtn) closeLightboxBtn.focus();
      }

      function closeLightbox() {
        if (!galleryLightbox) return;
        galleryLightbox.classList.remove('active');
        document.body.style.overflow = '';
      }

      galleryItems.forEach((item, idx) => {
        item.addEventListener('click', () => showLightbox(idx));
        item.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            showLightbox(idx);
          }
        });
      });

      if (closeLightboxBtn) closeLightboxBtn.addEventListener('click', closeLightbox);
      if (lightboxPrevBtn) lightboxPrevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showLightbox(currentPhotoIndex - 1);
      });
      if (lightboxNextBtn) lightboxNextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showLightbox(currentPhotoIndex + 1);
      });

      if (galleryLightbox) {
        galleryLightbox.addEventListener('click', (e) => {
          if (e.target === galleryLightbox) closeLightbox();
        });
      }

      // Keyboard arrow keys navigation for lightbox
      document.addEventListener('keydown', (e) => {
        if (!galleryLightbox || !galleryLightbox.classList.contains('active')) return;
        if (e.key === 'ArrowLeft') {
          showLightbox(currentPhotoIndex - 1);
        } else if (e.key === 'ArrowRight') {
          showLightbox(currentPhotoIndex + 1);
        }
      });

      // ==========================================================================
      // 7. CLIENT-SIDE DEMO SHOPPING CART
      // ==========================================================================
      const cartDrawer = document.getElementById('cartDrawer');
      const openCartBtn = document.getElementById('openCartBtn');
      const closeCartBtn = document.getElementById('closeCartBtn');
      const cartCountBadge = document.getElementById('cartCountBadge');
      const cartDrawerCount = document.getElementById('cartDrawerCount');
      const cartItemsList = document.getElementById('cartItemsList');
      const cartSubtotal = document.getElementById('cartSubtotal');
      const checkoutDemoBtn = document.getElementById('checkoutDemoBtn');

      let cart = [];

      function toggleCart(open) {
        if (open) {
          cartDrawer.classList.add('open');
          document.body.style.overflow = 'hidden';
        } else {
          cartDrawer.classList.remove('open');
          document.body.style.overflow = '';
        }
      }

      if (openCartBtn) openCartBtn.addEventListener('click', () => toggleCart(true));
      if (closeCartBtn) closeCartBtn.addEventListener('click', () => toggleCart(false));

      function updateCartUI() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

        if (cartCountBadge) cartCountBadge.textContent = totalItems;
        if (cartDrawerCount) cartDrawerCount.textContent = `(${totalItems})`;
        if (cartSubtotal) cartSubtotal.innerHTML = `&#8377;${subtotal.toLocaleString('en-IN')}`;

        if (totalItems === 0) {
          cartItemsList.innerHTML = `
            <div style="text-align:center; padding:40px 10px; color:#8C6D5B;">
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin-bottom:12px;">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-2z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
              </svg>
              <p>Your bag is currently empty.</p>
              <p style="font-size:0.88rem; margin-top:4px;">Add books or merchandise to see them here!</p>
            </div>
          `;
          return;
        }

        cartItemsList.innerHTML = '';
        cart.forEach(item => {
          const itemEl = document.createElement('div');
          itemEl.className = 'cart-item';
          itemEl.innerHTML = `
            <div class="cart-item-info">
              <div class="cart-item-name">${item.name}</div>
              <div class="cart-item-price">&#8377;${item.price} each</div>
            </div>
            <div class="cart-qty-ctrl">
              <button class="cart-qty-btn decrease-qty" data-id="${item.id}" aria-label="Decrease quantity">&minus;</button>
              <span style="font-weight:700; min-width:18px; text-align:center;">${item.quantity}</span>
              <button class="cart-qty-btn increase-qty" data-id="${item.id}" aria-label="Increase quantity">+</button>
            </div>
            <button class="cart-remove-btn remove-item" data-id="${item.id}" title="Remove item" aria-label="Remove item">✕</button>
          `;
          cartItemsList.appendChild(itemEl);
        });

        // Event listeners for quantity and remove buttons
        document.querySelectorAll('.increase-qty').forEach(btn => {
          btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            const found = cart.find(i => i.id === id);
            if (found) {
              found.quantity++;
              updateCartUI();
            }
          });
        });

        document.querySelectorAll('.decrease-qty').forEach(btn => {
          btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            const found = cart.find(i => i.id === id);
            if (found) {
              found.quantity--;
              if (found.quantity <= 0) {
                cart = cart.filter(i => i.id !== id);
              }
              updateCartUI();
            }
          });
        });

        document.querySelectorAll('.remove-item').forEach(btn => {
          btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            cart = cart.filter(i => i.id !== id);
            updateCartUI();
          });
        });
      }

      // ==========================================================================
      // 7.5 BOOK NOOK GENRE CONFIGURATION & ACCESSIBLE CARD INTERACTIONS
      // ==========================================================================
                  // ==========================================================================
      // 7.5 BOOK NOOK CATALOGUE DATA (72 SAMPLE BOOKS - 12 PER GENRE)
      // Demo catalogue: Clearly labeled as sample inventory for concept website.
      // ==========================================================================
      const bookCatalogueData = [
        // ------------------------------------------------------------------------
        // 1. FICTION (12 Books)
        // ------------------------------------------------------------------------
        {
          id: 1,
          genre: "fiction",
          genreName: "Fiction",
          title: "The Midnight Library",
          author: "Matt Haig",
          cover: "https://covers.openlibrary.org/b/isbn/9780525559474-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },
        {
          id: 2,
          genre: "fiction",
          genreName: "Fiction",
          title: "The Kite Runner",
          author: "Khaled Hosseini",
          cover: "https://covers.openlibrary.org/b/isbn/9781594631931-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },
        {
          id: 3,
          genre: "fiction",
          genreName: "Fiction",
          title: "Little Fires Everywhere",
          author: "Celeste Ng",
          cover: "https://covers.openlibrary.org/b/isbn/9780735224292-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },
        {
          id: 4,
          genre: "fiction",
          genreName: "Fiction",
          title: "Where the Crawdads Sing",
          author: "Delia Owens",
          cover: "https://covers.openlibrary.org/b/isbn/9780735219090-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },
        {
          id: 5,
          genre: "fiction",
          genreName: "Fiction",
          title: "A Man Called Ove",
          author: "Fredrik Backman",
          cover: "https://covers.openlibrary.org/b/isbn/9781476738024-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },
        {
          id: 6,
          genre: "fiction",
          genreName: "Fiction",
          title: "Pachinko",
          author: "Min Jin Lee",
          cover: "https://covers.openlibrary.org/b/isbn/9781455563937-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },
        {
          id: 7,
          genre: "fiction",
          genreName: "Fiction",
          title: "The Seven Husbands of Evelyn Hugo",
          author: "Taylor Jenkins Reid",
          cover: "https://covers.openlibrary.org/b/isbn/9781501161933-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },
        {
          id: 8,
          genre: "fiction",
          genreName: "Fiction",
          title: "Cloud Cuckoo Land",
          author: "Anthony Doerr",
          cover: "https://covers.openlibrary.org/b/isbn/9781982168438-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },
        {
          id: 9,
          genre: "fiction",
          genreName: "Fiction",
          title: "Piranesi",
          author: "Susanna Clarke",
          cover: "https://covers.openlibrary.org/b/isbn/9781635575637-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },
        {
          id: 10,
          genre: "fiction",
          genreName: "Fiction",
          title: "Tomorrow, and Tomorrow, and Tomorrow",
          author: "Gabrielle Zevin",
          cover: "https://covers.openlibrary.org/b/isbn/9780593321201-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },
        {
          id: 11,
          genre: "fiction",
          genreName: "Fiction",
          title: "The Secret History",
          author: "Donna Tartt",
          cover: "https://covers.openlibrary.org/b/isbn/9781400031702-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },
        {
          id: 12,
          genre: "fiction",
          genreName: "Fiction",
          title: "Before the Coffee Gets Cold",
          author: "Toshikazu Kawaguchi",
          cover: "https://covers.openlibrary.org/b/isbn/9781335430991-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },

        // ------------------------------------------------------------------------
        // 2. ROMANCE (12 Books)
        // ------------------------------------------------------------------------
        {
          id: 13,
          genre: "romance",
          genreName: "Romance",
          title: "Pride and Prejudice",
          author: "Jane Austen",
          cover: "https://covers.openlibrary.org/b/isbn/9780141439518-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },
        {
          id: 14,
          genre: "romance",
          genreName: "Romance",
          title: "Me Before You",
          author: "Jojo Moyes",
          cover: "https://covers.openlibrary.org/b/isbn/9780143124541-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },
        {
          id: 15,
          genre: "romance",
          genreName: "Romance",
          title: "The Love Hypothesis",
          author: "Ali Hazelwood",
          cover: "https://covers.openlibrary.org/b/isbn/9780593336823-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },
        {
          id: 16,
          genre: "romance",
          genreName: "Romance",
          title: "Book Lovers",
          author: "Emily Henry",
          cover: "https://covers.openlibrary.org/b/isbn/9780593440872-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },
        {
          id: 17,
          genre: "romance",
          genreName: "Romance",
          title: "Red, White & Royal Blue",
          author: "Casey McQuiston",
          cover: "https://covers.openlibrary.org/b/isbn/9781250316776-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },
        {
          id: 18,
          genre: "romance",
          genreName: "Romance",
          title: "Normal People",
          author: "Sally Rooney",
          cover: "https://covers.openlibrary.org/b/isbn/9781984822178-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },
        {
          id: 19,
          genre: "romance",
          genreName: "Romance",
          title: "It Ends with Us",
          author: "Colleen Hoover",
          cover: "https://covers.openlibrary.org/b/isbn/9781501110368-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },
        {
          id: 20,
          genre: "romance",
          genreName: "Romance",
          title: "Beach Read",
          author: "Emily Henry",
          cover: "https://covers.openlibrary.org/b/isbn/9781984806734-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },
        {
          id: 21,
          genre: "romance",
          genreName: "Romance",
          title: "The Song of Achilles",
          author: "Madeline Miller",
          cover: "https://covers.openlibrary.org/b/isbn/9780062060624-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },
        {
          id: 22,
          genre: "romance",
          genreName: "Romance",
          title: "Outlander",
          author: "Diana Gabaldon",
          cover: "https://covers.openlibrary.org/b/isbn/9780385319959-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },
        {
          id: 23,
          genre: "romance",
          genreName: "Romance",
          title: "The Seven Year Slip",
          author: "Ashley Poston",
          cover: "https://covers.openlibrary.org/b/isbn/9780593440780-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },
        {
          id: 24,
          genre: "romance",
          genreName: "Romance",
          title: "Love & Other Words",
          author: "Christina Lauren",
          cover: "https://covers.openlibrary.org/b/isbn/9781501128011-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },

        // ------------------------------------------------------------------------
        // 3. MYSTERY & THRILLER (12 Books)
        // ------------------------------------------------------------------------
        {
          id: 25,
          genre: "mystery",
          genreName: "Mystery & Thriller",
          title: "The Thursday Murder Club",
          author: "Richard Osman",
          cover: "https://covers.openlibrary.org/b/isbn/9781984880963-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },
        {
          id: 26,
          genre: "mystery",
          genreName: "Mystery & Thriller",
          title: "Gone Girl",
          author: "Gillian Flynn",
          cover: "https://covers.openlibrary.org/b/isbn/9780307588364-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },
        {
          id: 27,
          genre: "mystery",
          genreName: "Mystery & Thriller",
          title: "The Girl with the Dragon Tattoo",
          author: "Stieg Larsson",
          cover: "https://covers.openlibrary.org/b/isbn/9780307949486-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },
        {
          id: 28,
          genre: "mystery",
          genreName: "Mystery & Thriller",
          title: "The Silent Patient",
          author: "Alex Michaelides",
          cover: "https://covers.openlibrary.org/b/isbn/9781250301697-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },
        {
          id: 29,
          genre: "mystery",
          genreName: "Mystery & Thriller",
          title: "The Maid",
          author: "Nita Prose",
          cover: "https://covers.openlibrary.org/b/isbn/9780593356159-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },
        {
          id: 30,
          genre: "mystery",
          genreName: "Mystery & Thriller",
          title: "Big Little Lies",
          author: "Liane Moriarty",
          cover: "https://covers.openlibrary.org/b/isbn/9780399587207-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },
        {
          id: 31,
          genre: "mystery",
          genreName: "Mystery & Thriller",
          title: "In the Woods",
          author: "Tana French",
          cover: "https://covers.openlibrary.org/b/isbn/9780143113491-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },
        {
          id: 32,
          genre: "mystery",
          genreName: "Mystery & Thriller",
          title: "The Guest List",
          author: "Lucy Foley",
          cover: "https://covers.openlibrary.org/b/isbn/9780062868930-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },
        {
          id: 33,
          genre: "mystery",
          genreName: "Mystery & Thriller",
          title: "Magpie Murders",
          author: "Anthony Horowitz",
          cover: "https://covers.openlibrary.org/b/isbn/9780062645227-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },
        {
          id: 34,
          genre: "mystery",
          genreName: "Mystery & Thriller",
          title: "And Then There Were None",
          author: "Agatha Christie",
          cover: "https://covers.openlibrary.org/b/isbn/9780062073488-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },
        {
          id: 35,
          genre: "mystery",
          genreName: "Mystery & Thriller",
          title: "The Paris Apartment",
          author: "Lucy Foley",
          cover: "https://covers.openlibrary.org/b/isbn/9780063003057-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },
        {
          id: 36,
          genre: "mystery",
          genreName: "Mystery & Thriller",
          title: "Sharp Objects",
          author: "Gillian Flynn",
          cover: "https://covers.openlibrary.org/b/isbn/9780307341556-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },

        // ------------------------------------------------------------------------
        // 4. FANTASY (12 Books)
        // ------------------------------------------------------------------------
        {
          id: 37,
          genre: "fantasy",
          genreName: "Fantasy",
          title: "The Hobbit",
          author: "J. R. R. Tolkien",
          cover: "https://covers.openlibrary.org/b/isbn/9780547928227-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },
        {
          id: 38,
          genre: "fantasy",
          genreName: "Fantasy",
          title: "A Court of Thorns and Roses",
          author: "Sarah J. Maas",
          cover: "https://covers.openlibrary.org/b/isbn/9781619634442-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },
        {
          id: 39,
          genre: "fantasy",
          genreName: "Fantasy",
          title: "The Name of the Wind",
          author: "Patrick Rothfuss",
          cover: "https://covers.openlibrary.org/b/isbn/9780756404741-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },
        {
          id: 40,
          genre: "fantasy",
          genreName: "Fantasy",
          title: "Circe",
          author: "Madeline Miller",
          cover: "https://covers.openlibrary.org/b/isbn/9780316556347-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },
        {
          id: 41,
          genre: "fantasy",
          genreName: "Fantasy",
          title: "The Priory of the Orange Tree",
          author: "Samantha Shannon",
          cover: "https://covers.openlibrary.org/b/isbn/9781635570298-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },
        {
          id: 42,
          genre: "fantasy",
          genreName: "Fantasy",
          title: "Six of Crows",
          author: "Leigh Bardugo",
          cover: "https://covers.openlibrary.org/b/isbn/9781627792127-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },
        {
          id: 43,
          genre: "fantasy",
          genreName: "Fantasy",
          title: "The Night Circus",
          author: "Erin Morgenstern",
          cover: "https://covers.openlibrary.org/b/isbn/9780307744432-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },
        {
          id: 44,
          genre: "fantasy",
          genreName: "Fantasy",
          title: "The Way of Kings",
          author: "Brandon Sanderson",
          cover: "https://covers.openlibrary.org/b/isbn/9780765326355-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },
        {
          id: 45,
          genre: "fantasy",
          genreName: "Fantasy",
          title: "Fourth Wing",
          author: "Rebecca Yarros",
          cover: "https://covers.openlibrary.org/b/isbn/9781649374042-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },
        {
          id: 46,
          genre: "fantasy",
          genreName: "Fantasy",
          title: "The Starless Sea",
          author: "Erin Morgenstern",
          cover: "https://covers.openlibrary.org/b/isbn/9780385541213-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },
        {
          id: 47,
          genre: "fantasy",
          genreName: "Fantasy",
          title: "The House in the Cerulean Sea",
          author: "TJ Klune",
          cover: "https://covers.openlibrary.org/b/isbn/9781250217288-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },
        {
          id: 48,
          genre: "fantasy",
          genreName: "Fantasy",
          title: "An Enchantment of Ravens",
          author: "Margaret Rogerson",
          cover: "https://covers.openlibrary.org/b/isbn/9781481497589-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },

        // ------------------------------------------------------------------------
        // 5. PERSONAL GROWTH (12 Books)
        // ------------------------------------------------------------------------
        {
          id: 49,
          genre: "personal-growth",
          genreName: "Personal Growth",
          title: "Atomic Habits",
          author: "James Clear",
          cover: "https://covers.openlibrary.org/b/isbn/9780735211292-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },
        {
          id: 50,
          genre: "personal-growth",
          genreName: "Personal Growth",
          title: "The Psychology of Money",
          author: "Morgan Housel",
          cover: "https://covers.openlibrary.org/b/isbn/9780857197689-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },
        {
          id: 51,
          genre: "personal-growth",
          genreName: "Personal Growth",
          title: "Ikigai",
          author: "HÃ©ctor GarcÃ­a & Francesc Miralles",
          cover: "https://covers.openlibrary.org/b/isbn/9780143130727-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },
        {
          id: 52,
          genre: "personal-growth",
          genreName: "Personal Growth",
          title: "Deep Work",
          author: "Cal Newport",
          cover: "https://covers.openlibrary.org/b/isbn/9781455586691-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },
        {
          id: 53,
          genre: "personal-growth",
          genreName: "Personal Growth",
          title: "Thinking, Fast and Slow",
          author: "Daniel Kahneman",
          cover: "https://covers.openlibrary.org/b/isbn/9780374533557-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },
        {
          id: 54,
          genre: "personal-growth",
          genreName: "Personal Growth",
          title: "The Courage to Be Disliked",
          author: "Ichiro Kishimi & Fumitake Koga",
          cover: "https://covers.openlibrary.org/b/isbn/9781501197277-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },
        {
          id: 55,
          genre: "personal-growth",
          genreName: "Personal Growth",
          title: "Four Thousand Weeks",
          author: "Oliver Burkeman",
          cover: "https://covers.openlibrary.org/b/isbn/9780374158651-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },
        {
          id: 56,
          genre: "personal-growth",
          genreName: "Personal Growth",
          title: "Essentialism",
          author: "Greg McKeown",
          cover: "https://covers.openlibrary.org/b/isbn/9780804137386-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },
        {
          id: 57,
          genre: "personal-growth",
          genreName: "Personal Growth",
          title: "The Mountain Is You",
          author: "Brianna Wiest",
          cover: "https://covers.openlibrary.org/b/isbn/9781949759228-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },
        {
          id: 58,
          genre: "personal-growth",
          genreName: "Personal Growth",
          title: "Make Your Bed",
          author: "William H. McRaven",
          cover: "https://covers.openlibrary.org/b/isbn/9781455570249-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },
        {
          id: 59,
          genre: "personal-growth",
          genreName: "Personal Growth",
          title: "Digital Minimalism",
          author: "Cal Newport",
          cover: "https://covers.openlibrary.org/b/isbn/9780525536512-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },
        {
          id: 60,
          genre: "personal-growth",
          genreName: "Personal Growth",
          title: "The Comfort Book",
          author: "Matt Haig",
          cover: "https://covers.openlibrary.org/b/isbn/9780143136668-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },

        // ------------------------------------------------------------------------
        // 6. POETRY & CLASSICS (12 Books)
        // ------------------------------------------------------------------------
        {
          id: 61,
          genre: "poetry-classics",
          genreName: "Poetry & Classics",
          title: "The Complete Poems",
          author: "Emily Dickinson",
          cover: "https://covers.openlibrary.org/b/isbn/9780316184137-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },
        {
          id: 62,
          genre: "poetry-classics",
          genreName: "Poetry & Classics",
          title: "The Great Gatsby",
          author: "F. Scott Fitzgerald",
          cover: "https://covers.openlibrary.org/b/isbn/9780743273565-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },
        {
          id: 63,
          genre: "poetry-classics",
          genreName: "Poetry & Classics",
          title: "Selected Poems",
          author: "Robert Frost",
          cover: "https://covers.openlibrary.org/b/isbn/9780805069860-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },
        {
          id: 64,
          genre: "poetry-classics",
          genreName: "Poetry & Classics",
          title: "1984",
          author: "George Orwell",
          cover: "https://covers.openlibrary.org/b/isbn/9780451524935-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },
        {
          id: 65,
          genre: "poetry-classics",
          genreName: "Poetry & Classics",
          title: "Jane Eyre",
          author: "Charlotte BrontÃ«",
          cover: "https://covers.openlibrary.org/b/isbn/9780141441146-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },
        {
          id: 66,
          genre: "poetry-classics",
          genreName: "Poetry & Classics",
          title: "Wuthering Heights",
          author: "Emily BrontÃ«",
          cover: "https://covers.openlibrary.org/b/isbn/9780141439556-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },
        {
          id: 67,
          genre: "poetry-classics",
          genreName: "Poetry & Classics",
          title: "The Picture of Dorian Gray",
          author: "Oscar Wilde",
          cover: "https://covers.openlibrary.org/b/isbn/9780141439570-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },
        {
          id: 68,
          genre: "poetry-classics",
          genreName: "Poetry & Classics",
          title: "Leaves of Grass",
          author: "Walt Whitman",
          cover: "https://covers.openlibrary.org/b/isbn/9780140421996-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },
        {
          id: 69,
          genre: "poetry-classics",
          genreName: "Poetry & Classics",
          title: "The Odyssey",
          author: "Homer",
          cover: "https://covers.openlibrary.org/b/isbn/9780140268867-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },
        {
          id: 70,
          genre: "poetry-classics",
          genreName: "Poetry & Classics",
          title: "Milk and Honey",
          author: "Rupi Kaur",
          cover: "https://covers.openlibrary.org/b/isbn/9781449474256-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },
        {
          id: 71,
          genre: "poetry-classics",
          genreName: "Poetry & Classics",
          title: "The Prophet",
          author: "Kahlil Gibran",
          cover: "https://covers.openlibrary.org/b/isbn/9780394404288-M.jpg",
          availability: "Demo listing - stock not confirmed"
        },
        {
          id: 72,
          genre: "poetry-classics",
          genreName: "Poetry & Classics",
          title: "Devotions: The Selected Poems",
          author: "Mary Oliver",
          cover: "https://covers.openlibrary.org/b/isbn/9780399563249-M.jpg",
          availability: "Demo listing - stock not confirmed"
        }
      ];

      // Genre Metadata Directory
      const genreMetadata = {
        "fiction": { name: "Fiction", tag: "NOVELS & STORIES", subtitle: "Curated collection of 12 Fiction titles on our shelves." },
        "romance": { name: "Romance", tag: "LOVE & HEARTS", subtitle: "Curated collection of 12 Romance novels and slow burns." },
        "mystery": { name: "Mystery & Thriller", tag: "WHODUNITS & SUSPENSE", subtitle: "Curated collection of 12 Mystery & Thriller page-turners." },
        "fantasy": { name: "Fantasy", tag: "MAGIC & REALMS", subtitle: "Curated collection of 12 Fantasy sagas and magical realms." },
        "personal-growth": { name: "Personal Growth", tag: "MINDFUL LIVING", subtitle: "Curated collection of 12 Personal Growth and mindful living books." },
        "poetry-classics": { name: "Poetry & Classics", tag: "TIMELESS VERSES", subtitle: "Curated collection of 12 Poetry collections and enduring classics." }
      };

      // State Management
      let activeGenreId = "fiction";
      let activeSearchQuery = "";
      let activeSearchScope = "selected"; // "selected" or "all"
      let hasExploredGenre = false;

      // DOM Elements for Catalogue
      const catalogueSection = document.getElementById('bookCatalogueSection');
      const catalogueTitle = document.getElementById('catalogueTitle');
      const catalogueSubtitle = document.getElementById('catalogueSubtitle');
      const catalogueGenreTag = document.getElementById('catalogueGenreTag');
      const catalogueActivePill = document.getElementById('catalogueActivePill');
      const catalogueResultsCount = document.getElementById('catalogueResultsCount');
      const bookCardsGrid = document.getElementById('bookCardsGrid');
      const catalogueEmptyState = document.getElementById('catalogueEmptyState');
      const bookSearchInput = document.getElementById('bookSearchInput');
      const bookSearchClearBtn = document.getElementById('bookSearchClearBtn');
      const bookSearchScope = document.getElementById('bookSearchScope');
      const backToGenresBtn = document.getElementById('backToGenresBtn');
      const emptyStateClearBtn = document.getElementById('emptyStateClearBtn');
      const bnCards = document.querySelectorAll('.bn-card');

      // Helper function to safely escape HTML
      function escapeHtml(str) {
        return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
      }

      // Render book card element HTML
      function createBookCardHtml(book) {
        return `
          <article class="book-card" data-genre="${escapeHtml(book.genre)}" data-id="${book.id}">
            <div class="book-cover-wrap">
              <img src="${escapeHtml(book.cover)}" 
                   alt="Book cover of ${escapeHtml(book.title)} by ${escapeHtml(book.author)}" 
                   class="book-cover-img" 
                   loading="lazy" 
                   onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
              <div class="book-cover-placeholder" style="display: none;" aria-hidden="true">
                <div class="book-placeholder-spine"></div>
                <div class="book-placeholder-body">
                  <span class="book-placeholder-genre">${escapeHtml(book.genreName)}</span>
                  <h4 class="book-placeholder-title">${escapeHtml(book.title)}</h4>
                  <span class="book-placeholder-author">${escapeHtml(book.author)}</span>
                  <span class="book-placeholder-brand">Purr &amp; Pages</span>
                </div>
              </div>
              <button type="button" 
                      class="book-genre-badge" 
                      data-genre-id="${escapeHtml(book.genre)}" 
                      title="Explore all ${escapeHtml(book.genreName)} books"
                      aria-label="View genre: ${escapeHtml(book.genreName)}">
                ${escapeHtml(book.genreName)}
              </button>
            </div>
            <div class="book-info">
              <h4 class="book-title" title="${escapeHtml(book.title)}">${escapeHtml(book.title)}</h4>
              <p class="book-author">by ${escapeHtml(book.author)}</p>
              <div class="book-status-wrap">
                <span class="book-status-badge is-demo" title="Sample inventory listing for demonstration">${escapeHtml(book.availability)}</span>
              </div>
            </div>
          </article>
        `;
      }

      // Main Render Function for Catalogue
      function renderBookCatalogue() {
        if (!bookCardsGrid) return;

        const q = activeSearchQuery.trim().toLowerCase();
        let pool = [];

        if (activeSearchScope === "all") {
          pool = bookCatalogueData;
        } else {
          pool = bookCatalogueData.filter(b => b.genre === activeGenreId);
        }

        // Apply title and author search filter
        if (q.length > 0) {
          pool = pool.filter(b => 
            b.title.toLowerCase().includes(q) || 
            b.author.toLowerCase().includes(q)
          );
        }

        // Update headings and tags
        if (activeSearchScope === "all") {
          if (catalogueGenreTag) catalogueGenreTag.textContent = "ALL GENRES CATALOGUE";
          if (catalogueTitle) {
            catalogueTitle.textContent = q.length > 0 ? "Search Results Across All Genres" : "All Genres Collection";
          }
          if (catalogueSubtitle) {
            catalogueSubtitle.textContent = "Browsing all 72 curated titles across our six reading genres.";
          }
          if (catalogueActivePill) {
            catalogueActivePill.textContent = q.length > 0 ? `Scope: All Genres ("${activeSearchQuery.trim()}")` : "Scope: All Genres (72 Books)";
          }
        } else {
          const currentMeta = genreMetadata[activeGenreId] || { name: "Curated Books", tag: "BOOK NOOK", subtitle: "Curated reading collection." };
          if (catalogueGenreTag) catalogueGenreTag.textContent = currentMeta.tag;
          if (catalogueTitle) {
            catalogueTitle.textContent = hasExploredGenre ? `Explore ${currentMeta.name}` : "Find Your Next Read";
          }
          if (catalogueSubtitle) {
            catalogueSubtitle.textContent = hasExploredGenre ? currentMeta.subtitle : "A little collection of stories waiting to be discovered.";
          }
          if (catalogueActivePill) {
            catalogueActivePill.textContent = q.length > 0 ? `Genre: ${currentMeta.name} ("${activeSearchQuery.trim()}")` : `Genre: ${currentMeta.name}`;
          }
        }

        // Update Result Count Feedback
        const count = pool.length;
        if (catalogueResultsCount) {
          if (count === 1) {
            catalogueResultsCount.textContent = "1 book found";
          } else {
            catalogueResultsCount.textContent = `${count} books found`;
          }
        }

        // Show/hide clear search button
        if (bookSearchClearBtn) {
          bookSearchClearBtn.style.display = q.length > 0 ? 'flex' : 'none';
        }

        // Handle empty search results state
        if (count === 0) {
          bookCardsGrid.style.display = 'none';
          bookCardsGrid.innerHTML = '';
          if (catalogueEmptyState) catalogueEmptyState.style.display = 'block';
        } else {
          if (catalogueEmptyState) catalogueEmptyState.style.display = 'none';
          bookCardsGrid.style.display = 'grid';
          bookCardsGrid.innerHTML = pool.map(createBookCardHtml).join('');
        }
      }

      // Select and switch genre
      function selectGenre(genreId, shouldScroll) {
        if (!genreMetadata[genreId]) return;
        hasExploredGenre = true;
        activeGenreId = genreId;
        activeSearchQuery = "";
        activeSearchScope = "selected";

        if (bookSearchInput) bookSearchInput.value = "";
        if (bookSearchScope) bookSearchScope.value = "selected";

        // Update active highlight class on genre cards
        bnCards.forEach(c => {
          const cardId = c.getAttribute('data-genre-id') || c.getAttribute('data-genre')?.toLowerCase().replace(/[^a-z]/g, '-');
          if (cardId === genreId || c.getAttribute('data-genre') === genreMetadata[genreId].name) {
            c.classList.add('is-active-genre');
            c.setAttribute('aria-selected', 'true');
          } else {
            c.classList.remove('is-active-genre');
            c.setAttribute('aria-selected', 'false');
          }
        });

        renderBookCatalogue();

        if (shouldScroll && catalogueSection) {
          const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          catalogueSection.scrollIntoView({
            behavior: prefersReducedMotion ? 'auto' : 'smooth',
            block: 'start'
          });
          // Focus search input for immediate user convenience
          setTimeout(() => {
            if (bookSearchInput) bookSearchInput.focus({ preventScroll: true });
          }, prefersReducedMotion ? 50 : 450);
        }
      }

      // Attach Event Listeners to Explore Buttons and Genre Cards
      bnCards.forEach(card => {
        // Map data-genre text or data-genre-id to our genre keys
        const rawGenre = card.getAttribute('data-genre-id') || card.getAttribute('data-genre') || '';
        let mappedId = "fiction";
        if (rawGenre.toLowerCase().includes('romance')) mappedId = "romance";
        else if (rawGenre.toLowerCase().includes('mystery')) mappedId = "mystery";
        else if (rawGenre.toLowerCase().includes('fantasy')) mappedId = "fantasy";
        else if (rawGenre.toLowerCase().includes('personal') || rawGenre.toLowerCase().includes('growth')) mappedId = "personal-growth";
        else if (rawGenre.toLowerCase().includes('poetry') || rawGenre.toLowerCase().includes('classics')) mappedId = "poetry-classics";
        else mappedId = "fiction";

        card.setAttribute('data-genre-id', mappedId);

        card.addEventListener('click', (e) => {
          e.preventDefault();
          selectGenre(mappedId, true);
        });

        card.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            selectGenre(mappedId, true);
          }
        });
      });

      // "Back to Genres" Button Smooth Scrolling
      if (backToGenresBtn) {
        backToGenresBtn.addEventListener('click', () => {
          const bookNookGrid = document.getElementById('book-nook') || document.getElementById('bookNookGrid');
          if (bookNookGrid) {
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            bookNookGrid.scrollIntoView({
              behavior: prefersReducedMotion ? 'auto' : 'smooth',
              block: 'start'
            });
            // Focus active genre card
            const activeCard = document.querySelector('.bn-card.is-active-genre') || bnCards[0];
            if (activeCard) activeCard.focus();
          }
        });
      }

      // Real-time Search Input Listener
      if (bookSearchInput) {
        bookSearchInput.addEventListener('input', (e) => {
          activeSearchQuery = e.target.value;
          renderBookCatalogue();
        });
      }

      // Clear Search Button
      if (bookSearchClearBtn) {
        bookSearchClearBtn.addEventListener('click', () => {
          activeSearchQuery = "";
          if (bookSearchInput) {
            bookSearchInput.value = "";
            bookSearchInput.focus();
          }
          renderBookCatalogue();
        });
      }

      // Empty State Clear Button
      if (emptyStateClearBtn) {
        emptyStateClearBtn.addEventListener('click', () => {
          activeSearchQuery = "";
          if (bookSearchInput) {
            bookSearchInput.value = "";
            bookSearchInput.focus();
          }
          renderBookCatalogue();
        });
      }

      // Search Scope Selector Change Listener
      if (bookSearchScope) {
        bookSearchScope.addEventListener('change', (e) => {
          activeSearchScope = e.target.value;
          renderBookCatalogue();
        });
      }

      // Delegated click handler for genre badges inside the book grid
      if (bookCardsGrid) {
        bookCardsGrid.addEventListener('click', (e) => {
          const badge = e.target.closest('.book-genre-badge');
          if (badge) {
            const gid = badge.getAttribute('data-genre-id');
            if (gid) {
              selectGenre(gid, true);
            }
          }
        });
      }

      // Initial catalogue render on page load
      selectGenre("fiction", false);

      /*
         ==========================================================================
         MERCHANDISE PRODUCTS DATA CONFIGURATION
         Easily customize or replace the 4 merchandise images, titles, and prices:
         ==========================================================================
      */
      const shopMerchandise = [
        {
          id: "merch-1",
          name: "Illustrated Bookmarks (Set of 4)",
          price: 240,
          image: "images/merch-bookmarks.jpg",
          alt: "Set of four illustrated cat bookmarks with silky tassels fanned out on a warm wooden tabletop"
        },
        {
          id: "merch-2",
          name: "Purr & Pages Ceramic Mug",
          price: 550,
          image: "images/merch-mug.jpg",
          alt: "Purr & Pages handmade cream stoneware ceramic mug with handle, stamped with the official Purr & Pages logo, sweet cat illustrations, and paw prints"
        },
        {
          id: "merch-3",
          name: "Cat-Themed Tote Bag",
          price: 480,
          image: "images/merch-tote.jpg",
          alt: "Natural cream cotton canvas tote bag with shoulder handles, screen-printed with the official Purr & Pages logo, sleeping cat on books, and playful cat illustrations"
        },
        {
          id: "merch-4",
          name: "Book-Lover Gift Bundle",
          price: 1150,
          image: "images/merch-gift-bundle.jpg",
          alt: "Book-Lover Gift Bundle containing ceramic mug, canvas tote bag, bookmark set, and artisan drip coffee sachets in a kraft gift box"
        }
      ];

      // Add to cart buttons on merchandise
      document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.getAttribute('data-id');
          const name = btn.getAttribute('data-name');
          const price = parseInt(btn.getAttribute('data-price'), 10);

          const existing = cart.find(i => i.id === id);
          if (existing) {
            existing.quantity++;
          } else {
            cart.push({ id, name, price, quantity: 1 });
          }

          updateCartUI();
          toggleCart(true);

          // Brief button feedback
          const originalText = btn.textContent;
          btn.textContent = "Added! ✓";
          setTimeout(() => { btn.textContent = originalText; }, 1200);
        });
      });

      if (checkoutDemoBtn) {
        checkoutDemoBtn.addEventListener('click', () => {
          alert("Demo Notice: Purr & Pages is a fictional concept website. In a live store, this would securely redirect to your payment gateway!");
        });
      }

      // ==========================================================================
      // 8. CONTACT & ENQUIRY FORM VALIDATION
      // ==========================================================================
      const enquiryForm = document.getElementById('enquiryForm');
      const formSuccessAlert = document.getElementById('formSuccessAlert');

      if (enquiryForm) {
        enquiryForm.addEventListener('submit', (e) => {
          e.preventDefault();
          let isValid = true;

          const nameInput = document.getElementById('userName');
          const emailInput = document.getElementById('userEmail');
          const messageInput = document.getElementById('userMessage');

          // Name validation
          if (!nameInput.value.trim()) {
            nameInput.classList.add('error');
            isValid = false;
          } else {
            nameInput.classList.remove('error');
          }

          // Email validation
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
            emailInput.classList.add('error');
            isValid = false;
          } else {
            emailInput.classList.remove('error');
          }

          // Message validation
          if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
            messageInput.classList.add('error');
            isValid = false;
          } else {
            messageInput.classList.remove('error');
          }

          if (isValid) {
            formSuccessAlert.style.display = 'block';
            formSuccessAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            enquiryForm.reset();
            setTimeout(() => {
              formSuccessAlert.style.display = 'none';
            }, 8000);
          }
        });
      }

      // Global Escape Key to close any active modal or cart
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          closeCatModal();
          closeLightbox();
          toggleCart(false);
        }
      });
    });