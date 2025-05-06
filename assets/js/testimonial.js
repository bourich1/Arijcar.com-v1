const testimonials = [
    {
      id: 1,
      lang: "en",
      name: "DAVID, TOURIST",
      origin: "From Canada",
      flag: "https://flagcdn.com/w40/ca.png",
      text: "Your car rental service made my trip seamless! The vehicle was clean, the process was quick, and the staff was incredibly helpful. Will definitely book again!",
      rating: 5,
      languageTag: "English"
    },
    {
      id: 2,
      lang: "fr",
      name: "ÉLODIE, VOYAGEUSE",
      origin: "De France",
      flag: "https://flagcdn.com/w40/fr.png",
      text: "Un service impeccable ! La voiture était parfaite et la réservation ultra-rapide. Merci pour votre professionnalisme. Je recommande vivement !",
      rating: 4.5,
      languageTag: "Français"
    },
    {
      id: 3,
      lang: "ar",
      name: "خالد، مسافر",
      origin: "من الإمارات",
      flag: "https://flagcdn.com/w40/ae.png",
      text: "الخدمة رائعة والسيارة كانت في حالة ممتازة. فريق العمل محترف وسريع في التعامل. شكرًا لكم على تجربة رائعة!",
      rating: 5,
      languageTag: "العربية",
      rtl: true
    },
    {
      id: 4,
      lang: "ma",
      name: "يوسف",
      origin: "من المغرب",
      flag: "https://flagcdn.com/w40/ma.png",
      text: "الخدمة زوينة بزاف! السيارات مزيانين والثمن معقول. خاصني نعاود مرة أخرى. شكرا بزاف!",
      rating: 4,
      languageTag: "الدارجة",
      rtl: true
    },
    {
      id: 5,
      lang: "en",
      name: "SARAH, BUSINESS",
      origin: "From USA",
      flag: "https://flagcdn.com/w40/us.png",
      text: "Perfect service for my business trip. The car was exactly as described and the pickup process took less than 5 minutes. Highly recommended!",
      rating: 5,
      languageTag: "English"
    },
    {
      id: 6,
      lang: "fr",
      name: "PIERRE, FAMILLE",
      origin: "De Belgique",
      flag: "https://flagcdn.com/w40/be.png",
      text: "Excellent service pour notre voyage familial. La voiture était spacieuse et propre. Nous reviendrons certainement!",
      rating: 5,
      languageTag: "Français"
    }
  ];
  
  // Function to generate star ratings
  function generateRatingStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
      stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
  }
  
  // Function to render testimonials
  function renderTestimonials(filterLang = 'all') {
    const filteredTestimonials = filterLang === 'all' 
      ? testimonials 
      : testimonials.filter(t => t.lang === filterLang);
    
    const testimonialsContainer = document.querySelector('.testimonials-container');
    testimonialsContainer.innerHTML = '';
    
    filteredTestimonials.forEach(testimonial => {
      const card = document.createElement('div');
      card.className = `testimonial-card ${testimonial.rtl ? 'rtl' : ''}`;
      card.dataset.lang = testimonial.lang;
      
      card.innerHTML = `
        <div class="testimonial-header">
          <img src="${testimonial.flag}" alt="${testimonial.origin} flag" class="flag-icon">
          <div class="customer-info">
            <div class="customer-name">${testimonial.name}</div>
            <div class="customer-origin">${testimonial.origin}</div>
          </div>
        </div>
        <p class="testimonial-text">
          ${testimonial.text}
        </p>
        <div class="rating">
          ${generateRatingStars(testimonial.rating)}
        </div>
        <span class="language-tag">${testimonial.languageTag}</span>
      `;
      
      testimonialsContainer.appendChild(card);
    });
  }
  
  // Initialize the testimonials
  document.addEventListener('DOMContentLoaded', function() {
    renderTestimonials();
    
    // Add filter button functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        renderTestimonials(this.dataset.lang);
      });
    });
    
    // Add scroll functionality
    const scrollContainer = document.getElementById('scrollContainer');
    const scrollLeftBtn = document.getElementById('scrollLeft');
    const scrollRightBtn = document.getElementById('scrollRight');
    
    scrollLeftBtn.addEventListener('click', () => {
      scrollContainer.scrollBy({ left: -300, behavior: 'smooth' });
    });
    
    scrollRightBtn.addEventListener('click', () => {
      scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
    });
    
    // Update scroll buttons visibility
    const updateScrollButtons = () => {
      scrollLeftBtn.style.display = scrollContainer.scrollLeft > 0 ? 'flex' : 'none';
      scrollRightBtn.style.display = 
        scrollContainer.scrollLeft < scrollContainer.scrollWidth - scrollContainer.clientWidth ? 'flex' : 'none';
    };
    
    scrollContainer.addEventListener('scroll', updateScrollButtons);
    window.addEventListener('resize', updateScrollButtons);
    updateScrollButtons();
  });


document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const scrollContainer = document.getElementById('scrollContainer');
    const scrollLeftBtn = document.getElementById('scrollLeft');
    const scrollRightBtn = document.getElementById('scrollRight');

    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-lang');
            
            testimonialCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-lang') === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Scroll functionality
    scrollLeftBtn.addEventListener('click', () => {
        scrollContainer.scrollBy({
            left: -300,
            behavior: 'smooth'
        });
    });

    scrollRightBtn.addEventListener('click', () => {
        scrollContainer.scrollBy({
            left: 300,
            behavior: 'smooth'
        });
    });

    // Hide/show scroll buttons based on scroll position
    const updateScrollButtons = () => {
        scrollLeftBtn.style.display = scrollContainer.scrollLeft > 0 ? 'flex' : 'none';
        scrollRightBtn.style.display = 
            scrollContainer.scrollLeft < scrollContainer.scrollWidth - scrollContainer.clientWidth ? 'flex' : 'none';
    };

    scrollContainer.addEventListener('scroll', updateScrollButtons);
    window.addEventListener('resize', updateScrollButtons);
    updateScrollButtons();

    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    testimonialCards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
});
  