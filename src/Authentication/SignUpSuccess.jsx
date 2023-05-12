import React from 'react';

const SignUpSuccess = ({next}) => {
  return (
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            You're all set!
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Thanks for signing up. We've sent a confirmation email to your inbox.
            Wait for the admin to approve your account.
          </p>
        </div>
        <div className="mt-8">
          <div className="flex justify-center">
            <button
              className="bg-indigo-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-indigo-600 transition duration-150 ease-in-out"
              onClick={() => window.location.href = '/'}
            >
              Go to Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpSuccess;
