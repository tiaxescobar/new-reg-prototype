import React, { useState } from 'react';
import { ChevronLeft, Check, Eye, EyeOff, MessageSquare, Phone } from 'lucide-react';

const AvettaRegistrationPrototype = () => {
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
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
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

  const renderStepContent = () => {
    if (showLogin) {
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
          <div className="max-w-md w-full">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Log in to Atteva</h1>
                <p className="text-gray-600">
                  Welcome back! Please enter your credentials.
                </p>
              </div>

              <div className="space-y-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Email or Username
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Enter your email or username"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent pr-12"
                      placeholder="Enter your password"
                    />
                    <button
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              </div>

              <button
                className="w-full py-3 rounded font-semibold transition-colors bg-blue-700 hover:bg-blue-800 text-white cursor-pointer mb-4"
              >
                Log In
              </button>

              <div className="text-center mb-4">
                <a href="#" className="text-sm text-blue-600 hover:underline cursor-pointer">
                  Forgot password?
                </a>
              </div>

              <div className="text-center pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-700">
                  Don't have an account?{' '}
                  <button 
                    onClick={() => setShowLogin(false)}
                    className="text-blue-600 hover:underline font-semibold cursor-pointer"
                  >
                    Register Now
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    switch (currentStep) {
      case 0:
        return (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <div className="max-w-md w-full">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to Atteva!</h1>
                  <p className="text-gray-600">
                    Create your Supplier Profile and join<br />the largest supply chain network.
                  </p>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Business Email
                  </label>
                  <input
                    type="email"
                    value={formData.businessEmail}
                    onChange={(e) => handleInputChange('businessEmail', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Enter a valid email address"
                  />
                </div>

                <button
                  onClick={handleNext}
                  disabled={!formData.businessEmail}
                  className={`w-full py-3 rounded font-semibold transition-colors ${
                    formData.businessEmail
                      ? 'bg-blue-700 hover:bg-blue-800 text-white cursor-pointer'
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Begin Registration
                </button>

                <div className="text-center mt-6">
                  <p className="text-sm text-gray-700">
                    Already have an account?{' '}
                    <button 
                      onClick={() => setShowLogin(true)}
                      className="text-blue-600 hover:underline font-semibold cursor-pointer"
                    >
                      Log in now
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8">
            <div className="max-w-md w-full">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Tell us about your company</h2>
                  <p className="text-gray-600">
                    Help us customize your experience<br />by telling us about your company.
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange('companyName', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Enter company name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Address
                    </label>
                    <select
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent appearance-none bg-white cursor-pointer"
                    >
                      <option value="">Example: 1001 Main St</option>
                      <option value="100 Business Ave, City, ST 12345">100 Business Ave, City, ST 12345</option>
                      <option value="200 Corporate Blvd, Town, ST 67890">200 Corporate Blvd, Town, ST 67890</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        value={formData.suiteNumber}
                        onChange={(e) => handleInputChange('suiteNumber', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="Suite number"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        value={formData.poBox}
                        onChange={(e) => handleInputChange('poBox', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="P.O. Box"
                      />
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleNext}
                  className="w-full mt-8 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded font-semibold transition-colors cursor-pointer"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8">
            <div className="max-w-md w-full">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <div className="flex items-center mb-8">
                  <button
                    onClick={handleBack}
                    className="mr-4 text-gray-600 hover:text-gray-900 cursor-pointer flex-shrink-0"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-1">Tell us about yourself</h2>
                    <p className="text-gray-600">Complete your contact details.</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">First Name</label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Enter first name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Last Name</label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Enter last name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Business Email</label>
                    <input
                      type="email"
                      value={formData.userEmail || formData.businessEmail}
                      onChange={(e) => handleInputChange('userEmail', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="name@domain.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Phone Number</label>
                    <div className="flex">
                      <div className="flex items-center px-3 border border-r-0 border-gray-300 rounded-l bg-gray-50">
                        <span className="text-xl mr-2">🇺🇸</span>
                        <span className="text-gray-600">▼</span>
                      </div>
                      <input
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-r focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="+1   Mobile number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Job Category</label>
                    <div className="relative">
                      <select
                        value={formData.jobCategory}
                        onChange={(e) => handleInputChange('jobCategory', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent appearance-none bg-white cursor-pointer"
                      >
                        <option value="">Select</option>
                        <option value="site-project">Site/ Project Operations</option>
                        <option value="finance">Finance/Accounting</option>
                        <option value="hse">Health, Safety, and Environment (HSE)</option>
                        <option value="hr">Human Resources</option>
                        <option value="procurement">Procurement</option>
                        <option value="regulatory">Regulatory/ Legal</option>
                        <option value="sales">Sales</option>
                        <option value="security">Security/ Facilities</option>
                      </select>
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Job Role</label>
                    <div className="relative">
                      <select
                        value={formData.jobRole}
                        onChange={(e) => handleInputChange('jobRole', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent appearance-none bg-white cursor-pointer"
                      >
                        <option value="">Select your job role</option>
                        <option value="coordinator">Coordinator</option>
                        <option value="project-engineer">Project Engineer</option>
                        <option value="project-manager">Project Manager</option>
                        <option value="operation-manager">Operation Manager</option>
                        <option value="site-manager">Site Manager</option>
                        <option value="superintendent">Superintendent</option>
                        <option value="quality-control">Quality Control</option>
                        <option value="other">Other</option>
                      </select>
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleNext}
                  className="w-full mt-8 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded font-semibold transition-colors cursor-pointer"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8">
            <div className="max-w-md w-full">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <div className="flex items-center mb-8">
                  <button
                    onClick={handleBack}
                    className="mr-4 text-gray-600 hover:text-gray-900 cursor-pointer flex-shrink-0"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-1">Finalize your account</h2>
                    <p className="text-gray-600">Complete your account login.</p>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded p-4 mb-6">
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-semibold">Company Name:</span> {formData.companyName || 'Not provided'}
                    </div>
                    <div className="text-gray-600">
                      Address: {formData.address ? formData.address : 'Not provided'}
                      {formData.suiteNumber && `, Suite ${formData.suiteNumber}`}
                      {formData.poBox && `, P.O. Box ${formData.poBox}`}
                    </div>
                    <div className="font-semibold mt-3">Name</div>
                    <div className="text-gray-600">
                      {formData.firstName} {formData.lastName}
                    </div>
                    <div className="text-gray-600">
                      Business email: {formData.userEmail || formData.businessEmail || 'Not provided'}
                    </div>
                    <div className="text-gray-600">
                      Phone number: {formData.phoneNumber || 'Not provided'}
                    </div>
                    <div className="text-gray-600">
                      Job category: {formData.jobCategory || 'Not provided'}
                    </div>
                    <div className="text-gray-600">
                      Job role: {formData.jobRole || 'Not provided'}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Username</label>
                    <input
                      type="text"
                      value={formData.username}
                      onChange={(e) => handleInputChange('username', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Enter username"
                    />
                    <p className="text-xs text-gray-600 mt-2">
                      Username must be unique. Tip: your email is unique and easy to remember.
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Password</label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={formData.password}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent pr-12"
                        placeholder="Enter password"
                      />
                      <button
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                    <div className="mt-3 space-y-1">
                      <p className="text-sm font-semibold text-gray-700">Your password must include:</p>
                      {[
                        { key: 'length', label: 'At least 8 characters long' },
                        { key: 'uppercase', label: '1 uppercase letter' },
                        { key: 'lowercase', label: '1 lowercase letter' },
                        { key: 'number', label: '1 number' },
                        { key: 'special', label: '1 special character (!@#$%^&*)' },
                      ].map((req) => (
                        <div key={req.key} className="flex items-center text-sm">
                          <div className={`w-4 h-4 rounded-full border-2 mr-2 flex items-center justify-center ${
                            passwordValidation[req.key] ? 'bg-green-500 border-green-500' : 'border-gray-300'
                          }`}>
                            {passwordValidation[req.key] && <Check className="w-3 h-3 text-white" />}
                          </div>
                          <span className={passwordValidation[req.key] ? 'text-green-600' : 'text-gray-600'}>
                            {req.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="flex items-start cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.agreedToTerms}
                        onChange={(e) => handleInputChange('agreedToTerms', e.target.checked)}
                        className="mt-1 mr-3 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-600 cursor-pointer"
                      />
                      <span className="text-sm text-gray-700">
                        I have read and agree to the{' '}
                        <a href="#" className="text-blue-600 hover:underline cursor-pointer">End User Service Agreement</a>
                        {' '}and the{' '}
                        <a href="#" className="text-blue-600 hover:underline cursor-pointer">Data Processing Addendum</a>.
                      </span>
                    </label>

                    <label className="flex items-start cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.agreedToPrivacy}
                        onChange={(e) => handleInputChange('agreedToPrivacy', e.target.checked)}
                        className="mt-1 mr-3 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-600 cursor-pointer"
                      />
                      <span className="text-sm text-gray-700">
                        I have read and understand the{' '}
                        <a href="#" className="text-blue-600 hover:underline cursor-pointer">Privacy Policy</a>
                        {' '}and{' '}
                        <a href="#" className="text-blue-600 hover:underline cursor-pointer">Notice at Collection</a>.
                      </span>
                    </label>

                    <div className="bg-gray-50 border border-gray-200 rounded p-4 text-sm text-gray-700">
                      <p className="mb-3">Please review our auto-renewal terms before creating your account. Once reviewed, the checkbox below will be enabled. Memberships renew automatically and are billed annually.</p>
                      
                      <label className="flex items-start cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.agreedToAutoRenewal}
                          onChange={(e) => handleInputChange('agreedToAutoRenewal', e.target.checked)}
                          className="mt-1 mr-3 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-600 cursor-pointer"
                        />
                        <span className="text-sm text-gray-700">
                          I agree to the{' '}
                          <a href="#" className="text-blue-600 hover:underline cursor-pointer">
                            Auto-Renewal and Upgrade Disclosure
                          </a>{' '}
                          terms including annual billing and related charges
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleNext}
                  className="w-full mt-8 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded font-semibold transition-colors cursor-pointer"
                >
                  Create Account
                </button>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <div className="max-w-md w-full">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Account created!</h2>
                  <p className="text-gray-600">Continue building your account.</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6 mb-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Continue with registration</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Create Account</div>
                        <div className="text-sm text-gray-600">Set up your login</div>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center mr-3 mt-0.5 text-sm font-semibold">
                        1
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Find Client Connections</div>
                        <div className="text-sm text-gray-600">Connect with you clients</div>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center mr-3 mt-0.5 text-sm font-semibold">
                        2
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Service Evaluation</div>
                        <div className="text-sm text-gray-600">Add trades and services</div>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center mr-3 mt-0.5 text-sm font-semibold">
                        3
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Checkout</div>
                        <div className="text-sm text-gray-600">Add payment method and submit payment</div>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleNext}
                  className="w-full py-3 bg-blue-700 hover:bg-blue-800 text-white rounded font-semibold transition-colors cursor-pointer"
                >
                  Connect to Clients
                </button>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="flex gap-6">
                <div className="flex-1">
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Find Connections</h2>
                    <p className="text-gray-600 mb-6">
                      Find and add client connections using the search bar.<br />
                      Easily manage them in the 'Manage Connections' panel.
                    </p>

                    <div className="flex gap-2 mb-6">
                      <div className="flex-1 relative">
                        <input
                          type="text"
                          value={formData.searchQuery}
                          onChange={(e) => handleInputChange('searchQuery', e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                          placeholder="Search by client or site name"
                        />
                      </div>
                      <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 text-sm font-medium cursor-pointer">
                        mi
                      </button>
                      <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 text-sm font-medium cursor-pointer">
                        km
                      </button>
                    </div>

                    <div className="space-y-3">
                      {mockConnections.map((connection) => {
                        const isAdded = formData.addedConnections.some(c => c.id === connection.id);
                        return (
                          <div key={connection.id} className="flex items-center justify-between p-4 border border-gray-200 rounded hover:border-gray-300">
                            <div className="flex items-center flex-1">
                              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-semibold mr-4">
                                {connection.initials}
                              </div>
                              <div>
                                <div className="font-semibold text-gray-900">{connection.name}</div>
                                <div className="text-sm text-gray-600">
                                  {connection.distance} • {connection.address}
                                </div>
                              </div>
                            </div>
                            <button
                              onClick={() => toggleConnection(connection)}
                              className={`px-6 py-2 rounded font-medium transition-colors cursor-pointer ${
                                isAdded
                                  ? 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                                  : 'bg-blue-700 text-white hover:bg-blue-800'
                              }`}
                            >
                              {isAdded ? 'Added' : 'Add'}
                            </button>
                          </div>
                        );
                      })}
                    </div>

                    <button className="mt-6 w-full py-3 border-2 border-blue-600 text-blue-600 rounded font-semibold hover:bg-blue-50 transition-colors cursor-pointer">
                      Load more
                    </button>
                  </div>
                </div>

                <div className="w-80 flex-shrink-0">
                  <div className="bg-white rounded-lg shadow-sm p-6 sticky top-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Manage Connections</h3>
                    <p className="text-sm text-gray-600 mb-6">
                      Manage added and removed client connections here.<br />
                      At least one active connection is required.
                    </p>

                    <div className="flex border-b border-gray-200 mb-4">
                      <button className="pb-2 px-4 border-b-2 border-blue-600 text-blue-600 font-semibold text-sm cursor-pointer">
                        Added <span className="ml-1">{formData.addedConnections.length}</span>
                      </button>
                      <button className="pb-2 px-4 text-gray-600 font-semibold text-sm cursor-pointer">
                        Removed <span className="ml-1">0</span>
                      </button>
                    </div>

                    <div className="space-y-3">
                      {formData.addedConnections.map((connection) => (
                        <div key={connection.id} className="flex items-center justify-between p-3 border border-gray-200 rounded">
                          <span className="text-sm font-medium text-gray-900">{connection.name}</span>
                          <button
                            onClick={() => toggleConnection(connection)}
                            className="text-red-600 hover:text-red-700 cursor-pointer"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      ))}
                      {formData.addedConnections.length === 0 && (
                        <div className="text-center py-8 text-gray-500 text-sm">
                          No connections added yet
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
                  Secure Checkout
                  <svg className="w-5 h-5 ml-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </h1>
              </div>

              <div className="flex gap-6">
                <div className="flex-1">
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="font-bold text-gray-900 mb-4">Add Payment Method</h3>
                    
                    <div className="border-2 border-blue-600 rounded-lg p-4 mb-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <input type="radio" checked className="w-4 h-4 text-blue-600 mr-3 cursor-pointer" />
                          <div>
                            <div className="font-semibold text-gray-900">Credit / Debit Card</div>
                            <div className="text-xs text-gray-600 flex items-center">
                              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                              </svg>
                              Credit Card Processing Fee
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <div className="w-12 h-8 rounded border border-gray-300 bg-gradient-to-br from-blue-800 to-blue-900 flex items-center justify-center text-white text-xs font-bold opacity-40">VISA</div>
                          <div className="w-12 h-8 rounded border border-gray-300 flex items-center justify-center opacity-40">
                            <div className="w-4 h-4 rounded-full bg-red-500 -mr-2"></div>
                            <div className="w-4 h-4 rounded-full bg-orange-500"></div>
                          </div>
                          <div className="w-12 h-8 rounded border border-gray-300 bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center text-white text-xs font-bold opacity-40">AMEX</div>
                          <div className="w-12 h-8 rounded border border-gray-300 bg-gradient-to-r from-orange-400 to-orange-600 flex items-center justify-center opacity-40">
                            <div className="w-3 h-2 bg-white rounded-sm"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Credit/Debit Card Details</h4>
                      <div className="flex gap-2 mb-4">
                        <div className="w-14 h-10 rounded border-2 border-gray-300 bg-gray-50 flex items-center justify-center opacity-50">
                          <div className="w-8 h-6 bg-gradient-to-br from-blue-800 to-blue-900 rounded"></div>
                        </div>
                        <div className="w-14 h-10 rounded border-2 border-gray-300 bg-gray-50 flex items-center justify-center opacity-50">
                          <div className="flex -space-x-2">
                            <div className="w-4 h-4 rounded-full bg-red-400"></div>
                            <div className="w-4 h-4 rounded-full bg-orange-400"></div>
                          </div>
                        </div>
                        <div className="w-14 h-10 rounded border-2 border-gray-300 bg-gray-50 flex items-center justify-center opacity-50">
                          <div className="w-8 h-6 bg-gradient-to-r from-blue-400 to-blue-600 rounded"></div>
                        </div>
                        <div className="w-14 h-10 rounded border-2 border-gray-300 bg-gray-50 flex items-center justify-center opacity-50">
                          <div className="w-8 h-6 bg-gradient-to-r from-orange-400 to-orange-600 rounded"></div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Card Type</label>
                            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                            <input type="text" className="w-full px-4 py-2 border-l-4 border-l-green-500 border-t border-b border-r border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600" />
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Expiration Date</label>
                            <div className="flex gap-2">
                              <select className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 cursor-pointer">
                                <option>Month</option>
                                <option value="01">01 - January</option>
                                <option value="02">02 - February</option>
                                <option value="03">03 - March</option>
                                <option value="04">04 - April</option>
                                <option value="05">05 - May</option>
                                <option value="06">06 - June</option>
                                <option value="07">07 - July</option>
                                <option value="08">08 - August</option>
                                <option value="09">09 - September</option>
                                <option value="10">10 - October</option>
                                <option value="11">11 - November</option>
                                <option value="12">12 - December</option>
                              </select>
                              <span className="flex items-center">/</span>
                              <select className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 cursor-pointer">
                                <option>Year</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                                <option value="2026">2026</option>
                                <option value="2027">2027</option>
                                <option value="2028">2028</option>
                                <option value="2029">2029</option>
                                <option value="2030">2030</option>
                                <option value="2031">2031</option>
                                <option value="2032">2032</option>
                                <option value="2033">2033</option>
                                <option value="2034">2034</option>
                              </select>
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                            <input type="text" className="w-full px-4 py-2 border-l-4 border-l-green-500 border-t border-b border-r border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Cardholder Name</label>
                            <input type="text" className="w-full px-4 py-2 border-l-4 border-l-green-500 border-t border-b border-r border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600" />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                            <select className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 cursor-pointer">
                              <option>- Select One -</option>
                              <option value="us">United States</option>
                              <option value="ca">Canada</option>
                              <option value="uk">United Kingdom</option>
                              <option value="au">Australia</option>
                              <option value="de">Germany</option>
                              <option value="fr">France</option>
                              <option value="mx">Mexico</option>
                              <option value="jp">Japan</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                            <input type="text" className="w-full px-4 py-2 border-l-4 border-l-green-500 border-t border-b border-r border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600" />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Address 1</label>
                            <input type="text" className="w-full px-4 py-2 border-l-4 border-l-green-500 border-t border-b border-r border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Address 2</label>
                            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600" />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                            <input type="text" className="w-full px-4 py-2 border-l-4 border-l-green-500 border-t border-b border-r border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Postal Code</label>
                            <input type="text" className="w-full px-4 py-2 border-l-4 border-l-green-500 border-t border-b border-r border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600" />
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 text-xs text-gray-600 flex items-start">
                        <span className="mr-2 text-green-600 font-bold">=</span>
                        <span>Required Field</span>
                      </div>
                    </div>

                    <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded mb-6">
                      All payment methods on file are encrypted, secure, and protected. We use this information to register your membership and optimize the setup of your Atteva account. No future charges will be made without your authorization. You can change your payment method at any time within your profile. This step is optional but recommended.
                    </div>

                    <button 
                      onClick={handleNext}
                      className="w-full py-3 bg-blue-700 hover:bg-blue-800 text-white rounded font-semibold mb-3 cursor-pointer transition-colors"
                    >
                      <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      Save and Continue
                    </button>

                    <button className="w-full text-blue-600 hover:underline font-semibold cursor-pointer">
                      Register Without Saving Payment →
                    </button>
                  </div>
                </div>

                <div className="w-80 flex-shrink-0">
                  <div className="bg-white rounded-lg shadow-sm p-6 sticky top-6">
                    <h3 className="font-bold text-gray-900 mb-4">Order Summary</h3>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900">Premier Membership</div>
                          <button className="text-xs text-gray-500 hover:underline mt-1">ⓘ</button>
                        </div>
                        <div className="font-bold text-lg">$4,950.00 USD</div>
                      </div>

                      <div className="border-t pt-3">
                        <button className="flex items-center justify-between w-full text-sm font-medium text-gray-700 cursor-pointer mb-2">
                          <span>Connections (1)</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        <div className="pl-4">
                          <div className="flex items-center justify-between text-sm py-1">
                            <span className="text-gray-600">ACME Foods Inc. - Northwest Site</span>
                            <button className="text-red-600 hover:text-red-700 cursor-pointer text-lg">×</button>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between text-sm pt-2">
                        <span className="text-gray-600">Activation Fee</span>
                        <span className="font-medium">$299.00 USD</span>
                      </div>

                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Credit Card Processing Fee (2.9%)</span>
                        <span className="font-medium">$157.47 USD</span>
                      </div>

                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Tax</span>
                        <span className="font-medium">$0.00 USD</span>
                      </div>

                      <div className="border-t pt-3 flex justify-between font-bold text-xl">
                        <span>Total</span>
                        <span>$5,406.47 USD</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <input
                        type="text"
                        placeholder="Coupon Code"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 mb-2"
                      />
                      <button className="w-full py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 font-medium cursor-pointer">
                        Apply
                      </button>
                    </div>

                    <div className="border-t pt-4 mb-4">
                      <label className="flex items-start cursor-pointer">
                        <input type="checkbox" className="mt-1 mr-3 w-4 h-4 cursor-pointer" />
                        <div>
                          <div className="font-semibold text-gray-900 mb-1">
                            Upgrade to Atteva Vetify
                            <span className="ml-2 text-lg">+ $749.00</span>
                          </div>
                          <div className="text-xs text-gray-600 bg-blue-50 p-3 rounded flex items-start">
                            <svg className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Premium support designed to save you time and money by expediting the review process and ongoing account maintenance. <a href="#" className="text-blue-600 hover:underline cursor-pointer">View Details</a></span>
                          </div>
                        </div>
                      </label>
                    </div>

                    <button className="w-full py-2 text-blue-600 hover:bg-blue-50 rounded font-medium flex items-center justify-center cursor-pointer">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Download Invoice PDF
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 7:
        return (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <div className="max-w-2xl w-full text-center">
              <div className="bg-white rounded-lg shadow-sm p-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-10 h-10 text-green-600" />
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Thank You!</h1>
                <p className="text-xl text-gray-600 mb-8">
                  Your registration is complete. This usability test has ended.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <p className="text-gray-700">
                    Thank you for participating in this usability test. Your feedback helps us improve the registration experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center mr-2">
              <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 transform rotate-45 mr-1"></div>
              <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 transform -rotate-12"></div>
            </div>
            <span className="text-xl font-semibold">
              {currentStep === 0 || currentStep === 1 || currentStep === 2 || currentStep === 3 
                ? 'Register for Atteva' 
                : currentStep === 7
                ? 'Atteva Registration Complete'
                : 'Atteva Registration'}
            </span>
          </div>
          <div className="flex items-center gap-4">
            {(currentStep === 0 || currentStep === 1 || currentStep === 2 || currentStep === 3) && !showLogin && (
              <a href="#" className="text-white hover:underline text-sm cursor-pointer">
                Have an account? <span className="font-semibold">Log in</span>
              </a>
            )}
            {showLogin && (
              <button 
                onClick={() => setShowLogin(false)}
                className="text-white hover:underline text-sm cursor-pointer"
              >
                Don't have an account? <span className="font-semibold">Register</span>
              </button>
            )}
            {currentStep >= 4 && currentStep <= 6 && (
              <button className="w-10 h-10 bg-white text-blue-900 rounded-full flex items-center justify-center font-semibold cursor-pointer">
                AS
              </button>
            )}
          </div>
        </div>
      </header>

      {currentStep >= 4 && currentStep <= 6 && (
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between max-w-2xl mx-auto">
              {[
                { number: 1, name: 'Find Connections', active: currentStep === 5 },
                { number: 2, name: 'Service Evaluation', active: currentStep === 5.5 },
                { number: 3, name: 'Checkout', active: currentStep === 6 },
              ].map((step, index) => (
                <React.Fragment key={step.number}>
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm ${
                      currentStep === 5 && step.number === 1
                        ? 'bg-blue-600 text-white'
                        : currentStep === 6 && step.number === 3
                        ? 'bg-blue-600 text-white'
                        : currentStep > 5 && step.number < 3
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {(currentStep === 6 && step.number === 1) || (currentStep > 6 && step.number < 3) ? (
                        <Check className="w-5 h-5" />
                      ) : (
                        step.number
                      )}
                    </div>
                    <span className={`ml-3 text-sm font-medium ${
                      step.active ? 'text-gray-900' : 'text-gray-500'
                    }`}>
                      {step.name}
                    </span>
                  </div>
                  {index < 2 && (
                    <div className={`flex-1 h-0.5 mx-4 ${
                      currentStep > 5 && step.number === 1 ? 'bg-green-500' : 'bg-gray-200'
                    }`} />
                  )}
                </React.Fragment>
              ))}
              {currentStep === 5 && (
                <button
                  onClick={handleNext}
                  className="ml-6 px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded font-medium cursor-pointer"
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      <main>
        {renderStepContent()}
      </main>

      {currentStep >= 4 && currentStep <= 6 && (
        <div className="fixed bottom-6 right-6 flex gap-3">
          <button className="w-12 h-12 bg-white border-2 border-blue-600 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-50 shadow-lg cursor-pointer">
            <MessageSquare className="w-5 h-5" />
          </button>
          <button className="w-12 h-12 bg-white border-2 border-blue-600 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-50 shadow-lg cursor-pointer">
            <Phone className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
};

export default AvettaRegistrationPrototype;
