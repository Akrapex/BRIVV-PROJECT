import SectionHeader from "../../components/PaymentMethods/SectionHeader";
import CardActionBtn from "../../components/PaymentMethods/CardActionBtn";
import SavedCardsSection from "../../components/PaymentMethods/SavedCardsSection";
import BankSection from "../../components/PaymentMethods/BankSection";
import QuickLinks from "../../components/PaymentMethods/QuickLinks";
import PromoCard from "../../components/PaymentMethods/PromoCard";
import SettingsFooter from "../../components/SettingsFooter";

const PaymentMethods = () => {
  return (
    <div className="min-h-screen bg-white p-6 md:p-12">
      <div className="max-w-250 mx-auto space-y-10">
        <div className="flex justify-between items-center flex-col md:flex-row gap-6">
          <SectionHeader
            title="Payment Methods"
            subtitle="Manage your secure payment sources"
          />
          <CardActionBtn />
        </div>

        <SavedCardsSection />

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <BankSection />
          </div>

          <div className="space-y-6">
            <QuickLinks />
            <PromoCard />
          </div>
        </div>

        <SettingsFooter />
      </div>
    </div>
  );
};

export default PaymentMethods;
