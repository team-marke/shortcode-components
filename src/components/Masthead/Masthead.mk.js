const CloudinaryImageURL = require("../../core-components/CloudinaryImageURL");

function Masthead(content, img) {
  return `
    <div class="masthead">${CloudinaryImageURL(img)}</div>
  `;
}

module.exports = Masthead;
