import ProductList from './snippets/product-list'

export default function HomeProductColumns() {
    return (
        <div className="container mx-auto my-8 px-4 max-w-7xl sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row justify-between align-center">
                <div className='w-full'>
                    <h3 className="font-semibold text-lg">Featured products</h3>
                    <ProductList label="featured" />
                </div>
                <div className='w-full pt-4 lg:pt-0'>
                    <h3 className="font-semibold text-lg">Most-viewed Items</h3>
                    <ProductList label="mostViewed" />
                </div>
                <div className='w-full pt-4 lg:pt-0'>
                    <h3 className="font-semibold text-lg">We Think You'll Love</h3>
                    <ProductList label="recommanded" />
                </div>
            </div>
        </div>
    )
}
