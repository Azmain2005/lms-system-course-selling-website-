import React from "react";

const Testimonials = () => {
  return (
    <div className="mt-20">
      <section className="container w-full py-10 md:py-16 shadow-xl">
        <div className="w-full px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[1150px] xl:max-w-[1150px]">
          <div className="flex flex-col items-center gap-4 md:gap-10">
            <div className="flex flex-col items-center gap-4">
              <h1 className="text-ostad-black-100 text-h1 text-3xl font-bold text-center">
                দেখে নিন কি বলছেন Break the Fear গ্র্যাজুয়েটরা
              </h1>
              <p className="text-body-paragraph text-ostad-black-80 text-center">
                ২০০০+ গ্র্যাজুয়েট যারা পেয়েছেন জব, দেখে নিন কি বলছেন তাদের একাংশ
              </p>
            </div>
            <div className="w-full flex lg:flex-row flex-col justify-center gap-3">
              <div className="flex flex-col gap-3 justify-start w-full xl:min-w-[276px] xl:w-[276px] lg:min-w-[218px] lg:w-[218px]">
                {/* Testimonial 1 */}
                <div className="w-full flex flex-col items-start p-3 gap-2 rounded-lg border border-ostad-black-overlay bg-white shadow-lg">
                  <p className="text-body-b2 text-ostad-black-40 text-justify">
                    ওস্তাদ-এর MERN কোর্সটি স্কিল ডেভেলপমেন্টের জন্য অনেক
                    হেল্পফুল একটি কোর্স। আমার প্রতিটি প্রবলেমই তারা লাইভ ক্লাসেই
                    সলভ করার চেষ্টা করেছে। এছাড়াও সাপোর্ট ইন্সট্রাক্টররাও অনেক
                    ভালো। এসব কারণেই MERN এর লার্নিং জার্নিটা আমার জন্য ছিল
                    অসাধারণ।
                  </p>
                  <div className="horizontal-line my-0"></div>
                  <div className="flex justify-between items-center gap-2 w-full">
                    <div className="flex flex-wrap items-center gap-2">
                      <div className="flex items-center justify-center min-w-10 max-w-10 h-10 object-cover rounded-full">
                        <div className="rounded-full h-8 w-8 relative">
                          <div className="w-full h-full flex justify-center items-center shrink-0 bg-ostad-black-80 rounded-full">
                            <p className="text-body-b2 text-center text-white">
                              FA
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-subtitle-s2 text-ostad-black-80 whitespace-nowrap">
                          Faisal Azam Siddiqui
                        </p>
                        <p className="text-caption1 text-ostad-black-80">
                          Full Stack Web Development with MERN Batch 1
                        </p>
                      </div>
                    </div>
                    <div className="w-8 h-8 min-w-8">
                      <img
                        src="https://cdn.ostad.app/public/upload/2024-02-27T06-59-01.071Z-quote-up-circle-boom.svg"
                        alt="quote"
                      />
                    </div>
                  </div>
                </div>

                {/* Testimonial 2 */}
                <div className="w-full flex flex-col items-start p-3 gap-2 rounded-lg border border-ostad-black-overlay bg-white shadow-lg">
                  <p className="text-body-b2 text-ostad-black-40 text-justify">
                    এই কোর্সটি হচ্ছে আমার লাইফে করা one of the best course।
                    লার্নিং এক্সপিরিয়েন্স বলেন বা ওস্তাদ টিমের সাপোর্ট বলেন, সবই
                    ছিল অসাধারণ। একদম বেসিক থেকে এত সুন্দরভাবে ডিটেইলস শেখানো
                    হয়েছে, যে আমি অনেক কিছুই শেখার সুযোগ পেয়েছি।
                  </p>
                  <div className="horizontal-line my-0"></div>
                  <div className="flex justify-between items-center gap-2 w-full">
                    <div className="flex flex-wrap items-center gap-2">
                      <div className="flex items-center justify-center min-w-10 max-w-10 h-10 object-cover rounded-full">
                        <div className="rounded-full h-8 w-8 relative overflow-hidden">
                          <img
                            className="rounded-full aspect-square object-cover w-full"
                            src="https://cdn.ostad.app/public/upload/2023-08-06T10-43-26.987Z-2023-02-18T16-19-36.508Z-331049670_5912973425465146_8220712743907257929_n.jpg"
                            alt="Jahid Hossain"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-subtitle-s2 text-ostad-black-80 whitespace-nowrap">
                          Jahid Hossain
                        </p>
                        <p className="text-caption1 text-ostad-black-80">
                          Full Stack Web Development with MERN Batch 2
                        </p>
                      </div>
                    </div>
                    <div className="w-8 h-8 min-w-8">
                      <img
                        src="https://cdn.ostad.app/public/upload/2024-02-27T06-59-01.071Z-quote-up-circle-boom.svg"
                        alt="quote"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 justify-start w-full grow">
                {/* Testimonial 3 */}
                <div className="w-full flex flex-col items-start p-3 gap-2 rounded-lg border border-ostad-black-overlay bg-white shadow-lg">
                  <p className="text-body-b2 text-ostad-black-40 text-justify">
                    Ostad এর বিশেষত্ত্ব হচ্ছে ওনারা ডিজাইনের চেয়েও ডিজাইন
                    সাইকোলজিতে ফোকাস বেশি দেয়। যা একজন শিক্ষার্থীর চাকরির
                    ক্ষেত্রে খুব কাজে দেয় ও অন্য দশজন থেকে নিজেকে আলাদা করা যায়।
                    ইন্ডাস্ট্রি ফোকাসড এই প্র্যাক্টিস আমাকে প্রোফেশনালি অনেক
                    হেল্প করেছে।
                  </p>
                  <div className="horizontal-line my-0"></div>
                  <div className="flex justify-between items-center gap-2 w-full">
                    <div className="flex flex-wrap items-center gap-2">
                      <div className="flex items-center justify-center min-w-10 max-w-10 h-10 object-cover rounded-full">
                        <div className="rounded-full h-8 w-8 relative">
                          <div className="w-full h-full flex justify-center items-center shrink-0 bg-ostad-black-80 rounded-full">
                            <p className="text-body-b2 text-center text-white">
                              SR
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-subtitle-s2 text-ostad-black-80 whitespace-nowrap">
                          Shafayet Rana
                        </p>
                        <p className="text-caption1 text-ostad-black-80">
                          UX/UI Batch 6
                        </p>
                      </div>
                    </div>
                    <div className="w-8 h-8 min-w-8">
                      <img
                        src="https://cdn.ostad.app/public/upload/2024-02-27T06-59-01.071Z-quote-up-circle-boom.svg"
                        alt="quote"
                      />
                    </div>
                  </div>
                </div>

                {/* Testimonial 4 and 5 in two-column layout */}
                <div className="w-full flex flex-col justify-between items-start gap-3 lg:flex-row">
                  {/* Testimonial 4 */}
                  <div className="w-full flex flex-col justify-between items-start gap-3 xl:w-1/2">
                    <div className="w-full flex flex-col items-start p-3 gap-2 rounded-lg border border-ostad-black-overlay bg-white shadow-lg">
                      <p className="text-body-b2 text-ostad-black-40 text-justify">
                        Even though I come from a non-CS background, I felt that
                        understanding data science would help me advance in my
                        profession. In order to do so, I enrolled in an Ostad
                        Data Science course. I believed it would be tough for me
                        to understand without prior knowledge, but after taking
                        the Ostad Data course, I learned that it is simple to
                        crack and that they made it even easier.
                      </p>
                      <div className="horizontal-line my-0"></div>
                      <div className="flex justify-between items-center gap-2 w-full">
                        <div className="flex flex-wrap items-center gap-2">
                          <div className="flex items-center justify-center min-w-10 max-w-10 h-10 object-cover rounded-full">
                            <div className="rounded-full h-8 w-8 relative">
                              <div className="w-full h-full flex justify-center items-center shrink-0 bg-ostad-black-80 rounded-full">
                                <p className="text-body-b2 text-center text-white">
                                  MG
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <p className="text-subtitle-s2 text-ostad-black-80 whitespace-nowrap">
                              MD Galib Hasan
                            </p>
                            <p className="text-caption1 text-ostad-black-80">
                              Data Science Certificate Program Batch 09
                            </p>
                          </div>
                        </div>
                        <div className="w-8 h-8 min-w-8">
                          <img
                            src="https://cdn.ostad.app/public/upload/2024-02-27T06-59-01.071Z-quote-up-circle-boom.svg"
                            alt="quote"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial 5 */}
                  <div className="w-full flex flex-col justify-between items-start gap-3 xl:w-1/2">
                    <div className="w-full flex flex-col items-start p-3 gap-2 rounded-lg border border-ostad-black-overlay bg-white shadow-lg">
                      <p className="text-body-b2 text-ostad-black-40 text-justify">
                        I am glad I completed the course successfully and
                        received valuable knowledge about the field of Web
                        Development. I am grateful to Ostad for this course.
                        After finishing the course, I applied for jobs and
                        cracked them easily. This course helped me not just to
                        learn but also to grow as a professional. They provided
                        the knowledge I required for the job.
                      </p>
                      <div className="horizontal-line my-0"></div>
                      <div className="flex justify-between items-center gap-2 w-full">
                        <div className="flex flex-wrap items-center gap-2">
                          <div className="flex items-center justify-center min-w-10 max-w-10 h-10 object-cover rounded-full">
                            <div className="rounded-full h-8 w-8 relative">
                              <div className="w-full h-full flex justify-center items-center shrink-0 bg-ostad-black-80 rounded-full">
                                <p className="text-body-b2 text-center text-white">
                                  JS
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <p className="text-subtitle-s2 text-ostad-black-80 whitespace-nowrap">
                              Jahidul Islam
                            </p>
                            <p className="text-caption1 text-ostad-black-80">
                              Full Stack Web Development with MERN Batch 1
                            </p>
                          </div>
                        </div>
                        <div className="w-8 h-8 min-w-8">
                          <img
                            src="https://cdn.ostad.app/public/upload/2024-02-27T06-59-01.071Z-quote-up-circle-boom.svg"
                            alt="quote"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
