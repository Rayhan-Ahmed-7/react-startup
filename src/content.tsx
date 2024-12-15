import { Section } from './type';

interface ContentProps {
    sections: Section[];
}

export function Content({ sections }: ContentProps) {
    return (
        <main className="ml-64 p-8 max-w-4xl">
            {sections.map((section) => (
                <section
                    key={section.id}
                    id={section.id}
                    className=" py-16 flex flex-col justify-center"
                >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">{section.title}</h2>
                    <div className="prose prose-lg">{section.content}</div>
                </section>
            ))}
        </main>)
}