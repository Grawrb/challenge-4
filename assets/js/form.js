let userName = document.getElementById('name');
let postTitle = document.getElementById('postTitle');
let userPost = document.getElementById('msg');
let submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', function (event) {
    if (!userName.value  || !postTitle.value|| !userPost.value) {
        alert("Please fill out all fields");
        event.preventDefault();
        return;
    }

    const blogPost = {
        postTitle: postTitle.value,
        userPost: userPost.value,
        userName: userName.value,
    };

    let oldBlogs = JSON.parse(localStorage.getItem('blogPost')) || [];
    oldBlogs.push(blogPost);

    localStorage.setItem('blogPost', JSON.stringify(oldBlogs));


})