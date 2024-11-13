function searchitem() {
    // Get the input value
    const searchValue = document.getElementById('search-temp').value.toLowerCase().trim();
    const allValues = searchValue.split(',');
    console.log(allValues)
    

    // Get all cards
    const cards = document.querySelectorAll('.card');

    // Loop through each card
    cards.forEach(card => {
        // Get the product name from the card (assuming it's in an <h3> tag inside .info1)
        const productName = card.querySelector('.info1 h3').textContent.toLowerCase();
        const allValuesPresent = allValues.filter(value => productName.includes(value))
        console.log(allValuesPresent)

        // Check if the product name includes the search value
        if (allValuesPresent.length > 0) {
            card.style.display = 'block'; // Show the card if it matches
        } else {
            card.style.display = 'none'; // Hide the card if it doesn't match
        }
    });
}


// Toggle the visibility of filter options when the filter button is clicked
document.getElementById('filter-btn').addEventListener('click', function() {
    const filterOptions = document.getElementById('filter-options');
    
    // Toggle visibility of the filter options
    if (filterOptions.style.display === 'none' || filterOptions.style.display === '') {
        filterOptions.style.display = 'block'; // Show the options
    } else {
        filterOptions.style.display = 'none'; // Hide the options
    }
});

// Apply the filter when one of the options is clicked
const filterOptionButtons = document.querySelectorAll('.filter-option');
filterOptionButtons.forEach(button => {
    button.addEventListener('click', function() {
        const filterClass = this.getAttribute('data-filter');
        
        // Get all cards
        const cards = document.querySelectorAll('.card');

        // Loop through each card and filter based on class
        cards.forEach(card => {
            if (card.classList.contains(filterClass)) {
                card.style.display = 'block'; // Show the card if it matches the filter
            } else {
                card.style.display = 'none'; // Hide the card if it doesn't match
            }
        });

        // Hide the filter options after selection
        document.getElementById('filter-options').style.display = 'none';
    });
});

let counter = 0;
const buttons = document.querySelectorAll('.info2 button');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        counter++;
        const buyinr = document.getElementById('buy-counter');
        buyinr.innerText = counter;
        alert("Item Added to Cart")
    });
});


function takeRequest(){
    alert("We will contact you shortly!!")
}

