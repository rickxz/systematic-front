import { readdirSync, statSync, readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

// Obtém o caminho do diretório atual em um módulo ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Função para procurar arquivos recursivamente em um diretório
const findFiles = (dir, fileList = []) => {
  const files = readdirSync(dir);
  files.forEach((file) => {
    const filePath = join(dir, file);
    if (statSync(filePath).isDirectory()) {
      fileList = findFiles(filePath, fileList);
    } else if (filePath.endsWith('.ts') || filePath.endsWith('.tsx')) {
      fileList.push(filePath);
    }
  });
  return fileList;
};

// Função para procurar a substring em um arquivo
const searchSubstringInFile = (filePath, substring) => {
  const content = readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  const results = [];

  lines.forEach((line, index) => {
    if (line.includes(substring)) {
      results.push({ line: index + 1, text: line.trim() });
    }
  });

  return results;
};

// Função principal para vasculhar o diretório
const searchInDirectory = (dir, substring) => {
  const files = findFiles(dir);
  files.forEach((file) => {
    const matches = searchSubstringInFile(file, substring);
    if (matches.length > 0) {
      console.log(`\nOccurrences in ${file}:`);
      matches.forEach((match) => {
        console.log(`  Line ${match.line}: ${match.text}`);
      });
    }
  });
};

const substringToSearch = process.argv[2];
if (!substringToSearch) {
    console.error(
        `\nPlease provide a substring to serach for. You can do this comanding \n
        'node searchSubString.js <substringToSearch>'`
    );
    process.exit(1);
}

// Diretório alvo e substring a procurar
const directoryToSearch = join(__dirname, '../../src'); // Mude 'src' para o diretório que deseja vasculhar

// Executa a busca
searchInDirectory(directoryToSearch, substringToSearch);
