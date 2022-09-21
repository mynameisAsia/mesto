export default class Section {
    constructor ( {renderer}, containerSelector ) {
        this._renderer = renderer;
        this._containerSelector = document.querySelector(containerSelector);
    }

    genereateItems(items) {
        items.forEach((element) => {
            this._renderer(element);
          });
    }

    addNewItem(element) {
        this._containerSelector.prepend(element);
    }

    addItem(element) {
        this._containerSelector.append(element);
    }
}
