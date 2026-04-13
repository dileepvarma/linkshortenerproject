# Authentication — Clerk

## Rules

- **Clerk is the only authentication method.** Never implement custom auth, NextAuth, or any other auth library.
- All sign-in and sign-up flows must open as a **modal** — never navigate to a separate sign-in/sign-up page.
- `/dashboard` is a protected route — unauthenticated users must be redirected to sign in.
- Authenticated users visiting `/` (home) must be redirected to `/dashboard`.

---

## Proxy Route Protection

Use `clerkMiddleware` with `createRouteMatcher` in `proxy.ts` to enforce protected routes and home-page redirects:

```ts
// proxy.ts
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

const isProtectedRoute = createRouteMatcher(['/dashboard(.*)'])

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth()
  const { pathname } = req.nextUrl

  // Redirect authenticated users away from home to /dashboard
  if (userId && pathname === '/') {
    return NextResponse.redirect(new URL('/dashboard', req.url))
  }

  // Protect /dashboard — redirects to sign-in modal trigger if not authenticated
  if (isProtectedRoute(req)) {
    await auth.protect()
  }
})

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
}
```

---

## Sign In / Sign Up as Modal

Never render `<SignIn />` or `<SignUp />` as standalone pages. Always use `<SignInButton mode="modal">` and `<SignUpButton mode="modal">`:

```tsx
// In any component or layout header
import { SignInButton, SignUpButton } from '@clerk/nextjs'

<SignInButton mode="modal">
  <button>Sign In</button>
</SignInButton>

<SignUpButton mode="modal">
  <button>Sign Up</button>
</SignUpButton>
```

Do **not** set `NEXT_PUBLIC_CLERK_SIGN_IN_URL` or `NEXT_PUBLIC_CLERK_SIGN_UP_URL` env vars — these are only needed when using dedicated sign-in/sign-up pages, which this project does not use.

---

## Layout — Conditional UI

Use Clerk's `<Show>` component in the root layout to conditionally render sign-in/sign-up or the user button:

```tsx
// app/layout.tsx
import { ClerkProvider, SignInButton, SignUpButton, Show, UserButton } from '@clerk/nextjs'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider>
          <header>
            <Show when="signed-out">
              <SignInButton mode="modal"><button>Sign In</button></SignInButton>
              <SignUpButton mode="modal"><button>Sign Up</button></SignUpButton>
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>
          </header>
          {children}
        </ClerkProvider>
      </body>
    </html>
  )
}
```

---

## Accessing the Session Server-Side

Use `auth()` from `@clerk/nextjs/server` in Server Components, Server Actions, and Route Handlers. Always `await` it — it returns a `Promise` in Clerk v7:

```ts
import { auth } from '@clerk/nextjs/server'

const { userId } = await auth()
if (!userId) throw new Error('Unauthorized')
```

Never accept `userId` as a parameter from the client — always read it from `auth()` on the server.

## Accessing the Session Client-Side

Use `useAuth()` or `useUser()` hooks inside `'use client'` components only:

```tsx
'use client'
import { useAuth } from '@clerk/nextjs'

const { userId, isSignedIn, isLoaded } = useAuth()
```
