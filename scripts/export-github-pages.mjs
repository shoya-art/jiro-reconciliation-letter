import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const projectDir = process.cwd();
const outputDir = path.join(projectDir, "docs");
const baseUrl = process.env.EXPORT_BASE_URL ?? "http://localhost:3001";
const publicUrl = "https://shoya-art.github.io/jiro-reconciliation-letter/";

const [htmlResponse, cssResponse] = await Promise.all([
  fetch(`${baseUrl}/`),
  fetch(`${baseUrl}/app/globals.css`),
]);

if (!htmlResponse.ok || !cssResponse.ok) {
  throw new Error(`Export source failed: HTML ${htmlResponse.status}, CSS ${cssResponse.status}`);
}

const sourceHtml = await htmlResponse.text();
const cssModule = await cssResponse.text();
const main = sourceHtml.match(/<main>[\s\S]*<\/main>/)?.[0];
const cssLiteral = cssModule.match(/const __vite__css = ("[\s\S]*?")\n__vite__updateStyle/)?.[1];

if (!main || !cssLiteral) {
  throw new Error("Could not extract the rendered page or compiled stylesheet.");
}

const staticMain = main
  .replaceAll(/\/_next\/image\?url=%2Fimages%2F([^&"]+)&amp;w=\d+&amp;q=\d+/g, "./images/$1")
  .replaceAll("%2F", "/")
  .replaceAll("<!-- -->", "");

const document = `<!doctype html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>別れたあとも、彼のことが頭から離れないあなたへ</title>
    <meta name="description" content="別れた彼との関係と、心に残った痛みを一緒に整理する無料個別相談。">
    <meta property="og:title" content="別れたあとも、彼のことが頭から離れないあなたへ">
    <meta property="og:description" content="別れた彼との関係と、心に残った痛みを一緒に整理する無料個別相談。">
    <meta property="og:type" content="website">
    <meta property="og:url" content="${publicUrl}">
    <meta property="og:image" content="${publicUrl}og.png">
    <meta name="twitter:card" content="summary_large_image">
    <link rel="icon" href="./favicon.svg">
    <link rel="stylesheet" href="./styles.css">
  </head>
  <body>${staticMain}</body>
</html>
`;

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });
await writeFile(path.join(outputDir, "index.html"), document);
await writeFile(path.join(outputDir, "styles.css"), JSON.parse(cssLiteral));
await writeFile(path.join(outputDir, ".nojekyll"), "");
await cp(path.join(projectDir, "public", "images"), path.join(outputDir, "images"), { recursive: true });

for (const asset of ["favicon.svg", "og.png"]) {
  await cp(path.join(projectDir, "public", asset), path.join(outputDir, asset));
}

const packageJson = JSON.parse(await readFile(path.join(projectDir, "package.json"), "utf8"));
console.log(`Exported ${packageJson.name} to ${outputDir}`);
