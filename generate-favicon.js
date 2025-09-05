import favicons from "favicons";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const source = path.join(__dirname, "public/logo.svg");

const configuration = {
  path: "/",
  appName: "Bitsframe",
  appDescription: "Bitsframe Application",
  developerName: "Your Name",
  background: "#fff",
  theme_color: "#000",
  icons: {
    android: true,
    appleIcon: true,
    favicons: true,
    windows: true,
    yandex: false
  }
};

favicons(source, configuration)
  .then(response => {
    const publicDir = path.join(__dirname, "public");
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir);
    }

    response.images.forEach(image => {
      fs.writeFileSync(path.join(publicDir, image.name), image.contents);
    });
    response.files.forEach(file => {
      fs.writeFileSync(path.join(publicDir, file.name), file.contents);
    });
    console.log("✅ Favicons generated successfully in public/");
  })
  .catch(error => {
    console.error("❌ Error generating favicons:", error.message);
  });
