import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowRight, Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "MageAsk AI Powered Admin Assistant",
    image: "/magento-extensions/mageask-logo-full.png",
    price: 99,
    discountedPrice: 79,
    shortDescription:
      "MageAsk seamlessly integrates OpenAI with your Magento admin, letting you query store data in plain language - no SQL needed. Instantly get answers in structured tables and make data-driven decisions faster.",
    rating: 5.0,
  },
  {
    id: 2,
    name: "Customer Group Payment Restriction",
    image: "/magento-extensions/payment-restriction.png",
    price: 59,
    shortDescription:
      "Control payment method visibility by customer group with this extension. Easily configure which payment options are available for each group",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Customer Product Inquiries",
    image: "/magento-extensions/product_enquiry_full.png",
    price: 49,
    shortDescription:
      "Empower customers to ask and answer product-specific questions directly on the product page. This extension enhances customer engagement and builds community trust.",
    rating: 4.5,
  },
  {
    id: 4,
    name: "Smart Delivery Date",
    image: "/magento-extensions/smart-delivery-date_full.png",
    price: 49,
    shortDescription:
      "This module dynamically calculates estimated delivery dates based on your store's working days, holidays, and processing times, giving customers clear and accurate delivery information to enhance their shopping experience.",
    rating: 4.8,
  },
  {
    id: 6,
    name: "Customer KYC Document Upload",
    image: "/magento-extensions/customer_document_upload_full.png",
    price: 0,
    shortDescription:
      "Collect and verify customer identity documents during checkout with the Customer KYC Document Upload module. Customers can upload their ID, type, and number in a secure checkout step, with data stored alongside the order for easy admin access.",
    rating: 4.6,
  },
];

const MagentoExtensionsCarousel = () => {
  return (
    <section className="sm:p-10 px-6 py-10 w-full bg-gray-50">
      <header className="heading mb-2">
        <span className="text-gray-900">Our Magento Extensions</span>
      </header>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-14 mt-6">
        <div className="absolute top-0 right-6 z-10 hidden md:block">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition"
            title="View All Extensions"
          >
            View All Extensions
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <Swiper
          spaceBetween={32}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation
          modules={[Navigation]}
          className="w-full items-stretch"
        >
          {products.map((product) => (
            <SwiperSlide className="!h-auto flex" key={product.id}>
              <div className="bg-white border rounded-xl shadow hover:shadow-lg transition flex flex-col w-full h-full p-4">
                <div className="relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={240}
                    height={240}
                    className="rounded-lg block mx-auto mt-4"
                  />
                  <span className="absolute top-1 left-2 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded">
                    Magento Marketplace Approved
                  </span>
                </div>
                <div className="flex flex-col flex-grow mt-4">
                  <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                  <div className="flex items-center mb-2">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.round(product.rating)
                            ? "text-yellow-500"
                            : "text-gray-300"
                        }`}
                        fill={
                          i < Math.round(product.rating)
                            ? "currentColor"
                            : "none"
                        }
                      />
                    ))}
                    <span className="ml-2 text-xs text-gray-600">
                      {product.rating}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm flex-grow mb-2">
                    {product.shortDescription}
                  </p>
                  <div className="flex items-center gap-2 mb-4">
                    {product.discountedPrice ? (
                      <>
                        <span className="text-gray-400 line-through">
                          {product.price + " USD"}
                        </span>
                        <span className="text-green-600 font-bold text-2xl">
                          {product.discountedPrice === 0
                            ? "Free"
                            : product.discountedPrice + " USD"}
                        </span>
                      </>
                    ) : (
                      <span className="text-green-600 font-bold text-2xl">
                        {product.price === 0 ? "Free" : product.price + " USD"}
                      </span>
                    )}
                  </div>
                  <a
                    href="#"
                    className="block text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition mt-auto"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-6 md:hidden">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
            title="View All Extensions"
          >
            View All Extensions
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MagentoExtensionsCarousel;
