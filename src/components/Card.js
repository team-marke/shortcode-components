function Card(content, img, title) {
  return `
    <div class="card">
      <img src="${img.src}" class="card-img-top" alt="${img.alt}">
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        ${content}
      </div>
    </div>
  `;
}

module.exports = Card;
