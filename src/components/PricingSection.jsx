import PricingCard from "./PricingCard";

const PricingSection = () => (
  <section className="mt-24">
    <h2 className="text-4xl font-bold mb-12">Pricing Plans</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <PricingCard
        title="Starter"
        price="$29"
        features={[
          "Basic analytics",
          "Up to 1,000 users",
          "Email support",
          "1 project"
        ]}
      />
      <PricingCard
        title="Pro"
        price="$99"
        features={[
          "Advanced analytics",
          "Up to 10,000 users",
          "Priority support",
          "5 projects",
          "API access"
        ]}
        highlighted={true}
      />
      <PricingCard
        title="Enterprise"
        price="Custom"
        features={[
          "Full-suite analytics",
          "Unlimited users",
          "24/7 dedicated support",
          "Unlimited projects",
          "Custom integrations"
        ]}
      />
    </div>
  </section>
);

export default PricingSection;
