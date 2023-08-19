import { Cluster, ClusterDetails } from "../types";

export const clustersDetails: Record<Cluster, ClusterDetails> = {
  Lyria: {
    color: "deepblue",
    description:
      "Navigators of the celestial realms, Lyrians echo the melodies of existence. Drawing inspiration from the cosmic lyre, they craft symphonies from their insights, seeking knowledge to harmonize the universe's intricate dance.",
    personality: ["INTJ", "INFJ", "INTP", "INFP"],
    sign: "Cosmic Lyre",
  },
  Cygnus: {
    color: "sunlitgold",
    description:
      "Shining luminaries of the cosmic tapestry, Cygnians radiate leadership and charisma. Guided by the elegance of the swan, they carve pathways through the stars, illuminating the journey for those who follow.",
    personality: ["ENTJ", "ENFJ", "ENTP", "ENFP"],
    sign: "Radiant Swan",
  },
  Cassiope: {
    color: "forestgreen",
    description:
      "Masters of structure and form, Cassiopeans reflect the majesty of the cosmos. As the celestial crown signifies authority, they uphold the intricate balance of the universe with precision and clarity.",
    personality: ["ISTJ", "ISFJ", "ISFP", "ISTP"],
    sign: "Emerald Throne",
  },
  Athenae: {
    color: "moonlightgray",
    description:
      "Strategists of the interstellar expanse, Athenians channel the wisdom of eons. Like the owl, symbol of Athena, they pierce through obscurity with discerning eyes, ensuring the cosmos remains aligned to its grand design.",
    personality: ["ESTJ", "ESFJ", "ESFP", "ESTP"],
    sign: "Silver Owl",
  },
};
