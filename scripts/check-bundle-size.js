/* eslint-disable @typescript-eslint/no-require-imports, @typescript-eslint/no-unused-vars */
const fs = require("fs");
const path = require("path");

const BUILD_MANIFEST_PATH = path.join(
  __dirname,
  "../.next/build-manifest.json",
);
const NEXT_DIR = path.join(__dirname, "../.next");

// Budget in bytes
const ROUTE_BUDGET = 200 * 1024; // 200KB per route
const INITIAL_BUDGET = 300 * 1024; // 300KB for app initial JS

function getFileSize(filePath) {
  try {
    return fs.statSync(path.join(NEXT_DIR, filePath)).size;
  } catch (e) {
    return 0;
  }
}

function checkBudgets() {
  if (!fs.existsSync(BUILD_MANIFEST_PATH)) {
    console.error("build-manifest.json not found. Run next build first.");
    process.exit(1);
  }

  const manifest = JSON.parse(fs.readFileSync(BUILD_MANIFEST_PATH, "utf-8"));
  let hasError = false;

  console.log("--- ENFORCING BUNDLE BUDGETS ---");

  // Check initial app JS
  const initialFiles = manifest.rootMainFiles || [];
  const initialSize = initialFiles.reduce(
    (acc, file) => acc + getFileSize(file),
    0,
  );

  console.log(`Initial JS Size: ${(initialSize / 1024).toFixed(2)} KB`);
  if (initialSize > INITIAL_BUDGET) {
    console.error(
      `❌ Initial JS exceeds budget of ${INITIAL_BUDGET / 1024} KB`,
    );
    hasError = true;
  } else {
    console.log(`✅ Initial JS is within budget.`);
  }

  // Check individual routes
  const pages = manifest.pages || {};
  for (const [route, files] of Object.entries(pages)) {
    const routeSize = files
      .filter((f) => f.endsWith(".js"))
      .reduce((acc, file) => acc + getFileSize(file), 0);

    if (routeSize > ROUTE_BUDGET) {
      console.error(
        `❌ Route ${route} exceeds budget! (${(routeSize / 1024).toFixed(2)} KB > ${ROUTE_BUDGET / 1024} KB)`,
      );
      hasError = true;
    }
  }

  if (hasError) {
    console.error("Bundle budgets exceeded. Failing CI.");
    process.exit(1);
  } else {
    console.log("✅ All routes within budget.");
    process.exit(0);
  }
}

checkBudgets();
