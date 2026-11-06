import { BoneData } from '../types/anatomy';

export const SKELETON_DATA: BoneData[] = [
  {
    id: 'skull',
    nameUz: 'Kalla suyagi (Bosh chanogʻi)',
    latinName: 'Cranium',
    region: 'kalla',
    regionUz: 'Kalla sohasi',
    locationUz: "Umurtqa pog'onasining yuqori qismida joylashgan; miya qutisi va yuz skeletini tashkil etadi.",
    structureUz: "23 ta alohida suyakdan iborat (peshona, tepa, ensa, chakka, ponasimon, yuqori va pastki jag'). Suyaklar bir-biri bilan harakatsiz choklar (suturae) orqali birlashgan, faqat pastki jag' bo'g'im orqali harakatchan.",
    functionsUz: [
      "Bosh miyani har qanday mexanik shikastlanish va zarbalardan ishonchli himoya qilish",
      "Ko'rish, eshitish, hid bilish va ta'm bilish organlari uchun mustahkam suyak kosalarini hosil qilish",
      "Ovqatni chaynash apparati (tishlar va jag'lar) hamda nutq hosil qilishda qatnashish",
      "Nafas olish yo'llarining dastlabki bo'limi uchun suyak asos bo'lish"
    ],
    diseasesUz: [
      "Kalla suyagi sinishi (gumbaz va asos sinishlari)",
      "Kranial travmalar va miya chayqalishi",
      "Sinusitlar (gaymorit, frontalit - suyak bo'shliqlarining yallig'lanishi)",
      "Chakka-pastki jag' bo'g'imi disfunksiyasi"
    ],
    fractureRiskUz: "Avtohalokatlar, balandlikdan yiqilish yoki qattiq zarbalarda. Asos sinishida quloq yoki burundan likvor (miya suyuqligi) oqishi xarakterli simptomdir.",
    position: [0, 4.3, 0.05],
    color: '#e2e8f0'
  },
  {
    id: 'spine',
    nameUz: "Umurtqa pog'onasi",
    latinName: 'Columna vertebralis',
    region: 'umurtqa',
    regionUz: 'Umurtqa va tana oʻqi',
    locationUz: "Kalla suyagi asosidan boshlanib, butun gavda bo'ylab tos suyagigacha tushadi.",
    structureUz: "32-34 ta umurtqadan iborat: 7 ta bo'yin (cervical), 12 ta ko'krak (thoracic), 5 ta bel (lumbar), 5 ta birlashgan dumg'aza (sacrum) va 3-5 ta dum suyagi (coccyx). Umurtqalar o'rtasida elastik fibroz-tog'ay disklari yotadi. 4 ta fiziologik egrilikka ega (lordoz va kifozlar).",
    functionsUz: [
      "Butun gavda uchun markaziy tayanch o'qi vazifasini bajarish",
      "Orqa miyani o'z kanalida himoyalangan holda saqlash",
      "Yurganda, yugurganda va sakraganda zarbalarni yumshatuvchi (amortizatsiya) vazifani o'tash",
      "Gavdaning har tomonlama egilishi, buralishi va tik turishini ta'minlash"
    ],
    diseasesUz: [
      "Osteoxondroz va umurtqalararo disk churrasi (grija)",
      "Skolioz (umurtqaning yonga qiyshayishi), kifoziya va lordoziya",
      "Spondilolistez (umurtqaning siljishi)",
      "Umurtqaning kompressiv sinishi (ayniqsa osteoporozli keksalarda)",
      "Bexterev kasalligi (ankilozlanuvchi spondiloartrit)"
    ],
    fractureRiskUz: "Avtohalokat, suvga sho'ng'ishda bosh bilan urilish (bo'yin bo'limi) yoki balandlikdan oyoqqa tushishda yuqori xavf mavjud.",
    position: [0, 2.5, -0.1],
    color: '#cbd5e1'
  },
  {
    id: 'ribs',
    nameUz: "Qovurg'alar",
    latinName: 'Costae',
    region: 'kokrak',
    regionUz: "Ko'krak qafasi",
    locationUz: "Ko'krak qafasining ikki yon qismini hosil qilib, orqadan ko'krak umurtqalariga, oldindan esa to'sh suyagiga tutashadi.",
    structureUz: "12 juft yoy shaklidagi suyaklardan iborat: 1-7 juftlari haqiqiy qovurg'alar (to'shga bevosita tog'ay bilan birikadi), 8-10 juftlari soxta qovurg'alar (yuqoridagi qovurg'a tog'ayiga ulanadi), 11-12 juftlari esa erkin (tebranuvchi) qovurg'alardir.",
    functionsUz: [
      "Yurak, o'pkalar va yirik qon tomirlarni mexanik zarbalardan himoyalovchi mustahkam karkas hosil qilish",
      "Nafas olish va chiqarish paytida ko'krak qafasi hajmini o'zgartirish (harakatchan tog'aylar tufayli)",
      "Ko'krak va orqa mushaklari uchun birikish joyi bo'lish",
      "Qizil suyak iligida qon yaratilishida ishtirok etish"
    ],
    diseasesUz: [
      "Qovurg'a sinishlari (yopiq va plevrani teshuvchi ochiq turlari)",
      "Qovurg'alararo nevralgiya (nerv siqilishi oqibatidagi o'tkir og'riq)",
      "Tietze sindromi (qovurg'a tog'aylarining yallig'lanishi)"
    ],
    fractureRiskUz: "Ko'krakka to'g'ridan-to'g'ri zarba tushganda, ayniqsa 4-8 qovurg'alar eng zaif hisoblanadi. Sinish parchalari o'pkani teshishi (pnevmotoraks) jiddiy xavf tug'diradi.",
    position: [0, 2.5, 0.1],
    color: '#e2e8f0'
  },
  {
    id: 'sternum',
    nameUz: "To'sh suyagi",
    latinName: 'Sternum',
    region: 'kokrak',
    regionUz: "Ko'krak qafasi",
    locationUz: "Ko'krak qafasining oldingi markaziy qismida joylashgan yassi suyak.",
    structureUz: "Uch qismdan iborat: dasta (manubrium), tana (corpus) va xanjarsimon o'simta (processus xiphoideus). Yon qirralarida qovurg'a tog'aylari uchun o'ymalar mavjud.",
    functionsUz: [
      "Qovurg'alarni old tomondan birlashtirib, ko'krak qafasini yaxlit mustahkam qutiga aylantirish",
      "Yurakning oldingi yuzasini bevosita to'g'ridan-to'g'ri to'qnashuvlardan himoya qilish",
      "Katta ko'krak mushagi va to'sh-o'mrov mushagi uchun tayanch bo'lish",
      "Kattalarda eng faol qon yaratuvchi qizil suyak iligi manbai (sternal punksiya uchun ishlatiladi)"
    ],
    diseasesUz: [
      "To'sh suyagi sinishi (rul zarbasi kabi kuchli travmalarda)",
      "Voronkasimon va kabutarsimon ko'krak qafasi deformatsiyalari",
      "Osteomiyelit"
    ],
    fractureRiskUz: "Avtohalokatda avtomobil ruliga yoki xavfsizlik kamariga qattiq urilish natijasida sinishi mumkin.",
    position: [0, 2.7, 0.32],
    color: '#cbd5e1'
  },
  {
    id: 'shoulder_girdle',
    nameUz: "Yelka kamari (O'mrov va Kurak)",
    latinName: 'Cingulum pectorale (Clavicula et Scapula)',
    region: 'qol',
    regionUz: "Qo'l va yelka kamari",
    locationUz: "Ko'krak qafasining yuqori qismida joylashgan: old tomondan o'mrov (clavicula), orqa tomondan esa yassi kurak (scapula) suyagi.",
    structureUz: "O'mrov S-simon egilgan nayzasimon suyak bo'lib, to'sh suyagi va kurak o'simtasi (akromion) bilan tutashadi. Kurak esa orqa tomondan qovurg'alar ustida erkin sirg'aluvchi yassi uchburchak suyakdir.",
    functionsUz: [
      "Qo'l erkin harakatlanishi uchun katta amplitudali tayanchni ta'minlash",
      "Qo'ldan keladigan yuklama va turtkilarni ko'krak qafasiga teng taqsimlash",
      "Yelka bo'g'imini hosil qilishda qatnashish (kurakning bo'g'im chuqurchasi orqali)",
      "Yelka, bo'yin va orqa mushaklari uchun birikish maydonini yaratish"
    ],
    diseasesUz: [
      "O'mrov suyagi sinishi (bolalar va sportchilarda eng ko'p uchraydigan sinish)",
      "Yelka bo'g'imining chiqishi va akromial-o'mrov boylamining uzilishi",
      "Yelka-kurak periartriti va rototor manjetasi yirtilishi"
    ],
    fractureRiskUz: "Yelkaga yoki to'g'rilangan qo'lga yiqilganda o'mrov suyagi o'rta qismidan oson sinadi.",
    position: [0, 3.2, 0.1],
    color: '#e2e8f0'
  },
  {
    id: 'arm_bones',
    nameUz: "Qo'l suyaklari (Yelka, Bilak va Tirsak)",
    latinName: 'Humerus, Radius, Ulna',
    region: 'qol',
    regionUz: "Yuqori erkin oyoq-qo'l",
    locationUz: "Yelka bo'g'imidan boshlanib, bilak-kaft bo'g'imigacha cho'ziladi.",
    structureUz: "Yelka suyagi (Humerus) — uzun naysimon suyak; bilak sohasida ikkita parallel suyak: bosh barmoq tomonida bilak suyagi (Radius) va jimjiloq tomonida tirsak suyagi (Ulna) joylashgan.",
    functionsUz: [
      "Qo'lning murakkab va nozik manipulyatsiyalari, narsalarni ko'tarish va ushlash imkonini berish",
      "Bilak suyaklarining bir-biri ustida aylanishi (pronatsiya va supinatsiya — kaftni pastga va yuqoriga burish)",
      "Tirsak bo'g'imida yozish va bukish harakatlarini ta'minlash",
      "Kuchli qo'l mushaklariga mustahkam richag bo'lish"
    ],
    diseasesUz: [
      "Bilak suyagining tipik joydan sinishi (Koles va Smit sinishlari)",
      "Tirsak o'simtasi sinishi",
      "Epikondilit ('tennischi tirsagi' va 'golfchi tirsagi')",
      "Tirsak bo'g'imi artrozi"
    ],
    fractureRiskUz: "Muzlamada yoki sirpanib kaftga yiqilganda bilak suyagining pastki qismi sinishi barcha sinishlar orasida 1-o'rinda turadi.",
    position: [0.65, 2.2, 0.05],
    color: '#cbd5e1'
  },
  {
    id: 'hand_bones',
    nameUz: 'Qoʻl panja suyaklari',
    latinName: 'Ossa manus',
    region: 'qol',
    regionUz: "Qo'l panjasi",
    locationUz: "Bilakdan boshlanib barmoq uchlarigacha bo'lgan soha.",
    structureUz: "27 ta mayda suyakdan iborat: 8 ta kaftusti suyagi (qayiqsimon, yarimoysimon va boshqalar), 5 ta kaft suyagi va 14 ta barmoq falangalari (bosh barmoqda 2 ta, qolganlarida 3 tadan).",
    functionsUz: [
      "Inson sivilizatsiyasini yaratgan nozik motorika: yozish, rasm chizish, asboblardan foydalanish",
      "Katta qarshilik kuchi bilan narsalarni qattiq changallash (oppozitsiya — bosh barmoqning boshqalarga qarama-qarshi turishi)",
      "Sezuvchan taktil harakatlar uchun elastik va barqaror platforma yaratish"
    ],
    diseasesUz: [
      "Qayiqsimon suyak (os scaphoideum) sinishi va soxta bo'g'im hosil bo'lishi",
      "Barmoqlar artrozi va revmatoid artrit (barmoqlarning qiyshayishi)",
      "Karpal kanal sindromi (nerv siqilishi)"
    ],
    fractureRiskUz: "Zarba berganda yoki barmoqlar qisilib qolganda falangalar va kaft suyaklari oson jarohatlanadi.",
    position: [0.95, 1.25, 0.05],
    color: '#e2e8f0'
  },
  {
    id: 'pelvis',
    nameUz: 'Tos suyagi (Chanoq)',
    latinName: 'Pelvis',
    region: 'tos',
    regionUz: 'Tos kamari',
    locationUz: "Gavdaning pastki qismida, umurtqa pog'onasi bilan son suyaklari o'rtasida joylashgan.",
    structureUz: "Ikkita yirik nomsiz chanoq suyagi (yonbosh, qov va quymich suyaklarining qo'shilishidan) va orqadagi dumg'aza suyagidan iborat. Ayollar tosi erkaklarnikiga qaraganda kengroq, kalta va yumaloq shaklda (tug'ruq fiziologiyasi uchun moslashgan).",
    functionsUz: [
      "Butun gavdaning og'irligini son suyaklari va oyoqlarga uzatish",
      "Kichik tos a'zolarini (qovuq, to'g'ri ichak, ayollarda bachadon) pastdan va yon tomondan himoyalash",
      "Qorin devori, son va dumba mushaklari uchun mustahkam poydevor bo'lish",
      "Ayollarda homiladorlik va tug'ruq jarayonida tug'ruq yo'li vazifasini o'tash"
    ],
    diseasesUz: [
      "Tos suyaklarining sinishi (eng og'ir, hayot uchun xavfli politravmalardan biri)",
      "Koksartroz (chanoq-son bo'g'imi artrozi)",
      "Sakroileit (dumg'aza-yonbosh bo'g'imining yallig'lanishi)",
      "Simfizit (tug'ruqdan oldin qov birikmasining ortiqcha ajralishi)"
    ],
    fractureRiskUz: "Balandlikdan yiqilish yoki jiddiy yo'l-transport hodisalarida tos halqasining uzilishi va kuchli ichki qon ketish xavfi juda yuqori.",
    position: [0, 0.75, 0.02],
    color: '#cbd5e1'
  },
  {
    id: 'femur',
    nameUz: 'Son suyagi',
    latinName: 'Os femoris (Femur)',
    region: 'oyoq',
    regionUz: 'Pastki erkin oyoq',
    locationUz: "Tos suyagi va tizza bo'g'imi oralig'ida joylashgan inson tanasidagi eng uzun, eng qalin va eng baquvvat naysimon suyak.",
    structureUz: "Yuqori sharsimon boshcha (caput femoris), ingichka bo'yincha (collum femoris), katta va kichik ko'stlar (trochanter), uzun silindrsimon tana hamda pastki tizza bo'g'im do'mboqlaridan (kondiluslar) tashkil topgan.",
    functionsUz: [
      "Tik turganda butun tana massasini ko'tarish (1.5 tonnagacha bo'lgan siquvchi yuklamaga bardosh bera oladi)",
      "Yurish, yugurish, sakrash paytida asosiy richag mexanizmi vazifasini bajarish",
      "Chanoq-son va tizza bo'g'imlarining asosiy bo'g'im yuzasini hosil qilish",
      "Qizil suyak iligining katta zaxirasini o'zida saqlash"
    ],
    diseasesUz: [
      "Son suyagi bo'yinchasining sinishi (keksa yoshdagi odamlarda osteoporoz tufayli yuzaga keluvchi xavfli jarohat)",
      "Koksartroz (bo'g'im tog'ayining yemirilishi)",
      "Son boshchasining aseptik nekrozi"
    ],
    fractureRiskUz: "Keksa odamlar oddiy yiqilganda ham son bo'yinchasi sinishi mumkin. Bu uzoq vaqt yotib qolishga va asoratlarga olib kelishi sababli zudlik bilan endoprotezlash talab etiladi.",
    position: [0.22, -0.65, 0.05],
    color: '#e2e8f0'
  },
  {
    id: 'patella',
    nameUz: "Tizza qopqog'i",
    latinName: 'Patella',
    region: 'oyoq',
    regionUz: 'Tizza sohasi',
    locationUz: "Tizza bo'g'imining oldingi yuzasida, sonning to'rt boshli mushagi payi ichida joylashgan eng yirik sesamosimon suyak.",
    structureUz: "Oldingi yuzasi g'adir-budur, orqa yuzasi esa son suyagining tizza yuzasiga mos keluvchi silliq tog'ay bilan qoplangan yassi dumaloq suyak.",
    functionsUz: [
      "Sonning to'rt boshli mushagi tortish kuchini 30 foizgacha oshiruvchi tabiiy blok (richag) vazifasini o'tash",
      "Tizza bo'g'imini to'g'ridan-to'g'ri oldingi zarbalardan himoyalash",
      "Tizzani bukish va yozish paytida payning haddan tashqari ishqalanishining oldini olish"
    ],
    diseasesUz: [
      "Patella sinishi va parchalanishi",
      "Tizza qopqog'i chiqishi (patella dislokatsiyasi)",
      "Xondromalyatsiya (tog'ayning yumshab yemirilishi — 'yuguruvchi tizzasi')"
    ],
    fractureRiskUz: "Bukulgan tizza bilan to'g'ridan-to'g'ri yerga yoki avtomobil paneliga urilganda.",
    position: [0.22, -1.35, 0.2],
    color: '#cbd5e1'
  },
  {
    id: 'tibia_fibula',
    nameUz: 'Katta va kichik boldir suyaklari',
    latinName: 'Tibia et Fibula',
    region: 'oyoq',
    regionUz: 'Boldir sohasi',
    locationUz: "Tizza bo'g'imidan to'piq bo'g'imigacha joylashgan boldir suyaklari.",
    structureUz: "Katta boldir suyagi (Tibia) — ichki tomonda yotuvchi baquvvat uch qirrali naysimon suyak (yuklamaning 90%ini ko'taradi); kichik boldir suyagi (Fibula) — tashqi tomondagi ingichka naysimon suyak.",
    functionsUz: [
      "Tana og'irligini tizzadan to'piq va oyoq panjasiga uzatish",
      "To'piq (oshig'-boldir) bo'g'imining ichki va tashqi to'pig'ini (malleolus) hosil qilish",
      "Boldir va oyoq panjasini harakatlantiruvchi mushaklar uchun tayanch maydoni yaratish"
    ],
    diseasesUz: [
      "Katta boldir suyagi sinishi (ochiq sinishlar eng ko'p uchraydi, chunki uning old qirrasi bevosita teri ostida yotadi)",
      "To'piq sinishlari (Distorsion sinishlar)",
      "Boldir suyaklari osteomiyeliti"
    ],
    fractureRiskUz: "Futbol yoki qishki sport turlarida boldirga qattiq zarba tushganda yoki oyoq qayrilib ketganda to'piq sinadi.",
    position: [0.22, -2.15, 0.05],
    color: '#e2e8f0'
  },
  {
    id: 'foot_bones',
    nameUz: 'Oyoq panja suyaklari',
    latinName: 'Ossa pedis',
    region: 'oyoq',
    regionUz: 'Oyoq panjasi',
    locationUz: "Boldir suyaklaridan pastda joylashgan, yer bilan bevosita aloqada bo'luvchi qism.",
    structureUz: "26 ta suyakdan iborat: 7 ta kaftusti suyagi (oshig', tovon, qayiqsimon va boshqalar), 5 ta kaft suyagi va 14 ta barmoq falangalari. Suyaklar bo'ylama va ko'ndalang gumbazlar (arkalar) hosil qilib birlashgan.",
    functionsUz: [
      "Insonning tik turishi va yurishida muvozanat va tayanch bo'lish",
      "Qadam tashlaganda tana og'irligini elastik tarzda amortizatsiya qilish (gumbazlar orqali)",
      "Tovon suyagi orqali birinchi zarbani qabul qilish"
    ],
    diseasesUz: [
      "Yassi oyoqlik (Platofodiya — gumbazlarning tekislanib qolishi)",
      "Tovon 'shporasi' (plantar fassiit)",
      "Hallux valgus (bosh barmoq suyagining tashqariga bo'rtib chiqishi)",
      "Tovon suyagi sinishi (balandlikdan to'g'ri oyoqqa tushganda)"
    ],
    fractureRiskUz: "Og'ir yuk oyoq ustiga tushganda kaft suyaklari, balanddan sakraganda tovon suyagi sinishi mumkin.",
    position: [0.22, -2.95, 0.2],
    color: '#cbd5e1'
  }
];
