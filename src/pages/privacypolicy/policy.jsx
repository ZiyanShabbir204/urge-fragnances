import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 md:pt-24">
      <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>

      <p className="mb-4 md:text-lg">
        At <span className="font-semibold">Urge Fragrances</span>, we are
        committed to protecting your privacy. This Privacy Policy outlines how
        we collect, use, and protect your personal information when you visit
        our website or interact with our services.
      </p>

      <section className="mb-6">
        <h2 className="text-2xl text-black mb-3 font-semibold">
          Information We Collect
        </h2>
        <p className="md:text-lg">
          We collect personal information that you voluntarily provide to us,
          such as your name and email address, when you sign up for our
          newsletter, contact us, or request information about our services.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl text-black mb-3 font-semibold">
          How We Use Your Information
        </h2>
        <ol className="list-disc list-inside space-y-2 md:text-lg">
          <li>Send you updates about our services, offers, and news.</li>
          <li>Respond to your inquiries and provide customer support.</li>
          <li>
            Improve our website and tailor our services to better meet your
            needs.
          </li>
        </ol>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl text-black mb-3 font-semibold">
          Sharing Your Information
        </h2>
        <p className="md:text-lg">
          We do not share, sell, or rent your personal information to third
          parties. However, we may share your information with trusted service
          providers who assist us in operating our website and conducting
          business, provided they agree to keep your information confidential.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl text-black mb-3 font-semibold">Cookies</h2>
        <p className="md:text-lg">
          Our website uses cookies to enhance your browsing experience. Cookies
          are small files stored on your device that help us understand how you
          use our site and improve its functionality. You can choose to disable
          cookies through your browser settings.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl text-black mb-3 font-semibold">Data Security</h2>
        <p className="md:text-lg">
          We implement appropriate security measures to protect your personal
          information from unauthorized access, disclosure, or misuse. However,
          no method of transmission over the internet is 100% secure, and we
          cannot guarantee absolute security.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl text-black mb-3 font-semibold">Your Rights</h2>
        <p className="md:text-lg">
          You have the right to access, update, or delete your personal
          information. If you wish to do so or have any questions about how we
          handle your data, please contact us {" "}
          <Link to="/contact" className="text-black underline">
            here
          </Link>
          .
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl text-black mb-3 font-semibold">
          Changes to This Policy
        </h2>
        <p className="md:text-lg">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page, and the date of the latest revision will be
          updated at the top of the page.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl text-black mb-3 font-semibold">Contact Us</h2>
        <p className="md:text-lg">
          If you have any questions or concerns about our Privacy Policy, please
          contact us {" "}
          <Link to="/contact" className="text-black underline">
            here
          </Link>
          .
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
