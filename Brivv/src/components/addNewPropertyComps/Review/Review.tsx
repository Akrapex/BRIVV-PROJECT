import AddNewPropertyHeader from "../AddNewPropertyHeader";
import ListingSummary from "./ListingSummary";
import PropertyReviewCard from "./PropertyReviewCard";
import PublishingOptionCard from "./PublishingOptionCard";
import ReviewLocationCard from "./ReviewLocationCard";
import Tip from "./Tip";

function Review() {
  return (
    <section className="py-4 mt-4 flex gap-8">
      <div className="flex flex-col gap-8">
        <AddNewPropertyHeader
          heading="Ready to go live?"
          paragraph="Check how your property looks to potential buyers before publishing."
        />

        <PropertyReviewCard />
        <ListingSummary />
      </div>

      <aside className="flex flex-col gap-8">
        <ReviewLocationCard />
        <PublishingOptionCard />
        <Tip />
      </aside>
    </section>
  );
}

export default Review;
