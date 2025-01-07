const fs = require('fs');
const path = require('path');

const carouselDir = path.join(process.cwd(), 'public', 'images', 'carousel');
const outputFile = path.join(process.cwd(), 'src', 'lib', 'carousel-items.ts');

// Create the carousel items array
function generateCarouselItems() {
  try {
    // Read the directory
    const files = fs.readdirSync(carouselDir)
      .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file));

    // Generate the TypeScript content
    const content = `// Auto-generated file - DO NOT EDIT
export const carouselItems = [
  ${files.map((file, index) => `{
    src: "/images/carousel/${file}",
    alt: "Carousel Image ${index + 1}"
  }`).join(',\n  ')}
] as const;
`;

    // Ensure the lib directory exists
    const libDir = path.dirname(outputFile);
    if (!fs.existsSync(libDir)) {
      fs.mkdirSync(libDir, { recursive: true });
    }

    // Write the file
    fs.writeFileSync(outputFile, content);
    console.log('Successfully generated carousel items!');

  } catch (error) {
    console.error('Error generating carousel items:', error);
    process.exit(1);
  }
}

generateCarouselItems();
