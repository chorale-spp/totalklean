export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  content: string[];
};

export const posts: BlogPost[] = [
  {
    slug: "5-astuces-proteger-peinture",
    title: "5 astuces simples pour protéger la peinture de votre voiture",
    excerpt:
      "La peinture de votre véhicule est exposée chaque jour au soleil, à la poussière et aux intempéries. Voici 5 gestes simples pour la préserver durablement.",
    date: "3 juin 2026",
    readTime: "4 min",
    category: "Entretien",
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1200&auto=format&fit=crop",
    content: [
      "La peinture de votre véhicule est sa première ligne de défense contre les éléments. Un entretien régulier permet non seulement de préserver son éclat, mais aussi sa valeur de revente.",
      "1. Lavez régulièrement votre véhicule, idéalement toutes les deux semaines, en utilisant des produits adaptés au pH neutre.",
      "2. Évitez de laver votre voiture en plein soleil : l'eau et le savon sèchent trop vite et peuvent laisser des traces.",
      "3. Appliquez une cire ou un revêtement céramique pour créer une barrière protectrice contre les UV et les contaminants.",
      "4. Garez votre véhicule à l'ombre ou sous un abri lorsque c'est possible, pour limiter l'exposition prolongée au soleil.",
      "5. Traitez rapidement les taches (fientes d'oiseaux, sève, insectes) qui peuvent attaquer le vernis si elles restent trop longtemps.",
      "Chez Total Klean, notre service de protection céramique offre une solution durable pour garder votre véhicule brillant plus longtemps, sans effort supplémentaire de votre part.",
    ],
  },
  {
    slug: "interieur-toujours-frais",
    title: "Comment garder l'intérieur de votre voiture toujours frais",
    excerpt:
      "Entre la poussière, les odeurs et l'usure quotidienne, l'habitacle de votre voiture mérite autant d'attention que sa carrosserie. Nos conseils pour un intérieur impeccable.",
    date: "22 mai 2026",
    readTime: "3 min",
    category: "Intérieur",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
    content: [
      "Un intérieur propre améliore non seulement votre confort de conduite, mais aussi la qualité de l'air que vous respirez chaque jour.",
      "Aspirez régulièrement les sièges, tapis et recoins difficiles d'accès — c'est là que la poussière et les allergènes s'accumulent.",
      "Nettoyez et hydratez le cuir tous les deux à trois mois pour éviter qu'il ne se craquelle avec le temps.",
      "Utilisez des produits spécifiques pour les surfaces en plastique afin d'éviter les reflets gras et la décoloration au soleil.",
      "Pensez à aérer régulièrement votre véhicule, surtout après un trajet sous la pluie, pour limiter l'humidité et les mauvaises odeurs.",
      "Notre service de detailing intérieur couvre l'ensemble de ces étapes, avec des produits professionnels adaptés à chaque type de surface.",
    ],
  },
  {
    slug: "ceramique-vs-cire",
    title: "Protection céramique vs cire : que choisir pour votre véhicule ?",
    excerpt:
      "Cire traditionnelle ou revêtement céramique ? On vous explique les différences pour faire le bon choix selon votre usage et votre budget.",
    date: "10 mai 2026",
    readTime: "5 min",
    category: "Protection",
    image: "https://images.unsplash.com/photo-1619767886558-efdc259b6e09?q=80&w=1200&auto=format&fit=crop",
    content: [
      "La cire traditionnelle offre une brillance immédiate et chaleureuse, mais sa durée de vie est limitée — généralement quelques semaines à quelques mois.",
      "Le revêtement céramique, lui, crée une liaison chimique avec la peinture et forme une couche de protection rigide qui peut durer plusieurs années.",
      "En termes d'entretien, une voiture protégée par céramique est plus facile à laver : l'eau et la saleté glissent sur la surface (effet hydrophobe).",
      "Côté budget, la cire est plus abordable à court terme, mais le céramique représente un meilleur investissement sur le long terme, notamment pour les véhicules neufs ou récemment restaurés.",
      "Notre équipe peut vous conseiller sur la meilleure option selon l'usage de votre véhicule, votre budget et vos attentes en matière d'entretien.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}
