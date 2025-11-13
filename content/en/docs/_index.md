---
title: "Database Handbook"
type: docs
# layout: docs
weight: 1
url: "/en/docs/"
---

## Database documentation



#### Entity-Relations Diagram

<p align="center">
    {{< img src="images/db_erd.png" alt="ERD diagram" width="700" >}}<br>
  Simplified ERD of the CHIPS DB
</p>


#### Recording Measurement Errors

<p class="justify">

The following protocol has been established for recording measurement errors:

- identify the analytical setups; each of them is recorded in the `machines` table, specifying the type of chemical analysis, the laboratory and the model of device used.
- identify their characteristics (i.e. measurement errors); for each analytical device listed in the `machines` table, for each chemical element listed in the `elements` table, and for a given range of values, the relative measurement uncertainty is expressed in the `uncertainties` table. The query result in Figure 2 shows how these values are organised. Uncertainties 151 to 154 represent the relative errors of the _Centre de Recherches Pétrographiques et Géochimiques_ (CRPG) laboratory's ICP-MS analyser for the element Yttrium. For a content of more than 50 mg.kg<sup>-1</sup>, this error is 5%. It increases to 15% for a measured content of between 1 and 50 mg.kg<sup>-1</sup>, and up to 100% for measured contents of less than 0.1 mg.kg<sup>-1</sup>.

<p align="center">
    {{< img src="images/db_crud_c_errors.png" alt="error measures" width="700" >}}<br>
  View built on the <code>machines</code>, <code>elements</code> and <code>uncertainties</code> tables, showing the relative measurement uncertainties depending on the analytical setup and the measured amount range
</p>


</p>
