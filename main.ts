// gta6-clipper-01 entry program (Node 22, standard library only).
// The entry's video lives on YouTube; this program's only job is to hand
// its address in: it copies VIDEO.json from this repository to the output
// directory the grader reads. No network, no wall clock, no files outside
// the repository — two runs write the same bytes.
//
// Local check: mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
copyFileSync(new URL('./VIDEO.json', import.meta.url), join(outDir, 'VIDEO.json'));
