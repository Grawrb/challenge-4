function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
const userName = document.getElementById('name');
const postTitle = document.getElementById('postTitle');
const userPost = document.getElementById('msg');
const submitButton = document.getElementsByClassName('button');

submitButton.addEventListener('click', function (event) {
    event.preventDefault();

    const blogPost = {
        postTitle: postTitle.value,
        userPost: userPost.value,
        userName: userName.value,
    };

    localStorage.setItem('blogPost', JSON.stringify(blogPost));

})