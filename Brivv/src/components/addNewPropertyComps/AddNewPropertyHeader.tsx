interface PropertyTypes {
  heading: string;
  paragraph: string;
}

function AddNewPropertyHeader({ heading, paragraph }: PropertyTypes) {
  return (
    <div>
      <h1 className="text-[32px] font-extrabold leading-10 text-[#0D1B0D]">
        {heading}
      </h1>
      <p className="text-[16px] text-[#475569] leading-6">{paragraph}</p>
    </div>
  );
}

export default AddNewPropertyHeader;
