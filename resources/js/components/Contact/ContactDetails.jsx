import React from "react";

const ContactDetails = () => {
    return (
        <div className="bg-white p-8 rounded-lg shadow-xl space-y-6">
            <h2 className="text-2xl font-semibold">Contact Information</h2>
            <p className="text-lg text-gray-700">
                We're always available for support!
            </p>
            <div className="space-y-4">
                <div className="flex items-center space-x-4">
                    <span className="material-icons">place</span>
                    <p className="text-gray-600">
                        1234 Main Street, Jakarta, Indonesia
                    </p>
                </div>
                <div className="flex items-center space-x-4">
                    <span className="material-icons">phone</span>
                    <p className="text-gray-600">+62 21 555 1234</p>
                </div>
                <div className="flex items-center space-x-4">
                    <span className="material-icons">mail</span>
                    <p className="text-gray-600">contact@company.com</p>
                </div>
            </div>
        </div>
    );
};

export default ContactDetails;
