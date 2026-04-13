<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Agent Instructions

This file is the entry point for all LLM coding instructions for this project. All standards are split across the following files in `/docs`.

> [!CAUTION]
> **MANDATORY: You MUST read the relevant `/docs` file(s) listed below BEFORE writing ANY code, making ANY edits, or generating ANY output.** No exceptions. Failure to do so will result in incorrect implementations that violate project standards. Do not rely on prior knowledge or assumptions — always read the file first.

| File | What it covers |
|------|----------------|
| [`docs/auth.md`](./docs/auth.md) | Clerk-only auth, modal sign-in/sign-up, protected routes, home redirect |
| [`docs/ui.md`](./docs/ui.md) | shadcn/ui-only components, CLI usage, icons, styling conventions |

**Every task touches at least one of these files. Read them. Then write code.**