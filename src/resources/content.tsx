import {
  About,
  Blog,
  Gallery,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
} from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Evelyn",
  lastName: "Li",
  name: `Evelyn Li`,
  role: "Designer",
  avatar: "/images/avatar.jpg",
  email: "zl4486@nyu.edu",
  location: "America/New_York", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Chinese"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Evelyn11400",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/once-ui/",
  },

  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Hi, My name is Evelyn Li.</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I am a designer studying in New York University , where I craft intuitive
      user experiences. After hours, I build my own projects.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: false,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a designer as well as a social media content creator. I specialize
        in UI design, graphic design, and motion graphics. I am passionate about
        making the user interface clean, efficient, and accessible.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "iDen Group Holding Inc.",
        timeframe: "02/2025-05/2025",
        role: "Intern of Social Media Content Creator",
        achievements: [
          <>
            Analyzed social media traffic data to identify audience engagement
            trends and optimize content strategy across platforms such as
            Rednote and Instagram.
          </>,
          <>
            Edited and produced short-form videos tailored to platform-specific
            algorithms and user preferences, increasing visibility and
            interaction.
          </>,
          <>
            Designed holiday-themed promotional campaigns and visual content to
            enhance seasonal brand presence and boost audience participation.
          </>,
          <>
            Contributed to the planning and execution of social media marketing
            initiatives, aligning content with brand tone and marketing goals to
            support broader digital growth strategies.
          </>,
        ],
      },
      {
        company: "Tencent Limited",
        timeframe: "07/2024-09/2024",
        role: "Intern of Search Experience Design",
        achievements: [
          <>
            Redesigned the search suggestion interface and optimized the UI of
            the search results and user feedback pages to enhance usability and
            visual appeal.
          </>,
          <>
            Updated design elements, including primary cards and fonts on the
            search results and leaderboard pages, to improve overall user
            interaction and experience
          </>,
          <>
            Enhanced over 200 vintage movie posters by upgrading image quality,
            modifying layouts, removing logos, and in some cases, completely
            redesigning to elevate visual impact.
          </>,
        ],
        images: [],
      },
      {
        company: "Meituan Limited",
        timeframe: "07/2023-08/2023",
        role: "Intern of Government Affairs",
        achievements: [
          <>
            Planned strategically for local growth by developing partnerships
            and gaining insights into local government policies on public
            transportation, urban management, and environmental protection,
            summarizing the insights into the report.
          </>,
          <>
            Established a favorable political and commercial environment for
            Meituan’s electric motorcycles, ensuring alignment with strategic
            objectives and local regulations.
          </>,
          <>
            Built relationships with regulatory bodies, implemented strategies
            for the company’s governmental relations at the local level to
            secure permissions and foster a favorable developmental environment
            for transportation services.
          </>,
          <>
            Monitored industry trends and corporate movements within the
            transportation sector, promoted collaborations with local
            enterprises, and ensured the local operation met regulatory
            requirements and business needs effectively.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: false, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Jakarta",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title:
          "Related Skills: Figma, Photoshop, After Effects, Premiere Pro, Illustrator, InDesign, Reaper, Motion Builder, HTML, CSS, Next.js, Microsoft Suite",
        tags: [],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Figma",
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Photoshop",
        tags: [
          {
            name: "Adobe Photoshop",
            icon: "PS",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Next.js",
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Illustrator",
        tags: [
          {
            name: "Adobe Illustrator",
            icon: "AI",
          },
        ],
        images: [],
      },
      {
        title: "After Effects",
        tags: [
          {
            name: "Adobe After Effects",
            icon: "AE",
          },
        ],
        images: [],
      },
      {
        title: "Premiere Pro",
        tags: [
          {
            name: "Adobe Premiere Pro",
            icon: "PR",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
