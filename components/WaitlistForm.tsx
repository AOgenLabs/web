"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export function WaitlistForm() {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch("/api/waitlist", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            if (!response.ok) {
                throw new Error("Failed to join waitlist");
            }

            toast.success("Successfully joined the waitlist!");
            setEmail("");
        } catch (error) {
            toast.error("Failed to join waitlist. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-center mb-6">
                Join the Waitlist
            </h2>
            <p className="text-gray-600 text-center mb-6">
                Be the first to know when we launch. Sign up for early access!
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full"
                    />
                </div>
                <Button
                    type="submit"
                    className="w-full bg-purple-500 hover:bg-purple-600 text-white"
                    disabled={isLoading}
                >
                    {isLoading ? "Joining..." : "Join Waitlist"}
                </Button>
            </form>
        </div>
    );
}
