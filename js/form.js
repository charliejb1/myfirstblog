
function storageFunction(event) {
    event.preventDefault();


    const username = document.getElementById("name").value;
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    const data = { username: username, title: title, content: content }

    let allBlogs = JSON.parse(localStorage.getItem("blogs"))
    if (!allBlogs) { allBlogs = [] }
    allBlogs.push(data)
console.log(allBlogs)
    localStorage.setItem("blogs",JSON.stringify(allBlogs))
}

