import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import '../styles/custom-styles.css';


const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
}



export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>

                <ProductCard product={ product } className="bg-dark" >
                    <ProductCard.Image className="custom-image" />
                    <ProductCard.Title title={ 'Hola Mundo' } className="text-white text-bold" />
                    <ProductCard.Buttons className="custom-buttons" />
                </ProductCard>

                <ProductCard 
                product={ product }
                className="bg-dark"
                >
                    <ProductImage className="custom-image" />
                    <ProductTitle className="text-white text-bold" />
                    <ProductButtons className="custom-buttons" />
                </ProductCard>

                <ProductCard 
                product={ product }
                style={{
                    background: 'blue',
                }}
                >
                    <ProductImage 
                    style={{
                        boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
                    }} 
                    />
                    <ProductTitle 
                    style={{
                        fontWeight: 'bolder',
                    }}
                    />
                    <ProductButtons 
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    />
                </ProductCard>
            </div>
        </div>
    )
}