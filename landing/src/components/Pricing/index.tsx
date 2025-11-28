"use client";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Simple, Transparent Pricing"
          paragraph="No hidden fees. No surprises. Just one powerful subscription to grow your business."
          center
          width="665px"
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Starter"
            price="0"
            duration="mo"
            subtitle="Join our waitlist and get a free initial marketing audit."
          >
            <OfferList text="Marketing Audit" status="active" />
            <OfferList text="Basic SEO Report" status="active" />
            <OfferList text="Community Access" status="active" />
            <OfferList text="AI Agent Access" status="inactive" />
            <OfferList text="Campaign Management" status="inactive" />
            <OfferList text="24/7 Support" status="inactive" />
          </PricingBox>
          <PricingBox
            packageName="Growth"
            price="100"
            duration="mo"
            subtitle="Full-cycle digital marketing agency powered by AI."
          >
            <OfferList text="Full AI Agent Access" status="active" />
            <OfferList text="SEO & Content Marketing" status="active" />
            <OfferList text="PPC Campaign Management" status="active" />
            <OfferList text="Social Media Management" status="active" />
            <OfferList text="Weekly Performance Reports" status="active" />
            <OfferList text="24/7 Email Support" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Enterprise"
            price="Custom"
            duration=""
            subtitle="For large organizations requiring custom integrations and dedicated support."
          >
            <OfferList text="Everything in Growth" status="active" />
            <OfferList text="Custom AI Model Training" status="active" />
            <OfferList text="Dedicated Account Manager" status="active" />
            <OfferList text="API Access" status="active" />
            <OfferList text="White-label Options" status="active" />
            <OfferList text="Priority Support" status="active" />
          </PricingBox>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
