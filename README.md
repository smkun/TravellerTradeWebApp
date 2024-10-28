Here's a README file for your **MG Traveller Trade Simulator** app:

---

# MG Traveller Trade Simulator

This application is a browser-based simulator for the Traveller RPG trade system. It enables users to manage ship data, trade in speculative goods, buy and sell cargo, and manage passenger berths.

## Features

-   **Ship Data Management**: Record ship name, credits, cargo capacity, and berths.
-   **Speculative Buy & Sell**: Conduct speculative trade with access to goods, pricing modifiers, and supplier/buyer management.
-   **Passenger Management**: Allocate berths for high, middle, basic, and low passenger types.
-   **Persistent Data**: Save ship data to local storage for retrieval across sessions.

## Installation

1. Clone or download the repository.
2. Ensure all files (HTML, CSS, JS) are in the same directory.
3. Open `index.html` in a modern browser to use the simulator.

## Files

-   `index.html`: Main HTML structure with tab navigation.
-   `styles.css`: Styling for layout, tables, form inputs, and tab navigation.
-   `scripts.js`: Main application logic and event handling.
-   `obfuscated.js`: Trade data, encoded for obfuscation and used within the simulator.

## Usage

1. **Ship Data**: Enter ship details under the **Ship Data** tab, including name, credits, cargo space, and passenger berths.
2. **Speculative Trade**:
    - **Buy**: Under **Spec. Buy**, select trade codes, population, and starport class to simulate purchasing goods.
    - **Sell**: Navigate to **Spec. Sell** to negotiate sales based on market demands.
3. **Passenger Management**: Under the **Passengers** tab, assign and manage passenger berths.
4. **Save and Load**: Save your ship data locally or load previous data.

## Development

-   **JS Constants and Structures**: Core data is in `TRADE_DATA` (e.g., trade goods, pricing tables).
-   **Local Storage**: Saves ship data for persistent use.
-   **CSS Classes**: Tabs, tables, and form elements styled with `.tabs`, `.tab-content`, `.goods-table`, etc.
