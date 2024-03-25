const mode = document.getElementById("light-button");
const heading = document.getElementById("title");
const blog1 = document.getElementById("blog-1");
const blog2 = document.getElementById("blog-2");
const blog3 = document.getElementById("blog-3");
const blog4 = document.getElementById("blog-4");
const blog5 = document.getElementById("blog-5");
const footer = document.getElementById("footer");


mode.addEventListener("click",() => {
    if (document.body.style.backgroundColor == "azure") {
        document.body.style.backgroundColor = "black";
        heading.style.color = "white";
       blog1.style.color = "white";
       blog2.style.color = "white";
       blog3.style.color = "white";
       blog4.style.color = "white";
       blog5.style.color = "white";
      footer.style.color = "white";
      
    }
    else{
     document.body.style.backgroundColor == "black";
    document.body.style.backgroundColor = "azure";
    heading.style.color = "black";
  blog1.style.color = "black";
  blog2.style.color = "black";
  blog3.style.color = "black";
  blog4.style.color = "black";
  blog5.style.color = "black";
  footer.style.color = "black";

    }
});



