---
title: "Dashboard Documentation"
description: ""
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

CHIPS' dashboard -- developed with the Python package `dash`-- provides a synoptic and intuitive interface for data exploration, including zoomable distribution maps and dynamic visualizations such as line charts and ternary plots.

The dashboard is publicly accessible at: <https://iramat-apps.cnrs.fr/dash/>

## Spatial distribution of datasets

The dashboard landing page uses a dynamic Leaflet interface with common geoweb functionalities, including zooming, panning, and interactive information displayed on hover.

<p align="center">
    {{< img src="images/dash-page-landing.png" alt="CHIPS dashboard landing page" width="800" >}}<br>
  Landing page of the CHIPS dashboard, showing the spatial distribution of CHIPS interoperable (API-based) datasets.
</p>

### Dataset selection

From this page, users can access data from individual datasets. For example, the `dataset_gzabinski23` dataset is available at: <https://iramat-apps.cnrs.fr/dash/mapview?dataset=dataset_gzabinski23>


<p align="center">
    {{< img src="images/dash-page-dataset-spat-gzabinski23.png" alt="CHIPS dashboard landing page" width="800" >}}<br>
 Landing page of the `dataset_gzabinski23` dataset.
</p>

From this point, the left sidebar offers direct access to:

- **API**: interface external applications (for example, the R package `iRamat`) without downloading the data.
- **CSV**: download the complete dataset together with its references.
- **Line Chart** and **Ternary Plot**: dynamically visualize the data (zooming, hovering, pop-up windows, etc.).

## Exploring compositional data

Compositional data can be explored through several dynamic Plotly visualizations, featuring zooming, hovering, and interactive pop-up windows.

### Line Chart

Among the different plots calculated on the fly from the API, one of these is the line chart: <https://iramat-apps.cnrs.fr/dash/dataset_gzabinski23>

<p align="center">
    {{< img src="images/dash-page-dataset-linechart-gzabinski23.png" alt="CHIPS dashboard landing page" width="800" >}}<br>
  Line chart view of the `dataset_gzabinski23` dataset. By default, the chart uses a logarithmic scale.
</p>

### Ternary Plot

Another possible view is the ternary plot: <https://iramat-apps.cnrs.fr/dash/charttern/dataset_gzabinski23>

<p align="center">
    {{< img src="images/dash-page-dataset-ternaryplot-gzabinski23.png" alt="CHIPS dashboard ternary plot" width="800" >}}<br>
  Ternary plot view of the `dataset_gzabinski23` dataset. By default, the three selected oxides are: FeO-SiO2-Al2O3.
</p>

## Accessing the raw data

Whenever data are made available, the corresponding references are provided to ensure proper citation. As mentioned above, each published dataset includes options for both **CSV export** and access through an **API endpoint**.

## Reporting an issue

If you encounter an issue, please do not hesitate to [open an issue](https://github.com/iramat/chips/issues/new) on the CHIPS GitHub repository. Likewise, if you have suggestions for further developments and wish to contribute to the CHIPS interface, we welcome your feedback.


## Dashboard code reusability

The source code of the dashboard is available on [GitHub](https://github.com/iramat/iramat-functions/tree/main/dashboard).

{{< callout context="note" title="R package" icon="outline/info-circle" >}}
Alongside the Python-based dashboard, the CHIPS database is accompanied by the [**R *iRamat* package**](https://github.com/iramat/iRamat), which facilitates the integration of CHIPS data into an R environment.
{{< /callout >}}
