// @ts-nocheck
import { Plugin } from '/root/ob-repository-synchronize/web/node_modules/umi/node_modules/@umijs/runtime';

const plugin = new Plugin({
  validKeys: ['modifyClientRenderOpts','patchRoutes','rootContainer','render','onRouteChange','__mfsu','getInitialState','initialStateConfig','request',],
});

export { plugin };
