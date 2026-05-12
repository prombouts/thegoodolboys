// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open');
        toggle.classList.toggle('active');
        toggle.setAttribute('aria-expanded', isOpen);
            });

    // Close nav on link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            toggle.classList.remove('active');
            toggle.setAttribute('aria-expanded', 'false');
        });
    });
}

        // Smooth scroll with fixed-header offset for all in-page nav links
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (event) => {
                const targetId = link.getAttribute('href');
                const targetEl = document.querySelector(targetId);
                if (!targetEl) return;

                event.preventDefault();

                const navHeight = document.querySelector('nav').offsetHeight;
                const targetTop = targetEl.getBoundingClientRect().top + window.pageYOffset;
                const scrollTop = Math.max(targetTop - navHeight - 8, 0);

                window.scrollTo({ top: scrollTop, behavior: 'smooth' });
                history.replaceState(null, '', targetId);
            });
        });

        // Scroll reveal
        const revealElements = document.querySelectorAll('.reveal');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -40px 0px'
        });

        revealElements.forEach(el => observer.observe(el));

        // Lightbox functionality
        const lightboxOverlay = document.getElementById('lightbox-overlay');
        const lightboxImage = document.getElementById('lightbox-image');
        const lightboxClose = document.getElementById('lightbox-close');
        const lightboxPrev = document.getElementById('lightbox-prev');
        const lightboxNext = document.getElementById('lightbox-next');
        const lightboxIndex = document.getElementById('lightbox-index');
        const galleryCards = document.querySelectorAll('.gallery-card[data-gallery-image]');
        const galleryImages = Array.from(galleryCards).map(card => card.dataset.galleryImage);
        let currentImageIndex = 0;

        const openLightbox = (index) => {
            currentImageIndex = index;
            lightboxImage.src = galleryImages[currentImageIndex];
            lightboxImage.alt = galleryCards[currentImageIndex].querySelector('img').alt;
            lightboxIndex.textContent = currentImageIndex + 1;
            lightboxOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        };

        const closeLightbox = () => {
            lightboxOverlay.classList.remove('active');
            document.body.style.overflow = '';
        };

        const showNext = () => {
            currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
            openLightbox(currentImageIndex);
        };

        const showPrev = () => {
            currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
            openLightbox(currentImageIndex);
        };

        // Gallery card click handlers
        galleryCards.forEach((card, index) => {
            card.addEventListener('click', () => openLightbox(index));
        });

        // Lightbox controls
        lightboxClose.addEventListener('click', closeLightbox);
        lightboxPrev.addEventListener('click', showPrev);
        lightboxNext.addEventListener('click', showNext);

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (!lightboxOverlay.classList.contains('active')) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') showNext();
            if (e.key === 'ArrowLeft') showPrev();
        });

        // Touch swipe support for mobile
        let touchStartX = 0;
        lightboxOverlay.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX;
        });

        lightboxOverlay.addEventListener('touchend', (e) => {
            const touchEndX = e.changedTouches[0].clientX;
            const diff = touchStartX - touchEndX;
            if (Math.abs(diff) > 50) {
                if (diff > 0) showNext();
                else showPrev();
            }
        });

        // Close on overlay click (not on image)
        lightboxOverlay.addEventListener('click', (e) => {
            if (e.target === lightboxOverlay) closeLightbox();
        });

        // Set total image count
        document.getElementById('lightbox-total').textContent = galleryImages.length;

        // Countdown to the nearest upcoming event
        const countdownRoot = document.getElementById('optredens-countdown');
        if (countdownRoot) {
            const eventCards = Array.from(document.querySelectorAll('.event-card[data-event-target]'));
            const countdownEvent = countdownRoot.querySelector('[data-countdown-event]');
            const countdownDate = countdownRoot.querySelector('[data-countdown-date]');
            const countdownGrid = countdownRoot.querySelector('[data-countdown-grid]');
            const fallbackEl = countdownRoot.querySelector('[data-countdown-fallback]');
            const daysEl = countdownRoot.querySelector('[data-countdown-days]');

            const getCalendarDayDiff = (target, now = new Date()) => {
                const todayUtc = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
                const targetUtc = Date.UTC(target.getFullYear(), target.getMonth(), target.getDate());
                return Math.floor((targetUtc - todayUtc) / 86400000);
            };

            const upcomingEvent = eventCards
                .map(card => ({
                    name: card.dataset.eventName,
                    label: card.dataset.eventDateLabel,
                    target: new Date(card.dataset.eventTarget)
                }))
                .filter(event => !Number.isNaN(event.target.getTime()) && getCalendarDayDiff(event.target) >= 0)
                .sort((a, b) => a.target - b.target)[0];

            const updateEventCardsCountdown = () => {
                const now = Date.now();
                eventCards.forEach(card => {
                    const targetRaw = card.dataset.eventTarget;
                    const name = (card.dataset.eventName || 'DIT OPTREDEN').toUpperCase();
                    const countdownEl = card.querySelector('[data-event-countdown]');
                    if (!countdownEl || !targetRaw) return;

                    const target = new Date(targetRaw);
                    if (Number.isNaN(target.getTime())) {
                        countdownEl.textContent = 'DATUM VOLGT';
                        return;
                    }

                    const daysLeft = getCalendarDayDiff(target, new Date(now));

                    if (daysLeft < 0) {
                        countdownEl.textContent = name + ' IS GEWEEST';
                        return;
                    }

                    if (daysLeft === 0) {
                        countdownEl.textContent = name + ' IS VANDAAG';
                        return;
                    }

                    const dayLabel = daysLeft === 1 ? 'DAG' : 'DAGEN';
                    countdownEl.textContent = 'NOG ' + String(daysLeft) + ' ' + dayLabel + ' TOT ' + name;
                });
            };

            updateEventCardsCountdown();

            if (!upcomingEvent) {
                countdownGrid.hidden = true;
                countdownDate.hidden = true;
                fallbackEl.hidden = false;
            } else {
                countdownEvent.textContent = upcomingEvent.name;
                countdownDate.textContent = upcomingEvent.label;
                const unitLabel = countdownRoot.querySelector('.countdown-unit-label');

                const tick = () => {
                    const days = getCalendarDayDiff(upcomingEvent.target);

                    if (days <= 0) {
                        daysEl.textContent = 'Vandaag';
                        if (unitLabel) {
                            unitLabel.textContent = '';
                        }
                    } else {
                        daysEl.textContent = String(days).padStart(2, '0');
                        if (unitLabel) {
                            unitLabel.textContent = days === 1 ? 'Dag' : 'Dagen';
                        }
                    }

                    updateEventCardsCountdown();
                };

                tick();
                setInterval(tick, 60000);
            }
        }

