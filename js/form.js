function storageFunction(event) {
    event.preventDefault();

    const username = document.getElementById("name")
    const title = document.getElementById("title")
    const content = document.getElementById("content")
    const data = { username: username.value, title: title.value, content: content.value };
    
    let allBlogs = JSON.parse(localStorage.getItem("blogs"));
    if (!allBlogs) { allBlogs = [] }

    allBlogs.push(data);
    console.log(allBlogs);
    localStorage.setItem("blogs", JSON.stringify(allBlogs));
    username.value = ''
    title.value = ''
    content.value = ''
}

document.getElementById("submit-button").addEventListener("click", storageFunction);