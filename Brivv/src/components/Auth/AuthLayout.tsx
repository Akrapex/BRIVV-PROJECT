const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen relative">
      {/* LEFT SIDE */}
      <div className="hidden lg:flex w-3/5 shrink-0 h-full relative">
        <img
          src="/images/estate-image.png"
          alt="Estate"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 p-12 flex flex-col justify-end text-white">
          <div className="mb-6 text-2xl font-semibold">
            Brivv - Your Gateway to Real Estate
          </div>

          <h1 className="text-4xl font-bold mb-4">
            Find your place in the world.
          </h1>

          <p className="text-gray-200 max-w-md text-sm">
            Join millions finding their dream homes.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex flex-1 items-center justify-center bg-gray-50 px-6 py-12">
        <div className="w-full max-w-md space-y-6">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
