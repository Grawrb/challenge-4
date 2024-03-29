const blogPosts = retrieveBlogPosts();
const blogList = document.getElementById('blogPosts');
for (let i=0; i < blogPosts.length; i++) {
    const blogPost = blogPosts[i];

    const newBlogContainer = document.createElement("li");
    const newBlogTitle = document.createElement("h3");
    newBlogTitle.textContent = blogPost.postTitle;
    newBlogContainer.append(newBlogTitle);

    const newBlogContent = document.createElement("p");
    newBlogContent.textContent = blogPost.userPost;
    newBlogContainer.append(newBlogContent);

    const newBlogUser = document.createElement("h4");
    newBlogUser.textContent = blogPost.userName;
    newBlogContainer.append(newBlogUser);
    
    blogList.append(newBlogContainer);

}
