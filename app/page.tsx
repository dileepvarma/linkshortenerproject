import { SignUpButton, SignInButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link2, BarChart3, Zap, Shield, Copy, Globe } from "lucide-react";

const features = [
  {
    icon: Link2,
    title: "Shorten Any URL",
    description:
      "Turn long, unwieldy links into short, clean URLs you can share anywhere in seconds.",
  },
  {
    icon: BarChart3,
    title: "Track Clicks",
    description:
      "Get real-time analytics on every link — see how many times it was clicked and when.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Our redirects are blazing fast so your audience reaches their destination without delay.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description:
      "Every link is protected and monitored with 99.9% uptime so you can share with confidence.",
  },
  {
    icon: Copy,
    title: "One-Click Copy",
    description:
      "Copy your shortened link to the clipboard instantly with a single click.",
  },
  {
    icon: Globe,
    title: "Share Everywhere",
    description:
      "Share shortened links on social media, emails, SMS, or anywhere else you need.",
  },
];

const steps = [
  { step: "1", title: "Paste your long URL", description: "Drop any URL into the input field on your dashboard." },
  { step: "2", title: "Get a short link", description: "We generate a unique, compact link for you instantly." },
  { step: "3", title: "Share & track", description: "Share your link and watch the click analytics roll in." },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center gap-6 px-6 py-24 text-center">
        <Badge variant="secondary" className="text-sm px-3 py-1">
          Free to get started
        </Badge>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Shorten links. <br className="hidden sm:block" />
          <span className="text-muted-foreground">Track every click.</span>
        </h1>
        <p className="max-w-lg text-lg text-muted-foreground">
          The simplest way to shorten URLs, share them anywhere, and see exactly
          how your audience engages with your content.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <SignUpButton mode="modal">
            <Button size="lg" className="px-8">
              Get Started — It&apos;s Free
            </Button>
          </SignUpButton>
          <SignInButton mode="modal">
            <Button size="lg" variant="outline" className="px-8">
              Sign In
            </Button>
          </SignInButton>
        </div>
      </section>

      {/* Features */}
      <section className="bg-muted/40 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Everything you need
            </h2>
            <p className="mt-3 text-muted-foreground">
              Powerful features packed into a simple, clean interface.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, description }) => (
              <Card key={title}>
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <CardTitle className="text-base">{title}</CardTitle>
                  <CardDescription>{description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            How it works
          </h2>
          <p className="mt-3 text-muted-foreground">
            Three simple steps to start sharing smarter.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {steps.map(({ step, title, description }) => (
              <div key={step} className="flex flex-col items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-bold">
                  {step}
                </div>
                <h3 className="font-semibold text-foreground">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/40 px-6 py-20">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Ready to get started?
          </h2>
          <p className="mt-3 mb-8 text-muted-foreground">
            Create your free account and start shortening links today.
          </p>
          <SignUpButton mode="modal">
            <Button size="lg" className="px-10">
              Create Free Account
            </Button>
          </SignUpButton>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-6 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} LinkShortener. All rights reserved.</p>
      </footer>
    </div>
  );
}
