  // Conference data
  const conferences = [
    {
      badge: 'International Conference',
      date: 'Oct 2023',
      title: 'EAI Tes-TECH 2023 — Nikola Tesla Technologies',
      meta: '24–26 Oct 2023 • International Conference • Keynote Speaker',
      description: 'Explored Tesla-inspired innovations, automated transport, and renewable energy for future economies. Presented groundbreaking research on decentralized energy systems and their impact on sustainable urban development.',
      tags: ['Tesla Technologies', 'Renewable Energy', 'Future Transport'],
      link: 'https://pausetheworldforpeace.org/2023/06/28/we-speak-to-dr-sharif-uddin-ahmed-rana-eai-tes-tech-2023-eai-international-conference-on-advances-in-nikolatesla-technologies-in-the-twenty-first-century/'
    },
    {
      badge: 'Virtual Event',
      date: 'Feb 2023',
      title: 'Virtual Enlightenment Salon — U.S. Transhumanist Party',
      meta: '26 Feb 2023 • Online Global Event • Featured Speaker',
      description: 'Led engaging discussion on Nikola Tesla–inspired technologies, future transport systems, and decentralized energy networks. Addressed over 500 global participants on the intersection of technology and human advancement.',
      tags: ['Transhumanism', 'Future Tech', 'Innovation'],
      link: 'https://m.facebook.com/events/1527171054476981/?active_tab=about'
    },
    {
      badge: 'Panel Discussion',
      date: 'Nov 2023',
      title: 'AI in Smart Cities Summit 2023',
      meta: 'Dubai, UAE • International Summit • Panel Moderator',
      description: 'Moderated high-level panel on AI integration in urban planning, featuring city mayors, tech leaders, and policy makers from 15 countries.',
      tags: ['Smart Cities', 'Urban AI', 'Policy'],
      link: null
    },
    {
      badge: 'Research Presentation',
      date: 'Sep 2023',
      title: 'Knowledge Economy Forum — Harvard Business School',
      meta: 'Boston, USA • Academic Conference • Research Presenter',
      description: 'Presented research findings on AI-driven market research methodologies and their impact on emerging economies in South Asia.',
      tags: ['Knowledge Economy', 'Market Research', 'AI Applications'],
      link: null
    }
  ];

document.addEventListener("DOMContentLoaded", function() {
  // Generate conference cards dynamically
  function generateConferenceCards() {
    const container = document.querySelector('#conferences .row.g-4');
    container.innerHTML = '';
    conferences.forEach(conf => {
      const card = document.createElement('div');
      card.className = 'col-lg-6';
      card.innerHTML = `
        <div class="event-card">
          <div class="d-flex justify-content-between align-items-start mb-3">
            <span class="badge bg-${conf.badge === 'International Conference' ? 'success' : conf.badge === 'Virtual Event' ? 'info' : conf.badge === 'Panel Discussion' ? 'warning' : 'danger'}">${conf.badge}</span>
            <span class="text-muted small">${conf.date}</span>
          </div>
          <h3 class="text-xl font-semibold mb-3">${conf.title}</h3>
          <p class="text-sm text-gray-400 mb-3">${conf.meta}</p>
          <p class="text-gray-300 mb-4">${conf.description}</p>
          <div class="d-flex gap-2 mb-4">
            ${conf.tags.map(tag => `<span class="badge bg-outline-primary">${tag}</span>`).join('')}
          </div>
          ${conf.link ? `<a href="${conf.link}" target="_blank" class="btn btn-outline-primary">View Conference Details →</a>` : ''}
        </div>
      `;
      container.appendChild(card);
    });
  }

  // Media card hover functionality
  document.querySelectorAll('.media-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
      const videoUrl = this.getAttribute('data-video');
      const title = this.getAttribute('data-title');
      const meta = this.getAttribute('data-meta');
      const badge = this.getAttribute('data-badge');

      // Update featured video section
      document.getElementById('featuredVideo').src = videoUrl;
      document.getElementById('featuredTitle').textContent = title;
      document.getElementById('featuredMeta').textContent = meta;
      document.getElementById('featuredBadge').textContent = badge;
    });
  });

  particlesJS("particles-js", {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle"
        },
        "opacity": {
          "value": 0.5,
          "random": false
        },
        "size": {
          "value": 3,
          "random": true
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 2,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "attract": {
            "enable": false
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        }
      },
      "retina_detect": true
    });
  
  function getBadgeClass(badge) {
    if (badge.includes("Featured")) return "bg-warning text-dark";
    else if (badge.includes("Panel")) return "bg-primary";
    else if (badge.includes("Radio")) return "bg-success";
    else if (badge.includes("Podcast")) return "bg-info text-dark";
    else if (badge.includes("Interview")) return "bg-danger";
    else if (badge.includes("Speaker")) return "bg-info text-dark";
    return "bg-secondary";
  }

  function getBadgeColor(badge) {
    if (badge.includes("Featured")) return "rgba(255, 193, 7, 0.6)";
    else if (badge.includes("Panel")) return "rgba(13, 110, 253, 0.6)";
    else if (badge.includes("Radio")) return "rgba(25, 135, 84, 0.6)";
    else if (badge.includes("Podcast")) return "rgba(13, 202, 240, 0.6)";
    else if (badge.includes("Interview")) return "rgba(220, 53, 69, 0.6)";
    else if (badge.includes("Speaker")) return "rgba(13, 202, 240, 0.6)";
    return "rgba(108, 117, 125, 0.6)";
  }

  // Apply badge classes, hover glow, and click behavior
  const cards = document.querySelectorAll('.media-card');
  cards.forEach(card => {
    const badgeText = card.getAttribute('data-badge');
    const badgeEl = card.querySelector('.badge');
    if (badgeEl) {
      // set badge class and text
      badgeEl.className = `badge mb-2 ${getBadgeClass(badgeText)}`;
      badgeEl.textContent = badgeText;

      // add hover glow
      card.addEventListener('mouseenter', () => {
        badgeEl.style.boxShadow = `0 0 10px 2px ${getBadgeColor(badgeText)}`;
      });
      card.addEventListener('mouseleave', () => {
        badgeEl.style.boxShadow = 'none';
      });
    }

    // click to update featured section
    card.addEventListener('click', function() {
      const videoUrl = this.getAttribute('data-video');
      const title = this.getAttribute('data-title');
      const meta = this.getAttribute('data-meta');
      const badge = this.getAttribute('data-badge');

      document.querySelectorAll('.media-card').forEach(c => c.classList.remove('expanded'));

      document.getElementById('featuredVideo').src = videoUrl;
      document.getElementById('featuredTitle').textContent = title;
      document.getElementById('featuredMeta').textContent = meta;

      const featuredBadge = document.getElementById('featuredBadge');
      featuredBadge.textContent = badge;
      featuredBadge.className = `badge mb-2 ${getBadgeClass(badge)}`;

      this.classList.add('expanded');
    });
  });

});


 // Scroll Progress Bar
    window.addEventListener('scroll', () => {
      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (window.pageYOffset / scrollTotal) * 100;
      document.getElementById('scrollProgress').style.width = scrollProgress + '%';
    });

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });