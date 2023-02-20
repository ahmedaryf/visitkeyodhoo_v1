const images = document.querySelectorAll("img");


let imageOptions = {};

let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) return;
        const image = entry.target;
        const newURL = image.getAttribute('image-src');
        image.src = newURL;
        observer.unobserve(image);
    })
}, imageOptions);

images.forEach(image => {
    

    observer.observe(image);
});