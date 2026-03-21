#!/usr/bin/env bash
set -euo pipefail

cat >/dev/null || true

cat <<'JSON'
{
  "systemMessage": "Workflow defaults: use bun/bunx/bun add instead of npm/npx when possible; explain backend concepts in beginner-friendly language; include testing and deployment notes in implementation advice; avoid generic AI-looking frontend patterns and preserve intentional visual direction."
}
JSON
