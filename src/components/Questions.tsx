export const Questions = () => {
    const questions = [
        "What is React?",
        "How does useState work?",
        "What is Tailwind CSS asasdkjasdjhsajklhd kjahsdkljash lkdjal ksjdlkasj dlkasjdlk as lkjasdlk jaslkd jaslkdjalk sjdlkasj dlkasjd lkasd lkasjd ljasdlkjaslkd jasldj aslkjdlkas jdlkasj lkdjslk?",
        "How to manage state in React?",
        "What are React hooks?",
        "What are React hooks?",
        "What are React hooks?",
        "What are React hooks?",
        "What are React hooks?",
        "What are React hooks?",
        "What are React hooks?",
        "What are React hooks?",
        "What are React hooks?",
        "What are React hooks?",
        "What are React hooks?",
        "What are React hooks?",
        "What are React hooks?",
        "What are React hooks?",
        "What are React hooks?",
        "What are React hooks?",
        "What are React hooks?",
        "What are React hooks?",
        "What are React hooks?",
        "What are React hooks?",
        "What are React hooks?",
        "What are React hooks?",
        "What are React hooks?",
        "What are React hooks?",
    ];

    return (
        <div className="overflow-y-auto space-y-3 p-2">
            {questions.map((question, index) => (
                <div key={index} className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md cursor-pointer transition-shadow">
                    {`${index + 1}. ${question}`}
                </div>
            ))}
        </div>
    );
};
