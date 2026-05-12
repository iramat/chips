---
title: "How-to-cite"
description: ""
summary: ""
layout: "docs"
# date: 2023-04-03T14:50:38+01:00
draft: false
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---
## Data

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

## Database

The **CHIPS database** itself, which provides standardization and interoperability, should be cited separately:

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


