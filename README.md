# Agenda Montpellier

Une application web moderne pour découvrir les événements à Montpellier. Construite avec Next.js 14, TypeScript et Tailwind CSS.

## 🚀 Fonctionnalités

- Affichage des événements à Montpellier
- Interface utilisateur moderne et responsive
- Filtrage des événements par catégorie
- Affichage des dates de début et de fin
- Indication des prix (gratuit ou payant)
- Design adaptatif pour mobile et desktop

## 🛠️ Technologies utilisées

- [Next.js 14](https://nextjs.org/) - Framework React avec rendu côté serveur
- [TypeScript](https://www.typescriptlang.org/) - Typage statique
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitaire
- [React](https://reactjs.org/) - Bibliothèque UI
- [CSS Modules](https://github.com/css-modules/css-modules) - Scoping CSS

## 🏗️ Installation

1. Clonez le repository :
```bash
git clone https://github.com/votre-username/montpellier-agenda.git
cd montpellier-agenda
```

2. Installez les dépendances :
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. Lancez le serveur de développement :
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

4. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📁 Structure du projet

```
montpellier-agenda/
├── app/
│   ├── components/
│   ├── actions/
│   ├── types/
│   └── page.tsx
├── public/
└── package.json
```

## 🎨 Fonctionnalités principales

### Affichage des événements
- Cartes d'événements avec image, titre, date et lieu
- Catégorisation visuelle des événements
- Affichage des prix (gratuit ou payant)

### Interface utilisateur
- Header fixe avec date du jour
- Design responsive
- Chargement progressif des images
- États de chargement (skeletons)

### Performance
- Rendu côté serveur (SSR)
- Mise en cache des données
- Optimisation des images
- Chargement progressif

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push sur la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📝 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 🙏 Remerciements

- API de la ville de Montpellier pour les données des événements

