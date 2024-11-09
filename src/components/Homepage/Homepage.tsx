import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Car,
  Clock,
  CreditCard,
  MapPin,
  Shield,
  Star,
  Users,
} from "lucide-react";

export default function Homepage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-32 lg:py-48 bg-yellow-400 relative">
        <div className="absolute inset-0 bg-yellow-400"></div>{" "}
        {/* Slightly adjusted opacity for better visibility */}
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center space-y-6 relative z-10">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Welcome to Roadvize
          </h1>
          <p className="text-lg text-black-100 md:text-xl">
            Your trusted partner for reliable and affordable taxi services. Let
            us take you places safely and comfortably.
          </p>
          <p className="text-base text-black-200 md:text-lg max-w-2xl">
            At Roadvize, we prioritize your safety and convenience. Our fleet of
            well-maintained vehicles and experienced drivers ensures that you
            reach your destination on time, every time. Whether it's a quick
            ride to the airport or a long-distance journey, we've got you
            covered!
          </p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <Button
              type="button"
              className="bg-gray-900 text-white hover:bg-gray-800 transition duration-300 px-6 py-3 rounded-md text-lg"
            >
              Get Started
            </Button>
            <Button
              type="button"
              className="bg-transparent border border-white text-black hover:bg-white hover:text-gray-900 transition duration-300 px-6 py-3 rounded-md text-lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose Roadvize?
          </h2>
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Safe Rides",
                description:
                  "All our drivers are verified, and our vehicles are regularly inspected for your safety.",
                icon: <Shield className="h-12 w-12 text-yellow-500" />,
              },
              {
                title: "Punctual Service",
                description:
                  "We value your time. Our drivers ensure you reach your destination on schedule.",
                icon: <Clock className="h-12 w-12 text-yellow-500" />,
              },
              {
                title: "Affordable Rates",
                description:
                  "Enjoy competitive pricing without compromising the quality of service.",
                icon: <CreditCard className="h-12 w-12 text-yellow-500" />,
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="bg-yellow-50 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="flex flex-col items-center text-center p-6">
                  {item.icon}
                  <h3 className="text-xl font-bold text-gray-800 mt-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            How It Works
          </h2>
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                step: "1. Set Your Location",
                description:
                  "Enter your pickup location and destination in our easy-to-use app.",
                icon: <MapPin className="h-8 w-8 text-white" />,
              },
              {
                step: "2. Choose Your Ride",
                description:
                  "Select from our range of vehicle options to suit your needs and budget.",
                icon: <Car className="h-8 w-8 text-white" />,
              },
              {
                step: "3. Enjoy Your Trip",
                description:
                  "Sit back and relax as our professional driver takes you to your destination.",
                icon: <Users className="h-8 w-8 text-white" />,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-yellow-400 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-yellow-500 p-4 rounded-full mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{item.step}</h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            What Our Customers Say
          </h2>
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                name: "Priya S., Mumbai",
                review:
                  "I've been using Roadvize for my daily commute, and it's been a game-changer. Always on time!",
                rating: 5,
              },
              {
                name: "Rahul M., Delhi",
                review:
                  "The drivers are courteous and professional. I feel safe every time I book with Roadvize.",
                rating: 5,
              },
              {
                name: "Anita K., Bangalore",
                review:
                  "The app is so easy to use. Booking a ride is quick and hassle-free. Highly recommended!",
                rating: 5,
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="bg-yellow-50 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="flex flex-col items-center text-center p-6">
                  <div className="flex justify-center mb-2">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-500" />
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {item.review}
                  </h3>
                  <p className="text-sm font-medium text-gray-800 mt-2">
                    {item.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-16 md:py-32 lg:py-48 bg-yellow-500">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white mb-4">
            Join the Roadvize Family Today!
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl mb-8">
            Experience unmatched convenience and comfort with Roadvize. Download
            our app and start your journey now!
          </p>
          <div className="flex justify-center space-x-4">
            <Button className="bg-white text-yellow-500 hover:bg-gray-100">
              Download for iOS
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-yellow-500"
            >
              Download for Android
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
