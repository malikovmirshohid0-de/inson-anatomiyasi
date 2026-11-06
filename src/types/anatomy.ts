export type AnatomicalLayer = 'skin' | 'muscles' | 'skeleton' | 'organs' | 'circulatory' | 'nervous';

export type BodySystem =
  | 'asab'
  | 'qon_aylanish'
  | 'nafas'
  | 'ovqat_hazm'
  | 'siydik_tanosil'
  | 'endokrin'
  | 'tayanch_harakat';

export interface OrganData {
  id: string;
  nameUz: string;
  latinName: string;
  system: BodySystem;
  systemNameUz: string;
  position: [number, number, number];
  scale?: [number, number, number];
  rotation?: [number, number, number];
  color: string;
  nearbyOrgansUz: string;
  functionsUz: string[];
  howItWorksUz: string;
  normalMetricsUz: { label: string; value: string; unit?: string }[];
  diseasesUz: string[];
  symptomsUz: string[];
  riskFactorsUz: string[];
  preventionUz: string[];
  factsUz: string[];
  cameraTarget: [number, number, number];
  cameraPosition: [number, number, number];
}

export interface BoneData {
  id: string;
  nameUz: string;
  latinName: string;
  region: 'kalla' | 'umurtqa' | 'kokrak' | 'qol' | 'tos' | 'oyoq';
  regionUz: string;
  locationUz: string;
  structureUz: string;
  functionsUz: string[];
  diseasesUz: string[];
  fractureRiskUz: string;
  position: [number, number, number];
  color?: string;
}

export interface MuscleData {
  id: string;
  nameUz: string;
  latinName: string;
  group: 'yuz' | 'boyin' | 'kokrak' | 'orqa' | 'qorin' | 'qol' | 'oyoq';
  groupUz: string;
  locationUz: string;
  functionUz: string;
  biomechanicsUz: string;
  commonInjuriesUz: string[];
  antagonistUz?: string;
  position: [number, number, number];
}

export interface BloodVesselData {
  id: string;
  nameUz: string;
  latinName: string;
  type: 'arteriya' | 'vena' | 'yurak_kamerasi' | 'kapillyar';
  typeUz: string;
  circulation: 'katta' | 'kichik';
  circulationUz: string;
  oxygenLevel: 'boy' | 'kambagal';
  functionUz: string;
  flowDirectionUz: string;
  clinicalSignificanceUz: string;
  color: string;
}

export interface NerveData {
  id: string;
  nameUz: string;
  latinName: string;
  division: 'markaziy' | 'periferik';
  divisionUz: string;
  type: 'sezuvchi' | 'harakatlantiruvchi' | 'aralash' | 'vegetativ';
  typeUz: string;
  functionUz: string;
  pathwayUz: string;
  disordersUz: string[];
  clinicalExamUz: string;
}

export interface DiseaseData {
  id: string;
  nameUz: string;
  latinName: string;
  category: 'yurak' | 'onkologiya' | 'endokrin' | 'nafas' | 'buyrak' | 'jigar' | 'oshqozon' | 'nevrologiya' | 'suyak';
  categoryUz: string;
  affectedOrganUz: string;
  descriptionUz: string;
  causesUz: string[];
  symptomsUz: string[];
  diagnosisUz: string[];
  treatmentUz: string[];
  preventionUz: string[];
  globalPrevalenceUz: string;
  affectedCount: string;
  populationPercent: string;
  annualDeaths: string;
  ageAndSexStatsUz: string;
  source: string;
  year: number;
}

export interface MedicalStatistic {
  id: string;
  titleUz: string;
  category: 'global_yuk' | 'olim_sabablari' | 'hududiy' | 'yosh_jins' | 'ozbekiston';
  categoryUz: string;
  metricType: 'tarqalganlik' | 'kasallanish' | 'olim';
  metricTypeUz: string;
  mainValue: string;
  unitUz: string;
  year: number;
  source: string;
  coverage: string;
  descriptionUz: string;
  chartData: { label: string; value: number; note?: string }[];
  demographics?: { group: string; male: number; female: number }[];
}

export interface GlossaryTerm {
  id: string;
  termUz: string;
  latinTerm: string;
  categoryUz: string;
  definitionUz: string;
  clinicalSignificanceUz: string;
  etymologyUz?: string;
}

export interface QuizQuestion {
  id: string;
  type: 'multiple_choice' | 'identify_organ';
  level: 'boshlangich' | 'chuqurlashtirilgan';
  questionUz: string;
  optionsUz?: string[];
  correctAnswerUz: string;
  targetOrganId?: string;
  explanationUz: string;
  categoryUz: string;
}

export interface DailyFact {
  id: string;
  titleUz: string;
  factUz: string;
  organNameUz: string;
  scientificContextUz: string;
  impactUz: string;
}
