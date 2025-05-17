import Link from 'next/link';

export default function ThankYou() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#626F47]/90 via-[#A4B465]/80 to-[#FFCF50]/30">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full text-center">
        <div className="w-16 h-16 bg-[#A4B465] rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        
        <h1 className="text-3xl font-bold text-[#626F47] mb-4">Thank You!</h1>
        
        <p className="text-gray-600 mb-6">
          Your message has been successfully sent. I'll get back to you as soon as possible.
        </p>
        
        <div className="bg-[#FEFAE0] p-4 rounded-md mb-6">
          <p className="text-[#626F47] font-medium">A confirmation email has been sent to:</p>
          <p className="font-mono bg-white p-2 rounded mt-2 text-gray-700">yadavsuryakala517@gmail.com</p>
        </div>
        
        <Link href="/" className="bg-[#626F47] hover:bg-[#A4B465] text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 inline-block">
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}
