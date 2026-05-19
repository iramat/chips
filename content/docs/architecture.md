---
title: "Documentation"
description: "doks"
summary: ""
# date: 2023-04-03T14:50:38+01:00
draft: false
weight: 5
# type: docs
# layout: "baseof-nosidebar.html"
# layout: "single-nosidebar"
layout: "docs-noleftbar"
# layout: "docs-noleftbar-1"
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---
## Workflow

The CHIPS database is a key component of a broader workflow integrating web-oriented technologies, including an API, a Python dashboard, and an R package hosted on GitHub.

<p align="center">
    {{< img src="images/chips_erd.png" alt="CHIPS project workflow" width="700" >}}<br>
  CHIPS project workflow. Circled numbers (1–5) refer to the following resources: 1. API (root): <a href="http://157.136.252.188:3000/">http://157.136.252.188:3000/</a>; 2. Dashboard: <a href="https://iramat-apps.cnrs.fr/dash/">https://iramat-apps.cnrs.fr/dash/</a>; 3. <em>iRamat</em> R package: <a href="https://github.com/iramat/iRamat">https://github.com/iramat/iRamat</a>; 4. Website: <a href="https://iramat.github.io/chips">https://iramat.github.io/chips</a>; 5. GEO platform: <a href="https://fnp.huma-num.fr/adws/app/efbc5983-40d6-11ec-810c-a7f8dd92e681/">https://fnp.huma-num.fr/adws/app/efbc5983-40d6-11ec-810c-a7f8dd92e681/</a>.
</p>

---

## Database

The database relies on a simple data structure whose backbone consists of a **context–sample–chemistry** triplet. Each of these components is described by metadata designed either to assess data quality or to promote interoperability.

### Architecture

The database is built on PostgreSQL 11 and PostGIS v2.5.

<p align="center">
    {{< img src="images/db_erd.png" alt="CHIPS DB ERD diagram" width="700" >}}<br>
  Simplified Entity–Relationship Diagram (ERD) of the CHIPS database.
</p>

#### Tables and values

The columns are described in the GitHub repository:

{{< tsvtable "data/pg_aliaseses_comments.tsv" >}}

### Data input

#### Measurement errors

> Recording measurement errors

<p class="justify">

The following protocol has been established for recording measurement errors:

* **Identification of analytical setups**: each setup is recorded in the `machines` table, specifying the type of chemical analysis, the laboratory, and the model of the analytical instrument used.
* **Identification of setup characteristics (i.e., measurement errors)**: for each analytical device listed in the `machines` table, each chemical element listed in the `elements` table, and a given concentration range, the relative measurement uncertainty is recorded in the `uncertainties` table.

The query result shown in Figure 2 illustrates how these values are organised. Uncertainties 151 to 154 represent the relative measurement errors associated with the ICP-MS analyser used by the *Centre de Recherches Pétrographiques et Géochimiques* (CRPG) laboratory for the element yttrium. For concentrations above 50 mg·kg<sup>−1</sup>, the relative error is 5%. It increases to 15% for concentrations between 1 and 50 mg·kg<sup>−1</sup>, and reaches up to 100% for concentrations below 0.1 mg·kg<sup>−1</sup>.

<p align="center">
    {{< img src="images/db_crud_c_errors.png" alt="Measurement errors" width="700" >}}<br>
  View based on the <code>machines</code>, <code>elements</code>, and <code>uncertainties</code> tables, showing relative measurement uncertainties according to the analytical setup and measured concentration range.
</p>

</p>

Further documentation is available in the iramat-dev GitHub repository:

`https://github.com/iramat/iramat-dev/tree/main/dbs/chips`

## References

* [CHIPS database presentation preprint](https://zenodo.org/records/15144194), 2026, hosted on Zenodo.
