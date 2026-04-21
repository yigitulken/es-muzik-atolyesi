export type WorkCategory = "piyano" | "yayli" | "gitar"

export interface Work {
  id: number
  category: WorkCategory
  image?: string
  title: string
  description: string
  details: string
}

export const works: Work[] = [
  {
    id: 1,
    category: "piyano",
    image: "/works/akustik-piyano-akort.png",
    title: "Akustik Piyano Akort - Genel Bakım",
    description:
      "Akort dengesizliği ve genel mekanik kontrol sonrası daha dengeli ve güvenilir kullanım sağlandı.",
    details:
      "Tuşe temizliği, mekanik kontrol, akort ve ton dengeleme işlemleri uygulandı.",
  },
  {
    id: 2,
    category: "piyano",
    image: "/works/piyano-mekanik-onarim.png",
    title: "Piyano Mekanik Onarım",
    description:
      "Bazı tuşlarda yaşanan sertlik ve tepki gecikmesi sorunu giderildi.",
    details:
      "Çekiç mekanizması kontrolü, yay ayarları ve yağlama işlemleri yapıldı.",
  },
  {
    id: 3,
    category: "yayli",
    image: "/works/keman-kopru-ayar.png",
    title: "Yaylı Köprü ve Ayar",
    description:
      "Köprü ve genel ayar müdahalesiyle çalım dengesi iyileştirildi.",
    details:
      "Köprü konumu düzeltildi, tel yükseklikleri ayarlandı, burgular kontrol edildi.",
  },
  {
    id: 4,
    category: "yayli",
    image: "/works/arse-kil-degisimi.png",
    title: "Arşe Kıl Değişimi",
    description:
      "Yıpranmış arşe kılları yenilenerek temiz ton ve dengeli çalım yeniden kazandırıldı.",
    details:
      "Eski kıllar sökülüp kaliteli at kılı takımı ile değiştirildi, gerginlik ve reçine tutunumu için son kondisyonlama yapıldı.",
  },
  {
    id: 5,
    category: "yayli",
    image: "/works/yayli-kirik-tamiri.png",
    title: "Yaylı Kırık Tamiri",
    description:
      "Gövdede oluşan çatlak ve kırık onarılarak yapısal bütünlük ile ton karakteri yeniden kazandırıldı.",
    details:
      "Kırık bölge hizalanıp özel yapıştırıcıyla birleştirildi, iç destek uygulandı ve yüzey rötuşunun ardından akort stabilitesi kontrol edildi.",
  },
  {
    id: 6,
    category: "gitar",
    image: "/works/gitar-bakim-onarim.jpeg",
    title: "Gitar & Elektro Gitar Bakım & Onarımı",
    description:
      "Sap ayarı, fret kontrolü ve entonasyon işlemleri sonrası daha temiz ve rahat çalım elde edildi.",
    details:
      "Truss rod ayarı, aksiyon düzenlemesi, entonasyon ve pickup yükseklik ayarları yapıldı.",
  },
  {
    id: 7,
    category: "gitar",
    image: "/works/gitar-kirik-tamiri.png",
    title: "Gitar Kırık Tamiri",
    description:
      "Sap ya da gövdede oluşan kırık profesyonel yöntemle onarılarak çalım güvenliği ve ton bütünlüğü yeniden sağlandı.",
    details:
      "Kırık bölge temizlenip uygun tutkalla hizalandı, sıkıştırma ve kuruma sonrası yüzey rötuşu yapılarak dayanıklılık kontrol edildi.",
  },
  {
    id: 8,
    category: "gitar",
    image: "/works/gitar-kopru-tamiri.jpeg",
    title: "Gitar Köprü Tamiri",
    description:
      "Yerinden kalkmış ya da hasar almış köprü yeniden sabitlenerek tel gerginliği ve tonun doğal aktarımı sağlandı.",
    details:
      "Köprü sökülüp yapışma yüzeyi temizlendi, uygun tutkalla yeniden yapıştırıldı; hizalama ve entonasyon ayarı kontrol edildi.",
  },
  {
    id: 9,
    category: "piyano",
    image: "/works/piyano-tel-sarim-degisim.jpeg",
    title: "Piyano Tel Sarım & Değişim",
    description:
      "Kopmuş ve yıpranmış teller yenisiyle değiştirilerek net, dengeli ton ile akort stabilitesi geri kazandırıldı.",
    details:
      "Uygun çap ve sarımda yeni tel hazırlanıp takıldı, kontrollü germe ve ton dengelemesinin ardından nihai akort yapıldı.",
  },
]

export const categoryLabels: Record<WorkCategory, string> = {
  piyano: "Piyano",
  yayli: "Yaylı",
  gitar: "Gitar",
}
