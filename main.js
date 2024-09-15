let coffeeImg = "https://coffee.alexflipnote.dev/random.json";
let box = document.getElementById("imgBox");
fetch(coffeeImg)
  .then((response) => response.json())
    .then((data) => {
        console.log(data)
        let img = document.createElement("img");
        
            setInterval(() => {
                    img.src = data.file;
                  }, 500);
                    box.appendChild(img)
                
    }
);
