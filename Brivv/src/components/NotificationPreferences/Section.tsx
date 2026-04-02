interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section = ({ title, children }: SectionProps) => {
  return (
    <section className="space-y-6">
      <h2 className="text-xl font-bold text-slate-900">{title}</h2>
      {children}
    </section>
  );
};

export default Section;
