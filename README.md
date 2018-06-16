# :atom_symbol: BaseBack

:bulb: Toute modification pour améliorer ce starter est la bienvenue :heart:

## :boom: Introduction

Première installation de ce projet ?

:nerd_face: [Installation des logiciels suivants](https://github.com/O-clock-Dev/Tech/blob/master/install/first-install.md)
:scroll: [Scripts disponibles](https://github.com/O-clock-Dev/Tech/blob/master/install/script.md)
:deciduous_tree: [Tree-view](https://github.com/O-clock-Dev/Tech/blob/master/install/tree-view.md#back)
:arrow_right: [Workflow commun](https://github.com/O-clock-Dev/Tech/blob/master/install/workflow.md#workflow-commun) ~ [Workflow back](https://github.com/O-clock-Dev/Tech/blob/master/install/workflow.md#workflow-back)

## :sunny: Pré-requis

* Pour commencer à utiliser ce projet, créer un fichier de configuration `development.json` dans le dossier `config` en prenant comme exemple le fichier `development.sample.json`

* :bulb: Vous devez également créer un fichier de configuration `test.json` en prenant soin d'indiquer une URI différente pour la base de données, afin d'éviter tout problème avec la base de données de Développement.

## :punch: Utilisation

<details>
  <summary>1. Initialiser le serveur MongoDB</summary>
  <p>

* via `sudo service mongod start` sur Linux
* via `mongod` sur macOS.
* _Vous pouvez exécuter **Robo3T** si vous souhaitez utiliser le moteur graphique_.

      </p>

  </details>

<details>
  <summary>2. Initialiser le serveur Node</summary>
  <p>

* Installation des dépendances : `yarn`
* Lancement de votre serveur local : `yarn start`

      </p>

  </details>
