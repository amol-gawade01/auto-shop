const loadData = async() => {


    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
    }


document.addEventListener("DOMContentLoaded", () => {
    const sentences = [
        "Welcome to Auto Shop",
        "Get Affordable parts",
        "Top Notch Sevices.",
        "Resale Vehicles"
    ];

    let currentSentence = 0;
    let currentChar = 0;
    let isDeleting = false;
    const typingSpeed = 100; // Speed for typing each character
    const erasingSpeed = 50; // Speed for erasing each character
    const delayBetweenSentences = 1500; // Delay between typing and erasing

    const typedTextElement = document.getElementById("typed-text");


    if (!typedTextElement) {
        console.error("Element with id 'typed-text' not found.");
        return; // Stop the script if the element isn't found
    }

    function typeText() {
        if (currentSentence < sentences.length) {
            if (!isDeleting && currentChar <= sentences[currentSentence].length) {
                typedTextElement.textContent = sentences[currentSentence].slice(0, currentChar++);
                setTimeout(typeText, typingSpeed);
            } else if (isDeleting && currentChar > 0) {
                typedTextElement.textContent = sentences[currentSentence].slice(0, currentChar--);
                setTimeout(typeText, erasingSpeed);
            } else if (!isDeleting && currentChar > sentences[currentSentence].length) {
                isDeleting = true;
                setTimeout(typeText, delayBetweenSentences);
            } else if (isDeleting && currentChar === 0) {
                isDeleting = false;
                currentSentence = (currentSentence + 1) % sentences.length; // Move to the next sentence
                setTimeout(typeText, typingSpeed);
            }
        }
    }

    typeText(); // Start typing animation
});






document.addEventListener("DOMContentLoaded", () => {
    const numberElement = document.querySelector('.number');
    const target = parseInt(numberElement.getAttribute('data-target'));
    const duration = 3000; // Animation duration in milliseconds

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const startTime = performance.now();

                function updateCounter(currentTime) {
                    const elapsedTime = currentTime - startTime;
                    const progress = Math.min(elapsedTime / duration, 1);
                    const currentNumber = Math.floor(progress * target);
                    
                    numberElement.textContent = currentNumber;

                    if (progress < 1) {
                        requestAnimationFrame(updateCounter);
                    } else {
                        numberElement.textContent = target; // Ensure the final number is displayed
                    }
                }

                requestAnimationFrame(updateCounter);
                observer.unobserve(entry.target); // Stop observing once the animation starts
            }
        });
    }, {
        threshold: 0.5 // Animation triggers when 50% of the card is in view
    });

    observer.observe(numberElement);
});




