import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

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
          <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground mb-12">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          
          <div className="space-y-8">
            <section className="bg-secondary/50 rounded-xl border border-border p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">1. Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                RUN-GIT (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, disclosed, and safeguarded when you use our CLI tool, website, and related services (collectively, the &quot;Service&quot;).
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                By accessing or using our Service, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. If you do not agree with our policies and practices, please do not use our Service.
              </p>
            </section>

            <section className="bg-secondary/50 rounded-xl border border-border p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
              <p className="text-muted-foreground mb-4">We collect information in the following categories:</p>
              
              <h3 className="text-foreground font-medium mb-2">2.1 Personal Information</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4">
                <li>Full name and email address when you create an account</li>
                <li>Authentication credentials (securely hashed)</li>
                <li>Payment information (processed through secure third-party processors)</li>
                <li>API keys generated for your account</li>
              </ul>
              
              <h3 className="text-foreground font-medium mb-2">2.2 Usage Data</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4">
                <li>Number of API requests made to our AI services</li>
                <li>Feature usage patterns and preferences</li>
                <li>Session duration and access timestamps</li>
              </ul>
              
              <h3 className="text-foreground font-medium mb-2">2.3 Technical Data</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Device type, operating system, and browser information</li>
                <li>IP address and approximate geographic location</li>
                <li>Error logs and performance metrics</li>
              </ul>
            </section>

            <section className="bg-secondary/50 rounded-xl border border-border p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">We utilize your information for the following purposes:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong className="text-foreground">Service Delivery:</strong> To provide, maintain, and improve our CLI tool and AI-powered features</li>
                <li><strong className="text-foreground">Account Management:</strong> To process your registration, manage your account, and provide customer support</li>
                <li><strong className="text-foreground">Payment Processing:</strong> To handle billing and subscription management through secure payment processors</li>
                <li><strong className="text-foreground">Communications:</strong> To send you service-related notifications, updates, and security alerts</li>
                <li><strong className="text-foreground">Analytics:</strong> To analyze usage patterns and improve user experience</li>
                <li><strong className="text-foreground">Security:</strong> To detect, prevent, and address fraud, abuse, and security threats</li>
                <li><strong className="text-foreground">Legal Compliance:</strong> To comply with applicable laws, regulations, and legal requests</li>
              </ul>
            </section>

            <section className="bg-secondary/50 rounded-xl border border-border p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">4. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy. Your account information is retained for the duration of your subscription plus a reasonable period for account deletion requests. Usage data is retained in anonymized form for analytics purposes. When data is no longer needed, we securely delete or anonymize it in accordance with our data retention policies.
              </p>
            </section>

            <section className="bg-secondary/50 rounded-xl border border-border p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">5. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement comprehensive technical and organizational security measures to protect your data, including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                <li>Industry-standard encryption for data in transit and at rest</li>
                <li>Secure authentication with JWT tokens and hashed passwords</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Access controls and employee security training</li>
                <li>Incident response procedures and breach notification protocols</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                While we strive to protect your personal information, no method of electronic transmission is completely secure. We cannot guarantee absolute security, but we are committed to maintaining industry-standard protections.
              </p>
            </section>

            <section className="bg-secondary/50 rounded-xl border border-border p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">6. Third-Party Disclosure</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may share your information with trusted third parties for specific purposes:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong className="text-foreground">Payment Processing:</strong> Stripe and Razorpay for secure payment handling</li>
                <li><strong className="text-foreground">Cloud Infrastructure:</strong> Hosting providers for service deployment</li>
                <li><strong className="text-foreground">Analytics:</strong> Anonymous usage analytics to improve our service</li>
                <li><strong className="text-foreground">Legal Requirements:</strong> When required by law or in response to valid legal requests</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We do not sell, trade, or rent your personal information to third parties for marketing purposes.
              </p>
            </section>

            <section className="bg-secondary/50 rounded-xl border border-border p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">7. Your Rights</h2>
              <p className="text-muted-foreground mb-4">Under applicable data protection laws, you have the following rights:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong className="text-foreground">Right to Access:</strong> Request a copy of the personal data we hold about you</li>
                <li><strong className="text-foreground">Right to Rectification:</strong> Request correction of inaccurate or incomplete data</li>
                <li><strong className="text-foreground">Right to Erasure:</strong> Request deletion of your personal data (&quot;right to be forgotten&quot;)</li>
                <li><strong className="text-foreground">Right to Restrict Processing:</strong> Request limitation on how we process your data</li>
                <li><strong className="text-foreground">Right to Data Portability:</strong> Request your data in a machine-readable format</li>
                <li><strong className="text-foreground">Right to Object:</strong> Object to processing based on legitimate interests</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                To exercise these rights, please contact us at{' '}
                <a href="mailto:himanshu231204@gmail.com" className="text-primary hover:underline">
                  himanshu231204@gmail.com
                </a>
                . We will respond to your request within 30 days.
              </p>
            </section>

            <section className="bg-secondary/50 rounded-xl border border-border p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">8. Cookies and Tracking</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies and similar tracking technologies to enhance your experience. Cookies are small text files stored on your device that help us remember your preferences and analyze site traffic. You can control cookies through your browser settings. Disabling cookies may affect the functionality of our Service. We use essential cookies for authentication and analytics cookies to understand how users interact with our Service.
              </p>
            </section>

            <section className="bg-secondary/50 rounded-xl border border-border p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">9. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our Service is not intended for individuals under the age of 16. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us. If we discover that we have collected data from a child without parental consent, we will promptly delete such information.
              </p>
            </section>

            <section className="bg-secondary/50 rounded-xl border border-border p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">10. International Data Transfers</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. We ensure appropriate safeguards are in place for international transfers, including standard contractual clauses and adequacy decisions where required.
              </p>
            </section>

            <section className="bg-secondary/50 rounded-xl border border-border p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">11. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of material changes by posting the updated policy on our website and updating the &quot;Last updated&quot; date at the top. We encourage you to review this policy periodically. Your continued use of the Service after any changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="bg-secondary/50 rounded-xl border border-border p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">12. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                <li>Email: <a href="mailto:himanshu231204@gmail.com" className="text-primary hover:underline">himanshu231204@gmail.com</a></li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
