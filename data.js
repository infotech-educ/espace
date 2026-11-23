// =========================================================
// 1. VOS ANNONCES (Ajoutez, modifiez ou supprimez ici)
// =========================================================
const ANNONCES = [
  {
    id: 1,
    niveau: "tous", // "tc", "1ere", "2eme" ou "tous"
    date: "21 Nov 2026",
    titre: "Bienvenue sur l'espace de cours",
    contenu: "Tous les cours, séries d'exercices et devoirs corrigés seront publiés ici régulièrement.",
    urgent: true // true = bordure rouge, false = bordure bleue
  },
  /*`{
    id: 2,
    niveau: "tc",
    date: "22 Nov 2026",
    titre: "Devoir surveillé N°1 - Tronc Commun",
    contenu: "Le devoir aura lieu vendredi prochain. Révisez bien les chapitres 1 et 2 disponibles ci-dessous.",
    urgent: false
  },*/
  /*{
    id: 3,
    niveau: "2eme",
    date: "20 Nov 2026",
    titre: "Préparation à l'examen",
    contenu: "La nouvelle série d'exercices corrigés est en ligne dans la section 2ème Année.",
    urgent: false
  }*/
];

// =========================================================
// 2. VOS DOCUMENTS GOOGLE DRIVE
// =========================================================
// Astuce : Collez simplement le lien de partage Google Drive ("Tous les utilisateurs disposant du lien").
// Le site génère automatiquement le bouton "Voir" et le bouton "Télécharger".
const DOCUMENTS = [
  {
    id: 101,
    niveau: "tc", // "tc", "1ere", "2eme"
    type: "Cours", // "Cours", "Exercices", "Devoir", "TP"
    titre: "Chapitre 1",
    description: "Support de cours complet au format PDF avec schémas.",
    date: "22 Nov 2026",
    lienDrive: " "
  },/*
  {
    id: 102,
    niveau: "1ere",
    type: "Exercices",
    titre: "Série d'exercices N°1 avec corrigé",
    description: "10 exercices progressifs pour maîtriser les bases.",
    date: "19 Nov 2026",
    lienDrive: "https://drive.google.com/file/d/REMPLACER_PAR_VOTRE_ID_ICI/view?usp=sharing"
  },
  {
    id: 103,
    niveau: "2eme",
    type: "Devoir",
    titre: "Modèle de Devoir Surveillé N°1",
    description: "Sujet type avec barème détaillé et éléments de réponse.",
    date: "18 Nov 2026",
    lienDrive: "https://drive.google.com/file/d/REMPLACER_PAR_VOTRE_ID_ICI/view?usp=sharing"
  }*/
];