const container = document.querySelector('.js-container');
const bodyElement = document.querySelector('body');
const colorSpan = document.querySelector('.color__name');
const paragraph = colorSpan.parentElement;

container.innerHTML = addColorList();
container.addEventListener('click', onClick);

function addColorList() {
  const listHTMLelement = [];

  for (let i = 0; i < 25; i++) {
    const color = getRandomHexColor();

    listHTMLelement.push(`<li class="module__item__module7">
                            <a
                                href="#"
                                class="module__link__module7 js-link"
                                data-color=${color}
                                style="background-color: ${color}"
                            >
                            </a>
                         </li>`);
  }

  return listHTMLelement.join('');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onClick(e) {
  e.preventDefault();

  if (!e.target.classList.contains('js-link')) {
    return;
  }

  const color = e.target.dataset.color;

  colorSpan.textContent = color;
  paragraph.style.color = color;
  bodyElement.style.backgroundColor = color;
}
