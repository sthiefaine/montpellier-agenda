export interface CategoryStyle {
  background: string;
  color: string;
}

export interface Category {
  name: string;
  style: CategoryStyle;
}

export const categories: Category[] = [
  {
    name: "Concert",
    style: {
      background: "#E3F2FD",
      color: "#1976D2",
    },
  },
  {
    name: "Animation locale",
    style: {
      background: "#F3E5F5",
      color: "#7B1FA2",
    },
  },
  {
    name: "Festival",
    style: {
      background: "#FFF3E0",
      color: "#F57C00",
    },
  },
  {
    name: "Stage / Atelier",
    style: {
      background: "#E8F5E9",
      color: "#388E3C",
    },
  },
  {
    name: "Visite guidée",
    style: {
      background: "#E0F7FA",
      color: "#0097A7",
    },
  },
  {
    name: "Spectacle",
    style: {
      background: "#FCE4EC",
      color: "#C2185B",
    },
  },
  {
    name: "Exposition",
    style: {
      background: "#F1F8E9",
      color: "#689F38",
    },
  },
  {
    name: "Evénement jeune public",
    style: {
      background: "#FFF8E1",
      color: "#FFA000",
    },
  },
  {
    name: "Théâtre",
    style: {
      background: "#E8EAF6",
      color: "#3F51B5",
    },
  },
  {
    name: "Congrès",
    style: {
      background: "#FBE9E7",
      color: "#D84315",
    },
  },
  {
    name: "Débat / Conférence",
    style: {
      background: "#E0F2F1",
      color: "#00796B",
    },
  },
  {
    name: "Compétition",
    style: {
      background: "#FFEBEE",
      color: "#D32F2F",
    },
  },
  {
    name: "Randonnée, balade",
    style: {
      background: "#F9FBE7",
      color: "#AFB42B",
    },
  },
  {
    name: "Spectacle de danse",
    style: {
      background: "#F3E5F5",
      color: "#8E24AA",
    },
  },
  {
    name: "Jeu, concours",
    style: {
      background: "#FFF3E0",
      color: "#E64A19",
    },
  },
  {
    name: "Salon",
    style: {
      background: "#E8F5E9",
      color: "#2E7D32",
    },
  },
  {
    name: "Marché",
    style: {
      background: "#F1F8E9",
      color: "#558B2F",
    },
  },
  {
    name: "Lecture",
    style: {
      background: "#E3F2FD",
      color: "#1565C0",
    },
  },
  {
    name: "Projection, cinéma",
    style: {
      background: "#FCE4EC",
      color: "#AD1457",
    },
  },
  {
    name: "Séminaire",
    style: {
      background: "#E0F7FA",
      color: "#00838F",
    },
  },
];

export const getCategoryStyle = (type: string): CategoryStyle => {
  const category = categories.find((cat) => cat.name.toLowerCase().includes(type.toLowerCase()));
  return (
    category?.style || {
      background: "#f3f4f6",
      color: "#4b5563",
    }
  );
};
