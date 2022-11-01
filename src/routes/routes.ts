import { lazy, LazyExoticComponent } from 'react';
import { ShoppingPage } from '../component-patterns/pages/ShoppingPage';

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */ "../layouts/LazyLayout"))


type JSXComponent = () => JSX.Element
interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

export const routes: Route[] = [
    //{to: '/lazyload', path: 'lazyload/*', Component: LazyLayout, name: "Lazy Load"},
    //{to: '/no-lazy', path: 'no-lazy', Component: NoLazy, name: "No Lazy"},
    {to: '/shopping-page', path: 'shopping-page', Component: ShoppingPage, name: "Shopping"}
]