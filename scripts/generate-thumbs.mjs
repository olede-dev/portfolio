// Generates responsive variants (thumb-640.webp, thumb-960.webp) next to each
// project's thumb.webp. Run after adding or replacing a thumbnail.
import { existsSync, readdirSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve("public/img/projects");
const widths = [640, 960];

for (const slug of readdirSync(root)) {
	const src = path.join(root, slug, "thumb.webp");
	if (!existsSync(src)) continue;
	for (const width of widths) {
		const out = path.join(root, slug, `thumb-${width}.webp`);
		await sharp(src).resize({ width, withoutEnlargement: true }).webp({ quality: 80 }).toFile(out);
	}
}
