import { defineCustomElements } from '@esri/hub-components/dist/esm/loader';

export function initialize(/* application */) {
  // define hub components' custom elements on the window
  // define the resource Url as well
  defineCustomElements(window, {
    // I would expect that we'd just append /hub-components
    // but if you do that the components try to fetch resources
    // from /locales instead of /hub-components/locales
    // stencil must resolve this to a relative path (i.e. ../../)
    // I'm leaving this w/ /foo as a signal that there's something fishy going on here
    resourcesUrl: `/hub-components/foo`,
  });
}

export default {
  initialize,
};
