"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { createQuote } from "@/app/actions/actions";

export function Form() {
  return (
    <form action={createQuote} className="w-full max-w-sm space-y-4">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Submit a Quote</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Enter your quote below. We'll make sure to credit you properly.
        </p>
      </div>
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          placeholder="Enter your name"
          className="text-white"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          placeholder="Enter your email"
          type="email"
          name="email"
          className="text-white"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="quote">Quote</Label>
        <Textarea
          className="min-h-[100px]"
          id="quote"
          name="quote"
          placeholder="Enter your quote"
          className="text-white"
        />
      </div>
      <button className="border bg-green-700 font-bold text-white">
        Submit
      </button>
    </form>
  );
}
