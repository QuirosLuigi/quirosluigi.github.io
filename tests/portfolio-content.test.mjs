import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("portfolio presents Luigi for technical consulting roles and offers the resume", async () => {
  const html = await readFile(new URL("../index.html", import.meta.url), "utf8");

  assert.match(html, /NetSuite Technical Consultant/);
  assert.match(html, /Integration Consultant/);
  assert.match(html, /Arnold-Luigi-Quiros-Resume\.pdf/);
  assert.match(html, /approximately 60 support cases per month/);
  assert.match(html, /Prompt Like an Engineer/);
  assert.match(html, /Cisco Networking Academy/);
});
