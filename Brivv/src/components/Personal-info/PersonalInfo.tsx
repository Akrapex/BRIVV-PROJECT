import { useState } from "react";
import Header from "./Header";
import ProfileCard from "./ProfileCard";
import ContactDetails from "./CardDetails";
import { notificationsData } from "./personalInfoData";
import NotificationSettings from "./NotificationSettings";
import PaymentMethods from "./PaymentMethods";
import { paymentMethods } from "./personalInfoData";
import SecurityNotice from "./SecurityNotice";
import { useAuth } from "../../Contexts/AuthContext";

export interface UserData {
  fullName: string;
  email?: string;
  phone?: string;
  propertyAlerts?: boolean;
  educationalNewsletter?: boolean;
  billingInvoices?: boolean;
}

const PersonalInformation = () => {
  const { user } = useAuth();
  console.log(user);

  const [formData, setFormData] = useState<UserData>({
    fullName: user?.user_metadata.full_name,
    email: user?.email,
    phone: "555-0123",
    propertyAlerts: true,
    educationalNewsletter: true,
    billingInvoices: false,
  });

  return (
    <div className="min-h-screen w-full bg-white p-6 md:p-10 font-sans text-slate-900">
      <div className="w-full mx-auto">
        {/* Header Section */}
        <Header />

        {/* Profile Card */}
        <ProfileCard fullName={formData.fullName} email={formData.email} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
          {/* Contact Details Section */}
          <ContactDetails
            fullName={formData.fullName}
            email={formData.email}
            phone={formData.phone}
          />

          {/* Notifications Section */}
          <NotificationSettings
            notifications={notificationsData}
            formData={formData}
            setFormData={setFormData}
          />
        </div>

        {/* Payment Methods Section */}
        <PaymentMethods paymentMethods={paymentMethods} />

        {/* Security Banner */}
        <SecurityNotice />

        {/* Footer Copyright */}
        <div className="text-center py-6 border-t border-slate-100">
          <p className="text-[10px] text-slate-400 font-medium uppercase tracking-widest">
            ©{new Date().getFullYear()} Akrapex Real Estate Platform. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
