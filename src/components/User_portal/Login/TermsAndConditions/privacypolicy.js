import React from "react";
import { ImCross } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
    const navigate = useNavigate()
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="card mt-3 p-4">
                        <div className="d-flex justify-content-between align-items-center">
                            <h2>
                                Privacy Policy
                            </h2>
                            <h3>
                                <ImCross
                                    onClick={() => navigate('/netbanking-personal-login')}
                                    style={{ paddingRight: "5px", cursor: "pointer" }}
                                />
                            </h3>
                        </div>
                        <div className="mt-2">
                            <p>Royal Islamic Bank Limited (The Bank) recognizes the expectations of its customers with regard to privacy,
                                confidentiality and security of their personal information that resides with the Bank. Keeping personal
                                information of customers secure and using it solely for activities related to the Bank and preventing
                                any misuse thereof is a top priority of the Bank. The Bank has adopted the privacy policy aimed at
                                protecting the personal information entrusted and disclosed by the customers [“the Policy”]. This
                                policy governs the way in which the Bank collects, uses, discloses, stores, secures and disposes of
                                personal information and sensitive personal data or information.</p>
                        </div>
                        <div>
                            <h6>Definitions</h6>
                            <p>”Personal information” means any information that relates to a natural person, which either directly or
                                indirectly, in combination with other information available or likely to be available with the Bank, is
                                capable of identifying such person.</p>
                        </div>
                        <div>
                            <p>“Sensitive personal data or information” of a person means such personal information which consists
                                of information relating to:
                            </p>
                            <ul>
                                <li>password</li>
                                <li>financial information such as Bank account or credit card or debit card or other payment instrument
                                    details;
                                </li>
                                <li>physical, physiological and mental health condition;</li>
                                <li>sexual orientation;</li>
                                <li>medical records & history;</li>
                                <li>biometric information;</li>
                                <li>any detail relating to the above clauses as provided to body corporate for providing service;</li>
                                <li>any of the information received under above clauses by body corporate for processing, stored or
                                    processed under lawful contract or otherwise.<br />
                                    Provided that, any information that is freely available or accessible in public domain or furnished
                                    under the right to information act, 2005 or any other law for the time being in force shall not be
                                    regarded as sensitive personal data or information for the purposes of this policy.
                                </li>

                            </ul>
                        </div>
                        <div>
                            <h6>Applicability</h6>
                            <p>This Policy is applicable to personal information and sensitive personal data or information collected
                                by the Bank or it’s affiliates directly from the customer or through the Bank’s online portals, mobile
                                apps and electronic communications as also any information collected by the Bank’s server from the
                                customer’s browser.</p>
                        </div>
                        <div>
                            <h6>Purpose of Collection and Use of Personal Information</h6>
                            <p>
                                The Bank collects and uses the financial information and other personal information from its
                                customers. This information is collected and used for specific business purposes or for other related
                                purposes designated by the Bank or for a lawful purpose to comply with the applicable laws and
                                regulations. The Bank shall not divulge any personal information collected from the customer, for
                                cross selling or any other purposes.
                            </p>
                            <p>The authenticity of the personal information provided by the customer shall not be the responsibility of
                                the Bank.</p>
                            <p>
                                Any information that is freely available or accessible in public domain or furnished under the Right to
                                Information Act, 2005 or any other law for the time being in force shall not be regarded as personal
                                information for the purposes of this Policy and the Bank shall not be responsible for the same.

                            </p>
                        </div>
                        <div>
                            <h6>Disclosure of Personal Information</h6>
                            <p>The personal information collected by the Bank shall not be disclosed to any other organization
                                except:</p>
                            <ol>
                                <li>where the disclosure has been agreed in a written contract or otherwise between the Bank and the
                                    customer;</li>
                                <li>where the disclosure has been agreed in a written contract or otherwise between the Bank and the
                                    customer;</li>
                                <li>where the Bank is required to disclose the personal information to a third party on a need-to-know
                                    basis, provided that in such case the Bank shall inform such third party of the confidential nature of
                                    the personal information and shall keep the same standards of information/ data security as that of
                                    the Bank.</li>
                            </ol>
                        </div>
                        <div>
                            <h6>Reasonable Security Practices and Procedures</h6>
                            <p>The security of personal information is a priority and is protected by maintaining physical, electronic,
                                and procedural safeguards that meet applicable laws. The Bank shall take reasonable steps and
                                measures to protect the security of the customer’s personal information from misuse and loss, unauthorized access, modification or disclosure. The Bank maintains its security systems to ensure that
                                the personal information of the customer is appropriately protected and follows the extant standard
                                encryption norms followed for the transmission of information. The Bank ensures that its employees
                                and affiliates respect the confidentiality of any personal information held by the Bank.</p>
                        </div>
                        <div>
                            <h6>Contact Information</h6>
                            <p>In order to address any discrepancies or grievances related to the personal information residing with
                                the Bank, the customer may visit: https://www.RoyalIslamicbank.com/contact-us/grievance-redressal
                            </p>
                        </div>
                        <div>
                            <h6>Notice of change</h6>
                            <p>The Bank may, from time to time, change this Policy. The effective date of this Policy, as stated
                                below, indicates the last time this Policy was revised or materially changed.</p>
                        </div>
                        <div>
                            <h6>Cookie policy</h6>
                            <p>Royal Islamic Bank’s digital platforms use various third party analytical tools. These tools use cookies which
                                are downloaded to your device when you visit a website in order to provide a personalized browsing
                                experience. Cookies are used for lots of tasks like remembering your preferences & settings, provide
                                personalized browsing experience and analyze site operations. These cookies collect information
                                about how users use a website, for instance, how often visited pages. All information collected by
                                third party cookies is aggregated and anonymous. By using our website user/s agree that these types
                                of cookies can be placed on his/her device. User/s is free to disable/delete these cookies by changing
                                his/her device / browser settings. Royal Islamic Bank is not responsible for cookies placed in the device of
                                user/s by any other website and information collected thereto.</p>
                        </div>
                        <div>
                            <Link to='/netbanking-personal-login'><button className='genrate_pin_submits justify-content-center mt-3'>I Accept</button></Link>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default PrivacyPolicy