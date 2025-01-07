import React from 'react';
import support from "../../public/support.png";
import Contact from '../components/Home/Contact';

const SupportPage = () => {
  return (
    <div className="bg-[#151515] text-white min-h-screen">
      <div className="w-10/12 py-10 mx-auto ">
        {/* Header Section */}
        <div className="text-center mb-12">
            <div className='flex justify-center h-40'>
                <img src={support} className='mx-auto' alt="" />
            </div>
          <h1 className="text-5xl font_header text-[#A91D3A] mb-10">Support</h1>
          <p className="text-lg text-gray-300 mt-4">
            Need help? Explore our FAQs or reach out to us directly. We’re here to support you on your gaming journey.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font_header text-center text-[#A91D3A] mb-8">Questions and Answers</h2>
          <div className="space-y-6">
            <div className="collapse collapse-arrow bg-[#1e1e1e] rounded-lg">
              <input type="radio" name="faq" defaultChecked />
              <div className="collapse-title text-xl font-medium text-gray-300">
                How can I create an account?
              </div>
              <div className="collapse-content text-gray-300">
                <p>Creating an account is simple. Click on the sign-up button, fill in your details, and start exploring Chill Gamer.</p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-[#1e1e1e] rounded-lg">
              <input type="radio" name="faq" />
              <div className="collapse-title text-xl font-medium text-gray-300">
                How can I submit a game review?
              </div>
              <div className="collapse-content text-gray-300">
                <p>Once logged in, navigate to the "Submit Review" section, choose your game, and share your thoughts with our community.</p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-[#1e1e1e] rounded-lg">
              <input type="radio" name="faq" />
              <div className="collapse-title text-xl font-medium text-gray-300">
                How do I reset my password?
              </div>
              <div className="collapse-content text-gray-300">
                <p>Go to the login page, click "Forgot Password," and follow the instructions to reset your password.</p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-[#1e1e1e] rounded-lg">
              <input type="radio" name="faq" />
              <div className="collapse-title text-xl font-medium text-gray-300">
                How do I contact support?
              </div>
              <div className="collapse-content text-gray-300">
                <p>You can reach our support team by emailing <a href="mailto:support@chillgamer.com" className="text-[#A91D3A] underline">support@chillgamer.com</a>. We’re here to help you!</p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-[#1e1e1e] rounded-lg">
              <input type="radio" name="faq" />
              <div className="collapse-title text-xl font-medium text-gray-300">
                Can I edit or delete my review?
              </div>
              <div className="collapse-content text-gray-300">
                <p>Yes, you can edit or delete your review by going to your profile and accessing the "My Reviews" section.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className=" py-12 ">
          <h2 className="text-3xl font_header text-center text-[#A91D3A] mb-8">Still Need Help?</h2>
           <Contact width={"full"}></Contact>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
