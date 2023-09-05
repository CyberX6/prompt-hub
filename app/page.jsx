import { Feed } from "@/components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Welcome to PromptHub!
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">
          AI-Powered Writing Prompts
        </span>
      </h1>
      <p className="desc text-center">
        PromptHub is a place to create, share and discover creative prompts for
        ChatGPT.
      </p>

      <Feed />
    </section>
  );
};

export default Home;
