import Link from "next/link";

// `app/page.tsx` is the UI for the `/` URL
export default function Page() {
    return (
        <div className="min-h-screen flex flex-col justify-start items- mx-auto py-10 max-w-7xl px-5 gap-10">
            <div className="max-w-4xl">
                <h1>High Probability of Corona!</h1>
                <div className="flex flex-col p-5">
                <ol className="list-decimal flex flex-col gap-2">
                    <li>Isolate from Others</li>
                    <li>Rest and Take Care</li>
                    <li>Call Work Health Providers</li>
                    <li>Monitor Symptoms</li>
                    <li>Talk to someone About Testing</li>
                    <li>Follow Government Instruction</li>
                </ol>
                </div>
                <p>As of now, your answer suggest that you may need testing. If anything changes, take questionair again.</p>
            </div>
        </div>
    )
}