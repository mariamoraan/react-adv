import { Props as ProductCardButtonsProps } from '../components/ProductButtons';
import { Props as ProductCardProps } from '../components/ProductCard';
import { Props as ProductCardImageProps } from '../components/ProductImage';
import { Props as ProductCardTitleProps } from '../components/ProductTitle';

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    counter: number;
    product: Product;
    increaseBy: ( value: number ) => void;
}


export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps ):JSX.Element,
    Title: (Props: ProductCardTitleProps) => JSX.Element,
    Image: (Props: ProductCardImageProps) => JSX.Element,
    Buttons: (Props: ProductCardButtonsProps) => JSX.Element
}