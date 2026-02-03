# InfoBIM Manifesto

<div align="center">
<pre>
  _____        __      ____ _____ __  __
 |_   _|      / _|    |  _ \_   _|  \/  |
   | |  _ __ | |_ ___ | |_) || | | \  / |
   | | | '_ \|  _/ _ \|  _ < | | | |\/| |
  _| |_| | | | || (_) | |_) || |_| |  | |
 |_____|_| |_|_| \___/|____/_____|_|  |_|
 <br />
BIM on the inside, drawings on the outside, data for everyone.

</pre>
</div>

[![License](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](http://creativecommons.org/licenses/by/4.0/)

🇧🇷 [Versão em Português](./pt_br/MANIFESTO.md)

## BIM on the inside, 2D on the outside, data for everyone

### Preface
This document is a manifesto, not a tender, not an article, not an internet fight.
It is born from a recurring fact: "BIM" projects that, at the moment of acceptance, turn into "PDF with feelings".

Delivery in **PDF/DWG is non-negotiable** today.
Fine.
The mistake is not generating sheets.
The mistake is treating the sheet as the **source of truth** and the model as a **contractual accessory**.

InfoBIM exists to operate in the real world: delivering what the market demands, without giving up what BIM offers.

---

## 1. The problem no one wants to face
1. The contract says BIM.
2. The team delivers model, structure, coordination, information.
3. Acceptance validates only PDF sheets.
4. The model (IFC or native) becomes an extra.
5. The best work rots on a hard drive.

This creates a perverse incentive:
- whoever does information loses time;
- whoever pretends to do information earns the same;
- whoever holds the pen continues deciding by "image".

---

## 2. Diagnosis without fighting
It's no use fighting with the market. It won't change because you are right.
And another thing: BIM was never "anti-2D".

BIM is process:
- collaboration,
- standardization,
- data structuring,
- traceability,
- automation.

The sheet is a possible final product.
It just can't be the center of the universe.

**Golden Rule:**
- **Model is engine.**
- **Sheet is interface.**

---

## 3. The now: AI, agents, and why chaos will get more expensive
The advance of AI in BIM work will not reward "who draws beautifully".
It will reward **who has flow and data**.

Agents, copilots, and automations only work when there is:
- defined source of truth,
- structured and accessible data,
- history and traceability,
- clear input and output contracts.

Without this, AI becomes a "PDF reader" with undue confidence.
AI doesn't work miracles.
AI is a multiplier.
It multiplies order or multiplies mess.

---

## 4. InfoBIM Principles
1. **BIM is process, not file.**
2. **Input can be dirty. The core must be clean.**
3. **Output can be "dumb". The core must be intelligent.**
4. **Those who don't model still participate in the project context.**
5. **PDF/DWG continue to exist, but as automatic derivation.**
6. **Query is the gateway for those who only know sheets.**
7. **Automation is not a "luxury". It is survival.**

---

## 5. The proposal: Non-parameterized Input → Parameterized Core → Non-parameterized Output

### 5.1 Non-parameterized Input (real world)
What exists comes in:
- DWG
- PDF
- spreadsheets
- texts
- photos
- legacy reports
- "memorials born in chaos"

None of this is forbidden.
None of this is ignored.
All of this must cross the core.

### 5.2 Parameterized Core (where BIM really happens)
Here information becomes adult:
- standardizes and organizes,
- structures and classifies,
- consolidates data from various sources,
- creates traceability,
- enables automation,
- prepares query.

The core is not "a file".
It is a **data context**.

### 5.3 Non-parameterized Output (what the market wants)
What the world demands goes out:
- PDF sheets
- DWGs
- reports and attachments

But generated **automatically** from the core.
PDF ceases to be "origin".
It becomes "export".

---

## 6. A decisive detail: data from those who don't work on the model also enters
Not all data is born inside BIM.
But all data that matters needs to end up inside the same context.

Examples of data that usually stay "outside":
- survey spreadsheets
- applied normative criteria
- checklists
- decision logs
- pending lists
- revised quantities
- opinions

If these data don't enter the core, the project becomes two parallel worlds:
- model world
- PDF/spreadsheet world

And then BIM loses exactly what it has best: consistency and automation.

---

## 7. Query: how to bring those outside closer without evangelization
Most people won't become modelers.
And they don't need to.

The first step of adoption is allowing the person to:
- **ask** about the project
- **find** consistent answers
- **compare** revisions and changes
- **extract** information without becoming a "PDF archaeologist"

Query is the bridge:
- The person starts in the comfort of the sheet,
- and discovers that questions answered by data are better than "detail hunting".

PDF is great for signing and archiving.
It is terrible for asking.

---

## 8. The InfoBIM open source core
**InfoBIM Core** is open source out of technical necessity, not ideology.

Practical reasons:
- for any team to use the core;
- for any person to contribute what they have already done;
- to avoid reinventing the wheel in a thousand companies;
- to create a common and reusable contract;
- to provide a basis for automation and agents.

Where this lives first:
- GitHub repository
Then, frozen and citable versions:
- DOI on Zenodo

---

## 9. From "loose scripts" to "cataloged capabilities"
A loose script is useful for the one who wrote it.
A useful ecosystem needs a catalog and contract.

In InfoBIM, the minimum unit is a **capability**, with:
- `id` and `version`
- declared `inputs` and `outputs`
- preconditions (e.g., IFC4, units, structure)
- effects (what alters / what generates)
- limits (what it doesn't do)
- metadata (author, license, tags)

### 9.1 The Catalog
The catalog allows discovering capabilities by intent:
- "generate 2D sheets"
- "normalize properties"
- "extract quantities"
- "validate consistency"
- "convert formats"
- "compare revisions"

### 9.2 The Runtime (executor)
A common executor ensures that capability runs reproducibly:
- local
- container
- CI
- server

With logs and traceable artifacts.

---

## 10. API and MCP: tools for humans and for agents
The core needs to be consumable in two ways:
- **API**: classic integrations (systems, front-ends, pipelines)
- **MCP**: standardized integration for agents and AI clients

The separation is simple:
- **Resources**: context (models, metadata, states, schemas)
- **Tools**: actions (run check, generate sheet, extract data, convert)

This allows:
- an agent to discover capabilities,
- execute consistently,
- and use the same core in multiple projects.

---

## 11. What InfoBIM is not
- not "just another viewer"
- not "a magic template"
- not "IFC evangelization"
- not "war against PDF"

It is process engineering.
It is information infrastructure.

---

## 12. Call to action
If you already have scripts that do useful things, you don't have a "script".
You have a capability.
And capabilities need to be:
- findable,
- executable,
- auditable,
- integrable.

The proposal is simple:
- stop trying to convince those who don't want to,
- build a flow where BIM happens by gravity,
- deliver PDF/DWG as derivation,
- keep the core as source of truth,
- and open the ecosystem for contribution.

The market can continue signing PDF.
The difference is that now the PDF comes from a system that works.

---

## Appendix A — Suggested repository structure
- `MANIFEST.md`: The project constitution, containing principles and vision.
- `catalog/`: The "heart" of the system, where definitions live.
  - `capabilities/`: Individual capability definitions (YAML/JSON) describing inputs, outputs, and logic.
- `runtime/`: Code that executes capabilities (the engine that processes data).
- `api/`: Entry points for integration via REST/GraphQL for legacy systems.
- `mcp-server/`: Model Context Protocol server to connect with AIs and Agents.
- `examples/`: Reference projects showing how to use the core in practice.
- `docs/`: Technical documentation, tutorials, and implementation guides.
- `LICENSE`: Legal terms of use.
- `CONTRIBUTING.md`: Guide on how the community can collaborate (PRs, issues, standards).
- `CODE_OF_CONDUCT.md`: Community code of conduct (optional).

---

## Appendix B — License
For the manifesto text:
- **CC BY 4.0** (allows use and remix with credit)

For code:
- **Apache-2.0** (good for ecosystem and contributions)

License is public policy for the long term.

---

## Appendix C — How to Cite
If you use InfoBIM Core or derive from this manifesto, please cite:

> **InfoBIM Core** (2026). *InfoBIM Manifesto: BIM on the inside, 2D on the outside, data for everyone*. Available at: [Repository URL].

Or in BibTeX:

```bibtex
@misc{infobim2025manifesto,
  author = {InfoBIM Community},
  title = {InfoBIM Manifesto: BIM on the inside, 2D on the outside, data for everyone},
  year = {2026},
  url = {https://github.com/InfoBIM-Community},
  note = {Accessed on: [date]}
}
```

---
