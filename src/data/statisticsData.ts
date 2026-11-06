import { MedicalStatistic } from '../types/anatomy';

export const STATISTICS_DATA: MedicalStatistic[] = [
  {
    id: 'top_causes_of_death',
    titleUz: "Dunyoda o'limga sabab bo'luvchi asosiy kasalliklar",
    category: 'olim_sabablari',
    categoryUz: "Yetakchi o'lim sabablari",
    metricType: 'olim',
    metricTypeUz: "Yillik mutlaq o'limlar soni",
    mainValue: '55.4 million',
    unitUz: "yillik umumiy o'limlar (dunyo)",
    year: 2023,
    source: "Jahon Sog'liqni Saqlash Tashkiloti (JSST / WHO) Global Health Estimates",
    coverage: "Global (194 a'zo davlatlar bo'yicha)",
    descriptionUz: "Yuqumsiz surunkali kasalliklar (NCDs) bugungi kunda dunyodagi barcha o'lim holatlarining 74 foizini tashkil etadi. Ular orasida yurak-qon tomir tizimi patologiyalari hamon mutlaq yetakchilik qilmoqda.",
    chartData: [
      { label: "Yurak ishemik kasalligi", value: 9.1, note: "9.1 mln o'lim/yil (barcha o'limlarning 16.4%)" },
      { label: "Bosh miya insulti", value: 6.6, note: "6.6 mln o'lim/yil (11.9%)" },
      { label: "KO'AL (Surunkali o'pka kasalligi)", value: 3.3, note: "3.3 mln o'lim/yil (6.0%)" },
      { label: "Quyi nafas yo'llari infeksiyalari", value: 2.5, note: "2.5 mln o'lim/yil (4.5%)" },
      { label: "O'pka va bronxlar saratoni", value: 1.8, note: "1.8 mln o'lim/yil (3.2%)" },
      { label: "Qandli diabet", value: 2.0, note: "2.0 mln o'lim/yil (3.6%)" },
      { label: "Altsgeymer va demensiyalar", value: 1.8, note: "1.8 mln o'lim/yil (3.2%)" },
      { label: "Buyrak yetishmovchiligi", value: 1.4, note: "1.4 mln o'lim/yil (2.5%)" }
    ],
    demographics: [
      { group: "0 - 29 yosh", male: 8.5, female: 6.2 },
      { group: "30 - 49 yosh", male: 14.2, female: 9.8 },
      { group: "50 - 69 yosh", male: 36.8, female: 28.4 },
      { group: "70+ yosh", male: 40.5, female: 55.6 }
    ]
  },
  {
    id: 'global_cvd_burden',
    titleUz: "Yurak-qon tomir kasalliklarining global tarqalishi va yuki",
    category: 'global_yuk',
    categoryUz: 'Global kasalliklar yuki',
    metricType: 'tarqalganlik',
    metricTypeUz: 'Bemorlar soni va kasallik yuki (Prevalence)',
    mainValue: '620 million',
    unitUz: "inson yurak-qon tomir xastaligi bilan yashamoqda",
    year: 2024,
    source: "Institute for Health Metrics and Evaluation (IHME) Global Burden of Disease",
    coverage: "Global (204 mamlakat va hududlar)",
    descriptionUz: "Yurak-qon tomir kasalliklari butun sayyora bo'ylab eng ko'p nogironlik keltirib chiqaruvchi (DALY - yo'qotilgan sog'lom hayot yillari) omildir. Ayniqsa past va o'rta daromadli mamlakatlarda bu ko'rsatkich eng yuqori darajada.",
    chartData: [
      { label: "Arterial gipertoniya", value: 1280, note: "1.28 milliard kishi" },
      { label: "Yurak ishemik xastaligi", value: 126, note: "126 million kishi" },
      { label: "Insult asoratlari bilan yashovchilar", value: 101, note: "101 million kishi" },
      { label: "Yurak yetishmovchiligi", value: 64, note: "64 million kishi" },
      { label: "Yurak qorinchalari fibrillyatsiyasi", value: 38, note: "38 million kishi" }
    ]
  },
  {
    id: 'who_regions_comparison',
    titleUz: "JSST mintaqalari bo'yicha kutilayotgan umr uzunligi (yillarda)",
    category: 'hududiy',
    categoryUz: 'Mintaqaviy taqqoslash',
    metricType: 'kasallanish',
    metricTypeUz: "Tug'ilishda kutilayotgan umr ko'rish davomiyligi",
    mainValue: '73.4 yil',
    unitUz: "dunyo bo'yicha o'rtacha umr davomiyligi",
    year: 2023,
    source: "JSST (WHO) Jahon Sog'liqni Saqlash Statistikasi (World Health Statistics)",
    coverage: "6 ta xalqaro JSST mintaqasi",
    descriptionUz: "Iqtisodiy rivojlanish darajasi, tibbiy xizmatlarning ommabopligi, toza suv va sog'lom ovqatlanish imkoniyatlari sababli mintaqalar o'rtasida katta tafovutlar mavjud.",
    chartData: [
      { label: "Yevropa mintaqasi (EUR)", value: 78.2, note: "Eng yuqori profilaktik xizmat darajasi" },
      { label: "Amerika qit'asi (AMR)", value: 77.4, note: "Zamonaviy shifoxonalar, lekin yuqori semizlik" },
      { label: "G'arbiy Tinch okeani (WPR)", value: 77.1, note: "Yaponiya, Janubiy Koreya, Avstraliya yetakchi" },
      { label: "Global o'rtacha ko'rsatkich", value: 73.4, note: "Butun sayyora o'rtacha ko'rsatkichi" },
      { label: "Janubi-Sharqiy Osiyo (SEAR)", value: 71.4, note: "Yuqumli kasalliklar kamaymoqda" },
      { label: "Sharqiy O'rta Yer dengizi (EMR)", value: 69.7, note: "Mojarolar va xizmat tanqisligi" },
      { label: "Afrika mintaqasi (AFR)", value: 64.5, note: "Onlar va bolalar o'limi muammosi" }
    ]
  },
  {
    id: 'uzbekistan_health_stats',
    titleUz: "O'zbekiston Respublikasi: Asosiy tibbiy va demografik ko'rsatkichlar",
    category: 'ozbekiston',
    categoryUz: 'Oʻzbekiston statistikasi',
    metricType: 'tarqalganlik',
    metricTypeUz: 'Milliy statistik koʻrsatkichlar',
    mainValue: '74.3 yil',
    unitUz: "o'rtacha kutilayotgan umr ko'rish (2023)",
    year: 2024,
    source: "O'zbekiston Respublikasi Sog'liqni saqlash vazirligi va Statistika agentligi, JSST",
    coverage: "O'zbekiston Respublikasi (umumiy 37+ million aholi)",
    descriptionUz: "O'zbekistonda aholi salomatligini muhofaza qilish, birlamchi tibbiy-sanitariya yordamini raqamlashtirish, qishloq vrachlik punktlarini yangilash natijasida kutilayotgan umr uzunligi muttasil o'smoqda (ayollarda 76.5 yil, erkaklarda 72.1 yil). Asosiy patologiyalar yurak-qon tomir va moddalar almashinuvi kasalliklariga to'g'ri keladi.",
    chartData: [
      { label: "Yurak-qon tomir xastaliklari ulushi", value: 60.2, note: "Barcha o'lim sabablari orasida 60.2%" },
      { label: "O'smalar (Onkologiya) ulushi", value: 10.8, note: "10.8% o'lim sababi" },
      { label: "Nafas olish a'zolari kasalliklari", value: 5.5, note: "5.5% o'lim sababi" },
      { label: "Ovqat hazm qilish a'zolari", value: 5.4, note: "5.4% o'lim sababi" },
      { label: "Boshqa yuqumsiz va tashqi sabablar", value: 18.1, note: "18.1% o'lim sababi" }
    ],
    demographics: [
      { group: "Aholi: Ayollar umr ko'rish", male: 0, female: 76.5 },
      { group: "Aholi: Erkaklar umr ko'rish", male: 72.1, female: 0 },
      { group: "Katta yoshlilarda qon bosimi nazorati", male: 32, female: 41 }
    ]
  },
  {
    id: 'cancer_types_distribution',
    titleUz: "Dunyo bo'yicha saraton kasalliklarining turlari bo'yicha taqsimoti",
    category: 'global_yuk',
    categoryUz: 'Global onkologiya yuki',
    metricType: 'kasallanish',
    metricTypeUz: 'Yillik yangi aniqlangan holatlar (Incidence)',
    mainValue: '20.0 million',
    unitUz: "yillik yangi saraton holatlari (dunyo)",
    year: 2024,
    source: "GLOBOCAN / Xalqaro Saraton Tadqiqotlari Agentligi (IARC - JSST)",
    coverage: "Global (185 mamlakat)",
    descriptionUz: "Zamonaviy diagnostika usullari tufayli erta bosqichda aniqlash darajasi o'smoqda. O'pka, sut bezi va yo'g'on ichak saratoni dunyodagi eng ko'p uchraydigan uchta onkologik kasallikdir.",
    chartData: [
      { label: "O'pka saratoni", value: 2.48, note: "2.48 mln yangi holat (12.4%)" },
      { label: "Sut bezi saratoni (ayollarda)", value: 2.31, note: "2.31 mln yangi holat (11.6%)" },
      { label: "Kolorektal (ichak) saratoni", value: 1.93, note: "1.93 mln yangi holat (9.6%)" },
      { label: "Prostata bezi saratoni (erkaklarda)", value: 1.47, note: "1.47 mln yangi holat (7.3%)" },
      { label: "Oshqozon saratoni", value: 0.97, note: "0.97 mln yangi holat (4.9%)" },
      { label: "Jigar saratoni", value: 0.87, note: "0.87 mln yangi holat (4.3%)" }
    ]
  }
];
