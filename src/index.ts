import { CommonDOMRenderer } from 'render-jsx/dom';

import { ObservableAppendPlugin } from './plugins/append.plugin';
import { ObservableContentPlugin } from './plugins/content.plugin';
import { ObservablePropPlugin } from './plugins/prop.plugin';


export function createRenderer() {
  return new CommonDOMRenderer().plug(
    () => new ObservableAppendPlugin<Node>(),
    () => new ObservablePropPlugin<Node>(),
    () => new ObservableContentPlugin<Node>(),
  );
}
