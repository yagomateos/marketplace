import { useState } from 'react';
import './footer.css'

export default function Footer() {

    const [openMenu , setOpenMenu] = useState('null');

    return (
        <footer className="bg-gray-100 text-gray-800 py-14 px-4">
        <div className="container mx-auto text-center mb-8">
            <h4 className="mb-4 text-xl font-bold lg:text-3xl">Subscribe to our Newsletter</h4>
            <p className="text-sm">Get recommendations, tips, updates, promotions and more.</p>
            <form className="footer-subscribe-form flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
                <input type="email" placeholder="Enter your email" className="min-w-80 max-w-full px-4 py-4 rounded bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500" />
                <button type="submit" className="px-6 py-4 rounded bg-emerald-600 hover:bg-emerald-800 text-white font-bold">Subscribe</button>
            </form>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mt-24">
            <div>
                <h4 className="font-bold mb-4 hidden lg:block">Get to Know Us</h4>
                
                <div onClick={()=>{openMenu!= 'gtk' ? setOpenMenu('gtk') : setOpenMenu(null)}} className="border-b border-[#cc] flex justify-between items-center lg:hidden">
                    <h4 className="font-bold mb-4">Get to Know Us</h4>
                    <img src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/plusicon.svg" className="w-5"/>
</div>
                <ul className={`text-sm leading-loose ${openMenu=='gtk' ? '' : 'hidden'} lg:block`}>
                    <li><a href="#" className="text-gray-600 hover:text-gray-800">About Us</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-800">News & Blog</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-800">Careers</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-800">Investors</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-800">Contact Us</a></li>
                </ul>
            </div>
            <div>
            <h4 className="font-bold mb-4 hidden lg:block">Customer Service</h4>
                
                <div onClick={()=>{openMenu!= 'cs' ? setOpenMenu('cs') : setOpenMenu(null)}} className="border-b border-[#cc] flex justify-between items-center lg:hidden">
                    <h4 className="font-bold mb-4">Customer Service</h4>
                    <img src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/plusicon.svg" className="w-5"/>
</div>
                <ul className={`text-sm leading-loose ${openMenu=='cs' ? '' : 'hidden'} lg:block`}>
                    <li><a href="#" className="text-gray-600 hover:text-gray-800">Help Center</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-800">FAQ&apos;s</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-800">Accessibility</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-800">Feedback</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-800">Size Guide</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-800">Payment Method</a></li>
                </ul>
            </div>
            <div>
            <h4 className="font-bold mb-4 hidden lg:block">Orders & Returns</h4>
                
                <div onClick={()=>{openMenu!= 'or' ? setOpenMenu('or') : setOpenMenu(null)}} className="border-b border-[#cc] flex justify-between items-center lg:hidden">
                    <h4 className="font-bold mb-4">Orders & Returns</h4>
                    <img src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/plusicon.svg" className="w-5"/>
</div>
                <ul className={`text-sm leading-loose ${openMenu=='or' ? '' : 'hidden'} lg:block`}>
                    <li><a href="#" className="text-gray-600 hover:text-gray-800">Track Order</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-800">Shipping & Delivery</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-800">Return & Exchange</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-800">Price Match Guarantee</a></li>
                </ul>
            </div>
            <div>

                <h4 className="font-bold mb-4 hidden lg:block">Quick Links</h4>
                <div onClick={()=>{openMenu!= 'ql' ? setOpenMenu('ql') : setOpenMenu(null)}} className="border-b border-[#cc] flex justify-between items-center lg:hidden">
                    <h4 className="font-bold mb-4">Quick Links</h4>
                    <img src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/plusicon.svg" className="w-5"/>
</div>

                <ul className={`text-sm leading-loose ${openMenu=='ql' ? '' : 'hidden'} lg:block`}>
                    <li><a href="#" className="text-gray-600 hover:text-gray-800">Privacy Policy</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-800">Terms of Use</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-800">Legal</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-800">Site Map</a></li>
                </ul>
            </div>
        </div>
        <div className="container mx-auto mt-8 flex flex-col lg:flex-row justify-between items-center pt-4">
            <p className="text-gray-600 text-sm">&copy; 2024 Marketplace, All rights reserved.</p>
            <div className="flex space-x-4 justify-between w-full items-center mt-4 lg:w-auto px-12 lg:px-0">
                <a href="#" className="text-gray-600 hover:text-gray-800"><img class="w-4" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/twitter.svg"/></a>
                <a href="#" className="text-gray-600 hover:text-gray-800"><img class="w-4" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/facebook.svg"/></a>
                <a href="#" className="text-gray-600 hover:text-gray-800"><img class="w-4" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/youtube.svg"/></a>
                <a href="#" className="text-gray-600 hover:text-gray-800"><img class="w-4" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/instagram.svg"/></a>
                <a href="#" className="text-gray-600 hover:text-gray-800"><img class="w-4" src="https://bucket-qlrc5d.s3.eu-west-2.amazonaws.com/assets/whatsapp.svg"/></a>
            </div>
        </div>
    </footer>
    

    )
}
