import Link from "next/link";

export function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border border-border p-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Start using RUN-GIT today
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of developers who are already writing better commits and PRs with AI.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/signup"
              className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Try Free
            </Link>
            <Link
              href="/pricing"
              className="w-full sm:w-auto border border-border text-foreground px-8 py-4 rounded-lg text-lg font-medium hover:bg-secondary transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}