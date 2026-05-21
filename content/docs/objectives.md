---
title: "State of interest"
description: "Guides lead a user through a specific task they want to accomplish, often with a sequence of steps."
summary: ""
# date: 2023-09-07T16:04:48+02:00
# lastmod: 2023-09-07T16:04:48+02:00
draft: false
weight: 10
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

> why CHIPS DB?

Despite a broad consensus in favour of a global, shared repository for chemical data associated with ironworking, iron mining, smelting, and smithing activities, no initiative to establish such a global reference source had been undertaken in the field of iron archaeometallurgy research until now. The aim of the CHIPS project and database is to provide this information in a standardised and interoperable manner to anyone interested in ancient ironworking and, as such, it complies with the CNRS Open Science policies[^1] and the FAIR principles.[^2]

The chemical data stored in the database can primarily be used to address questions related either to techniques (e.g., materials selected by metallurgists, operating temperatures, etc.) or to the circulation of raw materials and metallic products (i.e., provenance studies).

> A short history of the DB

The idea of a data repository for archaeometallurgical studies is not recent. Among the early initiatives, the Palsid database created by Alain Ploquin in the early 1990s stands out[^3]. A geochemist, A. Ploquin collaborated on numerous paleometallurgy research programs (iron-, copper-, lead-based metallurgies), primarily in France, but also in Africa, Asia, and Europe. The chemical database he developed contained over a thousand analyses conducted in collaboration with more than thirty archaeologists. Structured as a spreadsheet, this database has been regularly updated since its creation and now includes approximately 2,000 analyses, several hundred of which remain unpublished to this day.

An effort to aggregate multiple chemical datasets was undertaken in the 2010s by Sylvain Bauvais (IRAMAT – Laboratory for Archaeomaterials and Alteration Prediction). Nearly 3,000 analyses, mainly related to studies undertaken by IRAMAT members and other archaeometallurgy teams in France, were harmonized and aggregated into a MS Excel spreadsheet. Several hundred analyses from the Palsid database were also integrated into this new repository, which was named CHIPS.

While this database proved highly useful for conducting research requiring reference data from distinct bibliographic sources, it also revealed several limitations. Managing successive versions (as data were added) quickly became complex. Additionally, the data were not spatially referenced. Finally, the query functionalities offered by MS Excel proved insufficient for the needs at hand. 
In 2022, it was therefore decided to develop a relational database using PostgreSQL. Adopting a relational structure enabled numerous advancements, including optimized management of metadata (analytical, geo-administrative, typologies, bibliographic references, etc.), as well as remote access to the database. A first online user interface was developed to visualize and explore the data. A second interface followed, offering more advanced features for representing chemical data, along with the ability to perform queries and download data from the database. This website is dedicated to this version of CHIPS.




[^1]: "Open science consists of making research results ''as accessible as possible and as closed as necessary'" from this reference: CNRS. "Science Ouverte." Accessed May 20, 2026. https://www.science-ouverte.cnrs.fr/.
[^2]: Wilkinson, Mark D., Michel Dumontier, IJsbrand Jan Aalbersberg, Gabrielle Appleton, Myles Axton, Arie Baak, Niklas Blomberg et al. "The FAIR Guiding Principles for scientific data management and stewardship." _Scientific data_ 3, no. 1 (2016): 1-9.
[^3]: Ploquin, Alain. “Palsid. Un prototype de base de données paléosidérurgiques“. In : Mangin, Michel (ed.). La sidérurgie ancienne de l’Est de la France dans son contexte européen. Archéologie et archéométrie. Actes du colloque de Besançon. 10-13 novembre 1993. Paris : Les Belles Lettres, p. 83-84.


