"use server";

import { Quote } from "@/models/Quote";
import { ConnectDB } from "@/db/connection";

export async function createQuote(formData) {
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    quote: formData.get("quote"),
  };

  await ConnectDB();

  const newQuote = await Quote.create(rawData);

  console.log(newQuote);
}
