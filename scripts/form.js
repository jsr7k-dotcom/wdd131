const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const lastModified = new Date(document.lastModified);
document.getElementById("lastModified").textContent =
    "Last Modification: " + lastModified.toLocaleString();


const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

const productSelect = document.querySelector("#product");

if (productSelect) {
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
}


document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', () => {
        try {
            localStorage.setItem('submittedReview', '1');
        } catch (e) {
        }
    });
});


if (window.location.pathname.includes('review.html')) {
    const counterElement = document.getElementById('review-counter');
    let reviewCount = Number(localStorage.getItem('reviewCount')) || 0;

    if (localStorage.getItem('submittedReview')) {
        reviewCount++;
        try {
            localStorage.setItem('reviewCount', reviewCount);
            localStorage.removeItem('submittedReview');
        } catch (e) {
        }
    }

    if (counterElement) {
        counterElement.textContent = reviewCount;
    }
}