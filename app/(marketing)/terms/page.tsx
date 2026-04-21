import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans pb-32">
      {/* Header Banner */}
      <div className="bg-slate-900 pt-32 pb-16 px-6">
         <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-baseline justify-between">
           <h1 className="text-4xl font-bold text-white tracking-tight">Terms & Conditions</h1>
           <div className="flex items-center gap-2 text-sm font-medium mt-4 md:mt-0">
             <Link href="/" className="text-slate-400 hover:text-white transition-colors hover:underline">Home</Link>
             <span className="text-slate-600">›</span>
             <span className="text-white">Terms & conditions</span>
           </div>
         </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 mt-16">
        <div className="space-y-10 text-base leading-relaxed text-slate-700">
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">TERMS & CONDITIONS – CLUTCH MOMENTUM</h2>
          </div>

          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-3">1. Acceptance of Terms</h3>
            <p>
              By accessing Clutch Momentum, you agree to these Terms & Conditions.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-3">2. Platform Overview</h3>
            <p>
              Clutch Momentum is a marketplace that provides access to brand decision-maker contacts for collaboration purposes.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-3">3. User Accounts</h3>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Users must provide accurate information</li>
              <li>You are responsible for your account</li>
              <li>We can suspend accounts for misuse</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-3">4. Subscription & Payments</h3>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Platform registration is free</li>
              <li>Paid subscription required to access contacts</li>
              <li>Plans vary based on access limits</li>
              <li>Payments are non-refundable unless specified</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-3">5. Use of Platform</h3>
            <p className="mb-2">You agree NOT to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Misuse contact data</li>
              <li>Spam or harass brands</li>
              <li>Share or resell platform data</li>
              <li>Use platform for illegal purposes</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-3">6. Intellectual Property</h3>
            <p>
              All platform content (design, data, branding) belongs to Clutch Momentum.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-3">7. Contact Data Usage</h3>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Contact data is for collaboration purposes only</li>
              <li>Unauthorized usage or resale is strictly prohibited</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-3">8. Limitation of Liability</h3>
            <p className="mb-2">We do not guarantee:</p>
            <ul className="list-disc pl-5 space-y-1 mb-2">
              <li>Successful collaborations</li>
              <li>Accuracy of all contact data</li>
            </ul>
            <p className="mb-2">We are not liable for any losses resulting from platform use.</p>
            <p>Such clauses are standard in SaaS agreements to limit legal risk and define responsibilities.</p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-3">9. Termination</h3>
            <p className="mb-2">We may suspend or terminate accounts for:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Violation of terms</li>
              <li>Misuse of data</li>
              <li>Fraudulent activity</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-3">10. Disclaimer</h3>
            <p>
              The platform is provided “as is” without warranties of any kind.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-3">11. Governing Law</h3>
            <p>
              These terms are governed by the laws of India.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-3">12. Changes to Terms</h3>
            <p>
              We may update these terms at any time.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-3">13. Contact Information</h3>
            <p>
              Email: <a href="mailto:support@clutchmomentum.com" className="text-orange-600 hover:text-orange-700 hover:underline font-medium">support@clutchmomentum.com</a>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
