import getBuffer from './getBuffer';

export default class ArrayBufferConverter {
  load(buffer) {
    this.buffer = getBuffer(buffer);
  }

  toString() {
    const bufferView = new Uint16Array(this.buffer);
    return String.fromCharCode(...bufferView);
  }
}