import { LiveRendererLike } from 'render-jsx';
import { PropPlugin, Plugin } from 'render-jsx/plugin';
import { Observable } from 'rxjs';

import { makeHook } from '../util';


export class ObservablePropPlugin<N> extends Plugin<N, LiveRendererLike<N>> implements PropPlugin<N> {
  priority(): number {
    return Plugin.PriorityFallback;
  }

  setProp(node: N, prop: string, target: any): boolean {
    if (target instanceof Observable) {
      const renderer = this.renderer();
      renderer.hook(node, makeHook(target, value => renderer.setProp(node, prop, value)));

      return true;
    }

    return false;
  }
}
