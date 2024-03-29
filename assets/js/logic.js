function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
function retrieveBlogPosts() {
    return JSON.parse(localStorage.getItem('blogPost')) || [];
 }