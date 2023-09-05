import { Prompt } from "@/models/prompt";
import { connectToDB } from "@/utils/database";

export const POST = async (req) => {
  const { prompt, userId, tag } = await req.json();

  try {
    await connectToDB();
    const newPrompt = await Prompt.create({
      creator: userId,
      prompt,
      tag,
    });

    await newPrompt.save();

    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify(error), { status: 500 });
  }
};
