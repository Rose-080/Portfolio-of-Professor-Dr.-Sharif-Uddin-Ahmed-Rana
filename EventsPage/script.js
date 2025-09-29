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