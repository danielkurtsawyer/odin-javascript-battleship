export default class Ship {
    constructor(length) {
        this._length = length;
        this._hits = 0;
    }

    get length() {
        return this._length;
    }

    hit() {
        this._hits++;
    }

    isSunk() {
        if (this._hits >= this._length) {
            return true;
        } else {
            return false;
        }
    }
}
