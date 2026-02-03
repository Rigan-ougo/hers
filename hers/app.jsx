import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Ambulance, MessageCircle } from "lucide-react";

export default function EmergencyUI() {
  const [step, setStep] = useState("landing");
  const [emergency, setEmergency] = useState("");

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      {step === "landing" && (
        <Card className="max-w-md w-full rounded-2xl shadow-lg">
          <CardContent className="p-6 space-y-6 text-center">
            <h1 className="text-2xl font-bold">Healthcare Emergency Response</h1>
            <p className="text-slate-600">
              Get immediate medical help by connecting to the nearest responder.
            </p>
            <Button className="w-full" onClick={() => setStep("dashboard")}>
              Report Emergency
            </Button>
          </CardContent>
        </Card>
      )}

      {step === "dashboard" && (
        <Card className="max-w-xl w-full rounded-2xl shadow-lg">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold">Emergency Details</h2>

            <select
              className="w-full p-2 border rounded-lg"
              value={emergency}
              onChange={(e) => setEmergency(e.target.value)}
            >
              <option value="">Select Emergency Type</option>
              <option value="accident">Road Accident</option>
              <option value="heart">Heart Attack</option>
              <option value="delivery">Emergency Delivery</option>
              <option value="injury">Severe Injury</option>
            </select>

            <Textarea placeholder="Describe the situation..." />

            <Button variant="outline" className="w-full flex gap-2">
              <MapPin size={18} /> Share Live Location
            </Button>

            <Button className="w-full flex gap-2">
              <Ambulance size={18} /> Find Nearest Ambulance
            </Button>

            <div className="pt-4 border-t">
              <Button
                variant="secondary"
                className="w-full flex gap-2"
                onClick={() => setStep("chatbot")}
              >
                <MessageCircle size={18} /> Talk to Medical Assistant
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {step === "chatbot" && (
        <Card className="max-w-md w-full rounded-2xl shadow-lg">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold">Medical Triage Assistant</h2>
            <p className="text-sm text-slate-600">
              Tell me your symptoms. I’ll help assess urgency and give safe first‑aid guidance.
            </p>
            <Textarea placeholder="Describe symptoms..." />
            <Button className="w-full">Analyze Symptoms</Button>
            <Button variant="ghost" className="w-full" onClick={() => setStep("dashboard")}>
              Back to Emergency Form
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
