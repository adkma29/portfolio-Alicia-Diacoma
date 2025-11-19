import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const PUBLIC_DIR = './public';
const QUALITY = 85; // Qualité WebP (85 = excellent compromis)
const FORMATS_TO_CONVERT = ['.png', '.jpg', '.jpeg'];

// Fonction pour obtenir tous les fichiers récursivement
function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
    } else {
      arrayOfFiles.push(filePath);
    }
  });

  return arrayOfFiles;
}

// Fonction pour convertir une image en WebP
async function convertToWebP(inputPath) {
  const ext = path.extname(inputPath).toLowerCase();
  
  // Ignorer les fichiers qui ne sont pas des images à convertir
  if (!FORMATS_TO_CONVERT.includes(ext)) {
    return null;
  }

  const outputPath = inputPath.replace(ext, '.webp');
  
  // Si le fichier WebP existe déjà, on le saute
  if (fs.existsSync(outputPath)) {
    console.log(`⏭️  Déjà converti: ${path.basename(outputPath)}`);
    return null;
  }

  try {
    const inputStats = fs.statSync(inputPath);
    const inputSizeKB = (inputStats.size / 1024).toFixed(2);

    await sharp(inputPath)
      .webp({ quality: QUALITY })
      .toFile(outputPath);

    const outputStats = fs.statSync(outputPath);
    const outputSizeKB = (outputStats.size / 1024).toFixed(2);
    const reduction = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);

    console.log(`✅ ${path.basename(inputPath)} (${inputSizeKB} KB) → ${path.basename(outputPath)} (${outputSizeKB} KB) | -${reduction}%`);
    
    return {
      original: inputPath,
      webp: outputPath,
      reduction: reduction
    };
  } catch (error) {
    console.error(`❌ Erreur lors de la conversion de ${inputPath}:`, error.message);
    return null;
  }
}

// Fonction principale
async function optimizeAllImages() {
  console.log('🚀 Démarrage de l\'optimisation des images...\n');
  
  const allFiles = getAllFiles(PUBLIC_DIR);
  const imageFiles = allFiles.filter(file => 
    FORMATS_TO_CONVERT.includes(path.extname(file).toLowerCase())
  );

  console.log(`📁 ${imageFiles.length} images trouvées\n`);

  let totalOriginalSize = 0;
  let totalWebPSize = 0;
  const results = [];

  for (const imagePath of imageFiles) {
    const result = await convertToWebP(imagePath);
    if (result) {
      results.push(result);
      const originalStats = fs.statSync(result.original);
      const webpStats = fs.statSync(result.webp);
      totalOriginalSize += originalStats.size;
      totalWebPSize += webpStats.size;
    }
  }

  // Statistiques finales
  console.log('\n' + '='.repeat(60));
  console.log('📊 RÉSUMÉ DE L\'OPTIMISATION');
  console.log('='.repeat(60));
  console.log(`✅ Images converties: ${results.length}`);
  console.log(`📦 Taille originale: ${(totalOriginalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`📦 Taille optimisée: ${(totalWebPSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`💾 Économie totale: ${((1 - totalWebPSize / totalOriginalSize) * 100).toFixed(1)}% (-${((totalOriginalSize - totalWebPSize) / 1024 / 1024).toFixed(2)} MB)`);
  console.log('='.repeat(60));
  
  console.log('\n⚠️  PROCHAINE ÉTAPE:');
  console.log('1. Vérifie les images WebP générées dans /public/');
  console.log('2. Je vais mettre à jour automatiquement les chemins dans ton code');
  console.log('3. Tu pourras supprimer les anciennes PNG/JPG si tout fonctionne');
}

// Exécution
optimizeAllImages().catch(console.error);
