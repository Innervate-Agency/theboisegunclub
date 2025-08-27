import LegalPageTemplate from '@/components/ui/legal-page-template'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - The Boise Gun Club',
  description: 'Privacy policy for The Boise Gun Club platform, detailing how we collect, use, and protect your personal information.',
}

export default function PrivacyPolicyPage() {
  const relatedPages = [
    {
      title: 'Terms of Service',
      href: '/legal/terms',
      description: 'Our terms and conditions for using the platform'
    },
    {
      title: 'Cookie Policy',
      href: '/legal/cookies',
      description: 'How we use cookies and similar technologies'
    }
  ]

  return (
    <LegalPageTemplate
      title="Privacy Policy"
      description="This Privacy Policy describes how Boise Gun Collective, LLC collects, uses, and protects your personal information when you use The Boise Gun Club platformotion."
      lastUpdated="January 15, 2025"
      effectiveDate="January 1, 2025"
      relatedPages={relatedPages}
    >
      <h2>Overview</h2>
      <p>
        At The Boise Gun Club, we take your privacy seriously. This Privacy Policy explains how we collect, 
        use, disclose, and safeguard your information when you visit our website and use our services. 
        We are committed to protecting your privacy and maintaining the security of your personal information.
      </p>

      <h2>Information We Collect</h2>
      
      <h3>Personal Information You Provide</h3>
      <p>We may collect personal information that you voluntarily provide to us when you:</p>
      <ul>
        <li>Register for an account on our platform</li>
        <li>Subscribe to our newsletter or communications</li>
        <li>Contact us through our contact forms</li>
        <li>Participate in community discussions or forums</li>
        <li>Submit reviews or ratings of businesses</li>
        <li>Report issues or provide feedback</li>
      </ul>

      <p>This information may include:</p>
      <ul>
        <li>Name and contact information (email address, phone number)</li>
        <li>Account credentials (username, password)</li>
        <li>Profile information and preferences</li>
        <li>Communication content (messages, reviews, comments)</li>
        <li>Location information (if you choose to share it)</li>
      </ul>

      <h3>Automatically Collected Information</h3>
      <p>When you visit our website, we may automatically collect certain information about your device and usage patterns:</p>
      <ul>
        <li>IP address and geographic location</li>
        <li>Browser type and version</li>
        <li>Operating system</li>
        <li>Pages visited and time spent on our site</li>
        <li>Referring website or source</li>
        <li>Device identifiers</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <p>We use the information we collect for the following purposes:</p>
      
      <h3>Platform Operation</h3>
      <ul>
        <li>Provide and maintain our services</li>
        <li>Process your account registration and manage your account</li>
        <li>Enable community features (forums, reviews, ratings)</li>
        <li>Facilitate connections between users and firearms businesses</li>
        <li>Provide customer support and respond to inquiries</li>
      </ul>

      <h3>Communication</h3>
      <ul>
        <li>Send you important updates about our services</li>
        <li>Deliver newsletters and promotional content (with your consent)</li>
        <li>Notify you about relevant events and opportunities</li>
        <li>Respond to your questions and support requests</li>
      </ul>

      <h3>Improvement and Analytics</h3>
      <ul>
        <li>Analyze how our website and services are used</li>
        <li>Improve our platform's functionality and user experience</li>
        <li>Develop new features and services</li>
        <li>ComputerDesktopIcon and prevent fraudulent or malicious activity</li>
      </ul>

      <h2>Information Sharing and Disclosure</h2>
      <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>

      <h3>With Your Consent</h3>
      <p>We may share your information when you explicitly consent to such sharing.</p>

      <h3>Business Directory Listings</h3>
      <p>If you represent a firearms business and create a directory listing, certain business information may be publicly displayed as part of our directory service.</p>

      <h3>Legal Compliance</h3>
      <p>We may disclose your information if required by law, court order, or government regulation, or to:</p>
      <ul>
        <li>Comply with legal processes or government requests</li>
        <li>Protect our rights, property, or safety</li>
        <li>Protect the rights, property, or safety of our users</li>
        <li>Investigate potential violations of our terms of service</li>
      </ul>

      <h3>Service Providers</h3>
      <p>We may share information with trusted third-party service providers who assist us in operating our platform, such as:</p>
      <ul>
        <li>Web hosting and cloud storage providers</li>
        <li>Email delivery services</li>
        <li>Analytics and monitoring services</li>
        <li>Customer support platforms</li>
      </ul>
      <p>These service providers are bound by confidentiality agreements and are not permitted to use your information for any other purpose.</p>

      <h2>Data Security</h2>
      <p>
        We implement appropriate technical and organizational security measures to protect your personal information 
        against unauthorized access, alteration, disclosure, or destruction. These measures include:
      </p>
      <ul>
        <li>Encryption of sensitive data in transit and at rest</li>
        <li>Regular security assessments and updates</li>
        <li>Access controls and authentication mechanisms</li>
        <li>Employee training on data protection practices</li>
      </ul>
      <p>
        However, no method of transmission over the internet or electronic storage is 100% secure. 
        While we strive to protect your personal information, we cannot guarantee absolute security.
      </p>

      <h2>Your Rights and Choices</h2>
      
      <h3>Account Information</h3>
      <p>You can review and update your account information at any time by logging into your account settings.</p>

      <h3>Communication Preferences</h3>
      <p>You can opt out of promotional communications by following the unsubscribe instructions in our emails or contacting us directly.</p>

      <h3>Data Deletion</h3>
      <p>You can request deletion of your personal information by contacting us. We will respond to your request within 30 days.</p>

      <h3>Data Portability</h3>
      <p>You can request a copy of your personal information in a portable format by contacting us.</p>

      <h2>Cookies and Tracking Technologies</h2>
      <p>
        We use cookies and similar tracking technologies to enhance your experience on our website. 
        For detailed information about our use of cookies, please see our Cookie Policy.
      </p>

      <h2>Third-Party Links</h2>
      <p>
        Our website may contain links to third-party websites. We are not responsible for the privacy 
        practices or content of these external sites. We encourage you to review the privacy policies 
        of any third-party websites you visit.
      </p>

      <h2>Children's Privacy</h2>
      <p>
        Our services are intended for adults (18 years and older). We do not knowingly collect 
        personal information from children under 18. If we become aware that we have collected 
        personal information from a child under 18, we will delete such information promptly.
      </p>

      <h2>Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time to reflect changes in our practices 
        or applicable laws. We will notify you of any material changes by posting the updated 
        policy on our website and updating the "Last Updated" date. Your continued use of our 
        services after any changes constitutes your acceptance of the updated Privacy Policy.
      </p>

      <h2>Contact Information</h2>
      <p>
        If you have any questions, concerns, or requests regarding this Privacy Policy or our 
        data practices, please contact us:
      </p>
      <ul>
        <li><strong>Email:</strong> legal@boiseguncollective.com</li>
        <li><strong>Company:</strong> Boise Gun Collective, LLC</li>
        <li><strong>Address:</strong> Idaho, United States</li>
      </ul>

      <h2>Idaho-Specific Provisions</h2>
      <p>
        As an Idaho-based company serving Idaho residents, we comply with all applicable Idaho 
        state privacy laws and regulations. Idaho residents have specific rights regarding their 
        personal information under state law, and we are committed to honoring these rights.
      </p>

      <blockquote>
        <p>
          <strong>Important Note:</strong> This Privacy Policy is part of our commitment to transparency 
          and responsible data handling. The Boise Gun Club platform is designed to serve the Idaho 
          firearms community while respecting your privacy and constitutional rights.
        </p>
      </blockquote>
    </LegalPageTemplate>
  )
}