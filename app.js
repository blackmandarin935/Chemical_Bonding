const elements = [
  { symbol: "H", name: "Hydrogen", number: 1, row: 1, col: 1, metal: false, en: 2.2, valence: 1 },
  { symbol: "He", name: "Helium", number: 2, row: 1, col: 18, metal: false, en: null, valence: 0 },
  { symbol: "Li", name: "Lithium", number: 3, row: 2, col: 1, metal: true, en: 0.98, valence: 1 },
  { symbol: "Be", name: "Beryllium", number: 4, row: 2, col: 2, metal: true, en: 1.57, valence: 2 },
  { symbol: "B", name: "Boron", number: 5, row: 2, col: 13, metal: false, en: 2.04, valence: 3 },
  { symbol: "C", name: "Carbon", number: 6, row: 2, col: 14, metal: false, en: 2.55, valence: 4 },
  { symbol: "N", name: "Nitrogen", number: 7, row: 2, col: 15, metal: false, en: 3.04, valence: 3 },
  { symbol: "O", name: "Oxygen", number: 8, row: 2, col: 16, metal: false, en: 3.44, valence: 2 },
  { symbol: "F", name: "Fluorine", number: 9, row: 2, col: 17, metal: false, en: 3.98, valence: 1 },
  { symbol: "Ne", name: "Neon", number: 10, row: 2, col: 18, metal: false, en: null, valence: 0 },
  { symbol: "Na", name: "Sodium", number: 11, row: 3, col: 1, metal: true, en: 0.93, valence: 1 },
  { symbol: "Mg", name: "Magnesium", number: 12, row: 3, col: 2, metal: true, en: 1.31, valence: 2 },
  { symbol: "Al", name: "Aluminum", number: 13, row: 3, col: 13, metal: true, en: 1.61, valence: 3 },
  { symbol: "Si", name: "Silicon", number: 14, row: 3, col: 14, metal: false, en: 1.9, valence: 4 },
  { symbol: "P", name: "Phosphorus", number: 15, row: 3, col: 15, metal: false, en: 2.19, valence: 3 },
  { symbol: "S", name: "Sulfur", number: 16, row: 3, col: 16, metal: false, en: 2.58, valence: 2 },
  { symbol: "Cl", name: "Chlorine", number: 17, row: 3, col: 17, metal: false, en: 3.16, valence: 1 },
  { symbol: "Ar", name: "Argon", number: 18, row: 3, col: 18, metal: false, en: null, valence: 0 },
  { symbol: "K", name: "Potassium", number: 19, row: 4, col: 1, metal: true, en: 0.82, valence: 1 },
  { symbol: "Ca", name: "Calcium", number: 20, row: 4, col: 2, metal: true, en: 1.0, valence: 2 },
  { symbol: "Sc", name: "Scandium", number: 21, row: 4, col: 3, metal: true, en: 1.36, valence: 3 },
  { symbol: "Ti", name: "Titanium", number: 22, row: 4, col: 4, metal: true, en: 1.54, valence: 4 },
  { symbol: "V", name: "Vanadium", number: 23, row: 4, col: 5, metal: true, en: 1.63, valence: 5 },
  { symbol: "Cr", name: "Chromium", number: 24, row: 4, col: 6, metal: true, en: 1.66, valence: 6 },
  { symbol: "Mn", name: "Manganese", number: 25, row: 4, col: 7, metal: true, en: 1.55, valence: 7 },
  { symbol: "Fe", name: "Iron", number: 26, row: 4, col: 8, metal: true, en: 1.83, valence: 2 },
  { symbol: "Co", name: "Cobalt", number: 27, row: 4, col: 9, metal: true, en: 1.88, valence: 2 },
  { symbol: "Ni", name: "Nickel", number: 28, row: 4, col: 10, metal: true, en: 1.91, valence: 2 },
  { symbol: "Cu", name: "Copper", number: 29, row: 4, col: 11, metal: true, en: 1.9, valence: 2 },
  { symbol: "Zn", name: "Zinc", number: 30, row: 4, col: 12, metal: true, en: 1.65, valence: 2 },
  { symbol: "Ga", name: "Gallium", number: 31, row: 4, col: 13, metal: true, en: 1.81, valence: 3 },
  { symbol: "Ge", name: "Germanium", number: 32, row: 4, col: 14, metal: false, en: 2.01, valence: 4 },
  { symbol: "As", name: "Arsenic", number: 33, row: 4, col: 15, metal: false, en: 2.18, valence: 3 },
  { symbol: "Se", name: "Selenium", number: 34, row: 4, col: 16, metal: false, en: 2.55, valence: 2 },
  { symbol: "Br", name: "Bromine", number: 35, row: 4, col: 17, metal: false, en: 2.96, valence: 1 },
  { symbol: "Kr", name: "Krypton", number: 36, row: 4, col: 18, metal: false, en: 3.0, valence: 0 },
  { symbol: "Rb", name: "Rubidium", number: 37, row: 5, col: 1, metal: true, en: 0.82, valence: 1 },
  { symbol: "Sr", name: "Strontium", number: 38, row: 5, col: 2, metal: true, en: 0.95, valence: 2 },
  { symbol: "Y", name: "Yttrium", number: 39, row: 5, col: 3, metal: true, en: 1.22, valence: 3 },
  { symbol: "Zr", name: "Zirconium", number: 40, row: 5, col: 4, metal: true, en: 1.33, valence: 4 },
  { symbol: "Nb", name: "Niobium", number: 41, row: 5, col: 5, metal: true, en: 1.6, valence: 5 },
  { symbol: "Mo", name: "Molybdenum", number: 42, row: 5, col: 6, metal: true, en: 2.16, valence: 6 },
  { symbol: "Tc", name: "Technetium", number: 43, row: 5, col: 7, metal: true, en: 1.9, valence: 7 },
  { symbol: "Ru", name: "Ruthenium", number: 44, row: 5, col: 8, metal: true, en: 2.2, valence: 3 },
  { symbol: "Rh", name: "Rhodium", number: 45, row: 5, col: 9, metal: true, en: 2.28, valence: 3 },
  { symbol: "Pd", name: "Palladium", number: 46, row: 5, col: 10, metal: true, en: 2.2, valence: 2 },
  { symbol: "Ag", name: "Silver", number: 47, row: 5, col: 11, metal: true, en: 1.93, valence: 1 },
  { symbol: "Cd", name: "Cadmium", number: 48, row: 5, col: 12, metal: true, en: 1.69, valence: 2 },
  { symbol: "In", name: "Indium", number: 49, row: 5, col: 13, metal: true, en: 1.78, valence: 3 },
  { symbol: "Sn", name: "Tin", number: 50, row: 5, col: 14, metal: true, en: 1.96, valence: 4 },
  { symbol: "Sb", name: "Antimony", number: 51, row: 5, col: 15, metal: false, en: 2.05, valence: 3 },
  { symbol: "Te", name: "Tellurium", number: 52, row: 5, col: 16, metal: false, en: 2.1, valence: 2 },
  { symbol: "I", name: "Iodine", number: 53, row: 5, col: 17, metal: false, en: 2.66, valence: 1 },
  { symbol: "Xe", name: "Xenon", number: 54, row: 5, col: 18, metal: false, en: 2.6, valence: 0 },
  { symbol: "Cs", name: "Cesium", number: 55, row: 6, col: 1, metal: true, en: 0.79, valence: 1 },
  { symbol: "Ba", name: "Barium", number: 56, row: 6, col: 2, metal: true, en: 0.89, valence: 2 },
  { symbol: "La", name: "Lanthanum", number: 57, row: 8, col: 3, metal: true, en: 1.1, valence: 3 },
  { symbol: "Ce", name: "Cerium", number: 58, row: 8, col: 4, metal: true, en: 1.12, valence: 3 },
  { symbol: "Pr", name: "Praseodymium", number: 59, row: 8, col: 5, metal: true, en: 1.13, valence: 3 },
  { symbol: "Nd", name: "Neodymium", number: 60, row: 8, col: 6, metal: true, en: 1.14, valence: 3 },
  { symbol: "Pm", name: "Promethium", number: 61, row: 8, col: 7, metal: true, en: 1.13, valence: 3 },
  { symbol: "Sm", name: "Samarium", number: 62, row: 8, col: 8, metal: true, en: 1.17, valence: 3 },
  { symbol: "Eu", name: "Europium", number: 63, row: 8, col: 9, metal: true, en: 1.2, valence: 3 },
  { symbol: "Gd", name: "Gadolinium", number: 64, row: 8, col: 10, metal: true, en: 1.2, valence: 3 },
  { symbol: "Tb", name: "Terbium", number: 65, row: 8, col: 11, metal: true, en: 1.2, valence: 3 },
  { symbol: "Dy", name: "Dysprosium", number: 66, row: 8, col: 12, metal: true, en: 1.22, valence: 3 },
  { symbol: "Ho", name: "Holmium", number: 67, row: 8, col: 13, metal: true, en: 1.23, valence: 3 },
  { symbol: "Er", name: "Erbium", number: 68, row: 8, col: 14, metal: true, en: 1.24, valence: 3 },
  { symbol: "Tm", name: "Thulium", number: 69, row: 8, col: 15, metal: true, en: 1.25, valence: 3 },
  { symbol: "Yb", name: "Ytterbium", number: 70, row: 8, col: 16, metal: true, en: 1.1, valence: 3 },
  { symbol: "Lu", name: "Lutetium", number: 71, row: 8, col: 17, metal: true, en: 1.27, valence: 3 },
  { symbol: "Hf", name: "Hafnium", number: 72, row: 6, col: 4, metal: true, en: 1.3, valence: 4 },
  { symbol: "Ta", name: "Tantalum", number: 73, row: 6, col: 5, metal: true, en: 1.5, valence: 5 },
  { symbol: "W", name: "Tungsten", number: 74, row: 6, col: 6, metal: true, en: 2.36, valence: 6 },
  { symbol: "Re", name: "Rhenium", number: 75, row: 6, col: 7, metal: true, en: 1.9, valence: 7 },
  { symbol: "Os", name: "Osmium", number: 76, row: 6, col: 8, metal: true, en: 2.2, valence: 4 },
  { symbol: "Ir", name: "Iridium", number: 77, row: 6, col: 9, metal: true, en: 2.2, valence: 4 },
  { symbol: "Pt", name: "Platinum", number: 78, row: 6, col: 10, metal: true, en: 2.28, valence: 4 },
  { symbol: "Au", name: "Gold", number: 79, row: 6, col: 11, metal: true, en: 2.54, valence: 1 },
  { symbol: "Hg", name: "Mercury", number: 80, row: 6, col: 12, metal: true, en: 2.0, valence: 2 },
  { symbol: "Tl", name: "Thallium", number: 81, row: 6, col: 13, metal: true, en: 1.62, valence: 3 },
  { symbol: "Pb", name: "Lead", number: 82, row: 6, col: 14, metal: true, en: 2.33, valence: 4 },
  { symbol: "Bi", name: "Bismuth", number: 83, row: 6, col: 15, metal: true, en: 2.02, valence: 3 },
  { symbol: "Po", name: "Polonium", number: 84, row: 6, col: 16, metal: true, en: 2.0, valence: 2 },
  { symbol: "At", name: "Astatine", number: 85, row: 6, col: 17, metal: false, en: 2.2, valence: 1 },
  { symbol: "Rn", name: "Radon", number: 86, row: 6, col: 18, metal: false, en: null, valence: 0 },
  { symbol: "Fr", name: "Francium", number: 87, row: 7, col: 1, metal: true, en: 0.7, valence: 1 },
  { symbol: "Ra", name: "Radium", number: 88, row: 7, col: 2, metal: true, en: 0.9, valence: 2 },
  { symbol: "Ac", name: "Actinium", number: 89, row: 9, col: 3, metal: true, en: 1.1, valence: 3 },
  { symbol: "Th", name: "Thorium", number: 90, row: 9, col: 4, metal: true, en: 1.3, valence: 4 },
  { symbol: "Pa", name: "Protactinium", number: 91, row: 9, col: 5, metal: true, en: 1.5, valence: 5 },
  { symbol: "U", name: "Uranium", number: 92, row: 9, col: 6, metal: true, en: 1.38, valence: 6 },
  { symbol: "Np", name: "Neptunium", number: 93, row: 9, col: 7, metal: true, en: 1.36, valence: 5 },
  { symbol: "Pu", name: "Plutonium", number: 94, row: 9, col: 8, metal: true, en: 1.28, valence: 4 },
  { symbol: "Am", name: "Americium", number: 95, row: 9, col: 9, metal: true, en: 1.3, valence: 3 },
  { symbol: "Cm", name: "Curium", number: 96, row: 9, col: 10, metal: true, en: 1.3, valence: 3 },
  { symbol: "Bk", name: "Berkelium", number: 97, row: 9, col: 11, metal: true, en: 1.3, valence: 3 },
  { symbol: "Cf", name: "Californium", number: 98, row: 9, col: 12, metal: true, en: 1.3, valence: 3 },
  { symbol: "Es", name: "Einsteinium", number: 99, row: 9, col: 13, metal: true, en: 1.3, valence: 3 },
  { symbol: "Fm", name: "Fermium", number: 100, row: 9, col: 14, metal: true, en: 1.3, valence: 3 },
  { symbol: "Md", name: "Mendelevium", number: 101, row: 9, col: 15, metal: true, en: 1.3, valence: 3 },
  { symbol: "No", name: "Nobelium", number: 102, row: 9, col: 16, metal: true, en: 1.3, valence: 2 },
  { symbol: "Lr", name: "Lawrencium", number: 103, row: 9, col: 17, metal: true, en: 1.3, valence: 3 },
  { symbol: "Rf", name: "Rutherfordium", number: 104, row: 7, col: 4, metal: true, en: null, valence: 4 },
  { symbol: "Db", name: "Dubnium", number: 105, row: 7, col: 5, metal: true, en: null, valence: 5 },
  { symbol: "Sg", name: "Seaborgium", number: 106, row: 7, col: 6, metal: true, en: null, valence: 6 },
  { symbol: "Bh", name: "Bohrium", number: 107, row: 7, col: 7, metal: true, en: null, valence: 7 },
  { symbol: "Hs", name: "Hassium", number: 108, row: 7, col: 8, metal: true, en: null, valence: 8 },
  { symbol: "Mt", name: "Meitnerium", number: 109, row: 7, col: 9, metal: true, en: null, valence: 0 },
  { symbol: "Ds", name: "Darmstadtium", number: 110, row: 7, col: 10, metal: true, en: null, valence: 0 },
  { symbol: "Rg", name: "Roentgenium", number: 111, row: 7, col: 11, metal: true, en: null, valence: 0 },
  { symbol: "Cn", name: "Copernicium", number: 112, row: 7, col: 12, metal: true, en: null, valence: 2 },
  { symbol: "Nh", name: "Nihonium", number: 113, row: 7, col: 13, metal: true, en: null, valence: 3 },
  { symbol: "Fl", name: "Flerovium", number: 114, row: 7, col: 14, metal: true, en: null, valence: 4 },
  { symbol: "Mc", name: "Moscovium", number: 115, row: 7, col: 15, metal: true, en: null, valence: 3 },
  { symbol: "Lv", name: "Livermorium", number: 116, row: 7, col: 16, metal: true, en: null, valence: 2 },
  { symbol: "Ts", name: "Tennessine", number: 117, row: 7, col: 17, metal: false, en: null, valence: 1 },
  { symbol: "Og", name: "Oganesson", number: 118, row: 7, col: 18, metal: false, en: null, valence: 0 }
];

const metalloidSymbols = new Set(["B", "Si", "Ge", "As", "Sb", "Te", "Po"]);
const nonMetalSymbols = new Set([
  "H",
  "C",
  "N",
  "O",
  "F",
  "P",
  "S",
  "Cl",
  "Se",
  "Br",
  "I",
  "At",
  "Ts",
  "He",
  "Ne",
  "Ar",
  "Kr",
  "Xe",
  "Rn",
  "Og"
]);

const bondArea = document.getElementById("bondArea");
const trashBin = document.getElementById("trashBin");
const table = document.getElementById("periodicTable");
const bondType = document.getElementById("bondType");
const formula = document.getElementById("formula");
const moleculeName = document.getElementById("moleculeName");
const bondDescription = document.getElementById("bondDescription");
const properties = document.getElementById("properties");
const resetBtn = document.getElementById("resetBtn");

const selectedElements = [];
const maxNodes = 8;
let bondLines = null;

const bondOrderMap = {
  H2: 1,
  F2: 1,
  Cl2: 1,
  Br2: 1,
  I2: 1,
  O2: 2,
  N2: 3,
  CO: 3,
  NO: 2,
  NO2: 2,
  SO2: 2,
  C2H2: 3,
  C2H4: 2,
  C2H6: 1
};

const moleculeNameMapExtra = {
  Br2: "브롬",
  C10H20: "데센",
  C10H22: "데칸",
  C10H8: "나프탈렌",
  C11H24: "운데칸",
  C12H22O11: "설탕(자당)",
  C12H26: "도데칸",
  C13H18O2: "이부프로펜",
  C13H28: "트리데칸",
  C14H28O2: "미리스트산",
  C14H30: "테트라데칸",
  C15H32: "펜타데칸",
  C16H32O2: "팔미트산",
  C16H34: "헥사데칸",
  C17H36: "헵타데칸",
  C18H24O2: "에스트라디올",
  C18H30O2: "리놀렌산",
  C18H32O2: "리놀레산",
  C18H34O2: "올레산",
  C18H36O2: "스테아르산",
  C18H38: "옥타데칸",
  C19H28O2: "테스토스테론",
  C19H40: "노나데칸",
  C20H30O2: "비타민 A",
  C20H32O2: "아라키돈산",
  C20H42: "아이코산",
  C21H30O2: "프로게스테론",
  C27H46O: "콜레스테롤",
  C28H44O: "비타민 D",
  C29H50O2: "비타민 E",
  C31H46O2: "비타민 K",
  C2H2: "에타인",
  C2H4: "에텐",
  C2H4O: "아세트알데히드",
  C2H4O2: "아세트산",
  C2H6: "에테인",
  C2H6O: "에탄올",
  C2H6O2: "에틸렌글리콜",
  C3H4: "프로파인",
  C3H6: "프로펜",
  C3H6O: "아세톤",
  C3H6O2: "프로피온산",
  C3H6O3: "젖산",
  C3H8: "프로페인",
  C3H8O: "프로판올",
  C3H8O2: "프로필렌글리콜",
  C3H8O3: "글리세롤",
  C4H10: "부테인",
  C4H10O: "부탄올",
  C4H6: "부타인",
  C4H8: "부텐",
  C4H8O2: "부티르산",
  C4H8O4: "에리트로스",
  C5H10: "펜텐",
  C5H10O2: "발레르산",
  C5H10O4: "디옥시리보오스",
  C5H10O5: "리보오스",
  C5H12: "펜탄",
  C5H8: "펜타인",
  C6H10: "시클로헥센",
  C6H12: "시클로헥산",
  C6H12O6: "포도당",
  C6H14: "헥산",
  C6H6: "벤젠",
  C6H8O6: "비타민 C",
  C7H14: "헵텐",
  C7H16: "헵탄",
  C7H8: "톨루엔",
  C8H10: "자일렌",
  C8H16: "옥텐",
  C8H18: "옥탄",
  C8H8: "스타이렌",
  C9H18: "노넨",
  C9H20: "노난",
  C9H8O4: "아스피린",
  CH4: "메테인",
  CHCl3: "클로로포름",
  CH3Cl: "클로로메탄",
  CH3OH: "메탄올",
  Cl2: "염소",
  CO: "일산화탄소",
  CO2: "이산화탄소",
  F2: "플루오린",
  H2: "수소",
  H2O: "물",
  H2O2: "과산화수소",
  H2S: "황화수소",
  HBr: "브로민화 수소",
  HCl: "염화수소",
  HClO: "차아염소산",
  HClO2: "아염소산",
  HClO3: "염소산",
  HClO4: "과염소산",
  HCN: "시안화수소",
  HF: "플루오린화 수소",
  HI: "요오드화 수소",
  HNO2: "아질산",
  HNO3: "질산",
  H2CO3: "탄산",
  H2SO3: "아황산",
  H2SO4: "황산",
  H3BO3: "붕산",
  H3PO4: "인산",
  I2: "아이오딘",
  N2: "질소",
  N2O: "아산화질소",
  N2O3: "삼산화이질소",
  N2O5: "오산화이질소",
  NH3: "암모니아",
  NO: "일산화질소",
  NO2: "이산화질소",
  O2: "산소",
  PCl3: "삼염화인",
  PCl5: "오염화인",
  SF6: "육플루오린화황",
  SiO2: "이산화규소",
  SO2: "이산화황",
  SO3: "삼산화황",
  SOCl2: "염화티오닐",
  C8H9NO2: "아세트아미노펜",
  C8H10N4O2: "카페인",
  C17H19NO3: "모르핀",
  C21H23NO5: "코데인",
  C2H3Cl: "염화비닐",
  C2H2Cl2: "다이클로로에텐",
  C2HCl3: "트라이클로로에텐",
  C2Cl4: "테트라클로로에텐",
  C2H3Br: "브로모에텐",
  C2H3I: "요오도에텐",
  C2H3F: "플루오로에텐",
  C2F4: "테트라플루오로에텐",
  C2H2F2: "다이플루오로에텐",
  C6H5OH: "페놀",
  C6H5NH2: "아닐린",
  C6H5Cl: "클로로벤젠",
  C6H5Br: "브로모벤젠",
  C6H5I: "요오도벤젠",
  C6H5NO2: "니트로벤젠",
  C7H8O: "벤질알코올",
  C7H6O: "벤즈알데하이드",
  C7H6O2: "벤조산",
  C8H8O: "아세토페논",
  C8H8O2: "페닐아세트산",
  C8H10O: "에틸페놀",
  C8H10O2: "구아이아콜",
  C9H10O2: "시나믹산",
  C9H12O2: "아네톨",
  C9H8O2: "신나말데하이드",
  C10H12O: "멘톤",
  C10H14O: "멘톨",
  C10H16: "리모넨",
  C10H16O: "캄퍼",
  C10H16O2: "캄포르퀴논",
  C10H18O: "보르네올",
  C10H16O3: "캄포르산",
  C6H12O: "시클로헥사논",
  C6H10O: "시클로헥센온",
  C6H6O: "페놀(이론식)",
  C6H6O2: "벤젠디올(카테콜)",
  C6H6O3: "피로갈롤",
  C7H6O3: "살리실산",
  C7H6O5: "갈산",
  C8H8O3: "바닐린",
  C9H10O3: "페룰산",
  C10H12O2: "유제놀",
  C10H12O4: "바닐릭산",
  C6H8O7: "구연산",
  C4H6O4: "숙신산",
  C2H2O4: "옥살산",
  C3H4O4: "말론산",
  C4H4O4: "푸마르산",
  C4H6O5: "말산",
  C4H6O6: "타타르산",
  C2H4O3: "글리옥실산",
  C2H2O2: "글리옥살",
  C2H2O: "케텐"
};

const moleculeNameMap = {
  H2: "수소",
  O2: "산소",
  N2: "질소",
  F2: "플루오린",
  Cl2: "염소",
  Br2: "브롬",
  I2: "아이오딘",
  H2O: "물",
  H2O2: "과산화수소",
  CO2: "이산화탄소",
  CO: "일산화탄소",
  CH4: "메테인",
  C2H6: "에테인",
  C3H8: "프로페인",
  C4H10: "부테인",
  C5H12: "펜탄",
  C6H14: "헥산",
  C7H16: "헵탄",
  C8H18: "옥탄",
  C9H20: "노난",
  C10H22: "데칸",
  C11H24: "운데칸",
  C12H26: "도데칸",
  C13H28: "트리데칸",
  C14H30: "테트라데칸",
  C15H32: "펜타데칸",
  C16H34: "헥사데칸",
  C17H36: "헵타데칸",
  C18H38: "옥타데칸",
  C19H40: "노나데칸",
  C20H42: "아이코산",
  C2H4: "에텐",
  C3H6: "프로펜",
  C4H8: "부텐",
  C5H10: "펜텐",
  C6H12: "헥센",
  C7H14: "헵텐",
  C8H16: "옥텐",
  C9H18: "노넨",
  C10H20: "데센",
  C2H2: "에타인",
  C3H4: "프로파인",
  C4H6: "부타인",
  C5H8: "펜타인",
  C6H6: "벤젠",
  C7H8: "톨루엔",
  C8H10: "자일렌",
  C8H8: "스타이렌",
  C10H8: "나프탈렌",
  C6H12: "시클로헥산",
  C6H10: "시클로헥센",
  C5H10: "시클로펜탄",
  C5H8: "시클로펜텐",
  NH3: "암모니아",
  H2S: "황화수소",
  HCl: "염화수소",
  HBr: "브로민화 수소",
  HI: "요오드화 수소",
  HF: "플루오린화 수소",
  NO: "일산화질소",
  NO2: "이산화질소",
  N2O: "아산화질소",
  N2O3: "삼산화이질소",
  N2O5: "오산화이질소",
  SO2: "이산화황",
  SO3: "삼산화황",
  HNO3: "질산",
  HNO2: "아질산",
  H2SO4: "황산",
  H2SO3: "아황산",
  H3PO4: "인산",
  H2CO3: "탄산",
  HClO: "차아염소산",
  HClO2: "아염소산",
  HClO3: "염소산",
  HClO4: "과염소산",
  HCN: "시안화수소",
  NaCl: "염화나트륨",
  KCl: "염화칼륨",
  MgCl2: "염화마그네슘",
  CaCl2: "염화칼슘",
  AlCl3: "염화알루미늄",
  NaF: "불화나트륨",
  KF: "불화칼륨",
  CaF2: "불화칼슘",
  NaBr: "브로민화나트륨",
  KBr: "브로민화칼륨",
  NaI: "요오드화나트륨",
  KI: "요오드화칼륨",
  NaOH: "수산화나트륨",
  KOH: "수산화칼륨",
  CaH2O2: "수산화칼슘",
  MgH2O2: "수산화마그네슘",
  AlH3O3: "수산화알루미늄",
  Na2CO3: "탄산나트륨",
  NaHCO3: "탄산수소나트륨",
  CaCO3: "탄산칼슘",
  MgCO3: "탄산마그네슘",
  Na2SO4: "황산나트륨",
  K2SO4: "황산칼륨",
  MgO4S: "황산마그네슘",
  CaO4S: "황산칼슘",
  BaO4S: "황산바륨",
  NaNO3: "질산나트륨",
  KNO3: "질산칼륨",
  NH4NO3: "질산암모늄",
  NH4Cl: "염화암모늄",
  NH4O: "수산화암모늄",
  Na2S: "황화나트륨",
  K2S: "황화칼륨",
  Na2SO3: "아황산나트륨",
  NaHO3S: "아황산수소나트륨",
  K2SO3: "아황산칼륨",
  NaClO: "차아염소산나트륨",
  NaClO2: "아염소산나트륨",
  NaClO3: "염소산나트륨",
  NaClO4: "과염소산나트륨",
  KClO3: "염소산칼륨",
  KClO4: "과염소산칼륨",
  KMnO4: "과망간산칼륨",
  K2Cr2O7: "중크롬산칼륨",
  Na2Cr2O7: "중크롬산나트륨",
  Na2CrO4: "크롬산나트륨",
  Na2B4O7: "붕사",
  H3BO3: "붕산",
  NaBO2: "메타붕산나트륨",
  Na2O2: "과산화나트륨",
  K2O2: "과산화칼륨",
  CaO2: "과산화칼슘",
  FeO: "산화철(II)",
  Fe2O3: "산화철(III)",
  CuO: "산화구리(II)",
  Cu2O: "산화구리(I)",
  ZnO: "산화아연",
  Al2O3: "산화알루미늄",
  SiO2: "이산화규소",
  CaO: "산화칼슘",
  MgO: "산화마그네슘",
  Na2O: "산화나트륨",
  K2O: "산화칼륨",
  Na2O12S3: "황산알루미늄(나트륨염)",
  Al2O12S3: "황산알루미늄",
  FeO4S: "황산철(II)",
  Fe2O12S3: "황산철(III)",
  CuO4S: "황산구리(II)",
  ZnO4S: "황산아연",
  PbO4S: "황산납",
  AgNO3: "질산은",
  BaCl2: "염화바륨",
  Na2SiO3: "규산나트륨",
  H2SiO3: "규산",
  Ca3O8P2: "인산칼슘",
  Na3PO4: "인산삼나트륨",
  K3PO4: "인산삼칼륨",
  H5CNO3: "탄산수소암모늄",
  Na2S2O3: "티오황산나트륨",
  H2S2O3: "티오황산",
  Na2S2O5: "피로아황산나트륨",
  Na2S2O7: "피로황산나트륨(무수)",
  AlK2O8S2: "백반",
  CH3OH: "메탄올",
  C2H6O: "에탄올",
  C3H8O: "프로판올",
  C4H10O: "부탄올",
  C2H6O2: "에틸렌글리콜",
  C3H8O2: "프로필렌글리콜",
  C3H8O3: "글리세롤",
  C3H6O: "아세톤",
  C2H4O: "아세트알데히드",
  C2H4O2: "아세트산",
  C3H6O2: "프로피온산",
  C4H8O2: "부티르산",
  C5H10O2: "발레르산",
  C6H12O2: "카프로산",
  C7H14O2: "에난산",
  C8H16O2: "카프릴산",
  C9H18O2: "펠라곤산",
  C10H20O2: "카프르산",
  C12H24O2: "라우르산",
  C14H28O2: "미리스트산",
  C16H32O2: "팔미트산",
  C18H36O2: "스테아르산",
  C18H34O2: "올레산",
  C18H32O2: "리놀레산",
  C18H30O2: "리놀렌산",
  C20H32O2: "아라키돈산",
  C6H12O6: "포도당",
  C12H22O11: "설탕(자당)",
  C5H10O5: "리보오스",
  C5H10O4: "디옥시리보오스",
  C4H8O4: "에리트로스",
  C6H8O6: "비타민 C",
  C20H30O2: "비타민 A",
  C28H44O: "비타민 D",
  C29H50O2: "비타민 E",
  C31H46O2: "비타민 K",
  C9H8O4: "아스피린",
  C8H9NO2: "아세트아미노펜",
  C13H18O2: "이부프로펜",
  C8H10N4O2: "카페인",
  C27H46O: "콜레스테롤",
  C21H30O2: "프로게스테론",
  C19H28O2: "테스토스테론",
  C18H24O2: "에스트라디올",
  C2H5Cl: "클로로에탄",
  CH3Cl: "클로로메탄",
  CHCl3: "클로로포름",
  CCl4: "사염화탄소",
  CF4: "사플루오로메탄",
  SF6: "육플루오린화황",
  PCl3: "삼염화인",
  PCl5: "오염화인",
  SOCl2: "염화티오닐"
};

const moleculeNameMapAll = {
  ...moleculeNameMap,
  ...moleculeNameMapExtra
};

function getCategory(element) {
  if (metalloidSymbols.has(element.symbol)) {
    return "metalloid";
  }
  if (nonMetalSymbols.has(element.symbol)) {
    return "nonmetal";
  }
  return "metal";
}

function renderTable() {
  const grid = document.createElement("div");
  grid.className = "table";

  elements.forEach((element) => {
    const card = document.createElement("div");
    const category = getCategory(element);
    card.className = `element ${category}`;
    card.draggable = false;
    card.style.gridColumn = element.col;
    card.style.gridRow = element.row;
    card.dataset.symbol = element.symbol;
    card.innerHTML = `
      <span class="number">${element.number}</span>
      <span class="symbol">${element.symbol}</span>
      <span class="name">${element.name}</span>
    `;

    card.addEventListener("pointerdown", (event) => {
      startElementDrag(event, element);
    });

    grid.appendChild(card);
  });

  table.replaceWith(grid);
  grid.id = "periodicTable";
}

let dragGhost = null;
let dragElement = null;
let isDraggingElement = false;

function startElementDrag(event, element) {
  if (selectedElements.length >= maxNodes) {
    return;
  }

  isDraggingElement = true;
  dragElement = element;

  dragGhost = document.createElement("div");
  dragGhost.className = "bond-node";
  dragGhost.style.position = "fixed";
  dragGhost.style.pointerEvents = "none";
  dragGhost.style.zIndex = "9999";
  dragGhost.innerHTML = `
    <div>
      <div class="symbol">${element.symbol}</div>
      <div class="number">${element.number}</div>
    </div>
  `;

  document.body.appendChild(dragGhost);
  moveGhost(event.clientX, event.clientY);

  document.addEventListener("pointermove", handleElementDrag);
  document.addEventListener("pointerup", endElementDrag);
}

function moveGhost(x, y) {
  if (!dragGhost) return;
  const size = 72;
  dragGhost.style.left = `${x - size / 2}px`;
  dragGhost.style.top = `${y - size / 2}px`;
}

function handleElementDrag(event) {
  if (!isDraggingElement) return;
  moveGhost(event.clientX, event.clientY);
}

function endElementDrag(event) {
  if (!isDraggingElement) return;
  isDraggingElement = false;

  const rect = bondArea.getBoundingClientRect();
  const inCanvas =
    event.clientX >= rect.left &&
    event.clientX <= rect.right &&
    event.clientY >= rect.top &&
    event.clientY <= rect.bottom;

  if (inCanvas && dragElement) {
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    addBondNode(dragElement, x, y);
    updateBonding();
  }

  if (dragGhost) {
    dragGhost.remove();
  }
  dragGhost = null;
  dragElement = null;

  document.removeEventListener("pointermove", handleElementDrag);
  document.removeEventListener("pointerup", endElementDrag);
}

function setupCanvas() {
  trashBin.addEventListener("dragover", (event) => {
    event.preventDefault();
    trashBin.classList.add("active");
  });

  trashBin.addEventListener("dragleave", () => {
    trashBin.classList.remove("active");
  });

  trashBin.addEventListener("drop", (event) => {
    event.preventDefault();
    trashBin.classList.remove("active");
    const id = event.dataTransfer.getData("text/plain");
    const node = bondArea.querySelector(`[data-node-id="${id}"]`);
    if (!node) return;
    const idValue = node.dataset.nodeId;
    const index = selectedElements.findIndex((item) => item.id === idValue);
    if (index >= 0) {
      selectedElements.splice(index, 1);
    }
    node.remove();
    updateBonding();
  });
}

function ensureBondLines() {
  if (bondLines) return;
  bondLines = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  bondLines.classList.add("bond-lines");
  bondArea.appendChild(bondLines);
}

function arrangeNodes() {
  const nodes = Array.from(bondArea.querySelectorAll(".bond-node"));
  if (nodes.length === 0) {
    drawBondLines();
    return;
  }

  const rect = bondArea.getBoundingClientRect();
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const size = 72;
  const radius = Math.max(40, Math.min(rect.width, rect.height) / 2 - size);

  if (nodes.length === 1) {
    positionNode(nodes[0], centerX - size / 2, centerY - size / 2);
    drawBondLines();
    return;
  }

  if (nodes.length === 2) {
    positionNode(nodes[0], centerX - size - 8, centerY - size / 2);
    positionNode(nodes[1], centerX + 8, centerY - size / 2);
    drawBondLines();
    return;
  }

  if (nodes.length === 3) {
    const points = trianglePoints(centerX, centerY, radius * 0.7);
    nodes.forEach((node, index) => {
      positionNode(node, points[index].x - size / 2, points[index].y - size / 2);
    });
    drawBondLines();
    return;
  }

  if (nodes.length === 4) {
    const points = squarePoints(centerX, centerY, radius * 0.7);
    nodes.forEach((node, index) => {
      positionNode(node, points[index].x - size / 2, points[index].y - size / 2);
    });
    drawBondLines();
    return;
  }

  const angleStep = (Math.PI * 2) / nodes.length;
  nodes.forEach((node, index) => {
    const angle = -Math.PI / 2 + angleStep * index;
    const x = centerX + Math.cos(angle) * radius;
    const y = centerY + Math.sin(angle) * radius;
    positionNode(node, x - size / 2, y - size / 2);
  });
  drawBondLines();
}

function positionNode(node, x, y) {
  const rect = bondArea.getBoundingClientRect();
  const size = 72;
  const clampedX = Math.min(Math.max(x, 0), rect.width - size);
  const clampedY = Math.min(Math.max(y, 0), rect.height - size);
  node.style.left = `${clampedX}px`;
  node.style.top = `${clampedY}px`;
}

function trianglePoints(cx, cy, r) {
  return [
    { x: cx, y: cy - r },
    { x: cx - r * 0.9, y: cy + r * 0.6 },
    { x: cx + r * 0.9, y: cy + r * 0.6 }
  ];
}

function squarePoints(cx, cy, r) {
  return [
    { x: cx - r, y: cy - r },
    { x: cx + r, y: cy - r },
    { x: cx + r, y: cy + r },
    { x: cx - r, y: cy + r }
  ];
}

function drawBondLines() {
  if (!bondLines) return;
  bondLines.innerHTML = "";

  const nodes = Array.from(bondArea.querySelectorAll(".bond-node"));
  if (nodes.length < 2) return;

  const currentFormula = createFormula(selectedElements.map((item) => item.element));
  const order = bondOrderMap[currentFormula] || 1;

  const centers = nodes.map((node) => {
    const rect = node.getBoundingClientRect();
    const areaRect = bondArea.getBoundingClientRect();
    return {
      x: rect.left - areaRect.left + rect.width / 2,
      y: rect.top - areaRect.top + rect.height / 2
    };
  });

  const center = centers[0];
  centers.slice(1).forEach((point) => {
    if (nodes.length === 2 && order > 1) {
      drawMultipleBond(center, point, order);
    } else {
      drawSingleBond(center, point);
    }
  });
}

function drawSingleBond(a, b) {
  const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", a.x);
  line.setAttribute("y1", a.y);
  line.setAttribute("x2", b.x);
  line.setAttribute("y2", b.y);
  line.setAttribute("stroke", "rgba(255, 138, 91, 0.65)");
  line.setAttribute("stroke-width", "2");
  line.setAttribute("stroke-linecap", "round");
  bondLines.appendChild(line);
}

function drawMultipleBond(a, b, order) {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const length = Math.hypot(dx, dy) || 1;
  const offsetX = (-dy / length) * 4;
  const offsetY = (dx / length) * 4;

  if (order === 2) {
    drawSingleBond({ x: a.x - offsetX, y: a.y - offsetY }, { x: b.x - offsetX, y: b.y - offsetY });
    drawSingleBond({ x: a.x + offsetX, y: a.y + offsetY }, { x: b.x + offsetX, y: b.y + offsetY });
    return;
  }

  drawSingleBond(a, b);
  drawSingleBond({ x: a.x - offsetX * 1.4, y: a.y - offsetY * 1.4 }, { x: b.x - offsetX * 1.4, y: b.y - offsetY * 1.4 });
  drawSingleBond({ x: a.x + offsetX * 1.4, y: a.y + offsetY * 1.4 }, { x: b.x + offsetX * 1.4, y: b.y + offsetY * 1.4 });
}

function addBondNode(element, x, y) {
  ensureBondLines();
  const node = document.createElement("div");
  node.className = "bond-node";
  node.dataset.symbol = element.symbol;
  node.dataset.number = String(element.number);
  node.dataset.nodeId = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  node.draggable = true;
  node.innerHTML = `
    <div>
      <div class="symbol">${element.symbol}</div>
      <div class="number">${element.number}</div>
    </div>
  `;

  const size = 72;
  const rect = bondArea.getBoundingClientRect();
  const clampedX = Math.min(Math.max(x - size / 2, 0), rect.width - size);
  const clampedY = Math.min(Math.max(y - size / 2, 0), rect.height - size);
  node.style.left = `${clampedX}px`;
  node.style.top = `${clampedY}px`;

  node.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", node.dataset.nodeId);
  });

  enableNodeDrag(node);
  bondArea.appendChild(node);
  selectedElements.push({ id: node.dataset.nodeId, element });
  arrangeNodes();
}

function enableNodeDrag(node) {
  let isDragging = false;
  let offsetX = 0;
  let offsetY = 0;

  node.addEventListener("pointerdown", (event) => {
    isDragging = true;
    node.setPointerCapture(event.pointerId);
    const rect = node.getBoundingClientRect();
    offsetX = event.clientX - rect.left;
    offsetY = event.clientY - rect.top;
  });

  node.addEventListener("pointermove", (event) => {
    if (!isDragging) return;
    const areaRect = bondArea.getBoundingClientRect();
    const size = 72;
    const x = event.clientX - areaRect.left - offsetX;
    const y = event.clientY - areaRect.top - offsetY;
    const clampedX = Math.min(Math.max(x, 0), areaRect.width - size);
    const clampedY = Math.min(Math.max(y, 0), areaRect.height - size);
    node.style.left = `${clampedX}px`;
    node.style.top = `${clampedY}px`;
    drawBondLines();
  });

  node.addEventListener("pointerup", () => {
    isDragging = false;
  });

  node.addEventListener("pointerleave", () => {
    isDragging = false;
  });
}

function createFormula(choices) {
  const counts = choices.reduce((acc, element) => {
    acc[element.symbol] = (acc[element.symbol] || 0) + 1;
    return acc;
  }, {});

  const symbols = Object.keys(counts);
  const hasCarbon = symbols.includes("C");

  let ordered = [];
  if (hasCarbon) {
    ordered = ["C", "H"].filter((symbol) => symbols.includes(symbol));
    const rest = symbols.filter((symbol) => !ordered.includes(symbol)).sort();
    ordered = ordered.concat(rest);
  } else {
    ordered = symbols.sort();
  }

  return ordered.map((symbol) => `${symbol}${counts[symbol] > 1 ? counts[symbol] : ""}`).join("");
}

function detectBondType(choices) {
  if (choices.length < 2) {
    return { type: "-", detail: "두 개 이상의 원소를 넣어주세요." };
  }

  const allMetals = choices.every((item) => item.metal);
  if (allMetals) {
    return { type: "금속결합", detail: "금속 원자들이 자유 전자 바다를 공유합니다." };
  }

  const hasMetal = choices.some((item) => item.metal);
  const hasNonMetal = choices.some((item) => !item.metal);
  if (hasMetal && hasNonMetal) {
    return { type: "이온결합", detail: "금속이 전자를 주고 비금속이 받는 결합입니다." };
  }

  const pairDiffs = [];
  for (let i = 0; i < choices.length; i += 1) {
    for (let j = i + 1; j < choices.length; j += 1) {
      const enA = choices[i].en;
      const enB = choices[j].en;
      if (enA == null || enB == null) {
        continue;
      }
      pairDiffs.push(Math.abs(enA - enB));
    }
  }

  if (pairDiffs.length === 0) {
    return { type: "공유결합", detail: "전기음성도 정보가 부족해 기본 결합으로 표시합니다." };
  }

  const maxDiff = Math.max(...pairDiffs);
  if (maxDiff > 1.7) {
    return { type: "이온결합", detail: "전기음성도 차이가 큰 결합입니다." };
  }
  if (maxDiff >= 0.4) {
    return { type: "공유결합 (극성)", detail: "전자쌍을 공유하지만 치우침이 있습니다." };
  }

  return { type: "공유결합 (비극성)", detail: "전자쌍을 균등하게 공유합니다." };
}

function detectHydrogenBond(choices) {
  const hasHydrogen = choices.some((item) => item.symbol === "H");
  const electronegatives = choices.filter((item) => ["N", "O", "F"].includes(item.symbol));
  if (hasHydrogen && electronegatives.length >= 2) {
    return "수소결합 가능: H가 N/O/F와 결합하면 분자 사이에 수소결합이 생깁니다.";
  }
  return null;
}

function getProperties(choices, bondInfo) {
  const propertiesList = [];
  const unique = new Set(choices.map((item) => item.symbol));

  if (bondInfo.type.includes("이온")) {
    propertiesList.push("상온에서 고체일 가능성이 큽니다.");
    propertiesList.push("물에 녹으면 전기 전도성이 커집니다.");
  } else if (bondInfo.type.includes("금속")) {
    propertiesList.push("전기 전도성이 높습니다.");
    propertiesList.push("연성과 전성이 좋아 형태를 만들기 쉽습니다.");
  } else {
    propertiesList.push("대체로 낮은 녹는점을 가질 수 있습니다.");
    propertiesList.push("분자 간 힘에 따라 상태가 달라집니다.");
  }

  if (unique.has("O") && unique.has("H")) {
    propertiesList.push("극성 분자일 가능성이 높습니다.");
  }

  const hydrogenBondNote = detectHydrogenBond(choices);
  if (hydrogenBondNote) {
    propertiesList.push(hydrogenBondNote);
  }

  if (choices.length >= 3) {
    propertiesList.push("복합 구조로 인해 다양한 구조 이성질체가 가능할 수 있습니다.");
  }

  return propertiesList;
}

function updateBonding() {
  const choices = selectedElements.map((item) => item.element);
  if (choices.length === 0) {
    bondType.textContent = "-";
    formula.textContent = "-";
    moleculeName.textContent = "-";
    bondDescription.textContent = "원소를 놓아주세요.";
    properties.innerHTML = "";
    drawBondLines();
    return;
  }

  const bondInfo = detectBondType(choices);
  bondType.textContent = bondInfo.type;
  const formulaText = createFormula(choices);
  formula.textContent = formulaText;
  moleculeName.textContent = moleculeNameMapAll[formulaText] || "-";
  bondDescription.textContent = bondInfo.detail;

  const items = getProperties(choices, bondInfo);
  properties.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
  arrangeNodes();
  drawBondLines();
}

function resetAll() {
  selectedElements.length = 0;
  bondArea.querySelectorAll(".bond-node").forEach((node) => node.remove());
  if (bondLines) {
    bondLines.innerHTML = "";
  }
  updateBonding();
}

resetBtn.addEventListener("click", resetAll);

renderTable();
setupCanvas();
ensureBondLines();
updateBonding();
