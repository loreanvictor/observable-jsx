import { LifeCycleHook } from 'render-jsx';
import { Observable, Subscription } from 'rxjs';


export function makeHook<T>(observable: Observable<T>, op: (t: T) => void): LifeCycleHook {
  let sub : Subscription | undefined = undefined;

  return {
    bind() {
      sub = observable.subscribe(op);
    },
    clear() {
      if (sub) {
        sub.unsubscribe();
      }
    }
  }
}
