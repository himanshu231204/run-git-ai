import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Terms of Service - RUN-GIT",
  description: "Terms of Service for RUN-GIT - AI-powered Git assistant",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
          
          <div className="prose prose-invert max-w-none space-y-8">
            <section className="bg-secondary/50 rounded-xl border border-border p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using RUN-GIT, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this service.
              </p>
            </section>

            <section className="bg-secondary/50 rounded-xl border border-border p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Description of Service</h2>
              <p className="text-muted-foreground mb-4">
                RUN-GIT is an AI-powered CLI tool that helps developers with Git operations, including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>AI-generated commit messages</li>
                <li>PR description generation</li>
                <li>AI-powered code reviews</li>
                <li>Branch management</li>
                <li>Quick push and sync operations</li>
                <li>GitHub repository creation</li>
              </ul>
            </section>

            <section className="bg-secondary/50 rounded-xl border border-border p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. User Accounts</h2>
              <p className="text-muted-foreground mb-4">When you create an account, you agree to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Provide accurate and complete registration information</li>
                <li>Maintain the security of your account and password</li>
                <li>Accept responsibility for all activities that occur under your account</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
              </ul>
            </section>

            <section className="bg-secondary/50 rounded-xl border border-border p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. API Key Usage</h2>
              <p className="text-muted-foreground mb-4">
                Your API key is personal and non-transferable. You agree to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Keep your API key confidential</li>
                <li>Not share your API key with third parties</li>
                <li>Use your API key only for your personal projects</li>
                <li>Not attempt to reverse engineer or resell our services</li>
              </ul>
            </section>

            <section className="bg-secondary/50 rounded-xl border border-border p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Payment and Billing</h2>
              <p className="text-muted-foreground mb-4">
                Our paid plans are billed monthly. By subscribing to a paid plan:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>You authorize us to charge your payment method monthly</li>
                <li>Payments are non-refundable except as required by law</li>
                <li>You can cancel your subscription at any time</li>
                <li>Prices are subject to change with 30 days notice</li>
              </ul>
            </section>

            <section className="bg-secondary/50 rounded-xl border border-border p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Acceptable Use</h2>
              <p className="text-muted-foreground mb-4">You agree not to use our service to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Submit harmful, abusive, or malicious content</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Use the service for any illegal or unauthorized purpose</li>
                <li>Exceed rate limits or abuse the service</li>
              </ul>
            </section>

            <section className="bg-secondary/50 rounded-xl border border-border p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Intellectual Property</h2>
              <p className="text-muted-foreground">
                The RUN-GIT service, including its original content, features, and functionality, are owned by RUN-GIT and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
            </section>

            <section className="bg-secondary/50 rounded-xl border border-border p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                In no event shall RUN-GIT be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your use or inability to use the service; (ii) any unauthorized access to or use of our servers.
              </p>
            </section>

            <section className="bg-secondary/50 rounded-xl border border-border p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Disclaimer of Warranties</h2>
              <p className="text-muted-foreground">
                THE SERVICE IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS. RUN-GIT MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THEIR SERVICES, OR THE INFORMATION, CONTENT, OR MATERIALS INCLUDED THEREIN.
              </p>
            </section>

            <section className="bg-secondary/50 rounded-xl border border-border p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Termination</h2>
              <p className="text-muted-foreground">
                We may terminate or suspend your account and access to the service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms of Service.
              </p>
            </section>

            <section className="bg-secondary/50 rounded-xl border border-border p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Governing Law</h2>
              <p className="text-muted-foreground">
                These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="bg-secondary/50 rounded-xl border border-border p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">12. Changes to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our service after those revisions become effective, you agree to be bound by the revised terms.
              </p>
            </section>

            <section className="bg-secondary/50 rounded-xl border border-border p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">13. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about these Terms, please contact us at{' '}
                <a href="mailto:support@run-git.dev" className="text-primary hover:underline">
                  support@run-git.dev
                </a>
              </p>
            </section>

            <p className="text-muted-foreground text-sm">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
