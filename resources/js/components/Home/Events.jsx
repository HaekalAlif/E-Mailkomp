import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";


export default function Events() {
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [events, setEvents] = useState([]);
    const [keenInstance, setKeenInstance] = useState(null); // To store the KeenSlider instance

    // Fetch events data from API
    useEffect(() => {
        fetch("api/events")
            .then((response) => response.json())
            .then((data) => setEvents(data))
            .catch((error) => console.error("Error fetching events:", error));
    }, []);

    // Initialize KeenSlider and handle cleanup
    useEffect(() => {
        if (sliderRef.current && events.length > 0) {
            const instance = new KeenSlider(sliderRef.current, {
                loop: true,
                slides: { perView: 1 },
                mode: "free-snap",
                spacing: 15,
                created: (slider) => {
                    setKeenInstance(slider); // Store the slider instance
                    setCurrentSlide(slider.track.details.rel); // Initialize currentSlide
                },
                slideChanged: (slider) =>
                    setCurrentSlide(slider.track.details.rel),
            });

            return () => {
                if (instance) {
                    instance.destroy(); // Properly destroy the instance when component unmounts
                }
            };
        }
    }, [events]); // Only reinitialize when the events data changes

    return (
        <section className="bg-primary-dark text-white py-16 px-6 md:px-12">
            <div className="max-w-6xl mx-auto text-center">
                <motion.h2
                    className="text-4xl font-bold mb-6 text-primary-orange"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Events & Activities
                </motion.h2>
                <p className="text-lg mb-12 text-gray-300">
                    Temukan berbagai acara menarik yang sedang atau akan
                    berlangsung.
                </p>
            </div>

            {/* Carousel with Parallax effect */}
            <div
                ref={sliderRef}
                className="keen-slider relative max-w-4xl mx-auto"
            >
                {events.map((event, index) => (
                    <motion.div
                        key={event.id}
                        className="keen-slider__slide relative bg-primary-purple rounded-2xl overflow-hidden shadow-lg"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                        {/* Parallax Effect on Image */}
                        <motion.div
                            className="overflow-hidden relative"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.5 }}
                        >
                            <motion.img
                                src={`/storage/${event.image}`}
                                alt={event.title}
                                className="w-full h-64 object-cover"
                                initial={{ scale: 1.1 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.8 }}
                            />
                        </motion.div>

                        {/* Event Details */}
                        <div className="p-6 text-center">
                            <h3 className="text-2xl font-semibold text-primary-orange mb-2">
                                {event.title}
                            </h3>
                            <p className="text-gray-300 text-sm mb-1">
                                📅{" "}
                                {new Date(event.date).toLocaleDateString(
                                    "id-ID",
                                    {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                    }
                                )}
                            </p>

                            <p className="text-gray-300 text-sm mb-3">
                                📍 {event.location}
                            </p>
                            <p className="text-gray-300 text-sm">
                                {event.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Dot Navigation */}
            <div className="flex justify-center mt-6 space-x-3">
                {events.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            currentSlide === index
                                ? "bg-primary-orange scale-125"
                                : "bg-gray-500"
                        }`}
                        onClick={() =>
                            sliderRef.current?.moveToSlideRelative(index)
                        }
                    ></button>
                ))}
            </div>
        </section>
    );
}
