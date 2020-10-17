import { LiveRendererLike } from 'render-jsx';
import { ContentPlugin, Plugin } from 'render-jsx/plugin';
import { Observable } from 'rxjs';

import { makeHook } from '../util';


export class ObservableContentPlugin<N> extends Plugin<N, LiveRendererLike<N>> implements ContentPlugin<N> {
  priority(): number {
    return Plugin.PriorityFallback;
  }

  setContent(node: N, target: any): boolean {
    if (target instanceof Observable) {
      const renderer = this.renderer();
      renderer.hook(node, makeHook(target, value => renderer.setContent(node, value)));

      return true;
    }

    return false;
  }
}
