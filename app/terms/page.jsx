import React from "react";

const TermsPage = () => {
  return (
    <main className="px-6 pb-12 font-medium">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white p-6">
          <div className="mb-6">
            <p className="text-lg text-[#222222]">
              Welcome to Halal Connect! These Terms and Conditions ("Terms")
              govern your access and use of our matchmaking platform, including
              our website, mobile application, and related services
              (collectively referred to as the "Platform"). By signing up or
              using Halal Connect, you agree to comply with these Terms. If you
              do not agree, please refrain from using our services.
            </p>
          </div>

          <ol className="space-y-8 list-none text-lg text-[#222222]">
            <li>
              <h2 className="text-2xl font-bold text-[#222222] mb-2 before:content-['1.'] before:mr-2">
                Acceptance of Terms
              </h2>
              <p>
                By registering, accessing, or using our app, you confirm that
                you are at least 18 years old and agree to these Terms and
                Conditions, as well as our Privacy Policy. If you do not agree,
                please do not use our services.
              </p>
            </li>

            <li>
              <h2 className="text-2xl font-bold text-[#222222] mb-2 before:content-['2.'] before:mr-2">
                Purpose of the App
              </h2>
              <p>
                Our platform is designed to facilitate halal, marriage-focused
                connections for Muslims seeking serious relationships. Any
                misuse of the platform, including casual dating, inappropriate
                behavior, or fraudulent activity, is strictly prohibited.
              </p>
            </li>

            <li>
              <h2 className="text-2xl font-bold text-[#222222] mb-2 before:content-['3.'] before:mr-2">
                Subscription Plans & Payments
              </h2>
              <ul className="list-disc list-inside">
                <li>
                  Users can access basic features for free with the Silver plan.
                </li>
                <li>
                  Gold and Diamond plans offer additional benefits such as:
                  Unlimited messaging, Profile boosts, Super Messages
                </li>
                <li>
                  Subscription fees are charged based on the selected plan.
                </li>
                <li>
                  All payments are non-refundable unless otherwise stated in our
                  refund policy.
                </li>
                <li>
                  You may cancel your subscription at any time. Access to
                  premium features will continue until the end of the billing
                  cycle.
                </li>
              </ul>
            </li>

            <li>
              <h2 className="text-2xl font-bold text-[#222222] mb-2 before:content-['4.'] before:mr-2">
                Account Suspension & Termination
              </h2>
              <div className="text-lg text-[#222222] space-y-4">
                <p>
                  We reserve the right to suspend or terminate any account that
                  violates these terms, including:
                </p>
                <ul className="list-none">
                  <li className="flex items-start gap-2">
                    <span
                      style={{
                        color: "black",
                        fontFamily: "Arial, sans-serif",
                      }}
                    >
                      ✔
                    </span>
                    <span>
                      Misuse of the platform for non-serious or inappropriate
                      purposes
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span
                      style={{
                        color: "black",
                        fontFamily: "Arial, sans-serif",
                      }}
                    >
                      ✔
                    </span>
                    <span>Fraudulent, deceptive, or harassing behavior.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span
                      style={{
                        color: "black",
                        fontFamily: "Arial, sans-serif",
                      }}
                    >
                      ✔
                    </span>
                    <span>
                      Any violation of Islamic guidelines or disrespect towards
                      other users
                    </span>
                  </li>
                </ul>
                <p>
                  If your account is terminated for violating these terms, no
                  refunds will be issued for any remaining subscription period.
                </p>
              </div>
            </li>

            <li>
              <h2 className="text-2xl font-bold text-[#222222] mb-2 before:content-['5.'] before:mr-2">
                Disclaimer & Liability
              </h2>
              <ul className="list-disc list-inside ">
                <li>
                  We do not guarantee that every user will find a match, as
                  success depends on mutual compatibility.
                </li>
                <li>
                  We are not responsible for any interactions, disputes, or
                  relationships formed through the app.
                </li>
                <li>
                  While we take strong security measures, we cannot guarantee
                  absolute safety—users should exercise caution when sharing
                  personal details.
                </li>
              </ul>
            </li>

            <li>
              <h2 className="text-2xl font-bold text-[#222222] mb-2 before:content-['6.'] before:mr-2">
                Changes to Terms & Conditions
              </h2>
              <p>
                We may update these terms from time to time. If changes occur,
                we will notify users through the app or email. Continued use of
                the platform after updates constitutes acceptance of the new
                terms.
              </p>
            </li>

            <li>
              <h2 className="text-2xl font-bold text-[#222222] mb-2 before:content-['7.'] before:mr-2">
                Contact Us
              </h2>
              <p className="mb-4">
                For any questions or concerns regarding these Terms &
                Conditions, please contact our support team at
                <span className="ms-1">
                  <a
                    href="mailto:example123@mail.com"
                    className="text-blue-600"
                  >
                    example123@mail.com
                  </a>
                </span>
              </p>
              <p className="mb-4">
                By using HalalConnect, you acknowledge that you have read,
                understood, and agreed to these Terms and Conditions.
              </p>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </main>
  );
};

export default TermsPage;
