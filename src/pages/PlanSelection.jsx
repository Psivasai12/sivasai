import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Check, CreditCard, Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const PlanSelection = () => {
  const [selectedPlan, setSelectedPlan] = useState("pro");
  const [isPurchasing, setIsPurchasing] = useState(false);
  const [purchaseComplete, setPurchaseComplete] = useState(false);
  const { toast } = useToast();

  const plans = [
    { id: "starter", name: "Starter", price: "$29", features: ["Basic analytics", "Up to 1,000 users", "Email support", "1 project"] },
    { id: "pro", name: "Pro", price: "$99", features: ["Advanced analytics", "Up to 10,000 users", "Priority support", "5 projects", "API access"] },
    { id: "enterprise", name: "Enterprise", price: "Custom", features: ["Full-suite analytics", "Unlimited users", "24/7 dedicated support", "Unlimited projects", "Custom integrations"] },
  ];

  const handlePurchase = () => {
    setIsPurchasing(true);
    // Simulate API call
    setTimeout(() => {
      setIsPurchasing(false);
      setPurchaseComplete(true);
      toast({
        title: "Purchase Successful!",
        description: `You have successfully subscribed to the ${plans.find(p => p.id === selectedPlan).name} plan.`,
        duration: 5000,
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 text-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Choose Your Plan</h1>
        <div className="max-w-3xl mx-auto">
          <RadioGroup value={selectedPlan} onValueChange={setSelectedPlan} className="grid gap-8 grid-cols-1 md:grid-cols-3">
            {plans.map((plan) => (
              <Card key={plan.id} className={`bg-white bg-opacity-10 border-2 ${selectedPlan === plan.id ? 'border-yellow-400' : 'border-transparent'}`}>
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-3xl font-bold">{plan.price}<span className="text-lg">/month</span></CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="h-5 w-5 mr-2 text-green-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <RadioGroupItem value={plan.id} id={plan.id} className="sr-only" />
                  <Label htmlFor={plan.id} className="flex items-center justify-center w-full cursor-pointer">
                    <Button variant={selectedPlan === plan.id ? "default" : "outline"} className="w-full">
                      {selectedPlan === plan.id ? "Selected" : "Select Plan"}
                    </Button>
                  </Label>
                </CardFooter>
              </Card>
            ))}
          </RadioGroup>

          <Card className="mt-12 bg-white bg-opacity-10">
            <CardHeader>
              <CardTitle className="text-2xl">Payment Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="cardNumber">Card Number</Label>
                <div className="relative">
                  <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                  <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiryDate">Expiry Date</Label>
                  <Input id="expiryDate" placeholder="MM/YY" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvv">CVV</Label>
                  <Input id="cvv" placeholder="123" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              {!purchaseComplete ? (
                <Button 
                  className="w-full" 
                  onClick={handlePurchase} 
                  disabled={isPurchasing}
                >
                  {isPurchasing ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    "Complete Purchase"
                  )}
                </Button>
              ) : (
                <div className="text-center w-full">
                  <Check className="h-6 w-6 text-green-500 mx-auto mb-2" />
                  <p className="text-lg font-semibold">Purchase Complete!</p>
                  <p>Thank you for choosing MonsterScale.</p>
                </div>
              )}
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PlanSelection;
