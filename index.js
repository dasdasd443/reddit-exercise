let xml = new XMLHttpRequest();

let x = [];

xml.onreadystatechange = function() {
    x = JSON.parse(this.responseText);
    x = x.data.children;

    let posts = document.querySelector(".posts");

    x.forEach((elem,index) => {
        let data = elem.data;
        let section = document.createElement("section");
        let title = document.createElement("h1");
        section.appendChild(title);
        console.log(data.url.search("twitch"));
        if(data.url != ""){
            let image = document.createElement("img");
            image.setAttribute("src",data.url);
            section.appendChild(image);
        }
        title.innerText = data.title;
        
        
        posts.appendChild(section);
    });
}


xml.open("GET","https://www.reddit.com/r/DotA2/hot.json",true);
xml.send();

