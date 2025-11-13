---
title: "Documentation BDD"
type: docs
layout: docs
weight: 1
url: "/fr/docs/"
---

## Documentation de la base de données

#### Modèle conceptuel de données

<p align="center">
    {{< img src="images/db_erd.png" alt="ERD diagram" width="700" >}}<br>
  Simplified ERD of the CHIPS DB
</p>


#### Enregistrement des erreurs de mesure

<p class="justify">

Le protocole suivant a été établi pour l’enregistrement des erreurs de mesure :

- identifier les dispositifs analytiques ; chacun d’eux est enregistré dans la table `machines`, en précisant le type d’analyse chimique, le laboratoire et le modèle d’appareil utilisé.
- identifier leurs caractéristiques (c’est-à-dire les erreurs de mesure) ; pour chaque appareil analytique listé dans la table `machines`, pour chaque élément chimique listé dans la table `elements`, et pour une plage de valeurs donnée, l’incertitude relative de mesure est exprimée dans la table `uncertainties`. Le résultat de requête de la Figure 2 montre comment ces valeurs sont organisées. Les incertitudes 151 à 154 représentent les erreurs relatives de l’analyseur ICP-MS du laboratoire _Centre de Recherches Pétrographiques et Géochimiques_ (CRPG) pour l’élément Yttrium. Pour une teneur supérieure à 50 mg.kg<sup>-1</sup>, cette erreur est de 5 %. Elle augmente à 15 % pour une teneur mesurée comprise entre 1 et 50 mg.kg<sup>-1</sup>, et jusqu’à 100 % pour des teneurs mesurées inférieures à 0,1 mg.kg<sup>-1</sup>.

<p align="center">
    {{< img src="images/db_crud_c_errors.png" alt="error measures" width="700" >}}<br>
    Vue construite à partir des tables <code>machines</code>, <code>elements</code> et <code>uncertainties</code>, montrant les incertitudes relatives de mesure en fonction du dispositif analytique et de la plage de valeurs mesurées
</p>

</p>
