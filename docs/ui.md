# UI Components — shadcn/ui

## Rule: shadcn/ui ONLY

**Never create custom UI components.** All UI elements — buttons, inputs, dialogs, cards, badges, dropdowns, etc. — **must** use shadcn/ui components.

## Setup

| Config | Value |
|--------|-------|
| Style | `radix-nova` |
| Base color | `neutral` |
| CSS variables | `true` |
| Icon library | `lucide-react` |
| Components path | `@/components/ui` |

## Adding Components

Use the shadcn CLI to add components:

```bash
npx shadcn@latest add <component-name>
```

Components are installed to `components/ui/`. Do **not** manually create files there.

## Usage

Import directly from `@/components/ui/<component>`:

```tsx
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
```

## Icons

Use `lucide-react` for all icons:

```tsx
import { Link, Copy, Trash2 } from "lucide-react"
```

## Styling

- Use **Tailwind CSS utility classes** for layout and spacing.
- Use **CSS variables** (e.g. `bg-primary`, `text-muted-foreground`) — never hard-code colors.
- Extend variants via `className` prop using `cn()` from `@/lib/utils`.

```tsx
import { cn } from "@/lib/utils"

<Button className={cn("w-full", isLoading && "opacity-50")} />
```

## Do's and Don'ts

| ✅ Do | ❌ Don't |
|------|---------|
| Use shadcn components for all UI | Build custom buttons, inputs, modals |
| Add new components via CLI | Copy-paste component code manually |
| Use `lucide-react` icons | Import from other icon libraries |
| Style with Tailwind + CSS vars | Use inline styles or hard-coded colors |
