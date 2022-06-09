class Item {
    constructor(text) {
        this.id = Math.random() * 1000 + Date.now() + Math.random() * 1000;
        this.text = text;
        this.done = false;
    }
}

export default Item;