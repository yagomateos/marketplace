import PromotionBanner from "../sections/promotion-banner";
import Homeslider from '../sections/home-slider';
import FeaturedProducts from '../sections/featured-products';
import FeaturedCategories from '../sections/featured-categories';
import HomeProductColumns from '../sections/home-product-columns'

export default function Homepage() {
    return (
        <>
        <div className="pt-6">
        <PromotionBanner location="homepage-upper" layout="inline" />
            <Homeslider />
            <FeaturedProducts/>
            <FeaturedCategories/>
            <PromotionBanner location="homepage-middle" layout="vertical"/>
            <HomeProductColumns/>
        </div>

        </>
    )
}
