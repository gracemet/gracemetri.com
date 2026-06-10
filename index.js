function setCurrent(section) {
    // Remove the 'current' class from all nav links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.classList.remove('current');
    });

    // Add the 'current' class to the clicked link
    const currentLink = document.querySelector(`nav a[href="#${section}"]`);
    if (currentLink) {
        currentLink.classList.add('current');
    }

}

function contact() {
    console.log("Contact Clicked")
}

