import { OrganData } from '../types/anatomy';

export const ORGANS_DATA: OrganData[] = [
  {
    id: 'brain',
    nameUz: 'Bosh miya',
    latinName: 'Encephalon',
    system: 'asab',
    systemNameUz: 'Nerv tizimi',
    position: [0, 4.25, 0.05],
    scale: [0.65, 0.65, 0.75],
    color: '#f9a8d4', // soft pink
    nearbyOrgansUz: "Kalla suyagi qutisida joylashgan; ostki qismi miya ustuni orqali orqa miyaga ulanadi, old tomondan peshona suyagi va ko'z kosalari bilan chegaralangan.",
    functionsUz: [
      "Barcha organizm a'zolari va tizimlari faoliyatini boshqarish va integratsiyalash",
      "Ong, tafakkur, xotira, nutq va his-tuyg'ularni shakllantirish",
      "Beshala sezgi organlaridan (ko'rish, eshitish, hid, ta'm, teri sezgisi) kelayotgan signallarni tahlil qilish",
      "Ixtiyoriy va g'ayriixtiyoriy harakatlarni muvofiqlashtirish",
      "Gomeostaz (tana harorati, qon bosimi, gormonal muvozanat)ni ushlab turish"
    ],
    howItWorksUz: "Bosh miya 86 milliarddan ortiq neyronlardan iborat bo'lib, ular son-sanoqsiz sinapslar orqali bir-biriga elektr va kimyoviy (neyromediatorlar) impulslarini uzatadi. Yarimsharlar po'stlog'i oliy asab faoliyatini boshqarsa, miyacha muvozanatni, miya ustuni esa nafas olish va yurak urishi kabi hayotiy reflekslarni nazorat qiladi.",
    normalMetricsUz: [
      { label: "O'rtacha vazni", value: "1300 – 1400", unit: "gramm" },
      { label: "Tana massasidagi ulushi", value: "2", unit: "%" },
      { label: "Kislorod iste'moli", value: "20", unit: "% (butun tana kislorodidan)" },
      { label: "Qon oqimi hajmi", value: "750", unit: "ml/daqiqa" },
      { label: "Neyronlar soni", value: "~86", unit: "milliard" }
    ],
    diseasesUz: [
      "Bosh miya qon aylanishining o'tkir buzilishi (Insult)",
      "Altsgeymer kasalligi va demensiya",
      "Epilepsiya (tutqanoq xurujlari)",
      "Parkinson kasalligi",
      "Ensefalit va meningit",
      "Bosh miya shishlari (glioma, meningioma)"
    ],
    symptomsUz: [
      "Surunkali yoki kuchli to'satdan bosh og'rig'i",
      "Bosh aylanishi, muvozanatning yo'qolishi",
      "Xotira pasayishi va nutqning buzilishi",
      "Qo'l yoki oyoqda holsizlik, uvushish",
      "Ko'rishning xiralashishi yoki ikkita ko'rinishi"
    ],
    riskFactorsUz: [
      "Arterial gipertoniya (yuqori qon bosimi)",
      "Chekish va spirtli ichimliklarni suiiste'mol qilish",
      "Surunkali psixo-emotsional stress va uyqusizlik",
      "Ateroskleroz va yuqori xolesterin",
      "Bosh miya jarohatlari"
    ],
    preventionUz: [
      "Qon bosimi va qondagi glyukoza miqdorini doimiy nazorat qilish",
      "Kuniga kamida 7-8 soat sifatli uxlash",
      "Muntazam intellektual faollik (kitob o'qish, tillar o'rganish)",
      "O'rta yer dengizi parhezi (ko'katlar, yong'oqlar, zaytun moyi, baliq)",
      "Muntazam aerob jismoniy mashqlar"
    ],
    factsUz: [
      "Miya to'qimasining o'zida og'riq retseptorlari yo'q, shuning uchun neyroxirurgik operatsiyalar ko'pincha bemor uyg'oq holda o'tkaziladi.",
      "Inson miyasi uyg'oq paytida taxminan 20-25 vatt elektr energiyasi ishlab chiqaradi — bu kichik LED chiroqni yoqishga yetarli.",
      "Miya tarkibining qariyb 75 foizi suvdan iborat bo'lib, atigi 2% suvsizlanish ham xotira va diqqatni pasaytiradi."
    ],
    cameraTarget: [0, 4.25, 0.05],
    cameraPosition: [0, 4.3, 1.8]
  },
  {
    id: 'heart',
    nameUz: 'Yurak',
    latinName: 'Cor',
    system: 'qon_aylanish',
    systemNameUz: 'Qon aylanish tizimi',
    position: [0.12, 2.5, 0.28],
    scale: [0.45, 0.48, 0.42],
    color: '#e11d48', // vibrant crimson
    nearbyOrgansUz: "Ko'krak qafasining o'rta qismida, chap tomonga siljigan holda, ikki o'pka o'rtasida (mediastinum) va to'sh suyagi ortida, pastdan diafragmaga tayangan holda joylashgan.",
    functionsUz: [
      "Tiriklik davomida to'xtovsiz qon haydash nasosi vazifasini bajarish",
      "Kislorod va ozuqa moddalarini barcha a'zo va to'qimalarga yetkazish",
      "To'qimalardan karbonat angidrid va metabolizm qoldiqlarini chiqarish yo'llariga haydash",
      "Organizmda qon bosimini barqaror saqlash",
      "Kichik va katta qon aylanish doiralari o'rtasida qon harakatini muvofiqlashtirish"
    ],
    howItWorksUz: "Yurak 4 ta kameradan iborat: o'ng va chap bo'lmachalar, o'ng va chap qorinchalar. O'ng qorincha venoz qonni o'pka arteriyasi orqali o'pkalarga (tozalanish uchun) haydaydi; chap qorincha esa kislorodga boy qonni aorta orqali butun vujudga kuchli bosim bilan tarqatadi. Sinus tugunidagi elektr impulslari qisqarish ritmini boshqaradi.",
    normalMetricsUz: [
      { label: "Tinch holatdagi puls", value: "60 – 90", unit: "urish/daqiqa" },
      { label: "Sistolik / diastolik bosim", value: "120 / 80", unit: "mm simob ustuni" },
      { label: "Bir sutkadagi zarbalar soni", value: "~100 000", unit: "marta" },
      { label: "Bir sutkada haydaladigan qon", value: "7 000 – 10 000", unit: "litr" },
      { label: "O'rtacha vazni", value: "250 – 350", unit: "gramm" }
    ],
    diseasesUz: [
      "Yurak ishemik kasalligi (YIK) va Stenokardiya",
      "Miokard infarkti (yurak xuruji)",
      "Arterial gipertoniya (gipertonik kasallik)",
      "Yurak yetishmovchiligi (surunkali va o'tkir)",
      "Aritmiyalar (miltillovchi aritmiya, taxikardiya)",
      "Yurak poroklari (tug'ma va orttirilgan)"
    ],
    symptomsUz: [
      "Ko'krak qafasi orqasida siquvchi yoki bosuvchi og'riq (chap qo'lga, yelkaga beruvchi)",
      "Hatto yengil jismoniy harakatda yoki tinch holatda nafas qisishi (hansirash)",
      "Yurakning tartibsiz urishi yoki to'xtab qolgandek tuyulishi",
      "Oyoqlarda va to'piqlarda shishlar paydo bo'lishi",
      "To'satdan kuchli terlash, hushdan ketish holatlari"
    ],
    riskFactorsUz: [
      "Tamaki chekish (qon tomirlarni toraytiradi va endoteliyni shikastlaydi)",
      "Kamharakat turmush tarzi (gipodinamiya)",
      "Ortiqcha tana vazni va semizlik",
      "Taomnomada tuz va to'yingan yog'larning ko'pligi",
      "Qondagi yuqori xolesterin va qandli diabet"
    ],
    preventionUz: [
      "Kuniga kamida 30-40 daqiqa tez yurish yoki yugurish",
      "Tuz iste'molini kuniga 5 grammgacha cheklash",
      "Meva, sabzavotlar va dukkakli mahsulotlarni ko'paytirish",
      "Yilda bir marta EKG va kardiolog ko'rigidan o'tish",
      "Tamaki va spirtli mahsulotlardan butunlay voz kechish"
    ],
    factsUz: [
      "Yurak inson tanasidan tashqarida ham, kislorod mavjud bo'lsa, o'zining mustaqil elektr o'tkazuvchi tizimi tufayli urishda davom etishi mumkin.",
      "Yurak hosil qiladigan gidravlik bosim qonni 9 metr balandlikkacha purkashga qodir.",
      "Inson umri davomida (o'rtacha 75 yil) yurak 2.5 milliard martadan ortiq qisqaradi."
    ],
    cameraTarget: [0.12, 2.5, 0.28],
    cameraPosition: [0.2, 2.6, 1.4]
  },
  {
    id: 'lungs',
    nameUz: "O'pkalar",
    latinName: 'Pulmones',
    system: 'nafas',
    systemNameUz: 'Nafas olish tizimi',
    position: [-0.02, 2.55, 0.15],
    scale: [1.15, 0.95, 0.65],
    color: '#38bdf8', // crisp sky blue
    nearbyOrgansUz: "Ko'krak qafasining ikki yon tomonida, yurak va yirik qon tomirlar atrofida joylashgan; pastdan diafragmaga taqaladi, qovurg'alar va to'sh suyagi bilan himoyalangan.",
    functionsUz: [
      "Tashqi nafas olish: havoda kislorodni o'zlashtirish va qonga o'tkazish",
      "Metabolizm natijasida hosil bo'lgan karbonat angidrid (CO2)ni tashqariga chiqarish",
      "Qonning kislota-ishqor (pH) muvozanatini tezkor tartibga solish",
      "Havo yo'llarini mayda chang, mikroblar va begona zarralardan tozalash",
      "Tana haroratini issiqlik chiqarish orqali boshqarishda qatnashish"
    ],
    howItWorksUz: "O'pkalarga havo traxeya va bronxlar orqali kiradi. Bronxlar daraxtsimon shoxlanib, oxiri 300-500 millionta mikroskopik pufakchalar — alveolalar bilan tugaydi. Alveolalar yupqa kapillyarlar tarmog'i bilan o'ralgan bo'lib, bu yerda diffuziya qonuni bo'yicha gazlar almashinuvi yuz beradi.",
    normalMetricsUz: [
      { label: "Tinch holatdagi nafas chastotasi", value: "12 – 18", unit: "marta/daqiqa" },
      { label: "O'pkaning tiriklik sig'imi", value: "3.5 – 5.0", unit: "litr" },
      { label: "Alveolalar umumiy yuzasi", value: "70 – 100", unit: "m² (tennis korti hajmi)" },
      { label: "Bir sutkada nafas olingan havo", value: "10 000 – 12 000", unit: "litr" },
      { label: "O'ng o'pka bo'laklari soni", value: "3 ta", unit: "(chap o'pkada 2 ta)" }
    ],
    diseasesUz: [
      "Pnevmoniya (o'pka to'qimasining yallig'lanishi)",
      "Bronxial astma (surunkali allergik yallig'lanish)",
      "Surunkali obstruktiv o'pka kasalligi (KO'AL / COPD)",
      "O'pka tuberkulyozi (sil kasalligi)",
      "O'pka saratoni (bronxogen karsinoma)",
      "Plevrit va pnevmotoraks"
    ],
    symptomsUz: [
      "Uzoq davom etuvchi yo'tal (quruq yoki balg'amli)",
      "Nafas qisishi va havoning yetishmaslik hissi",
      "Nafas olayotganda ko'krakda xirillash yoki og'riq",
      "Qon tupurish (gemoptizis)",
      "Bosh aylanishi va lablar/tirnoqlarning ko'karishi (sianoz)"
    ],
    riskFactorsUz: [
      "Faol va nofaol (passiv) tamaki chekish",
      "Sanoat changlari, kimyoviy aerozollar va havoning ifloslanishi",
      "Surunkali respirator infeksiyalar",
      "Kuchli sovuq qotish va immunitet pasayishi"
    ],
    preventionUz: [
      "Chekishni to'liq tashlash",
      "Toza havoda sayr qilish va xonalarni tez-tez shamollatish",
      "Muntazam chuqur nafas mashqlari (diafragmal nafas olish)",
      "Gripp va pnevmokokkga qarshi rejali emlashlar",
      "Zararli korxonalarda respiratorlardan foydalanish"
    ],
    factsUz: [
      "O'pkalar inson tanasidagi suv ustida cho'kmasdan suzib yura oladigan yagona ichki organdir, chunki ularning ichida doimo ma'lum miqdorda havo qoladi.",
      "O'ng o'pka chap o'pkaga qaraganda biroz kattaroq va og'irroqdir, chunki chap o'pka yonida yurak joylashgani sababli unda yurak o'ymasi (incisura cardiaca) mavjud.",
      "Alveolalar yoyib chiqilsa, ularning umumiy yuzasi katta tennis kortini to'liq qoplagan bo'lardi."
    ],
    cameraTarget: [-0.02, 2.55, 0.15],
    cameraPosition: [0, 2.6, 1.7]
  },
  {
    id: 'liver',
    nameUz: 'Jigar',
    latinName: 'Hepar',
    system: 'ovqat_hazm',
    systemNameUz: 'Ovqat hazm qilish tizimi',
    position: [-0.25, 1.8, 0.22],
    scale: [0.75, 0.55, 0.52],
    color: '#b45309', // deep amber red-brown
    nearbyOrgansUz: "Qorin bo'shlig'ining yuqori o'ng sohasida (o'ng qovurg'a osti), diafragmaning ostida, o'ng buyrak, oshqozon va o'n ikki barmoqli ichak bilan yonma-yon joylashgan.",
    functionsUz: [
      "Metabolizm va detoksikatsiya: qondagi zaharli moddalar, dori qoldiqlari va toksinlarni zararsizlantirish",
      "O't suyuqligi (safro) ishlab chiqarib, yog'larni parchalash va hazm qilishga yordam berish",
      "Glikogen ko'rinishida glyukoza zaxirasini to'plash va qonda qand miqdorini ushlab turish",
      "Qon ivish omillari (protrombin, fibrinogen) va oqsil (albumin)larni sintez qilish",
      "A, D, E, K, B12 vitaminlari hamda temir moddasini to'plash deposi bo'lish"
    ],
    howItWorksUz: "Jigar ikki xil manbadan qon oladi: jigar arteriyasidan kislorodga boy qon, darvoza venasi (vena portae) orqali esa oshqozon-ichaklardan so'rilgan barcha ozuqa va moddalarga to'la qon keladi. Gepatotsitlar bu qonni mikroskopik lobulalar ichida filtrlaydi, saralaydi va tozalaydi.",
    normalMetricsUz: [
      { label: "O'rtacha og'irligi", value: "1.4 – 1.8", unit: "kg (eng katta ichki bez)" },
      { label: "Bir daqiqada filtrlaydigan qon", value: "1.4", unit: "litr" },
      { label: "Sutkalik o't suyuqligi", value: "800 – 1200", unit: "ml" },
      { label: "Bajaradigan biokimyoviy vazifalari", value: "500 dan ortiq", unit: "ta" }
    ],
    diseasesUz: [
      "Virusli gepatitlar (A, B, C, D)",
      "Jigar yog' bosishi (steatoz / noalkogol yog' kasalligi)",
      "Jigar sirrozi",
      "Gepatotsellyulyar karsinoma (jigar saratoni)",
      "Toksik va dorilar chaqirgan gepatit"
    ],
    symptomsUz: [
      "O'ng qovurg'a ostida og'irlik yoki simillovchi og'riq",
      "Teri va ko'z oqi sarg'ayishi (sariqlik / ikteriya)",
      "Doimiy holsizlik, charchoq va ishtahasizlik",
      "Siydik rangining to'q choy rangiga kirishi, najas rangsizlanishi",
      "Qorinda suyuqlik to'planishi (astsit)"
    ],
    riskFactorsUz: [
      "Spirtli ichimliklarni ortiqcha iste'mol qilish",
      "Gigiyena qoidalariga rioya qilmaslik va noxavfsiz tibbiy/kosmetik muolajalar",
      "Semizlik, nosog'lom yog'li taomlar va gipodinamiya",
      "Jigar uchun zaharli dorilarni nazoratsiz qabul qilish"
    ],
    preventionUz: [
      "Gepatit B ga qarshi emlanish",
      "Spirtli ichimliklarni cheklash yoki butunlay to'xtatish",
      "Ratsionda yangi sabzavotlar, mevalar va yetarli tola (kletchatka) bo'lishi",
      "O'zboshimchalik bilan dori-darmon ichishdan saqlanish"
    ],
    factsUz: [
      "Jigar o'z to'qimasini qayta tiklash (regeneratsiya) bo'yicha rekordchi organdir: hatto uning 70-75 foizi kesib olib tashlansa ham, qolgan qismi bir necha oyda to'liq hajmiga qayta o'sishi mumkin.",
      "Jigar tanadagi eng issiq a'zo bo'lib, tinimsiz biokimyoviy reaksiyalar tufayli uning ichki harorati 40°C gacha yetadi."
    ],
    cameraTarget: [-0.25, 1.8, 0.22],
    cameraPosition: [-0.3, 1.8, 1.5]
  },
  {
    id: 'stomach',
    nameUz: 'Oshqozon',
    latinName: 'Gaster (Ventriculus)',
    system: 'ovqat_hazm',
    systemNameUz: 'Ovqat hazm qilish tizimi',
    position: [0.18, 1.75, 0.24],
    scale: [0.55, 0.52, 0.42],
    color: '#fb923c', // warm coral amber
    nearbyOrgansUz: "Qorin bo'shlig'ining yuqori chap sohasida, diafragma ostida; o'ng tomondan jigar, chap tomondan taloq, orqadan oshqozon osti bezi va pastdan ingichka ichak bilan chegaralangan.",
    functionsUz: [
      "Qabul qilingan oziq-ovqatni vaqtincha saqlash va aralashtirish",
      "Xlorid kislota (HCl) va pepsin fermenti ajratib oqsillarni dastlabki parchalash",
      "Ovqat orqali kirgan bakteriya va patogenlarni kuchli kislotali muhitda zararsizlantirish",
      "Ximus (yarim suyuq ovqat bo'tqasi) hosil qilib, uni qismlarga bo'lib ichakka uzatish",
      "B12 vitamini so'rilishi uchun zarur bo'lgan Kastl ichki omilini ishlab chiqarish"
    ],
    howItWorksUz: "Oshqozonning kuchli uch qavatli mushak devori to'lqinsimon peristaltik harakatlar qilib ovqatni ezadi va oshqozon shirasi bilan qorishtiradi. Shilliq qavat ajratadigan maxsus musin qatlami oshqozon devorini o'zining shafqatsiz kislotasi (pH 1.5 - 2.0) ta'siridan himoyalab turadi.",
    normalMetricsUz: [
      { label: "Bo'sh holatdagi hajmi", value: "0.5", unit: "litr" },
      { label: "To'lgan holatdagi sig'imi", value: "1.5 – 3.0", unit: "litr" },
      { label: "Oshqozon shirasi kislotaliligi (pH)", value: "1.5 – 2.0", unit: "juda yuqori kislotali" },
      { label: "Sutkalik oshqozon shirasi", value: "2.0 – 2.5", unit: "litr" },
      { label: "Ovqatning oshqozonda qolish vaqti", value: "2 – 4", unit: "soat" }
    ],
    diseasesUz: [
      "O'tkir va surunkali gastrit",
      "Oshqozon va 12 barmoqli ichak yara kasalligi",
      "Gastroezofageal reflyuks kasalligi (GERK / jig'ildoq qaynashi)",
      "Oshqozon poliplari va saratoni"
    ],
    symptomsUz: [
      "To'sh ostida (epigastriya) achishish, og'riq yoki og'irlik",
      "Jig'ildoq qaynashi (izjoga) va nordon kekirish",
      "Ko'ngil aynishi, qusish va tez to'yib qolish hissi",
      "Ishtahaning keskin pasayishi va vazn yo'qotish"
    ],
    riskFactorsUz: [
      "Helicobacter pylori bakteriyasi infeksiyasi",
      "Chekish, spirtli ichimliklar va o'ta achchiq, sho'r ovqatlar",
      "Nosteroid yallig'lanishga qarshi dorilarni (aspirin, ibuprofen) uzoq ichish",
      "Muntazam stress va noto'g'ri tartibsiz ovqatlanish"
    ],
    preventionUz: [
      "Kuniga 4-5 mahal kichik porsiyalarda rejim bilan ovqatlanish",
      "Taomni yaxshilab chaynab, shoshmasdan yutish",
      "H. pylori aniqlanganda o'z vaqtida davolash kursini o'tash",
      "Kechasi uxlashdan 2-3 soat oldin og'ir ovqat yemaslik"
    ],
    factsUz: [
      "Oshqozon shirasidagi xlorid kislotasi shu qadar kuchliki, u metall ustarani ham eritib yuborishga qodir.",
      "Oshqozonning ichki shilliq qavati o'zini o'zi yemirmasligi uchun har 3-5 kunda to'liq yangilanib turadi."
    ],
    cameraTarget: [0.18, 1.75, 0.24],
    cameraPosition: [0.25, 1.8, 1.45]
  },
  {
    id: 'kidneys',
    nameUz: 'Buyraklar',
    latinName: 'Renes',
    system: 'siydik_tanosil',
    systemNameUz: 'Siydik-tanosil tizimi',
    position: [0.0, 1.45, -0.15],
    scale: [0.95, 0.45, 0.35],
    color: '#9f1239', // deep ruby
    nearbyOrgansUz: "Qorin bo'shlig'i orqa devorida, retroperitoneal (qorin pardasi ortida), 12-ko'krak va 1-3-bel umurtqalari sohasida, orqa mushaklar va qovurg'alar himoyasida joylashgan. O'ng buyrak jigar bosimi tufayli chapdagidan bir oz pastroqda turadi.",
    functionsUz: [
      "Qonni tozalash va siydik hosil qilish orqali zaharli azot qoldiqlarini (mochevina, kreatinin) chiqarish",
      "Suv-tuz va elektrolitlar (natriy, kaliy, kalsiy, fosfor) muvozanatini aniq saqlash",
      "Qon bosimini tartibga soluvchi renin gormonini ishlab chiqarish",
      "Suyak iligida qizil qon tanachalari (eritrotsitlar) hosil bo'lishini rag'batlantiruvchi eritropoetin gormonini sintez qilish",
      "D vitaminini uning faol shakliga aylantirish"
    ],
    howItWorksUz: "Har bir buyrak 1 millionga yaqin mikroskopik filtratsiya birliklari — nefronlardan tashkil topgan. Nefronlardagi Malpigi koptokchalarida qon yuqori bosim ostida filtrlanib, birlamchi siydik hosil bo'ladi. Naychalar bo'ylab o'tganda kerakli moddalar (glyukoza, suv, minerallar) qonga qayta so'riladi (reabsorbsiya), qolgan ortiqcha chiqindilar esa ikkilamchi siydik sifatida siydik yo'li orqali qovuqqa oqadi.",
    normalMetricsUz: [
      { label: "Bir sutkada filtrlanadigan qon", value: "180 – 200", unit: "litr" },
      { label: "Sutkalik ajratiladigan siydik", value: "1.2 – 1.8", unit: "litr" },
      { label: "Bitta buyrak o'lchami", value: "10 – 12 x 5 – 6", unit: "sm" },
      { label: "Bitta buyrak og'irligi", value: "120 – 160", unit: "gramm" }
    ],
    diseasesUz: [
      "Buyrak tosh kasalligi (urolitiaz)",
      "Piyelonefrit (buyrak jomi va to'qimasi infeksiyasi)",
      "Glomerulonefrit (autoimmun koptokchalar yallig'lanishi)",
      "Surunkali buyrak yetishmovchiligi (SBY)",
      "Diabetik nefropatiya"
    ],
    symptomsUz: [
      "Bel sohasida simillovchi yoki o'tkir sanchiqli og'riq (buyrak sanchig'i)",
      "Siydik rangining o'zgarishi (qizarishi, loyqalanishi, ko'piklanishi)",
      "Ertalab ko'z ostida va yuzda shishlar paydo bo'lishi",
      "Peshob ajralishining og'riqli yoki tez-tez bo'lishi",
      "Nazorat qilib bo'lmaydigan yuqori arterial qon bosimi"
    ],
    riskFactorsUz: [
      "Yetarli miqdorda toza suv ichmaslik",
      "Ortiqcha tuz va oqsil iste'mol qilish",
      "Surunkali davolanmagan sistit va infeksiya o'choqlari",
      "Qandli diabet va uzoq davom etgan gipertoniya"
    ],
    preventionUz: [
      "Kuniga kamida 1.5-2 litr toza ichimlik suvi ichish",
      "Tuzni me'yorida iste'mol qilish",
      "Sovuq tosh yoki yerda o'tirmaslik, belni sovuqdan asrash",
      "Yilda bir marta umumiy siydik tahlili va UTT (UZI)dan o'tish"
    ],
    factsUz: [
      "Inson tanasidagi barcha qon har 4-5 daqiqada buyraklardan bir marta to'liq aylanib o'tadi — bu bir kunda qon 300 martadan ortiq filtrlanadi deganidir.",
      "Inson faqat bitta buyrak bilan ham bemalol 100% normal hayot kechirishi mumkin, chunki qolgan buyrak kattalashib ikkala buyrak yukini o'ziga oladi."
    ],
    cameraTarget: [0.0, 1.45, -0.15],
    cameraPosition: [0.0, 1.45, -1.5]
  },
  {
    id: 'pancreas',
    nameUz: 'Oshqozon osti bezi',
    latinName: 'Pancreas',
    system: 'endokrin',
    systemNameUz: 'Endokrin va hazm tizimi',
    position: [0.05, 1.65, 0.05],
    scale: [0.65, 0.22, 0.25],
    color: '#facc15', // amber-yellow
    nearbyOrgansUz: "Qorin bo'shlig'i orqa sohasida, oshqozonning ortida ko'ndalang joylashgan; boshi 12 barmoqli ichak taqasimon buralishi ichiga kirgan, dumi taloqqa yetib boradi.",
    functionsUz: [
      "Ekzokrin vazifa: kuchli hazm fermentlari (amilaza, lipaza, tripsin) ishlab chiqarib ingichka ichakka quyish",
      "Endokrin vazifa: qon shakarini tushiruvchi insulin gormonini sintez qilish",
      "Qon shakarini ko'taruvchi glyukagon gormonini ishlab chiqarish",
      "Oshqozondan kelayotgan kislotali ximusni neytrallash uchun bikarbonatlar ajratish"
    ],
    howItWorksUz: "Uning 98% to'qimasi hazm shirasi ishlab chiqaradigan asinarlardan iborat. Qolgan 2% to'qimasini esa Langergans orolchalari tashkil qiladi: ularning beta-hujayralari qondagi glyukoza ko'tarilganda darhol insulin ishlab chiqarib, hujayralarga qandni o'zlashtirish buyrug'ini beradi.",
    normalMetricsUz: [
      { label: "Uzunligi", value: "15 – 22", unit: "sm" },
      { label: "Og'irligi", value: "70 – 100", unit: "gramm" },
      { label: "Sutkalik pankreatik shira", value: "1.5 – 2.0", unit: "litr" },
      { label: "Och qoringa qon qandi", value: "3.9 – 5.6", unit: "mmol/l" }
    ],
    diseasesUz: [
      "1-tur va 2-tur qandli diabet",
      "O'tkir va surunkali pankreatit",
      "Pankreatik karsinoma (oshqozon osti bezi saratoni)",
      "Fermentativ yetishmovchilik"
    ],
    symptomsUz: [
      "Qorin yuqorisida belbog'simon (orqaga uzatiluvchi) o'tkir og'riq",
      "Ko'p chanqash, og'iz qurishi va tez-tez siyish (diabetda)",
      "Yog'li taomlarni hazm qila olmaslik, ko'ngil aynishi",
      "Vaznning sababsiz kamayishi"
    ],
    riskFactorsUz: [
      "Spirtli ichimliklarni ichish va tamaki chekish",
      "O't-tosh kasalligi (toshlar umumiy oqmani to'sib qo'yishi)",
      "Yog'li va qovurilgan ovqatlarni haddan tashqari ko'p iste'mol qilish",
      "Irsiy moyillik"
    ],
    preventionUz: [
      "Spirtli ichimliklardan butunlay saqlanish",
      "O'rtacha glikemik indeksli taomlarni tanlash, shakarni cheklash",
      "Ortiqcha vazn bilan kurashish",
      "O't pufagi toshlarini o'z vaqtida davolash"
    ],
    factsUz: [
      "Oshqozon osti bezi o'zi ajratadigan fermentlar shu qadar agressivki, agar oqim to'silib qolsa (o'tkir pankreatit), bez bir necha soat ichida o'zini o'zi eritib yuborishi mumkin (pankreonekroz).",
      "Insulin kashf qilingunga qadar (1921-yil), 1-tur qandli diabet bilan kasallangan odamlar uchun bu mutlaq o'lim hukmi hisoblangan."
    ],
    cameraTarget: [0.05, 1.65, 0.05],
    cameraPosition: [0.1, 1.7, 1.3]
  },
  {
    id: 'small_intestine',
    nameUz: 'Ingichka ichak',
    latinName: 'Intestinum tenue',
    system: 'ovqat_hazm',
    systemNameUz: 'Ovqat hazm qilish tizimi',
    position: [0.0, 1.05, 0.2],
    scale: [0.85, 0.75, 0.45],
    color: '#f87171', // soft coral red
    nearbyOrgansUz: "Qorin bo'shlig'ining markaziy qismida, yo'g'on ichak chambari bilan o'ralgan; yuqoridan oshqozon va oshqozon osti bezi, pastdan esa kichik tos a'zolari bilan chegaradosh.",
    functionsUz: [
      "Ozuqa moddalarining (oqsil, yog', uglevod, vitamin va minerallar) asosiy qismini to'liq parchalash va qonga so'rish",
      "Suv va elektrolitlarning katta qismini organizmga singdirish",
      "Ichak mikrobiotasi yordamida immun himoyani ta'minlash (Peyer pilakchalari)",
      "Hazm gormonlarini (sekretin, xolesistokinin) ishlab chiqarish",
      "Ximusni peristaltika orqali yo'g'on ichakka surish"
    ],
    howItWorksUz: "Uch bo'limdan iborat: 12 barmoqli ichak, och ichak va yonbosh ichak. Uning ichki yuzasi millionlab mikroskopik vorsinkalar (tukchalar) va mikrovorsinkalar bilan qoplangan. Bu struktura so'rilish yuzasini yuzlab barobarga oshiradi.",
    normalMetricsUz: [
      { label: "Umumiy uzunligi", value: "5 – 7", unit: "metr" },
      { label: "Ichki so'rilish yuzasi", value: "250 – 300", unit: "m²" },
      { label: "Ovqat o'tish vaqti", value: "3 – 5", unit: "soat" }
    ],
    diseasesUz: [
      "Enterit (ingichka ichak yallig'lanishi)",
      "Seliakiya (glyutenni ko'tara olmaslik)",
      "Kron kasalligi",
      "Ichak tutilishi (ileus)",
      "Disbakterioz (mikroflora buzilishi)"
    ],
    symptomsUz: [
      "Kindik atrofida to'lg'oqsimon og'riqlar",
      "Qorin dam bo'lishi (meteorizm) va g'uldirash",
      "Surunkali ich ketishi (diareya)",
      "Vazn yo'qotish va vitamin yetishmovchiligi belgilari (anemiya)"
    ],
    riskFactorsUz: [
      "Sifatsiz va infeksiyalangan oziq-ovqat mahsulotlari",
      "Antibiotiklarni pala-partish qabul qilish",
      "Irsiy autoimmun omillar"
    ],
    preventionUz: [
      "Toza, gigiyenik talablarga javob beradigan taomlarni iste'mol qilish",
      "Probiotik va prebiotiklarga boy tabiiy qatiq, kefir ichish",
      "Antibiotiklarni faqat shifokor ko'rsatmasi bilan qabul qilish"
    ],
    factsUz: [
      "Inson immunitet hujayralarining (limfotsitlar) 70 foizdan ortig'i aynan ingichka ichak devoridagi immun tugunlarida joylashgan.",
      "Ingichka ichakning ichki vorsinkalari doimiy ravishda silkinib, ozuqa moddalarini faol ushlaydi."
    ],
    cameraTarget: [0.0, 1.05, 0.2],
    cameraPosition: [0.0, 1.1, 1.4]
  },
  {
    id: 'large_intestine',
    nameUz: "Yo'g'on ichak",
    latinName: 'Intestinum crassum',
    system: 'ovqat_hazm',
    systemNameUz: 'Ovqat hazm qilish tizimi',
    position: [0.0, 1.1, 0.15],
    scale: [1.1, 1.05, 0.4],
    color: '#d97706', // ochre brown
    nearbyOrgansUz: "Ingichka ichak halqalarini gardishsimon o'rab turadi; ko'richak, ko'tariluvchi, ko'ndalang, tushuvchi, sigmoid va to'g'ri ichak bo'limlaridan iborat.",
    functionsUz: [
      "Hazm bo'lmagan ximusdan suv va tuzlarni qayta so'rib olib tanaga qaytarish",
      "Najas massasini shakllantirish, to'plash va defekatsiya orqali chiqarish",
      "Milliardlab foydali bakteriyalar yordamida K va B guruhi vitaminlarini sintez qilish",
      "Zaharli qoldiqlarni tanadan xavfsiz chiqarib yuborish"
    ],
    howItWorksUz: "Katta diametrga va o'ziga xos bo'rtmalarga (gaustralar) ega. Bu yerda harakat sekinroq kechadi. Foydali mikroflora qoldiq tolalarni fermentatsiya qiladi, suv so'rilib qattiq najas hosil bo'ladi va to'g'ri ichak tomon yo'naltiriladi.",
    normalMetricsUz: [
      { label: "Umumiy uzunligi", value: "1.5 – 1.8", unit: "metr" },
      { label: "Diametri", value: "5 – 8", unit: "sm" },
      { label: "Mikroorganizmlar soni", value: "30 – 50 trillion", unit: "bakteriya" },
      { label: "Tranzit vaqti", value: "12 – 48", unit: "soat" }
    ],
    diseasesUz: [
      "Kolorektal saraton (yo'g'on ichak saratoni)",
      "Yarali kolit",
      "Ta'sirlangan ichak sindromi (TIS)",
      "Divertikulyoz",
      "Gemorroy (bavosir)"
    ],
    symptomsUz: [
      "Ich qotishi yoki ich ketishining navbatlashishi",
      "Najasda qon yoki shilliq paydo bo'lishi",
      "Qorin pastki sohasida spastik og'riqlar",
      "Defekatsiyadan keyin ham ich to'liq bo'shamaganlik hissi"
    ],
    riskFactorsUz: [
      "Kletchatkasi kam, qayta ishlangan go'sht mahsulotlari ko'p parhez",
      "Surunkali ich qotishi va harakatsizlik",
      "Ichak poliplari va irsiy moyillik",
      "Chekish va yoshning 50 dan oshishi"
    ],
    preventionUz: [
      "Kuniga 25-30 gramm o'simlik tolasi (sabzavotlar, mevalar, kepakli non) iste'mol qilish",
      "Har kuni kamida 1.5 litr suv ichish",
      "50 yoshdan oshgach har 5-10 yilda skrining kolonoskopiyasidan o'tish"
    ],
    factsUz: [
      "Yo'g'on ichakdagi bakteriyalarning umumiy vazni 1.5 - 2 kilogrammgacha yetishi mumkin va ular organizm metabolizmida mustaqil organ kabi faoliyat ko'rsatadi.",
      "Inson ko'richagining pastki qismidagi chuvalchangsimon o'simta (appendiks) uzoq vaqt keraksiz qoldiq deb hisoblangan, lekin u aslida foydali bakteriyalarning tabiiy saqlash zaxirasi hisoblanadi."
    ],
    cameraTarget: [0.0, 1.1, 0.15],
    cameraPosition: [0.0, 1.1, 1.5]
  },
  {
    id: 'spleen',
    nameUz: 'Taloq',
    latinName: 'Splen (Lien)',
    system: 'qon_aylanish',
    systemNameUz: 'Qon yaratish va immun tizimi',
    position: [0.38, 1.85, 0.05],
    scale: [0.35, 0.45, 0.28],
    color: '#831843', // deep wine plum
    nearbyOrgansUz: "Chap qovurg'a osti sohasida, 9- va 11-qovurg'alar oralig'ida, oshqozon tubi va chap buyrak orqasida, diafragmaga yondosh joylashgan.",
    functionsUz: [
      "Qari va shikastlangan qizil qon tanachalarini (eritrotsitlar) tutib yo'q qilish ('eritrotsitlar qabristoni')",
      "Qondagi bakteriyalar va viruslarni filtrlab, immun javob qaytarish (B va T limfotsitlar proliferatsiyasi)",
      "Qon va trombotsitlar uchun muhim zaxira deposi bo'lish",
      "Gemoglobindan ajralgan temir moddasini qayta ishlashga jo'natish"
    ],
    howItWorksUz: "Qizil va oq pulpadan iborat. Qizil pulpa qonni filtrlaydi va eskirgan qon hujayralarini makrofaglar orqali parchalaydi; oq pulpa esa patogenlarga qarshi antitanachalar ishlab chiqaruvchi limfoid to'qimadir.",
    normalMetricsUz: [
      { label: "Uzunligi", value: "11 – 13", unit: "sm" },
      { label: "Kengligi", value: "6 – 8", unit: "sm" },
      { label: "O'rtacha vazni", value: "150 – 200", unit: "gramm" }
    ],
    diseasesUz: [
      "Splenomegaliya (taloq kattalashishi)",
      "Taloq yorilishi (avtohalokat yoki qorin travmasida)",
      "Taloq infarkti",
      "Gipersplenizm (hujayralarni me'yordan ortiq yemirishi)"
    ],
    symptomsUz: [
      "Chap qovurg'a ostida og'irlik va to'lib ketish hissi",
      "Chap yelkaga tarqaluvchi og'riq",
      "Kichik jarohatlarda ham tez ko'karishlar va qon ketishga moyillik"
    ],
    riskFactorsUz: [
      "Qorin qismiga tushgan to'mtoq mexanik jarohatlar",
      "Bezgak, mononukleoz kabi og'ir infeksiyalar",
      "Jigar sirrozida darvoza venasi bosimining oshishi"
    ],
    preventionUz: [
      "Sport mashg'ulotlarida himoya vositalaridan foydalanish",
      "Yuqumli kasalliklarni o'z vaqtida davolash",
      "Taloq kattalashgan davrda og'ir kontakt sport turlaridan vaqtincha tiyilish"
    ],
    factsUz: [
      "Og'ir jismoniy yugurish boshlanganda chap biqinda paydo bo'ladigan og'riq — bu taloqning qisqarib, o'z zaxirasidagi qo'shimcha qonni umumiy qon oqimiga favqulodda chiqarib yuborishi natijasidir.",
      "Taloq jarohat tufayli jarrohlik yo'li bilan olib tashlansa ham (splenektomiya), inson yashay oladi — uning qon tozalash vazifalarini jigar va suyak iligi o'z zimmasiga oladi."
    ],
    cameraTarget: [0.38, 1.85, 0.05],
    cameraPosition: [0.45, 1.9, 1.2]
  },
  {
    id: 'gallbladder',
    nameUz: "O't pufagi",
    latinName: 'Vesica fellea',
    system: 'ovqat_hazm',
    systemNameUz: 'Ovqat hazm qilish tizimi',
    position: [-0.18, 1.62, 0.28],
    scale: [0.22, 0.32, 0.22],
    color: '#15803d', // deep emerald gall green
    nearbyOrgansUz: "Jigarning pastki yuzasidagi o't pufagi chuqurchasida yotadi; o'n ikki barmoqli ichak va yo'g'on ichakning o'ng burchagi bilan qo'shni.",
    functionsUz: [
      "Jigar uzluksiz ishlab chiqaradigan o't suyuqligini to'plash va 5-10 barobargacha quyultirish",
      "Yog'li taom iste'mol qilinganda kuchli qisqarib, safroni 12 barmoqli ichakka purkash",
      "Yog'larning mayda tomchilarga bo'linishiga (emulsiya) va hazm bo'lishiga ko'maklashish"
    ],
    howItWorksUz: "Ovqat oshqozondan ichakka o'tganda xolesistokinin gormoni qonga ajraladi. Bu gormon o't pufagi devorini qisqartiradi va Oddi sfinkterini bo'shashtiradi, natijada to'plangan o't umumiy o't yo'li orqali ichakka quyiladi.",
    normalMetricsUz: [
      { label: "Uzunligi", value: "7 – 10", unit: "sm" },
      { label: "Sig'imi", value: "30 – 50", unit: "ml" }
    ],
    diseasesUz: [
      "O't-tosh kasalligi (xolelitiaz)",
      "O'tkir va surunkali xolesistit",
      "O't yo'llari diskineziyasi"
    ],
    symptomsUz: [
      "O'ng qovurg'a ostida ovqatdan keyin (ayniqsa qovurilgan taomdan so'ng) paydo bo'luvchi kuchli xurujli og'riq (jigar sanchig'i)",
      "Og'izda achchiq ta'm paydo bo'lishi",
      "Ko'ngil aynishi va qusish"
    ],
    riskFactorsUz: [
      "Yuqori xolesterinli parhez va semizlik",
      "Juda tez ozish yoki uzoq och yurish",
      "Ayol jinsi (estrogen gormonlari xolesterin cho'kishini kuchaytiradi)",
      "Kamharakatlik"
    ],
    preventionUz: [
      "Muntazam va teng vaqtlarda ovqatlanish (safro turg'unligini oldini oladi)",
      "Yog'li va qovurilgan taomlarni me'yorlashtirish",
      "Yetarli miqdorda suv ichish"
    ],
    factsUz: [
      "O't suyuqligining yashil-sarg'ish rangi eskirgan eritrotsitlar parchalanishidan hosil bo'ladigan bilirubin pigmenti bilan bog'liq.",
      "O't pufagi olib tashlanganidan so'ng ham inson normal yashaydi — bunda o't suyuqligi jigardan to'g'ridan-to'g'ri ingichka ichakka oqib tushadi."
    ],
    cameraTarget: [-0.18, 1.62, 0.28],
    cameraPosition: [-0.2, 1.65, 1.1]
  },
  {
    id: 'thyroid',
    nameUz: 'Qalqonsimon bez',
    latinName: 'Glandula thyroidea',
    system: 'endokrin',
    systemNameUz: 'Endokrin tizim',
    position: [0.0, 3.42, 0.22],
    scale: [0.38, 0.28, 0.18],
    color: '#c026d3', // fuchsia violet
    nearbyOrgansUz: "Bo'yinning oldingi sohasida, halqum va traxeyaning oldingi va yonbosh yuzalarida kapalak shaklida joylashgan; orqa tomonida to'rtta paratiroid bezlar yopishgan.",
    functionsUz: [
      "Tiroksin (T4) va triyodtironin (T3) gormonlarini ishlab chiqarib, butun tana metabolizm tezligini boshqarish",
      "Tana harorati, yurak urishi va energiya almashinuvini tartibga solish",
      "Bolalarda suyaklar o'sishi va bosh miya aqliy rivojlanishini ta'minlash",
      "Kalsitonin gormoni orqali suyaklarda kalsiy to'planishiga hissa qo'shish"
    ],
    howItWorksUz: "Uning faoliyati gipofiz bezi ajratadigan TTG (tireotrop gormon) orqali teskari aloqa prinsipi asosida boshqariladi. Gormonlar sintezi uchun oziq-ovqat va suv bilan kiruvchi yod mikroelementi hal qiluvchi ahamiyatga ega.",
    normalMetricsUz: [
      { label: "O'rtacha og'irligi", value: "15 – 25", unit: "gramm" },
      { label: "Kattalardagi normal hajmi", value: "ayollarda 18 gacha, erkaklarda 25 gacha", unit: "sm³" }
    ],
    diseasesUz: [
      "Gipotireoz (gormonlar yetishmovchiligi)",
      "Gipertireoz / Tireotoksikoz (ortiqcha gormon ishlab chiqarilishi)",
      "Endemik buqoq (yod tanqisligida bezning kattalashishi)",
      "Autoimmun tireoidit (Xashimoto kasalligi)",
      "Qalqonsimon bez tugunlari va saratoni"
    ],
    symptomsUz: [
      "Gipotireozda: doimiy sovqotish, holsizlik, sababsiz vazn ortishi, soch to'kilishi, qabziyat",
      "Gipertireozda: yurak tez urishi (taxikardiya), asabiylashish, qizib ketish, ozib ketish, ko'zlarning bo'rtib chiqishi (ekzoftalm)",
      "Bo'yinda shish paydo bo'lishi va yutishning qiyinlashishi"
    ],
    riskFactorsUz: [
      "Mintaqaviy yod tanqisligi (O'zbekiston kabi tog' va dengizdan uzoq hududlar)",
      "Radiatsiya ta'siri",
      "Irsiy autoimmun kasalliklar"
    ],
    preventionUz: [
      "Faqat yodlangan osh tuzidan foydalanish (tuzni taom pishib bo'lgach solish tavsiya etiladi)",
      "Dengiz baliqlari, dengiz karami va yong'oq iste'mol qilish",
      "Bo'yinda o'zgarish sezilganda UTT va gormonlar tahlilini topshirish"
    ],
    factsUz: [
      "Qalqonsimon bez tanadagi barcha yod zaxirasining 80 foizga yaqinini o'zida saqlaydi.",
      "U kapalakka juda o'xshaydi: o'ng va chap bo'laklar hamda ularni birlashtiruvchi bo'yinchadan (isthmus) iborat."
    ],
    cameraTarget: [0.0, 3.42, 0.22],
    cameraPosition: [0.0, 3.45, 0.95]
  },
  {
    id: 'urinary_bladder',
    nameUz: 'Siydik pufagi (Qovuq)',
    latinName: 'Vesica urinaria',
    system: 'siydik_tanosil',
    systemNameUz: 'Siydik-tanosil tizimi',
    position: [0.0, 0.42, 0.16],
    scale: [0.42, 0.38, 0.38],
    color: '#eab308', // amber golden
    nearbyOrgansUz: "Kichik tos bo'shlig'ida, qov suyagi ortida joylashgan; erkaklarda orqasida to'g'ri ichak va pastida prostata bezi, ayollarda esa orqasida bachadon va qin joylashgan.",
    functionsUz: [
      "Buyraklardan siydik yo'llari orqali uzluksiz keladigan siydikni vaqtincha to'plash",
      "To'plangan siydikni ixtiyoriy ravishda siydik chiqarish kanali (uretra) orqali tashqariga chiqarish",
      "Siydikning orqaga buyraklarga qaytib ketishiga yo'l qo'ymaslik (vezikoureteral klapanlar orqali)"
    ],
    howItWorksUz: "Qovuq devori kuchli silliq mushak (detruzor)dan iborat bo'lib, ichki yuzasi siydik to'lganda cho'ziluvchi maxsus o'tuvchi epiteliy bilan qoplangan. Qovuqda 200-300 ml siydik to'planganda devordagi retseptorlar bosh miyaga signal yuboradi va siyish ehtiyoji paydo bo'ladi.",
    normalMetricsUz: [
      { label: "Normal fiziologik sig'imi", value: "300 – 500", unit: "ml" },
      { label: "Maksimal cho'zilish hajmi", value: "800 gacha", unit: "ml" },
      { label: "Sutkalik siyish soni", value: "4 – 7", unit: "marta" }
    ],
    diseasesUz: [
      "Sistit (qovuqning o'tkir va surunkali yallig'lanishi)",
      "Qovuq toshlari",
      "Giperaktiv qovuq sindromi (tez-tez va to'satdan qistov)",
      "Qovuq saratoni"
    ],
    symptomsUz: [
      "Siyish paytida achishish, kesuvchi og'riq",
      "Juda tez-tez va oz-ozdan siyishga qistov",
      "Siydik rangining qizarishi yoki loyqalanishi",
      "Qorin pastida og'irlik va noqulaylik"
    ],
    riskFactorsUz: [
      "Sovuq qotish (ayniqsa oyoq va tos sohasi)",
      "Shaxsiy gigiyena qoidalarining buzilishi",
      "Siydikni uzoq vaqt zo'rma-zo'ra ushlab turish odati",
      "Tamaki chekish (chekuvchilarda qovuq saratoni xavfi 3-4 baravar yuqori)"
    ],
    preventionUz: [
      "Yetarli toza suv ichish (bakteriyalarni yuvib turadi)",
      "Siydik qistaganda darhol hojatga chiqish, ortiqcha ushlamaslik",
      "Sovuq tosh yoki sovuq joylarda o'tirmaslik"
    ],
    factsUz: [
      "Bo'sh qovuqning devori qalinligi 1-1.5 sm bo'lsa, siydik bilan to'lgan paytda u atigi 2-3 millimetrgacha cho'zilib yupqalashadi.",
      "Uning ichki yuzasidagi qovuq uchburchagi (trigonum vesicae) hech qachon burmalanmaydigan eng silliq va o'zgarmas hududdir."
    ],
    cameraTarget: [0.0, 0.42, 0.16],
    cameraPosition: [0.0, 0.45, 1.25]
  },
  {
    id: 'reproductive',
    nameUz: 'Ko’payish tizimi a’zolari',
    latinName: 'Systema reproductionis',
    system: 'siydik_tanosil',
    systemNameUz: 'Siydik-tanosil tizimi',
    position: [0.0, 0.22, 0.12],
    scale: [0.38, 0.35, 0.32],
    color: '#ec4899', // rose pink
    nearbyOrgansUz: "Kichik tos tubida, qovuq va to'g'ri ichak o'rtasida joylashgan. Ayollarda bachadon, tuxumdonlar va fallopiy naychalari; erkaklarda esa prostata bezi, urug' pufakchalari va moyaklar.",
    functionsUz: [
      "Nasl qoldirish: erkak va ayol jinsiy hujayralarini (spermatozoid va tuxumhujayra) ishlab chiqarish",
      "Jinsiy gormonlarni (testosteron, estrogen, progesteron) sintez qilish",
      "Homiladorlik davrida homilani qabul qilish, oziqlantirish va rivojlantirish (bachadon)",
      "Ikkilamchi jinsiy belgilarni shakllantirish va libido boshqaruvi"
    ],
    howItWorksUz: "Murakkab gipotalamus-gipofiz-gonadalar o'qi orqali boshqariladi. Ayollarda har oy davriy gormonal tsikl (ovulyatsiya) kechsa, erkaklarda spermatozoidlar uzluksiz spermatogenez orqali hosil bo'lib turadi.",
    normalMetricsUz: [
      { label: "Bachadon o'lchami (tug'magan ayollarda)", value: "7 – 8 x 4 – 5", unit: "sm" },
      { label: "Tuxumhujayralar zaxirasi tug'ilganda", value: "1 – 2 million", unit: "dona" },
      { label: "Bir sutkadagi spermatozoidlar ishlab chiqarilishi", value: "50 – 100", unit: "million dona" }
    ],
    diseasesUz: [
      "Bachadon miomasi va endometrioz",
      "Prostata bezi adenomasi va prostatit",
      "Tuxumdonlar polikistozi sindromi (TPKS)",
      "Befarzandlik (erkak va ayol omili)",
      "Bachadon bo'yni saratoni"
    ],
    symptomsUz: [
      "Hayz tsiklining buzilishi va noaniq qon ketishlar",
      "Kichik tosda surunkali og'riqlar",
      "Erkaklarda siyishning qiyinlashishi va oqimning susayishi",
      "Homilador bo'la olmaslik"
    ],
    riskFactorsUz: [
      "Jinsiy yo'l bilan yuquvchi infeksiyalar (OIV, xlamidiya, OPV)",
      "Surunkali gipotermiya va yallig'lanishlar",
      "Gormonal buzilishlar va semizlik",
      "Zararli odatlar (chekish sperma sifatini keskin tushiradi)"
    ],
    preventionUz: [
      "OPV (odam papilloma virusi)ga qarshi o'z vaqtida emlanish",
      "Yilda bir marta ginekolog yoki urolog ko'rigidan o'tish",
      "Himoyalangan xavfsiz jinsiy hayot",
      "Gormonal dori vositalarini faqat mutaxassis nazoratida qabul qilish"
    ],
    factsUz: [
      "Homiladorlik davrida ayol bachadoni o'zining dastlabki hajmiga nisbatan 500 martadan ortiq kengayishga va vazni 50 grammdan 1000 grammgacha oshishga qodir.",
      "Inson spermatozoidi tana ichidagi eng kichik hujayra bo'lsa, ayol tuxumhujayrasi inson tanasidagi eng yirik, oddiy ko'z bilan ko'rsa bo'ladigan yagona hujayradir."
    ],
    cameraTarget: [0.0, 0.22, 0.12],
    cameraPosition: [0.0, 0.3, 1.2]
  }
];
