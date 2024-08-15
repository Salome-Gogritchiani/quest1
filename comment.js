// JavaScript for handling the rating system
// document.addEventListener('DOMContentLoaded', () => {
//     const ratingStars = document.querySelectorAll('.rating span');

//     // Add event listener for each star
//     ratingStars.forEach(star => {
//         star.addEventListener('click', function() {
//             // Remove the 'selected' class from all stars
//             ratingStars.forEach(s => s.classList.remove('selected'));

//             // Add 'selected' class to the clicked star and all previous ones
//             this.classList.add('selected');
//             let previousSibling = this.previousElementSibling;
//             while (previousSibling) {
//                 previousSibling.classList.add('selected');
//                 previousSibling = previousSibling.previousElementSibling;
//             }
//         });
//     });
// });


const passwordInput = document.getElementById('password');
const leftEye = document.querySelector('.left-eye');
const rightEye = document.querySelector('.right-eye');

passwordInput.addEventListener('focus', () => {
    leftEye.classList.add('closed');
    rightEye.classList.add('closed');
});

passwordInput.addEventListener('blur', () => {
    leftEye.classList.remove('closed');
    rightEye.classList.remove('closed');
});
