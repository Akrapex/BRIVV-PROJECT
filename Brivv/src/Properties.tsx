import { useState } from "react";
import ProgressBar from "./components/ProgressBar";
import PropertiesHeader from "./components/PropertiesHeader";
import StepNavigation from "./components/StepNavigation";

const propertyDataSteps: string[] = [
  "Basic Information",
  "Media Gallery",
  "Location",
  "Review",
];

export default function Properties() {
  const [step, setStep] = useState<number>(1);
  const range = (step / propertyDataSteps.length) * 100;

  const handleNextStep = () => {
    if (step === 4) return;
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    if (step === 1) return;
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <section className="bg-[#f7f8f6] min-h-screen">
      <PropertiesHeader />

      <main className="px-30 py-4">
        <ProgressBar step={step} title={propertyDataSteps} range={range} />
        <StepNavigation
          step={step}
          text={propertyDataSteps}
          nextStep={handleNextStep}
          prevStep={handlePrevStep}
        />
      </main>
    </section>
  );
}
