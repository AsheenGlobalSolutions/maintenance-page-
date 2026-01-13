"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function MaintenancePage() {
    const [email, setEmail] = useState("")
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (email) {
            setSubmitted(true)
            setEmail("")
            setTimeout(() => setSubmitted(false), 3000)
        }
    }

    return (
        <main className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white flex items-center justify-center px-4">
            <div className="max-w-2xl w-full text-center space-y-8">
                {/* Header Icon - Blue background */}
                <div className="flex justify-center">
                    <div className="relative w-24 h-24 flex items-center justify-center">
                        <div className="absolute inset-0 bg-primary/15 rounded-full animate-pulse" />
                        <svg className="w-12 h-12 text-primary relative" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </div>
                </div>

                {/* Main Content */}
                <div className="space-y-4">
                    <h1 className="text-5xl md:text-6xl font-bold text-primary text-balance">See You Soon</h1>
                    <p className="text-xl text-foreground/70 max-w-md mx-auto text-balance leading-relaxed">
                        We're currently performing maintenance to bring you an even better experience. We'll be back shortly.
                    </p>
                </div>

                {/*/!* Decorative Line *!/*/}
                {/*<div className="flex items-center gap-4">*/}
                {/*    <div className="flex-1 h-px bg-primary/20" />*/}
                {/*    <div className="w-2 h-2 rounded-full bg-primary" />*/}
                {/*    <div className="flex-1 h-px bg-primary/20" />*/}
                {/*</div>*/}

                {/*/!* Email Signup *!/*/}
                {/*<div className="space-y-4">*/}
                {/*    <p className="text-sm text-foreground/60">Get notified when we're back online</p>*/}
                {/*    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">*/}
                {/*        <Input*/}
                {/*            type="email"*/}
                {/*            placeholder="your@email.com"*/}
                {/*            value={email}*/}
                {/*            onChange={(e) => setEmail(e.target.value)}*/}
                {/*            required*/}
                {/*            className="flex-1 bg-white border-blue-200 focus:border-primary"*/}
                {/*        />*/}
                {/*        <Button type="submit" className="bg-primary hover:bg-primary/90 text-white px-8">*/}
                {/*            Notify Me*/}
                {/*        </Button>*/}
                {/*    </form>*/}
                {/*    {submitted && (*/}
                {/*        <p className="text-sm text-primary font-medium animate-in fade-in">✓ Thanks! We'll notify you soon.</p>*/}
                {/*    )}*/}
                {/*</div>*/}

                {/* Footer Status */}
                <div className="pt-8 border-t border-blue-100">
                    <p className="text-xs text-foreground/50">Last updated: {new Date().toLocaleString()}</p>
                </div>
            </div>
        </main>
    )
}
