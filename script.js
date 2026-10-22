/**
 * PURR & PAGES — MAIN JAVASCRIPT CONTROLLER
 * Brand: Purr & Pages | Tagline: READ • SIP • PURR
 * Vanilla JavaScript (ES6+) — Clean, modular, and dependency-free.
 */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // 1. DATA REPOSITORY: 72 REAL PUBLISHED BOOKS (12 PER GENRE)
  // =========================================================================
  const booksData = [
    // 1. Romance (1–12)
    { id: 1, title: "The Seven Husbands of Evelyn Hugo", author: "Taylor Jenkins Reid", genre: "Romance", cover: "assets/images/books/the-seven-husbands-of-evelyn-hugo.jpg" },
    { id: 2, title: "Red, White & Royal Blue", author: "Casey McQuiston", genre: "Romance", cover: "assets/images/books/red-white-royal-blue.jpg" },
    { id: 3, title: "Beach Read", author: "Emily Henry", genre: "Romance", cover: "assets/images/books/beach-read.jpg" },
    { id: 4, title: "It Ends with Us", author: "Colleen Hoover", genre: "Romance", cover: "assets/images/books/it-ends-with-us.jpg" },
    { id: 5, title: "The Love Hypothesis", author: "Ali Hazelwood", genre: "Romance", cover: "assets/images/books/the-love-hypothesis.jpg" },
    { id: 6, title: "Book Lovers", author: "Emily Henry", genre: "Romance", cover: "assets/images/books/book-lovers.jpg" },
    { id: 7, title: "People We Meet on Vacation", author: "Emily Henry", genre: "Romance", cover: "assets/images/books/people-we-meet-on-vacation.jpg" },
    { id: 8, title: "Normal People", author: "Sally Rooney", genre: "Romance", cover: "assets/images/books/normal-people.jpg" },
    { id: 9, title: "Outlander", author: "Diana Gabaldon", genre: "Romance", cover: "assets/images/books/outlander.jpg" },
    { id: 10, title: "The Hating Game", author: "Sally Thorne", genre: "Romance", cover: "assets/images/books/the-hating-game.jpg" },
    { id: 11, title: "Me Before You", author: "Jojo Moyes", genre: "Romance", cover: "assets/images/books/me-before-you.jpg" },
    { id: 12, title: "One Day", author: "David Nicholls", genre: "Romance", cover: "assets/images/books/one-day.jpg" },

    // 2. Fantasy (13–24)
    { id: 13, title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy", cover: "assets/images/books/the-hobbit.jpg" },
    { id: 14, title: "The Night Circus", author: "Erin Morgenstern", genre: "Fantasy", cover: "assets/images/books/the-night-circus.jpg" },
    { id: 15, title: "The Name of the Wind", author: "Patrick Rothfuss", genre: "Fantasy", cover: "assets/images/books/the-name-of-the-wind.jpg" },
    { id: 16, title: "A Game of Thrones", author: "George R.R. Martin", genre: "Fantasy", cover: "assets/images/books/a-game-of-thrones.jpg" },
    { id: 17, title: "The Way of Kings", author: "Brandon Sanderson", genre: "Fantasy", cover: "assets/images/books/the-way-of-kings.jpg" },
    { id: 18, title: "Good Omens", author: "Neil Gaiman & Terry Pratchett", genre: "Fantasy", cover: "assets/images/books/good-omens.jpg" },
    { id: 19, title: "Circe", author: "Madeline Miller", genre: "Fantasy", cover: "assets/images/books/circe.jpg" },
    { id: 20, title: "The Priory of the Orange Tree", author: "Samantha Shannon", genre: "Fantasy", cover: "assets/images/books/the-priory-of-the-orange-tree.jpg" },
    { id: 21, title: "American Gods", author: "Neil Gaiman", genre: "Fantasy", cover: "assets/images/books/american-gods.jpg" },
    { id: 22, title: "Mistborn: The Final Empire", author: "Brandon Sanderson", genre: "Fantasy", cover: "assets/images/books/mistborn-final-empire.jpg" },
    { id: 23, title: "The Fellowship of the Ring", author: "J.R.R. Tolkien", genre: "Fantasy", cover: "assets/images/books/the-fellowship-of-the-ring.jpg" },
    { id: 24, title: "The Starless Sea", author: "Erin Morgenstern", genre: "Fantasy", cover: "assets/images/books/the-starless-sea.jpg" },

    // 3. Mystery & Thriller (25–36)
    { id: 25, title: "The Thursday Murder Club", author: "Richard Osman", genre: "Mystery & Thriller", cover: "assets/images/books/the-thursday-murder-club.jpg" },
    { id: 26, title: "The Shadow of the Wind", author: "Carlos Ruiz Zafón", genre: "Mystery & Thriller", cover: "assets/images/books/the-shadow-of-the-wind.jpg" },
    { id: 27, title: "And Then There Were None", author: "Agatha Christie", genre: "Mystery & Thriller", cover: "assets/images/books/and-then-there-were-none.jpg" },
    { id: 28, title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson", genre: "Mystery & Thriller", cover: "assets/images/books/the-girl-with-the-dragon-tattoo.jpg" },
    { id: 29, title: "Gone Girl", author: "Gillian Flynn", genre: "Mystery & Thriller", cover: "assets/images/books/gone-girl.jpg" },
    { id: 30, title: "The Da Vinci Code", author: "Dan Brown", genre: "Mystery & Thriller", cover: "assets/images/books/the-da-vinci-code.jpg" },
    { id: 31, title: "The Silent Patient", author: "Alex Michaelides", genre: "Mystery & Thriller", cover: "assets/images/books/the-silent-patient.jpg" },
    { id: 32, title: "Murder on the Orient Express", author: "Agatha Christie", genre: "Mystery & Thriller", cover: "assets/images/books/murder-on-the-orient-express.jpg" },
    { id: 33, title: "Big Little Lies", author: "Liane Moriarty", genre: "Mystery & Thriller", cover: "assets/images/books/big-little-lies.jpg" },
    { id: 34, title: "The Maid", author: "Nita Prose", genre: "Mystery & Thriller", cover: "assets/images/books/the-maid.jpg" },
    { id: 35, title: "In the Woods", author: "Tana French", genre: "Mystery & Thriller", cover: "assets/images/books/in-the-woods.jpg" },
    { id: 36, title: "Sharp Objects", author: "Gillian Flynn", genre: "Mystery & Thriller", cover: "assets/images/books/sharp-objects.jpg" },

    // 4. Literary Fiction (37–48)
    { id: 37, title: "Where the Crawdads Sing", author: "Delia Owens", genre: "Literary Fiction", cover: "assets/images/books/where-the-crawdads-sing.jpg" },
    { id: 38, title: "The Book Thief", author: "Markus Zusak", genre: "Literary Fiction", cover: "assets/images/books/the-book-thief.jpg" },
    { id: 39, title: "The Midnight Library", author: "Matt Haig", genre: "Literary Fiction", cover: "assets/images/books/the-midnight-library.jpg" },
    { id: 40, title: "A Man Called Ove", author: "Fredrik Backman", genre: "Literary Fiction", cover: "assets/images/books/a-man-called-ove.jpg" },
    { id: 41, title: "The Kite Runner", author: "Khaled Hosseini", genre: "Literary Fiction", cover: "assets/images/books/the-kite-runner.jpg" },
    { id: 42, title: "Life of Pi", author: "Yann Martel", genre: "Literary Fiction", cover: "assets/images/books/life-of-pi.jpg" },
    { id: 43, title: "All the Light We Cannot See", author: "Anthony Doerr", genre: "Literary Fiction", cover: "assets/images/books/all-the-light-we-cannot-see.jpg" },
    { id: 44, title: "The Overstory", author: "Richard Powers", genre: "Literary Fiction", cover: "assets/images/books/the-overstory.jpg" },
    { id: 45, title: "A Thousand Splendid Suns", author: "Khaled Hosseini", genre: "Literary Fiction", cover: "assets/images/books/a-thousand-splendid-suns.jpg" },
    { id: 46, title: "Beloved", author: "Toni Morrison", genre: "Literary Fiction", cover: "assets/images/books/beloved.jpg" },
    { id: 47, title: "Never Let Me Go", author: "Kazuo Ishiguro", genre: "Literary Fiction", cover: "assets/images/books/never-let-me-go.jpg" },
    { id: 48, title: "Pachinko", author: "Min Jin Lee", genre: "Literary Fiction", cover: "assets/images/books/pachinko.jpg" },

    // 5. Young Adult (49–60)
    { id: 49, title: "Six of Crows", author: "Leigh Bardugo", genre: "Young Adult", cover: "assets/images/books/six-of-crows.jpg" },
    { id: 50, title: "The Hunger Games", author: "Suzanne Collins", genre: "Young Adult", cover: "assets/images/books/the-hunger-games.jpg" },
    { id: 51, title: "The Fault in Our Stars", author: "John Green", genre: "Young Adult", cover: "assets/images/books/the-fault-in-our-stars.jpg" },
    { id: 52, title: "To All the Boys I've Loved Before", author: "Jenny Han", genre: "Young Adult", cover: "assets/images/books/to-all-the-boys-ive-loved-before.jpg" },
    { id: 53, title: "Divergent", author: "Veronica Roth", genre: "Young Adult", cover: "assets/images/books/divergent.jpg" },
    { id: 54, title: "The Perks of Being a Wallflower", author: "Stephen Chbosky", genre: "Young Adult", cover: "assets/images/books/the-perks-of-being-a-wallflower.jpg" },
    { id: 55, title: "One of Us Is Lying", author: "Karen M. McManus", genre: "Young Adult", cover: "assets/images/books/one-of-us-is-lying.jpg" },
    { id: 56, title: "We Were Liars", author: "E. Lockhart", genre: "Young Adult", cover: "assets/images/books/we-were-liars.jpg" },
    { id: 57, title: "A Good Girl's Guide to Murder", author: "Holly Jackson", genre: "Young Adult", cover: "assets/images/books/a-good-girls-guide-to-murder.jpg" },
    { id: 58, title: "Shadow and Bone", author: "Leigh Bardugo", genre: "Young Adult", cover: "assets/images/books/shadow-and-bone.jpg" },
    { id: 59, title: "The Maze Runner", author: "James Dashner", genre: "Young Adult", cover: "assets/images/books/the-maze-runner.jpg" },
    { id: 60, title: "Eleanor & Park", author: "Rainbow Rowell", genre: "Young Adult", cover: "assets/images/books/eleanor-and-park.jpg" },

    // 6. Classics (61–72)
    { id: 61, title: "Pride and Prejudice", author: "Jane Austen", genre: "Classics", cover: "assets/images/books/pride-and-prejudice.jpg" },
    { id: 62, title: "1984", author: "George Orwell", genre: "Classics", cover: "assets/images/books/1984.jpg" },
    { id: 63, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classics", cover: "assets/images/books/the-great-gatsby.jpg" },
    { id: 64, title: "The Little Prince", author: "Antoine de Saint-Exupéry", genre: "Classics", cover: "assets/images/books/the-little-prince.jpg" },
    { id: 65, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Classics", cover: "assets/images/books/to-kill-a-mockingbird.jpg" },
    { id: 66, title: "Jane Eyre", author: "Charlotte Brontë", genre: "Classics", cover: "assets/images/books/jane-eyre.jpg" },
    { id: 67, title: "Wuthering Heights", author: "Emily Brontë", genre: "Classics", cover: "assets/images/books/wuthering-heights.jpg" },
    { id: 68, title: "Frankenstein", author: "Mary Shelley", genre: "Classics", cover: "assets/images/books/frankenstein.jpg" },
    { id: 69, title: "The Picture of Dorian Gray", author: "Oscar Wilde", genre: "Classics", cover: "assets/images/books/the-picture-of-dorian-gray.jpg" },
    { id: 70, title: "Little Women", author: "Louisa May Alcott", genre: "Classics", cover: "assets/images/books/little-women.jpg" },
    { id: 71, title: "Brave New World", author: "Aldous Huxley", genre: "Classics", cover: "assets/images/books/brave-new-world.jpg" },
    { id: 72, title: "Animal Farm", author: "George Orwell", genre: "Classics", cover: "assets/images/books/animal-farm.jpg" }
  ];

  // =========================================================================
  // 1B. DATA REPOSITORY: 10 BOOKSHOP RESIDENT CATS
  // =========================================================================
  const catsData = [
    {
      id: 1,
      name: "Mochi",
      category: "sleepy",
      title: "The Professional Napper",
      tag: "Sleepy Sweetheart",
      appearance: "A fluffy cream-and-white cat with soft fur, round cheeks, and a gentle expression.",
      bio: "Mochi believes that every good book deserves a comfortable reading companion and every afternoon deserves at least three naps. Usually found curled up on a cushion beside the window, Mochi has perfected the art of looking adorable without doing absolutely anything. Available for admiration, occasionally available for cuddles.",
      quote: "One more chapter? Make it one more nap.",
      spot: "The sunniest window seat.",
      activity: "Napping beside open books.",
      image: "assets/images/cats/cat-mochi.jpg",
      icon: "📖"
    },
    {
      id: 2,
      name: "Biscuit",
      category: "explorers",
      title: "The Friendly Little Greeter",
      tag: "Social Butterfly",
      appearance: "A warm ginger-and-white cat with an expressive face, soft fur, and a welcoming personality.",
      bio: "Biscuit considers every visitor a potential best friend. This cheerful little greeter loves inspecting shopping bags, supervising café arrivals, and sitting beside anyone who looks like they need company. Biscuit's social calendar is always full, especially when someone sits down with a good book.",
      quote: "You came for coffee. You stayed for me.",
      spot: "Near the entrance or a welcoming lounge chair.",
      activity: "Greeting visitors and investigating bags.",
      image: "assets/images/cats/cat-biscuit.jpg",
      icon: "☕"
    },
    {
      id: 3,
      name: "Pepper",
      category: "playful",
      title: "The Tiny Mischief-Maker",
      tag: "Curious Chaos",
      appearance: "A sleek black-and-white cat with alert eyes and a playful, inquisitive expression.",
      bio: "Pepper is convinced that bookmarks are toys, paper bags are secret hideouts, and every unattended book needs a thorough inspection. With a curious nose and a talent for appearing where least expected, Pepper adds a little unpredictability to every café visit. Quiet reading time is never guaranteed.",
      quote: "I didn't knock it over. The book wanted to explore.",
      spot: "Between the bookshelves.",
      activity: "Exploring, investigating, and playing.",
      image: "assets/images/cats/cat-pepper.jpg",
      icon: "🐾"
    },
    {
      id: 4,
      name: "Chai",
      category: "quiet",
      title: "The Cosy Companion",
      tag: "Comfort Seeker",
      appearance: "A soft brown tabby cat with warm markings, relaxed eyes, and a calm, comforting presence.",
      bio: "Chai is the living definition of a slow afternoon. This gentle companion enjoys peaceful corners, quiet company, and the comforting sound of pages turning. Chai is happiest when the café is calm and a favourite human is nearby, enjoying a warm drink and a good story.",
      quote: "Slow sips. Soft paws. Good stories.",
      spot: "A cushioned armchair in a quiet corner.",
      activity: "Lounging beside peaceful readers.",
      image: "assets/images/cats/cat-chai.jpg",
      icon: "🌿"
    },
    {
      id: 5,
      name: "Waffles",
      category: "sleepy",
      title: "The Sleepy Bookworm",
      tag: "Dreamy Reader",
      appearance: "A fluffy white cat with bright blue eyes and a soft, cloud-like coat.",
      bio: "Waffles starts every day with excellent intentions: explore the café, inspect a few books, and perhaps make a new friend. Somehow, these plans always end with a nap in a patch of sunlight. Waffles has never finished a chapter, but has personally tested the comfort of almost every reading cushion.",
      quote: "I'll finish this chapter after my nap.",
      spot: "A sunny windowsill beside the shelves.",
      activity: "Sleeping on cushions and watching birds.",
      image: "assets/images/cats/cat-waffles.jpg",
      icon: "☁️"
    },
    {
      id: 6,
      name: "Fig",
      category: "explorers",
      title: "The Curious Explorer",
      tag: "Little Adventurer",
      appearance: "An orange ginger tabby with expressive eyes, distinctive stripes, and an alert, adventurous face.",
      bio: "Fig is the café's self-appointed explorer. New deliveries, mysterious corners, and freshly arranged bookshelves all demand immediate investigation. Fig approaches everyday life like the beginning of a grand adventure, proving that you don't need to leave the bookstore to discover a whole new world.",
      quote: "Every corner hides a new chapter.",
      spot: "Beside the lower bookshelves and cosy hideaways.",
      activity: "Exploring new surroundings.",
      image: "assets/images/cats/cat-fig.jpg",
      icon: "🧭"
    },
    {
      id: 7,
      name: "Pickles",
      category: "playful",
      title: "The Tiny Trouble-Maker",
      tag: "Playful Menace",
      appearance: "A grey tabby cat with a round face, bright green eyes, and a mischievous expression.",
      bio: "Pickles has two hobbies: making unexpected appearances and acting completely innocent afterward. A rustle of paper or the movement of a dangling bookmark is enough to spark a new investigation. Despite the mischief, Pickles has a surprisingly sweet side and can often be found relaxing after a busy day of supervising absolutely everything.",
      quote: "Trouble? I prefer the term plot development.",
      spot: "Near the interactive play area.",
      activity: "Chasing toys and investigating interesting objects.",
      image: "assets/images/cats/cat-pickles.jpg",
      icon: "⭐"
    },
    {
      id: 8,
      name: "Ink",
      category: "quiet",
      title: "The Midnight Poet",
      tag: "Quiet Observer",
      appearance: "An elegant black cat with glossy fur, golden eyes, and a calm, mysterious expression.",
      bio: "Ink is a quiet soul with a talent for finding the most peaceful corner in the room. While the others entertain the café, Ink prefers to observe from a comfortable distance, as though collecting inspiration for an unpublished novel. A little mysterious, a little independent, and entirely unforgettable.",
      quote: "Some stories are better told in silence.",
      spot: "A secluded reading nook.",
      activity: "Quiet observation and resting in peaceful places.",
      image: "assets/images/cats/cat-ink.jpg",
      icon: "✒️"
    },
    {
      id: 9,
      name: "Pudding",
      category: "quiet",
      title: "The Royal Reviewer",
      tag: "Queen of Comfort",
      appearance: "A beautiful calico cat with distinctive orange, black, and white patches and a confident expression.",
      bio: "Pudding takes comfort very seriously. Every cushion must meet her standards, every cosy corner deserves an inspection, and every visitor may be observed before being granted the honour of her attention. She is the café's unofficial quality-control expert, ensuring that relaxation remains a first-class experience.",
      quote: "The cushion is mine. The book may stay.",
      spot: "The softest armchair in the café.",
      activity: "Inspecting comfortable spaces and watching the room.",
      image: "assets/images/cats/cat-pudding.jpg",
      icon: "👑"
    },
    {
      id: 10,
      name: "Noodle",
      category: "explorers",
      title: "The Little Daydreamer",
      tag: "Curious Kitten",
      appearance: "A small, fluffy cream-coloured kitten with a sweet face, soft fur, and bright, curious eyes.",
      bio: "Noodle sees magic in the smallest things: a sunbeam on the floor, a ribbon on a gift, or the gentle movement of a page. Curious, wiggly, and full of wonder, Noodle turns ordinary café moments into tiny adventures. When the exploring is over, a warm, quiet corner is the perfect place to recharge.",
      quote: "Life is one big story. Let's explore it.",
      spot: "A cosy, supervised kitten-friendly play corner.",
      activity: "Discovering new toys and exploring safely.",
      image: "assets/images/cats/cat-noodle.jpg",
      icon: "✨"
    }
  ];

  // Gallery items for Lightbox (8 distinct themes)
  const galleryData = [
    { src: "assets/images/gallery/gallery-1.jpg", caption: "The Café Interior" },
    { src: "assets/images/gallery/gallery-2.jpg", caption: "Coffee in the Making" },
    { src: "assets/images/gallery/gallery-3.jpg", caption: "Our Feline Residents" },
    { src: "assets/images/gallery/gallery-4.jpg", caption: "Coffee & Conversation" },
    { src: "assets/images/gallery/gallery-5.jpg", caption: "A Cosy Reading Corner" },
    { src: "assets/images/gallery/gallery-6.jpg", caption: "A Cat Nap" },
    { src: "assets/images/gallery/gallery-7.jpg", caption: "Stories Waiting to Be Read" },
    { src: "assets/images/gallery/gallery-8.jpg", caption: "Books, Cats & Coffee Together" }
  ];

  // =========================================================================
  // 2. CUSTOM PAW CURSOR (DESKTOP ONLY)
  // =========================================================================
  const pawCursor = document.getElementById('customPawCursor');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;

  if (pawCursor && !prefersReducedMotion && !isTouchDevice) {
    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;
    let isCursorActive = false;

    // Track mouse position
    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isCursorActive) {
        isCursorActive = true;
        pawCursor.classList.add('is-active');
        currentX = mouseX;
        currentY = mouseY;
      }
    }, { passive: true });

    // Smooth follower using requestAnimationFrame
    const updateCursor = () => {
      if (isCursorActive) {
        // Linear interpolation for smooth trailing
        currentX += (mouseX - currentX) * 0.22;
        currentY += (mouseY - currentY) * 0.22;
        pawCursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      }
      requestAnimationFrame(updateCursor);
    };
    requestAnimationFrame(updateCursor);

    // Subtle scale-up when hovering interactive elements
    const interactiveSelectors = 'a, button, input, textarea, select, .genre-card, .menu-item-row, .cat-profile-card, .product-card, .gallery-trigger';
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest(interactiveSelectors)) {
        pawCursor.classList.add('is-hovering');
      }
    });

    document.addEventListener('mouseout', (e) => {
      if (e.target.closest(interactiveSelectors)) {
        pawCursor.classList.remove('is-hovering');
      }
    });

    // Hide if mouse leaves window
    document.addEventListener('mouseleave', () => {
      pawCursor.classList.remove('is-active');
      isCursorActive = false;
    });
  }

  // =========================================================================
  // 3. HEADER SCROLL & MOBILE NAVIGATION TOGGLE
  // =========================================================================
  const siteHeader = document.getElementById('siteHeader');
  const navToggleBtn = document.getElementById('navToggleBtn');
  const primaryNav = document.getElementById('primaryNav');
  const navLinks = document.querySelectorAll('.nav-link');

  // Sticky header shadow on scroll
  const handleHeaderScroll = () => {
    if (window.scrollY > 40) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll();

  // Mobile menu open / close
  const toggleMobileNav = (state) => {
    const isExpanded = state !== undefined ? state : navToggleBtn.getAttribute('aria-expanded') !== 'true';
    navToggleBtn.setAttribute('aria-expanded', isExpanded);
    if (isExpanded) {
      primaryNav.classList.add('is-open');
      document.body.style.overflow = 'hidden'; // prevent background scroll
    } else {
      primaryNav.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  };

  if (navToggleBtn && primaryNav) {
    navToggleBtn.addEventListener('click', () => {
      toggleMobileNav();
    });

    // Close when any nav link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (primaryNav.classList.contains('is-open')) {
          toggleMobileNav(false);
        }
      });
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && primaryNav.classList.contains('is-open')) {
        toggleMobileNav(false);
        navToggleBtn.focus();
      }
    });

    // Close when resizing back to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 860 && primaryNav.classList.contains('is-open')) {
        toggleMobileNav(false);
      }
    });
  }

  // =========================================================================
  // 4. ACTIVE NAVIGATION LINK ON SCROLL (INTERSECTION OBSERVER)
  // =========================================================================
  const sections = document.querySelectorAll('section[id]');
  if ('IntersectionObserver' in window) {
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            const href = link.getAttribute('href').replace('#', '');
            if (href === currentId) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, {
      rootMargin: '-25% 0px -55% 0px',
      threshold: 0.1
    });

    sections.forEach(section => navObserver.observe(section));
  }

  // =========================================================================
  // 5. CAFÉ MENU CATEGORY FILTERING (TEXT-ONLY DESIGN)
  // =========================================================================
  const menuTabs = document.querySelectorAll('.menu-tab-btn');
  const menuRows = document.querySelectorAll('.menu-item-row');
  const catNoticeBanner = document.querySelector('.menu-cat-notice-banner');

  menuTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const selectedCategory = tab.getAttribute('data-category');

      // Update tab active states
      menuTabs.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      // Filter rows
      menuRows.forEach(row => {
        const itemCategory = row.getAttribute('data-category');
        if (selectedCategory === 'all' || itemCategory === selectedCategory) {
          row.style.display = 'flex';
          row.style.opacity = '0';
          setTimeout(() => { row.style.opacity = '1'; }, 30);
        } else {
          row.style.display = 'none';
        }
      });

      // Toggle feline treat notice banner
      if (catNoticeBanner) {
        catNoticeBanner.style.display = (selectedCategory === 'cat-treats') ? 'block' : 'none';
      }
    });
  });

  // =========================================================================
  // 5B. MEET OUR BOOKSHOP CATS: FILTERING & INTERACTIVE MODAL
  // =========================================================================
  const catFilterBtns = document.querySelectorAll('.cat-filter-btn');
  const catCards = document.querySelectorAll('.cat-profile-card');
  const catModal = document.getElementById('catProfileModal');
  const catModalBackdrop = document.getElementById('catModalBackdrop');
  const catModalCloseBtn = document.getElementById('catModalCloseBtn');
  const modalCatImg = document.getElementById('modalCatImg');
  const modalCatTag = document.getElementById('modalCatTag');
  const modalCatTitle = document.getElementById('modalCatTitle');
  const modalCatName = document.getElementById('modalCatName');
  const modalCatQuote = document.getElementById('modalCatQuote');
  const modalCatBio = document.getElementById('modalCatBio');
  const modalCatSpot = document.getElementById('modalCatSpot');
  const modalCatActivity = document.getElementById('modalCatActivity');
  let lastActiveCatTrigger = null;

  // Cat category filtering
  catFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedFilter = btn.getAttribute('data-filter');

      catFilterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      catCards.forEach(card => {
        const catCategory = card.getAttribute('data-cat-category');
        if (selectedFilter === 'all' || catCategory === selectedFilter) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          setTimeout(() => { card.style.opacity = '1'; }, 30);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Open Cat Profile Modal
  const openCatModal = (catId) => {
    const cat = catsData.find(c => c.id === parseInt(catId, 10));
    if (!cat || !catModal) return;

    lastActiveCatTrigger = document.activeElement;

    modalCatImg.src = cat.image;
    modalCatImg.alt = `Portrait of ${cat.name}`;
    modalCatTag.textContent = cat.tag;
    modalCatTitle.textContent = cat.title;
    modalCatName.textContent = `${cat.name} ${cat.icon || ''}`;
    modalCatQuote.textContent = `“${cat.quote}”`;
    modalCatBio.textContent = cat.bio;
    modalCatSpot.textContent = cat.spot;
    modalCatActivity.textContent = cat.activity;

    catModal.style.display = 'flex';
    catModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    catModalCloseBtn.focus();
  };

  const closeCatModal = () => {
    if (!catModal) return;
    catModal.style.display = 'none';
    catModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastActiveCatTrigger) lastActiveCatTrigger.focus();
  };

  // Wire up Meet Cat buttons
  const meetCatBtns = document.querySelectorAll('.btn-meet-cat');
  meetCatBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const catId = btn.getAttribute('data-cat-id');
      openCatModal(catId);
    });
  });

  if (catModal) {
    catModalCloseBtn.addEventListener('click', closeCatModal);
    catModalBackdrop.addEventListener('click', closeCatModal);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && catModal.style.display === 'flex') {
        closeCatModal();
      }
    });
  }

  // =========================================================================
  // 6. THE BOOK NOOK: DYNAMIC CATALOGUE, COMBINED SEARCH & GENRE FILTERING
  // =========================================================================
  const booksContainer = document.getElementById('booksCatalogueGrid');
  const searchInput = document.getElementById('bookSearchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const resetBooksBtn = document.getElementById('resetBooksBtn');
  const resultsCountEl = document.getElementById('bookResultsCount');
  const emptyStateEl = document.getElementById('emptyBooksState');
  const emptyResetBtn = document.getElementById('emptyResetBtn');
  const genreCards = document.querySelectorAll('.genre-card');

  let activeGenre = 'all';
  let searchQuery = '';

  // Render book cards into DOM (Strictly cover, genre badge, title, author only)
  const renderBooks = (booksToDisplay) => {
    if (!booksContainer) return;
    booksContainer.innerHTML = '';

    if (booksToDisplay.length === 0) {
      if (emptyStateEl) emptyStateEl.style.display = 'block';
      if (resultsCountEl) resultsCountEl.textContent = 'Showing 0 books';
      return;
    }

    if (emptyStateEl) emptyStateEl.style.display = 'none';

    // Status text
    if (resultsCountEl) {
      let statusText = `Showing ${booksToDisplay.length} of ${booksData.length} books`;
      if (activeGenre !== 'all') {
        statusText += ` in "${activeGenre}"`;
      }
      if (searchQuery.trim() !== '') {
        statusText += ` matching "${searchQuery}"`;
      }
      resultsCountEl.textContent = statusText;
    }

    // Create cards
    booksToDisplay.forEach(book => {
      const article = document.createElement('article');
      article.className = 'book-card fade-in-element is-visible';
      article.setAttribute('data-id', book.id);

      article.innerHTML = `
        <div class="book-card-cover-wrap">
          <img 
            src="${book.cover}" 
            alt="Book cover of ${book.title} by ${book.author}" 
            class="book-card-cover"
            loading="lazy"
          >
        </div>
        <div class="book-card-body">
          <span class="book-card-genre">${book.genre}</span>
          <h3 class="book-card-title">${book.title}</h3>
          <p class="book-card-author">by ${book.author}</p>
        </div>
      `;

      booksContainer.appendChild(article);
    });
  };

  // Filter logic combining Genre AND Search term
  const applyBookFilters = () => {
    const query = searchQuery.trim().toLowerCase();

    const filtered = booksData.filter(book => {
      // 1. Genre filter
      const matchesGenre = (activeGenre === 'all') || (book.genre.toLowerCase() === activeGenre.toLowerCase());
      
      // 2. Search filter (title, author, genre)
      const matchesSearch = (query === '') || 
        book.title.toLowerCase().includes(query) || 
        book.author.toLowerCase().includes(query) || 
        book.genre.toLowerCase().includes(query);

      return matchesGenre && matchesSearch;
    });

    renderBooks(filtered);

    // Show or hide clear controls
    const isFiltered = (activeGenre !== 'all') || (query !== '');
    if (resetBooksBtn) {
      resetBooksBtn.style.display = isFiltered ? 'inline-block' : 'none';
    }
    if (clearSearchBtn) {
      clearSearchBtn.style.display = (query !== '') ? 'flex' : 'none';
    }
  };

  // Reset all filters
  const resetAllBookFilters = () => {
    activeGenre = 'all';
    searchQuery = '';
    if (searchInput) searchInput.value = '';
    genreCards.forEach(c => c.classList.remove('is-selected'));
    applyBookFilters();
  };

  // Genre Cards click listener
  genreCards.forEach(card => {
    card.addEventListener('click', () => {
      const selected = card.getAttribute('data-genre');

      if (activeGenre === selected) {
        // Toggle off if already selected
        activeGenre = 'all';
        card.classList.remove('is-selected');
      } else {
        activeGenre = selected;
        genreCards.forEach(c => c.classList.remove('is-selected'));
        card.classList.add('is-selected');
      }

      applyBookFilters();

      // Smooth scroll to the search toolbar
      const toolbar = document.querySelector('.book-search-toolbar');
      if (toolbar) {
        toolbar.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Search Input live typing
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      applyBookFilters();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      searchQuery = '';
      if (searchInput) {
        searchInput.value = '';
        searchInput.focus();
      }
      applyBookFilters();
    });
  }

  if (resetBooksBtn) {
    resetBooksBtn.addEventListener('click', resetAllBookFilters);
  }

  if (emptyResetBtn) {
    emptyResetBtn.addEventListener('click', resetAllBookFilters);
  }

  // Initial render of all 72 books
  renderBooks(booksData);

  // =========================================================================
  // 7. ACCESSIBLE GALLERY LIGHTBOX MODAL
  // =========================================================================
  const galleryTriggers = document.querySelectorAll('.gallery-trigger');
  const lightboxModal = document.getElementById('galleryLightbox');
  const lightboxBackdrop = document.getElementById('lightboxBackdrop');
  const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
  const lightboxPrevBtn = document.getElementById('lightboxPrevBtn');
  const lightboxNextBtn = document.getElementById('lightboxNextBtn');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxCounter = document.getElementById('lightboxCounter');

  let currentGalleryIndex = 0;
  let galleryLastFocused = null;

  const updateLightboxContent = (index) => {
    const item = galleryData[index];
    if (!item) return;

    lightboxImg.src = item.src;
    lightboxImg.alt = item.caption;
    lightboxCaption.textContent = item.caption;
    lightboxCounter.textContent = `${index + 1} of ${galleryData.length}`;
  };

  const openLightbox = (index) => {
    galleryLastFocused = document.activeElement;
    currentGalleryIndex = index;
    updateLightboxContent(currentGalleryIndex);

    lightboxModal.style.display = 'flex';
    lightboxModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    lightboxCloseBtn.focus();
  };

  const closeLightbox = () => {
    lightboxModal.style.display = 'none';
    lightboxModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (galleryLastFocused) galleryLastFocused.focus();
  };

  const showNextImage = () => {
    currentGalleryIndex = (currentGalleryIndex + 1) % galleryData.length;
    updateLightboxContent(currentGalleryIndex);
  };

  const showPrevImage = () => {
    currentGalleryIndex = (currentGalleryIndex - 1 + galleryData.length) % galleryData.length;
    updateLightboxContent(currentGalleryIndex);
  };

  galleryTriggers.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      openLightbox(idx);
    });
  });

  if (lightboxModal) {
    lightboxCloseBtn.addEventListener('click', closeLightbox);
    lightboxBackdrop.addEventListener('click', closeLightbox);
    lightboxNextBtn.addEventListener('click', showNextImage);
    lightboxPrevBtn.addEventListener('click', showPrevImage);

    // Keyboard controls (Esc, Left arrow, Right arrow)
    document.addEventListener('keydown', (e) => {
      if (lightboxModal.style.display === 'flex') {
        if (e.key === 'Escape') {
          closeLightbox();
        } else if (e.key === 'ArrowRight') {
          showNextImage();
        } else if (e.key === 'ArrowLeft') {
          showPrevImage();
        }
      }
    });
  }

  // =========================================================================
  // 8. SOUVENIR BAG INTERACTION
  // =========================================================================
  const souvenirBtns = document.querySelectorAll('.demo-buy-btn');
  souvenirBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const originalHtml = btn.innerHTML;
      btn.innerHTML = '<span>Added to Bag! ✓</span>';
      btn.style.backgroundColor = 'var(--color-caramel)';

      setTimeout(() => {
        btn.innerHTML = originalHtml;
        btn.style.backgroundColor = '';
      }, 1800);
    });
  });

  // =========================================================================
  // 9. CONTACT FORM VALIDATION & WELCOMING FEEDBACK
  // =========================================================================
  const contactForm = document.getElementById('contactForm');
  const nameInput = document.getElementById('contactName');
  const emailInput = document.getElementById('contactEmail');
  const subjectInput = document.getElementById('contactSubject');
  const messageInput = document.getElementById('contactMessage');
  const charCounter = document.getElementById('charCounter');
  const formFeedback = document.getElementById('formFeedback');

  // Character counter for message
  if (messageInput && charCounter) {
    messageInput.addEventListener('input', () => {
      const len = messageInput.value.length;
      charCounter.textContent = `${len} / 15 min`;
      if (len >= 15) {
        charCounter.style.color = 'var(--color-muted-sage)';
      } else {
        charCounter.style.color = 'var(--color-text-muted)';
      }
    });
  }

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const setFieldError = (inputEl, errorId, message) => {
    inputEl.classList.add('has-error');
    const errEl = document.getElementById(errorId);
    if (errEl) errEl.textContent = message;
  };

  const clearFieldError = (inputEl, errorId) => {
    inputEl.classList.remove('has-error');
    const errEl = document.getElementById(errorId);
    if (errEl) errEl.textContent = '';
  };

  // Real-time error clearance on input
  [nameInput, emailInput, subjectInput, messageInput].forEach(input => {
    if (input) {
      input.addEventListener('input', () => {
        clearFieldError(input, `${input.name}Error`);
      });
    }
  });

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // 1. Validate Name
      if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
        setFieldError(nameInput, 'nameError', 'Please enter your full name (minimum 2 characters).');
        isValid = false;
      } else {
        clearFieldError(nameInput, 'nameError');
      }

      // 2. Validate Email
      if (!emailInput.value.trim() || !validateEmail(emailInput.value.trim())) {
        setFieldError(emailInput, 'emailError', 'Please enter a valid email address (e.g. reader@example.com).');
        isValid = false;
      } else {
        clearFieldError(emailInput, 'emailError');
      }

      // 3. Validate Subject
      if (!subjectInput.value) {
        setFieldError(subjectInput, 'subjectError', 'Please select a topic from the list.');
        isValid = false;
      } else {
        clearFieldError(subjectInput, 'subjectError');
      }

      // 4. Validate Message
      if (!messageInput.value.trim() || messageInput.value.trim().length < 15) {
        setFieldError(messageInput, 'messageError', 'Please write a message with at least 15 characters.');
        isValid = false;
      } else {
        clearFieldError(messageInput, 'messageError');
      }

      // If invalid, focus first error input
      if (!isValid) {
        const firstError = contactForm.querySelector('.has-error');
        if (firstError) firstError.focus();
        return;
      }

      // Clean, welcoming confirmation feedback
      formFeedback.className = 'form-feedback-box is-success';
      formFeedback.innerHTML = `
        <strong>Thank you, ${nameInput.value.trim()}!</strong>
        <p>Your message has been received. Our team and café cats will get back to you shortly.</p>
      `;
      formFeedback.style.display = 'block';

      // Reset form fields
      contactForm.reset();
      if (charCounter) charCounter.textContent = '0 / 15 min';

      // Scroll into view
      formFeedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }

  // =========================================================================
  // 10. DYNAMIC COPYRIGHT YEAR
  // =========================================================================
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // =========================================================================
  // 11. SCROLL ENTRANCE REVEAL (INTERSECTION OBSERVER)
  // =========================================================================
  if ('IntersectionObserver' in window && !prefersReducedMotion) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.1
    });

    const revealCandidates = document.querySelectorAll('.cat-profile-card, .cat-card, .menu-item-row, .product-card, .value-card, .about-narrative, .about-gallery, .contact-card, .contact-form, .cat-welfare-panel, .cats-closing-banner');
    revealCandidates.forEach(el => {
      el.classList.add('fade-in-element');
      revealObserver.observe(el);
    });
  }

});
