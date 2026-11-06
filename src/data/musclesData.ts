import { MuscleData } from '../types/anatomy';

export const MUSCLES_DATA: MuscleData[] = [
  {
    id: 'facial_muscles',
    nameUz: 'Yuz va mimika mushaklari',
    latinName: 'Musculi faciei',
    group: 'yuz',
    groupUz: 'Kalla va yuz',
    locationUz: "Bosh va yuz suyagining oldingi sohasida, bevosita teri ostida joylashgan.",
    functionUz: "Inson his-tuyg'ularini (quvonch, qayg'u, hayrat, g'azab) mimika orqali aks ettirish, ko'z va og'iz teshiklarini ochish-yopish, chaynash va nutq artikulyatsiyasida ishtirok etish.",
    biomechanicsUz: "Mimika mushaklari suyakdan boshlanib teriga yopishadi (boshqa mushaklardan farqli ravishda fatsiyaga ega emas). Chaynash mushaklari (chakka, chaynov) esa pastki jag'ni kuchli harakatga keltiradi.",
    commonInjuriesUz: [
      "Yuz nervi nevriti (Bell falaji — yuz yarmining osilib qolishi)",
      "Mimika mushaklarining spazmi (tiklar)",
      "Bruksizm (uyquda jag'larni g'ijirlatish va chaynash mushaklarining o'ta taranglashishi)"
    ],
    position: [0, 4.15, 0.45]
  },
  {
    id: 'neck_muscles',
    nameUz: "To'sh-o'mrov-so'rg'ichsimon mushak",
    latinName: 'Musculus sternocleidomastoideus',
    group: 'boyin',
    groupUz: "Bo'yin sohasi",
    locationUz: "Bo'yinning yon yuzasida diagonal bo'ylab joylashgan kuchli mushak tasmasi.",
    functionUz: "Boshni bir tomonga burish va qarama-qarshi tomonga ko'tarish; ikki tomonlama qisqarganda boshni orqaga tashlash yoki oldinga egish; chuqur nafas olishda yordamchi nafas mushagi bo'lib xizmat qilish.",
    biomechanicsUz: "To'sh suyagi dastasi va o'mrovdan boshlanib, chakka suyagining so'rg'ichsimon o'simtasiga birikadi.",
    commonInjuriesUz: [
      "Krivosheya (qiyshiqbo'yinlik — mushakning tug'ma yoki orttirilgan qisqarishi)",
      "Bo'yin mushaklarining miositi (shamollash natijasida boshni burib bo'lmay qolishi)",
      "Avtohalokatdagi 'qamchisimon' (whiplash) travma"
    ],
    position: [0.15, 3.45, 0.2]
  },
  {
    id: 'chest_muscles',
    nameUz: "Katta ko'krak mushagi",
    latinName: 'Musculus pectoralis major',
    group: 'kokrak',
    groupUz: "Ko'krak sohasi",
    locationUz: "Ko'krak qafasining oldingi yuqori yuzasini qoplab turuvchi yirik yelpig'ichsimon mushak.",
    functionUz: "Qo'lni gavdaga yaqinlashtirish (adduksiya), ichkariga burish (pronatsiya) va oldinga ko'tarish; chuqur nafas olishda qovurg'alarni ko'tarishga yordam berish.",
    biomechanicsUz: "O'mrov, to'sh suyagi va qovurg'a tog'aylaridan boshlanib, yelka suyagining katta do'mbog'i qirrasiga buralib birikadi.",
    commonInjuriesUz: [
      "Ko'krak mushagi payining uzilishi (og'ir shtangani ko'krakdan siqib ko'tarishda)",
      "Mushak mikroyirtilishlari va kuchli zo'riqish og'rig'i (krepatura)"
    ],
    antagonistUz: "Keng orqa mushagi va orqa deltasimon mushak",
    position: [0.25, 2.75, 0.35]
  },
  {
    id: 'back_muscles',
    nameUz: 'Keng orqa va Trapetsiyasimon mushak',
    latinName: 'Latissimus dorsi & Trapezius',
    group: 'orqa',
    groupUz: 'Orqa gavda',
    locationUz: "Orqaning yuqori (trapetsiyasimon) va pastki (keng orqa) sohalarini egallagan eng yirik sirtqi mushaklar.",
    functionUz: "Qo'lni orqaga va pastga tortish (turnikda tortilish harakati), yelkalarni ko'tarish va tushirish, kuraklarni bir-biriga yaqinlashtirish, qomatni tik tutish.",
    biomechanicsUz: "Umurtqalar o'tkir o'simtalaridan boshlanib kurakka va yelka suyagiga birikadi; gavdaning eng kuchli tortuvchi mushak guruhidir.",
    commonInjuriesUz: [
      "Orqa mushaklarining miofassial sindromi (trigger nuqtalar va qotib qolish)",
      "Og'ir yukni egilib ko'targanda orqa paylarining cho'zilishi",
      "Komp'yuterda noto'g'ri o'tirish tufayli trapetsiya mushaklarining surunkali spazmi"
    ],
    position: [0, 2.45, -0.25]
  },
  {
    id: 'abs_muscles',
    nameUz: "Qorin to'g'ri mushagi (Press)",
    latinName: 'Musculus rectus abdominis',
    group: 'qorin',
    groupUz: 'Qorin sohasi',
    locationUz: "Qorinning oldingi devorida oq chiziqning ikki yonida vertikal cho'zilgan uzun tasma shaklidagi mushak.",
    functionUz: "Gavdani oldinga egish (umurtqani bukish), qorin ichki bosimini ushlab turish (qorin pressi — defekatsiya, tug'ruq, nafas chiqarishda) va ichki organlarni o'z o'rnida saqlash.",
    biomechanicsUz: "To'sh suyagi xanjarsimon o'simtasi va 5-7 qovurg'alardan boshlanib qov suyagiga birikadi. 3-4 ta ko'ndalang pay to'siqlari bilan bo'lingan (mashhur 'kubiklar').",
    commonInjuriesUz: [
      "Qorin oq chizig'i churrasi va kindik churrasi",
      "Qorin to'g'ri mushaklari diastazi (ayniqsa tug'ruqdan keyin ikki mushakning bir-biridan uzoqlashishi)",
      "Mushak tolalarining zo'riqib cho'zilishi"
    ],
    antagonistUz: "Umurtqani yozuvchi chuqur orqa mushaklari",
    position: [0, 1.45, 0.32]
  },
  {
    id: 'arm_muscles',
    nameUz: 'Yelkaning ikki boshli va uch boshli mushaklari (Biceps & Triceps)',
    latinName: 'Musculus biceps brachii & Triceps brachii',
    group: 'qol',
    groupUz: "Qo'llar",
    locationUz: "Yelkaning oldingi (biceps) va orqa (triceps) sohasida joylashgan antagonist mushaklar.",
    functionUz: "Biceps — tirsak bo'g'imida qo'lni bukish va bilakni tashqariga burish (supinatsiya); Triceps — tirsak bo'g'imida qo'lni to'g'rilash (yozish) vazifasini bajaradi.",
    biomechanicsUz: "Biceps kurakdan boshlanib bilak suyagi do'mbog'iga birikadi; triceps esa tirsak o'simtasiga mustahkam pay bilan ulanadi.",
    commonInjuriesUz: [
      "Bicepsning uzun boshi payining yallig'lanishi (tendinit) yoki uzilishi ('Popay sindromi')",
      "Triceps payining tirsakdan uzilishi",
      "Kuchsiz isinishdan so'ng to'satdan harakatda pay cho'zilishi"
    ],
    position: [0.65, 2.3, 0.08]
  },
  {
    id: 'leg_muscles',
    nameUz: "Sonning to'rt boshli mushagi (Kvadriceps)",
    latinName: 'Musculus quadriceps femoris',
    group: 'oyoq',
    groupUz: 'Oyoqlar',
    locationUz: "Sonning butun oldingi va yon yuzalarini egallagan inson tanasidagi eng massiv va kuchli mushak.",
    functionUz: "Tizza bo'g'imida oyoqni yozish (to'g'rilash), sonni oldinga ko'tarish, tik turish va yurishda tizzaning bukilmasdan barqaror turishini ta'minlash.",
    biomechanicsUz: "To'rtta kallakdan iborat (to'g'ri, lateral, medial va oraliq keng mushaklar). Ular pastda umumiy baquvvat pay hosil qilib, tizza qopqog'ini o'rab katta boldir suyagi do'mbog'iga birikadi.",
    commonInjuriesUz: [
      "Kvadriceps tolalari yirtilishi (futbolchilarda to'p tepganda yoki sprint startida)",
      "Tizza qopqog'i xususiy boylamining tendiniti ('sakrovchi tizzasi')",
      "Mushakning qattiq krampisi (tortishishi)"
    ],
    antagonistUz: "Sonning orqa guruhi (biceps femoris, yarim payli, yarim pardali mushaklar)",
    position: [0.22, -0.65, 0.18]
  },
  {
    id: 'calf_muscles',
    nameUz: 'Boldirning uch boshli mushagi va Axill payi',
    latinName: 'Musculus triceps surae & Tendo calcaneus (Achillis)',
    group: 'oyoq',
    groupUz: 'Boldir sohasi',
    locationUz: "Boldirning orqa yuzasida joylashgan; yuzaki ikki boshli boldir (gastrocnemius) va chuqur kambalasimon (soleus) mushaklardan iborat.",
    functionUz: "Oyoq panjasini pastga bukish (oyoq uchida turish imkoniyati), yurish va yugurishda tanani oldinga itarish, venoz qonni oyoqlardan yurakka qaytarish ('mushak pompasi').",
    biomechanicsUz: "Son va boldir suyaklaridan boshlanib, inson tanasidagi eng baquvvat pay — Axill payi orqali tovon suyagi do'mbog'iga mustahkam birikadi.",
    commonInjuriesUz: [
      "Axill payining to'liq uzilishi (to'satdan sakraganda 'o'q tekkan kabi' qarsillash bilan kechadi)",
      "Axillobursit va tendinopatiya",
      "Kechasi boldir mushagining og'riqli tortishishi (magniy yoki kaliy yetishmovchiligida)"
    ],
    position: [0.22, -2.15, -0.15]
  }
];
