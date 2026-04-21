import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans pb-32">
      {/* Header Banner */}
      <div className="bg-slate-900 pt-32 pb-16 px-6">
         <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-baseline justify-between">
           <h1 className="text-4xl font-bold text-white tracking-tight">Privacy policy</h1>
           <div className="flex items-center gap-2 text-sm font-medium mt-4 md:mt-0">
             <Link href="/" className="text-slate-400 hover:text-white transition-colors hover:underline">Home</Link>
             <span className="text-slate-600">›</span>
             <span className="text-white">Privacy policy</span>
           </div>
         </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 mt-16">
        <div className="space-y-10 text-base leading-relaxed text-slate-700">
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">PRIVACY POLICY – CLUTCH MOMENTUM</h2>
          </div>

          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-3">1. Introduction</h3>
            <p>
              Clutch Momentum (“we”, “our”, “us”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use our platform.
            </p>
            <p className="mt-2">
              A privacy policy is required for any website collecting user data and must explain data collection, usage, and user rights clearly.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-5">2. Information We Collect</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">a. Personal Information</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Contact number</li>
                  <li>Social media profiles</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-2">b. Usage Data</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>IP address</li>
                  <li>Browser type</li>
                  <li>Device information</li>
                  <li>Pages visited</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-2">c. Payment Information</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Billing details (processed via third-party payment gateways)</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-3">3. How We Use Your Information</h3>
            <p className="mb-2">We use your data to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Create and manage user accounts</li>
              <li>Provide access to brand contacts</li>
              <li>Improve platform performance</li>
              <li>Communicate updates and offers</li>
              <li>Process payments</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-3">4. Sharing of Information</h3>
            <p className="mb-2">We do not sell your data. We may share data with:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Payment providers</li>
              <li>Analytics tools</li>
              <li>Legal authorities (if required)</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-3">5. Data Security</h3>
            <p>
              We implement reasonable security measures to protect your data. However, no system is 100% secure.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-3">6. Cookies & Tracking</h3>
            <p className="mb-2">We use cookies to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Improve user experience</li>
              <li>Track platform usage</li>
              <li>Personalize content</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-3">7. User Rights</h3>
            <p className="mb-2">You have the right to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Access your data</li>
              <li>Request correction</li>
              <li>Request deletion</li>
              <li>Opt-out of communications</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-3">8. Third-Party Links</h3>
            <p>
              Our platform may contain links to third-party websites. We are not responsible for their privacy practices.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-3">9. Data Retention</h3>
            <p>
              We retain your data only as long as necessary for business and legal purposes.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-3">10. Changes to Policy</h3>
            <p>
              We may update this policy at any time. Continued use means acceptance.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-3">11. Contact Us</h3>
            <p>
              Email: <a href="mailto:support@clutchmomentum.com" className="text-orange-600 hover:text-orange-700 hover:underline font-medium">support@clutchmomentum.com</a>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
