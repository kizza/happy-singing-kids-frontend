"use client"

import Header from "@/components/Header";
import Title from "@/components/Title";
import classnames from "classnames";

const PrivacyPolicy = () => {
  return <div className="test">
    <Header clouds={false} />
    <div className="inner min-h-screen">
      <div className="mx-2 mb-8 space-y-10">

        <div>
          <Title styles={["text-grape"]}>
            Privacy Policy
          </Title>
          <p className="text-md">
            <strong>Last Updated: July 3, 2025</strong>
          </p>

<p>
At Happy Singing Kids, we’re dedicated to creating a safe and joyful online experience for children and their families.  We are committed to protecting your privacy and keeping your personal information safe. This Privacy Policy explains how we collect, use, store, and share personal information when you visit our website or use our services.</p><p>We’ve written this in plain language to make it easy for everyone, including parents and guardians, to understand. If you have any questions, please contact us at <a href="mailto:contact@happysingingkids.com">contact@happysingingkids.com</a>.
</p>
        </div>

<div className="space-y-2">
  <h4 className="text-aqua text-lg font-bold">What information do we collect?</h4>
  <p>The personal information we collect depends on your interactions with Happy Singing Kids. It includes:</p>
  <ul className="list-disc marker:text-grape ml-6">
    <li>Name</li>
    <li>Email address</li>
    <li>Payment details</li>
    <li>Shipping details</li>
    <li>Any other information you choose to disclose</li>
  </ul>
</div>

<div className="space-y-2">
  <h4 className="text-aqua text-lg font-bold">
    How do we collect your information?
  </h4>
  <p>We collect personal information when you provide it directly to us, such as through our website, emails, social media pages or online purchaes. We also collect anonymised data through cookies to enhance your experience, though this data does not identify you personally.</p>
</div>

<div className="space-y-2">
  <h4 className="text-aqua text-lg font-bold">
    How do we use your information?
  </h4>
  <p>We use your information to:</p>
  <ul className="list-disc marker:text-grape ml-6">
    <li>Provide our services, like delivering resources and processing payments.</li>
    <li>Send you updates, newsletters, or promotional offers (only with your consent, and you can unsubscribe anytime).</li>
    <li>Improve our website by trying to understand how it’s used.</li>
    <li>Respond to your questions or feedback.</li>
  </ul>
</div>

<div className="space-y-2">
  <h4 className="text-aqua text-lg font-bold">
    Do we share your information?
  </h4>
  <p>Your personal information when provided is shared with:</p>
  <ul className="list-disc marker:text-grape ml-6">
    <li>Service Providers: Trusted partners who help us run our website, like payment processors, cloud storage providers, or analytics services. These providers are contractually required to protect your data.</li>
    <li>Legal Authorities: If required by law, such as in response to a court order or regulatory request.</li>
  </ul>
</div>

<div className="space-y-2">
  <h4 className="text-aqua text-lg font-bold">
    Your rights and choices
  </h4>
  <p>You have the right to:</p>
  <ul className="list-disc marker:text-grape ml-6">
    <li>Access or correct your information: Contact us to see or update the personal information we hold about you.</li>
  <li>Opt-out: Unsubscribe from marketing emails using the link in any email or by contacting us.</li>
  <li>Remain anonymous: Interact with our site without providing personal information where possible.</li>
  </ul>
</div>


<div className="space-y-2">
  <h4 className="text-aqua text-lg font-bold">
    Contact us
  </h4>
  <p>Please do contact us with any questions, concerns or corrections at <a href="mailto:contact@happysingingkids.com">contact@happysingingkids.com</a>.</p>
</div>

      </div>
    </div>
  </div>
};

export default PrivacyPolicy;
