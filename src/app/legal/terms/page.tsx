import LegalPageTemplate from '@/components/ui/legal-page-template'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - The Boise Gun Club',
  description: 'Terms of service for The Boise Gun Club platform, outlining the rules and guidelines for using our community platformotion.',
}

export default function TermsOfServicePage() {
  const relatedPages = [
    {
      title: 'Privacy Policy',
      href: '/legal/privacy',
      description: 'How we collect, use, and protect your personal information'
    },
    {
      title: 'Community Guidelines',
      href: '/legal/community-guidelines',
      description: 'Rules and expectations for community participation'
    }
  ]

  return (
    <LegalPageTemplate
      title="Terms of Service"
      description="These Terms of Service govern your use of The Boise Gun Club platform operated by Boise Gun Collective, LLC."
      lastUpdated="January 15, 2025"
      effectiveDate="January 1, 2025"
      relatedPages={relatedPages}
    >
      <h2 className="h2-section">Acceptance of Terms</h2>
      <p>
        By accessing or using The Boise Gun Club platform ("Service"), you agree to be bound by these 
        Terms of Service ("Terms"). If you disagree with any part of these terms, then you may not 
        access the Service. These Terms constitute a legally binding agreement between you and 
        Boise Gun Collective, LLC ("Company", "we", "us", "our").
      </p>

      <h2 className="h2-section">Description of Service</h2>
      <p>
        The Boise Gun Club is a digital platform designed to serve the Idaho firearms community by providing:
      </p>
      <ul>
        <li>A comprehensive directory of Idaho firearms businesses</li>
        <li>Educational resources about Idaho gun laws and safety practices</li>
        <li>Information about shooting ranges and outdoor locations</li>
        <li>Community forums and discussion areas</li>
        <li>Equipment reviews and tactical guides</li>
        <li>Event listings and community announcements</li>
      </ul>

      <h2 className="h2-section">User Accounts and Eligibility</h2>
      
      <h3 className="h3-subsection">Age Requirement</h3>
      <p>
        You must be at least 18 years old to use this Service. By using the Service, you represent 
        and warrant that you are 18 years of age or older.
      </p>

      <h3 className="h3-subsection">Account Registration</h3>
      <p>To access certain features, you may need to create an account. When creating an account, you agree to:</p>
      <ul>
        <li>Provide accurate, current, and complete information</li>
        <li>Maintain and promptly update your account information</li>
        <li>Maintain the security and confidentiality of your login credentials</li>
        <li>Accept responsibility for all activities that occur under your account</li>
        <li>Notify us immediately of any unauthorized use of your account</li>
      </ul>

      <h3 className="h3-subsection">Account Termination</h3>
      <p>
        We reserve the right to suspend or terminate your account at any time for violations of these 
        Terms or for any other reason at our sole discretion.
      </p>

      <h2 className="h2-section">Acceptable Use Policy</h2>
      
      <h3 className="h3-subsection">Permitted Uses</h3>
      <p>You may use the Service for lawful purposes related to the firearms community, including:</p>
      <ul>
        <li>Finding information about Idaho firearms businesses and services</li>
        <li>Learning about Idaho gun laws and safety practices</li>
        <li>Participating in community discussions</li>
        <li>Sharing knowledge and experiences within community guidelines</li>
        <li>Accessing educational content and resources</li>
      </ul>

      <h3 className="h3-subsection">Prohibited Uses</h3>
      <p>You agree not to use the Service to:</p>
      <ul>
        <li>Violate any local, state, or federal laws or regulations</li>
        <li>Facilitate illegal firearms transactions or transfers</li>
        <li>Post, share, or distribute illegal, harmful, or inappropriate content</li>
        <li>Harass, threaten, or intimidate other users</li>
        <li>Impersonate any person or entity</li>
        <li>Spam or send unsolicited commercial messages</li>
        <li>Attempt to gain unauthorized access to the Service or other users' accounts</li>
        <li>Interfere with or disrupt the Service or servers</li>
        <li>Collect personal information about other users without consent</li>
      </ul>

      <h2 className="h2-section">Content and User Contributions</h2>
      
      <h3 className="h3-subsection">Your Content</h3>
      <p>
        You retain ownership of any content you submit, post, or display on the Service ("User Content"). 
        By submitting User Content, you grant us a non-exclusive, worldwide, royalty-free license to use, 
        display, reproduce, and distribute your content in connection with the Service.
      </p>

      <h3 className="h3-subsection">Content Standards</h3>
      <p>All User Content must:</p>
      <ul>
        <li>Comply with applicable laws and regulations</li>
        <li>Be accurate and not misleading</li>
        <li>Respect the rights and dignity of others</li>
        <li>Not contain illegal, harmful, or offensive material</li>
        <li>Follow our Community Guidelines</li>
      </ul>

      <h3 className="h3-subsection">Content ComputerDesktopIconing</h3>
      <p>
        We reserve the right, but have no obligation, to monitor, review, and remove User Content 
        that violates these Terms or is otherwise objectionable.
      </p>

      <h2 className="h2-section">Firearms-Related Disclaimers</h2>
      
      <h3 className="h3-subsection">Educational Purpose</h3>
      <p>
        The information provided on this platform is for educational and informational purposes only. 
        It should not be considered as legal advice or a substitute for consulting with qualified 
        legal professionals or law enforcement.
      </p>

      <h3 className="h3-subsection">Legal Compliance</h3>
      <p>
        UsersIcon are solely responsible for ensuring their compliance with all applicable federal, state, 
        and local laws regarding firearms ownership, possession, and transfer. Laws vary by jurisdiction 
        and can change frequently.
      </p>

      <h3 className="h3-subsection">No Facilitation of Transactions</h3>
      <p>
        This platform does not facilitate firearms transactions or transfers. Any business listings 
        or information provided are for informational purposes only. UsersIcon must conduct their own 
        due diligence and comply with all applicable laws when engaging with listed businesses.
      </p>

      <h2 className="h2-section">Business Directory</h2>
      
      <h3 className="h3-subsection">Listing Accuracy</h3>
      <p>
        While we strive to provide accurate business information, we cannot guarantee the accuracy, 
        completeness, or currency of all directory listings. UsersIcon should verify information directly 
        with businesses.
      </p>

      <h3 className="h3-subsection">Business Verification</h3>
      <p>
        Our verification process helps ensure businesses are legitimate, but verification status 
        does not constitute an endorsement or guarantee of quality, legality, or compliance.
      </p>

      <h2 className="h2-section">Intellectual Property</h2>
      
      <h3 className="h3-subsection">Our Rights</h3>
      <p>
        The Service and its original content, features, and functionality are owned by Boise Gun Collective, LLC 
        and are protected by international copyright, trademark, patent, trade secret, and other 
        intellectual property laws.
      </p>

      <h3 className="h3-subsection">Trademarks</h3>
      <p>
        "The Boise Gun Club" and related marks are trademarks of Boise Gun Collective, LLC. 
        You may not use these marks without our prior written permission.
      </p>

      <h2 className="h2-section">Privacy</h2>
      <p>
        Your privacy is important to us. Please review our Privacy Policy, which also governs your 
        use of the Service, to understand our practices.
      </p>

      <h2 className="h2-section">Disclaimers and Limitation of Liability</h2>
      
      <h3 className="h3-subsection">Service Availability</h3>
      <p>
        The Service is provided on an "as is" and "as available" basis. We do not warrant that the 
        Service will be uninterrupted, secure, or error-free.
      </p>

      <h3 className="h3-subsection">Limitation of Liability</h3>
      <p>
        To the fullest extent permitted by law, Boise Gun Collective, LLC shall not be liable for any 
        indirect, incidental, special, consequential, or punitive damages, or any loss of profits 
        or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, 
        or other intangible losses resulting from your use of the Service.
      </p>

      <h2 className="h2-section">Indemnification</h2>
      <p>
        You agree to defend, indemnify, and hold harmless Boise Gun Collective, LLC and its officers, 
        directors, employees, and agents from and against any claims, damages, obligations, losses, 
        liabilities, costs, or debt, and expenses (including but not limited to attorney's fees) 
        arising from your use of the Service or violation of these Terms.
      </p>

      <h2 className="h2-section">Governing Law and Jurisdiction</h2>
      <p>
        These Terms shall be governed by and construed in accordance with the laws of the State of Idaho, 
        without regard to its conflict of law provisions. Any legal action or proceeding arising under 
        these Terms will be brought exclusively in the state or federal courts located in Idaho.
      </p>

      <h2 className="h2-section">Changes to Terms</h2>
      <p>
        We reserve the right to modify or replace these Terms at any time. If a revision is material, 
        we will provide at least 30 days notice prior to any new terms taking effect. Your continued 
        use of the Service after the effective date of any changes constitutes acceptance of the new Terms.
      </p>

      <h2 className="h2-section">Severability</h2>
      <p>
        If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions 
        will remain in full force and effect.
      </p>

      <h2 className="h2-section">Contact Information</h2>
      <p>
        If you have any questions about these Terms of Service, please contact us:
      </p>
      <ul>
        <li><strong>Email:</strong> legal@boiseguncollective.com</li>
        <li><strong>Company:</strong> Boise Gun Collective, LLC</li>
        <li><strong>Address:</strong> Idaho, United States</li>
      </ul>

      <blockquote>
        <p>
          <strong>Second Amendment Notice:</strong> The Boise Gun Club platform is committed to supporting 
          the constitutional rights of law-abiding citizens. We encourage responsible firearms ownership 
          and compliance with all applicable laws while fostering a positive community for Idaho gun owners.
        </p>
      </blockquote>
    </LegalPageTemplate>
  )
}