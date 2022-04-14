import React, { FC } from 'react'
import { NextPage } from 'next'
import cx from 'classnames'
import { PoliciesHeader } from '../components/Headers/PoliciesHeader'
import { PoliciesFooter } from '../components/Headers/PoliciesFooter'
import { NextLink } from '../components/Links'

const P: FC<{ className?: string }> = ({ children, className }) => <p className={cx(className, 'my-2')}>{children}</p>
const H2: FC<{ className?: string }> = ({ children, className }) => (
    <h2 className={cx(className, 'mt-6 text-lg font-bold')}>{children}</h2>
)

const TermAndConditions: NextPage = () => {
    return (
        <div>
            <PoliciesHeader mobileHeaderText="Terms and Conditions" subHeader="Terms and Conditions" />
            <div className="py-4 px-2 text-justify md:px-[10%]">
                <h1 className="text-2xl">Terms and Conditions</h1>
                <h3 className="mb-6">
                    Please read these Terms and Conditions (“Terms”), which set forth the legally binding terms and
                    conditions between you and Hypay Ltd (“Hypay or the Company”). It governs your access to and the use
                    of Hypay website and all services (the “Service”) offered by Hypay Ltd.
                </h3>
                <P>
                    Our collection and use of personal information in connection with your access to and use of the
                    Service is described in our Privacy Policy
                </P>
                <P>
                    Your access to use of the Service is conditioned on your acceptance of and compliance with these
                    Terms. These Terms apply to all visitors, users and others who access or use the Service and all
                    applicable laws and all conditions or policies referenced here.
                </P>
                <P>
                    This Privacy Policy applies to how we collect, use and disclose your information across Hypay
                    Platform. If you see an undefined term in this Privacy Policy, it has the same definition as
                    outlined in our Terms and Conditions.
                </P>
                <P>
                    By accessing or using the Service you agree to be bound by these Terms. If you disagree with any
                    part of the terms then you may not access the Service.
                </P>

                <H2>1. Definitions</H2>
                <P>
                    In these Terms and Conditions, “Buyer” means a person who makes a purchase “Seller” means a person
                    who is selling a product, goods or services Buyers, Sellers and visitors to the website are referred
                    to collectively as “Users.” ‘Platform’ refers collectively to the Hypay Website and other related
                    Applications “Site” refers to the website for the services rendered by Hypay which can be found at{' '}
                    <NextLink className=" hover:text-[#0056b3] hover:underline" href="/">
                        www.hypay.com
                    </NextLink>
                </P>
                <P>
                    &quot;Transaction&quot; means the buying and selling of goods or services between buyers and sellers
                    &quot;Transaction Detail Screens&quot; means those screens on the website where Users will provide
                    all requested information relating to a transaction.
                </P>
                <H2>2. Acceptance of Terms</H2>
                <P>
                    The Service is offered subject to acceptance of all the terms and conditions contained in these
                    Terms and all other operating rules, policies, and procedures that may be published on the Site by
                    the Company, which are incorporated by reference, including operating rules, policies, and
                    procedures of third party service providers to the Site that are referenced herein. These Terms
                    apply to every user of the Service. In addition, some Services offered through the Site may be
                    subject to additional terms and conditions adopted by the Company. Your use of those Services is
                    subject to those additional terms and conditions, which are incorporated into these Terms by this
                    reference.
                </P>
                <P>
                    The Company reserves the right, at its sole discretion, to modify or replace these Terms of from
                    time to time by posting the updated terms on the Site. It is your responsibility to check the Terms
                    periodically for changes. If you object to any such changes, your sole recourse will be to cease
                    using the Site and the Service. Your continued use of the Service following the posting of any
                    changes to the Terms will indicate your acknowledgement of such changes and agreement to be bound by
                    the terms and conditions of such changes.
                </P>
                <P>
                    The Company reserves the right to change, suspend, or discontinue the Service (including, but not
                    limited to, the availability of any feature, database, or Content) at any time for any reason. The
                    Company may also impose limits on certain features and Services or restrict your access to parts of
                    or the entire Site without notice or liability.
                </P>

                <H2>3. Scope of Hypay’s Services</H2>
                <P>
                    3.1 Hypay is a Company dedicated to the facilitation of secured transactions by offering escrow
                    services for peer to peer transactions. The services are online and offline based transaction
                    management services performed by www.hypay.com and escrow services provided by Hypay Ltd, a
                    registered limited liability company.
                </P>
                <P>
                    3.2 Hypay acts as a trusted third-party that collects, holds and only disburses funds when both
                    buyers and sellers are satisfied.
                </P>
                <P>
                    3.3 The Buyer provides the Seller information and initiates a transaction on www.hypay.com, after
                    which Hypay contacts the Seller to confirm the Transaction. The Buyer then receives a transaction
                    code to make payment on www.hypay.com. Upon confirmation of delivery of goods/services to the
                    specification(s) agreed between the Buyer and the Seller, Hypay releases payment to the Seller.
                </P>
                <P>
                    3.4 While we may help facilitate secured transactions through our arbitration mechanism, Hypay has
                    no control over and does not guarantee the existence, quality, safety, suitability, or legality of
                    any product or services offered by a seller to a buyer. In the instance any disagreement arise
                    between the buyer and the seller (referred to as “the Parties”), Hypay shall not be held liable for
                    any costs, damages or losses that may arise from duties performed.
                </P>
                <P>
                    3.5 You must be at least 18 years old and able to enter into legally binding contracts to access and
                    use Hypay or register a Hypay Account. By accessing or using Hypay, you represent and warrant that
                    you are 18 or older and have the legal capacity and authority to enter into a contract.
                </P>
                <P>
                    3.6 Hypay may make the access to and use of Hypay, or certain areas or features of the Hypay
                    website, subject to certain conditions or requirements, such as signing up for an account,
                    completing a verification process, meeting specific quality or eligibility criteria.
                </P>
                <P>
                    3.7 Despite the verification process, Hypay does not assume any responsibility for the confirmation
                    of any Member’s identity. Notwithstanding the above, for transparency and fraud prevention purposes,
                    and as permitted by applicable laws, we may, but have no obligation to ask Members to provide a form
                    of government identification or other information or undertake additional checks designed to help
                    verify the identities or backgrounds of Members.
                </P>

                <H2>4. Accounts</H2>
                <P>
                    4.1 In order to initiate and commence the use of our Services, all Users must register an account
                    (“Hypay Account”). If you are registering a Hypay Account for a company or other legal entity, you
                    represent and warrant that you have the authority to legally bind that entity and grant us all
                    permissions and licenses provided in these Terms.
                </P>
                <P>4.2 You can register a Hypay Account using an email address and creating a password.</P>
                <P>
                    4.3 You must provide accurate, current and complete information during the registration process and
                    keep your Hypay Account profile page information up-to-date at all times.
                </P>
                <P>
                    4.4 You are responsible for safeguarding the password that you use to access the Service and for any
                    activities or actions under your password, whether your password is with our Service or a
                    third-party service.
                </P>
                <P>
                    4.5 You agree not to disclose your password to any third party. You must notify us immediately upon
                    becoming aware of any breach of security or unauthorized use of your account.
                </P>
                <P>
                    4.6 You may not use as a username the name of another person or entity or that is not lawfully
                    available for use, a name or trade mark that is subject to any rights of another person or entity
                    other than you without appropriate authorization, or a name that is otherwise offensive, vulgar or
                    obscene.
                </P>
                <P>
                    4.7 You are liable for any and all activities conducted through your Hypay Account, unless such
                    activities are not authorized by you and you are not otherwise negligent (such as failing to report
                    the unauthorized use or loss of your credentials).
                </P>
                <P>
                    4.8 When you create an account with us, you must provide us with information that is accurate,
                    complete, and current at all times. Failure to do so constitutes a breach of the Terms & Conditions,
                    which may result in immediate termination of your account on our Service.
                </P>

                <H2>5. Users&apos; Representations & Warranties</H2>
                <P>
                    Representations and warranties are statements and promises made by you to Hypay, which we rely on as
                    being accurate in our dealings with you. You make the following representations and warranties to us
                    at the time of agreeing to these Terms and every time you use Hypay&apos;s Services;
                </P>
                <ol className="list-decimal pl-8">
                    <li>You are over the age of 18 years;</li>
                    <li>
                        You are of sound mind and have the capacity to initiate and commence a Transaction on the Site;
                    </li>
                    <li>
                        All personal information that you provide about yourself is accurate and true to the best of
                        your knowledge;
                    </li>
                    <li>
                        You hold a bank account in Nigeria in your own name and will use this account to transfer money
                        to our account when you want to initiate a Transaction
                    </li>
                    <li>You have carefully considered the risks involved with using the Website, and its Services;</li>
                    <li>
                        If you are registering or accepting these Terms on behalf of a legal entity such as a company,
                        trust or partnership, you are legally authorised to do so and we may request evidence of such
                        legal entitlement (by way of a copy of any document which shows the valid and subsisting
                        authorisation); and
                    </li>
                    <li>
                        You are not breaching any laws or regulations that are applicable to you or any company, trust
                        or partnership upon whose instructions you are acting.
                    </li>
                </ol>

                <H2>6. Service Fees </H2>
                <P>
                    Hypay charges Users 2.5% of the sum to be held in escrow for every transaction as its service fees
                    in consideration for the use of the platform.
                </P>
                <P>
                    Once paid, Hypay fees are non-refundable. Hypay fees may change from time to time. Hypay is not
                    responsible for payment of any sales, use, personal property or other governmental tax or levy
                    imposed on any items purchased or sold through the Services or otherwise arising from the
                    Transaction.
                </P>

                <H2>7. Intellectual Property</H2>
                <P>
                    7.1 The Service and its original content, features and functionality are and will remain the
                    exclusive property of Hypay Ltd. Our trademarks and trade dress may not be used in connection with
                    any product or service without the prior written consent of Hypay Ltd.
                </P>
                <P>
                    7.2 Hypay may, at its sole discretion, enable Users to (i) create, upload, post, send, receive and
                    store content, such as text, photos, audio, video, or other materials and information on or through
                    Hypay website (&quot;User Content&quot;); and (ii) access and view User Content and any content that
                    Hypay itself makes available on or through Hypay website, including proprietary Hypay content and
                    any content licensed or authorized for use by or through Hypay from a third party (&quot;Hypay
                    Content&quot; and together with User Content, &quot;Collective Content&quot;).
                </P>
                <P>
                    7.3 You will not use, copy, adapt, modify, prepare derivative works of, distribute, license, sell,
                    transfer, publicly display, publicly perform, transmit, broadcast or otherwise exploit Hypay website
                    or Collective Content, except to the extent that you are the legal owner of certain User Content or
                    as expressly permitted in these Terms. No licenses or rights are granted to you by implication or
                    otherwise under any intellectual property rights owned or controlled by Hypay or its licensors,
                    except for the licenses and rights expressly granted in these Terms.
                </P>
                <P>
                    7.4 Subject to your compliance with these Terms, Hypay grants you a limited, non-exclusive, nonsub
                    licensable, revocable, non-transferable license to access and view any Collective Content made
                    available on or through the website and accessible to you, solely for your personal and
                    noncommercial use.
                </P>
                <P>
                    7.5 Users shall not directly or indirectly:
                    <br />
                    (i) decipher, decompile, disassemble, reverse engineer, or otherwise attempt to derive any source
                    code or underlying ideas or algorithms of any part of the Service, except to the extent applicable
                    laws specifically prohibit such restriction;
                    <br />
                    (ii) modify, translate, or otherwise create derivative works of any part of the Service; or
                    <br />
                    (iii) copy, rent, lease, distribute, or otherwise transfer any of the rights that you receive
                    hereunder.
                </P>

                <H2>8. Terms specific for Sellers</H2>
                <P>
                    8.1 On the Transaction Detail Screens, each Seller to a Transaction must designate an Account to
                    which payment for the transaction will be made.
                </P>
                <P>
                    8.2 Each Seller in a Transaction shall deliver the items set forth in the Transaction Detail Screens
                    directly to the Buyer(s), at the address specified by such Buyer either in the information provided
                    to the Seller directly or as shown on the Site.
                </P>
                <P>
                    8.3 The Seller shall use a delivery service that provides a confirmation of delivery and Seller
                    shall, upon request, provide Hypay with a tracking or reference number for the shipment of the
                    goods.
                </P>
                <P>
                    8.4 In the event of any dispute as to the delivery of the goods to the Buyer, the Seller gives Hypay
                    permission to act as its agent in communicating with the shipping company regarding the notice of
                    the delivery of the goods.
                </P>
                <P>
                    8.5 In the event of a return of the items by a Buyer, the Seller shall notify Hypay of the receipt
                    of the returned goods. The Seller has 2 days to inspect the returned items. In the event the Seller
                    accepts the returned items within the inspection period or fails to act within the inspection
                    period, Hypay shall remit the escrowed funds (excluding Hypay’s Service Fees) to the Buyer.
                </P>
                <P>
                    8.6 If the Seller notifies Hypay of its non-acceptance of any returned items within the Seller’s
                    inspection period, then Hypay will retain the escrowed funds pending resolution of the dispute.
                </P>

                <H2>9. Terms specific for Buyers</H2>
                <P>
                    9.1 On the Transaction Detail Screens, the Buyer must designate a payment mechanism and an Account
                    from which the purchase price and related fees will be obtained for deposit into the escrow.
                </P>
                <P>
                    9.2 Depending on the amount of the Transaction and the currency selected for the Transaction, the
                    Buyer may remit the necessary funds via various methods, which may include a credit or debit card or
                    a wire transfer.
                </P>
                <P>
                    9.3 Regardless of the payment method, the Buyer authorizes Hypay to initiate credit or debit
                    transactions, as applicable, to obtain the purchase price and fees due for a Transaction and to
                    initiate any debit or credit entries or reversals that may be necessary to correct any error in a
                    payment or transfer.
                </P>
                <P>9.4 Hypay will deposit funds received from Buyer into an escrow account maintained by Hypay.</P>
                <P>
                    9.5 The Buyer shall notify Hypay of the Buyer’s acceptance or rejection of the items before the
                    Buyer’s Inspection Period expires.
                </P>
                <P>
                    9.6 Upon receipt of notice from Buyer that the items have been received and accepted, Hypay shall
                    transfer the payment amount (excluding Hypay’s Service Fees) to the Seller’s Account.
                </P>
                <P>
                    9.7 Transfer to a Seller generally will be initiated within the next business day from the day on
                    which notice of acceptance of the items is received from the Buyer.
                </P>
                <P>
                    9.8 Transfer to a Seller generally will be initiated within the next business day from the day on
                    which notice of acceptance of the items is received from the Buyer.
                </P>
                <P>
                    9.9 If the Buyer has not notified Hypay of the non-receipt or rejection of the items during the
                    Buyer’s Inspection Period, then the Buyer authorizes Hypay to remit the escrowed funds to the
                    Seller.
                </P>
                <P>
                    9.10 In the event the items are rejected and the items are returned to the Seller, the Buyer shall
                    notify Hypay and Hypay will retain the escrow funds pending resolution of the dispute.
                </P>
                <P>
                    9.11 When a Seller rejects a returned item, the Buyer and the Seller have 2 days to resolve their
                    dispute (referred to as the “Negotiation Period”). If after the Negotiation Period, the dispute is
                    yet to be resolved, the Buyer and Seller are provided with another 4 days for Arbitration (referred
                    to “Arbitration Period”) which is where the Buyer and Seller are expected to undergo a recommended
                    arbitration proceeding to resolve the dispute. The Arbitrators are recommended by Hypay and will
                    take place at an agreed venue.
                </P>

                <H2>10. Prohibited Activities</H2>
                <P>
                    10.1 Users shall not utilize the Site or the Services in connection with any Transaction that is
                    illegal or involves any illegal items, or is for any illegal purpose.
                </P>
                <P>
                    10.2 Hypay, in its sole discretion, may refuse to complete any Transaction that Hypay has reason to
                    believe is unauthorized or may violate any law, rule or regulation.
                </P>
                <P>
                    10.3 In addition, if any transaction cannot be completed for any reason, including cancellation by
                    Hypay for any reason, Hypay will notify each User in such Transaction by e-mail, to the email
                    address each has provided on the Site.
                </P>
                <P>
                    10.4 You are solely responsible for compliance with any and all laws, rules, regulations, and tax
                    obligations that may apply to your use of the Services. In connection with your use of the Site, you
                    will not and will not assist or enable others to:
                </P>
                <ul>
                    <li>
                        - breach or circumvent any applicable laws or regulations, agreements with third-parties,
                        third-party rights, or our Terms;
                    </li>
                    <li>- buy or sell unlawful items;</li>
                    <li>
                        - use the Site or Collective Content for any commercial or other purposes that are not expressly
                        permitted by these Terms or in a manner that falsely implies endorsement, partnership or
                        otherwise misleads others as to your affiliation with Hypay;
                    </li>
                    <li>
                        - copy, store or otherwise access or use any information, including personally identifiable
                        information about any other User, contained on the Site in any way that is inconsistent with
                        Hypay&apos;s Privacy Policy or these Terms or that otherwise violates the privacy rights of
                        Users or third parties;
                    </li>
                    <li>
                        - use the Site in connection with the distribution of unsolicited commercial messages
                        (&quot;spam&quot;);
                    </li>
                    <li>- offer, as a Seller any goods that you do not yourself own or have permission to sell</li>
                    <li>
                        - use the Site to with the intention to circumvent any Service Fees or for any other reason;
                    </li>
                    <li>
                        - request, accept or make any payment for orders outside of the Hypay platform. If you do so,
                        you acknowledge and agree that you: (i) would be in breach of these Terms; (ii) accept all risks
                        and responsibility for such payment, and (iii) hold Hypay harmless from any liability for such
                        payment;
                    </li>
                    <li>
                        - discriminate against or harass anyone on the basis of race, tribe, origin, religion, gender,
                        physical or mental disability, medical condition, marital status, or age, or otherwise engage in
                        any abusive or disruptive behaviour;
                    </li>
                    <li>
                        - use, display, mirror or frame the Hypay platform or Collective Content, or any individual
                        element within the Hypay Platform, Hypay’s name, any Hypay’s trademark, logo or other
                        proprietary information, or the layout and design of any page or form contained on a page in the
                        Hypay Platform, without Hypay’s express written consent;
                    </li>
                    <li>
                        - dilute, tarnish or otherwise harm the Hypay brand in any way, including through unauthorized
                        use of Collective Content, registering and/or using Hypay or derivative terms in domain names,
                        trade names, trademarks or other source identifiers, or registering and/or using domains names,
                        trade names, trademarks or other source identifiers that closely imitate or are confusingly
                        similar to Hypay domains, trademarks, taglines, promotional campaigns or Collective Content;
                    </li>
                    <li>
                        - use any robots, spider, crawler, scraper or other automated means or processes to access,
                        collect data or other content from or otherwise interact with the Hypay Platform for any
                        purpose;
                    </li>
                    <li>
                        - avoid, bypass, remove, deactivate, impair, descramble, or otherwise attempt to circumvent any
                        technological measure implemented by Hypay or any of Hypay&apos;s providers or any other third
                        party to protect the Hypay Platform;
                    </li>
                    <li>
                        - attempt to decipher, decompile, disassemble or reverse engineer any of the software used to
                        provide the Hypay Platform;
                    </li>
                    <li>
                        - take any action that damages or adversely affects, or could damage or adversely affect the
                        performance or proper functioning of the Hypay Platform;
                    </li>
                    <li>- violate or infringe anyone else’s rights or otherwise cause harm to anyone.</li>
                </ul>
                <P>
                    10.5 You acknowledge that Hypay has no obligation to monitor the access to or use of the Platform by
                    any User or to review, disable access to, or edit any User Content, but has the right to do so to{' '}
                    <br />
                    (i) operate, secure and improve the Hypay Platform (including without limitation for fraud
                    prevention, risk assessment, investigation and customer support purposes); <br />
                    (ii) ensure Users’ compliance with these Terms; <br />
                    (iii) comply with applicable law or the order or requirement of a court, law enforcement or other
                    administrative agency or governmental body; <br />
                    (iv) respond to User Content that it determines is harmful or objectionable; or <br />
                    (v) as otherwise set forth in these Terms. Users agree to cooperate with and assist the Hypay
                    Platform in good faith, and to provide Hypay with such information and take such actions as may be
                    reasonably requested by Hypay with respect to any investigation undertaken by Hypay or a
                    representative of Hypay regarding the use or abuse of the Hypay Platform.
                </P>
                <P>
                    10.6 If you feel that any User you interact with, whether online or in person, is acting or has
                    acted inappropriately, including but not limited to anyone who <br />
                    (i) engages in offensive, violent or sexually inappropriate behaviour, <br />
                    (ii) you suspect of stealing from you, or <br />
                    (iii) engages in any other disturbing conduct, you should immediately report such person to the
                    appropriate authorities and then to Hypay by contacting us with your police station and report
                    number (if available); provided that your report will not obligate us to take any action beyond that
                    required by law (if any) or cause us to incur any liability to you.
                </P>

                <H2>11. Rejection of Payment</H2>
                <P>
                    Since the use of a bank account, credit/debit card account, or the making of an electronic funds
                    transfer may be limited by your agreement with your financial institution and/or by applicable laws,
                    Hypay is not liable to any User if Hypay does not complete a transaction as a result of any such
                    limit, or if a financial institution fails to honour any credit or debit to or from an account.
                </P>

                <H2>12. Links to Other Web Sites</H2>
                <P>
                    12.1 Our Service may contain links to third-party web sites or services that are not owned or
                    controlled by Hypay.
                </P>
                <P>
                    12.2 Hypay Ltd has no control over, and assumes no responsibility for, the content, privacy
                    policies, or practices of any third-party web sites or services. You further acknowledge and agree
                    that Hypay shall not be responsible or liable, directly or indirectly, for any damage or loss caused
                    or alleged to be caused by or in connection with use of or reliance on any such content, goods or
                    services available on or through any such web sites or services.
                </P>
                <P>
                    12.3 We strongly advise you to read the terms and conditions and privacy policies of any third-party
                    web sites or services that you visit.
                </P>

                <H2>13. Termination</H2>
                <P>
                    13.1 We may terminate or suspend your account immediately, without prior notice or liability, for
                    any reason whatsoever, including without limitation if you breach the Terms.
                </P>
                <P>
                    13.2 Upon termination, your right to use the Service will immediately cease. If you wish to
                    terminate your account, you may simply discontinue using the Service.
                </P>

                <H2>14. Indemnity</H2>
                <P>
                    You agree to indemnify and hold harmless the Company, its affiliates and subsidiaries, its officers,
                    directors, employees and agents, against all liabilities, costs, expenses, damages and losses
                    (including any direct, indirect or consequential losses, loss of profit, loss of reputation and all
                    interest penalties and legal and other reasonable professional costs and expenses) suffered or
                    incurred as a result of:
                </P>
                <ul>
                    <li>your fraudulent or illegal use of the Services or the Site;</li>
                    <li>your negligence or any default by you of any of these Terms;</li>
                    <li>any inaccurate or incomplete information that you have knowingly provided to us;</li>
                    <li>
                        your allowing any other person to access your account either with your permission or as a result
                        of your failure to keep your username and password private;
                    </li>
                    <li>
                        any service that you have offered, whether with or without our permission, to another third
                        party using the Company’s Services or Website;
                    </li>
                    <li>
                        any claim made against you for actual or alleged infringement of the Company’s Intellectual
                        Property Rights or any actual or alleged infringement of a third party’s Intellectual Property
                        Rights arising out of or in connection with the Services or your use of the Site.
                    </li>
                </ul>

                <H2>15. Limitation of Liability</H2>
                <P>
                    In no event shall Hypay, its directors, employees, partners, agents, suppliers, or affiliates, be
                    liable for any indirect, incidental, special, consequential or punitive damages, including without
                    limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from <br />
                    i. your use of the Site or the Services or your inability to use the Site or the Services;
                    <br />
                    ii. any legal proceedings between the Buyer and the Seller.
                </P>

                <H2>16. Disclaimer</H2>
                <P>
                    16.1 Your use of the Service is at your sole risk. The Service is provided on an “AS IS” and “AS
                    AVAILABLE” basis. The Service is provided without warranties of any kind, whether express or
                    implied, including, but not limited to, implied warranties of merchantability, fitness for a
                    particular purpose, noninfringement or course of performance.
                </P>
                <P>
                    16.2 Hypay, its subsidiaries, affiliates, and its licensors do not warrant that a) the Service will
                    function uninterrupted, secure or available at any particular time or location; b) any errors or
                    defects will be corrected; c) the Service is free of viruses or other harmful components; or d) the
                    results of using the Service will meet your requirements.
                </P>

                <H2>17. Governing Law</H2>
                <P>
                    17.1 These Terms shall be governed and construed in accordance with the laws of The Federal Republic
                    of Nigeria, without regard to its conflict of law provisions.
                </P>
                <P>
                    17.2 Our failure to enforce any right or provision of these Terms will not be considered a waiver of
                    those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the
                    remaining provisions of these Terms will remain in effect. These Terms & Conditions constitute the
                    entire agreement between us regarding our Service, and supersede and replace any prior agreements we
                    might have between us regarding the Service.
                </P>

                <H2>18. Dispute Resolution</H2>
                <P>
                    18.1 Any disputes arising under or in connection with the validity, interpretation and performance
                    of this Terms between Hypay and any third parties that cannot be resolved amicably by the parties
                    through negotiation within 30 (thirty) days shall be resolved by Arbitration at the Lagos Court of
                    Arbitration (LCA) before a single arbitrator in accordance with the Arbitration and Conciliation
                    Act, Cap A18, Laws of the Federation of Nigeria.
                </P>
                <P>
                    18.2 The Parties shall endeavour in good faith to mutually agree on the selection of an arbitrator.
                    If the Parties cannot mutually agree on the selection of an arbitrator within ten (10) days of the
                    request, they shall apply to the LCA to appoint an arbitrator. Arbitration proceedings shall be
                    conducted in Lagos. The arbitrator will be requested to render an award within ninety (90) days and
                    to provide, in writing the reasoning for the award. The decision of any such arbitrator shall be
                    final and binding on the parties.
                </P>
                <P>
                    18.3 Each party shall bear its cost in connection with the Arbitration and the arbitrator’s fees
                    shall be split equally between both parties.
                </P>

                <H2>19. Feedback</H2>
                <P>
                    We welcome and encourage you to provide feedback, comments and suggestions for improvements to Hypay
                    Site or Services. You may submit Feedback by emailing us, through the contact section of the Site,
                    or by other means of communication. Any Feedback you submit to us will be considered
                    non-confidential and non-proprietary to you. By submitting Feedback to us, you grant us a
                    nonexclusive, worldwide, royalty-free, irrevocable, sub-licensable, perpetual license to use and
                    publish those ideas and materials for any purpose, without compensation to you.
                </P>

                <H2>20. Changes to Terms & Conditions</H2>
                <P>
                    Hypay reserves the right, in its sole discretion, to change the Terms under which www.hypay.com is
                    offered. The most current version of the Terms will supersede all previous versions. Hypay
                    encourages you to periodically review the Terms of Use to stay informed of our updates.
                </P>

                <H2>21. Contact Us</H2>
                <P>
                    If you have any questions about these Terms of Use, please contact us at: +234809 944 0777 or
                    contact@hypay.com or A14 Willow Greens Osapa Lekki London.
                </P>
            </div>
            <PoliciesFooter />
        </div>
    )
}

export default TermAndConditions
