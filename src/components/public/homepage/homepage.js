import PromotionBanner from "../sections/promotion-banner";
import Homeslider from '../sections/home-slider';
import FeaturedProducts from '../sections/featured-products';
import FeaturedCategories from '../sections/featured-categories';
import HomeProductColumns from '../sections/home-product-columns'

export default function Homepage() {
    return (
        <>
            <PromotionBanner location="homepage-upper" />
            <Homeslider />
            <FeaturedProducts/>
            <FeaturedCategories/>
            <PromotionBanner location="homepage-middle" />
            <HomeProductColumns/>
        </>
    )
}
