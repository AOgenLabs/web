import Image from "next/image";
import { Button } from "@/components/ui/button";
import { WaitlistForm } from "@/components/WaitlistForm";

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="min-h-screen bg-white overflow-x-hidden">
                <header className="flex items-center justify-between px-8 py-6">
                    <div className="flex-1"></div>

                    <div className="flex items-center justify-center flex-1">
                        <div className="flex items-center space-x-3">
                            <Image
                                src="/logo.png"
                                alt="Flowweave Logo"
                                width={80}
                                height={80}
                                className="h-20 w-auto"
                            />
                            <span className="font-bold text-2xl">
                                Flowweave
                            </span>
                        </div>
                    </div>

                    <div className="flex-1"></div>
                </header>

                <main className="px-8 pt-16 pb-16 relative">
                    <div className="text-center max-w-5xl mx-auto mb-6">
                        <h1 className="text-6xl font-bold tracking-tight">
                            Introducing{" "}
                            <span className="text-purple-500">Flowweave</span>,
                            <br />
                            The{" "}
                            <span className="text-emerald-500">
                                automation
                            </span>{" "}
                            way to{" "}
                            <span className="text-blue-500">connect.</span>
                        </h1>
                        <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
                            Weaving the future of automation, one flow at a time
                        </p>
                    </div>
                    <div className="text-center mb-8">
                        <a href="https://flowweave.ar.io/" target="_blank">
                            <Button className="rounded-full bg-purple-500 hover:bg-purple-600 text-white px-8 py-6 text-lg">
                                Start Automating
                            </Button>
                        </a>
                    </div>

                    {/* Dotted grid with pinned cards */}
                    <div className="relative h-[700px] mt-8">
                        {/* Simple dotted grid background */}
                        <div className="dotted-grid-bg"></div>

                        {/* Application cards */}
                        <div className="absolute top-0 left-0 w-full h-full">
                            {/* Card 1 - Top Left */}
                            <div className="absolute top-[5%] left-[8%] w-[200px] h-[200px] bg-white rounded-3xl shadow-md p-5 transform -rotate-6 z-10">
                                <div className="pin"></div>
                                <div className="flex flex-col h-full">
                                    <div className="flex items-start mb-2">
                                        <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden">
                                            <Image
                                                src="/telegram-icon.svg"
                                                alt="Telegram"
                                                width={24}
                                                height={24}
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <p className="text-sm font-medium">
                                            Trigger Telegram notifications for
                                            key events in AO-based dApps.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2 - Middle Left */}
                            <div className="absolute top-[30%] left-[18%] w-[200px] h-[200px] bg-white rounded-3xl shadow-md p-5 transform rotate-3 z-10">
                                <div className="pin"></div>
                                <div className="flex flex-col h-full">
                                    <div className="flex items-start mb-2">
                                        <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center overflow-hidden">
                                            <Image
                                                src="/ardrive-icon.svg"
                                                alt="ARdrive"
                                                width={24}
                                                height={24}
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <p className="text-sm font-medium">
                                            Sync user-generated content from
                                            Telegram to ArDrive
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Card 3 - Bottom Left */}
                            <div className="absolute bottom-[10%] left-[12%] w-[200px] h-[200px] bg-white rounded-3xl shadow-md p-5 transform rotate-6 z-10">
                                <div className="pin"></div>
                                <div className="flex flex-col h-full">
                                    <div className="flex items-start mb-2">
                                        <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center overflow-hidden">
                                            <Image
                                                src="/apm-icon.svg"
                                                alt="APM"
                                                width={24}
                                                height={24}
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <p className="text-sm font-medium">
                                            Auto-publish Dexi market outcomes to
                                            ArDrive and Add notifications to
                                            Telegram
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Card 4 - Center */}
                            <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 w-[200px] h-[200px] bg-white rounded-3xl shadow-md p-5 z-20">
                                <div className="pin"></div>
                                <div className="flex flex-col h-full">
                                    <div className="mt-2 text-center justify-center flex flex-col items-center">
                                        <div className="flex items-start mb-2">
                                            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden">
                                                <span className="text-blue-500 text-xl">
                                                    +
                                                </span>
                                            </div>
                                        </div>
                                        <p className="text-sm font-medium">
                                            Trigger smart contract executions or
                                            AO commands on conditions
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Card 5 - Top Right */}
                            <div className="absolute top-[8%] right-[12%] w-[200px] h-[200px] bg-white rounded-3xl shadow-md p-5 transform rotate-6 z-10">
                                <div className="pin"></div>
                                <div className="flex flex-col h-full">
                                    <div className="flex items-start mb-2">
                                        <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center overflow-hidden">
                                            <span className="text-red-500 text-xl">
                                                +
                                            </span>
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <p className="text-sm font-medium">
                                            Run CRON-based actions on your
                                            Permaweb App
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Card 6 - Bottom Right */}
                            <div className="absolute bottom-[15%] right-[15%] w-[200px] h-[200px] bg-white rounded-3xl shadow-md p-5 transform -rotate-6 z-10">
                                <div className="pin"></div>
                                <div className="flex flex-col h-full">
                                    <div className="flex items-start mb-2">
                                        <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center overflow-hidden">
                                            <span className="text-yellow-500 text-xl">
                                                +
                                            </span>
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <p className="text-sm font-medium">
                                            Make Automated DeFi Bots for your
                                            Permaweb App
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Small Logos */}
                            {/* Telegram Logo */}
                            <div className="absolute top-[22%] left-[35%] w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center z-30">
                                <Image
                                    src="/telegram-icon.svg"
                                    alt="Telegram"
                                    width={20}
                                    height={20}
                                />
                            </div>

                            {/* Gmail Logo */}
                            <div className="absolute top-[25%] right-[35%] w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center z-30">
                                <Image
                                    src="/gmail-icon.svg"
                                    alt="Gmail"
                                    width={20}
                                    height={20}
                                />
                            </div>

                            {/* Dexi Logo */}
                            <div className="absolute bottom-[20%] left-[40%] z-30">
                                <Image
                                    src="/dexi.png"
                                    alt="Dexi"
                                    width={60}
                                    height={40}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Waitlist Section */}
                    <div className="mt-24 mb-16">
                        <WaitlistForm />
                    </div>
                </main>
            </div>
        </div>
    );
}
