import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - RUN-GIT",
  description: "Privacy Policy for RUN-GIT - AI-powered Git assistant",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none space-y-8">
            <section className="bg-secondary/50 rounded-xl border border-border p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
              <p className="text-muted-foreground">
                At RUN-GIT, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our CLI tool and website.
              </p>
            </section>

            <section className="bg-secondary/50 rounded-xl border border-border p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
              <p className="text-muted-foreground mb-4">We may collect the following types of information:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong className="text-foreground">Account Information:</strong> Email address and authentication data when you sign up</li>
                <li><strong className="text-foreground">Usage Data:</strong> Information about how you use our CLI tool</li>
                <li><strong className="text-foreground">API Usage:</strong> Number of requests made to our AI services</li>
                <li><strong className="text-foreground">Technical Data:</strong> Device information, browser type, and operating system</li>
              </ul>
            </section>

            <section className="bg-secondary/50 rounded-xl border border-border p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Provide and maintain our services</li>
                <li>Process your transactions and send related information</li>
                <li>Send you technical notices, updates, and support messages</li>
                <li>Improve our services and develop new features</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="bg-secondary/50 rounded-xl border border-border p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Data Security</h2>
              <p className="text-muted-foreground">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section className="bg-secondary/50 rounded-xl border border-border p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Third-Party Services</h2>
              <p className="text-muted-foreground">
                We may use third-party services for payment processing (Razorpay, Stripe), analytics, and cloud hosting. These parties have their own privacy policies addressing how they use your information.
              </p>
            </section>

            <section className="bg-secondary/50 rounded-xl border border-border p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Your Rights</h2>
              <p className="text-muted-foreground mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Request restriction of processing</li>
              </ul>
            </section>

            <section className="bg-secondary/50 rounded-xl border border-border p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Cookies</h2>
              <p className="text-muted-foreground">
                We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </section>

            <section className="bg-secondary/50 rounded-xl border border-border p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;last updated&quot; date.
              </p>
            </section>

            <section className="bg-secondary/50 rounded-xl border border-border p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at{' '}
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
