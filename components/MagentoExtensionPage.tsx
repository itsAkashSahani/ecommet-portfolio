import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { magentoExtensions } from "@/data";

const MagentoExtensionPage = () => {
  return (
    <section
      className="relative sm:p-10 px-6 py-10 w-full"
      id="web-mobile-apps"
    >
      <div className="absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] z-[-10]"></div>

      <header className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Magento Extensions Store
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          Explore our collection of Magento extensions designed to enhance your
          eCommerce store&apos;s functionality. From payment gateways to shipping
          solutions, find the perfect tools to optimize your Magento experience.
        </p>
      </header>

      <div className="max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto">
          {magentoExtensions.map((product) => (
            <div className="bg-white border rounded-xl shadow hover:shadow-lg transition flex flex-col w-full h-full p-4" key={product.id}>
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
                    href="/contact-us"
                    className="block text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition mt-auto"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
          ))}
      </div>

    </section>
  );
};

export default MagentoExtensionPage;
