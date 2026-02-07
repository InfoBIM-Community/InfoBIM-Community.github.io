<div>
  <div style="display: inline-block; vertical-align: middle;" width="100">
    <img src="https://avatars.githubusercontent.com/u/252078843" width="100" alt="InfoBIM Logo" />
  </div>
  <div style="display: inline-block; vertical-align: middle; margin-left: 10px;">
    <h1 style="margin: 0; border-bottom: none;">BIM on the inside, drawings on the outside, data for everyone.</h1>
  </div>
</div>

[![License](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](http://creativecommons.org/licenses/by/4.0/)
![Status](https://img.shields.io/badge/Status-Development-yellow?style=for-the-badge)

> **"If acceptance is PDF, IFC becomes contractual decoration."**

<div align="center">

### 📜 [Read the Manifesto](./MANIFESTO.md)
**[🇧🇷 Versão em Português](./pt_br/README.md)**

</div>

---

## 1. The Reality Check: "Facade BIM"

In many public projects and real-world scenarios, **PDF/DWG delivery is non-negotiable**.
The mistake isn't generating sheets. The mistake is treating the sheet as the **source of truth** and the model as a contractual accessory.

*   **The Problem**: The team delivers models, coordination, and data, but the acceptance process validates only the PDF.
*   **The Consequence**: BIM becomes "gourmet CAD". Rich models rot on hard drives while decisions are made on static images.
*   **The Risk**: In the age of AI, validating projects via PDF makes them "invisible" to agents that could optimize costs and schedules.

**InfoBIM** exists to operate in this real world: delivering what the market demands (PDFs/Drawings) without giving up what the 21st century allows (Data/BIM).

> **"PDF doesn't invalidate BIM; it only invalidates the fetish."**

---

## 2. The Solution: InfoBIM

**InfoBIM** is an operational hub for **triage, audit, and execution** of BIM data. It acts as a bridge between the "messy" reality of construction inputs and the structured requirements of data management.

### Core Principles
1.  **BIM is Process, not File**: The real value lies in collaboration and data structuring.
2.  **Model is Engine, Sheet is Interface**: The model works behind the scenes to generate the necessary documentation.
3.  **Automation via Capabilities**: Don't build monolithic apps. Build small, reusable, agent-ready tools.

### The Methodology
1.  **Input (Real World)**: Accepts "dirty" or non-parameterized data (DWG, PDF, legacy spreadsheets).
2.  **Core (Capabilities)**: Data is processed by atomic **Capabilities** (scripts that do one thing well, e.g., "Check Sewage Slope").
3.  **Output (The Market)**: Automatically generates what the contract demands (PDF sheets) *derived* from the model, plus structured data (IFC/JSON) for those ready to consume it.

---

## 3. The Hybrid Architecture: TUI + Capabilities + AI

The project consolidates scattered tools into a coherent architecture that unites three worlds:

### 🏃 The Human Interface (TUI)
Built on **Textual** and **Rich**. Fast, lightweight, and focused on productivity.
*   **Triage & Navigation**: Automatic directory scanning and IFC filtering.
*   **Visual Feedback**: Semantic colors and real-time progress.

### 🧩 The Capability Engine
The **InfoBIM Stack** is a runtime for engineering logic.
*   **Radical Standardization**: Docker and rigid folder structures ensure scripts run anywhere.
*   **Atomic Units**: Features are delivered as **Capabilities** (e.g., `infobim.capability.list_sewage_pipes`).
*   **Self-Documenting**: Every capability declares its own Inputs and Outputs via JSON Schema.

### 🤖 Agent-Ready (AI as Planner)
*   **LLM Plans, Capabilities Execute**: An AI doesn't "guess" the pipe slope. It calls the `list_sewage_pipes` capability.
*   **Discovery**: Agents can query the system (`./infobim run --json`) to learn what tools are available.
*   **Auditable**: The actual calculation is performed by deterministic Python code, not hallucinated by the model.

---

## 4. Architecture & Data Flow

### Layers
1.  **Presentation (TUI)**: Manages input/output and screens.
2.  **Adapters**: The bridge between CLI/TUI and the Core.
3.  **Domain (OntoBDC)**: The BIM business rules engine and persistence layer.
4.  **Infrastructure**: Bash scripts and Docker.

### Event Sourcing
Unlike systems that rely on file comparisons (IFC diffs), InfoBIM focuses on **action traceability**. Every operation (import, fix, export) is a registered event, allowing for objective auditing: *"Who did what, when, and with which parameters?"*

---

## 5. Preview

<table>
<tr>
<td width="50%">
<a href="">
<img src="docs/images/menu-preview.png" alt="InfoBIM CLI Main Menu" />
</a>
</td>
<td width="50%">
<a href="">
<img src="docs/images/report-preview.png" alt="IFC File Details" />
</a>
</td>
</tr>
<tr>
<td align="center"><b>Main Menu</b><br/>The central hub for triage and navigation.</td>
<td align="center"><b>IFC File Details</b><br/>Structured inspection and reporting.</td>
</tr>
</table>

---

## 6. How to Run

The tool is designed to run in containers.

### Prerequisites
- Docker Engine & Docker Compose

### Commands
```bash
# Install and verify environment
./infobim install
./infobim check

# Start the Interactive CLI
./infobim ifc
```

---

## 7. Distribution Model

*   **Local (Open Source)**: For technical users. Requires Docker. Free and unlimited.
*   **Provider (API)**: For the general AECO market. Users access via API/Web managed by a provider, eliminating infrastructure friction.

---

## License

This project is licensed under the **Apache License 2.0**. See the [LICENSE](LICENSE) file for details.

<div align="center">
  <b>Proudly developed in Brazil 🇧🇷, so far</b>
</div>
