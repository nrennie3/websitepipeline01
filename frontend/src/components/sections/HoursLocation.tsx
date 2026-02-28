import { SITE_INFO } from "@/lib/data";

export default function HoursLocation() {
  return (
    <section className="section-pad bg-[#FAF9F6]">
      <div className="container-site">
        <div className="text-center mb-14">
          <p className="text-[#C74200] text-sm tracking-[0.25em] uppercase font-semibold mb-3">
            Find Us
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#1C1C1C]"
            style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
          >
            Hours &amp; Location
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Hours + Contact */}
          <div className="space-y-8">
            {/* Hours table */}
            <div>
              <h3 className="text-[#1C1C1C] font-semibold text-lg mb-4 tracking-wide">
                Hours of Operation
              </h3>
              <div className="divide-y divide-[#E8E4DF]">
                {SITE_INFO.hours.map((entry) => (
                  <div key={entry.days} className="py-3 grid grid-cols-[1fr_auto] gap-4">
                    <span className="text-[#1C1C1C] font-medium">{entry.days}</span>
                    <div className="text-right text-[#6B6B6B] text-sm space-y-0.5">
                      {entry.lunch === "Closed" ? (
                        <p className="text-[#6B6B6B]">Closed</p>
                      ) : (
                        <>
                          <p>Lunch: {entry.lunch}</p>
                          <p>Dinner: {entry.dinner}</p>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Address + Phone */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#C74200] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-[#1C1C1C] font-medium">Address</p>
                  <address className="text-[#6B6B6B] not-italic text-sm leading-relaxed">
                    {SITE_INFO.address}
                  </address>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#C74200] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="text-[#1C1C1C] font-medium">Phone</p>
                  <a href={`tel:${SITE_INFO.phone.replace(/\D/g, "")}`} className="text-[#C74200] hover:text-[#9E3500] text-sm font-medium">
                    {SITE_INFO.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map embed */}
          <div className="rounded-sm overflow-hidden shadow-md h-80 lg:h-full min-h-72">
            <iframe
              title="Thai Nigiri location map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2680.6!2d-116.5533!3d48.2766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x536573f9e2e1c5b5%3A0x7b9cdb944d5ff43!2s209%20N%201st%20Ave%2C%20Sandpoint%2C%20ID%2083864!5e0!3m2!1sen!2sus!4v1699999999999"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
