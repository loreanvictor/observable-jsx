import { LiveRendererLike } from 'render-jsx';
import { AppendPlugin, Plugin } from 'render-jsx/plugin';
import { Observable } from 'rxjs';

import { makeHook } from '../util';


export class ObservableAppendPlugin<N> extends Plugin<N, LiveRendererLike<N>> implements AppendPlugin<N> {
  priority(): number {
    return Plugin.PriorityFallback;
  }

  append(target: any, host: N): boolean {
    if (target instanceof Observable) {
      const renderer = this.renderer();
      const leaf = renderer.leaf();

      renderer.hook(leaf, makeHook(target, value => renderer.setContent(leaf, value)));
      renderer.append(leaf, host);

      return true;
    }

    return false;
  }
}
