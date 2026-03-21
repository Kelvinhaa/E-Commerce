#!/usr/bin/env bash
set -euo pipefail

payload="$(cat)"

if echo "$payload" | grep -Eiq '(npm|npx)'; then
  cat <<'JSON'
{
  "hookSpecificOutput": {
    "hookEventName": "PreToolUse",
    "permissionDecision": "ask",
    "permissionDecisionReason": "This workspace prefers Bun-first commands. Confirm before using npm/npx."
  }
}
JSON
  exit 0
fi

cat <<'JSON'
{
  "hookSpecificOutput": {
    "hookEventName": "PreToolUse",
    "permissionDecision": "allow",
    "permissionDecisionReason": "No Bun policy conflict detected."
  }
}
JSON
