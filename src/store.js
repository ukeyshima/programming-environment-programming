import { observable, computed, action } from 'mobx';

export default class State {
  @observable programmingSpaceCoordinates = {
    x: 20,
    y: 200
  };
  @observable programmingSpaceSizes = {
    w: 400,
    h: 600
  };
  @observable elements = [];
  @action.bound
  appendElement(obj) {
    this.elements.push(obj);
  }
  @action.bound
  updateElement(num, x, y, w, h) {
    this.elements[num].x = x;
    this.elements[num].y = y;
    this.elements[num].w = w;
    this.elements[num].h = h;
  }
}
