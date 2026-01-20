import React from 'react'

function About() {
    return (
        <div className="py-20 bg-gray-50">
            <div className="container mx-auto px-6 md:px-12 xl:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Image */}
                    <div className="flex justify-center lg:justify-start">
                        <img
                            src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1400&q=80"
                            alt="Developers working together"
                            className="w-full max-w-xl rounded-3xl shadow-2xl object-cover"
                        />
                    </div>

                    {/* Text */}
                    <div className="space-y-6 text-center lg:text-left">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                            accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                            aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
                        </p>
                        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                            Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default About
