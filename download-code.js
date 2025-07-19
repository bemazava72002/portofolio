const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

// Créer le dossier de téléchargement s'il n'existe pas
const downloadDir = path.join(__dirname, 'downloads');
if (!fs.existsSync(downloadDir)) {
  fs.mkdirSync(downloadDir);
}

// Créer l'archive ZIP
const output = fs.createWriteStream(path.join(downloadDir, 'bemazava-julio-portfolio.zip'));
const archive = archiver('zip', {
  zlib: { level: 9 } // Compression maximale
});

output.on('close', function() {
  console.log('✅ Archive créée avec succès !');
  console.log(`📦 Taille: ${archive.pointer()} bytes`);
  console.log(`📁 Fichier: ${path.join(downloadDir, 'bemazava-julio-portfolio.zip')}`);
  console.log('\n🎉 Votre portfolio est prêt à être téléchargé !');
});

archive.on('error', function(err) {
  console.error('❌ Erreur lors de la création de l\'archive:', err);
  throw err;
});

// Connecter l'archive au flux de sortie
archive.pipe(output);

// Ajouter tous les fichiers du projet
const filesToInclude = [
  'app/',
  'components/',
  'lib/',
  'hooks/',
  'package.json',
  'package-lock.json',
  'next.config.js',
  'tailwind.config.ts',
  'tsconfig.json',
  'postcss.config.js',
  'components.json',
  '.eslintrc.json'
];

console.log('📦 Création de l\'archive du portfolio...\n');

filesToInclude.forEach(item => {
  const itemPath = path.join(__dirname, item);
  
  if (fs.existsSync(itemPath)) {
    const stats = fs.statSync(itemPath);
    
    if (stats.isDirectory()) {
      console.log(`📁 Ajout du dossier: ${item}`);
      archive.directory(itemPath, item);
    } else {
      console.log(`📄 Ajout du fichier: ${item}`);
      archive.file(itemPath, { name: item });
    }
  }
});

// Créer un README pour l'installation
const readmeContent = `# Portfolio BEMAZAVA Julio

## 🚀 Installation et démarrage

### Prérequis
- Node.js (version 16 ou supérieure)
- npm ou yarn

### Installation
1. Extraire l'archive ZIP
2. Ouvrir un terminal dans le dossier du projet
3. Installer les dépendances :
   \`\`\`bash
   npm install
   \`\`\`

### Démarrage en développement
\`\`\`bash
npm run dev
\`\`\`

Le site sera accessible sur http://localhost:3000

### Build pour la production
\`\`\`bash
npm run build
npm start
\`\`\`

## 🛠️ Technologies utilisées
- Next.js 13
- React 18
- TypeScript
- Tailwind CSS
- Shadcn/ui
- Lucide React (icônes)

## 📁 Structure du projet
- \`app/\` - Pages et composants Next.js
- \`components/\` - Composants UI réutilisables
- \`lib/\` - Utilitaires et helpers
- \`hooks/\` - Hooks React personnalisés

## 🎨 Personnalisation
- Modifiez \`app/page.tsx\` pour personnaliser le contenu
- Ajustez les couleurs dans \`tailwind.config.ts\`
- Remplacez les images par vos propres projets

## 📧 Contact
BEMAZAVA Julio - bemazava.julio@email.com

---
Portfolio créé avec ❤️ et Next.js
`;

archive.append(readmeContent, { name: 'README.md' });

// Finaliser l'archive
archive.finalize();