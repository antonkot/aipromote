import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "How much should a small business really spend on marketing?",
    paragraph:
      "Stop guessing. We break down the real costs of agencies, freelancers, and DIY marketing vs. the AI advantage.",
    image: "/aipromote/images/blog/blog-01.jpg",
    author: {
      name: "AI Promote Team",
      image: "/aipromote/images/blog/author-01.png",
      designation: "Strategy",
    },
    tags: ["budget", "strategy"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Top 5 repetitive tasks costing marketers money",
    paragraph:
      "Are you paying for manual labor that AI can do instantly? Discover the tasks you should automate today.",
    image: "/aipromote/images/blog/blog-02.jpg",
    author: {
      name: "AI Promote Team",
      image: "/aipromote/images/blog/author-02.png",
      designation: "Automation",
    },
    tags: ["automation", "efficiency"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Comparing AI Agency vs Traditional Agency",
    paragraph:
      "Is an AI agency right for you? We compare cost, speed, and results to help you decide.",
    image: "/aipromote/images/blog/blog-03.jpg",
    author: {
      name: "AI Promote Team",
      image: "/aipromote/images/blog/author-03.png",
      designation: "Analysis",
    },
    tags: ["comparison", "trends"],
    publishDate: "2025",
  },
];
export default blogData;
