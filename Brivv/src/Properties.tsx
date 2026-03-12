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
  return (
    <section className="bg-[#f7f8f6] min-h-screen">
      <PropertiesHeader />

      <main className="px-30 py-4">
        <ProgressBar />
        <StepNavigation />
      </main>
    </section>
  );
}
