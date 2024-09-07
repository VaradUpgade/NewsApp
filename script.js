
function getNews(country, category){
    fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=5c8ccb502bf44ba885f42010551c6ad7`)
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        if(data.status ==="ok"){
            displayData(data.articles)
            console.log(data)
        }
    })
    .catch((err)=>{
        console.log(err)
    })
}

getNews("in","business")


function displayData(newsData){

    document.getElementById("news").innerHTML =""

    newsData.forEach((news,index)=>{
        
        let item = document.createElement("div");
        item.classList.add("item");

        let newsImg = document.createElement("div");
        newsImg.classList.add("news-img");
        let img = document.createElement("img");

        let imgURL = "https://images.indianexpress.com/2023/06/Express-Representational-Image-2-4.jpeg";

        if(news.urlToImage!==null){
            img.setAttribute("src",news.urlToImage);
        }
        else{
            img.setAttribute("src",imgURL);
        }

        newsImg.appendChild(img);
        item.appendChild(newsImg);

        let content = document.createElement("div");
        content.classList.add("content");

        let h1 = document.createElement("h1");
        h1.classList.add("title");
        h1.append(news.title);
        content.appendChild(h1);

        let p = document.createElement("p");
        p.append(news.author);
        content.appendChild(p);

        let p1 = document.createElement("p");
        p1.classList.add("details");
        p1.append(news.description);
        content.appendChild(p1);

        let btn = document.createElement("div");
        let a = document.createElement("a");
        a.classList.add("btn");
        a.setAttribute("href",news.url);
        a.setAttribute("target","_blank")
        a.append("Read More"); 
        btn.appendChild(a);
        content.appendChild(btn);
        item.appendChild(content);

        document.getElementById("news").appendChild(item);

    })

}



function readData(){
    let selectCountry = document.getElementById("country").value;
    let selectCategory = document.getElementById("catergory").value;
    getNews(selectCountry, selectCategory)
}