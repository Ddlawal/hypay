import React, { FC } from 'react'
import { NextPage } from 'next'
import cx from 'classnames'
import { PoliciesHeader } from '../components/Headers/PoliciesHeader'
import { PoliciesFooter } from '../components/Headers/PoliciesFooter'

const P: FC<{ className?: string }> = ({ children, className }) => <p className={cx(className, 'my-2')}>{children}</p>
const H2: FC<{ className?: string }> = ({ children, className }) => (
    <h2 className={cx(className, 'mt-6 text-lg font-bold')}>{children}</h2>
)

const Privacy: NextPage = () => {
    return (
        <div>
            <PoliciesHeader mobileHeaderText="Privacy" subHeader="Privacy Policy" />
            <div className="py-4 px-2 text-justify md:px-[10%]">
                <h1 className="text-2xl">Privacy Policy</h1>
                <h3 className="mb-6">www.hypay.com is provided by Hypay Ltd. (Hypay)</h3>
                <P>
                    Hypay values your privacy and appreciates your trust in us. This Privacy Policy explains how we use,
                    share and protect the Personally Identifiable Information (PII) that we collect about you and the
                    choices you have. “Personally Identifiable Information” means any information (i) that identifies or
                    can be used to identify, contact, or locate the person to whom such information pertains, or (ii)
                    from which identification or contact information of an individual person can be derived.
                </P>
                <P>
                    This Privacy Policy applies to how we collect, use and disclose your information across Hypay
                    Platform. If you see an undefined term in this Privacy Policy, it has the same definition as
                    outlined in our Terms and Conditions.
                </P>
                <P>By visiting our website, you agree to this Privacy Policy.</P>
                <H2>1. Information We Collect</H2>
                <P>
                    There are three categories of information that we collect. We collect a variety of information from
                    our customers and visitors to the website. As described below some information is automatically
                    collected when you visit our website, and some you provide to us when registering or filling out a
                    form, creating a listing or booking an accommodation or communicating with us.
                </P>
                <P>
                    <i className="font-semibold">1.1 Information Collected Automatically</i>: Whenever you visit our
                    website, our web servers automatically collect non-personal information such as the domain name of
                    the internet access provider, the internet protocol address used to connect the computer to the
                    internet, the average time spent on our Website, pages viewed, information searched for, access
                    times, and other relevant statistics.
                </P>
                <P>
                    <i className="font-semibold">1.2 Information you Provide Us</i>: If you provide us with personal
                    information by, registering for an account or contacting us, we collect that personal information.
                    For example, if you register on our website, we collect your name, e-mail address and password. If
                    you initiate or commence a transaction, we collect the personal information you provide us such as
                    your billing and payment information. If you contact our customer services agents, you may also
                    provide us with personal information that we collect.
                </P>
                <H2>2. Using Your Personal Information</H2>
                <P>
                    Personal Data about our customers is an important part of our business and we shall only use your
                    personal data for the following purposes and shall not keep such personal data longer than is
                    necessary to fulfil these purposes:
                </P>
                <ul className="list-disc pl-8">
                    <li>To help us verify your identity</li>
                    <li>
                        To help us process the Transaction, verify receipt of payment and confirm shipping information
                    </li>
                    <li>To help us identify accounts and services which you could have from us from time to time.</li>
                    <li>
                        Enable us operate, protect, improve, and optimize Hypay by carrying out marketing analysis and
                        customer profiling (including transactional information), conduct research, including creating
                        statistical and testing information.
                    </li>
                    <li>
                        Personalize or otherwise customize your experience by, among other things, ranking search
                        results or showing ads based on your search, booking history, and preferences.
                    </li>
                    <li>Provide customer service</li>
                    <li>
                        Send you service or support messages, such as updates, security alerts, and account
                        notifications.
                    </li>
                    <li>
                        Verify or authenticate information or identifications provided by you (such as to verify your
                        address or compare your identification photo to another photo you provide).
                    </li>
                    <li>
                        To help us to administer and to contact you about improved administration of any accounts,
                        listings and booking services we have provided in the past.
                    </li>
                    <li>To help prevent and detect fraud or loss.</li>
                    <li>Conduct investigations and risk assessments</li>
                    <li>Comply with our legal obligations</li>
                    <li>
                        To allow us to contact you in any way(including e - mail, telephone, visit, and text or
                        multimedia messages) about services offered by us unless you have previously asked us not to do
                        so.
                    </li>
                </ul>
                <P>
                    We may monitor and record communications with you (including phone conversations and emails) for
                    quality assurance and compliance. We will not disclose your personal data to any third party except
                    in accordance with this privacy policy.
                </P>

                <H2>3. Disclosures</H2>
                <P>
                    3.1. We will not sell, publish, disclose, or rent to third parties your personally identifiable
                    information collected at our web site, through our servers or otherwise obtained by us, other than
                    to provide our services and as set forth in this privacy policy.
                </P>
                <P>
                    3.2. The information you provide during any transaction facilitated by Hypay such as your billing
                    and pay-out information shall be considered confidential information and, as between the parties to
                    a transaction and Hypay. We will not disclose this information to outside parties without the
                    written consent of all the parties to any transaction.
                </P>
                <P>
                    3.3. We may share your information with other companies such as your banking institution and with
                    the other party to your transaction. We may also request information about you from third parties to
                    provide our services.
                </P>
                <P>
                    3.4. If you submit content in a public forum or social media post, or use a similar feature on
                    www.hypay.com , that content is publicly visible.
                </P>
                <P>
                    3.5. Required by Law, We may disclose Personally Identifiable Information if required to do so by
                    law or in the good faith belief that such action is necessary to (a) conform with the requirements
                    of the law or comply with legal process served on us, or (b) act in urgent circumstances to protect
                    the personal safety of users of our service or members of the public.
                </P>
                <P>
                    To the extent practicable and legally permitted, we will attempt to advise you prior to any such
                    disclosure, so that you may seek a protective order or other relief limiting such disclosure.
                </P>
                <H2>4. Communications from Our Site</H2>
                <P>
                    Pursuant to you registering on our site, you will receive emails that confirm specific actions you
                    requested. You will receive notifications confirming your registration, the successful verification
                    of email addresses and bank accounts, if required, and confirmation of successful transactions. You
                    will also receive progress updates on the status of your transactions. These are transactional
                    notifications that you cannot opt out of receiving, as they are in place to protect the security of
                    your account and your personal information. We may also send you responses to emails you send us, if
                    appropriate or applicable. From time to time, we will also send user surveys, requests for user
                    feedback regarding user experience and site operations or marketing offers from us or from us on
                    behalf of our marketing partners. The completion of these surveys or requests for feedback or
                    acceptance of any offer is strictly voluntary. If you do not wish to receive these offers, surveys
                    or user feedback emails, please opt out in any offer email you receive from us.
                </P>
                <H2>5. Age Restriction</H2>
                <P>
                    You affirm that you are over the age of majority and have the right to contract in your own name,
                    and that you have read the above authorization and fully understand its contents.
                </P>
                <H2>6. Cookies </H2>
                <P>
                    We use cookies to identify you as a User and make your user experience easier, customise our
                    services, content and advertising; help you ensure that your account security is not compromised,
                    mitigate risk and prevent fraud; and to promote trust and safety on our website. Cookies allow our
                    servers to remember your account log-in information when you visit our website, IP addresses, date
                    and time of visits, monitor web traffic and prevent fraudulent activities. If your browser or
                    browser add-on permits, you have the choice to disable cookies on our website; however, this may
                    limit your ability to use our website.
                </P>
                <H2>7. Website Security</H2>
                <P>
                    We are committed to ensuring that your information is secure. In order to prevent unauthorised
                    access or disclosure, we have put in place suitable physical, electronic and managerial procedures
                    such as secure sockets layer (SSL) to safeguard and secure the information we collect online.
                </P>
                <P>
                    In addition to our own substantial efforts, you can take several precautions to protect the security
                    of your computer and personal information. For instance, when you are creating an account, endeavour
                    to use a well-chosen password. You should avoid using any information that others can easily learn
                    about you, such as a family member&apos;s name or birthday, and you can also use special characters
                    in place of letters. You may change the password as often as you wish by going to “My Profile” and
                    selecting &quot;Change Password.&quot; We also recommend that you change your password frequently.
                    You can also install and regularly update antivirus and firewall software to protect your computer
                    from external attacks by malicious users. When you are finished with a session on our site, be sure
                    that you log out and close the browser window.
                </P>
                <P>
                    Hypay authorizes only those persons who need to know your personal information to administer your
                    account, to provide or inform you about products and services, or to maintain, improve or administer
                    our website to access your personal information.
                </P>
                <H2>8. The Data that we Retain</H2>
                <P>
                    We will retain your information for as long as your account is active or as needed to provide you
                    with our services, comply with our legal and statutory obligations or verify your information with a
                    financial institution. Hypay is statutory obligated to retain the data you provide us with in order
                    to process transactions, ensure settlements, make refunds, identify fraud and in compliance with
                    laws and regulatory guidelines applicable to us, our banking providers and credit card processors.
                </P>
                <P>
                    Therefore, even after closing your Hypay account, we will retain certain data to comply with these
                    obligations.
                </P>
                <H2>9. Your Choices on Your Data</H2>
                <P>
                    Generally. You can exercise rights over your Personal Data against the Controller. We provide
                    reasonable steps to allow you to access, rectify, erase, port, or restrict the use of your Personal
                    Data. You have the right to object to the use of your Personal Data at any time, subject to
                    applicable law.
                </P>
                <P>
                    When collection is based on your consent, you have the right to withdraw consent at any time,
                    without affecting the lawfulness of processing based on consent before its withdrawal by applicable
                    law. If applicable by national law, you have the right to lodge a complaint with a supervisory
                    authority if you believe that the processing of your personal data relating infringes your rights.
                </P>
                <P>To exercise your choice on your data, please e-mail us at [contact@hypay.com]</P>
                <H2>10. Problem Signing In</H2>
                <P>
                    Our sign-in process is designed to help protect your privacy. If you have trouble signing in to our
                    Website, please ensure that you are using your registered e-mail address and/or correct password. If
                    you are using your registered e-mail address and correct password, and you continue to have trouble
                    signing in to our site, please e-mail us immediately at [contact@hypay.com]
                </P>
                <H2>11. Transaction Confirmation</H2>
                <P>
                    Hypay sends an e-mail notice confirming acceptance of any transaction you initiate or commence to
                    the e-mail address you provided to us when signing up for a Hypay account. If you receive a
                    confirmation for a transaction you did not initiate, please e-mail us immediately at
                    [transactions@hypay.com]
                </P>
                <H2>12. Changes to Your Account</H2>
                <P>
                    Hypay gives you the ability to change or edit your personal information contained in your profile.
                    Additionally, Hypay gives you the opportunity to close your account if you choose.
                </P>
                <H2>13. Links to Other Web Sites </H2>
                <P>
                    13.1. Our Service may contain links to third-party web sites or services that are not owned or
                    controlled by Hypay.
                </P>
                <P>
                    13.2. Hypay Ltd has no control over, and assumes no responsibility for, the content, privacy
                    policies, or practices of any third-party web sites or services. You further acknowledge and agree
                    that Hypay shall not be responsible or liable, directly, or indirectly, for any damage or loss
                    caused or alleged to be caused by or in connection with use of or reliance on any such content,
                    goods or services available on or through any such web sites or services.
                </P>
                <P>
                    13.3. We strongly advise you to read the terms and conditions and privacy policies of any
                    third-party web sites or services that you visit.
                </P>
                <H2>14. Changes to this Privacy Policy</H2>
                <P>
                    Hypay may revise this Privacy Policy from time to time by posting a revised Privacy Policy on our
                    Website. We reserve the right to modify this Privacy Policy at any time, so please review it
                    frequently.
                </P>
                <H2>15. Further Information </H2>
                <P>
                    If you would like any more information or you have any comments about our Privacy Policy, please
                    contact us at [+234 803 992 9668] or e-mail us at [contact@hypay.com]
                </P>
            </div>
            <PoliciesFooter />
        </div>
    )
}

export default Privacy
