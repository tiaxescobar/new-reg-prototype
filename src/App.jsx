import React, { useState } from 'react';
import { Calendar, CreditCard, CheckCircle, User, Building, Mail, Phone, Briefcase, Lock } from 'lucide-react';

const RegistrationCheckoutFlow = () => {
  const [step, setStep] = useState(1);
  const [currentStep, setCurrentStep] = useState(0);
  const [showLogin, setShowLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    businessEmail: '',
    companyName: '',
    address: '',
    suiteNumber: '',
    poBox: '',
    firstName: '',
    lastName: '',
    userEmail: '',
    phoneNumber: '',
    jobCategory: '',
    jobRole: '',
    username: '',
    password: '',
    agreedToTerms: false,
    agreedToPrivacy: false,
    agreedToAutoRenewal: false,
    selectedConnections: [],
    searchQuery: '',
    addedConnections: [],
  });

  const [passwordValidation, setPasswordValidation] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    special: false,
  });

  const mockConnections = [
    { id: 1, name: 'ACME Foods Inc. Northwest Site', initials: 'AF', distance: '33.8 mi', address: '100 Evergreen Terrace, Springfield, OR 97477' },
    { id: 2, name: 'ACME Foods Inc. Central Site', initials: 'AF', distance: '48 mi', address: '450 Maple Street, Springfield, OR 97475' },
    { id: 3, name: 'ACME Foods Inc. Southeast Site', initials: 'AF', distance: '62.6 mi', address: '750 Pine Road, Eugene, OR 97401' },
    { id: 4, name: 'Amazon', initials: 'A', distance: '70.3', address: '3334 N San Fernando Rd, Los Angeles, CA 90065' },
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    if (field === 'password') {
      setPasswordValidation({
        length: value.length >= 8,
        uppercase: /[A-Z]/.test(value),
        lowercase: /[a-z]/.test(value),
        number: /[0-9]/.test(value),
        special: /[!@#$%^&*(),.?":{}|<>]/.test(value),
      });
    }
  };

  const handleNext = () => {
    if (currentStep < 7) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  const toggleConnection = (connection) => {
    const isAdded = formData.addedConnections.some(c => c.id === connection.id);
    if (isAdded) {
      setFormData(prev => ({
        ...prev,
        addedConnections: prev.addedConnections.filter(c => c.id !== connection.id)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        addedConnections: [...prev.addedConnections, connection]
      }));
    }
  };

  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expiry: '',
    cvv: '',
    cardholderName: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(3);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className={`flex items-center ${step >= 1 ? 'text-blue-600' : 'text-gray-400'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}>
                1
              </div>
              <span className="ml-2 font-semibold">Registration</span>
            </div>
            <div className={`flex-1 h-1 mx-4 ${step >= 2 ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
            <div className={`flex items-center ${step >= 2 ? 'text-blue-600' : 'text-gray-400'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}>
                2
              </div>
              <span className="ml-2 font-semibold">Payment</span>
            </div>
            <div className={`flex-1 h-1 mx-4 ${step >= 3 ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
            <div className={`flex items-center ${step >= 3 ? 'text-blue-600' : 'text-gray-400'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}>
                3
              </div>
              <span className="ml-2 font-semibold">Complete</span>
            </div>
          </div>
        </div>

        {/* Step 1: Registration */}
        {step === 1 && (
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Create Your Account</h2>
            
            <div className="space-y-6">
              {/* Company Information */}
              <div className="border-b pb-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-4 flex items-center">
                  <Building className="mr-2" size={24} />
                  Company Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
                    <input 
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter company name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Address *</label>
                    <input 
                      type="text"
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter company address"
                    />
                  </div>
                </div>
              </div>

              {/* Personal Information */}
              <div className="border-b pb-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-4 flex items-center">
                  <User className="mr-2" size={24} />
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                    <input 
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                    <input 
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input 
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
              </div>

              {/* Job Information */}
              <div className="border-b pb-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-4 flex items-center">
                  <Briefcase className="mr-2" size={24} />
                  Job Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Job Category *</label>
                    <select 
                      value={formData.jobCategory}
                      onChange={(e) => setFormData({...formData, jobCategory: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a category</option>
                      <option value="engineering">Engineering</option>
                      <option value="design">Design</option>
                      <option value="marketing">Marketing</option>
                      <option value="sales">Sales</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Job Role *</label>
                    <input 
                      type="text"
                      value={formData.jobRole}
                      onChange={(e) => setFormData({...formData, jobRole: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., Senior Developer"
                    />
                  </div>
                </div>
              </div>

              {/* Account Credentials */}
              <div className="border-b pb-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-4 flex items-center">
                  <Lock className="mr-2" size={24} />
                  Account Credentials
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Username *</label>
                    <input 
                      type="text"
                      value={formData.username}
                      onChange={(e) => setFormData({...formData, username: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Choose a username"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Password *</label>
                    <input 
                      type="password"
                      value={formData.password}
                      onChange={(e) => setFormData({...formData, password: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Create a strong password"
                    />
                  </div>
                </div>
              </div>

              {/* Disclaimers */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Terms & Conditions *</h3>
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input 
                    type="checkbox"
                    checked={formData.disclaimer1}
                    onChange={(e) => setFormData({...formData, disclaimer1: e.target.checked})}
                    className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-600">I agree to the Terms of Service and Privacy Policy</span>
                </label>
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input 
                    type="checkbox"
                    checked={formData.disclaimer2}
                    onChange={(e) => setFormData({...formData, disclaimer2: e.target.checked})}
                    className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-600">I consent to receive marketing communications and updates</span>
                </label>
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input 
                    type="checkbox"
                    checked={formData.disclaimer3}
                    onChange={(e) => setFormData({...formData, disclaimer3: e.target.checked})}
                    className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-600">I acknowledge that all information provided is accurate and complete</span>
                </label>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <button 
                onClick={() => setStep(2)}
                disabled={!isStepOneValid()}
                className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                  isStepOneValid()
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Payment */}
        {step === 2 && (
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Payment Information</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Cardholder Name</label>
                <input 
                  type="text"
                  value={paymentData.cardholderName}
                  onChange={(e) => setPaymentData({...paymentData, cardholderName: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                <div className="relative">
                  <input 
                    type="text"
                    value={paymentData.cardNumber}
                    onChange={(e) => setPaymentData({...paymentData, cardNumber: e.target.value})}
                    className="w-full px-4 py-2 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="1234 5678 9012 3456"
                  />
                  <CreditCard className="absolute left-3 top-2.5 text-gray-400" size={20} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                  <div className="relative">
                    <input 
                      type="text"
                      value={paymentData.expiry}
                      onChange={(e) => setPaymentData({...paymentData, expiry: e.target.value})}
                      className="w-full px-4 py-2 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="MM/YY"
                    />
                    <Calendar className="absolute left-3 top-2.5 text-gray-400" size={20} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                  <input 
                    type="text"
                    value={paymentData.cvv}
                    onChange={(e) => setPaymentData({...paymentData, cvv: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="123"
                    maxLength="3"
                  />
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
                <h3 className="font-semibold text-blue-900 mb-2">Order Summary</h3>
                <div className="flex justify-between text-sm text-blue-800">
                  <span>Registration Fee</span>
                  <span>$99.00</span>
                </div>
                <div className="flex justify-between text-sm text-blue-800 mt-1">
                  <span>Processing Fee</span>
                  <span>$5.00</span>
                </div>
                <div className="border-t border-blue-200 mt-2 pt-2 flex justify-between font-bold text-blue-900">
                  <span>Total</span>
                  <span>$104.00</span>
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <button 
                  onClick={() => setStep(1)}
                  className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button 
                  onClick={handleSubmit}
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Complete Purchase
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Completion */}
        {step === 3 && (
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="flex justify-center mb-6">
              <CheckCircle className="text-green-500" size={80} />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Registration Complete!</h2>
            <p className="text-gray-600 mb-8">
              Thank you for registering. Your account has been created successfully.
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-gray-800 mb-4">Registration Details</h3>
              <div className="text-left space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Company:</span>
                  <span className="font-medium">{formData.companyName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Name:</span>
                  <span className="font-medium">{formData.firstName} {formData.lastName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Username:</span>
                  <span className="font-medium">{formData.username}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Job Role:</span>
                  <span className="font-medium">{formData.jobRole}</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => {
                setStep(1);
                setFormData({
                  companyName: '',
                  address: '',
                  firstName: '',
                  lastName: '',
                  phoneNumber: '',
                  jobCategory: '',
                  jobRole: '',
                  username: '',
                  password: '',
                  disclaimer1: false,
                  disclaimer2: false,
                  disclaimer3: false
                });
                setPaymentData({
                  cardNumber: '',
                  expiry: '',
                  cvv: '',
                  cardholderName: ''
                });
              }}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Start New Registration
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegistrationCheckoutFlow;
