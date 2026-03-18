import React, { useState } from "react";
import ProgressBar from "./components/addNewPropertyComps/ProgressBar";
import PropertiesHeader from "./components/addNewPropertyComps/PropertiesHeader";
import StepNavigation from "./components/addNewPropertyComps/StepNavigation";
import { useNavigate } from "react-router";
import BasicInfo from "./components/addNewPropertyComps/BasicInfo/BasicInfo";
import MediaGallery from "./components/addNewPropertyComps/MediaGallery/MediaGallery";
import Features from "./components/addNewPropertyComps/Features/Features";
import Review from "./components/addNewPropertyComps/Review/Review";

export interface Steps {
  title: string;
  component: React.ReactElement;
}

const steps: Steps[] = [
  { title: "Basic Information", component: <BasicInfo /> },
  { title: "Media Galley", component: <MediaGallery /> },
  { title: "Features & Amenities", component: <Features /> },
  { title: "Review", component: <Review /> },
];

export default function Properties() {
  const [step, setStep] = useState<number>(1);
  const navigate = useNavigate();
  const range = (step / steps.length) * 100;

  const handleNextStep = () => {
    setStep((prev) => Math.min(prev + 1, steps.length));
  };

  const handlePrevStep = () => {
    if (step === 1) {
      navigate("/profile", { replace: true });
      return;
    }

    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };

  return (
    <section className="bg-[#f7f8f6] min-h-screen">
      <PropertiesHeader />

      <main className="px-30 py-4">
        <ProgressBar currentStep={step} steps={steps} range={range} />

        <div>{steps[step - 1].component}</div>

        <StepNavigation
          currentStep={step}
          steps={steps}
          nextStep={handleNextStep}
          prevStep={handlePrevStep}
        />
      </main>
    </section>
  );
}
