import { DiseaseData } from '../types/anatomy';

export const DISEASES_DATA: DiseaseData[] = [
  {
    id: 'myocardial_infarction',
    nameUz: 'Miokard infarkti va Yurak ishemik kasalligi',
    latinName: 'Infarctus myocardii',
    category: 'yurak',
    categoryUz: 'Yurak-qon tomir kasalliklari',
    affectedOrganUz: 'Yurak (Cor)',
    descriptionUz: "Yurak toj (koronar) arteriyalaridan birining tromb bilan to'satdan to'liq to'silib qolishi natijasida yurak mushagi ma'lum bir qismining kislorod ochligidan nobud bo'lishi (nekrozi). Dunyoda o'lim sabablari orasida mutlaq 1-o'rinda turadi.",
    causesUz: [
      "Toj arteriyalarida aterosklerotik pilakchaning yorilishi va uning ustida qon quyqasi (tromb) hosil bo'lishi",
      "Tamaki chekish oqibatida qon tomirlarning keskin torayishi (spazm)",
      "Qondagi past zichlikdagi xolesterin (LDL)ning yuqori darajasi",
      "Arterial gipertoniya va surunkali yuqori qon bosimi"
    ],
    symptomsUz: [
      "To'sh suyagi orqasida kuchli siquvchi, yondiruvchi, chidab bo'lmas og'riq (20 daqiqadan ortiq davom etuvchi)",
      "Og'riqning chap yelkaga, chap qo'lga, bo'yinga va pastki jag'ga tarqalishi",
      "Sovuq yopishqoq ter bosishi va o'lim qo'rquvi hissi",
      "Og'ir havo yetishmasligi va hansirash",
      "Nitroglitserin tabletkasidan so'ng ham og'riqning qolmasligi"
    ],
    diagnosisUz: [
      "Zudlik bilan EKG (elektrokardiogramma) — ST segmenti ko'tarilishi yoki tushishi",
      "Qonda troponin I yoki T yuqori sezuvchan kardiospesifik belgilarini aniqlash",
      "Shoshilinch koronar angiografiya (tomirlar holatini rentgen ostida ko'rish)",
      "Exokardiografiya (yurak UTTsi)"
    ],
    treatmentUz: [
      "Shoshilinch perkutan koronar aralashuv (stentlash) — dastlabki 'oltin 90-120 daqiqa' ichida",
      "Trombolitik terapiya (agar stentlash imkoni bo'lmasa, trombni erituvchi dorilar yuborish)",
      "Qonni suyultiruvchi antiagregantlar (aspirin, klopidogrel) va antikoagulyantlar",
      "Beta-blokatorlar va statinlar"
    ],
    preventionUz: [
      "Tamaki chekishni butunlay to'xtatish (yurak xuruji xavfini 50%ga kamaytiradi)",
      "Qon bosimini 130/80 mm simob ustunidan past ushlab turish",
      "Kam tuzli va yog'siz O'rta yer dengizi parheziga amal qilish",
      "Har kuni kamida 30 daqiqa piyoda yurish"
    ],
    globalPrevalenceUz: "Dunyoda 126 milliondan ortiq odam YIK bilan yashaydi.",
    affectedCount: "126+ million",
    populationPercent: "Dunyo aholisining ~1.6%",
    annualDeaths: "9.1 million kishi/yil",
    ageAndSexStatsUz: "Erkaklarda 45 yoshdan, ayollarda esa menopauzadan so'ng (55 yoshdan keyin) xavf keskin ortadi. Erkaklar ayollarga qaraganda 1.5-2 marta ko'proq chalinadi.",
    source: "JSST (WHO) Global Health Estimates, IHME Global Burden of Disease",
    year: 2024
  },
  {
    id: 'hypertension',
    nameUz: 'Arterial gipertoniya (Yuqori qon bosimi)',
    latinName: 'Hypertensio arterialis',
    category: 'yurak',
    categoryUz: 'Yurak-qon tomir kasalliklari',
    affectedOrganUz: 'Qon tomirlar, Yurak, Buyraklar, Bosh miya',
    descriptionUz: "Arterial qon bosimining muntazam ravishda 140/90 mm simob ustuni yoki undan yuqori bo'lib turishi bilan ifodalanuvchi surunkali kasallik. Ko'pincha yillar davomida hech qanday belgisiz kechgani sababli tibbiyotda 'jim qotil' (silent killer) deb ataladi.",
    causesUz: [
      "Osh tuzini sutkasiga 5 grammdan ortiq ortiqcha iste'mol qilish",
      "Ortiqcha tana vazni va qorin sohasidagi semizlik",
      "Surunkali stress, asabiy zo'riqish va uyqu yetishmasligi",
      "Irsiy moyillik (ota-onada gipertoniya bo'lishi)",
      "Spirtli ichimliklar va chekish"
    ],
    symptomsUz: [
      "Ertalabki ensa sohasidagi og'irlik va bosh og'rig'i",
      "Ko'z oldida qora dog'lar ('chivinlar') miltillashi",
      "Quloqlarda shovqin va bosh aylanishi",
      "Yuzning qizarishi va yurakning tez urishi",
      "Burundan to'satdan qon ketishi"
    ],
    diagnosisUz: [
      "Qon bosimini sutkalik monitoring qilish (SMAD)",
      "Ko'z tubi tekshiruvi (oftalmoskopiya — gipertonik retinopatiya)",
      "Qon biokimyosi (kreatinin, kaliy, lipid profili)",
      "EKG va buyraklar ultratovush tekshiruvi"
    ],
    treatmentUz: [
      "Turmush tarzini tubdan o'zgartirish (vazn tashlash, tuzni cheklash)",
      "Gipotenziv dorilarni (AAF ingibitorlari, sartanlar, kalsiy antagonistlari, diuretiklar) umrbod muntazam qabul qilish",
      "Qon bosimini uyda kundalik daftarga yozib borish"
    ],
    preventionUz: [
      "Kunlik osh tuzini 1 choy qoshiqdan (5 g) oshirmaslik",
      "Kaliyga boy ovqatlarni (banan, mayiz, quritilgan o'rik, yong'oq) ko'paytirish",
      "Haftada kamida 150 daqiqa o'rtacha aerob harakat",
      "Vazn indeksini (BMI) 18.5 - 24.9 oralig'ida saqlash"
    ],
    globalPrevalenceUz: "Dunyo bo'ylab 1.28 milliard kattalar gipertoniya bilan yashamoqda.",
    affectedCount: "1.28 milliard",
    populationPercent: "Katta yoshli aholining 33%",
    annualDeaths: "10.8 million kishi/yil (barcha insult va infarktlarning asosiy omili)",
    ageAndSexStatsUz: "65 yoshdan oshgan aholining 60 foizdan ortig'ida uchraydi. Rivojlanayotgan mamlakatlarda bemorlarning deyarli yarmi o'z kasalligidan bexabar.",
    source: "JSST (WHO) Gipertoniya hisoboti",
    year: 2024
  },
  {
    id: 'stroke',
    nameUz: 'Bosh miya insulti (Oʻtkir qon aylanish buzilishi)',
    latinName: 'Apoplexia cerebri (Stroke)',
    category: 'nevrologiya',
    categoryUz: 'Nerv tizimi kasalliklari',
    affectedOrganUz: 'Bosh miya (Encephalon)',
    descriptionUz: "Bosh miya qon tomirining tiqilib qolishi (ishemik insult — 85%) yoki yorilib ketishi (gemorragik insult — 15%) natijasida miya to'qimasining kislorodsiz qolib nobud bo'lishi. Bemorlarda nogironlikka olib keluvchi dunyodagi yetakchi sabab.",
    causesUz: [
      "Nazoratsiz yuqori qon bosimi (gipertonik kriz)",
      "Miltillovchi aritmiya (yurak bo'lmachalarida tromb hosil bo'lib miyaga uchishi)",
      "Uyqu va miya arteriyalari aterosklerozi",
      "Qandli diabet va semizlik"
    ],
    symptomsUz: [
      "Yuz asimmetriyasi (kulishni so'raganda yuz yarmi harakatsiz qolishi)",
      "Qo'l yoki oyoqda bir tomonlama holsizlik (ikkala qo'lni ko'tara olmaslik)",
      "Nutqning buzilishi (bemor o'z ismini aytolmasligi, tili chaynalishi)",
      "Ko'rishning keskin yo'qolishi va muvozanat yo'qotilishi",
      "Boshning to'satdan 'momaqaldiroq kabi' kuchli og'rishi"
    ],
    diagnosisUz: [
      "Tezkor bosh miya kompyuter tomografiyasi (KT) — qon quyilishini inkor etish uchun",
      "Miya MRTsi va MRT-angiografiya",
      "Uyqu arteriyalari UTTsi (dopplerografiya)",
      "EKG va qon ivish tahlili (INR, D-dimer)"
    ],
    treatmentUz: [
      "Ishemik insultda dastlabki 4.5 soat ichida venaga trombolitik (alteplaza) yuborish",
      "Mexanik trombektomiya (yirik tomirdan trombni mikrokater orqali sug'urib olish — 6-24 soatgacha)",
      "Reanimatsiya va neyroprotektiv terapiya",
      "Erta boshlangan kineziterapiya, logoped va reabilitatsiya"
    ],
    preventionUz: [
      "Qon bosimini qat'iy nazorat qilish",
      "Aritmiyasi bor bemorlarda antikoagulyantlarni o'z vaqtida ichish",
      "Tamaki mahsulotlaridan voz kechish",
      "Tezkor FAST belgilari (Yuz, Qo'l, Nutq, Vaqt) aniqlanganda 103 ga kechiktirmay qo'ng'iroq qilish"
    ],
    globalPrevalenceUz: "Har yili dunyoda 12 milliondan ortiq odam insultga chalinadi.",
    affectedCount: "101 million (insultni boshidan kechirganlar)",
    populationPercent: "Dunyo aholisining ~1.3%",
    annualDeaths: "6.6 million kishi/yil",
    ageAndSexStatsUz: "Insultlarning 60% dan ortig'i 70 yoshdan oshganlarda sodir bo'ladi, ammo so'nggi yillarda 35-50 yoshlilar orasida ham ko'paymoqda.",
    source: "World Stroke Organization (WSO) & JSST",
    year: 2024
  },
  {
    id: 'type2_diabetes',
    nameUz: '2-tur Qandli diabet',
    latinName: 'Diabetes mellitus typus 2',
    category: 'endokrin',
    categoryUz: 'Endokrin va metabolik kasalliklar',
    affectedOrganUz: "Oshqozon osti bezi, Qon tomirlar, Buyraklar, Ko'z to'r pardasi",
    descriptionUz: "Hujayralarning o'z insuliniga sezgirligi pasayishi (insulinorezistentlik) va vaqt o'tishi bilan oshqozon osti bezi beta-hujayralarining charchashi oqibatida qonda glyukoza miqdorining surunkali ko'tarilishi bilan tavsiflanuvchi global metabolik epidemiya.",
    causesUz: [
      "Semizlik, ayniqsa qorin atrofidagi yog' qatlami (visseral semizlik)",
      "Kamharakatlik va jismoniy faollikning yetishmasligi",
      "Tez hazm bo'luvchi uglevodlar (shirinliklar, gazli ichimliklar, oq non)ni haddan tashqari ko'p iste'mol qilish",
      "Irsiyat va surunkali stress"
    ],
    symptomsUz: [
      "Doimiy chanqoqlik va og'iz qurishi (polidipsiya)",
      "Tez-tez va ko'p miqdorda siyish, ayniqsa tunda (poliuriya)",
      "Ko'p ovqat yeyishga qaramay charchoq va holsizlik",
      "Teri va shilliq qavatlarning qichishi, mayda yaralarning sekin bitishi",
      "Ko'rishning xiralashishi va oyoq uchlarining uvushishi"
    ],
    diagnosisUz: [
      "Och qoringa venoz qondagi glyukoza (> 7.0 mmol/l)",
      "Glikirlangan gemoglobin (HbA1c > 6.5%) — so'nggi 3 oylik o'rtacha shakar ko'rsatkichi",
      "Glyukozaga tolerantlik oral testi (OGTT)"
    ],
    treatmentUz: [
      "Glikemik indeksi past bo'lgan maxsus parhez",
      "Muntazam jismoniy yuklama (mushaklar glyukozani insulinsiz ham o'zlashtiradi)",
      "Qand tushiruvchi dorilar (metformin, SGLT-2 ingibitorlari, GLP-1 agonistlari)",
      "Zarur bo'lganda insulin inyeksiyalari"
    ],
    preventionUz: [
      "Tana vaznini 5-7% ga kamaytirish diabet rivojlanish xavfini 58% ga pasaytiradi",
      "Kuniga kamida 10 000 qadam yurish",
      "Shirin ichimliklar va qandolat mahsulotlaridan voz kechish",
      "Yilda bir marta qon shakarini tekshirtirish"
    ],
    globalPrevalenceUz: "Dunyoda 537 milliondan ortiq katta yoshli kishi diabet bilan yashaydi.",
    affectedCount: "537 million",
    populationPercent: "Dunyo kattalarining 10.5%",
    annualDeaths: "2.0 million kishi/yil bevosita diabet tufayli",
    ageAndSexStatsUz: "Eng ko'p 45-64 yosh oralig'ida aniqlanadi. 2045-yilga borib bemorlar soni 783 millionga yetishi prognoz qilinmoqda.",
    source: "Xalqaro Diabet Federatsiyasi (IDF Diabetes Atlas 10th edition)",
    year: 2023
  },
  {
    id: 'copd',
    nameUz: "Surunkali obstruktiv o'pka kasalligi (KO'AL)",
    latinName: 'Morbus pulmonum obstructivus chronicus (COPD)',
    category: 'nafas',
    categoryUz: 'Nafas tizimi kasalliklari',
    affectedOrganUz: "O'pkalar va Bronxlar",
    descriptionUz: "Nafas yo'llarining progressiv torayishi va o'pka to'qimasining emfizematik yemirilishi oqibatida o'pka havo o'tkazuvchanligining qaytmas darajada cheklanishi. Bemorlarda chuqur nafas chiqarish qiyinlashadi.",
    causesUz: [
      "Tamaki chekish (sigaret, nosvoy, chilim, veyp) — kasallik holatlarining 80 foizidan ortig'iga sabab bo'ladi",
      "Uy ichida qattiq yoqilg'i (ko'mir, o'tin) yoqishdan hosil bo'luvchi tutunlar",
      "Sanoat changlari va havoning ifloslanishi",
      "Alfa-1 antitripsin fermentining genetik tanqisligi"
    ],
    symptomsUz: [
      "Jismoniy harakatda asta-sekin kuchayib boruvchi doimiy hansirash",
      "Ertalabki surunkali yo'tal va balg'am ajralishi ('kashandalar yo'tali')",
      "Ko'krak qafasining bochkasimon kengayishi",
      "Ko'krakda nafas olayotganda hushtaksimon xirillash"
    ],
    diagnosisUz: [
      "Spirometriya — bronxolitikdan keyingi FEV1/FVC nisbati < 0.70 bo'lishi",
      "Ko'krak qafasi rentgenografiyasi va yuqori aniqlikdagi KTsi",
      "Pulsoksimetriya (qonda SpO2 kislorod miqdorini aniqlash)"
    ],
    treatmentUz: [
      "Tamaki chekishni zudlik bilan to'liq to'xtatish (jarayonni sekinlashtirishning yagona yo'li)",
      "Uzoq ta'sir qiluvchi bronxodilatatorlar (ingalyatsion antixolinergiklar va beta-2 agonistlar)",
      "Og'ir bosqichlarda uy sharoitida uzoq muddatli kislorodoterapiya",
      "O'pka reabilitatsiyasi mashqlari"
    ],
    preventionUz: [
      "Hech qachon chekmaslik va chekuvchilar tutunidan uzoqroq turish",
      "Changli va zararli ishlab chiqarishlarda himoya respiratorlarini taqish",
      "Har yili gripp va pnevmokokkga qarshi emlanish"
    ],
    globalPrevalenceUz: "Dunyoda 392 millionga yaqin odam KO'AL bilan yashaydi.",
    affectedCount: "392 million",
    populationPercent: "Dunyo aholisining ~5%",
    annualDeaths: "3.3 million kishi/yil (o'lim sabablari orasida 3-o'rin)",
    ageAndSexStatsUz: "Ko'pincha 40 yoshdan oshgan, ko'p yillik kashanda stajiga ega odamlarda kuzatiladi.",
    source: "GOLD (Global Initiative for Chronic Obstructive Lung Disease) & JSST",
    year: 2024
  },
  {
    id: 'lung_cancer',
    nameUz: "O'pka saratoni (Bronxogen karsinoma)",
    latinName: 'Carcinoma bronchogenes',
    category: 'onkologiya',
    categoryUz: 'Onkologik kasalliklar',
    affectedOrganUz: "O'pkalar (Pulmones)",
    descriptionUz: "Bronxlar yoki alveolalar shilliq qavati epiteliy hujayralarining nazoratsiz bo'linishi va qo'shni to'qimalarga o'sib, butun organizmga metastaz berishi bilan kechuvchi eng xavfli onkologik kasallik. Dunyoda saraton o'limlari bo'yicha 1-o'rinda.",
    causesUz: [
      "Tamaki tutunidagi kanserogen smola va benzopirenlar (xavfni 15-30 baravarga oshiradi)",
      "Radon gazi, asbest tolalari va og'ir metall changlari bilan nafas olish",
      "Shahar havosidagi mayda zaharli PM2.5 zarrachalarining yuqori konsentratsiyasi",
      "Surunkali o'pka chandiqlari va sil asoratlari"
    ],
    symptomsUz: [
      "Davolashga qaramay 3 haftadan ortiq davom etuvchi yo'tal",
      "Balg'amda qon tomirlari yoki qon aralashmasining paydo bo'lishi",
      "Nafas qisishi va ko'krak qafasida doimiy simillovchi og'riq",
      "Ishtahasizlik, sababsiz tez vazn yo'qotish (kaxeksiya)",
      "Ovozning bo'g'ilib qolishi (qaytuvchi halqum nervi qisilganda)"
    ],
    diagnosisUz: [
      "Past dozali kompyuter tomografiyasi (LDKT) skriningi",
      "Bronxoskopiya va shubhali to'qimadan biopsiya olish",
      "Gistologik va genetik tekshiruv (EGFR, ALK mutatsiyalari)",
      "PET-KT (butun tanadagi metastazlarni aniqlash)"
    ],
    treatmentUz: [
      "Erta bosqichlarda: jarrohlik yo'li bilan o'pka bo'lagini olib tashlash (lobektomiya)",
      "Nurlanish (radiatsiya) terapiyasi",
      "Kimyoterapiya va nishonli (target) terapiya",
      "Immunoterapiya (saraton hujayralarini immun tizimga ko'rsatib beruvchi zamonaviy preparatlar)"
    ],
    preventionUz: [
      "Chekmaslik va chekishni darhol tashlash (10 yildan so'ng xavf 50% ga pasayadi)",
      "Asbest va kimyoviy moddalar bilan ishlashda qat'iy xavfsizlik choralari",
      "Ko'p yil chekkan 50-80 yoshli insonlarda har yili profilaktik LDKT tekshiruvi"
    ],
    globalPrevalenceUz: "Yiliga 2.5 milliondan ortiq yangi holat qayd etiladi.",
    affectedCount: "Yillik yangi: 2.48 million",
    populationPercent: "Barcha yangi saratonlarning 12.4%",
    annualDeaths: "1.8 million kishi/yil",
    ageAndSexStatsUz: "Bemorlarning 80% dan ortig'i 60 yoshdan oshgan kishilar. Erkaklar orasida eng ko'p uchraydigan onkologik kasallik.",
    source: "GLOBOCAN (Xalqaro Saraton Tadqiqotlari Agentligi / IARC)",
    year: 2024
  },
  {
    id: 'chronic_kidney_disease',
    nameUz: 'Surunkali buyrak yetishmovchiligi (SBY)',
    latinName: 'Insufficientia renalis chronica',
    category: 'buyrak',
    categoryUz: 'Siydik-tanosil tizimi kasalliklari',
    affectedOrganUz: 'Buyraklar (Renes)',
    descriptionUz: "Buyrak to'qimalarining (nefronlarning) 3 oydan ortiq vaqt davomida asta-sekin qaytmas darajada nobud bo'lishi va qonni azot chiqindilaridan tozalash qobiliyatining yo'qolishi.",
    causesUz: [
      "Qandli diabet asorati (diabetik nefropatiya — holatlarning 40%dan ko'prog'i)",
      "Davolanmagan arterial gipertoniya",
      "Surunkali glomerulonefrit va piyelonefrit",
      "Og'riq qoldiruvchi dorilarni (analgetik nefropatiya) yillar davomida ortiqcha ichish"
    ],
    symptomsUz: [
      "Ertalab yuzda va to'piqlarda doimiy shishlar",
      "Teri quruqligi, sarg'imtir tus olishi va kuchli qichishishi",
      "Og'izdan ammiak (siydik) hidi kelishi",
      "Nazorat qilib bo'lmaydigan qon bosimi va anemiya (kamqonlik)",
      "Holsizlik, ko'ngil aynishi va qusish (uremiya)"
    ],
    diagnosisUz: [
      "Qon zardobida kreatinin miqdori va koptokchalar filtratsiyasi tezligi (KFT / eGFR < 60 ml/min)",
      "Siydikda oqsil (albuminuriya) darajasini aniqlash",
      "Buyraklar ultratovush tekshiruvi (o'lchamlarning kichrayishi)"
    ],
    treatmentUz: [
      "Birlamchi sababni (diabet va gipertoniyani) qat'iy nazorat qilish",
      "Kamyog' va past oqsilli maxsus parhez",
      "Terminal (oxirgi) bosqichda: apparat orqali qonni tozalash (gemodializ yoki peritoneal dializ)",
      "Donor buyragini ko'chirib o'tkazish (transplantatsiya)"
    ],
    preventionUz: [
      "Yetarli toza suv ichish rejimiga rioya qilish",
      "Qon shakari va qon bosimini muntazam tekshirtirish",
      "Nosteroid yallig'lanishga qarshi dorilarni (diklofenak, ibuprofen) haddan tashqari ko'p ichmaslik"
    ],
    globalPrevalenceUz: "Dunyoda 850 milliondan ortiq inson turli darajadagi buyrak yetishmovchiligiga ega.",
    affectedCount: "850+ million",
    populationPercent: "Dunyo aholisining 10% dan ortig'i",
    annualDeaths: "1.4 million kishi/yil bevosita dializ yetishmovchiligidan",
    ageAndSexStatsUz: "75 yoshdan oshgan odamlarning 30 foizida turli darajadagi buyrak funksiyasi pasayishi aniqlanadi.",
    source: "Xalqaro Nefrologlar Jamiyati (ISN) & JSST",
    year: 2024
  },
  {
    id: 'liver_cirrhosis',
    nameUz: 'Jigar sirrozi va Surunkali gepatit',
    latinName: 'Cirrhosis hepatis',
    category: 'jigar',
    categoryUz: 'Hazm aʼzolari va jigar kasalliklari',
    affectedOrganUz: 'Jigar (Hepar)',
    descriptionUz: "Jigar sog'lom to'qimasining o'rnini chandiqli fibroz to'qima egallashi va jigar me'morchiligining buzilishi. Buning natijasida jigar o'zining tozalash va oqsil sintez qilish vazifasini bajara olmay qoladi hamda qorin venalarida bosim (portal gipertenziya) keskin oshadi.",
    causesUz: [
      "Spirtli ichimliklarni muntazam ko'p ichish (alkogolli jigar kasalligi)",
      "Surunkali virusli gepatit B, C va D infeksiyalari",
      "Noalkogol yog' gepatozi (semizlik va moddalar almashinuvi buzilishi fonida)",
      "Autoimmun gepatit va toksik zaharlanishlar"
    ],
    symptomsUz: [
      "Qorin bo'shlig'ida suyuqlik to'planishi va qorinning sharlardek shishishi (astsit)",
      "Teri va ko'z oqining chuqur sarg'ayishi, terida qon tomir yulduzchalari",
      "Qizilo'ngach venalarining kengayishi va qon qusish",
      "Jigar ensefalopatiyasi (bosh miyaning ammiakdan zaharlanib fikrlash buzilishi, koma)",
      "Oyoqlarda kuchli shishlar va doimiy charchoq"
    ],
    diagnosisUz: [
      "Jigar ultratovush tekshiruvi va elastometriyasi (FibroSkan)",
      "Qon biokimyosi (bilirubin, ALT, AST, albumin, protrombin indeksi)",
      "Virusli gepatitlar markyorlari (HBsAg, anti-HCV)",
      "Qizilo'ngach varikoz venalarini ko'rish uchun FGDS"
    ],
    treatmentUz: [
      "Alkogoldan 100% mutlaq voz kechish",
      "Gepatit B va C ga qarshi zamonaviy to'g'ridan-to'g'ri ta'sir etuvchi virusga qarshi dorilar (Sofosbuvir va boshqalar)",
      "Astsitni kamaytirish uchun siydik haydovchi dorilar va paratsentez",
      "Yagona radikal usul: jigar transplantatsiyasi"
    ],
    preventionUz: [
      "Gepatit B ga qarshi tug'ruqxonadayoq rejali emlanish",
      "Steril bo'lmagan stomatologik, manikyur va tatuirovka muolajalaridan saqlanish",
      "Spirtli ichimliklardan uzoq yurish",
      "Sog'lom tana vaznini ushlab turish"
    ],
    globalPrevalenceUz: "Dunyoda 112 milliondan ortiq kishi kompensatsiyalangan jigar sirrozi bilan yashaydi.",
    affectedCount: "112 million",
    populationPercent: "Kattalarning ~2%",
    annualDeaths: "1.3 million kishi/yil",
    ageAndSexStatsUz: "Erkaklar orasida ayollarga qaraganda 2 barobar ko'proq uchraydi, eng xavfli yosh davri 40-60 yosh.",
    source: "The Lancet Gastroenterology & Hepatology",
    year: 2024
  },
  {
    id: 'osteoporosis',
    nameUz: 'Osteoporoz (Suyaklar moʻrtlashishi)',
    latinName: 'Osteoporosis',
    category: 'suyak',
    categoryUz: 'Tayanch-harakat tizimi kasalliklari',
    affectedOrganUz: "Skelet suyaklari (ayniqsa Son suyagi bo'yinchasi, Umurtqalar, Bilak)",
    descriptionUz: "Suyak to'qimasi zichligining pasayishi va mikroarxitekturasining yemirilishi natijasida suyaklarning g'ovak bo'lib qolishi. Bemor oddiy yotoqdan turayotganda yoki yengil turtilganda ham suyak sinib ketishi mumkin.",
    causesUz: [
      "Ayollarda menopauza davrida suyaklarni himoyalovchi estrogen gormonining keskin kamayishi",
      "Kalsiy va D vitamini yetishmovchiligi",
      "Yoshning keksayishi (suyak hosil bo'lishidan ko'ra so'rilishi ustun kelishi)",
      "Kamharakatlik va jismoniy mashqlarning yo'qligi",
      "Glyukokortikoid gormon dorilarini uzoq qabul qilish"
    ],
    symptomsUz: [
      "Yillar davomida hech qanday alomatlarsiz 'yashirin' kechadi",
      "Bo'y uzunligining 3-5 sm ga qisqarib ketishi",
      "Qomatning bukchayishi ('beva ayol bukrisi')",
      "Bel va orqada noaniq simillovchi og'riqlar",
      "Kichik yiqilishda ham to'satdan suyak sinishi"
    ],
    diagnosisUz: [
      "Ikki energiyali rentgen densitometriyasi (DEXA) — 'oltin standart' (T-score < -2.5)",
      "Qonda kalsiy, fosfor va 25-OH vitamin D darajasi",
      "FRAX — keyingi 10 yillik sinish ehtimolini hisoblash xalqaro kalkulyatori"
    ],
    treatmentUz: [
      "Bisfosfonatlar (alendronat, zoledron kislotasi) va monoklonal antitanachalar (denosumab)",
      "Kalsiy preparatlari va D3 vitaminining terapevtik dozalari",
      "Yiqilishlarning oldini oluvchi reabilitatsiya va muvozanat mashqlari"
    ],
    preventionUz: [
      "Yoshlikdan suyak massasini to'plash: sut mahsulotlari, pishloq, kunjut, baliq iste'moli",
      "Quyosh nurida yetarli bo'lish (D vitamini sintezi uchun)",
      "Suyaklarga yuklama beruvchi jismoniy mashqlar (piyoda yurish, zinalardan ko'tarilish)",
      "Uy sharoitida yiqilish xavflarini bartaraf etish (sirpanchiq gilamlarni olib tashlash)"
    ],
    globalPrevalenceUz: "Dunyoda 50 yoshdan oshgan 200 milliondan ortiq odam osteoporozdan aziyat chekadi.",
    affectedCount: "200+ million",
    populationPercent: "50 yoshdan oshgan ayollarning har 3 tadan 1 nafari",
    annualDeaths: "Sinish asoratlari oqibatida yillik yuz minglab o'limlar",
    ageAndSexStatsUz: "Ayollar erkaklarga qaraganda 4 barobar ko'proq chalinadi. Son suyagi singan keksalarning 20-30%i bir yil ichida nobud bo'ladi.",
    source: "Xalqaro Osteoporoz Jamg'armasi (IOF)",
    year: 2024
  }
];
