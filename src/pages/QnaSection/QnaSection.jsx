// import React from 'react';

const QnaSection = () => {
    return (
      <div className="mx-5 md:mx-10 lg:mx-32 bg-white/60 rounded-xl mb-20 text-black p-5 md:p-20">
        <div>
            <h2 className="text-4xl mb-10 text-center libre">QNAs</h2>
        </div>
        <div className="collapse collapse-plus bg-white border border-base-300">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title font-semibold">
            How do I create an account?
          </div>
          <div className="collapse-content text-sm">
            Click the "Sign Up" button in the top right corner and follow the
            registration process.
          </div>
        </div>
        <div className="collapse collapse-plus bg-white border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            I forgot my password. What should I do?
          </div>
          <div className="collapse-content text-sm">
            Click on "Forgot Password" on the login page and follow the
            instructions sent to your email.
          </div>
        </div>
        <div className="collapse collapse-plus bg-white border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            How can I access the "event add" functionality
          </div>
          <div className="collapse-content text-sm">
            Go to "My Account" settings and select "Edit Profile" to make
            changes.
          </div>
        </div>
        <div className="collapse collapse-plus bg-white border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            How do I update my profile information?
          </div>
          <div className="collapse-content text-sm">
            Go to "My Account" settings and select "Edit Profile" to make
            changes.
          </div>
        </div>
        <div className="collapse collapse-plus bg-white border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            I am a student. What  can I do?
          </div>
          <div className="collapse-content text-sm">
            Go to "My Account" settings and select "Edit Profile" to make
            changes.
          </div>
        </div>
        <div className="collapse collapse-plus bg-white border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            Have a technical issue?
          </div>
          <div className="collapse-content text-sm">
           Please, contact our IT team at teamgatherlyITsupport@gmail.com
          </div>
        </div>
      </div>
    );
};

export default QnaSection;