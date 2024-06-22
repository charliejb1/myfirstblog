const mode = document.getElementById("light-button");
const heading = document.getElementById("title");
const blogContainer = document.getElementById("blogContainer");
const footer = document.getElementById("footer");

function renderBlogs() {
  let allBlogs = JSON.parse(localStorage.getItem("blogs"))
  if (!allBlogs) { allBlogs = [] }


  blogContainer.innerHTML = ''

  allBlogs.forEach(blog => {

    const blogElement = document.createElement('div');

    blogElement.innerHTML = `
    <h2>By: ${blog.username}<h2>
    <h2>${blog.title}</h2>
    <p>${blog.content}</p>

  `;

    blogContainer.appendChild(blogElement);
  });

}

renderBlogs();

mode.addEventListener("click", () => {
  if (document.body.style.backgroundColor === "azure") {
    document.body.style.backgroundColor = "black";
    heading.style.color = "white";
    footer.style.color = "white";
    blogContainer.style.color = "white";



  }
  else {
    document.body.style.backgroundColor === "black";
    document.body.style.backgroundColor = "azure";
    heading.style.color = "black";
    footer.style.color = "black";
    blogContainer.style.color = "black";
  }
});



