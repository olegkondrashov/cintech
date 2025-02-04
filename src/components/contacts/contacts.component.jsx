import React from "react";

const Contacts = () => {
    return (
        <section id="contacts" className="w-full py-36">
            {/* <MainBg/> */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 backdrop-blur-md">

                {/* Ansprechpartner */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 text-center uppercase mb-4">
                        Ansprechpartner
                    </h2>
                    <div className="flex flex-col md:flex-row items-center justify-evenly gap-6">
                        {/* Card: Andreas Wedler */}
                        <div className=" p-6 text-center md:text-left">
                            <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                Andreas Wedler
                            </h3>
                            <p className="text-sm text-gray-600 mb-2">Geschäftsführung</p>
                            <p className="text-gray-700 mb-1">
                                <strong>Mobil:</strong> 0170/2369212
                            </p>
                            <p className="text-gray-700">
                                <strong>Mail:</strong>{" "}
                                <a
                                    href="mailto:wedler@cintech.de"
                                    className="text-blue-500 hover:underline"
                                >
                                    wedler@cintech.de
                                </a>
                            </p>
                        </div>

                        {/* Card: Matthias Schernell */}
                        <div className="p-6 text-center md:text-left">
                            <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                Matthias Schernell
                            </h3>
                            <p className="text-sm text-gray-600 mb-2">
                                Azubi Fachinformatiker
                            </p>
                            <p className="text-gray-700 mb-1">
                                <strong>Telefon:</strong> 05323/987427
                            </p>
                            <p className="text-gray-700">
                                <strong>Mail:</strong>{" "}
                                <a
                                    href="mailto:m.schernell@cintech.biz"
                                    className="text-blue-500 hover:underline"
                                >
                                    m.schernell@cintech.biz
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;
