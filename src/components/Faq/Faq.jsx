import React from 'react';

const Faq = () => {
    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
                    <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                    <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">What do DegsKing courses include?</summary>
                            <div className="px-4 pb-4">
                                <p>
                                    
                                Each DegsKing course is created, and managed by the instructor(s). The foundation of each DegsKing course are its lectures, which can include videos, slides, and text. In addition, instructors can add resources and various types of practice activities, as a way to enhance the learning experience of you. 
                                </p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">How do I take a DegsKing course?</summary>
                            <div className="px-4 pb-4">
                                <p>
                                DegsKing courses are entirely FREE and you can be accessed from several different devices and platforms, including a desktop, laptop, mobile, etc.

                                </p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">Where can I go for help?</summary>
                            <div className="px-4 pb-4 space-y-2">
                                <p>
                                    Just send the email to hello@sandipandas.net.
                                </p>
                            </div>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Faq;