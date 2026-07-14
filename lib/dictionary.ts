import type { Lang } from "./site";

/**
 * Client-side AZ/EN dictionary (no next-intl).
 * Azerbaijani is the default and primary language; English is a courtesy toggle.
 */
export type Dict = (typeof dictionary)["az"];

export const dictionary = {
  az: {
    langLabel: "AZ",
    nav: {
      about: "Haqqında",
      practice: "Sahələr",
      results: "Nəticələr",
      contact: "Əlaqə",
      menu: "Menyu",
      close: "Bağla",
    },
    hero: {
      eyebrow: "PRESEDENT VƏKİL BÜROSU",
      edge: "VƏKİL — BAKI",
      positioning:
        "Mürəkkəb hüquqi məsələlərdə aydın strategiya. 12+ il təcrübə — məhkəmə çəkişmələrindən korporativ müqavilələrə qədər.",
      cta: "Konsultasiya üçün yazın",
    },
    about: {
      index: "01",
      title: "Haqqında",
      pull: "Hüquq mücərrəd normalar deyil — hər işin arxasında konkret insan və onun taleyi dayanır.",
      p1: "Rəşad Bayramov Azərbaycan Vəkillər Kollegiyasının üzvüdür. PRESEDENT Vəkil Bürosunun vəkili kimi 12 ildir fiziki və hüquqi şəxsləri həm məhkəmələrdə, həm də danışıqlar masasında təmsil edir.",
      p2: "Praktikası həm məhkəmə çəkişmələrini, həm də məhkəmədənkənar həll yollarını əhatə edir. Yanaşması sadədir: işin faktlarını dəqiq öyrənmək, riskləri açıq izah etmək və müştəri üçün ən qısa, ən az itki ilə nəticəyə aparan yolu seçmək.",
    },
    practice: {
      index: "02",
      title: "Fəaliyyət sahələri",
      note: "Hər sahə üzrə ilkin qiymətləndirmə pulsuzdur.",
      areas: [
        {
          title: "Mülki hüquq",
          body: "Əmlak, müqavilə və öhdəlik mübahisələrində müştərinin maraqlarını qoruyuram. Məqsəd — pozulmuş hüququn bərpası və real, icra oluna bilən nəticə.",
          cases: [
            "Müqavilədən doğan mübahisələr",
            "Ziyanın ödənilməsi iddiaları",
            "Əmlak və mülkiyyət hüququ",
          ],
        },
        {
          title: "Cinayət işləri üzrə müdafiə",
          body: "İstintaq və məhkəmə mərhələsində şəxsin hüquqlarının tam müdafiəsi. İlk dindirmədən hökmə qədər hər addımda iştirak edirəm.",
          cases: [
            "İstintaqda müdafiə",
            "Vəkil–müttəhim görüşləri",
            "Apellyasiya və kassasiya şikayətləri",
          ],
        },
        {
          title: "Korporativ və kommersiya hüququ",
          body: "Şirkətlərin gündəlik fəaliyyəti və mübahisələri üçün hüquqi dayaq. Müqavilələrdən korporativ münaqişələrə qədər.",
          cases: [
            "Kommersiya müqavilələri",
            "Təsisçi və pay mübahisələri",
            "Biznesin hüquqi auditi",
          ],
        },
        {
          title: "Ailə və vərəsəlik",
          body: "Boşanma, uşaqla bağlı və vərəsəlik məsələlərində həssas, lakin qətiyyətli təmsilçilik. Mümkün olduqda münaqişəni məhkəməyəqədər həll edirəm.",
          cases: [
            "Boşanma və nikah müqavilələri",
            "Uşağın yaşayış yeri və aliment",
            "Vərəsəlik və miras bölgüsü",
          ],
        },
        {
          title: "Əmək mübahisələri",
          body: "İşçi və işəgötürən arasındakı münaqişələrdə hüquqların bərpası. Qanunsuz xitamdan əmək haqqı borclarına qədər.",
          cases: [
            "Qanunsuz işdən çıxarılma",
            "Əmək haqqı və kompensasiyalar",
            "Əmək müqaviləsi mübahisələri",
          ],
        },
        {
          title: "Daşınmaz əmlak",
          body: "Alqı-satqı, icarə və qeydiyyat məsələlərində əməliyyatın hüquqi təhlükəsizliyi. Sənədlərin yoxlanmasından mübahisələrin həllinə qədər.",
          cases: [
            "Alqı-satqı müqavilələri",
            "Mülkiyyətin dövlət qeydiyyatı",
            "Sərhəd və mülkiyyət mübahisələri",
          ],
        },
      ],
    },
    results: {
      index: "03",
      title: "Təcrübə / Nəticələr",
      stats: [
        { n: "500+", label: "iş" },
        { n: "12+", label: "il" },
        { n: "92%", label: "uğur göstəricisi*" },
        { n: "3", label: "dil" },
      ],
      footnote: "*son 5 ilin məhkəmə statistikası",
      casesLabel: "Seçilmiş işlər",
      cases: [
        "Korporativ mübahisə — 1.2 mln AZN dəyərində iddiadan müştərinin tam müdafiəsi.",
        "Ailə işi — vərəsəlik mübahisəsinin məhkəməyəqədər mərhələdə həlli.",
        "Əmək mübahisəsi — qanunsuz xitamın ləğvi və tam kompensasiya.",
      ],
    },
    testimonials: {
      index: "04",
      title: "Rəylər",
      items: [
        {
          quote:
            "Vəziyyət ümidsiz görünürdü; Rəşad bəy işi soyuqqanlı təhlil etdi və nəticəni bizim xeyrimizə çevirdi.",
          attr: "M.Ə., sahibkar — Bakı",
        },
        {
          quote:
            "Danışıqları elə apardı ki, məhkəməyə ehtiyac qalmadı. Peşəkarlıq və dürüstlük.",
          attr: "L.H., şirkət rəhbəri — Bakı",
        },
        {
          quote:
            "Hər mərhələdə nə baş verdiyini aydın izah etdi. Özümü təhlükəsiz hiss etdim.",
          attr: "T.Q., fərdi müştəri — Sumqayıt",
        },
      ],
    },
    contact: {
      index: "05",
      title: "Əlaqə",
      heading: "Danışaq.",
      lead: "İşinizi qısaca danışın — ilk qiymətləndirmə üçün geri dönüş edəcəyəm.",
      phoneLabel: "Telefon",
      whatsappLabel: "WhatsApp",
      whatsappCta: "WhatsApp-da yazın",
      addressLabel: "Ünvan",
      hoursLabel: "İş saatları",
      form: {
        name: "Ad",
        phone: "Telefon",
        message: "Mesajınız",
        submit: "Mesaj göndər",
        privacy: "Konfidensiallıq təmin olunur.",
      },
    },
    footer: {
      tagline: "Rəşad Bayramov — Vəkil.",
      privacy: "Gizlilik",
      rights: "Bütün hüquqlar qorunur.",
    },
    privacy: {
      title: "Gizlilik",
      updated: "Son yenilənmə: 2025",
      back: "Ana səhifəyə qayıt",
      body: [
        "Bu sayt vasitəsilə göndərdiyiniz məlumatlar (ad, telefon, mesaj) yalnız sorğunuza cavab vermək və hüquqi məsləhət təqdim etmək məqsədilə istifadə olunur.",
        "Vəkil–müştəri münasibətlərində məxfilik qanunla qorunur. Verdiyiniz məlumat üçüncü tərəflərlə paylaşılmır və marketinq məqsədilə istifadə edilmir.",
        "Sayt formu məlumatı serverdə saxlamır — mesaj birbaşa WhatsApp vasitəsilə göndərilir. Məlumatınızın silinməsini istəsəniz, yuxarıdakı əlaqə vasitələri ilə müraciət edə bilərsiniz.",
      ],
    },
  },

  en: {
    langLabel: "EN",
    nav: {
      about: "About",
      practice: "Practice",
      results: "Results",
      contact: "Contact",
      menu: "Menu",
      close: "Close",
    },
    hero: {
      eyebrow: "PRESEDENT LAW BUREAU",
      edge: "ATTORNEY — BAKU",
      positioning:
        "Clear strategy for complex legal matters. 12+ years of practice — from courtroom litigation to corporate contracts.",
      cta: "Request a consultation",
    },
    about: {
      index: "01",
      title: "About",
      pull: "Law is not abstract rules — behind every case stands a real person and what is at stake for them.",
      p1: "Rəşad Bayramov is a member of the Azerbaijan Bar Association. As an attorney at PRESEDENT Law Bureau, he has represented individuals and companies both in court and at the negotiating table for 12 years.",
      p2: "His practice spans litigation as well as out-of-court resolutions. The approach is simple: understand the facts precisely, explain the risks plainly, and choose the shortest path to a result with the least possible loss for the client.",
    },
    practice: {
      index: "02",
      title: "Practice areas",
      note: "An initial assessment for each area is free of charge.",
      areas: [
        {
          title: "Civil law",
          body: "Protecting client interests in property, contract and obligation disputes. The goal is to restore the violated right and reach a real, enforceable outcome.",
          cases: [
            "Contract disputes",
            "Damages claims",
            "Property and ownership rights",
          ],
        },
        {
          title: "Criminal defence",
          body: "Full protection of a person's rights during investigation and trial. I take part at every step, from the first questioning to the verdict.",
          cases: [
            "Defence during investigation",
            "Attorney–defendant meetings",
            "Appeal and cassation complaints",
          ],
        },
        {
          title: "Corporate & commercial law",
          body: "Legal support for the day-to-day operations and disputes of companies — from contracts to corporate conflicts.",
          cases: [
            "Commercial contracts",
            "Founder and share disputes",
            "Legal audit of the business",
          ],
        },
        {
          title: "Family & inheritance",
          body: "Sensitive but resolute representation in divorce, child-related and inheritance matters. Where possible, I resolve the conflict before it reaches court.",
          cases: [
            "Divorce and prenuptial agreements",
            "Child residence and alimony",
            "Inheritance and estate division",
          ],
        },
        {
          title: "Employment disputes",
          body: "Restoring rights in conflicts between employee and employer — from unlawful dismissal to unpaid wages.",
          cases: [
            "Unlawful dismissal",
            "Wages and compensation",
            "Employment contract disputes",
          ],
        },
        {
          title: "Real estate",
          body: "Legal safety of the transaction in purchase, lease and registration matters — from document review to dispute resolution.",
          cases: [
            "Purchase and sale agreements",
            "State registration of ownership",
            "Boundary and ownership disputes",
          ],
        },
      ],
    },
    results: {
      index: "03",
      title: "Experience / Results",
      stats: [
        { n: "500+", label: "cases" },
        { n: "12+", label: "years" },
        { n: "92%", label: "success rate*" },
        { n: "3", label: "languages" },
      ],
      footnote: "*court statistics over the last 5 years",
      casesLabel: "Selected matters",
      cases: [
        "Corporate dispute — full defence of the client against a claim worth 1.2M AZN.",
        "Family case — inheritance dispute resolved at the pre-trial stage.",
        "Employment dispute — unlawful dismissal reversed with full compensation.",
      ],
    },
    testimonials: {
      index: "04",
      title: "Testimonials",
      items: [
        {
          quote:
            "The situation looked hopeless; Mr Bayramov analysed it calmly and turned the outcome in our favour.",
          attr: "M.Ə., entrepreneur — Baku",
        },
        {
          quote:
            "He handled the negotiations so well that court was never needed. Professional and honest.",
          attr: "L.H., company director — Baku",
        },
        {
          quote:
            "He explained clearly what was happening at every stage. I felt safe.",
          attr: "T.Q., private client — Sumgait",
        },
      ],
    },
    contact: {
      index: "05",
      title: "Contact",
      heading: "Let's talk.",
      lead: "Tell me briefly about your matter — I'll get back to you with a first assessment.",
      phoneLabel: "Phone",
      whatsappLabel: "WhatsApp",
      whatsappCta: "Message on WhatsApp",
      addressLabel: "Address",
      hoursLabel: "Working hours",
      form: {
        name: "Name",
        phone: "Phone",
        message: "Your message",
        submit: "Send message",
        privacy: "Confidentiality is guaranteed.",
      },
    },
    footer: {
      tagline: "Rəşad Bayramov — Attorney.",
      privacy: "Privacy",
      rights: "All rights reserved.",
    },
    privacy: {
      title: "Privacy",
      updated: "Last updated: 2025",
      back: "Back to home",
      body: [
        "The information you submit through this site (name, phone, message) is used solely to respond to your request and provide legal advice.",
        "Confidentiality in the attorney–client relationship is protected by law. Your information is not shared with third parties and is not used for marketing.",
        "The site form does not store data on a server — the message is sent directly via WhatsApp. If you want your data deleted, you can contact me through the details above.",
      ],
    },
  },
} as const;

export function getDict(lang: Lang): Dict {
  return dictionary[lang] as Dict;
}
