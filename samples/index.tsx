// tslint:disable: no-magic-numbers

import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { createRenderer } from '../src';


const renderer = createRenderer();
const count = new BehaviorSubject(0);
const style = count.pipe(
  map(x => x % 2 === 0 ? 'color: red': 'color: blue')
);

renderer.render(
  <div onclick={() => count.next(count.value + 1)} style={style}>
    You have clicked {count} times!
  </div>
).on(document.body);
