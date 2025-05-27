import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-4 py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-4 lg:px-6">
        <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>

        <p className="mb-6">
          This Privacy Policy describes how <strong>Ecommet</strong>{" "}
          (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) collects, uses,
          and shares your personal information when you use our website,
          modules, or services (collectively, the &quot;Services&quot;).
        </p>

        <div className="space-y-8">
          {[
            {
              title: "1. Information We Collect",
              content: (
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>
                    Personal information (such as your name, email, company
                    name) when you make a purchase or contact us.
                  </li>
                  <li>
                    Usage data including IP address, browser type, and pages
                    visited.
                  </li>
                  <li>
                    Payment and billing information (handled securely via
                    third-party providers).
                  </li>
                </ul>
              ),
            },
            {
              title: "2. How We Use Your Information",
              content: (
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>To provide and improve our services and products.</li>
                  <li>
                    To process transactions and send purchase confirmations.
                  </li>
                  <li>To respond to customer support inquiries.</li>
                  <li>
                    To send important updates, product news, or promotional
                    offers (with your consent).
                  </li>
                </ul>
              ),
            },
            {
              title: "3. Sharing Your Information",
              content:
                "We do not sell, rent, or trade your personal information. We may share data with trusted third-party services (like payment gateways or analytics tools) only as necessary to provide our services and operate our business.",
            },
            {
              title: "4. Data Security",
              content:
                "We implement industry-standard security measures to protect your data. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.",
            },
            {
              title: "5. Your Rights",
              content:
                "You have the right to access, correct, or delete your personal data. To make a request, please contact us at the email below.",
            },
            {
              title: "6. Cookies",
              content:
                "Our website uses cookies to enhance user experience, analyze traffic, and personalize content. You can manage cookie preferences through your browser settings.",
            },
            {
              title: "7. Third-Party Links",
              content:
                "Our website may contain links to other websites. We are not responsible for their content or privacy practices. Please review their privacy policies.",
            },
            {
              title: "8. Children's Privacy",
              content:
                "Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children.",
            },
            {
              title: "9. Changes to This Policy",
              content:
                "We may update this Privacy Policy from time to time. Changes will be posted on this page with a revised effective date. Continued use of the Services constitutes your acceptance of the updated policy.",
            },
            {
              title: "10. Contact Us",
              content: (
                <>
                  If you have any questions about this Privacy Policy, please
                  contact us:
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
