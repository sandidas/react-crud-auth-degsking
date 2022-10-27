import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="p-4 mb-5 shadow-md dark:bg-gray-900 dark:text-gray-100">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <a rel="noopener noreferrer" href="#" className="block">
                            <h3 className="text-xl font-semibold dark:text-violet-400">What is cors</h3>
                        </a>


                        <p className="leading-snug dark:text-gray-400">
                            CORS stands for Cross-Origin Resource Sharing. It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.
                        </p>

                        <p className="leading-snug dark:text-gray-400">
                            In other words, CORS is a browser security feature that restricts cross-origin HTTP requests with other servers and specifies which domains access your resources.
                        </p>

                    </div>
                </div>
            </div>



            <div className="p-4 mb-5 shadow-md dark:bg-gray-900 dark:text-gray-100">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <a rel="noopener noreferrer" href="#" className="block">
                            <h3 className="text-xl font-semibold dark:text-violet-400">Why are you using firebase? What other options do you have to implement authentication?</h3>
                        </a>
                        <p className="leading-snug dark:text-gray-400">
                            The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.
                        </p>

                        <p className="leading-snug dark:text-gray-400">
                            <strong>Firebase Alternative</strong> <br />
                            <ul>
                                <li>Back4App</li>
                                <li>Backendless</li>
                                <li>Kuzzle</li>
                                <li>Pubnub</li>
                                <li>Kumulos</li>
                            </ul>
                        </p>

                        <p className="leading-snug dark:text-gray-400">

                        </p>

                    </div>
                </div>
            </div>



            <div className="p-4 mb-5 shadow-md dark:bg-gray-900 dark:text-gray-100">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <a rel="noopener noreferrer" href="#" className="block">
                            <h3 className="text-xl font-semibold dark:text-violet-400">How does the private route work?</h3>
                        </a>
                        <p className="leading-snug dark:text-gray-400">
                            The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
                        </p>
                    </div>
                </div>
            </div>



            <div className="p-4 mb-5 shadow-md dark:bg-gray-900 dark:text-gray-100">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <a rel="noopener noreferrer" href="#" className="block">
                            <h3 className="text-xl font-semibold dark:text-violet-400">What is Node? How does Node work?</h3>
                        </a>


                        <p className="leading-snug dark:text-gray-400">
                            Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                        </p>
                        <p className="leading-snug dark:text-gray-400">
                            Working of Node.js: Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.

                            Node.js basically works on two concept
                            <ul>


                                <li>Asynchronous</li>
                                <li>Non-blocking I/O</li>
                            </ul>


                            Non-blocking I/o: Non-blocking i/o  means working with multiple requests without blocking the thread for a single request. I/O basically interacts with external systems such as files, databases. Node.js is not used for CPU-intensive work means for calculations, video processing because a single thread cannot handle the CPU works.
                        </p>

                    </div>
                </div>
            </div>




        </div>
    );
};

export default Blog;