export default function Footer() {
    return (
        <footer className="bg-gray-100 text-gray-800 py-14 px-4">
        <div className="container mx-auto text-center mb-8">
            <h4 className="mb-4 text-3xl">Subscribe to our Newsletter</h4>
            <p className="text-sm">Get recommendations, tips, updates, promotions and more.</p>
            <form className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
                <input type="email" placeholder="Enter your email" className="min-w-80 max-w-full px-4 py-4 rounded bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500" />
                <button type="submit" className="px-6 py-4 rounded bg-emerald-600 hover:bg-emerald-800 text-white font-bold">Subscribe</button>
            </form>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mt-24">
            <div>
                <h4 className="font-bold mb-4">Get to Know Us</h4>
                <ul className="text-sm leading-loose">
                    <li><a href="#" className="text-gray-600 hover:text-gray-800">About Us</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-800">News & Blog</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-800">Careers</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-800">Investors</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-800">Contact Us</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold mb-4">Customer Service</h4>
                <ul className="text-sm leading-loose">
                    <li><a href="#" className="text-gray-600 hover:text-gray-800">Help Center</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-800">FAQ&apos;s</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-800">Accessibility</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-800">Feedback</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-800">Size Guide</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-800">Payment Method</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold mb-4">Orders & Returns</h4>
                <ul className="text-sm leading-loose">
                    <li><a href="#" className="text-gray-600 hover:text-gray-800">Track Order</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-800">Shipping & Delivery</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-800">Return & Exchange</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-800">Price Match Guarantee</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold mb-4">Quick Links</h4>
                <ul>
                    <li><a href="#" className="text-gray-600 hover:text-gray-800">Privacy Policy</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-800">Terms of Use</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-800">Legal</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-800">Site Map</a></li>
                </ul>
            </div>
        </div>
        <div className="container mx-auto mt-8 flex flex-col lg:flex-row justify-between items-center border-t border-gray-300 pt-4">
            <p className="text-gray-600 text-sm">&copy; 2024 Marketplace, All rights reserved.</p>
            <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-gray-800">Twitter</a>
                <a href="#" className="text-gray-600 hover:text-gray-800">Facebook</a>
                <a href="#" className="text-gray-600 hover:text-gray-800">YouTube</a>
                <a href="#" className="text-gray-600 hover:text-gray-800">Instagram</a>
                <a href="#" className="text-gray-600 hover:text-gray-800">WhatsApp</a>
            </div>
        </div>
    </footer>
    

    )
}
