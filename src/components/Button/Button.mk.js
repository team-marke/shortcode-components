function Button(content, href, target = "_self") {
  return `
    <a class="btn btn-primary" href="${href}" role="button" target="${target}">${content}</a>
  `;
}

module.exports = Button;
