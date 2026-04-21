export const SITE_URL = "https://esmuzikatolye.com"

export const BUSINESS = {
  name: "ES Müzik Atölyesi",
  legalName: "ES Müzik Atölyesi",
  phone: "+905058900477",
  phoneDisplay: "+90 505 890 04 77",
  email: "info@esmuzikatolye.com",
  streetAddress: "Kılıçreis Mah. 320/1 Sk. No:32",
  addressLocality: "Konak",
  addressRegion: "İzmir",
  postalCode: "35280",
  addressCountry: "TR",
  latitude: 38.405548,
  longitude: 27.11626,
  founder: "Sonat Tufan",
  foundingDate: "2026",
  instagram: "https://www.instagram.com/esmuzikatolye/",
  logo: `${SITE_URL}/atolye_logo.png`,
  openingHours: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "10:00",
      closes: "19:00",
    },
  ],
} as const

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: BUSINESS.name,
    url: SITE_URL,
    logo: BUSINESS.logo,
    sameAs: [BUSINESS.instagram],
  }
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: BUSINESS.name,
    inLanguage: "tr-TR",
    publisher: { "@id": `${SITE_URL}/#organization` },
  }
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MusicStore"],
    "@id": `${SITE_URL}/#localbusiness`,
    name: BUSINESS.name,
    description:
      "İzmir Konak'ta piyano akortu, keman-viyola-viyolonsel onarımı, arşe kıl değişimi ve gitar bakım hizmetleri.",
    url: SITE_URL,
    logo: BUSINESS.logo,
    image: BUSINESS.logo,
    telephone: BUSINESS.phone,
    priceRange: "₺₺",
    foundingDate: BUSINESS.foundingDate,
    founder: {
      "@type": "Person",
      name: BUSINESS.founder,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.streetAddress,
      addressLocality: BUSINESS.addressLocality,
      addressRegion: BUSINESS.addressRegion,
      postalCode: BUSINESS.postalCode,
      addressCountry: BUSINESS.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.latitude,
      longitude: BUSINESS.longitude,
    },
    openingHoursSpecification: BUSINESS.openingHours,
    areaServed: [
      { "@type": "City", name: "İzmir" },
      { "@type": "AdministrativeArea", name: "Konak" },
      { "@type": "AdministrativeArea", name: "Karşıyaka" },
      { "@type": "AdministrativeArea", name: "Bornova" },
    ],
    sameAs: [BUSINESS.instagram],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Enstrüman Bakım ve Onarım Hizmetleri",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Piyano Akort ve Mekanik Tamir",
            serviceType: "Piyano bakım ve onarım",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Yaylı Çalgı Onarımı",
            serviceType: "Keman, viyola, viyolonsel bakım ve onarım",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Arşe Kıl Değişimi",
            serviceType: "Arşe bakım",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Gitar Bakım ve Ayar",
            serviceType: "Akustik ve elektro gitar setup",
          },
        },
      ],
    },
  }
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/atolye#sonat-tufan`,
    name: "Sonat Tufan",
    jobTitle: "Lüthiyer · Enstrüman Bakım ve Onarım Ustası",
    description:
      "1996'dan bu yana müzik eğitimi, 2001'den itibaren enstrüman bakım-onarım çalışmalarını sürdüren lüthiyer.",
    worksFor: { "@id": `${SITE_URL}/#organization` },
    url: `${SITE_URL}/atolye`,
    knowsAbout: [
      "Piyano akort",
      "Piyano mekanik",
      "Yaylı enstrüman onarımı",
      "Arşe kıl değişimi",
      "Gitar setup",
      "Elektro gitar onarımı",
    ],
  }
}

interface ServiceItem {
  name: string
  description: string
  type: string
  slug: string
}

export function servicesSchema(services: ServiceItem[]) {
  return services.map((s) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    serviceType: s.type,
    description: s.description,
    url: `${SITE_URL}/hizmetler#${s.slug}`,
    provider: { "@id": `${SITE_URL}/#localbusiness` },
    areaServed: { "@type": "City", name: "İzmir" },
    audience: {
      "@type": "Audience",
      audienceType: "Müzisyenler, konservatuvar öğrencileri, müzik eğitimcileri",
    },
  }))
}

interface WorkItem {
  title: string
  description: string
  image?: string
  category: string
}

export function itemListSchema(items: WorkItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "ES Müzik Atölyesi — Örnek İşler",
    itemListElement: items.map((w, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "CreativeWork",
        name: w.title,
        description: w.description,
        ...(w.image ? { image: `${SITE_URL}${w.image}` } : {}),
        about: w.category,
        creator: { "@id": `${SITE_URL}/#organization` },
      },
    })),
  }
}

interface Crumb {
  name: string
  path: string
}

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.path}`,
    })),
  }
}
