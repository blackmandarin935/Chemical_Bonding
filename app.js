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
const bondDescription = document.getElementById("bondDescription");
const properties = document.getElementById("properties");
const resetBtn = document.getElementById("resetBtn");

const selectedElements = [];
const maxNodes = 8;

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
    card.draggable = true;
    card.style.gridColumn = element.col;
    card.style.gridRow = element.row;
    card.dataset.symbol = element.symbol;
    card.innerHTML = `
      <span class="number">${element.number}</span>
      <span class="symbol">${element.symbol}</span>
      <span class="name">${element.name}</span>
    `;

    card.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", element.symbol);
    });

    grid.appendChild(card);
  });

  table.replaceWith(grid);
  grid.id = "periodicTable";
}

function setupCanvas() {
  bondArea.addEventListener("dragover", (event) => {
    event.preventDefault();
    bondArea.classList.add("drag-over");
  });

  bondArea.addEventListener("dragleave", () => {
    bondArea.classList.remove("drag-over");
  });

  bondArea.addEventListener("drop", (event) => {
    event.preventDefault();
    bondArea.classList.remove("drag-over");
    const symbol = event.dataTransfer.getData("text/plain");
    const element = elements.find((item) => item.symbol === symbol);
    if (!element) return;
    if (selectedElements.length >= maxNodes) return;
    const rect = bondArea.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    addBondNode(element, x, y);
    updateBonding();
  });

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

function addBondNode(element, x, y) {
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

  return Object.keys(counts)
    .sort()
    .map((symbol) => `${symbol}${counts[symbol] > 1 ? counts[symbol] : ""}`)
    .join("");
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
    bondDescription.textContent = "원소를 놓아주세요.";
    properties.innerHTML = "";
    return;
  }

  const bondInfo = detectBondType(choices);
  bondType.textContent = bondInfo.type;
  formula.textContent = createFormula(choices);
  bondDescription.textContent = bondInfo.detail;

  const items = getProperties(choices, bondInfo);
  properties.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
}

function resetAll() {
  selectedElements.length = 0;
  bondArea.querySelectorAll(".bond-node").forEach((node) => node.remove());
  updateBonding();
}

resetBtn.addEventListener("click", resetAll);

renderTable();
setupCanvas();
updateBonding();
