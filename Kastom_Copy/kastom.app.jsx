
import useCopyToClipBoard  from "/src/hooks.jsx";

function KastomApp() {
    const { isCopied, copy } = useCopyToClipBoard();

    return (

        <div className="flex flex-col items-center mt-20 gap-5">
            <button
                onClick={() => copy("Priveeet")}
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
                {isCopied ? " Скопировано!" : " Скопировать"}
            </button>
        </div>
    );
}

export default KastomApp;