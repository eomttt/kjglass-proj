export class Modal {
  listener = null;

  static addEventListener(listener) {
    this.listener = listener;
  }

  static emitEvent(params) {
    if (this.listener) {
      this.listener(params);
    }
  }
}
