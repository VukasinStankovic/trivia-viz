const Spinner = () => {
    return (
        <div className="flex items-center justify-center h-full">
            <div className="flex flex-col items-center justify-center gap-3">
                <div className="w-10 h-10 border-4 border-gray-300 border-t-[#223344] rounded-full animate-spin"></div>
                <p className="text-gray-600 text-sm font-medium">Loading data, please wait...</p>
            </div>
        </div>
    );
};

export default Spinner;
