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
        console.log(data.url.search("v.redd.it"));
        
        section.appendChild(title);
        if(data.url != ""){
            if(data.url.search("twitch") == 14){
                let iframe = document.createElement("iframe");
                iframe.setAttribute("src",data.url);
                section.appendChild(iframe);
            }
            if(data.url.search("v.redd.it") == 32 || data.url.search("v.redd.it") == 8){
                let iframe = document.createElement("iframe");
                iframe.setAttribute("src",data.url);
                section.appendChild(iframe);
            }
            if(data.url.search("jpg") == 32 || data.url.search("png") == 32){
                console.log(data.url.search("jpg"));
                let image = document.createElement("img");
                image.setAttribute("src",data.url);
                section.appendChild(image);
            }
        }
        title.innerText = data.title;
        
        
        posts.appendChild(section);
    });
}


xml.open("GET","https://www.reddit.com/r/DotA2/hot.json",true);
xml.send();

