import { Certification } from "../types";

export const certificationsData: Certification[] = [
  {
    id: "ibm-agentic-ai-multiagent",
    title: "Agentic AI with LangGraph, CrewAI, AutoGen and BeeAI",
    issuer: "IBM",
    issueDate: "Dec 17, 2025",
    credentialUrl: "https://coursera.org/verify/SWQY7K04IV2L",
    verifyUrl: "https://coursera.org/verify/SWQY7K04IV2L",
    image: "/certificates/agentic-ai-langgraph-crewai.webp",
    badge: "IBM Professional Certification",
    skills: ["LangGraph", "CrewAI", "AutoGen", "BeeAI", "Multi-Agent Workflows"]
  },
  {
    id: "ibm-agentic-ai-langchain",
    title: "Agentic AI with LangChain and LangGraph",
    issuer: "IBM",
    issueDate: "Dec 18, 2025",
    credentialUrl: "https://coursera.org/verify/XN0E4DBPQLD9",
    verifyUrl: "https://coursera.org/verify/XN0E4DBPQLD9",
    image: "/certificates/agentic-ai-langchain-langgraph.webp",
    badge: "IBM Professional Certification",
    skills: ["LangChain", "LangGraph", "Agentic Reasoning", "Stateful Graphs", "Tool Execution"]
  }
];
