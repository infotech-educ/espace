let currentLevel = "tous";
let searchQuery = "";

const LEVEL_LABELS = {
  tous: { text: "Tous les niveaux", classes: "bg-amber-100 text-amber-800" },
  tc: { text: "Tronc Commun", classes: "bg-blue-100 text-blue-800" },
  "1ere": { text: "1ère Année", classes: "bg-emerald-100 text-emerald-800" },
  "2eme": { text: "2ème Année", classes: "bg-purple-100 text-purple-800" }
};

// Transforme un lien Google Drive standard en lien de téléchargement direct
function getDriveDownloadUrl(url) {
  const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if (match && match[1]) {
    return `https://drive.google.com/uc?export=download&id=${match[1]}`;
  }
  return url;
}

function renderAnnonces() {
  const container = document.getElementById("annoncesContainer");

  const filtered = ANNONCES.filter((item) => {
    const matchLevel =
      currentLevel === "tous" || item.niveau === currentLevel || item.niveau === "tous";
    const matchSearch =
      item.titre.toLowerCase().includes(searchQuery) ||
      item.contenu.toLowerCase().includes(searchQuery);
    return matchLevel && matchSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<p class="text-sm text-slate-500 italic">Aucune annonce pour cette sélection.</p>`;
    return;
  }

  container.innerHTML = filtered
    .map((item) => {
      const badge = LEVEL_LABELS[item.niveau] || LEVEL_LABELS.tous;
      const borderClass = item.urgent ? "border-l-4 border-red-500" : "border-l-4 border-indigo-500";
      return `
        <div class="bg-white p-4 rounded-xl shadow-sm border border-slate-200 ${borderClass}">
          <div class="flex flex-wrap items-center justify-between gap-2 mb-1">
            <div class="flex items-center gap-2">
              <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full ${badge.classes}">
                ${badge.text}
              </span>
              ${item.urgent ? '<span class="text-xs font-bold text-red-600"><i class="fa-solid fa-circle-exclamation"></i> Important</span>' : ""}
            </div>
            <span class="text-xs text-slate-400">${item.date}</span>
          </div>
          <h3 class="font-bold text-slate-800 mt-1">${item.titre}</h3>
          <p class="text-sm text-slate-600 mt-1">${item.contenu}</p>
        </div>
      `;
    })
    .join("");
}

function renderDocuments() {
  const container = document.getElementById("documentsContainer");

  const filtered = DOCUMENTS.filter((doc) => {
    const matchLevel = currentLevel === "tous" || doc.niveau === currentLevel;
    const matchSearch =
      doc.titre.toLowerCase().includes(searchQuery) ||
      doc.description.toLowerCase().includes(searchQuery) ||
      doc.type.toLowerCase().includes(searchQuery);
    return matchLevel && matchSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<p class="text-sm text-slate-500 italic col-span-full">Aucun document disponible pour cette sélection.</p>`;
    return;
  }

  container.innerHTML = filtered
    .map((doc) => {
      const badge = LEVEL_LABELS[doc.niveau] || LEVEL_LABELS.tous;
      const downloadUrl = getDriveDownloadUrl(doc.lienDrive);
      return `
        <div class="bg-white p-5 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-md transition">
          <div>
            <div class="flex items-center justify-between gap-2 mb-2">
              <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full ${badge.classes}">
                ${badge.text}
              </span>
              <span class="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                ${doc.type}
              </span>
            </div>
            <h3 class="font-bold text-slate-800 text-base">${doc.titre}</h3>
            <p class="text-sm text-slate-600 mt-1">${doc.description}</p>
          </div>

          <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
            <span class="text-xs text-slate-400"><i class="fa-regular fa-calendar"></i> ${doc.date}</span>
            <div class="flex gap-2">
              <a href="${doc.lienDrive}" target="_blank" rel="noopener noreferrer"
                 class="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition">
                <i class="fa-regular fa-eye"></i> Voir
              </a>
              <a href="${downloadUrl}" target="_blank" rel="noopener noreferrer"
                 class="px-3 py-1.5 text-xs font-semibold rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition">
                <i class="fa-solid fa-download"></i> Télécharger
              </a>
            </div>
          </div>
        </div>
      `;
    })
    .join("");
}

function renderAll() {
  renderAnnonces();
  renderDocuments();
}

// Gestion des onglets de niveaux
document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    currentLevel = btn.dataset.level;

    document.querySelectorAll(".tab-btn").forEach((b) => {
      b.classList.remove("bg-indigo-600", "text-white");
      b.classList.add("bg-slate-100", "text-slate-700");
    });
    btn.classList.remove("bg-slate-100", "text-slate-700");
    btn.classList.add("bg-indigo-600", "text-white");

    renderAll();
  });
});

// Gestion de la barre de recherche
document.getElementById("searchInput").addEventListener("input", (e) => {
  searchQuery = e.target.value.toLowerCase().trim();
  renderAll();
});

// Affichage initial
renderAll();