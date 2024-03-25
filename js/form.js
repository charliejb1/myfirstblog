
function storageFunction(event){
    event.preventDefault();


    const username = document.getElementById("name").value;
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    localStorage.setItem("username",username);
    localStorage.setItem("title",title);
    localStorage.setItem("content",content);

}

