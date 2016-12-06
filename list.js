class Element {

  constructor(value, next) {
    this.value = value;
    this.next = next;
  }

  toString() {
    return this.next ? `${this.value} ${this.next.toString()}` : `${this.value}`;
  }

  setNext(next) {
    this.next = next;
    return this;
  }

}

export default class List {

  constructor(...values) {
    if (values.length === 0) {
      return;
    }
    values.reduce((acc, v) => acc.add(v), this);
  }

  add(value) {
    this.head = new Element(value, this.head);
    return this;
  }

  addTail(value) {
    if (!this.head) {
      this.head = new Element(value);
    }
    const iter = (el) => el.next ? iter(el.next) : el;
    const last = iter(this.head);
    last.setNext(new Element(value));
    return this;
  }

  filter(pred) {
    while (this.head && !pred(this.head.value)) {
      this.head = this.head.next;
    }

    let prev = this.head;
    while (prev && prev.next) {
      if (!pred(prev.next.value)) {
        prev.next = prev.next.next;
      } else {
        prev = prev.next;
      }
    }

    return this;
  }

  remove(value) {
    this.filter((el) => el !== value);
    return this;
  }

  count() {
    if (!this.head) {
      return 0;
    }
    const iter = (el, acc) => {
      if (!el) {
        return acc;
      }
      return iter(el.next, acc + 1);
    };
    return iter(this.head, 0);
  }

  toString() {
    return this.head ? this.head.toString() : '';
  }

}
