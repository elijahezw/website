feather.replace()


		function initSlideshow(projectId) {
			// Get the slide and page elements for the slideshow
			var project = document.getElementById(projectId);

			// Get all the slide elements
			var slides = project.getElementsByClassName("slide");

			// Get all the page elements
			var pages = project.getElementsByClassName("page");

			var buttons = project.getElementsByClassName("button");

			// Get nav buttons scoped to this project only
			var navBackward = project.querySelector(".nav-backward");
			var navForward = project.querySelector(".nav-forward");

			// Initialize the current slide index to 0
			var currentSlideIndex = 0;
			// Initialize the current page index to 0
			var currentPageIndex = 0;
			var currentButtonIndex = 0;

			// Show the first slide
			slides[currentSlideIndex].classList.add("active");
			// Show the first page
			pages[currentPageIndex].classList.add("active");
			// Only activate button if it exists for this index and is not sticky
			if (buttons[currentButtonIndex] && buttons[currentButtonIndex].id !== "sticky") {
				buttons[currentButtonIndex].classList.add("active");
			}
			// Always show sticky button if present
			var stickyBtn = project.querySelector('.button#sticky');
			if (stickyBtn) {
				stickyBtn.classList.add('active');
				stickyBtn.style.display = 'flex';
			}

			function updateChevronInactiveState() {
			Array.from(slides).forEach(function(slide, idx) {
				var leftZone = slide.querySelector('.slide-chevron-zone.slide-chevron-left');
				var rightZone = slide.querySelector('.slide-chevron-zone.slide-chevron-right');
				if (leftZone) {
				if (currentSlideIndex === 0 && idx === currentSlideIndex) {
					leftZone.classList.add('chevron-inactive-left');
				} else {
					leftZone.classList.remove('chevron-inactive');
				}
				}
				if (rightZone) {
				if (currentSlideIndex === slides.length - 1 && idx === currentSlideIndex) {
					rightZone.classList.add('chevron-inactive-right');
				} else {
					rightZone.classList.remove('chevron-inactive');
				}
				}
			});
			}
			
			function updateArrowAndNav() {
				// Hide the backward arrow if on the first slide
				var navBackward = project.getElementsByClassName("nav-backward")[0];
				var navForward = project.getElementsByClassName("nav-forward")[0];
				if (currentSlideIndex === 0) {
					navBackward.classList.add("off");
					navBackward.disabled = true;
				} else {
					navBackward.classList.remove("off");
					navBackward.disabled = false;
				}

				// Hide the forward arrow if on the last slide
				if (currentSlideIndex === slides.length - 1) {
					navForward.classList.add("off");
					navForward.disabled = true;
				} else {
					navForward.classList.remove("off");
					navForward.disabled = false;
				}
				updateChevronInactiveState();
			}

			

			navForward.addEventListener("click", function () {
				if (currentSlideIndex === slides.length - 1) return; // Prevent overflow
				slides[currentSlideIndex].classList.remove("active");
				pages[currentPageIndex].classList.remove("active");
				if (buttons[currentButtonIndex] && buttons[currentButtonIndex].id !== "sticky") {
					buttons[currentButtonIndex].classList.remove("active");
				}
				currentSlideIndex = currentSlideIndex + 1;
				currentPageIndex = currentPageIndex + 1;
				currentButtonIndex = currentButtonIndex + 1;
				slides[currentSlideIndex].classList.add("active");
				pages[currentPageIndex].classList.add("active");
				if (buttons[currentButtonIndex] && buttons[currentButtonIndex].id !== "sticky") {
					buttons[currentButtonIndex].classList.add("active");
				}
				// Always show sticky button if present
				if (stickyBtn) {
					stickyBtn.classList.add('active');
					stickyBtn.style.display = 'flex';
				}
				updateArrowAndNav();
			});

			navBackward.addEventListener("click", function () {
				if (currentSlideIndex === 0) return; // Prevent underflow
				slides[currentSlideIndex].classList.remove("active");
				pages[currentPageIndex].classList.remove("active");
				if (buttons[currentButtonIndex] && buttons[currentButtonIndex].id !== "sticky") {
					buttons[currentButtonIndex].classList.remove("active");
				}
				currentSlideIndex = currentSlideIndex - 1;
				currentPageIndex = currentPageIndex - 1;
				currentButtonIndex = currentButtonIndex - 1;
				slides[currentSlideIndex].classList.add("active");
				pages[currentPageIndex].classList.add("active");
				if (buttons[currentButtonIndex] && buttons[currentButtonIndex].id !== "sticky") {
					buttons[currentButtonIndex].classList.add("active");
				}
				// Always show sticky button if present
				if (stickyBtn) {
					stickyBtn.classList.add('active');
					stickyBtn.style.display = 'flex';
				}
				updateArrowAndNav();
			});

			// Add click navigation to each slide
			Array.from(slides).forEach(function(slide) {
				slide.style.cursor = 'pointer';
				slide.addEventListener('click', function(e) {
					var rect = slide.getBoundingClientRect();
					var x = e.clientX - rect.left;
					if (x < rect.width / 2) {
						// Clicked left half: go backward
						if (currentSlideIndex > 0) {
							navBackward.click();
						}
					} else {
						// Clicked right half: go forward
						if (currentSlideIndex < slides.length - 1) {
							navForward.click();
						}
					}
				});
			});

			// Add invisible chevron cursor zones to each slide
			Array.from(slides).forEach(function(slide) {
				// Remove old zones if present
				var oldLeft = slide.querySelector('.slide-chevron-zone.slide-chevron-left');
				var oldRight = slide.querySelector('.slide-chevron-zone.slide-chevron-right');
				if (oldLeft) oldLeft.remove();
				if (oldRight) oldRight.remove();

				// Left zone
				var leftZone = document.createElement('div');
				leftZone.className = 'slide-chevron-zone slide-chevron-left';
				slide.appendChild(leftZone);
				// Right zone
				var rightZone = document.createElement('div');
				rightZone.className = 'slide-chevron-zone slide-chevron-right';
				slide.appendChild(rightZone);

				// Navigation on click
				leftZone.addEventListener('click', function(e) {
					e.stopPropagation();
					if (typeof navBackward !== 'undefined' && currentSlideIndex > 0) navBackward.click();
				});
				rightZone.addEventListener('click', function(e) {
					e.stopPropagation();
					if (typeof navForward !== 'undefined' && currentSlideIndex < slides.length - 1) navForward.click();
				});
			});

			updateArrowAndNav();
		}

		


//BUTTON1
		var button1 = document.getElementById("button1-1");
		var video1 = document.getElementById("video1");

		// Add click event listeners to the buttons
		button1.addEventListener("click", function () {
			// Play video1
			video1.currentTime = 0;
			video1.play();
		});

		video1.addEventListener('play', () => {
			button1.classList.add('hidden');
		});

		video1.addEventListener('ended', () => {
			button1.classList.remove('hidden');
			// Perform desired actions here
		});

		//BUTTON2
		var button2 = document.getElementById("button1-2");
		var video2 = document.getElementById("video2");

		// Add click event listeners to the buttons
		button2.addEventListener("click", function () {
			// Play video2
			video2.currentTime = 0;
			video2.play();
		});

		video2.addEventListener('play', () => {
			button2.classList.add('hidden');
		});

		video2.addEventListener('ended', () => {
			button2.classList.remove('hidden');
			// Perform desired actions here
		});


		//BUTTON3
		var button3 = document.getElementById("button1-3");
		var video3 = document.getElementById("video3");

		// Add click event listeners to the buttons
		button3.addEventListener("click", function () {
			// Play video3
			video3.currentTime = 0;
			video3.play();
		});

		video3.addEventListener('play', () => {
			button3.classList.add('hidden');
		});

		video3.addEventListener('ended', () => {
			button3.classList.remove('hidden');
			// Perform desired actions here
		});




		var button = document.getElementById("button4-1");
		var video = document.getElementById("video4-1");

		// Add click event listeners to the buttons
		button.addEventListener("click", function () {
			// Play video3
			video.currentTime = 0;
			video.play();
		});

		video.addEventListener('play', () => {
			button.classList.add('hidden');
		});

		video.addEventListener('ended', () => {
			button.classList.remove('hidden');
			// Perform desired actions here
		});


		var button4 = document.getElementById("button8-4");
		var video4 = document.getElementById("video4");

		// Add click event listeners to the buttons
		button4.addEventListener("click", function () {
			// Play video3
			video4.currentTime = 0;
			video4.play();
		});

		video4.addEventListener('play', () => {
			button4.classList.add('hidden');
		});

		video4.addEventListener('ended', () => {
			button4.classList.remove('hidden');
			// Perform desired actions here
		});


		// Call the initSlideshow function for each slideshow you want to create
		initSlideshow("project1");
		initSlideshow("project2");
		initSlideshow("project3");
		initSlideshow("project4");
		initSlideshow("project5");
		//initSlideshow("project6");
		initSlideshow("project7");
		initSlideshow("project8");
		initSlideshow("project9");
		initSlideshow("project10");
		initSlideshow("project11");
		initSlideshow("project12");
		initSlideshow("project13");
		initSlideshow("project14");
		initSlideshow("project15");
		initSlideshow("project16");
		initSlideshow("project17");
		initSlideshow("project18");

		// Project tab navigation and scrollspy
		const filterButtons = document.querySelectorAll('.filter-btn');
		const projects = document.querySelectorAll('.project');
		let currentFilter = null;

		// Scroll to first project of category
		filterButtons.forEach(btn => {
			btn.addEventListener('click', function () {
				const filter = this.getAttribute('data-filter');
				const firstProject = Array.from(projects).find(p => p.getAttribute('data-category') === filter);
				if (firstProject) {
					firstProject.scrollIntoView({ behavior: 'smooth', block: 'start' });
				}
			});
		});

		// Scrollspy: update active filter as you scroll
		function updateActiveFilterOnScroll() {
			let found = false;
			for (let i = 0; i < projects.length; i++) {
				const rect = projects[i].getBoundingClientRect();
				// Check if top of project is in the viewport (with a little offset)
				if (rect.top < window.innerHeight * 0.33 && rect.bottom > window.innerHeight * 0.2) {
					const cat = projects[i].getAttribute('data-category');
					filterButtons.forEach(b => b.classList.toggle('active', b.getAttribute('data-filter') === cat));
					found = true;
					break;
				}
			}
			// If no project is in view, remove all actives
			if (!found) {
				filterButtons.forEach(b => b.classList.remove('active'));
			}
		}
		window.addEventListener('scroll', updateActiveFilterOnScroll, { passive: true });
		window.addEventListener('resize', updateActiveFilterOnScroll);
		// Set on load
		updateActiveFilterOnScroll();

		// Utility: check if element is in viewport
function isInViewport(el) {
	const rect = el.getBoundingClientRect();
	return (
		rect.top < window.innerHeight &&
		rect.bottom > 0 &&
		rect.left < window.innerWidth &&
		rect.right > 0
	);
}

// Sequential loading queue for images/videos with priority levels
let mediaQueue = [];
let queuePaused = false;
let currentLoading = null;
let currentPriority = 1;

// Collect all images/videos in DOM order by priority
function collectMediaQueue(priorityLevel = 1) {
	mediaQueue = [];
	const selector = `[loading="${priorityLevel}"]`;
	const imgs = Array.from(document.querySelectorAll('img' + selector));
	const vids = Array.from(document.querySelectorAll('video' + selector));
	const allMedia = imgs.concat(vids);
	allMedia.sort((a, b) => a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1);
	mediaQueue = allMedia.filter(m => !m.hasAttribute('data-prioritized') && !m.hasAttribute('data-loaded'));
}

// Load next media in queue, advance priority when done
function loadNextInQueue() {
	if (queuePaused) return;
	if (mediaQueue.length === 0) {
		// Advance to next priority level if available
		if (currentPriority < 3) {
			currentPriority++;
			collectMediaQueue(currentPriority);
			loadNextInQueue();
		}
		return;
	}
	const media = mediaQueue.shift();
	if (!media) return;
	currentLoading = media;
	if (!media.src) {
		media.src = media.getAttribute('data-src') || media.getAttribute('src');
	}
	media.setAttribute('data-loaded', 'true');
	const onLoaded = () => {
		currentLoading = null;
		media.removeEventListener('load', onLoaded);
		media.removeEventListener('loadeddata', onLoaded);
		loadNextInQueue();
	};
	if (media.tagName === 'IMG') {
		if (media.complete) {
			onLoaded();
		} else {
			media.addEventListener('load', onLoaded);
			media.addEventListener('error', onLoaded);
		}
	} else if (media.tagName === 'VIDEO') {
		if (media.readyState > 0) {
			onLoaded();
		} else {
			media.addEventListener('loadeddata', onLoaded);
			media.addEventListener('error', onLoaded);
		}
	}
}

// Expedite a specific media (treat as eager)
function expediteMedia(media) {
	queuePaused = true;
	if (currentLoading && currentLoading !== media) {
		// Optionally abort current loading if possible
	}
	if (!media.src) {
		media.src = media.getAttribute('data-src') || media.getAttribute('src');
	}
	media.setAttribute('data-prioritized', 'true');
	media.setAttribute('data-loaded', 'true');
	const onLoaded = () => {
		queuePaused = false;
		media.removeEventListener('load', onLoaded);
		media.removeEventListener('loadeddata', onLoaded);
		collectMediaQueue(currentPriority);
		loadNextInQueue();
	};
	if (media.tagName === 'IMG') {
		if (media.complete) {
			onLoaded();
		} else {
			media.addEventListener('load', onLoaded);
			media.addEventListener('error', onLoaded);
		}
	} else if (media.tagName === 'VIDEO') {
		if (media.readyState > 0) {
			onLoaded();
		} else {
			media.addEventListener('loadeddata', onLoaded);
			media.addEventListener('error', onLoaded);
		}
	}
}

// On scroll or click, expedite media in view or interacted with
function checkAndExpediteMedia() {
	const allMedia = document.querySelectorAll('img[loading], video[loading]');
	for (const media of allMedia) {
		if (!media.hasAttribute('data-loaded') && isInViewport(media)) {
			expediteMedia(media);
			break; // Only expedite one at a time
		}
	}
}

// Attach click listeners to images/videos for prioritization
function attachExpediteListeners() {
	const allMedia = document.querySelectorAll('img[loading], video[loading]');
	allMedia.forEach(media => {
		media.addEventListener('click', function() {
			if (!media.hasAttribute('data-loaded')) {
				expediteMedia(media);
			}
		});
	});
}

// Initial setup
document.addEventListener('DOMContentLoaded', function() {
	currentPriority = 1;
	collectMediaQueue(currentPriority);
	attachExpediteListeners();
	loadNextInQueue();
});

// On scroll/resize, check for media in view to expedite
window.addEventListener('scroll', checkAndExpediteMedia, { passive: true });
window.addEventListener('resize', checkAndExpediteMedia);

