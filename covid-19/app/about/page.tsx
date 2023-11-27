import Link from "next/link";

// `app/page.tsx` is the UI for the `/` URL
export default function Page() {
    return (
        <div className="min-h-screen flex flex-col justify-start items- mx-auto py-10 max-w-7xl px-5 gap-10">
            <div className="max-w-4xl">
                <h1>Covid-19</h1>
                <p>Covid-19, also known as the Coronavirus disease 2019, is an infectious disease caused by a newly discovered coronavirus called SARS-CoV-2. <br /><br />The disease causes respiratory illness (like the flu) with symptoms such as a cough, fever, and in more severe cases</p>
            </div>
            <div className="max-w-4xl">
                <h2>How it spreads</h2>
                <p>Covid-19 primarily spreads through respiratory droplets when an infected person coughs, sneezes, talks, or breathes. These droplets can be inhaled by people in close proximity to the infected person, typically within about 6 feet (2 meters).</p>
            </div>
            <Link className="text-blue-600 hover:text-rose-800 scale-95 hover:scale-100 transition-all" href="/suggest"> Learn more on who.in </Link>
        </div>
    )
}