/**
 * What a recruiter scans for first: which contract, from when, and in which
 * languages. Copy comes from src/content/home/home.{en,fr}.js (hero.*).
 */
const Availability = ({ hero }) => (
  <div className="w-full max-w-md text-left">
    <p id="availability-title" className="mb-2 text-sm font-semibold text-primary-pink">
      {hero.availabilityTitle}
    </p>
    <dl
      aria-labelledby="availability-title"
      className="overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"
    >
      {hero.availability.map((row) => (
        <div
          key={row.label}
          className="grid grid-cols-[minmax(96px,auto)_1fr] gap-3 border-b border-white/10 px-4 py-2.5 text-sm"
        >
          <dt className="font-semibold text-white">{row.label}</dt>
          <dd className="text-gray-300">{row.detail}</dd>
        </div>
      ))}
      <div className="grid grid-cols-[minmax(96px,auto)_1fr] gap-3 px-4 py-2.5 text-sm">
        <dt className="font-semibold text-white">{hero.languages.label}</dt>
        <dd className="text-gray-300">
          {hero.languages.items.map((lang) => `${lang.name} ${lang.level}`).join(", ")}
        </dd>
      </div>
    </dl>
  </div>
);

export default Availability;
