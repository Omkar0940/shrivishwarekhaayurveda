import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Leaf, Stethoscope, Sprout, HeartPulse, Phone, MessageCircle, MapPin, ArrowRight, Mail, Menu, X, Languages, CalendarDays } from "lucide-react";
import hero from "@/assets/hero.jpg";
import productsBanner from "@/assets/products-banner.jpg";
import panchakarma from "@/assets/panchakarma.jpg";
import shirodhara from "@/assets/shirodhara.jpg";
import netra from "@/assets/netra.jpg";
import therapyRoom from "@/assets/therapy-room.jpg";
import clinic from "@/assets/clinic.jpg";
import { productCategories, branches, TEL, waLink, PHONE, type Product } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shri Vishwarekha Ayurveda & Panchakarma Centre | Kolhapur" },
      { name: "description", content: "Personalized Ayurvedic care, Panchakarma therapies, Ayurvedic medicines and herbal cosmetics in Kolhapur, Pune and Mumbai since 2014." },
      { property: "og:title", content: "Shri Vishwarekha Ayurveda & Panchakarma Centre" },
      { property: "og:description", content: "Rooted in Ayurveda, guided by tradition. Consultations, Panchakarma and herbal products." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const nav = [
  ["Home", "#home"], ["About Us", "#about"], ["Treatments", "#treatments"], ["Products", "#products"],
  ["Branches", "#branches"], ["Doctors", "#doctors"], ["Contact", "#contact"],
] as const;

const treatments = [
  { img: panchakarma, title: "Panchakarma", sub: "Purification & Rejuvenation" },
  { img: shirodhara, title: "Shirodhara", sub: "Calming & Relaxing" },
  { img: netra, title: "Netra Tarpan", sub: "Nourishing Eye Therapy" },
  { img: therapyRoom, title: "Basti & Virechan", sub: "Classical Detox Therapies" },
];

function Home() {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState<"en" | "mr">("en");
  const [enquiryType, setEnquiryType] = useState<"appointment" | "product" | null>(null);
  const [appointmentName, setAppointmentName] = useState("");
  const [appointmentBranch, setAppointmentBranch] = useState(branches[0].name);
  const [appointmentKind, setAppointmentKind] = useState("Consultation");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [enquiryName, setEnquiryName] = useState("");
  const [enquiryRequirement, setEnquiryRequirement] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const t = (en: string, mr: string) => language === "mr" ? mr : en;
  const openProductEnquiry = (productName: string) => { setSelectedProduct(productName); setEnquiryRequirement(`I would like to enquire about ${productName}.`); setEnquiryType("product"); };
  const submitAppointment = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = `Namaste, I would like to book an appointment.\nName: ${appointmentName}\nBranch: ${appointmentBranch}\nAppointment: ${appointmentKind}\nPreferred date: ${appointmentDate || "To be discussed"}`;
    window.open(waLink(message), "_blank", "noopener,noreferrer");
    setEnquiryType(null);
  };
  const submitProductEnquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = `Namaste, I have a product enquiry.\nName: ${enquiryName}\nProduct: ${selectedProduct || "General product enquiry"}\nRequirement: ${enquiryRequirement}`;
    window.open(waLink(message), "_blank", "noopener,noreferrer");
    setEnquiryType(null);
  };
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
          <a href="#home" className="flex items-center gap-3">
            <Logo />
            <div className="leading-tight">
              <div className="font-serif text-xl font-bold text-primary">Shri Vishwarekha</div>
              <div className="text-[11px] text-muted-foreground">Ayurveda & Panchakarma Centre</div>
            </div>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium lg:flex">
            {nav.map(([l, h]) => <a key={h} href={h} className="hover:text-accent">{language === "mr" ? ({Home:"मुख्यपृष्ठ", "About Us":"आमच्याबद्दल", Treatments:"उपचार", Products:"उत्पादने", Branches:"शाखा", Doctors:"डॉक्टर", Contact:"संपर्क"}[l] || l) : l}</a>)}
          </nav>
          <div className="flex items-center gap-2">
            <button type="button" onClick={() => setLanguage(language === "en" ? "mr" : "en")} aria-label="Switch language" className="inline-flex items-center gap-1 rounded-md border border-border px-3 py-2 text-sm font-semibold hover:bg-secondary">
              <Languages className="h-4 w-4" /> {language === "en" ? "मराठी" : "English"}
            </button>
            <button type="button" onClick={() => setEnquiryType("appointment")} className="hidden rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 sm:inline-block">
              {t("Book an Appointment", "अपॉइंटमेंट बुक करा")}
            </button>
          </div>
          <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X /> : <Menu />}</button>
        </div>
        {open && (
          <nav className="flex flex-col gap-3 border-t border-border px-4 py-4 lg:hidden">
            {nav.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)}>{language === "mr" ? ({Home:"मुख्यपृष्ठ", "About Us":"आमच्याबद्दल", Treatments:"उपचार", Products:"उत्पादने", Branches:"शाखा", Doctors:"डॉक्टर", Contact:"संपर्क"}[l] || l) : l}</a>)}
            <button type="button" onClick={() => { setOpen(false); setEnquiryType("appointment"); }} className="mt-1 w-fit rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">{t("Book an Appointment", "अपॉइंटमेंट बुक करा")}</button>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <img src={hero} alt="Ayurvedic illustration with tulsi and neem" width={1920} height={832} className="absolute inset-0 h-full w-full object-cover object-right" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 md:py-36">
          <div className="max-w-lg rounded-lg bg-background/60 p-4 backdrop-blur-[2px] md:bg-transparent md:p-0 md:backdrop-blur-none">
            <h1 className="font-serif text-5xl font-semibold leading-tight text-primary md:text-6xl">{t("Rooted in Ayurveda", "आयुर्वेदाशी नाळ जोडलेली")}<br />{t("Guided by Tradition", "परंपरेच्या मार्गदर्शनाखाली")}</h1>
            <p className="mt-5 text-lg text-foreground/80">{t("Natural Healing · Panchakarma · Lifelong Wellness", "नैसर्गिक उपचार · पंचकर्म · निरोगी जीवन")}</p>
            <a href="#treatments" className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">
              {t("Explore Our Treatments", "उपचार पाहा")} <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section id="about" className="bg-deep text-deep-foreground">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
          {[[Leaf, "Authentic", "Ayurveda"], [Stethoscope, "Experienced", "Doctors"], [Sprout, "Natural", "Products"], [HeartPulse, "Holistic", "Wellness"]].map(([Icon, a, b], i) => {
            const I = Icon as typeof Leaf;
            return (
              <div key={i} className="flex flex-col items-center gap-3 border-gold/30 px-4 py-10 text-center md:border-r md:last:border-r-0">
                <I className="h-9 w-9 text-gold" strokeWidth={1.3} />
                <div className="font-serif text-lg leading-tight">{a as string}<br />{b as string}</div>
              </div>
            );
          })}
        </div>
        <p className="mx-auto max-w-3xl px-4 pb-10 text-center text-sm text-deep-foreground/80">
          {t("Established in 2014, Shri Vishwarekha Ayurveda & Panchakarma Centre offers personalized Ayurvedic care guided by traditional practices — consultation, Panchakarma therapies, lifestyle and diet guidance, customized medicines and herbal cosmetics, with online consultation and doorstep medicine delivery.", "२०१४ पासून श्री विश्वरेखा आयुर्वेद व पंचकर्म केंद्र येथे पारंपरिक पद्धतींनुसार वैयक्तिक आयुर्वेदिक सल्ला, पंचकर्म उपचार, जीवनशैली व आहार मार्गदर्शन, औषधे आणि हर्बल सौंदर्यप्रसाधने उपलब्ध आहेत. ऑनलाइन सल्ला आणि घरपोच औषधसेवाही उपलब्ध आहे.")}
        </p>
      </section>

      {/* Treatments */}
      <section id="treatments" className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-serif text-4xl font-semibold text-primary">{t("Our Treatments", "आमचे उपचार")}</h2>
            <p className="mt-1 text-muted-foreground">{t("Traditional therapies for complete well-being", "संपूर्ण आरोग्यासाठी पारंपरिक उपचारपद्धती")}</p>
          </div>
          <a href={waLink("Namaste, I would like to know about your treatments.")} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-primary px-4 py-2 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground">
            Enquire About Treatments <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {treatments.map((t) => (
            <article key={t.title} className="overflow-hidden rounded-lg border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <img src={t.img} alt={t.title} loading="lazy" width={912} height={736} className="aspect-[4/3] w-full object-cover" />
              <div className="p-4">
                <h3 className="font-serif text-xl font-semibold text-primary">{t.title}</h3>
                <p className="text-sm text-muted-foreground">{t.sub}</p>
                <a href={waLink(`Namaste, I would like to know more about ${t.title}.`)} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent">Learn More <ArrowRight className="h-3.5 w-3.5" /></a>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">Also offered: Vaman, Rakt Mokshan (leech therapy), lifestyle, diet and yoga guidance. Treatment is chosen by the doctor after consultation.</p>
      </section>

      {/* Products banner */}
      <section className="relative overflow-hidden">
        <img src={productsBanner} alt="Ayurvedic oils, ghee and herbs" loading="lazy" width={1920} height={768} className="absolute inset-0 h-full w-full object-cover object-right" />
        <div className="relative mx-auto max-w-7xl px-4 py-20">
          <div className="max-w-md rounded-lg bg-background/60 p-4 md:bg-transparent md:p-0">
            <h2 className="font-serif text-4xl font-semibold text-primary">{t("Our Ayurvedic Products", "आमची आयुर्वेदिक उत्पादने")}</h2>
            <p className="mt-2 text-lg font-medium">{t("Pure herbs. Better living.", "शुद्ध वनौषधी. निरोगी जीवन.")}</p>
            <p className="mt-3 text-foreground/80">{t("Explore our range of medicated ghee, oils, kalpa and handmade herbal cosmetics.", "औषधी घृत, तेल, कल्प आणि हस्तनिर्मित हर्बल सौंदर्यप्रसाधनांची श्रेणी पाहा.")}</p>
            <a href="#products" className="mt-6 inline-flex items-center gap-2 rounded-md bg-card px-5 py-2.5 text-sm font-semibold text-primary shadow hover:bg-secondary">Explore Products <ArrowRight className="h-4 w-4" /></a>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="font-serif text-4xl font-semibold text-primary">{t("Product Range", "उत्पादनांची श्रेणी")}</h2>
        <p className="mt-1 text-muted-foreground">{t("Hover or tap on a product to see its uses. Contact us for availability and details.", "उपयोग पाहण्यासाठी उत्पादनावर माउस ठेवा किंवा टॅप करा. उपलब्धता आणि माहितीसाठी संपर्क साधा.")}</p>
        {productCategories.map((c) => (
          <div key={c.title} className="mt-10">
            <div className="mb-4 flex items-baseline gap-3 border-b border-border pb-2">
              <h3 className="font-serif text-2xl font-semibold text-primary">{language === "mr" ? (({Ghrit:"घृत", Tail:"तेल", Kalpa:"कल्प", "Herbal Cosmetics":"हर्बल सौंदर्यप्रसाधने"} as Record<string, string>)[c.title] || c.title) : c.title}</h3>
              <span className="text-sm text-muted-foreground">{language === "mr" ? (({"Medicated Ghee":"औषधी तूप", "Medicated Oils":"औषधी तेल", "Herbal Preparations":"हर्बल औषधी कल्प", "Handmade by Dr. Tanvi Randive":"डॉ. तन्वी रांदिवे यांनी हस्तनिर्मित"} as Record<string, string>)[c.subtitle] || c.subtitle) : c.subtitle}</span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {c.items.map((p) => <ProductCard key={p.name} p={p} onEnquire={openProductEnquiry} language={language} />)}
            </div>
          </div>
        ))}
        <p className="mt-8 text-xs text-muted-foreground">Uses listed are traditional Ayurvedic descriptions for information only. Please consult our doctors before use.</p>
      </section>

      {/* Branches */}
      <section id="branches" className="bg-secondary/50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-serif text-4xl font-semibold text-primary">{t("Our Branches & Appointments", "आमच्या शाखा आणि अपॉइंटमेंट")}</h2>
          <p className="mt-1 text-muted-foreground">{t("Visit our centres for personalized care", "वैयक्तिक उपचारांसाठी आमच्या केंद्रांना भेट द्या")}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {branches.map((b, i) => (
              <div key={b.name} className="flex gap-4 rounded-lg border border-border bg-card p-3 shadow-sm">
                <img src={i % 2 ? therapyRoom : clinic} alt={`${b.name} branch`} loading="lazy" width={944} height={704} className="h-28 w-36 shrink-0 rounded-md object-cover" />
                <div className="min-w-0">
                  <h3 className="font-serif text-xl font-semibold text-primary">{b.name}</h3>
                  <p className="text-sm text-muted-foreground">{b.hours}</p>
                  <p className="text-xs text-muted-foreground">{b.address}</p>
                  <div className="mt-2 flex flex-wrap gap-4 text-sm font-semibold">
                    <a href={TEL} className="inline-flex items-center gap-1 text-accent"><Phone className="h-4 w-4" />Call</a>
                    <button type="button" onClick={() => { setAppointmentBranch(b.name); setEnquiryType("appointment"); }} className="inline-flex items-center gap-1 text-accent"><CalendarDays className="h-4 w-4" />{t("Book appointment", "अपॉइंटमेंट")}</button>
                    <a href={b.map} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-primary"><MapPin className="h-4 w-4" />{t("View Map", "नकाशा पाहा")}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section id="doctors" className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="font-serif text-4xl font-semibold text-primary">Our Doctors</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[
            { n: "Dr. Nikhil Ashok Randive", i: "NR", q: "M.D. Ayurveda · Government of India Certified · Trained Yoga Teacher" },
            { n: "Dr. Tanvi Nikhil Randive", i: "TR", q: "B.A.M.S. · Diploma in Ayurvedic Pharmaceutical · Government of India Certified · Trained Yoga Teacher · Makes natural herbal cosmetics" },
          ].map((d) => (
            <div key={d.n} className="flex items-center gap-5 rounded-lg border border-border bg-card p-6">
              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-deep font-serif text-3xl text-gold">{d.i}</div>
              <div>
                <h3 className="font-serif text-2xl font-semibold text-primary">{d.n}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{d.q}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-deep text-deep-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-3">
          <div className="flex items-start gap-3">
            <Logo light />
            <div>
              <div className="font-serif text-2xl font-semibold">Shri Vishwarekha</div>
              <div className="text-sm text-deep-foreground/70">Ayurveda & Panchakarma Centre · Since 2014</div>
            </div>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-gold">{t("Quick Links", "महत्त्वाचे दुवे")}</h4>
            <ul className="space-y-1.5 text-sm">{nav.map(([l, h]) => <li key={h}><a href={h} className="hover:text-gold">{l}</a></li>)}</ul>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-gold">{t("Contact Us", "संपर्क साधा")}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href={TEL} className="inline-flex items-center gap-2 hover:text-gold"><Phone className="h-4 w-4" />+91 {PHONE}</a></li>
              <li><a href={waLink()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-gold"><MessageCircle className="h-4 w-4" />WhatsApp: +91 {PHONE}</a></li>
              <li className="inline-flex items-center gap-2"><Mail className="h-4 w-4" />Email to be updated</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" />Kolhapur · Pune · Mumbai</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gold/20 py-4 text-center text-xs text-deep-foreground/60">© {new Date().getFullYear()} Shri Vishwarekha Ayurveda & Panchakarma Centre</div>
      </footer>

      {enquiryType && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4" onMouseDown={(e) => { if (e.target === e.currentTarget) setEnquiryType(null); }}>
          <div role="dialog" aria-modal="true" aria-labelledby="enquiry-title" className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-xl border border-border bg-background p-6 shadow-2xl">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <h2 id="enquiry-title" className="font-serif text-2xl font-semibold text-primary">{enquiryType === "appointment" ? t("Book an Appointment", "अपॉइंटमेंट बुक करा") : t("Product Enquiry", "उत्पादनाची चौकशी")}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{t("Your details will open in WhatsApp so our team can confirm with you.", "तुमची माहिती WhatsApp वर उघडेल; आमची टीम तुमच्याशी संपर्क साधून पुष्टी करेल.")}</p>
              </div>
              <button type="button" onClick={() => setEnquiryType(null)} aria-label="Close" className="rounded-md p-1 hover:bg-secondary"><X className="h-5 w-5" /></button>
            </div>
            {enquiryType === "appointment" ? (
              <form onSubmit={submitAppointment} className="space-y-4">
                <label className="block text-sm font-medium">{t("Full name", "पूर्ण नाव")}<input required value={appointmentName} onChange={(e) => setAppointmentName(e.target.value)} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2.5" placeholder={t("Enter your name", "तुमचे नाव लिहा")} /></label>
                <label className="block text-sm font-medium">{t("Preferred branch", "पसंतीची शाखा")}<select value={appointmentBranch} onChange={(e) => setAppointmentBranch(e.target.value)} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2.5">{branches.map((b) => <option key={b.name} value={b.name}>{b.name}</option>)}</select></label>
                <label className="block text-sm font-medium">{t("Appointment type", "अपॉइंटमेंटचा प्रकार")}<select value={appointmentKind} onChange={(e) => setAppointmentKind(e.target.value)} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2.5"><option>Consultation</option><option>Panchakarma / Treatment</option><option>Follow-up</option><option>Online consultation</option></select></label>
                <label className="block text-sm font-medium">{t("Preferred date (optional)", "पसंतीची तारीख (ऐच्छिक)")}<input type="date" value={appointmentDate} onChange={(e) => setAppointmentDate(e.target.value)} min={new Date().toISOString().slice(0,10)} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2.5" /></label>
                <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"><MessageCircle className="h-4 w-4" />{t("Continue on WhatsApp", "WhatsApp वर पुढे जा")}</button>
              </form>
            ) : (
              <form onSubmit={submitProductEnquiry} className="space-y-4">
                <label className="block text-sm font-medium">{t("Full name", "पूर्ण नाव")}<input required value={enquiryName} onChange={(e) => setEnquiryName(e.target.value)} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2.5" placeholder={t("Enter your name", "तुमचे नाव लिहा")} /></label>
                <label className="block text-sm font-medium">{t("Product", "उत्पादन")}<input value={selectedProduct} onChange={(e) => setSelectedProduct(e.target.value)} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2.5" placeholder={t("Product name (if known)", "उत्पादनाचे नाव (माहित असल्यास)")} /></label>
                <label className="block text-sm font-medium">{t("Your requirement", "तुमची गरज")}<textarea required value={enquiryRequirement} onChange={(e) => setEnquiryRequirement(e.target.value)} rows={3} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2.5" placeholder={t("Tell us what you would like to enquire about", "तुम्हाला कोणती माहिती हवी आहे ते लिहा")} /></label>
                <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"><MessageCircle className="h-4 w-4" />{t("Continue on WhatsApp", "WhatsApp वर पुढे जा")}</button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function ProductCard({ p, onEnquire, language }: { p: Product; onEnquire: (name: string) => void; language: "en" | "mr" }) {
  const [show, setShow] = useState(false);
  return (
    <div
      onClick={() => setShow((s) => !s)}
      className="group relative flex min-h-40 cursor-pointer flex-col justify-between overflow-hidden rounded-lg border border-border bg-card p-5 shadow-sm transition hover:shadow-md"
    >
      <div>
        <Leaf className="h-6 w-6 text-accent" strokeWidth={1.4} />
        <h4 className="mt-3 font-serif text-xl font-semibold text-primary">{p.name}</h4>
      </div>
      <span className="text-xs text-muted-foreground">{language === "mr" ? "उपयोग पाहण्यासाठी माउस ठेवा / टॅप करा" : "Hover / tap for uses"}</span>
      <div className={`absolute inset-0 flex flex-col justify-between bg-deep p-5 text-deep-foreground transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 ${show ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}>
        <div>
          <h4 className="font-serif text-lg font-semibold text-gold">{p.name}</h4>
          <p className="mt-1 text-sm leading-snug">{language === "mr" ? (({
            "A gentle daily cleanser traditionally valued for a refreshing, soothing feel. Individual skin response may vary.": "दररोजच्या सौम्य स्वच्छतेसाठी वापरला जाणारा साबण. त्वचेची प्रतिक्रिया व्यक्तीनुसार बदलू शकते.",
            "A cleansing soap designed to help lift everyday dirt and excess surface oil.": "दैनंदिन मळ आणि त्वचेवरील अतिरिक्त तेल स्वच्छ करण्यासाठी.",
            "Inspired by traditional ubtan, for cleansing and a fresh, polished skin feel.": "पारंपरिक उटण्यापासून प्रेरित; त्वचा स्वच्छ आणि तजेलदार वाटण्यासाठी.",
            "Inspired by Multani mitti, commonly used in skincare routines for oily-feeling skin.": "मुलतानी मातीपासून प्रेरित; तेलकट वाटणाऱ्या त्वचेच्या निगेसाठी.",
            "A refreshing toner for a light, fresh-feeling skincare routine.": "त्वचेला ताजेतवाने वाटण्यासाठी वापरला जाणारा टोनर.",
            "A refreshing toner designed to leave skin feeling comfortable and hydrated.": "त्वचेला ताजेतवाने आणि ओलावा टिकल्यासारखे वाटण्यासाठी टोनर.",
            "A traditional herbal skincare blend used as part of a cleansing and grooming routine.": "त्वचेच्या स्वच्छतेसाठी वापरले जाणारे पारंपरिक हर्बल उटणे.",
            "A lightweight gel for a refreshing, soothing-feeling skincare routine.": "त्वचेच्या निगेसाठी हलके, ताजेतवाने वाटणारे जेल.",
            "A lightweight gel traditionally used to soothe and moisturize the skin.": "त्वचेला शांत आणि ओलसर ठेवण्यासाठी पारंपरिकरीत्या वापरले जाणारे हलके जेल.",
            "Natural herbal soap with rose — gentle daily cleansing with a soft fragrance.": "गुलाबाच्या सौम्य सुगंधासह दैनंदिन स्वच्छतेसाठी हर्बल साबण.",
            "Natural herbal soap with cucumber — cooling, refreshing daily cleansing.": "काकडीसह ताजेतवाने वाटणारा दैनंदिन स्वच्छतेचा हर्बल साबण."
          } as Record<string, string>)[p.uses] || p.uses) : p.uses}</p>
        </div>
        <button
          type="button" onClick={(e) => { e.stopPropagation(); onEnquire(p.name); }}
          className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-md bg-gold px-3 py-1.5 text-xs font-semibold text-deep hover:opacity-90"
        >
          <MessageCircle className="h-3.5 w-3.5" /> {language === "mr" ? "चौकशी करा" : "Enquire Now"}
        </button>
      </div>
    </div>
  );
}

function Logo({ light }: { light?: boolean }) {
  return (
    <div className={`flex h-11 w-11 items-center justify-center rounded-full border-2 ${light ? "border-gold text-gold" : "border-primary text-accent"}`}>
      <Leaf className="h-5 w-5" />
    </div>
  );
}
