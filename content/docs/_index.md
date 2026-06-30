---
title: "DB Documentation"
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

This page presents the [database](#database), its [tables and fields](#tables-and-fields), [data input](#data-input) best practices, and the broader [workflow](#workflow) for ensuring the reusability of CHIPS data.

# Database

The database is built on PostgreSQL 11 and PostGIS v2.5. It relies on a simple data structure whose backbone consists of a **context–sample–chemistry** triplet. Each of these components is described by metadata designed either to assess data quality or to promote interoperability.

<p align="center">
    {{< img src="images/db_erd.png" alt="CHIPS DB ERD diagram" width="700" >}}<br>
  Simplified Entity–Relationship Diagram (ERD) of the CHIPS database.
</p>

## Tables and fields

This section provides description on [tables](#table-descriptions) and [tables' fields](#fields-descriptions).

### Table descriptions

The dynamic datatable below describes the database tables:

{{< tsvtable "data/pg_tables_comments.tsv" >}}

### Fields descriptions

The dynamic datatable below describes the fields of the database tables:

{{< tsvtable "data/pg_aliaseses_comments.tsv" >}}


## Data

### Reference data

Reference data:

{{< tsvtable "data/ref_elements.tsv" >}}

### Analytical data

Open datasets, accessible throught the API, are listed here:

{{< tsvtable "data/urls_data.tsv" >}}

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


### How-to-contribute

> Contribute your data to CHIPS

An easy way to register your dataset in CHIPS and expose it as a standalone dataset is to complete and send us the [**template file `chips_dataset_entry_template.xlsx`**](https://github.com/iramat/chips/tree/hugo-files/static/data/templates), available for download from the CHIPS GitHub repository. Columns and value types are described in the [**Tables and values** section](https://iramat.github.io/chips/docs/documentation/#tables-and-values) of the database documentation.

Below is a preview of the template, including sample records from the `dataset_rsaage26` dataset.

{{< tsvtable2 "data/chips_dataset_entry_template.tsv" >}}

<br>

#### Data authorship

Beyond data standardisation and interoperability, the CHIPS project also aims to make datasets **citable**, meaning that your contribution can be cited independently of both the CHIPS database and other datasets.

The simplified workflow below illustrates how contributed data are processed: once submitted, datasets are reviewed, integrated into the database, and published as independent datasets—with full attribution to contributors—in an open-access data repository (here, Zenodo).

<p align="center">
    {{< img src="images/chips_erd_publish.png" alt="CHIPS project publication workflow" width="500" >}}<br>
    Simplified CHIPS publication workflow (thick arrows).
</p>

<br>

Unless otherwise specified, your data will be subject to the **CC BY 4.0 license**. See, for example, the `dataset_rsaage26` dataset [**hosted on Zenodo**](https://zenodo.org/records/18793710).

## How-to-cite

### cite the Data

**Data** coming from the [CHIPS dashboard](https://iramat-apps.cnrs.fr/dash/), from CSV exports, or directly from [API URLs](https://iramat.github.io/chips/data/datasets/) are separate entities distributed under the **CC BY 4.0 license** and can be cited individually (see the `"reference"` field). For example:

<br>

<p align="center">
    {{< img src="images/data-how-to-cite-example-api.png" alt="how-to-cite1" width="1200" >}}<br>
    Cite a dataset exported from the API (from: http://157.136.252.188:3000/dataset_jmilot16)
</p>

<br><br>

<p align="center">
    {{< img src="images/data-how-to-cite-example-csv.png" alt="how-to-cite2" width="1200" >}}<br>
    Cite a dataset exported as CSV
</p>

### cite the Database

The **CHIPS database** itself, which provides standardization and interoperability, should be cited separately from datasets:

```bibtex
@misc{chips_database,
  title        = {CHIPS Database -- CHImie en PaléoSidérurgie},
  author       = {{IRAMAT-CNRS}},
  institution  = {IRAMAT-CNRS},
  publisher    = {IRAMAT-CNRS},
  year         = {2026},
  url          = {https://iramat-apps.cnrs.fr/dash/},
  note         = {Online database, accessed 2026-05-11},
  organization = {IRAMAT-CNRS},
  ror          = {https://ror.org/01cw28e72}
}
```


## Workflow

The CHIPS database is a key component of a broader workflow integrating web-oriented technologies, including an API, a Python dashboard, and an R package hosted on GitHub.

<p align="center">
    {{< img src="images/chips_erd.png" alt="CHIPS project workflow" width="700" >}}<br>
  CHIPS project workflow. Circled numbers (1–5) refer to the following resources: 1. API (root): <a href="http://157.136.252.188:3000/">http://157.136.252.188:3000/</a>; 2. Dashboard: <a href="https://iramat-apps.cnrs.fr/dash/">https://iramat-apps.cnrs.fr/dash/</a>; 3. <em>iRamat</em> R package: <a href="https://github.com/iramat/iRamat">https://github.com/iramat/iRamat</a>; 4. Website: <a href="https://iramat.github.io/chips">https://iramat.github.io/chips</a>; 5. GEO platform: <a href="https://fnp.huma-num.fr/adws/app/efbc5983-40d6-11ec-810c-a7f8dd92e681/">https://fnp.huma-num.fr/adws/app/efbc5983-40d6-11ec-810c-a7f8dd92e681/</a>.
</p>


## References

* 2026, pre-print ["_The CHIPS Database: A Repository for Reference Data on Chemical Analysis in Archaeometallurgy of Iron_"](https://zenodo.org/records/15144194) and its [PCI Archaeology recommendation](https://archaeo.peercommunityin.org/PCIArchaeology/articles/rec?id=610).

{{< callout context="note" title="Contact" icon="outline/info-circle" >}}
For scientific questions (e.g., error calculations), please contact [alexandre.disser@cnrs.fr](mailto:alexandre.disser@cnrs.fr). For IT-related questions (e.g., linked open data), please contact [thomas.huet@cnrs.fr](mailto:thomas.huet@cnrs.fr). See also the [Contact](https://iramat.github.io/chips/contact/) section.
{{< /callout >}}
