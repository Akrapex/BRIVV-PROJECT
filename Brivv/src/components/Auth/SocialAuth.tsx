const SocialAuth = () => {
  return (
    <div className="space-y-3">
      <button className="w-full rounded-lg border border-gray-300 bg-white py-3 text-sm font-medium hover:bg-gray-100 flex justify-center items-center gap-2 cursor-pointer">
        <img src="/images/google-logo.png" alt="google" className="w-5" />
        Continue with Google
      </button>

      <button className="w-full rounded-lg border border-gray-300 bg-white py-3 text-sm font-medium hover:bg-gray-100 flex justify-center items-center gap-2 cursor-pointer">
        <span className="text-xs font-bold">iOS</span>
        Continue with Apple
      </button>
    </div>
  );
};

export default SocialAuth;
