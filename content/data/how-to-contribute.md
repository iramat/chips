---
title: "How-to-contribute"
description: ""
summary: ""
layout: "docs"
weight: 2
# date: 2023-04-03T14:50:38+01:00
draft: false
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

CHIPS aims to make iron physico-chemical analyses **standardised, interoperable, and citable**, while being grounded in Open Science through **open-access publications, open-source software, and open data**. We welcome external contributions to extend both the database ([**data**](#data)) and the project’s functionalities ([**software**](#software)).

## Data

> Contribute your data to CHIPS

An easy way to register your dataset in CHIPS and expose it as a standalone dataset is to complete and send us the [**template file `chips_dataset_entry_template.xlsx`**](https://github.com/iramat/chips/tree/hugo-files/static/data/templates), available for download from the CHIPS GitHub repository. Columns and value types are described in the [**Tables and values** section](https://iramat.github.io/chips/docs/documentation/#tables-and-values) of the database documentation. Below is a preview of the template, including sample records from the `dataset_rsaage26` dataset.

{{< tsvtable2 "data/chips_dataset_entry_template.tsv" >}}

<br>

### Data authorship

Beyond data standardisation and interoperability, the CHIPS project also aims to make datasets **citable**, meaning that your contribution can be cited independently of both the CHIPS database and other datasets.

The simplified workflow below illustrates how contributed data are processed: once submitted, datasets are reviewed, integrated into the database, and published as independent datasets—with full attribution to contributors—in an open-access data repository (here, Zenodo).

<p align="center">
    {{< img src="images/chips_erd_publish.png" alt="CHIPS project publication workflow" width="500" >}}<br>
    Simplified CHIPS publication workflow (thick arrows).
</p>

<br>

Unless otherwise specified, your data will be subject to the **CC BY 4.0 license**. See, for example, the `dataset_rsaage26` dataset [**hosted on Zenodo**](https://zenodo.org/records/18793710).

## Software

> Python dashboard and R research software development

The source code for both the [**Python dashboard**](https://github.com/iramat/iramat-functions/tree/main/dashboard) and the [**R *iRamat* package**](https://github.com/iramat/iRamat) is openly available online. If you would like to contribute to the software, please do not hesitate to contact us with suggestions or [**open an issue**](https://github.com/iramat/chips/issues/new) on the CHIPS GitHub repository.

{{< callout context="note" title="Contact" icon="outline/info-circle" >}}
For scientific questions (e.g., error calculations), please contact [alexandre.disser@cnrs.fr](mailto:alexandre.disser@cnrs.fr). For IT-related questions (e.g., linked open data), please contact [thomas.huet@cnrs.fr](mailto:thomas.huet@cnrs.fr). See also the [Contact](https://iramat.github.io/chips/contact/) section.
{{< /callout >}}
