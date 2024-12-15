import React, { useEffect, useState, useRef } from "react";

type Section = {
    id: string;
    label: string;
};

const sections: Section[] = [
    { id: "introduction", label: "Introduction" },
    { id: "services", label: "Our Services" },
    { id: "features", label: "Key Features" },
    { id: "pricing", label: "Pricing Plans" },
    { id: "faq", label: "Frequently Asked Questions" },
    { id: "testimonials", label: "Testimonials" },
    { id: "case-studies", label: "Case Studies" },
    { id: "team", label: "Our Team" },
    { id: "careers", label: "Careers" },
    { id: "blog", label: "Latest Blog Posts" },
    { id: "partners", label: "Our Partners" },
    { id: "resources", label: "Resources" },
    { id: "events", label: "Upcoming Events" },
    { id: "contact", label: "Contact Us" },
    { id: "newsletter", label: "Newsletter Signup" },
    { id: "portfolio", label: "Our Portfolio" },
    { id: "mission", label: "Our Mission" },
    { id: "vision", label: "Our Vision" },
    { id: "goals", label: "Company Goals" },
    { id: "history", label: "Company History" },
    { id: "awards", label: "Awards & Recognition" },
    { id: "press", label: "Press Coverage" },
    { id: "terms", label: "Terms & Conditions" },
    { id: "privacy", label: "Privacy Policy" },
    { id: "support", label: "Customer Support" },
    { id: "downloads", label: "Downloads" },
    { id: "community", label: "Community" },
    { id: "sustainability", label: "Sustainability Initiatives" },
    { id: "technology", label: "Our Technology" },
];

const ScrollSpySidebar: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>("introduction");
    const sectionRefs = useRef<(HTMLElement | null)[]>([]);

    useEffect(() => {
        const handleScroll = () => {
            sectionRefs.current.forEach((ref) => {
                if (ref) {
                    const rect = ref.getBoundingClientRect();
                    if (rect.top >= 0 && rect.top <= 200) {
                        setActiveSection(ref.id);
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="relative min-h-screen">
            <div className="grid grid-cols-5">
                {/* Sidebar */}
                <div>
                    <nav className="col-span-2 sticky top-0 h-screen overflow-y-auto p-4 bg-gray-100">
                        <ul className="space-y-2">
                            {sections.map((section) => (
                                <li key={section.id}>
                                    <button
                                        onClick={() => scrollToSection(section.id)}
                                        className={`block text-left px-4 py-2 rounded ${activeSection === section.id
                                            ? "bg-blue-500 text-white"
                                            : "text-gray-700"
                                            }`}
                                    >
                                        {section.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                {/* Main Content */}
                <div className="col-span-3 space-y-12">
                    {sections.map((section, index) => (
                        <div
                            key={section.id}
                            id={section.id}
                            ref={(el) => (sectionRefs.current[index] = el)}
                            className="p-8 border border-gray-300 rounded bg-white text-black shadow"
                        >
                            <h2 className="text-3xl font-bold mb-4">{section.label}</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                                convallis urna quis urna vehicula, ac tincidunt nunc fringilla.
                            </p>
                            <p className="mt-2">
                                Add as much dynamic content as needed here. Each section adjusts
                                its height to the content it contains.
                            </p>
                        </div>
                    ))}
                    <div className="section h-[200px]"></div>
                </div>
            </div>
        </div>
    );
};

export default ScrollSpySidebar;
