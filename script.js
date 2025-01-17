
let array = [  "https://images.ctfassets.net/2pyx8rwuvz6x/5OGjNCg8gdl6Uq8D1B5mF/fd42d65909bc3ef652d78117832eccde/Deliciously_Entertaining__1_.jpg?fm=webp&q=85&w=1680&h=1680",
               "https://images.ctfassets.net/2pyx8rwuvz6x/3Z9wnm1ss3pxDuybJE7v69/a10d4435881e209a0df7b087b242b23e/predicts_.jpg?fm=webp&q=85&w=1680&h=1680",
               "https://images.ctfassets.net/2pyx8rwuvz6x/1nBqAAL0DhySQQunTFTSIV/f52a6717cd39f17d8fed9705e370038d/01_Newsroom_blog_--Investors_day_2023_v1.png?fm=webp&q=85&w=1680&h=1680",
               "https://images.ctfassets.net/2pyx8rwuvz6x/4etWVGfGudhcX0RGWMGSFH/e50ae7dd163e50dd6c6248903c65a226/Pinterest_Mid_Year_Travel_Report_2024_5.jpg?fm=webp&q=85&w=1680&h=1680",
               "https://images.ctfassets.net/2pyx8rwuvz6x/7cBjCHbKCJNPoxd6mlzLgR/d9715c31a1d500075a6847522a125b9c/HeaderImage_Remix__1___1_.png?fm=webp&q=85&w=1680&h=1680",
               "https://images.ctfassets.net/2pyx8rwuvz6x/3knDevh2zRQsxXbuFP1gzE/46f60c7233e7f68b085265938c4e2490/2024_Holiday_Shopping_Newsroom_Header__1_.png?fm=webp&q=85&w=1680&h=1680",
               "https://images.ctfassets.net/2pyx8rwuvz6x/17CQ42RSLOaSg9keJuyVst/32209751e2eb988d9585727ee85d3aa6/Newsroom_Thumbnail__1_.png?fm=webp&q=85&w=1680&h=1680" 
               ]
let images = Math.floor(Math.random()*array.length);
// console.log(images);
const writeBlogButton = document.getElementById('create');
const editor = document.getElementById('editor');
// const boldButton = document.getElementById('boldButton');
// const italicButton = document.getElementById('italicButton');
const colorInput = document.getElementById('colorInput');
const postButton = document.getElementById('postButton');
const blogList = document.getElementById('image-container3');


let menuList = document.getElementById("nav-links");
menuList.style.maxHeight = "0px";

function toggleMenu(){
  if(menuList.style.maxHeight == "0px"){
    menuList.style.maxHeight = "400px";
  }else{
    menuList.style.maxHeight = "0px";
  }
}

// Open the blog editor //
writeBlogButton.addEventListener('click', () => {
  editor.style.display = 'block'; // Show the editor
});

// blog editor feature //
function formateText(cmd, value = null){
  if(value){
    document.execCommand(cmd,false,value);
  }
  else{
    document.execCommand(cmd);
  }

}

// link atteched in your text //
function addLink(){
  const url = prompt("Insert Url");
  formateText('createLink' , url);
}

// color piker to change color a text //
colorInput.addEventListener('input', (e) => {
  // console.log(e.target.value);
  document.execCommand('foreColor', false, e.target.value);
});

// complete the blog than post here //
postButton.addEventListener("click", () => {
  let blogcontent = document.getElementById("contentEditable").innerText;
  // console.log(blogcontent);
  if (blogcontent.trim() === '') {
    alert("Cannot post An Empty Blog..🧑‍💻 Please Write a Blog.");
    return;
  }

  let TitleBlog = document.getElementById("title-blog").value;
  if(TitleBlog.trim() === "" ){
    alert("Plese Blog Title Is Add.🙂");
    return;
  }
  // console.log(TitleBlog);

  const blogItems = document.createElement("div");
  blogItems.classList.add("cards", "blog-card3");
  blogItems.innerHTML = `
                        <img src=${array[images]}> 
                        <p>${TitleBlog}</p>  
                        <button class="read-button">Read More..</button>
                        <button id="Delete">Delete</button>`;

  blogList.appendChild(blogItems);

  // blog editor complete a blog than visibility hidden //
  document.getElementById('contentEditable').innerHTML = '';
  editor.style.display = 'none';

  // Handle read more button in blog post //
  blogItems.querySelector('.read-button').addEventListener('click', () => {
    alert(blogcontent);
  // You can customize this to show a modal or redirect to a detailed page //
  });

  // handle delete button in blog post //
  let DeleteButton = blogItems.querySelector("#Delete");
  DeleteButton.addEventListener("click", () => {
    alert("Blog Post Was Deleted.");
    blogList.removeChild("blogItems");
  }) 
});

const blogBtn = document.querySelector("readbtn");
blogBtn.addEventListener("click" , ()=>{
  alert("this blog Is only for card Not detail blog text.");
})

let FormArray = [];
const Form = document.querySelector("#contact-form");
Form.addEventListener("submit" , (event)=>{
   event.preventDefault();
 
    const formData = new FormData(Form);
    // console.log(formData);

    // console.log(Array.from(formData.values()));
    if(FormArray.length <= 10){
      FormArray.push([Array.from(formData.values())]);
      console.log(FormArray);
    }

    // console.log(FormArray[0]);

   alert("data was successfully send.🙏");
    // console.log(event.target);
})

Form.addEventListener("submit" , ()=>{
  Form.reset();
})

// bold text //
// boldButton.addEventListener("click", () => {
//   document.execCommand("bold");
// })


function addBlog(){
  const ImageName = document.getElementById("image-name").value;

  const imageInput = document.getElementById("imageInput");
  const file = imageInput.files[0];

  const blogImages = document.getElementById("blogimage");
  const blogImg = document.createElement("div");
  blogImg.style.marginBottom = "20px";

  const imgText = document.createElement("p");
  imgText.textContent = ImageName;
  blogImg.appendChild(imgText);

  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const img = document.createElement("img");
      img.src = e.target.result;
      img.classList.add("uploaded-image");
      blogImg.appendChild(img);
    };
    reader.readAsDataURL(file);
  }

  blogImages.appendChild(blogImg);

  document.getElementById("image-name").value = "";
  imageInput.value = "";
}

