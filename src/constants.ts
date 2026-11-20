export const PROJECTS = [
  {
    title: "Text-to-SQL Analytics Copilot with Guardrails",
    description: "A text-to-SQL tool that converts plain English queries to SQL \
    executes it in read-only, self-corrects on errors and returns a table along with \
    an auto-generated chart and a plain-English explaination of the query",
    tags: ["Python", "sqlglot", "FastAPI", "DuckDB/PostgreSQL", 
      "Chroma(Development)", "Plotly", "React.js", "Pydantic v2", "TailwindCSS3(UI)",
      "Docker(Containerization)", "pytest, ruff & mypy (Quality)",
      "pgvector(Production)", "rank-bm25/ElasticSearch(Lexical Search)",
      "BAAI/bge-small-en-v1.5(384-dimesions)", "Qwen2.5 Coder/SQLCoder(LLM)"
    ],
    highlights: [
      "Retrieves the relevant database schema, generates SQL, validates it and runs it read-only, so wrong joins, invented columns and destructive queries never reach the database.", 
      "Parses every query into an abstract syntax tree (AST) with sqlglot and enforces safety rules in code instead of trusting the language model.", 
      "Added a self-correction loop that feeds database error messages back to the model, plus a query bank of verified question-to-SQL pairs that serves as few-shot examples and regression tests.",
      "Evaluated against a gold set of 100 question-to-expected-result pairs, measuring execution accuracy, safety violations (target: zero) and median latency."],
    link: ""
  },
  {
    title: "Stock Screener Application (Client Project) - Freelance",
    description:"A premium, real-time stock screening, watchlist, portfolio tracking, \
    and alerts platform for NSE & BSE listed equities. Built for retail investors, traders, \
    and analysts who want a fast, focused, and beautifully designed research workflow.",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "RazorpayAPI",
      "REST API", "Cloudflare", "OAuth", "Framer-Motion(animations)", "Recharts",
      "shadcn/ui", "Typescript 5", "React Router V6", "Lucide React", "Zod",
      "jsPDF", "html2canvas", "Supabase(Self-hosted backend)", "GrowwAPI"
    ],
    highlights: ["Owned end-to-end product engineering for a live stock screener tracking 5,300+ NSE/BSE securities \
      with dynamic watchlists, portfolio monitoring, and financial ratios.",
      "Engineered backend data pipelines to ingest and clean 5,000+ data points per stock; implemented \
      role-gated subscription APIs (Free, Pro, Premium) with Cloudflare edge caching.",
      "Scaled product organically to 10,000+ views in 3-4 months with 99.9% uptime, demonstrating customer \
      obsession and end-to-end operational ownership."
    ],
    link: "https://www.equityiq.in"
  },
  {
    title: "Job and Company Verification Tool",
    description: "TrustHire is an open-source, self-hosted platform that detects \
    potentially fraudulent job and internship postings using an internally trained, \
    explainable ML model, with no paid AI inference or third-party pre-trained models. \
    It also discovers public job openings and provides privacy-first, resume-based job matching \
    using deterministic text analysis.",
    tags: ["React.js", "TypeScript", "Vite", "Tailwind CSS", 
      "Radix UI", "Lucide React", "Recharts", "Sonner (Toast notification system)",
      "React Hook Form & Zod", "Supabase", "Drizzle ORM", "PostgreSQL",
      "pgvector(348-dimensional embeddings)", "RAG(Retrieval Augmented Generation)",
      "pdfjs-dist, mammoth & jspdf", "Firecrawl API", "Reditt API", "Razorpay API",
      "Vitest", "Playwright", "ESLint 9 & Prettier", "GitHub Actions Workflows"
    ],
    highlights: ["Built a full-stack tool that scores job postings from 0 to 100 for authenticity using \
      nine trust signals (company reviews, online presence, warning signs in the posting).",
      "Reached 95% accuracy on unseen job postings after rebuilding the scoring around \
      a custom machine-learning model with better input features.",
      "Built batch endpoints that process 30-40 job links at once, with input validation,\
      clear error handling and unit tests; deployed on Render, Railway and Vercel and\
      documented in a 39-page report."
],
    link: "https://trust-hire.lovable.app"
  },
  {
    title: "Finance Data Processing Backend",
    description: "An API for data processing and RBAC for financial data, including complete authentication.",
    tags: ["Node.JS","Express.JS","REST API","JavaScript","Data Analysis","Bcrypt","RBAC","PostgreSQL"],
    highlights: ["Allows users to signup as an Admin, Analyst or Viewer and privileges are accordingly modified andd handled by the API.",
      "Allows users to create financial records and sort and filter records.",
      "Uses JWT-based authentication and hashes passwords using bcrypt for secure storage of user credentials.",
      "Extract valuable insights from financial records such as total amount spent, total expense and duration-wise transaction data (Ex: 5 months, 1 year ,etc)."
    ],
    link: "https://documenter.getpostman.com/view/53009591/2sBXwqtBGr"
  },
  {
    title: "Stenography Application (Flask & React)",
    description: "Built a secure web application enabling users to encrypt plaintext messages into image files and decrypt them at the receiver end.",
    tags: ["Python", "Flask", "React", "Tailwind CSS", "LSB Manipulation"],
    highlights: [
      "Implemented pixel altering-based encryption.",
      "Designed responsive frontend with dark mode support.",
      "Client-side routing with react-router-dom."
    ],
    link: "https://steganography-project-updated-mwskcqpo9.vercel.app/"
  },
  {
    title: "Stock Price Prediction Model",
    description: "Developed a machine learning-based stock price prediction system using Python and pandas.",
    tags: ["Python", "Pandas", "yfinance API", "Scikit-learn"],
    highlights: [
      "Integrated real-time financial data from yfinance API.",
      "Processed 5,000+ historical data points per stock.",
      "Improved data preprocessing for reliable outputs.",
      "Used the Sequential model to build the model and train it on real stock data."
    ],
    link: "https://github.com/Kiyotaka-Ayanak0ji/Stock_Price_Prediction"
  },
  {
    title: "Full-Stack Todo Application",
    description: "Designed and deployed a full-stack todo application using Node.js and Express.",
    tags: ["Node.js", "Express", "PostgreSQL", "Passport.js", "bcrypt"],
    highlights: [
      "Password encryption using bcrypt.",
      "Multi-user support and user preferences using the Context API",
      "CRUD functionality with responsive UI."
    ],
    link: "https://todo-application-am13.onrender.com/"
  },
  // {
  //   title: "Github Profile Analyzer API",
  //   description: "A backend service that analyzes a GitHub user profile using the GitHub public API and stores useful insights in a MySQL database.",
  //   tags: ["Node.JS","Express.JS","Flask","Python","Pandas","React","TainwindCSS","MySQL"],
  //   highlights: [
  //     "Fetches public profile data from GitHub using username",
  //     "Stores useful insights (Public repository count, Followers count, etc)",
  //     "Stores analysis results in MySQL database"
  //   ],
  //   link: ""
  // }
];

export const SKILLS = {
  languages: ["C++", "Java", "Python", "JavaScript", "C", "SQL", "Linux(Bash)"],
  tools: ["PowerBI","Jupyter Notebook","Docker","Cloudflare","Vercel","Render","Tableau","MS Excel", "Microsoft PowerBI", "Git","MySQL Workbench","Claude Code","ChatGPT","CursorAI","Lovable","Emergent","Replit"],
  "libraries and frameworks": ["Pandas","Numpy","Matplotlib","Seaborn","Tensorflow","Node.js", "Express.js" , "React", "Flask", "Tailwind CSS"],
  databases: ["PostgreSQL", "MongoDB", "MySQL"],
  concepts: ["WebSockets", "Advanced RAG(Retieval Augmented Learning)", "A/B Testing", "Hypothesis Testing", 
    "EDA(Exploratory Data Analysis)", "Prompt Engineering", "Data Visualization", "Data Storytelling"]

};

export const EXPERIENCE = [
  {
    company: "Clyptus Software Solutions Pvt Ltd",
    role: "AI Engineer Intern(Present)",
    details: [
      "Working in developing a Naukri-like job portal for vendors and candidates \
      with several unique and helpful features.",
      "Working on the Full-Stack curently, improving performance and learning \
      more about cloud technologies and hosting.",
      "Contributing to codebase and also performing smoke test, functional testing \
      and integration testing on written code before finalizing code changes."
    ]
  },
  {
    company: "Nxtwave Disruptive Technologies",
    role: "Associate Aptitude Instructor(2 months)",
    details: [
      "Explained aptitude and math concepts to computer science learners clearly, following company guidelines.",
      "Learned to work with a startup and complete targets and deadlines.",
      "Raised and discussed issues early with the team while working with limited resources."
    ]
  },
  {
    company: "Edunet Foundation & IBM SkillBuild",
    role: "Cyber Security Intern (6-Week)",
    details: [
      "Learning cybersecurity fundamentals, network security, and threat mitigation techniques.",
      "Expertise in steganography using LSB (Least Significant Bit) manipulation.",
      "Created an interactive GUI for bit manipulation and image encryption."
    ]
  }
];

export const EDUCATION = [
  { 
    school: "Institute of Aeronautical Engineering", 
    degree: "B.Tech in Computer Science and Engineering", 
    period: "2021 - 2025", 
    result: "CGPA: 7.83" 
  },
  { 
    school: "Trividyaa Junior College", 
    degree: "Intermediate (MPC)", 
    period: "2019 - 2021", 
    result: "98.2%" 
  }
];