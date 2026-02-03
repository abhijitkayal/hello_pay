export default function TrustedBy() {
  const companies = [
    "Gladia",
    "lemlist",
    "Default",
    "Veesion",
    "Gladia",
    "lemlist",
    "Default",
    "Veesion",
    "Gladia",
    "lemlist",
    "Default",
    "Veesion"
  ];

  return (
    <section className="bg-white w-full py-8 md:py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">

        {/* Heading */}
        <p className="mb-8 md:mb-12 text-xs sm:text-sm font-medium text-gray-500">
          Trusted by <span className="font-semibold text-gray-700">5,000+</span> companies
        </p>

        {/* Text Logos - Always 4 columns */}
        <div className="grid grid-cols-6 gap-4 sm:gap-8 md:gap-8 lg:gap-16 items-center justify-items-center">
          {companies.map((name) => (
            <h5
              key={name}
              className="
                text-gray-400 font-semibold tracking-wide
                text-xs sm:text-sm md:text-base lg:text-lg
                uppercase opacity-70
                hover:opacity-100 transition
              "
            >
              {name}
            </h5>
          ))}
        </div>

      </div>
    </section>
  );
}
