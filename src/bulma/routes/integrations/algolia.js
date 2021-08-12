import routeImporter from '@enso-ui/ui/src/modules/importers/routeImporter';

const routes = routeImporter(require.context('./algolia', false, /.*\.js$/));
const Router = () => import('@enso-ui/ui/src/bulma/pages/Router.vue');

export default {
    path: 'algolia/',
    component: Router,
    meta: {
        breadcrumb: 'algolia',
    },
    children: routes,
};
