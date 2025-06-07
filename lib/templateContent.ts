export interface TemplateContent {
  title: string;
  body: string;
  image: string;
  facts?: { label: string; value: string; icon?: string }[];
  services?: { title: string; description: string; icon?: string }[];
  testimonials?: { name: string; role: string; quote: string; image?: string }[];
  mission?: { mission: string; vision: string; goal: string };
  faqs?: { question: string; answer: string }[];
}

export const contentMap: Record<string, TemplateContent> = {
  ai: {
    title: "Artificial Intelligence",
    body: "Explore the world of AI, including machine learning, deep learning, and more cutting-edge technologies shaping our future.",
    image: "/images/ai.jpg",
  },
  blog: {
    title: "Our Blog",
    body: "Read insightful articles, tips, and guides on technology, design, and innovation from industry experts.",
    image: "/images/blog.jpg",
  },
  design: {
    title: "Design Studio",
    body: "Discover stunning UI/UX design principles, case studies, and creative concepts to enhance your design thinking.",
    image: "/images/design.jpg",
  },
  service: {
    title: "Service Section",
    body: "Offering professional services to help your business grow with innovation and creativity.",
    image: "/images/service.jpg",
  },
  about: {
    title: "About Us",
    body: "Our team of data scientists, engineers, designers work at the intersection technology and strategy turning complex challenges into innovative solutions.",
    image: "/images/about.jpg",
    facts: [
      { label: "Seamless Integration", value: "298+" },
      { label: "AI Projects Delivered", value: "978+" },
      { label: "Handled by AI Bots", value: "300%" },
      { label: "Faster Time to Market", value: "95X" },
    ],
    services: [
      {
        title: "Custom AI Development",
        description: "We dive deep into your goals & challenges to uncover high-impact AI opportunities.",
      },
      {
        title: "Custom AI Solutions",
        description: "We craft cutting-edge AI solutions tailored to your business needs—driving smarter decisions, streamlined operations.",
      },
      {
        title: "Automated Intelligence",
        description: "We dive deep into your goals & challenges to uncover high-impact AI opportunities.",
      },
      {
        title: "Scalable Infrastructure",
        description: "We dive deep into your goals & challenges to uncover high-impact AI opportunities.",
      },
    ],
    testimonials: [
      {
        name: "Jason M",
        role: "Hardware Technician",
        quote: "Working with this team we game-changer. The AI-enhanced they delivered helped increase bounce rates by 40% engagement like never before.",
      },
    ],
    mission: {
      mission: "Our mission is to harness the power of AI to solve real-world problems. From automating tasks to delivering data-driven insights.",
      vision: "Our vision is to harness the power of AI to solve real-world problems. From automating tasks to delivering data-driven insights.",
      goal: "Our goal is to harness the power of AI to solve real-world problems. From automating tasks to delivering data-driven insights.",
    },
    faqs: [
      {
        question: "What services does your AI agency offer?",
        answer: "We offer a range of AI services including custom AI development, AI strategy, computer vision, and ongoing support.",
      },
      {
        question: "Do I need a large amount of data to use AI?",
        answer: "Project timelines vary depending on complexity but typically range from 4 to 12 weeks. We provide a clear roadmap during the discovery phase.",
      },
      {
        question: "How long does it take to develop an AI solution?",
        answer: "Project timelines vary depending on complexity but typically range from 4 to 12 weeks. We provide a clear roadmap during the discovery phase.",
      },
      {
        question: "Is my data secure with you?",
        answer: "Yes, we prioritize data security and ensure all solutions comply with industry standards.",
      },
      {
        question: "Can you integrate AI into our existing systems?",
        answer: "Absolutely, we specialize in seamless integration of AI into existing systems to enhance functionality.",
      },
    ],
  },
};