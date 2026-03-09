// Show different chicken breeds on button click
const breeds = ['Broiler', 'Layer', 'Free-Range'];
document.getElementById('breedBtn').addEventListener('click', function() {
    const randomBreed = breeds[Math.floor(Math.random() * breeds.length)];
    document.getElementById('breedDisplay').textContent = `Featured: ${randomBreed} Chickens`;
});
// Calculate total price for chicken orders
function calculatePrice() {
    const quantity = document.getElementById('quantity').value;
    const pricePerKg = 5.99;
    const total = quantity * pricePerKg;
    document.getElementById('total').textContent = `Total: R${total.toFixed(2)}`;

document.getElementById('quantity').addEventListener('input', calculatePrice);
// Add new review dynamically
document.getElementById('reviewForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const review = document.getElementById('reviewText').value;
    const reviewList = document.getElementById('reviews');
    const li = document.createElement('li');
    li.textContent = review;
    reviewList.appendChild(li);
    document.getElementById('reviewText').value = '';
});
// Cycle through chicken photos
const images = ['chicken1.jpg', 'chicken2.jpg', 'chicken3.jpg'];
let currentImage = 0;
setInterval(() => {
    document.getElementById('gallery').src = images[currentImage];
    currentImage = (currentImage + 1) % images.length;
}, 3000);
// Show alert when contact button is clicked
document.getElementById('contactBtn').addEventListener('click', function() {
    alert('Call us at 079 173 9512 for fresh chickens!');
});