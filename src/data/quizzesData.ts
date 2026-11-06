import { QuizQuestion } from '../types/anatomy';

export const QUIZZES_DATA: QuizQuestion[] = [
  {
    id: 'q1',
    type: 'multiple_choice',
    level: 'boshlangich',
    questionUz: "Inson tanasidagi eng katta ichki a'zo va asosiy biokimyoviy filtr qaysi?",
    optionsUz: ["O'pka", "Jigar", "Oshqozon", "Yurak"],
    correctAnswerUz: "Jigar",
    explanationUz: "Jigar (Hepar) kattalarda 1.5 - 1.8 kg og'irlikka ega bo'lib, inson tanasidagi eng yirik ichki a'zo hisoblanadi. U 500 dan ortiq hayotiy biokimyoviy funksiyalarni, jumladan qonni toksinlardan tozalashni bajaradi.",
    categoryUz: "Ichki a'zolar"
  },
  {
    id: 'q2',
    type: 'multiple_choice',
    level: 'boshlangich',
    questionUz: "Yurak qonni butun vujudga (katta qon aylanish doirasiga) qaysi kamerasidan haydaydi?",
    optionsUz: ["O'ng bo'lmacha", "O'ng qorincha", "Chap bo'lmacha", "Chap qorincha"],
    correctAnswerUz: "Chap qorincha",
    explanationUz: "Yurakning eng baquvvat mushak devoriga ega kamerasi bu chap qorinchadir. U qisqarganda kislorodga to'yingan qonni yuqori bosim bilan aortaga purkaydi.",
    categoryUz: "Qon aylanishi"
  },
  {
    id: 'q3',
    type: 'multiple_choice',
    level: 'boshlangich',
    questionUz: "Inson skeletidagi eng uzun va eng mustahkam suyak qaysi?",
    optionsUz: ["Katta boldir suyagi", "Yelka suyagi", "Son suyagi", "Umurtqa pog'onasi"],
    correctAnswerUz: "Son suyagi",
    explanationUz: "Son suyagi (Femur) inson tanasidagi eng uzun naysimon suyak bo'lib, u 1.5 tonnagacha bo'lgan mexanik siquvchi yuklamaga bardosh bera oladi.",
    categoryUz: "Skelet tizimi"
  },
  {
    id: 'q4',
    type: 'multiple_choice',
    level: 'boshlangich',
    questionUz: "Inson bosh miyasi butun tana iste'mol qiladigan kislorodning necha foizini o'zlashtiradi?",
    optionsUz: ["5%", "10%", "20%", "50%"],
    correctAnswerUz: "20%",
    explanationUz: "Bosh miya tana umumiy vaznining bor-yo'g'i 2 foizini tashkil etsa-da, organizmdagi jami kislorod va glyukozaning qariyb 20 foizini tinimsiz iste'mol qiladi.",
    categoryUz: "Nerv tizimi"
  },
  {
    id: 'q5',
    type: 'multiple_choice',
    level: 'chuqurlashtirilgan',
    questionUz: "Kichik (o'pka) qon aylanish doirasida qaysi tomir venoz (kislorodsiz) qon tashiydi?",
    optionsUz: ["O'pka venalari", "O'pka arteriyasi", "Aorta", "Kovak vena"],
    correctAnswerUz: "O'pka arteriyasi",
    explanationUz: "O'pka arteriyasi nomi 'arteriya' bo'lishiga qaramasdan, o'ng qorinchadan o'pkalarga karbonat angidridga to'la venoz qonni olib boradi. O'pka venalari esa aksincha, toza arterial qon tashiydi.",
    categoryUz: "Kardiologiya va tomirlar"
  },
  {
    id: 'q6',
    type: 'multiple_choice',
    level: 'chuqurlashtirilgan',
    questionUz: "Qondagi glyukoza miqdorini kamaytiruvchi insulin gormoni oshqozon osti bezining qaysi hujayralari tomonidan sintezlanadi?",
    optionsUz: ["Alfa-hujayralar", "Beta-hujayralar", "Delta-hujayralar", "Asinar hujayralar"],
    correctAnswerUz: "Beta-hujayralar",
    explanationUz: "Langergans orolchalarining beta-hujayralari insulin gormonini ishlab chiqaradi. 1-tur qandli diabetda autoimmun hujum tufayli aynan shu beta-hujayralar nobud bo'ladi.",
    categoryUz: "Endokrinologiya"
  },
  {
    id: 'q7',
    type: 'multiple_choice',
    level: 'chuqurlashtirilgan',
    questionUz: "Inson harakatlarining muvozanati, aniqligi va silliq koordinatsiyasi uchun bosh miyaning qaysi bo'limi javobgar?",
    optionsUz: ["Gipotalamus", "Miyacha (Cerebellum)", "Uzunchoq miya", "Tepa bo'lagi"],
    correctAnswerUz: "Miyacha (Cerebellum)",
    explanationUz: "Miyacha (Cerebellum) proprioretseptorlar va vestibulyar apparat ma'lumotlarini qayta ishlab, harakatlar aniqligi, muvozanat va mushaklar tonusini ta'minlaydi.",
    categoryUz: "Neyroanatomiya"
  },
  {
    id: 'q8',
    type: 'multiple_choice',
    level: 'chuqurlashtirilgan',
    questionUz: "Buyrakning strukturaviy va funksional birligi bo'lib, qonni filtrlash vazifasini bajaruvchi mikroskopik tuzilma nima deb ataladi?",
    optionsUz: ["Nefron", "Neyron", "Osteon", "Lobula"],
    correctAnswerUz: "Nefron",
    explanationUz: "Har bir buyrakda taxminan 1 millionta nefron mavjud bo'lib, ular koptokchalar va naychalar orqali bir kunda 180-200 litr qonni filtrlaydi.",
    categoryUz: "Nefrologiya"
  },
  {
    id: 'q9',
    type: 'identify_organ',
    level: 'boshlangich',
    targetOrganId: 'heart',
    questionUz: "3D modelda ko'krak qafasining chap qismida joylashgan, qon aylanish tizimining markaziy nasosi bo'lgan a'zoni toping:",
    correctAnswerUz: "Yurak",
    explanationUz: "Yurak (Cor) mediastinum sohasida, to'sh suyagi ortida va chap tomonga siljigan holda joylashgan.",
    categoryUz: "3D Organ identifikatsiyasi"
  },
  {
    id: 'q10',
    type: 'identify_organ',
    level: 'chuqurlashtirilgan',
    targetOrganId: 'pancreas',
    questionUz: "Oshqozonning ortida ko'ndalang joylashgan, ham hazm fermentlari, ham insulin ishlab chiqaruvchi aralash bezni aniqlang:",
    correctAnswerUz: "Oshqozon osti bezi",
    explanationUz: "Oshqozon osti bezi (Pancreas) qorin bo'shlig'i orqa sohasida 12 barmoqli ichak buralishi bilan taloq o'rtasida yotadi.",
    categoryUz: "3D Organ identifikatsiyasi"
  }
];
