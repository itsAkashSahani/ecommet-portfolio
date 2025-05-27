// pages/license.tsx OR app/license/page.tsx
import React from "react";

export default function LicensePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-4 py-10">
      <div className="max-w-4xl mx-auto px-2 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-14 text-center">
          Ecommet Module License Agreement
        </h1>

        <p className="mb-4">
          <strong>This License Agreement (&quot;Agreement&quot;)</strong> is a
          legal contract between you (either an individual or a legal entity)
          and <strong>Ecommet</strong>, governing your use of the software
          modules, extensions, or packages provided by Ecommet
          (&quot;Software&quot;).
        </p>
        <p className="mb-6">
          By installing, copying, or otherwise using the Software, you agree to
          be bound by the terms of this Agreement. If you do not agree, do not
          install or use the Software.
        </p>

        <div className="space-y-8">
          {[
            {
              title: "1. Grant of License",
              content:
                "Ecommet grants you a non-exclusive, non-transferable, non-sublicensable license to use the Software solely for your business operations or on behalf of your clients. You may use the Software on one production domain and unlimited development/staging environments per purchase. Additional licenses must be purchased for each additional production domain.",
            },
            {
              title: "2. Ownership",
              content:
                "All rights, title, and interest in and to the Software (including any updates, enhancements, and modifications) remain the sole property of Ecommet. This Agreement does not grant you any ownership rights in the Software.",
            },
            {
              title: "3. Restrictions",
              content: (
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>
                    Sell, rent, lease, sublicense, or distribute the Software.
                  </li>
                  <li>
                    Reverse engineer, decompile, disassemble, or attempt to
                    derive the source code.
                  </li>
                  <li>
                    Remove or alter any copyright notices, branding, or
                    licensing information.
                  </li>
                  <li>Use the Software in any unlawful or unethical manner.</li>
                </ul>
              ),
            },
            {
              title: "4. Updates & Support",
              content:
                "Free updates and support are provided for 12 months from the date of purchase unless otherwise stated. Continued access to updates and support beyond this period may require a renewal fee or subscription.",
            },
            {
              title: "5. Customization",
              content:
                "You may customize the Software for your own use. However, customizations are not supported under standard support unless made by Ecommet. Customized versions may not be eligible for automatic updates.",
            },
            {
              title: "6. Termination",
              content:
                "This Agreement is effective until terminated. Ecommet may terminate this license if you breach any of the terms. Upon termination, you must destroy all copies of the Software and cease use immediately.",
            },
            {
              title: "7. Refund Policy",
              content:
                "Due to the nature of digital products, refunds are generally not provided unless otherwise required by law. Please review product details, documentation, and compatibility before purchasing.",
            },
            {
              title: "8. Warranty Disclaimer",
              content:
                'The Software is provided "as is" without warranty of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.',
            },
            {
              title: "9. Limitation of Liability",
              content:
                "In no event shall Ecommet be liable for any indirect, incidental, special, or consequential damages, including loss of profits, data, or use, even if advised of the possibility of such damages.",
            },
            {
              title: "10. Governing Law",
              content:
                "This Agreement shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.",
            },
            {
              title: "11. Contact Information",
              content: (
                <>
                  For questions or support, contact:
                  <br />
                  <strong>Ecommet Solutions</strong>
                  <br />
                  Email:{" "}
                  <a
                    href="mailto:ecommet.solutions@gmail.com"
                    className="text-indigo-500 underline"
                  >
                    ecommet.solutions@gmail.com
                  </a>
                  <br />
                  Website:{" "}
                  <a
                    href="https://ecommet.in"
                    className="text-indigo-500 underline"
                  >
                    https://ecommet.in
                  </a>
                </>
              ),
            },
          ].map((section, idx) => (
            <section key={idx}>
              <h2 className="text-2xl font-semibold mb-2">{section.title}</h2>
              <div className="text-gray-700">{section.content}</div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
