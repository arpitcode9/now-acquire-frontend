import { Dialog } from '@mui/material';
import React, { useState } from 'react';

const TermsAndConditions = (props) => {

    const dialogStyles = {
        width: '90%',
    };


    return (
        <div>
            {props.isOpen && (
                <Dialog
                    open={props.isOpen}
                    maxWidth={false}
                    PaperProps={{ style: dialogStyles }}
                    onClose={props.handleCloseDialog}
                    aria-labelledby="edit-apartment"
                >
                    <div className="dialog">
                        <div className="dialog-content">
                            <h5>Terms and Conditions</h5>
                            <p>
                                <head>
                                    <title>Terms and Conditions</title>
                                </head>

                                <body>
                                    <h3>TERMS AND CONDITIONS WHEN SIGNING UP FOR A WEBSITE</h3>

                                    <h5>ABOUT US</h5>
                                    <p>Welcome to nowacquire.com nowacquire is an online business portal for newbie startups in India. nowacquire renders a of services take fund from investors and provide to startup Company, LLP, Partnership Firm who has not completed 10 year from the date of registration. nowacquire "website" and nowacquire is owned and maintained by Nowacquire LLP. Having register Office at ,_______________________________________</p>

                                    <h5>AGREEMENT</h5>
                                    <p>Please read the terms and conditions set out below carefully before availing services from our website or mobile application or any other mode. By availing service from our website or mobile application or any other mode including by any computer equipment or by phone/mobile or by any electronic device you agree to be bound by these Terms and Conditions</p>

                                    <h5>GENERAL</h5>
                                    <p>In terms of the Information Technology Act, 2000, this document is an electronic record. Being generated by a computer system it does not require any physical or digital signatures.</p>
                                    <p>The domain name www.nowacquire.com (hereinafter referred to as "the Website") is owned by Nowacquire, having its registered office at __________________________________________________</p>

                                    <h5>USER OBLIGATIONS</h5>
                                    <ol>
                                        <li>By visiting our website and accessing the information, resources, services, products, and tools we provide, you understand and agree to accept and adhere to the terms and conditions as stated in this policy, along with the terms and conditions as stated in our Privacy Policy.</li>
                                        <li>By signup or sign in on our website, you are agreeing to additional terms of use with regard to our product i.e. business chat platform. You are advised to read additional terms of use carefully before sign in to application on your mobile devices.</li>
                                        <li>You further agree there is no intention to solicit any engagements from you which are statutorily mandated to be performed by relevant professionals like practicing CA's, CS's, Lawyers etc. and neither will nowacquire.com be implied to be propagating any non-compliance via write-ups, blog posts, articles, notification, comments etc</li>
                                        <li>You agreed upon that we will use our company email id or mobile number or both in various government application in order to receive OTP so that we can serve you and deliver the requisite service promptly. The rationale behind that our team requires unique token/OTP which carry self-life of shorter time in order to access the application and most of the time you are not available to provide OTP/tokens to us on an immediate basis. Your kind cooperation in this regard is highly appreciated.</li>
                                        <li>We reserve the right to change these terms & conditions from time to time without notice. You acknowledge and agree that it is your responsibility to review these terms & conditions periodically to familiarize yourself with any modifications. Your continued use of this site after such modifications will constitute acknowledgment and agreement of the modified terms and conditions.</li>
                                        <li>In order to avail our professional & other services, you may be required to provide certain information about yourself (such as identification proof, address proof, email, phone number, contact details, etc.). You agree that any information you provide will always be accurate, correct, and up to date.</li>
                                        <li>Accessing (or attempting to access) any of our Resources by any means other than through the means we provide, is strictly prohibited. You specifically agree not to access (or attempt to access) any of our Resources through any automated, unethical or unconventional means.</li>
                                        <li>Engaging in any activity that disrupts or interferes with our Resources, including the servers and/or networks to which our Resources are located or connected, is strictly prohibited.</li>
                                        <li>By using this site, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.</li>
                                        <li>Nowacquire grants you permission to view this site and to print individual pages from this site for your own personal, non-commercial use. You may not modify, copy (except as set forth in the preceding sentence), distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer or sell any information, material, software, products or services from this site, without prior written approval from Nowacquire. You represent and warrant to the Company that you will not use this site for any purpose that is unlawful, immoral or prohibited by these terms, conditions, and notices. If you do not agree and accept without modification the notices, terms, and conditions set forth herein, do not use this site. Other than this agreement and any other written agreements between you and Nowacquire, Nowacquire will not enter into any agreement with you or obligation to you through this site and no attempt to create such an agreement or obligation will be effective.</li>
                                        <li>The content provided is for information purposes alone and does not substitute for specific advice whether investment, legal, taxation or otherwise. Nowacquire disclaims all liability for damages caused by the use of content on the site.</li>
                                        <li>All the offers and discounts communicated to you over email or telephone shall be valid till date as specified with offers. In case offers/discounts validity period not specified then offers & discounts communicated to you shall be valid for a maximum of 7 days from the date on which offer or discount communicated to you. We are not liable to extend the benefits of offers beyond its validity period.</li>
                                        <li>All responsibility and liability for any damages caused by downloading of any data are disclaimed.</li>
                                        <li>You agree that in case of any deficiency founds in our committed services, Nowacquire shall be liable only to the extent of the amount paid by you to Nowacquire. No other claims shall be entertained.</li>
                                        <li>You agree that we, including our employees, are free to change your dashboard password without prior permission to ensure a better experience and quality service.</li>
                                        <li>You are solely responsible for any consequences, losses, or damages that we may directly or indirectly incur or suffer due to any unauthorized activities conducted by you, as explained above, and may incur criminal or civil liability.</li>
                                        <li>You agree neither Nowacquire nor any of its employees or consultants shall be liable for any loss, expense, or damage incurred due to "any act of" or "any act occurs to" any affiliate vendors, agents, or any other 3rd party who are associated with Nowacquire whether directly or indirectly.</li>
                                        <li>You agree that you will not upload, post, share, or otherwise distribute any content on our web public space which is illegal, threatening, defamatory, abusive, harassing, defame, degrading, intimidating, fraudulent, deceptive, invasive, racist, or contains any type of suggestive, inappropriate, or explicit language, contains any type of unauthorized or unsolicited advertising.</li>
                                        <li>We have the right at our sole discretion to remove any content that, we feel in our judgment does not comply with these terms & conditions, along with any content that we feel is otherwise offensive, harmful, objectionable, inaccurate, or violates any 3rd party copyrights or trademarks. We are not responsible for any delay or failure in removing such content. If you post content that we choose to remove, you hereby consent to such removal and consent to waive any claim against us.</li>
                                        <li>You agree to indemnify, defend and hold harmless this website including but not limited to its parent company/llp, partners, owners, affiliate vendors, agents, and employees from and against any and all losses, liabilities, claims, damages, demands, costs and expenses (including legal fees and disbursements in connection therewith and interest chargeable thereon) asserted against or incurred by us that arise out of, result from, or may be payable by virtue of, any breach or non-performance of any representation, warranty, covenant or agreement made or obligation to be performed by you / us pursuant to these terms of use. Further, you agree to hold us harmless against any claims made by any third party due to, or arising out of, or in connection with, your use of the website, any claim that your material caused damage to a third party, your violation of the terms of use, or your violation of any rights of another, including any intellectual property rights.</li>
                                        <ol>
                                            <li>You agree that we may, at our sole discretion, reserve the rights to suspend or terminate your access to all or part of our website and resources with or without notice and for any reason, including, without limitation, breach of these terms & conditions, and to take all necessary measures to prevent access to any services or termination of services if the terms are not complied with or are contravened or violation suspected.</li>
                                            <li>The information generated by other Users may sometimes be false. You agree that we are not responsible for any loss incurred due to such inaccuracy in data.</li>
                                            <li>We are not in any way liable to you for any loss arising from activities that include but are not limited to our negligence, breach of contract, intellectual property and trademark infringement, breach of laws, etc.</li>
                                            <li>From time to time, our website may have external links connected to other websites. We do not endorse these websites, and we are not liable for the information found on those websites. External websites may have their own policies, and we are not responsible for any loss or damage caused by them. You are advised to use your own discretion in the navigation and use of external sites.</li>
                                            <li>All content apart from the ones owned by us is third-party user-generated content, and we have no control over such third-party user-generated content.</li>
                                            <li>Other than when provided for, the use of such content and its reproduction, republishing, uploading, posting, publicly displaying, encoding, translating, transmitting, or distributing in any way (including "mirroring") to any other computer, server, website, or another medium for publication or distribution or for any commercial enterprise, without our express prior written consent, is not allowed.</li>
                                            <li>The content that you post will become our property, and you grant us the worldwide, perpetual, and transferable rights in such content. We shall be entitled to, consistent with our Privacy Policy as adopted in accordance with applicable law, use the content or any of its elements for any type of use forever, including but not limited to promotional and advertising purposes and in any media whether now known or hereafter devised, including the creation of derivative works that may include the Content You provide and are not entitled to any payment or other compensation for such use.</li>
                                        </ol>
                                        <li>This Agreement, the construction, enforcement and the interpretation of its terms, and any disputes arising out of it shall be governed by the Laws of India and shall be subject to the courts located in Delhi, and you hereby submit to the personal jurisdiction of such courts.</li>
                                        <li>If you have any questions regarding the Agreement, the practices of nowacquire.com, or any complaints with the service, you can e-mail us at [insert email address].</li>
                                        <li>By using this online application-based platform to raise funds, the startup agrees to abide by all applicable laws and regulations related to crowdfunding and fundraising.</li>
                                        <li>The startup agrees to provide accurate and up-to-date information about the business and its financial status when creating a profile on the platform.</li>
                                        <li>The startup agrees to use the funds raised through the platform for the sole purpose of advancing the business and not for personal gain or other unrelated expenses.</li>
                                        <li>The platform reserves the right to review and approve all fundraising campaigns before they are posted on the site. The startup agrees to comply with any guidelines set forth by the platform for creating and managing a successful campaign.</li>
                                        <li>The startup agrees to communicate regularly with investors and donors who contribute to their campaign, providing updates on the progress of the business and any potential roadblocks.</li>
                                        <li>The platform is not responsible for any losses incurred by the startup or investors as a result of using the platform, and the startup agrees to hold the platform harmless in the event of any legal or financial issues.</li>
                                        <li>The startup acknowledges that investors and donors may have certain expectations regarding the use of funds and the success of the business, and agrees to do their best to meet these expectations.</li>
                                        <li>The platform may charge fees for the use of its services, and the startup agrees to pay these fees in a timely manner.</li>
                                        <li>The startup understands that fundraising through the platform does not guarantee success, and that there is always a risk of failure or loss.</li>
                                        <li>The startup acknowledges that the platform is not liable for any information provided by other users or third parties on the site.</li>
                                    </ol>
                                </body>
                            </p>
                        </div>
                        <button className="close-button" onClick={props.handleCloseDialog}>
                            Close
                        </button>
                    </div>
                </Dialog>
            )}
        </div>
    );
};

export default TermsAndConditions;