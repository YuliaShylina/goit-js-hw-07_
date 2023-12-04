const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector(".gallery");

const createGalleryItem = (image) => {
  const listItem = document.createElement("li");
  listItem.classList.add("gallery-item");

  const img = document.createElement("img");
  img.src = image.url;
  img.alt = image.alt;
  img.style.width = "800px";
  listItem.appendChild(img);
  return listItem;
};

const galleryItems = images.map(createGalleryItem);
gallery.append(...galleryItems);
gallery.style.display = "flex";
gallery.style.gap = "10px";
gallery.style.flexDirection = "column";
