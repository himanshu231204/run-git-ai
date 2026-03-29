export function Demo() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            See It In Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform your commit messages from basic to professional in seconds.
          </p>
        </div>

        {/* Demo Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Before */}
          <div className="bg-secondary rounded-xl border border-border overflow-hidden">
            <div className="px-6 py-4 border-b border-border">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <h3 className="font-semibold text-foreground">Before</h3>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                Basic commit messages
              </p>
            </div>
            <div className="p-6">
              <div className="bg-background rounded-lg p-4 font-mono text-sm">
                <div className="text-muted-foreground">
                  <span className="text-green-400">$</span> git commit -m "fix login bug"
                </div>
              </div>
              <div className="mt-4 text-sm text-muted-foreground">
                <p>❌ Vague and uninformative</p>
                <p>❌ No context about the fix</p>
                <p>❌ Hard to understand in git log</p>
              </div>
            </div>
          </div>

          {/* After */}
          <div className="bg-secondary rounded-xl border border-border overflow-hidden">
            <div className="px-6 py-4 border-b border-border">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <h3 className="font-semibold text-foreground">After</h3>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                AI-generated commit messages
              </p>
            </div>
            <div className="p-6">
              <div className="bg-background rounded-lg p-4 font-mono text-sm">
                <div className="text-muted-foreground">
                  <span className="text-green-400">$</span> run-git ai commit
                </div>
                <div className="mt-2 text-foreground">
                  <span className="text-blue-400">feat(auth):</span> implement JWT login system
                </div>
                <div className="text-muted-foreground mt-1">
                  - added login API
                </div>
                <div className="text-muted-foreground">
                  - token validation middleware
                </div>
                <div className="text-muted-foreground">
                  - improved security
                </div>
              </div>
              <div className="mt-4 text-sm text-muted-foreground">
                <p>✅ Descriptive and professional</p>
                <p>✅ Follows conventional commits</p>
                <p>✅ Easy to understand in git log</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}