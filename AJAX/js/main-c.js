const showImages = () => {
  fetch('kuvat.json')
  .then((response)=>{
    return response.json();
})
.then((json)=>{
  json.forEach((kuva=>{
    //Elementtien luonti

    const li = document.createElement('li');
  const a = document.createElement('a');
  const figure = document.createElement('figure');
  const figcaption = document.createElement('figcaption');
  const h3 = document.createElement('h3');
  const img = document.createElement('img');

  //Atribuutit

  a.setAttribute('href','img/original/'+ kuva.mediaUrl);
  img.setAttribute('src','img/thumbs/'+ kuva.mediaThumb);
  h3.innerText = kuva.mediaTitle;
  //"perinnät"
  figcaption.appendChild(h3);
  a.appendChild(img);
  figure.appendChild(a);
  figure.appendChild(figcaption);

  li.appendChild(figure);



  const ul = document.querySelector('ul');
  ul.appendChild(li);
}
))
})
}
showImages();