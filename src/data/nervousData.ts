import { NerveData } from '../types/anatomy';

export const NERVOUS_DATA: NerveData[] = [
  {
    id: 'cerebral_cortex',
    nameUz: 'Bosh miya yarimsharlari poʻstlogʻi',
    latinName: 'Cortex cerebri',
    division: 'markaziy',
    divisionUz: 'Markaziy asab tizimi (MAT)',
    type: 'aralash',
    typeUz: 'Oliy asab faoliyati va sezgi-harakat integratsiyasi',
    functionUz: "Inson ongi, mantiqiy fikrlash, nutq, ixtiyoriy qaror qabul qilish, uzoq muddatli xotira va nozik his-tuyg'ularni boshqarish; barcha birlamchi sezgi markazlari (ko'rish, eshitish, taktil) bu yerda jamlangan.",
    pathwayUz: "Peshona (harakat va aql), Tepa (tana sezgisi), Ensa (ko'rish) va Chakka (eshitish va xotira) bo'laklariga bo'linadi.",
    disordersUz: [
      "Ishemik va gemorragik insult (falajlik va nutq yo'qolishi)",
      "Altsgeymer kasalligi (progressiv xotira yo'qolishi)",
      "Epileptik o'choqlar va konvulsiyalar"
    ],
    clinicalExamUz: "Mini-Mental State Examination (MMSE) aqliy testi, elektroensefalografiya (EEG) va bosh miya MRT tekshiruvi."
  },
  {
    id: 'cerebellum',
    nameUz: 'Miyacha',
    latinName: 'Cerebellum',
    division: 'markaziy',
    divisionUz: 'Markaziy asab tizimi (MAT)',
    type: 'harakatlantiruvchi',
    typeUz: 'Harakatlar koordinatsiyasi va muvozanat',
    functionUz: "Inson harakatlarining silliqligi, aniqligi va mutanosibligini ta'minlash; fazoviy muvozanatni saqlash; mushaklar tonusini doimiy avtomatik moslashtirish; motor xotira (velosiped haydash, musiqa asbobida chalish ko'nikmalari).",
    pathwayUz: "Ichki quloqdagi vestibulyar apparatdan va muskullardan keluvchi proprioretseptorlar signallarini qabul qilib, yarimsharlar bilan doimiy aloqada bo'ladi.",
    disordersUz: [
      "Miyacha ataksiyasi ('mast odamdek' chayqalib yurish)",
      "Intension tremor (qo'l nishonga yaqinlashganda titrashi)",
      "Nistagm (ko'z soqqalarining ixtiyorsiz tez-tez sakrashi)"
    ],
    clinicalExamUz: "Barmoq-burun sinamasi, Romberg holatida turish testi va tizza-tovon sinamasi orqali tekshiriladi."
  },
  {
    id: 'brainstem',
    nameUz: 'Miya ustuni',
    latinName: 'Truncus encephali',
    division: 'markaziy',
    divisionUz: 'Markaziy asab tizimi (MAT)',
    type: 'vegetativ',
    typeUz: 'Hayotiy avtomatik markazlar',
    functionUz: "Inson ixtiyorisiz ishlaydigan hayotiy muhim funksiyalarni boshqaradi: tinimsiz nafas olish ritmi, qon tomirlar tonusi va qon bosimi, yutish, yo'tal, aksirish va qusish reflekslari. 12 juft kalla miya nervlarining yadrolari joylashgan.",
    pathwayUz: "Oraliq miya, ko'prik (pons) va uzunchoq miyadan (medulla oblongata) tashkil topgan bo'lib, bosh miyani orqa miya bilan bog'laydi.",
    disordersUz: [
      "Uzunchoq miya jarohati (nafas va yurak to'xtashi bilan zudlik bilan o'limga olib keladi)",
      "Bulbar falaj (yutish va ovoz chiqarishning buzilishi)",
      "Koma holatlari (retikulyar formatsiya zararlanganda)"
    ],
    clinicalExamUz: "Qorachiq reflekslari, shox parda refleksi, yutish refleksi va kalla nervlari faoliyati."
  },
  {
    id: 'spinal_cord',
    nameUz: 'Orqa miya',
    latinName: 'Medulla spinalis',
    division: 'markaziy',
    divisionUz: 'Markaziy asab tizimi (MAT)',
    type: 'aralash',
    typeUz: 'Oʻtkazuvchi va segmentar refleks markazi',
    functionUz: "Bosh miya bilan tana o'rtasidagi asosiy axborot magistrali: pastdan sezgi signallarini yuqoriga o'tkazadi, bosh miyadan harakat buyruqlarini periferiyaga yetkazadi; mustaqil orqa miya reflekslarini (tizza refleksi) amalga oshiradi.",
    pathwayUz: "Umurtqa kanali ichida ensa teshigidan boshlanib 1-2 bel umurtqasigacha cho'ziladi (uzunligi 40-45 sm). Undan 31 juft orqa miya nervlari chiqadi.",
    disordersUz: [
      "Orqa miya shikastlanishi va uzilishi (paraplegiya — oyoqlar falaji yoki tetraplegiya — 4 oyoq-qo'l falaji)",
      "Orqa miya qon aylanishining o'tkir buzilishi (mielopatiya)",
      "Poliomiyelit (old shox motor neyronlarining zararlanishi)"
    ],
    clinicalExamUz: "Pay va periostal reflekslar (tizza, axill), og'riq va harorat sezuvchanligi chegaralarini xaritalash."
  },
  {
    id: 'sciatic_nerve',
    nameUz: "Sedana (Sedalish) nervi",
    latinName: 'Nervus ischiadicus',
    division: 'periferik',
    divisionUz: 'Periferik asab tizimi (PAT)',
    type: 'aralash',
    typeUz: 'Tanamizdagi eng yirik va qalin nerv',
    functionUz: "Sonning orqa guruhi, boldir va butun oyoq panjasi mushaklarini harakatlantirish; oyoqning katta qismi terisiga sezuvchanlik berish.",
    pathwayUz: "Dumg'aza chigalidan (L4-S3) boshlanib, dumba mushaklari ostidan o'tadi va tizza orqasida katta va umumiy kichik boldir nervlariga bo'linadi.",
    disordersUz: [
      "Ishias (sedana nervining disk churrasi yoki noksimon mushak tomonidan qisilishi oqibatidagi 'elektr toki urgandek' o'tkir og'riq)",
      "Nevropatiya (oyoq panjasining osilib qolishi va oqsoqlanish)"
    ],
    clinicalExamUz: "Laseg sinamasi (yotgan holda tekis oyoqni yuqoriga ko'targanda kuchli og'riq paydo bo'lishi)."
  },
  {
    id: 'brachial_plexus',
    nameUz: 'Yelka chigali',
    latinName: 'Plexus brachialis',
    division: 'periferik',
    divisionUz: 'Periferik asab tizimi (PAT)',
    type: 'aralash',
    typeUz: "Qo'lni to'liq innervatsiya qiluvchi nervlar tutami",
    functionUz: "Yelka, tirsak, bilak va qo'l panjasining barcha nozik mushaklarini harakatlantiruvchi nervlar (n. radialis, medianus, ulnaris)ni hosil qilish va qo'l terisi sezuvchanligini ta'minlash.",
    pathwayUz: "Bo'yinning 5-8 umurtqalari va 1-ko'krak umurtqasidan chiqib, o'mrov suyagi ostidan qo'ltiq osti sohasiga o'tadi.",
    disordersUz: [
      "Karpal kanal sindromi (o'rta nervning bilak sohasida siqilishi va 1-3 barmoqlarning uvushishi)",
      "Tirsak nervi nevropatiyasi ('tirsak panjasi' ko'rinishi)",
      "Tug'ruq shikastlanishlari (Erb-Dyushen falaji)"
    ],
    clinicalExamUz: "Barmoqlarni qisish kuchi, Tinel va Falen testlari, elektromiografiya (EMG)."
  }
];
