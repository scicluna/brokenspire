export default function Contact() {
    return (
        <section className="h-full w-full flex flex-col items-center sm:p-10 py-12 min-h-[100dvh] gap-20">
            <div className="flex sm:w-full sm:pl-20">
                <h1 className="text-3xl font-extrabold">Contact</h1>
            </div>
            <form
                className="flex flex-col justify-center border sm:w-1/2 w-full h-fit border-stone-200 p-5 rounded-lg bg-stone-800 dark:bg-stone-950 gap-4 text-stone-300 dark:text-stone-400"
                action="https://formsubmit.co/sciclunajl@gmail.com"
                method="POST"
            >
                <input
                    type="hidden"
                    name="_next"
                    value="https://scicluna.github.io/portfolio/"
                />
                <div className="flex flex-col">
                    <label htmlFor="name">Name*</label>
                    <input
                        autoComplete="off"
                        name="name"
                        type="text"
                        id="name"
                        required
                        className="p-1 shadow-sm shadow-stone-950 righteous text-stone-950 h-8"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email">Email*</label>
                    <input
                        autoComplete="off"
                        name="email"
                        type="email"
                        id="email"
                        required
                        className="p-1 shadow-sm shadow-stone-950 righteous text-stone-950 h-8"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="message">Message*</label>
                    <textarea
                        autoComplete="off"
                        name="message"
                        id="message"
                        rows={5}
                        required
                        className="p-1 shadow-sm shadow-stone-950 righteous resize-none text-stone-950 sm:h-52 md:h-80"
                    />
                </div>
                <button
                    type="submit"
                    className="text-stone-900 bg-white w-1/2 self-center mt-2 rounded-md shadow-sm shadow-stone-950 hover:bg-stone-500 transition-all duration-200 ease-in dark:hover:bg-stone-300"
                >Send</button>
            </form>
        </section>
    )
}