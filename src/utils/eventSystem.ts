export class EventSystem<T> {
  eventTarget: EventTarget;
  eventName: string;

  constructor() {
    this.eventTarget = new EventTarget();
    this.eventName = "eventSystem";
  }

  public addListener(listner: (ev: CustomEvent<T>) => void) {
    this.eventTarget.addEventListener(
      this.eventName,
      listner as EventListenerOrEventListenerObject,
    );
  }

  public removeListener(listener: (ev: CustomEvent<T>) => void) {
    this.eventTarget.removeEventListener(
      this.eventName,
      listener as EventListenerOrEventListenerObject,
    );
  }

  public notify(obj: T) {
    this.eventTarget.dispatchEvent(
      new CustomEvent<T>(this.eventName, { detail: obj }),
    );
  }
}
