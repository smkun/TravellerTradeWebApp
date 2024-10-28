// === CONSTANTS AND DATA STRUCTURES ===
const TRADE_DATA = {
    trade_goods: [
        {
            name: "Basic Electronics",
            availability: ["All"],
            tons: "1d6x10",
            base_price: 10000,
            purchase_dm: { In: 2, Ht: 3, Ri: 1 },
            sale_dm: { Ni: 2, Lt: 1, Po: 1 },
            examples: "computers, radios, instruments (TL <10)",
            illegal: false,
        },
        {
            name: "Basic Machine Parts",
            availability: ["All"],
            tons: "1d6x10",
            base_price: 10000,
            purchase_dm: { Na: 2, In: 5 },
            sale_dm: { Ni: 3, Ag: 2 },
            examples: "parts for vehicles, computers, machinery",
            illegal: false,
        },
        {
            name: "Basic Manufactured Goods",
            availability: ["All"],
            tons: "1d6x10",
            base_price: 10000,
            purchase_dm: { Na: 2, In: 5 },
            sale_dm: { Ni: 3, Hi: 2 },
            examples: "appliances, clothes, tools (TL <10)",
            illegal: false,
        },
        {
            name: "Basic Raw Materials",
            availability: ["All"],
            tons: "1d6x10",
            base_price: 5000,
            purchase_dm: { Ag: 3, Ga: 2 },
            sale_dm: { In: 2, Po: 2 },
            examples: "metal, chemicals, fibers",
            illegal: false,
        },
        {
            name: "Basic Consumables",
            availability: ["All"],
            tons: "1d6x10",
            base_price: 2000,
            purchase_dm: { Ag: 3, Wa: 2, Ga: 1, As: -4 },
            sale_dm: { As: 1, Fl: 1, Ic: 1, Hi: 1 },
            examples: "food, drink, paper products",
            illegal: false,
        },
        {
            name: "Basic Ore",
            availability: ["All"],
            tons: "1d6x10",
            base_price: 1000,
            purchase_dm: { As: 4, Ic: 0 },
            sale_dm: { In: 3, Ni: 1 },
            examples: "copper, iron, nickel, coal",
            illegal: false,
        },
        {
            name: "Advanced Electronics",
            availability: ["In", "Ht"],
            tons: "1d6x5",
            base_price: 100000,
            purchase_dm: { In: 2, Ht: 3 },
            sale_dm: { Ni: 1, Ri: 2, As: 3 },
            examples: "computers, sensors, instruments (TL 11-15)",
            illegal: false,
        },
        {
            name: "Advanced Machine Parts",
            availability: ["In", "Ht"],
            tons: "1d6x5",
            base_price: 75000,
            purchase_dm: { In: 2, Ht: 1 },
            sale_dm: { As: 2, Ni: 1 },
            examples: "farm, manufct, & constrn machine parts",
            illegal: false,
        },
        {
            name: "Advanced Manufactured Goods",
            availability: ["In", "Ht"],
            tons: "1d6x5",
            base_price: 100000,
            purchase_dm: { In: 1, Ht: 0 },
            sale_dm: { Hi: 1, Ri: 2 },
            examples: "adv tools, adv appliances (TL 11-15)",
            illegal: false,
        },
        {
            name: "Advanced Weapons",
            availability: ["In", "Ht"],
            tons: "1d6x5",
            base_price: 150000,
            purchase_dm: { In: 0, Ht: 2 },
            sale_dm: { Po: 1, Za: 2, Zr: 4 },
            examples: "guns, explosives, artillery, tanks, ordinance",
            illegal: false,
        },
        {
            name: "Advanced Vehicles",
            availability: ["In", "Ht"],
            tons: "1d6x5",
            base_price: 180000,
            purchase_dm: { In: 0, Ht: 2 },
            sale_dm: { As: 2, Ri: 2 },
            examples: "air-raft, grav-vehicles, space craft (to TL-15)",
            illegal: false,
        },
        {
            name: "Biochemicals",
            availability: ["Ag", "Wa"],
            tons: "1d6x5",
            base_price: 50000,
            purchase_dm: { Ag: 1, Wa: 2 },
            sale_dm: { In: 2 },
            examples: "bio-fuels, organic chemicals, extracts",
            illegal: false,
        },
        {
            name: "Crystals & Gems",
            availability: ["As", "De", "Ic"],
            tons: "1d6x5",
            base_price: 20000,
            purchase_dm: { As: 2, De: 1, Ic: 1 },
            sale_dm: { In: 3, Ri: 2 },
            examples: "diamonds, rubies, onyx, bloodstone",
            illegal: false,
        },
        {
            name: "Cybernetics",
            availability: ["Ht"],
            tons: "1d6",
            base_price: 250000,
            purchase_dm: { Ht: 0 },
            sale_dm: { As: 1, Ic: 1, Ri: 2 },
            examples: "cyber eyes, limbs",
            illegal: false,
        },
        {
            name: "Live Animals",
            availability: ["Ag", "Ga"],
            tons: "1d6x10",
            base_price: 10000,
            purchase_dm: { Ag: 2, Ga: 0 },
            sale_dm: { Lo: 3 },
            examples: "cattle, pets, transport/burden animals",
            illegal: false,
        },
        {
            name: "Luxury Consumables",
            availability: ["Ag", "Ga", "Wa"],
            tons: "1d6x10",
            base_price: 20000,
            purchase_dm: { Ag: 2, Ga: 0, Wa: 1 },
            sale_dm: { Ri: 2, Hi: 2 },
            examples: "rare foods, liquor, perfumes",
            illegal: false,
        },
        {
            name: "Luxury Goods",
            availability: ["Hi"],
            tons: "1d6",
            base_price: 200000,
            purchase_dm: { Hi: 0 },
            sale_dm: { Ri: 4 },
            examples: "art objects, exotic furniture",
            illegal: false,
        },
        {
            name: "Medical Supplies",
            availability: ["Ht", "Hi"],
            tons: "1d6x5",
            base_price: 50000,
            purchase_dm: { Ht: 2, Hi: 0 },
            sale_dm: { In: 2, Po: 1, Ri: 1 },
            examples: "medical equipment, tools",
            illegal: false,
        },
        {
            name: "Petrochemicals",
            availability: ["De", "Fl", "Ic", "Wa"],
            tons: "1d6x10",
            base_price: 10000,
            purchase_dm: { De: 2, Fl: 0, Ic: 0, Wa: 0 },
            sale_dm: { In: 2, Ag: 1, Lt: 2 },
            examples: "oil, liquid fuel",
            illegal: false,
        },
        {
            name: "Pharmaceuticals",
            availability: ["As", "De", "Hi", "Wa"],
            tons: "1d6x10",
            base_price: 100000,
            purchase_dm: { As: 2, De: 0, Hi: 1, Wa: 0 },
            sale_dm: { Ri: 2, Lt: 1 },
            examples: "drugs",
            illegal: false,
        },
        {
            name: "Polymers",
            availability: ["In"],
            tons: "1d6x10",
            base_price: 7000,
            purchase_dm: { In: 0 },
            sale_dm: { Ri: 2, Lt: 1 },
            examples: "plastics, synthetics",
            illegal: false,
        },
        {
            name: "Precious Metals",
            availability: ["As", "De", "Ic", "Fl"],
            tons: "1d6",
            base_price: 50000,
            purchase_dm: { As: 3, De: 1, Ic: 2, Fl: 0 },
            sale_dm: { Ri: 3, In: 2, Ht: 1 },
            examples: "gold, silver, platinum",
            illegal: false,
        },
        {
            name: "Radioactives",
            availability: ["As", "De", "Lo"],
            tons: "1d6",
            base_price: 1000000,
            purchase_dm: { As: 2, De: 1, Lo: 2 },
            sale_dm: { In: 3, Ht: 1, Ni: 2, Lt: 1 },
            examples: "uranium, plutonium",
            illegal: false,
        },
        {
            name: "Robots",
            availability: ["In", "Ht"],
            tons: "1d6x5",
            base_price: 400000,
            purchase_dm: { In: 0, Ht: 1 },
            sale_dm: { Ag: 2, As: 3 },
            examples: "industrial robots, service robots",
            illegal: false,
        },
        {
            name: "Spices",
            availability: ["Ga", "De", "Wa"],
            tons: "1d6x5",
            base_price: 6000,
            purchase_dm: { Ga: 2, De: 0, Wa: 0 },
            sale_dm: { Hi: 2, Po: 3, Ri: 3 },
            examples: "exotic spices, flavoring agents",
            illegal: false,
        },
        {
            name: "Textiles",
            availability: ["Ag", "Ni"],
            tons: "1d6x10",
            base_price: 3000,
            purchase_dm: { Ag: 7, Ni: 0 },
            sale_dm: { Hi: 3, Na: 2 },
            examples: "fabrics, cloth, rugs",
            illegal: false,
        },
        {
            name: "Wood",
            availability: ["Ag", "Ga"],
            tons: "1d6x10",
            base_price: 1000,
            purchase_dm: { Ag: 6, Ga: 0 },
            sale_dm: { Ri: 2, In: 1 },
            examples: "lumber, furniture",
            illegal: false,
        },
        {
            name: "Vehicles",
            availability: ["In", "Ht"],
            tons: "1d6x10",
            base_price: 15000,
            purchase_dm: { In: 2, Ht: 1 },
            sale_dm: { Ni: 2, Hi: 1 },
            examples: "ground vehicles, aircraft",
            illegal: false,
        },
        {
            name: "Uncommon Ore",
            availability: ["As", "Ic"],
            tons: "1d6x10",
            base_price: 5000,
            purchase_dm: { As: 4, Ic: 1 },
            sale_dm: { In: 3, Ni: 1 },
            examples: "valuable ores & minerals",
            illegal: false,
        },
        {
            name: "Uncommon Raw Materials",
            availability: ["Ag", "De", "Wa"],
            tons: "1d6x10",
            base_price: 20000,
            purchase_dm: { Ag: 2, De: 1, Wa: 1 },
            sale_dm: { In: 2, Ht: 1 },
            examples: "rare elements, special compounds",
            illegal: false,
        },
        {
            name: "Illegal Biochemicals",
            availability: ["Ag", "Wa"],
            tons: "1d6x5",
            base_price: 50000,
            purchase_dm: { Ag: 0, Wa: 2 },
            sale_dm: { In: 6 },
            examples: "dangerous chemicals & extracts",
            illegal: true,
        },
        {
            name: "Illegal Cybernetics",
            availability: ["Ht"],
            tons: "1d6",
            base_price: 250000,
            purchase_dm: { Ht: 0 },
            sale_dm: { As: 4, Ic: 4, Ri: 8 },
            examples: "combat & illicit enhancements",
            illegal: true,
        },
        {
            name: "Illegal Drugs",
            availability: ["As", "De", "Hi", "Wa"],
            tons: "1d6",
            base_price: 100000,
            purchase_dm: { As: 0, De: 0, Hi: 0, Wa: 0 },
            sale_dm: { Ri: 6, Hi: 4 },
            examples: "combat & illicit/addictive drugs",
            illegal: true,
        },
        {
            name: "Illegal Luxuries",
            availability: ["Ag", "Ga", "Wa"],
            tons: "1d6",
            base_price: 50000,
            purchase_dm: { Ag: 2, Ga: 0, Wa: 1 },
            sale_dm: { Ri: 6, Hi: 4 },
            examples: "debauched or illicit luxuries",
            illegal: true,
        },
        {
            name: "Illegal Weapons",
            availability: ["In", "Ht"],
            tons: "1d6x5",
            base_price: 150000,
            purchase_dm: { In: 0, Ht: 2 },
            sale_dm: { Po: 6, Za: 8, Zr: 10 },
            examples: "naval weapons, mass weapons",
            illegal: true,
        },
    ],
    price_table: {
        "-3": { purchase: 200, sale: 40 },
        "-2": { purchase: 190, sale: 45 },
        "-1": { purchase: 180, sale: 50 },
        0: { purchase: 170, sale: 55 },
        1: { purchase: 160, sale: 60 },
        2: { purchase: 150, sale: 65 },
        3: { purchase: 140, sale: 70 },
        4: { purchase: 130, sale: 75 },
        5: { purchase: 120, sale: 80 },
        6: { purchase: 110, sale: 85 },
        7: { purchase: 100, sale: 90 },
        8: { purchase: 90, sale: 100 },
        9: { purchase: 85, sale: 110 },
        10: { purchase: 80, sale: 120 },
        11: { purchase: 75, sale: 130 },
        12: { purchase: 70, sale: 140 },
        13: { purchase: 65, sale: 150 },
        14: { purchase: 60, sale: 160 },
        15: { purchase: 55, sale: 170 },
        16: { purchase: 50, sale: 180 },
        17: { purchase: 45, sale: 190 },
        18: { purchase: 40, sale: 200 },
        19: { purchase: 35, sale: 210 },
        20: { purchase: 30, sale: 220 },
        21: { purchase: 25, sale: 230 },
        22: { purchase: 20, sale: 240 },
        23: { purchase: 15, sale: 250 },
        24: { purchase: 10, sale: 260 },
        25: { purchase: 5, sale: 270 },
    },
    trade_codes: [
        { code: "Ag", description: "Agricultural" },
        { code: "As", description: "Asteroid" },
        { code: "De", description: "Desert" },
        { code: "Fl", description: "Fluid Oceans" },
        { code: "Ga", description: "Garden" },
        { code: "Hi", description: "High Population" },
        { code: "Ht", description: "High Technology" },
        { code: "Ic", description: "Ice-Capped" },
        { code: "In", description: "Industrial" },
        { code: "Lo", description: "Low Population" },
        { code: "Lt", description: "Low Technology" },
        { code: "Na", description: "Non-Agricultural" },
        { code: "Ni", description: "Non-Industrial" },
        { code: "Po", description: "Poor" },
        { code: "Ri", description: "Rich" },
        { code: "Wa", description: "Water World" },
        { code: "Za", description: "Amber Zone" },
        { code: "Zr", description: "Red Zone" },
    ],
};

// === STATE MANAGEMENT ===
let shipData = {
    name: "",
    credits: 0,
    cargoSpace: 0,
    availableCargo: 0,
    passengerBerths: {
        high: 0,
        middle: 0,
        basic: 0,
        low: 0,
    },
    broker: {
        name: "",
        intelligence: 0,
        social: 0,
        education: 0,
        brokerSkill: 0,
        computerSkill: 0,
        streetwiseSkill: 0,
    },
    stewardSkill: 0,
    cargo: [],
    lastSaved: null,
};

let hasUnsavedChanges = false;

const specBuyState = {
    supplierFound: false,
    supplierDM: null,
    selectedGoods: new Set(),
    worldCodes: {},
};

const SPEC_SELL_STATE = {
    buyerFound: false,
    buyerDM: null,
    selectedCargo: null,
    negotiatedSales: [],
    worldCodes: {},
};

// === FUNCTIONS RELEVANT TO ALL TABS ===
function handleDataChange() {
    hasUnsavedChanges = true;
    updateSaveIndicator();
    if (window.autoSaveTimeout) {
        clearTimeout(window.autoSaveTimeout);
    }
    window.autoSaveTimeout = setTimeout(() => autoSave(), 2000);
}

function updateSaveIndicator() {
    const indicator = document.getElementById("save-indicator");
    indicator.textContent = hasUnsavedChanges
        ? "Unsaved changes"
        : "All changes saved";
    indicator.className = `save-indicator ${
        hasUnsavedChanges ? "unsaved" : "saved"
    }`;
}

function autoSave() {
    updateShipDataFromForm();
    localStorage.setItem("lastShipData", JSON.stringify(shipData));
    hasUnsavedChanges = false;
    updateSaveIndicator();
}

// === INITIALIZATION ===
// Update your document.addEventListener("DOMContentLoaded", function () {...}) section
document.addEventListener("DOMContentLoaded", function () {
    // Initialize tab switching
    document.querySelectorAll(".tab-button").forEach((button) => {
        button.addEventListener("click", () => {
            // Remove active class from all buttons
            document
                .querySelectorAll(".tab-button")
                .forEach((btn) => btn.classList.remove("active"));
            button.classList.add("active");

            // Remove active class from all content
            document
                .querySelectorAll(".tab-content")
                .forEach((content) => content.classList.remove("active"));

            // Get tab ID from data-tab attribute and show corresponding content
            const tabId = button.getAttribute("data-tab");
            document.getElementById(tabId).classList.add("active");

            // Initialize appropriate tab
            if (tabId === "spec-buy") {
                showSpecBuyTab();
            } else if (tabId === "spec-sell") {
                showSpecSellTab();
            } else if (tabId === "passenger") {
                showPassengerTab();
            }
        });
    });

    // Initial form setup
    initializeForm();

    // Find the tab buttons
    const tabButtons = document.querySelectorAll(".tab-button");

    // Add data-tab attributes if they're missing
    tabButtons.forEach((button) => {
        if (button.textContent.trim() === "Ship Data") {
            button.setAttribute("data-tab", "ship-data");
        } else if (button.textContent.trim() === "Spec. Buy") {
            button.setAttribute("data-tab", "spec-buy");
        } else if (button.textContent.trim() === "Spec. Sell") {
            button.setAttribute("data-tab", "spec-sell");
        } else if (button.textContent.trim() === "Passengers") {
            button.setAttribute("data-tab", "passenger");
        }
    });
});

// === FUNCTIONS FOR SHIP-DATA TAB ===
function updateShipDataFromForm() {
    shipData.name = document.getElementById("ship-name").value;
    shipData.credits = parseInt(document.getElementById("credits").value) || 0;
    shipData.cargoSpace =
        parseInt(document.getElementById("cargo-space").value) || 0;
    shipData.passengerBerths = {
        high: parseInt(document.getElementById("high-berths").value) || 0,
        middle: parseInt(document.getElementById("middle-berths").value) || 0,
        basic: parseInt(document.getElementById("basic-berths").value) || 0,
        low: parseInt(document.getElementById("low-berths").value) || 0,
    };
    shipData.broker = {
        name: document.getElementById("broker-name").value,
        intelligence:
            parseInt(document.getElementById("broker-int").value) || 0,
        social: parseInt(document.getElementById("broker-soc").value) || 0,
        education: parseInt(document.getElementById("broker-edu").value) || 0,
        brokerSkill:
            parseInt(document.getElementById("broker-skill").value) || 0,
        computerSkill:
            parseInt(document.getElementById("computer-skill").value) || 0,
        streetwiseSkill:
            parseInt(document.getElementById("streetwise-skill").value) || 0,
    };
    shipData.stewardSkill =
        parseInt(document.getElementById("steward-skill").value) || 0;
    updateAvailableCargo();
}

function initializeForm() {
    document.getElementById("ship-name").value = shipData.name || "";
    document.getElementById("credits").value = shipData.credits || 0;
    document.getElementById("cargo-space").value = shipData.cargoSpace || 0;
    document.getElementById("available-cargo").value =
        shipData.availableCargo || 0;
    document.getElementById("high-berths").value =
        shipData.passengerBerths?.high || 0;
    document.getElementById("middle-berths").value =
        shipData.passengerBerths?.middle || 0;
    document.getElementById("basic-berths").value =
        shipData.passengerBerths?.basic || 0;
    document.getElementById("low-berths").value =
        shipData.passengerBerths?.low || 0;
    document.getElementById("broker-name").value = shipData.broker?.name || "";
    document.getElementById("broker-int").value =
        shipData.broker?.intelligence || 0;
    document.getElementById("broker-soc").value = shipData.broker?.social || 0;
    document.getElementById("broker-edu").value =
        shipData.broker?.education || 0;
    document.getElementById("broker-skill").value =
        shipData.broker?.brokerSkill || 0;
    document.getElementById("computer-skill").value =
        shipData.broker?.computerSkill || 0;
    document.getElementById("streetwise-skill").value =
        shipData.broker?.streetwiseSkill || 0;
    document.getElementById("steward-skill").value = shipData.stewardSkill || 0;
    updateCargoTable();
    updateAvailableCargo();
    populateGoodsDropdown();
    showSpecBuyTab();

    // Add event listener for cargo space input
    const cargoSpaceInput = document.getElementById("cargo-space");
    if (cargoSpaceInput) {
        cargoSpaceInput.addEventListener("input", function () {
            updateAvailableCargo();
            handleDataChange();
        });
    }
}

function populateGoodsDropdown() {
    const dropdown = document.getElementById("cargo-good");
    if (!dropdown) return;

    dropdown.innerHTML = '<option value="">Select a good</option>';
    TRADE_DATA.trade_goods.forEach((good) => {
        const option = document.createElement("option");
        option.value = good.name;
        option.textContent = good.name;
        dropdown.appendChild(option);
    });
}

function handleCreditsChange(action) {
    const amount = parseInt(document.getElementById("credit-amount").value);
    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }
    if (action === "remove" && amount > shipData.credits) {
        alert("Not enough credits available.");
        return;
    }
    shipData.credits += action === "add" ? amount : -amount;
    document.getElementById("credits").value = shipData.credits;
    document.getElementById("credit-amount").value = "";
    handleDataChange();
}

function updateCargoTable() {
    const tbody = document.querySelector("#cargo-table tbody");
    if (!tbody) return;

    tbody.innerHTML = "";
    shipData.cargo.forEach((item, index) => {
        const row = tbody.insertRow();
        row.innerHTML = `
            <td>${item.good}</td>
            <td>${item.tons}</td>
            <td>
                <input type="number" id="modify-tons-${index}" min="1" value="1" class="tons-input">
                <button onclick="addExistingCargo(${index})" class="small-button">Add</button>
                <button onclick="removeCargo(${index})" class="small-button">Remove</button>
            </td>
        `;
    });
}

function updateAvailableCargo() {
    const cargoSpace = parseInt(shipData.cargoSpace) || 0;
    const totalCargo = shipData.cargo.reduce(
        (sum, item) => sum + (parseInt(item.tons) || 0),
        0
    );
    shipData.availableCargo = cargoSpace - totalCargo;
    const availableCargoElement = document.getElementById("available-cargo");
    if (availableCargoElement) {
        availableCargoElement.value = shipData.availableCargo;
    }
}

function addCargoFromForm() {
    const goodName = document.getElementById("cargo-good").value;
    const tons = parseInt(document.getElementById("cargo-tons").value);

    if (!goodName || isNaN(tons) || tons <= 0) {
        alert("Please select a good and enter a valid number of tons.");
        return;
    }

    if (tons > shipData.availableCargo) {
        alert("Not enough cargo space available!");
        return;
    }

    const existingIndex = shipData.cargo.findIndex(
        (item) => item.good === goodName
    );
    if (existingIndex >= 0) {
        shipData.cargo[existingIndex].tons += tons;
    } else {
        shipData.cargo.push({ good: goodName, tons });
    }

    updateCargoTable();
    updateAvailableCargo();
    handleDataChange();

    // Reset form fields
    document.getElementById("cargo-good").value = "";
    document.getElementById("cargo-tons").value = "";
}

function addExistingCargo(index) {
    const tons = parseInt(
        document.getElementById(`modify-tons-${index}`).value
    );

    if (isNaN(tons) || tons <= 0) {
        alert("Please enter a valid number of tons to add.");
        return;
    }

    if (tons > shipData.availableCargo) {
        alert("Not enough cargo space available!");
        return;
    }

    shipData.cargo[index].tons += tons;
    updateCargoTable();
    updateAvailableCargo();
    handleDataChange();
}

function removeCargo(index) {
    const tons = parseInt(
        document.getElementById(`modify-tons-${index}`).value
    );

    if (isNaN(tons) || tons <= 0 || tons > shipData.cargo[index].tons) {
        alert("Please enter a valid number of tons to remove.");
        return;
    }

    shipData.cargo[index].tons -= tons;
    if (shipData.cargo[index].tons <= 0) {
        shipData.cargo.splice(index, 1);
    }

    updateCargoTable();
    updateAvailableCargo();
    handleDataChange();
}

function saveShipData() {
    updateShipDataFromForm();
    try {
        const fileName = `${shipData.name || "unnamed_ship"}_data.json`;
        const dataStr = JSON.stringify(shipData, null, 2);
        const blob = new Blob([dataStr], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        localStorage.setItem("lastShipData", dataStr);
        shipData.lastSaved = new Date().toISOString();
        hasUnsavedChanges = false;
        updateSaveIndicator();
        alert("Ship data saved successfully!");
    } catch (error) {
        console.error("Error saving ship data:", error);
        alert("Error saving ship data: " + error.message);
    }
}

function handleFileLoad(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        try {
            const data = JSON.parse(e.target.result);

            if (
                hasUnsavedChanges &&
                !confirm("You have unsaved changes. Load new data anyway?")
            ) {
                return;
            }

            shipData = {
                name: "",
                credits: 0,
                cargoSpace: 0,
                availableCargo: 0,
                passengerBerths: {
                    high: 0,
                    middle: 0,
                    basic: 0,
                    low: 0,
                },
                broker: {
                    name: "",
                    intelligence: 0,
                    social: 0,
                    education: 0,
                    brokerSkill: 0,
                    computerSkill: 0,
                    streetwiseSkill: 0,
                },
                stewardSkill: 0,
                cargo: [],
                lastSaved: null,
                ...data,
            };

            initializeForm();
            hasUnsavedChanges = false;
            updateSaveIndicator();
            alert("Ship data loaded successfully!");
        } catch (error) {
            console.error("Error loading ship data:", error);
            alert("Error loading ship data: " + error.message);
        }
    };
    reader.readAsText(file);
}

function loadShipData() {
    let fileInput = document.getElementById("load-file");
    if (!fileInput) {
        fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.id = "load-file";
        fileInput.accept = ".json";
        fileInput.style.display = "none";
        document.body.appendChild(fileInput);
        fileInput.addEventListener("change", handleFileLoad);
    }
    fileInput.value = ""; // Clear the input to allow loading the same file again
    fileInput.click();
}

// === FUNCTIONS FOR SPEC-BUY TAB ===
function populateTradeCodesGrid() {
    const grid = document.querySelector(".trade-codes-grid");
    if (!grid) return;

    grid.innerHTML = "";

    TRADE_DATA.trade_codes.forEach(({ code, description }) => {
        const item = document.createElement("div");
        item.className = "trade-code-item";
        item.innerHTML = `
            <input type="checkbox" id="tc-${code}" value="${code}" class="trade-code-checkbox" />
            <label for="tc-${code}">${code} (${description})</label>
        `;
        grid.appendChild(item);
        specBuyState.worldCodes[code] = false;
        const checkbox = item.querySelector('input[type="checkbox"]');
        checkbox.addEventListener("change", (e) => {
            specBuyState.worldCodes[code] = e.target.checked;
            resetSpecBuyTab();
        });
    });
}

function showSpecBuyTab() {
    populateTradeCodesGrid();
}

function validateSupplierInputs() {
    const starportClass = document.getElementById("starport-class")?.value;
    const population = document.getElementById("population")?.value;
    const supplierType = document.getElementById("supplier-type")?.value;

    if (!starportClass || !population || !supplierType) {
        alert("Please select Starport Class, Population, and Supplier Type.");
        return false;
    }
    return true;
}

// Reset Spec Buy Tab
function resetSpecBuyTab() {
    // Clear supplier and goods-related information
    specBuyState.supplierFound = false;
    document.getElementById("supplier-result").textContent = "";
    document.getElementById("generate-goods-btn").disabled = true;
    document
        .getElementById("goods-table-left")
        .querySelector("tbody").innerHTML = "";
    document
        .getElementById("goods-table-right")
        .querySelector("tbody").innerHTML = "";
}

function findSupplier() {
    console.log("Find Supplier button clicked");
    if (!validateSupplierInputs()) return;

    const supplierType = document.getElementById("supplier-type").value;

    let attribute, skill;
    switch (supplierType) {
        case "Legitimate":
        case "Black Market":
            attribute = Math.max(
                shipData.broker.education,
                shipData.broker.social
            );
            skill =
                supplierType === "Legitimate"
                    ? shipData.broker.brokerSkill
                    : shipData.broker.streetwiseSkill;
            break;
        case "Legitimate Online (TL-8+)":
            attribute = shipData.broker.education;
            skill = shipData.broker.computerSkill;
            break;
        default:
            attribute = 0;
            skill = 0;
    }

    const baseRoll =
        Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + 2;
    let totalRoll = baseRoll;

    // Apply starport modifiers for all supplier types
    const starportMods = { A: 6, B: 4, C: 2 };
    const starportClass = document.getElementById("starport-class").value;
    totalRoll += starportMods[starportClass] || 0;

    const finalTotal = totalRoll + attribute + skill;

    if (finalTotal >= 8) {
        const timeTaken =
            supplierType === "Legitimate Online (TL-8+)"
                ? `${Math.floor(Math.random() * 6) + 1} hours`
                : `${Math.floor(Math.random() * 6) + 1} days`;

        specBuyState.supplierDM = Math.max(-6, -(finalTotal - 8));
        specBuyState.supplierFound = true;

        displaySupplierResult(
            true,
            timeTaken,
            baseRoll,
            attribute,
            skill,
            starportMods[starportClass] || 0,
            finalTotal,
            supplierType
        );
        document.getElementById("generate-goods-btn").disabled = false;
    } else {
        specBuyState.supplierDM = null;
        specBuyState.supplierFound = false;

        displaySupplierResult(
            false,
            null,
            baseRoll,
            attribute,
            skill,
            starportMods[starportClass] || 0,
            finalTotal,
            supplierType
        );
        document.getElementById("generate-goods-btn").disabled = true;
    }
}

function displaySupplierResult(
    success,
    timeTaken,
    baseRoll,
    brokerChar,
    skill,
    starportMod,
    finalTotal
) {
    const resultBox = document.getElementById("supplier-result");
    if (!resultBox) return;

    resultBox.className = `result-box ${success ? "success" : "failure"}`;

    let resultText = `Base Roll: ${baseRoll}\n`;
    resultText += `Broker Characteristic: +${brokerChar}\n`;
    resultText += `Skill: +${skill}\n`;
    resultText += `Starport Modifier: +${starportMod}\n`;
    resultText += `Final Total: ${finalTotal}\n\n`;

    if (success) {
        resultText += `Success! Supplier found in ${timeTaken}.\n`;
        resultText += `Purchase DM: ${specBuyState.supplierDM}`;
    } else {
        resultText += "Failed to find a supplier. Try again or look elsewhere.";
    }

    resultBox.textContent = resultText;
}

function generateGoods() {
    if (!specBuyState.supplierFound) {
        alert("Please find a supplier first.");
        return;
    }

    const goodsTableLeft = document
        .getElementById("goods-table-left")
        ?.querySelector("tbody");
    const goodsTableRight = document
        .getElementById("goods-table-right")
        ?.querySelector("tbody");
    if (!goodsTableLeft || !goodsTableRight) return;

    goodsTableLeft.innerHTML = "";
    goodsTableRight.innerHTML = "";

    const supplierType = document.getElementById("supplier-type").value;
    const isBlackMarket = supplierType === "Black Market";

    // Get the population value from the select element
    const populationSelect = document.getElementById("population");
    const population = populationSelect ? populationSelect.value : "";

    console.log(`Generating goods for population: ${population}`);

    const availableGoods = TRADE_DATA.trade_goods.filter((good) => {
        return isBlackMarket ? good.illegal : !good.illegal;
    });

    const commonGoods = availableGoods.filter((good) =>
        good.availability.includes("All")
    );
    const selectedTradeCodes = Object.keys(specBuyState.worldCodes).filter(
        (code) => specBuyState.worldCodes[code]
    );
    const tradeCodeGoods = availableGoods.filter((good) =>
        good.availability.some((code) => selectedTradeCodes.includes(code))
    );

    const goodsByName = {};

    // Add common and trade code goods to goodsByName
    [...commonGoods, ...tradeCodeGoods].forEach((good) => {
        if (!goodsByName[good.name]) {
            goodsByName[good.name] = {
                ...good,
                tons: calculateTons(good.tons, population),
            };
        } else {
            goodsByName[good.name].tons += calculateTons(good.tons, population);
        }
    });

    // Generate random additional goods
    const additionalGoodsCount = Math.max(1, Math.floor(Math.random() * 6) + 1);
    for (let i = 0; i < additionalGoodsCount; i++) {
        const randomGood =
            availableGoods[Math.floor(Math.random() * availableGoods.length)];
        if (!goodsByName[randomGood.name]) {
            goodsByName[randomGood.name] = {
                ...randomGood,
                tons: calculateTons(randomGood.tons, population),
            };
        } else {
            goodsByName[randomGood.name].tons += calculateTons(
                randomGood.tons,
                population
            );
        }
    }

    // Display all unique goods with color coding intact
    Object.values(goodsByName).forEach((good, index) => {
        const row = document.createElement("tr");

        // Assign row color based on type of good
        let rowClass = "extra"; // Default for extra/random goods
        if (commonGoods.some((cg) => cg.name === good.name)) {
            rowClass = "common"; // Green for common goods
        } else if (tradeCodeGoods.some((tc) => tc.name === good.name)) {
            rowClass = "world-specific"; // Yellow for world-specific goods
        }

        row.classList.add("goods-row", rowClass);
        row.innerHTML = `<td>${good.name}</td><td>${good.base_price}</td><td>${good.tons}</td>`;

        // Click event for selecting row
        row.addEventListener("click", () => {
            document
                .querySelectorAll(".goods-row")
                .forEach((r) => r.classList.remove("selected"));
            row.classList.add("selected");
            specBuyState.selectedGood = { ...good };
        });

        if (index % 2 === 0) {
            goodsTableLeft.appendChild(row);
        } else {
            goodsTableRight.appendChild(row);
        }
    });
}
// Helper function to calculate tons
function calculateTons(tonsExpression, population) {
    console.log(
        `Calculating tons for expression: ${tonsExpression}, population: ${population}`
    );

    let tons = 0;
    const match = tonsExpression.match(/(\d+)d(\d+)(?:x(\d+))?/);
    if (match) {
        const diceCount = parseInt(match[1], 10);
        const diceSides = parseInt(match[2], 10);
        const multiplier = parseInt(match[3] || "1", 10);

        console.log(
            `Dice: ${diceCount}d${diceSides}, Multiplier: ${multiplier}`
        );

        for (let i = 0; i < diceCount; i++) {
            const roll = Math.floor(Math.random() * diceSides) + 1;
            tons += roll;
            console.log(`Roll ${i + 1}: ${roll}`);
        }

        console.log(`Initial tons before population modifier: ${tons}`);

        // Apply population modifier
        if (population === "1" || population === "2" || population === "3") {
            tons = Math.max(0, tons - 3);
            console.log(
                `Population <= 3, applying -3 modifier. Tons after modifier: ${tons}`
            );
        } else if (
            population === "9" ||
            population === "A" ||
            population === "B" ||
            population === "C"
        ) {
            tons += 3;
            console.log(
                `Population >= 9, applying +3 modifier. Tons after modifier: ${tons}`
            );
        } else {
            console.log(`Population between 4 and 8, no modifier applied.`);
        }

        tons *= multiplier;
        console.log(`Final tons after multiplier: ${tons}`);
    } else {
        console.log(`Invalid tons expression: ${tonsExpression}`);
    }

    return tons;
}

function negotiatePurchase() {
    const diceRoll = parseInt(document.getElementById("dice-roll")?.value, 10);
    if (!specBuyState.selectedGood || isNaN(diceRoll)) {
        alert("Please select a good and enter a valid roll.");
        return;
    }

    const brokerCharacteristic = Math.max(
        shipData.broker.intelligence,
        shipData.broker.social
    );
    const brokerSkill = shipData.broker.brokerSkill;

    let highestPurchaseDM = 0;
    let highestSaleDM = 0;

    Object.entries(specBuyState.worldCodes).forEach(([code, checked]) => {
        if (checked && specBuyState.selectedGood.purchase_dm) {
            const purchaseDM = specBuyState.selectedGood.purchase_dm[code] || 0;
            highestPurchaseDM = Math.max(highestPurchaseDM, purchaseDM);
        }
        if (checked && specBuyState.selectedGood.sale_dm) {
            const saleDM = specBuyState.selectedGood.sale_dm[code] || 0;
            highestSaleDM = Math.max(highestSaleDM, saleDM);
        }
    });

    const tradeCodeModifier = highestPurchaseDM - highestSaleDM;

    const totalModifier =
        diceRoll +
        brokerCharacteristic +
        brokerSkill +
        tradeCodeModifier +
        (specBuyState.supplierDM || 0);
    const cappedModifier = Math.max(-3, Math.min(25, totalModifier));

    const priceData =
        TRADE_DATA.price_table[cappedModifier.toString()] ||
        TRADE_DATA.price_table["25"];
    const purchasePercentage = priceData.purchase;

    // Calculate final price per ton
    const finalPrice = Math.floor(
        (specBuyState.selectedGood.base_price * purchasePercentage) / 100
    );

    // Ensure available tons is a valid number
    const availableTons = parseInt(specBuyState.selectedGood.tons, 10);
    if (isNaN(availableTons)) {
        alert("Error with available tons. Please check data and try again.");
        return;
    }

    // Populate results area
    const resultsTable = document.getElementById("results-table");
    if (resultsTable) {
        const tbody = resultsTable.querySelector("tbody");
        if (!tbody) return;

        // Clear any previous entry for the selected good
        const existing = Array.from(tbody.getElementsByTagName("tr")).find(
            (row) => row.cells[0].textContent === specBuyState.selectedGood.name
        );
        if (existing) existing.remove();

        // Create a new row for the results
        const row = tbody.insertRow();
        row.classList.add("result-row");
        row.innerHTML = `
            <td>${specBuyState.selectedGood.name}</td>
            <td>${finalPrice.toLocaleString()}</td>
            <td>${availableTons}</td>
            <td>${diceRoll} + Broker (${brokerSkill}) + INT/SOC (${brokerCharacteristic})${
            tradeCodeModifier ? ` + Trade (${tradeCodeModifier})` : ""
        }${
            specBuyState.supplierDM
                ? ` + Supplier (${specBuyState.supplierDM})`
                : ""
        } = ${totalModifier}</td>
            <td>${purchasePercentage}%</td>
        `;

        // Add click event to the row
        row.addEventListener("click", () => {
            document
                .querySelectorAll(".result-row")
                .forEach((r) => r.classList.remove("selected"));
            row.classList.add("selected");
            specBuyState.selectedResult = {
                good: specBuyState.selectedGood,
                price: finalPrice,
                tons: availableTons,
            };
        });
    }
}

function buySelectedGood() {
    if (!specBuyState.selectedResult) {
        alert("Please select a good to buy and negotiate its price.");
        return;
    }

    const tonsToBuyInput = document.getElementById("tons-to-buy");
    const tonsToBuy = parseInt(tonsToBuyInput ? tonsToBuyInput.value : "0");
    if (isNaN(tonsToBuy) || tonsToBuy <= 0) {
        alert("Please enter a valid number of tons to buy.");
        return;
    }

    const totalCost = specBuyState.selectedResult.price * tonsToBuy;

    if (shipData.credits < totalCost) {
        alert("Insufficient credits for this purchase.");
        return;
    }

    if (shipData.availableCargo < tonsToBuy) {
        alert("Not enough cargo space available for this purchase.");
        return;
    }

    // Deduct credits and update the displayed value
    shipData.credits -= totalCost;
    document.getElementById("credits").value = shipData.credits;

    // Add cargo to ship's inventory
    const existingCargoIndex = shipData.cargo.findIndex(
        (item) => item.good === specBuyState.selectedResult.good.name
    );
    if (existingCargoIndex >= 0) {
        shipData.cargo[existingCargoIndex].tons += tonsToBuy;
    } else {
        shipData.cargo.push({
            good: specBuyState.selectedResult.good.name,
            tons: tonsToBuy,
        });
    }

    // Deduct from available cargo space and update display
    shipData.availableCargo -= tonsToBuy;
    updateCargoTable();
    updateAvailableCargo();

    // Update tons in the selected result and check if any tons are left
    specBuyState.selectedResult.tons -= tonsToBuy;

    // Find and update the corresponding row in the results table
    const resultRows = document.querySelectorAll("#results-table tbody tr");
    resultRows.forEach((row) => {
        if (
            row.cells[0].textContent === specBuyState.selectedResult.good.name
        ) {
            const tonsCell = row.cells[2];
            tonsCell.textContent = specBuyState.selectedResult.tons;

            // Remove row only if tons reach zero
            if (specBuyState.selectedResult.tons <= 0) {
                row.remove();
            }
        }
    });

    // Purchase confirmation
    alert(
        `Successfully purchased ${tonsToBuy} tons of ${
            specBuyState.selectedResult.good.name
        } for ${totalCost.toLocaleString()} credits.`
    );

    if (specBuyState.selectedResult.tons <= 0) {
        specBuyState.selectedResult = null; // Clear selection if no tons left
    }
}

function resetSpecBuyTab() {
    specBuyState.supplierFound = false;
    const supplierResult = document.getElementById("supplier-result");
    if (supplierResult) supplierResult.textContent = "";
    const generateGoodsBtn = document.getElementById("generate-goods-btn");
    if (generateGoodsBtn) generateGoodsBtn.disabled = true;

    const goodsTableLeft = document
        .getElementById("goods-table-left")
        ?.querySelector("tbody");
    const goodsTableRight = document
        .getElementById("goods-table-right")
        ?.querySelector("tbody");
    if (goodsTableLeft) goodsTableLeft.innerHTML = "";
    if (goodsTableRight) goodsTableRight.innerHTML = "";
}

// === PLACEHOLDERS FOR SPEC-SELL, PASSENGERS, MAIL, AND FREIGHT TABS ===
function showSpecSellTab() {
    // Only update the cargo list; do not reset the state unless explicitly called
    updateCargoListForSale();
    const specSellTab = document.getElementById("spec-sell");
    if (!specSellTab) return;

    // Only populate the trade codes grid if it hasn't been populated yet
    if (Object.keys(SPEC_SELL_STATE.worldCodes).length === 0) {
        const tradeCodesGrid = specSellTab.querySelector(".trade-codes-grid");
        if (tradeCodesGrid) {
            tradeCodesGrid.innerHTML = "";

            TRADE_DATA.trade_codes.forEach(({ code, description }) => {
                const item = document.createElement("div");
                item.className = "trade-code-item";
                item.innerHTML = `
                    <input type="checkbox" id="sell-tc-${code}" value="${code}" class="trade-code-checkbox" ${
                    SPEC_SELL_STATE.worldCodes[code] ? "checked" : ""
                } />
                    <label for="sell-tc-${code}">${code} (${description})</label>
                `;
                tradeCodesGrid.appendChild(item);

                // Add event listener
                const checkbox = item.querySelector('input[type="checkbox"]');
                checkbox.addEventListener("change", (e) => {
                    SPEC_SELL_STATE.worldCodes[code] = e.target.checked;
                });
            });
        }
    }

    // Initialize selects with existing values or keep them if already set
    const starportSelect = document.getElementById("sell-starport-class");
    const populationSelect = document.getElementById("sell-population");
    const buyerTypeSelect = document.getElementById("buyer-type");

    if (starportSelect && !starportSelect.value)
        starportSelect.value = SPEC_SELL_STATE.starportClass || "";
    if (populationSelect && !populationSelect.value)
        populationSelect.value = SPEC_SELL_STATE.population || "";
    if (buyerTypeSelect && !buyerTypeSelect.value)
        buyerTypeSelect.value = SPEC_SELL_STATE.buyerType || "";

    // Keep the dice roll value if set
    const diceRoll = document.getElementById("sell-dice-roll");
    if (diceRoll && !diceRoll.value)
        diceRoll.value = SPEC_SELL_STATE.diceRoll || "";

    // Retain existing buyer result if a buyer was found
    const buyerResult = document.getElementById("buyer-result");
    if (SPEC_SELL_STATE.buyerFound && buyerResult) {
        // Retain the previous buyer result if available
        buyerResult.textContent = SPEC_SELL_STATE.buyerResultText || "";
    } else if (buyerResult) {
        buyerResult.textContent = "";
    }

    // Retain the results table content if data is available
    const resultsTable = document.getElementById("sell-results-table");
    if (resultsTable && SPEC_SELL_STATE.resultsHtml) {
        resultsTable.querySelector("tbody").innerHTML =
            SPEC_SELL_STATE.resultsHtml;
    }

    // Add change listeners for resetting buyer results only if they are changed by the user
    [starportSelect, populationSelect, buyerTypeSelect].forEach((select) => {
        if (select) {
            select.addEventListener("change", () => {
                SPEC_SELL_STATE.buyerFound = false;
                SPEC_SELL_STATE.buyerDM = null;
                if (buyerResult) buyerResult.textContent = "";
            });
        }
    });
}

function findBuyer() {
    console.log("findBuyer function called");

    if (!validateBuyerInputs()) return;

    const starportClass = document.getElementById("sell-starport-class").value;
    const buyerType = document.getElementById("buyer-type").value;

    console.log("Starport Class:", starportClass);
    console.log("Buyer Type:", buyerType);

    const baseRoll =
        Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + 2;

    // Determine the appropriate attribute modifier
    const eduMod = parseInt(document.getElementById("broker-edu").value) || 0;
    const socMod = parseInt(document.getElementById("broker-soc").value) || 0;
    const attributeMod = Math.max(eduMod, socMod);

    // Determine the appropriate skill modifier
    let skillMod = 0;
    const brokerSkill =
        parseInt(document.getElementById("broker-skill").value) || 0;
    const computerSkill =
        parseInt(document.getElementById("computer-skill").value) || 0;
    const streetwiseSkill =
        parseInt(document.getElementById("streetwise-skill").value) || 0;

    if (buyerType === "Legitimate") {
        skillMod = brokerSkill;
    } else if (buyerType === "Legitimate Online (TL-8+)") {
        skillMod = computerSkill;
    } else if (buyerType === "Black Market") {
        skillMod = streetwiseSkill;
    }

    // Apply starport modifiers
    const starportMods = { A: 6, B: 4, C: 2 };
    const starportMod = starportMods[starportClass] || 0;

    const finalTotal = baseRoll + attributeMod + skillMod + starportMod;

    if (finalTotal >= 8) {
        const timeTaken =
            buyerType === "Legitimate Online (TL-8+)"
                ? `${Math.floor(Math.random() * 6) + 1} hours`
                : `${Math.floor(Math.random() * 6) + 1} days`;

        SPEC_SELL_STATE.buyerDM = Math.max(-6, -(finalTotal - 8));
        SPEC_SELL_STATE.buyerFound = true;

        displayBuyerResult(
            true,
            timeTaken,
            baseRoll,
            attributeMod,
            skillMod,
            starportMod,
            finalTotal
        );
        updateCargoListForSale();
    } else {
        SPEC_SELL_STATE.buyerDM = null;
        SPEC_SELL_STATE.buyerFound = false;

        displayBuyerResult(
            false,
            null,
            baseRoll,
            attributeMod,
            skillMod,
            starportMod,
            finalTotal
        );
    }
}

function validateBuyerInputs() {
    const starportClass = document.getElementById("sell-starport-class").value;
    const buyerType = document.getElementById("buyer-type").value;

    if (!starportClass || !buyerType) {
        alert("Please select Starport Class and Buyer Type.");
        return false;
    }
    return true;
}

function displayBuyerResult(
    success,
    timeTaken,
    diceRoll,
    attributeMod,
    skillMod,
    starportMod,
    finalTotal
) {
    const resultBox = document.getElementById("buyer-result");
    if (!resultBox) return;

    resultBox.className = `result-box ${success ? "success" : "failure"}`;

    let resultText = `Dice Roll: ${diceRoll}\n`;
    resultText += `Attribute Modifier: +${attributeMod}\n`;
    resultText += `Skill Modifier: +${skillMod}\n`;
    resultText += `Starport Modifier: +${starportMod}\n`;
    resultText += `Final Total: ${finalTotal}\n\n`;

    if (success) {
        resultText += `Success! Buyer found in ${timeTaken}.\n`;
        resultText += `Sale DM: ${SPEC_SELL_STATE.buyerDM}`;
    } else {
        resultText += "Failed to find a buyer. Try again or look elsewhere.";
    }

    resultBox.textContent = resultText;
}

function getBasePriceForGood(goodName) {
    const good = TRADE_DATA.trade_goods.find((g) => g.name === goodName);
    return good ? good.base_price : "N/A";
}

function negotiateSale() {
    const diceRoll = parseInt(
        document.getElementById("sell-dice-roll")?.value,
        10
    );
    if (!SPEC_SELL_STATE.selectedCargo || isNaN(diceRoll)) {
        alert("Please select cargo to sell and enter a valid roll.");
        return;
    }

    const brokerCharacteristic = Math.max(
        shipData.broker.intelligence,
        shipData.broker.social
    );
    const brokerSkill = shipData.broker.brokerSkill;

    // Find the trade good data
    const tradeGood = TRADE_DATA.trade_goods.find(
        (good) => good.name === SPEC_SELL_STATE.selectedCargo
    );
    if (!tradeGood) {
        alert("Error: Selected cargo not found in trade goods data.");
        return;
    }

    let highestPurchaseDM = 0;
    let highestSaleDM = 0;

    Object.entries(SPEC_SELL_STATE.worldCodes).forEach(([code, checked]) => {
        if (checked) {
            if (tradeGood.purchase_dm && tradeGood.purchase_dm[code]) {
                highestPurchaseDM = Math.max(
                    highestPurchaseDM,
                    tradeGood.purchase_dm[code]
                );
            }
            if (tradeGood.sale_dm && tradeGood.sale_dm[code]) {
                highestSaleDM = Math.max(
                    highestSaleDM,
                    tradeGood.sale_dm[code]
                );
            }
        }
    });

    const tradeCodeModifier = -highestPurchaseDM + highestSaleDM;

    const totalModifier =
        diceRoll +
        brokerCharacteristic +
        brokerSkill +
        tradeCodeModifier +
        (SPEC_SELL_STATE.buyerDM || 0);
    const cappedModifier = Math.max(-3, Math.min(25, totalModifier));

    const priceData =
        TRADE_DATA.price_table[cappedModifier.toString()] ||
        TRADE_DATA.price_table["25"];
    const salePercentage = priceData.sale;

    // Calculate final price per ton
    const finalPrice = Math.floor(
        (tradeGood.base_price * salePercentage) / 100
    );

    // Get available tons from the ship's cargo
    const cargoItem = shipData.cargo.find(
        (item) => item.good === SPEC_SELL_STATE.selectedCargo
    );
    const availableTons = cargoItem ? cargoItem.tons : 0;

    // Populate results area
    const resultsTable = document.getElementById("sell-results-table");
    if (resultsTable) {
        const tbody = resultsTable.querySelector("tbody");
        if (!tbody) return;

        // Clear any previous entries
        tbody.innerHTML = "";

        // Create a new row for the results
        const row = tbody.insertRow();
        row.classList.add("result-row");
        row.innerHTML = `
            <td>${tradeGood.name}</td>
            <td>${finalPrice.toLocaleString()}</td>
            <td>${availableTons}</td>
            <td>${diceRoll} + Broker (${brokerSkill}) + INT/SOC (${brokerCharacteristic})${
            tradeCodeModifier ? ` + Trade (${tradeCodeModifier})` : ""
        }${
            SPEC_SELL_STATE.buyerDM
                ? ` + Buyer (${SPEC_SELL_STATE.buyerDM})`
                : ""
        } = ${totalModifier}</td>
            <td>${salePercentage}%</td>
            <td>
                <input type="number" class="tons-input" min="1" max="${availableTons}" value="${availableTons}">
                <button onclick="completeSale('${
                    tradeGood.name
                }', ${finalPrice}, this)">Sell</button>
            </td>
        `;

        // Add click event to the row
        row.addEventListener("click", () => {
            document
                .querySelectorAll(".result-row")
                .forEach((r) => r.classList.remove("selected"));
            row.classList.add("selected");
            SPEC_SELL_STATE.selectedResult = {
                cargo: tradeGood,
                price: finalPrice,
                tons: availableTons,
            };
        });
    }
}

function completeSale(good, price, button) {
    const row = button.closest("tr");
    const tonsInput = row.querySelector(".tons-input");
    const tons = parseInt(tonsInput.value);
    const availableTons = parseInt(row.cells[2].textContent);

    if (isNaN(tons) || tons <= 0 || tons > availableTons) {
        alert(
            `Please enter a valid number of tons to sell (Available: ${availableTons}).`
        );
        return;
    }

    const totalProfit = price * tons;

    // Update ship's cargo
    const cargoIndex = shipData.cargo.findIndex((item) => item.good === good);
    if (cargoIndex === -1) return;

    if (shipData.cargo[cargoIndex].tons === tons) {
        shipData.cargo.splice(cargoIndex, 1);
    } else {
        shipData.cargo[cargoIndex].tons -= tons;
    }

    // Update credits
    shipData.credits += totalProfit;
    document.getElementById("credits").value = shipData.credits;

    // Update displays
    updateCargoTable();
    updateAvailableCargo();
    updateCargoListForSale();

    // Update the row with remaining tons
    if (shipData.cargo[cargoIndex]) {
        row.cells[2].textContent = shipData.cargo[cargoIndex].tons;
    } else {
        row.remove();
    }

    handleDataChange();
    alert(
        `Sold ${tons} tons of ${good} for ${totalProfit.toLocaleString()} credits`
    );
}

function updateCargoListForSale() {
    const cargoTableBody = document.querySelector("#sell-cargo-table tbody");
    if (!cargoTableBody) return;

    // Clear any existing rows
    cargoTableBody.innerHTML = "";

    // Iterate through the cargo in shipData and create rows for the table
    shipData.cargo.forEach((item) => {
        const row = cargoTableBody.insertRow();
        const tradeGood = TRADE_DATA.trade_goods.find(
            (tg) => tg.name === item.good
        );
        row.innerHTML = `
            <td>${item.good}</td>
            <td>${item.tons}</td>
            <td>${
                tradeGood ? tradeGood.base_price.toLocaleString() : "N/A"
            }</td>
        `;

        row.addEventListener("click", () => {
            document
                .querySelectorAll("#sell-cargo-table tbody tr")
                .forEach((r) => r.classList.remove("selected"));
            row.classList.add("selected");
            SPEC_SELL_STATE.selectedCargo = item.good;
        });
    });
}

function resetSpecSellTab() {
    SPEC_SELL_STATE.buyerFound = false;
    SPEC_SELL_STATE.buyerDM = null;
    SPEC_SELL_STATE.selectedCargo = null;
    SPEC_SELL_STATE.worldCodes = {};

    const buyerResult = document.getElementById("buyer-result");
    if (buyerResult) buyerResult.textContent = "";

    const resultsTable = document.getElementById("sell-results-table");
    if (resultsTable) {
        resultsTable.querySelector("tbody").innerHTML = "";
    }

    // Clear stored HTML and inputs
    SPEC_SELL_STATE.resultsHtml = "";
    SPEC_SELL_STATE.starportClass = "";
    SPEC_SELL_STATE.population = "";
    SPEC_SELL_STATE.buyerType = "";
    SPEC_SELL_STATE.diceRoll = "";
}

// Global data structures for passengers
let availablePassengers = [];
let passengerManifest = [];

// Define costs based on passage type and distance
const PASSAGE_COSTS = {
    high: [6000, 12000, 20000, 30000, 40000, 50000],
    middle: [3000, 6000, 10000, 15000, 20000, 25000],
    basic: [1000, 1200, 1400, 1600, 1800, 2000],
    low: [500, 600, 700, 800, 900, 1000],
};

// Function declarations related to passenger management
function showPassengerTab() {
    updatePassengerForm();
    updateAvailablePassengersTable();
    updatePassengerManifestTable();
}

// Function to update the passenger form
function updatePassengerForm() {
    document.getElementById("available-high").value = shipData.passengerBerths.high || 0;
    document.getElementById("available-middle").value = shipData.passengerBerths.middle || 0;
    document.getElementById("available-basic").value = shipData.passengerBerths.basic || 0;
    document.getElementById("available-low").value = shipData.passengerBerths.low || 0;
}

// Function to calculate the passage price
function calculatePassagePrice(type, parsecs) {
    return PASSAGE_COSTS[type][parsecs - 1];
}

// Function to generate available passengers based on population and starport
function generatePassengerTraffic() {
    const population = document.getElementById("population").value;
    const starport = document.getElementById("starport-class").value;

    console.log(`Generating passenger traffic for population: ${population}, starport: ${starport}`);

    const passengerCounts = rollPassengerTraffic(population, starport);
    console.log("Passenger counts:", passengerCounts);

    availablePassengers = [];

    ["high", "middle", "basic", "low"].forEach((type) => {
        for (let i = 0; i < passengerCounts[type]; i++) {
            const parsecs = Math.floor(Math.random() * 4) + 1;
            const price = calculatePassagePrice(type, parsecs);
            console.log(`Generated passenger - Type: ${type}, Parsecs: ${parsecs}, Price: ${price}`);
            availablePassengers.push({
                type,
                parsecs,
                price,
                status: "available",
            });
        }
    });

    updateAvailablePassengersTable();
}

function rollPassengerTraffic(population, starport) {
    const populationDM = getPopulationDM(parseInt(population));
    const starportDM = getStarportDM(starport);

    console.log(
        `Rolling passenger traffic - Population DM: ${populationDM}, Starport DM: ${starportDM}`
    );

    return {
        high: Math.max(0, roll2D() + populationDM + starportDM),
        middle: Math.max(0, roll2D() + populationDM + starportDM),
        basic: Math.max(0, roll2D() + populationDM + starportDM),
        low: Math.max(0, roll2D() + populationDM),
    };
}

// Helper function for rolling 2D6 with console logging
function roll2D() {
    const roll1 = Math.floor(Math.random() * 6) + 1;
    const roll2 = Math.floor(Math.random() * 6) + 1;
    const total = roll1 + roll2;
    console.log(`Rolled 2D6: ${roll1} + ${roll2} = ${total}`);
    return total;
}

// Determine the DM based on population size
function getPopulationDM(population) {
    if (population <= 1) return -4;
    if (population >= 6 && population <= 7) return 2;
    if (population >= 8) return 4;
    return 0;
}

// Determine the DM based on starport class
function getStarportDM(starport) {
    switch (starport) {
        case "A":
            return 2;
        case "B":
            return 1;
        case "E":
            return -1;
        case "X":
            return -3;
        default:
            return 0;
    }
}

// Update available passengers table, displaying them in columns based on type
function updateAvailablePassengersTable() {
    const highCol = document.querySelector("#high-passenger-table tbody");
    const middleCol = document.querySelector("#middle-passenger-table tbody");
    const basicCol = document.querySelector("#basic-passenger-table tbody");
    const lowCol = document.querySelector("#low-passenger-table tbody");

    // Clear existing rows
    highCol.innerHTML = "";
    middleCol.innerHTML = "";
    basicCol.innerHTML = "";
    lowCol.innerHTML = "";

    availablePassengers.forEach((passenger, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${passenger.parsecs}</td>
            <td>${passenger.price}</td>
            <td><button onclick="bookPassenger(${index})">Book</button></td>
        `;

        switch (passenger.type) {
            case "high":
                highCol.appendChild(row);
                break;
            case "middle":
                middleCol.appendChild(row);
                break;
            case "basic":
                basicCol.appendChild(row);
                break;
            case "low":
                lowCol.appendChild(row);
                break;
        }
    });
}

// Book a passenger if there is an available berth and deduct credits
function bookPassenger(index) {
    const passenger = availablePassengers[index];

    // Check if there's space available in the relevant berth type
    if (shipData.passengerBerths[passenger.type] <= 0) {
        alert(`No available slots for ${passenger.type} passage.`);
        return;
    }

    // Add credits for the passage
    shipData.credits += passenger.price; // Add the price to the credits
    document.getElementById("credits").value = shipData.credits;

    // Add the passenger to the manifest and update berth count
    passengerManifest.push(passenger);
    shipData.passengerBerths[passenger.type]--;
    availablePassengers.splice(index, 1);

    updateAvailablePassengersTable();
    updatePassengerManifestTable();
    updatePassengerForm();
    handleDataChange();
}


// Update the passenger manifest table
function updatePassengerManifestTable() {
    const tableBody = document.querySelector("#passenger-manifest-table tbody");
    tableBody.innerHTML = "";

    passengerManifest.forEach((passenger, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${passenger.type}</td>
            <td>${passenger.parsecs}</td>
            <td>${passenger.price}</td>
            <td><button onclick="dropOffPassenger(${index})">Drop Off</button></td>
        `;
        tableBody.appendChild(row);
    });
}

// Drop off a passenger and free up the berth space
function dropOffPassenger(index) {
    const passenger = passengerManifest[index];

    // Free up the berth
    shipData.passengerBerths[passenger.type]++;
    passengerManifest.splice(index, 1);

    updatePassengerManifestTable();
    updatePassengerForm();
    handleDataChange();

    alert("Passenger dropped off and berth space freed up.");
}

function mailPlaceholder() {
    console.log("Mail tab functions to be implemented.");
}

function freightPlaceholder() {
    console.log("Freight tab functions to be implemented.");
}
