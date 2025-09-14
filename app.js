const thumbnails = document.getElementById("thumbnails");
const displayContainer = document.getElementById("displayContainer");

const images = [
  {
    src: "https://images.unsplash.com/photo-1504173010664-32509aeebb62?q=80&w=2027&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Mother and her cub",
  },
  {
    src: "https://images.unsplash.com/photo-1619475762212-da12e5e15f18?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "tiger",
  },
  {
    src: "https://images.unsplash.com/photo-1503656142023-618e7d1f435a?q=80&w=1589&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "two zebras",
  },
  {
    src: "https://images.unsplash.com/flagged/photo-1557650454-65194af63bf9?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "White Rhinos in the South African veld",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1723573157405-f6c44ba76721?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "leopard",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1669725687223-bdf4be1ff44e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "deer",
  },
  {
    src: "https://images.unsplash.com/photo-1696772686504-09010046b1d3?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "sea lion",
  },
  {
    src: "https://images.unsplash.com/photo-1471005197911-88e9d4a7834d?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "crocodile",
  },
  {
    src: "https://images.unsplash.com/photo-1505259839540-04105fcd8ba3?q=80&w=1094&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "redfox",
  },
];

function createThumbnails() {
  images.forEach(function (image) {
    let imageElement = document.createElement("img");
    console.log(image);
    imageElement.src = image.src;
    imageElement.addEventListener("click", function () {
      console.log("image");
      createBigImage(image);
    });

    thumbnails.appendChild(imageElement);
  });
}
createThumbnails();
function createBigImage(imgDetails) {
  displayContainer.innerHTML = " ";
  const bigImage = document.createElement("img");
  bigImage.src = imgDetails.src;
  bigImage.alt = imgDetails.alt;
  displayContainer.appendChild(bigImage);
}
