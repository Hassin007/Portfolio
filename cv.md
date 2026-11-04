%-------------------------
% Resume in Latex
% Author : Jake Gutierrez
% Based off of: https://github.com/sb2nov/resume
% License : MIT
%------------------------

\documentclass[letterpaper,11pt]{article}

\usepackage{latexsym}
\usepackage[empty]{fullpage}
\usepackage{titlesec}
\usepackage{marvosym}
\usepackage[usenames,dvipsnames]{color}
\usepackage{verbatim}
\usepackage{enumitem}
\usepackage[hidelinks]{hyperref}
\usepackage{fancyhdr}
\usepackage[english]{babel}
\usepackage{tabularx}
\input{glyphtounicode}

%----------FONT OPTIONS----------
% sans-serif
% \usepackage[sfdefault]{FiraSans}
% \usepackage[sfdefault]{roboto}
% \usepackage[sfdefault]{noto-sans}
% \usepackage[default]{sourcesanspro}

% serif
% \usepackage{CormorantGaramond}
% \usepackage{charter}

\pagestyle{fancy}
\fancyhf{} % clear all header and footer fields
\fancyfoot{}
\renewcommand{\headrulewidth}{0pt}
\renewcommand{\footrulewidth}{0pt}

% Adjust margins
\addtolength{\oddsidemargin}{-0.5in}
\addtolength{\evensidemargin}{-0.5in}
\addtolength{\textwidth}{1in}
\addtolength{\topmargin}{-.5in}
\addtolength{\textheight}{1.0in}

\urlstyle{same}

\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Sections formatting
\titleformat{\section}{
\vspace{-4pt}\scshape\raggedright\large
}{}{0em}{}[\color{black}\titlerule \vspace{-5pt}]

% Ensure that generate pdf is machine readable/ATS parsable
\pdfgentounicode=1

%-------------------------
% Custom commands
\newcommand{\resumeItem}[1]{
\item\small{
{#1 \vspace{-2pt}}
}
}

\newcommand{\resumeSubheading}[4]{
\vspace{-2pt}\item
\begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
\textbf{#1} & #2 \\
\textit{\small#3} & \textit{\small #4} \\
\end{tabular*}\vspace{-7pt}
}

\newcommand{\resumeSubSubheading}[2]{
\item
\begin{tabular*}{0.97\textwidth}{l@{\extracolsep{\fill}}r}
\textit{\small#1} & \textit{\small #2} \\
\end{tabular*}\vspace{-7pt}
}

\newcommand{\resumeProjectHeading}[2]{
\item
\begin{tabular*}{0.97\textwidth}{l@{\extracolsep{\fill}}r}
\small#1 & #2 \\
\end{tabular*}\vspace{-7pt}
}

\newcommand{\resumeSubItem}[1]{\resumeItem{#1}\vspace{-4pt}}

% GitHub link shown in blue, hyperlinked to the repo
\newcommand{\ghlink}[1]{\href{#1}{\textcolor{blue}{\underline{GitHub}}}}

\renewcommand\labelitemii{$\vcenter{\hbox{\tiny$\bullet$}}$}

\newcommand{\resumeSubHeadingListStart}{\begin{itemize}[leftmargin=0.15in, label={}]}
\newcommand{\resumeSubHeadingListEnd}{\end{itemize}}
\newcommand{\resumeItemListStart}{\begin{itemize}}
\newcommand{\resumeItemListEnd}{\end{itemize}\vspace{-5pt}}

%-------------------------------------------
%%%%%% RESUME STARTS HERE %%%%%%%%%%%%%%%%%%%%%%%%%%%%

\begin{document}

%----------HEADING----------
\begin{center}
\textbf{\Huge \scshape Muhammad Hassin Saghir} \\ \vspace{1pt}
\small
0319-0332960 $|$
\href{mailto:hassinsaghir6@gmail.com}{\underline{hassinsaghir6@gmail.com}} $|$
\href{https://linkedin.com/in/hsn9}{\underline{LinkedIn}} $|$
\href{https://github.com/Hassin007}{\underline{GitHub}} $|$
\href{https://hassin-portfolio-1069954883759.asia-southeast1.run.app}{\underline{Portfolio}}
\end{center}

%-----------SUMMARY-----------
\section{Summary}
\small{
Undergraduate Computer Systems Engineer with hands-on internship experience in AI engineering and full-stack development. Experienced in building LLM-powered agentic systems, RAG assistants, machine learning models, and web applications with REST APIs, automated testing, and CI/CD, with a focus on clean, scalable, maintainable code.
}
\vspace{-4pt}

%-----------EXPERIENCE-----------
\section{Experience}
\resumeSubHeadingListStart

\resumeSubheading
{NCBC}{Karachi, Pakistan}
{AI Engineer Intern}{Jun 2026 -- Sept 2026}
\resumeItemListStart
\resumeItem{Developed an LLM-powered agentic system that interprets natural language queries and autonomously selects and executes the right tools to deliver data-driven insights}
\resumeItem{Enabled natural language interaction with complex multi-layer datasets, translating user intent into structured analysis and visualization requests}
\resumeItem{Designed multi-step agent workflows with intelligent dataset orchestration, enabling reasoning over historical and time-aware data}
\resumeItem{Integrated LLM agents with a modular, provider-based backend to support scalable, extensible AI-driven analysis}
\resumeItemListEnd

\resumeSubheading
{10Pearls}{Karachi, Pakistan}
{Software Engineer Intern}{Sept 2025 -- Dec 2025}
\resumeItemListStart
\resumeItem{Engineered full-stack web applications with responsive user interfaces and scalable REST APIs}
\resumeItem{Applied modern state management, error handling, and production-ready development practices to deliver maintainable, reliable features}
\resumeItem{Wrote unit and component tests to improve application reliability}
\resumeItem{Established code quality analysis and CI/CD pipelines to streamline builds and deployments}
\resumeItemListEnd

\resumeSubHeadingListEnd

%-----------PROJECTS-----------
\section{Projects}
\resumeSubHeadingListStart

    \resumeSubheading
      {TerraFlux -- Agentic Geospatial Weather Visualization System}{\ghlink{https://github.com/Hassin007/TerraFlux-Backend}}
      {LangGraph, LangChain, GeoPandas, Shapely}{}
      \resumeItemListStart
        \resumeItem{Built an agent-driven workflow that converts natural-language weather questions into structured geospatial requests, connecting location resolution, weather-data processing, and interactive map generation}
        \resumeItem{Implemented hierarchical administrative-boundary resolution from country to district, with ordered source fallbacks and escalation to a broader parent region when a precise boundary cannot be resolved}
        \resumeItem{Developed a climate analysis workflow that processes historical weather data into regional statistics and interactive, layer-based maps, with support for regional comparisons and forecast retrieval}
      \resumeItemListEnd

    \resumeSubheading
      {GitSense -- Autonomous GitHub Code Review}{\ghlink{https://github.com/Hassin007/GitSense-AI}}
      {Python, FastAPI, LangGraph, Redis, PostgreSQL, Langfuse, Docker}{}
      \resumeItemListStart
        \resumeItem{Automated code reviews by checking every GitHub commit and pull request as it happens, flagging security risks, breaking changes, and bugs without manual effort}
        \resumeItem{Designed an automated fix generator that explains detected problems in plain English and provides ready-to-copy code solutions, cutting down manual debugging time}
        \resumeItem{Ran several specialized checks in parallel, covering security, reliability, code quality, and breaking changes, then combined them into one overall risk score while filtering out unreliable AI-generated findings}
      \resumeItemListEnd

    \resumeSubheading
      {Bitcoin Market Direction Prediction}{\ghlink{https://github.com/Hassin007/BTC-Signal-Prediction}}
      {LightGBM, LSTM, Optuna, scikit-learn}{}
      \resumeItemListStart
        \resumeItem{Trained a model to predict Bitcoin's next market move and tested it on unseen future data, earning an average +30.1\% return and cutting the worst loss from 52.2\% to 17.8\% versus buy-and-hold}
        \resumeItem{Optimized results by automatically tuning model settings and adjusting trade signal thresholds, turning a profit in 4 of 5 test periods with a peak return of +95.8\%}
        \resumeItem{Discovered that how outcomes were labeled mattered more than model choice, and adjusting that threshold cut prediction error nearly in half}
      \resumeItemListEnd

    \resumeSubheading
      {Agentic RAG -- Military Doctrine Q\&A Assistant}{\ghlink{https://github.com/Hassin007/Agentic-RAG}}
      {Python, FastMCP, LangChain, LangGraph, ImageKit}{}
      \resumeItemListStart
        \resumeItem{Built a chat assistant that answers tactical questions by searching military doctrine manuals with an AI agent and citing the exact source}
        \resumeItem{Designed the agent's multi-step reasoning and document indexing so new manuals load in the background without one failure stopping the system}
        \resumeItem{Combined keyword and meaning-based search to improve retrieval accuracy, and added a review step that checks retrieved passages before generating an answer}
      \resumeItemListEnd

    \newpage
    \resumeSubheading
      {TeamSync -- Real-Time Team Chat Workspace}{\ghlink{https://github.com/Hassin007/TeamColabApp}}
      {Node.js, Express.js, MongoDB, React, Socket.IO, ImageKit, JWT, Zustand}{}
      \resumeItemListStart
        \resumeItem{Constructed a real-time team collaboration platform with separate workspaces, role-based access, live chat with typing indicators, online status and threads, and secure login with email OTP verification}
        \resumeItem{Introduced a file management system with folder hierarchy, multi-user assignment, and cloud-based file delivery, alongside an admin dashboard with analytics for user, workspace, and content moderation}
        \resumeItem{Structured the backend with clear separation between authentication, workspace, messaging, and file logic, and documented REST endpoints for easy integration}
      \resumeItemListEnd

    \resumeSubheading
      {ClassConnect -- Digital Classroom Workflow Tool}{\ghlink{https://github.com/Hassin007/ClassConnect}}
      {Python, Django, Tailwind CSS, MySQL}{}
      \resumeItemListStart
        \resumeItem{Contributed to a virtual classroom platform where teachers create classrooms and post assignments and announcements, and students join classes to view updates and stay organized}
        \resumeItem{Helped deliver assignment submissions, comment discussions on posts and student work, and secure sign-up and login for both teachers and students}
        \resumeItem{Kept the backend and database structure organized and easy to extend as new classroom features are added}
      \resumeItemListEnd

    \resumeSubheading
      {SalaryScout -- Multi-Source Job Discovery System}{\ghlink{https://github.com/Hassin007/SalaryScout}}
      {JavaScript, React, Vite, Tailwind CSS, shadcn/ui, Radix UI, Axios, React Router, Framer Motion}{}
      \resumeItemListStart
        \resumeItem{Assembled a full-stack job finder application integrating multiple external APIs for real-time job listings and salary estimation, with dynamic filtering by experience level, location type, and company}
        \resumeItem{Crafted a single, easy-to-browse job feed that brings listings together in one place and gives every posting a direct application link, so users can apply in one step}
        \resumeItem{Refined a clean, mobile-friendly layout so users can search and compare jobs comfortably on any device}
      \resumeItemListEnd

    \resumeSubHeadingListEnd

%-----------EDUCATION-----------
\section{Education}
\resumeSubHeadingListStart
\resumeSubheading
{NED University Of Engineering and Technology}{Karachi, Pakistan}
{B.E Computer Systems Engineering }{Oct. 2023 -- Ongoing}
\resumeSubSubheading
{CGPA: 3.512}{}
\resumeSubHeadingListEnd

%-----------CERTIFICATIONS-----------
\section{Certifications}
\resumeSubHeadingListStart
\item \textbf{Agentic AI with LangGraph, CrewAI, AutoGen and BeeAI} -- IBM
\hfill \href{https://coursera.org/share/e4e4aef687c9eea3c6324d5a815130ba}{\underline{Certificate}}

    \item \textbf{Agentic AI with LangChain and LangGraph} -- IBM
    \hfill \href{https://coursera.org/share/0ab20f91cfc32acc73ac06119a49d3ae}{\underline{Certificate}}

\resumeSubHeadingListEnd

%
%-----------PROGRAMMING SKILLS-----------
\section{Technical Skills}
\begin{itemize}[leftmargin=0.15in, label={}]
\small{\item{
\textbf{Languages}{: Python, SQL, NoSQL (MongoDB), JavaScript, TypeScript} \\
\textbf{Frameworks}{: React, Node.js, Express, NextJS, FastAPI, Socket.IO, ShadCN UI, Framer Motion} \\
\textbf{Machine Learning}{: PyTorch, TensorFlow, scikit-learn, LightGBM, Optuna | CNNs, RNNs, LSTMs} \\
\textbf{AI}{: LangChain, LangGraph, RAG, Agentic AI, Model Context Protocol (MCP), LLM Integration} \\
\textbf{Libraries}{: pandas, NumPy, Matplotlib, GeoPandas, Folium, Tanstack Query, Zustand} \\
\textbf{Developer Tools}{: Git, GitHub Actions, Docker, Linux (Ubuntu), SonarQube, Jest, React Testing Library, REST APIs}
}}
\end{itemize}

%-------------------------------------------
\end{document}
