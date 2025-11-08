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
    // https://opentdb.com/api_count.php?category=CATEGORY_ID_HERE
    // const [questionsByCategory, setQuestionsByCategory] = useState<number>(0);

    // const getCategories = async () => {
    //     try {
    //         const response = await axios.get("https://opentdb.com/api_category.php");

    //         const sortedCategories = [...response.data.trivia_categories].sort((a, b) => a.name.localeCompare(b.name, "en"));

    //         setCategories(sortedCategories);
    //     } catch (error) {
    //         console.error("Failed to fetch categories", error);
    //     }
    // };

    // useEffect(() => {
    //     getCategories();
    // }, []);

    return (
        <div className="overflow-y-auto space-y-3 p-2  h-[90vh]">
            {questions.map((question, index) => (
                <div key={index} className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md cursor-pointer transition-shadow">
                    {`${index + 1}. ${question}`}
                </div>
            ))}
        </div>
    );
};
