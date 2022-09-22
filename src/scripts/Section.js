export default class Section {
    constructor ( {renderer}, containerSelector ) {
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    genereateItems(items) {
        items.forEach((element) => {
            this._renderer(element);
          });
    }

    addNewItem(element) {
        this._container.prepend(element);
    }

    addItem(element) {
        this._container.append(element);
    }
}
