import React from 'react';

const LiveCourseBenefits = () => {
  return (
    <div className="container flex flex-col items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <p className="text-3xl font-bold text-black text-center md:text-4xl">
          কি কি পাচ্ছেন লাইভ কোর্সে
        </p>
        <p className="text-base text-gray-600 text-center">
          দেখে নিন কি কি পাচ্ছেন ওস্তাদের লাইভ কোর্সে জয়েন করলে
        </p>
      </div>

      <div className="p-0 md:p-4 gap-1 rounded-md shadow-lg w-full grid grid-cols-2 md:gap-8 lg:grid-cols-3 bg-transparent">
        {/* First Item */}
        <div className="flex w-full h-full p-2 md:p-3 flex-col items-center justify-start gap-2 bg-white border border-gray-200">
          <img className="w-8 md:w-14" src="https://cdn.ostad.app/public/upload/2023-09-26T07-03-07.734Z-icon-1.png" alt="ইন্ডাস্ট্রি ফোকাসড লাইভ কোর্সেস" />
          <div className="flex flex-col w-full items-center gap-1">
            <p className="text-base md:text-lg font-bold text-black text-center">
              ইন্ডাস্ট্রি ফোকাসড লাইভ কোর্সেস
            </p>
            <p className="hidden md:block text-sm text-gray-600 text-center">
              জয়েন করুন গাইডলাইন সমৃদ্ধ ইন্ডাস্ট্রি ফোকাসড লাইভ কোর্সে, শুরু করুন আপনার ক্যারিয়ারের জার্নি।
            </p>
          </div>
        </div>

        {/* Second Item */}
        <div className="flex w-full h-full p-2 md:p-3 flex-col items-center justify-start gap-2 bg-white border border-gray-200">
          <img className="w-8 md:w-14" src="https://cdn.ostad.app/public/upload/2023-09-26T07-03-27.927Z-icon-2.png" alt="ইন্টারেকটিভ লাইভ ক্লাস" />
          <div className="flex flex-col w-full items-center gap-1">
            <p className="text-base md:text-lg font-bold text-black text-center">
              ইন্টারেকটিভ লাইভ ক্লাস
            </p>
            <p className="hidden md:block text-sm text-gray-600 text-center">
              ইন্ডাস্ট্রি এক্সপার্টদের সাথে নিয়মিত লাইভ ক্লাস, কনসেপচুয়াল ক্লাস আর সাপোর্ট ক্লাসে স্কিল ডেভেলপমেন্ট এখন হবে একদম পরিপুর্ন।
            </p>
          </div>
        </div>

        {/* Third Item */}
        <div className="flex w-full h-full p-2 md:p-3 flex-col items-center justify-start gap-2 bg-white border border-gray-200">
          <img className="w-8 md:w-14" src="https://cdn.ostad.app/public/upload/2023-09-26T07-03-45.997Z-icon-3.png" alt="মডিউল ভিত্তিক স্টাডি প্ল্যান" />
          <div className="flex flex-col w-full items-center gap-1">
            <p className="text-base md:text-lg font-bold text-black text-center">
              মডিউল ভিত্তিক স্টাডি প্ল্যান
            </p>
            <p className="hidden md:block text-sm text-gray-600 text-center">
              কুইজ, এসাইনমেন্ট আর লাইভ এক্সাম দিয়ে সাজানো মডিউলভিত্তিক গোছানো স্টাডিপ্ল্যানের সাথে ছিটকে পড়ার কোনো চান্সই নেই।
            </p>
          </div>
        </div>

        {/* Fourth Item */}
        <div className="flex w-full h-full p-2 md:p-3 flex-col items-center justify-start gap-2 bg-white border border-gray-200">
          <img className="w-8 md:w-14" src="https://cdn.ostad.app/public/upload/2023-09-26T07-04-03.737Z-icon-4.png" alt="রিয়েলটাইম প্রোগ্রেস ট্র্যাকিং" />
          <div className="flex flex-col w-full items-center gap-1">
            <p className="text-base md:text-lg font-bold text-black text-center">
              রিয়েলটাইম প্রোগ্রেস ট্র্যাকিং
            </p>
            <p className="hidden md:block text-sm text-gray-600 text-center">
              ট্র্যাক করুন আপনার প্রোগ্রেস রিয়েল টাইম, দেখে নিন লিডার বোর্ডে আপনার পজিশন আর কম্পিটিশনে এগিয়ে যান সবার থেকে।
            </p>
          </div>
        </div>

        {/* Fifth Item */}
        <div className="flex w-full h-full p-2 md:p-3 flex-col items-center justify-start gap-2 bg-white border border-gray-200">
          <img className="w-8 md:w-14" src="https://cdn.ostad.app/public/upload/2023-09-26T07-04-21.951Z-icon-5.png" alt="শিখুন ইন্ডাস্ট্রি এক্সপার্টদের থেকে লাইভে" />
          <div className="flex flex-col w-full items-center gap-1">
            <p className="text-base md:text-lg font-bold text-black text-center">
              শিখুন ইন্ডাস্ট্রি এক্সপার্টদের থেকে লাইভে
            </p>
            <p className="hidden md:block text-sm text-gray-600 text-center">
              স্কিল ডেভেলপ করুন ইন্ডাস্ট্রির সেরা এক্সপার্টদের সাথে, প্রশ্ন করুন আর শিখে নিন সরাসরি, লাইভে।
            </p>
          </div>
        </div>

        {/* Sixth Item */}
        <div className="flex w-full h-full p-2 md:p-3 flex-col items-center justify-start gap-2 bg-white border border-gray-200">
          <img className="w-8 md:w-14" src="https://cdn.ostad.app/public/upload/2023-09-26T07-04-44.253Z-icon-6.png" alt="ইন্টেন্সিভ জব প্লেসমেন্ট সাপোর্ট" />
          <div className="flex flex-col w-full items-center gap-1">
            <p className="text-base md:text-lg font-bold text-black text-center">
              ইন্টেন্সিভ জব প্লেসমেন্ট সাপোর্ট
            </p>
            <p className="hidden md:block text-sm text-gray-600 text-center">
              কোর্স কমপ্লিটে পাচ্ছেন জব প্লেসমেন্ট টিমের থেকে লাইফটাইম সিভি, প্রোফাইল বিল্ড এবং জব এপ্লিকেশনসহ ইন্টেন্সিভ জব প্লেসমেন্ট সাপোর্ট।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveCourseBenefits;
