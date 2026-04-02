interface ToggleProps {
  enabled: boolean;
  onChange: () => void;
}

const Toggle = ({ enabled, onChange }: ToggleProps) => {
  return (
    <button
      onClick={onChange}
      className={`w-12 h-6 rounded-full transition-colors relative ${
        enabled
          ? "bg-[#7da02b] border-[#6a8a25]"
          : "bg-slate-100 border-slate-200"
      }`}
    >
      <div
        className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
          enabled ? "translate-x-6.75" : "translate-x-1"
        }`}
      />
    </button>
  );
};

export default Toggle;
