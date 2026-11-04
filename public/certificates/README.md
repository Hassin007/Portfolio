# Certificate Assets Directory

This directory stores the official credential images displayed in the portfolio's **Certifications** section and high-resolution lightbox modal.

---

## 📜 Active Credentials

| Asset File | Certificate Title | Issuer | Issue Date | Verification Link |
| :--- | :--- | :--- | :--- | :--- |
| [`agentic-ai-langgraph-crewai.webp`](./agentic-ai-langgraph-crewai.webp) | **Agentic AI with LangGraph, CrewAI, AutoGen and BeeAI** | IBM | Dec 17, 2025 | [Coursera Verify (SWQY7K04IV2L)](https://coursera.org/verify/SWQY7K04IV2L) |
| [`agentic-ai-langchain-langgraph.webp`](./agentic-ai-langchain-langgraph.webp) | **Agentic AI with LangChain and LangGraph** | IBM | Dec 18, 2025 | [Coursera Verify (XN0E4DBPQLD9)](https://coursera.org/verify/XN0E4DBPQLD9) |

> **Note on Aliases:** Original Coursera download filenames (`Coursera SWQY7K04IV2L.webp` and `Coursera XN0E4DBPQLD9.webp`) are preserved alongside the canonical semantic slugs for direct lookup and backwards compatibility.

---

## 🛠️ Adding New Certificates

To add a new certificate to the portfolio:

1. **Prepare the Image Asset:**
   - **Format:** Modern `.webp` format preferred (high clarity, low payload size).
   - **Aspect Ratio:** Fixed `4:3` (e.g., `1200x900px` or `1600x1200px`) to prevent Cumulative Layout Shift (CLS).
   - **Optimization:** Keep file sizes under `300 KB`.
   - **Naming:** Use lowercase kebab-case (e.g., `deep-learning-specialization.webp`).
   - Place the file in this directory (`/public/certificates/`).

2. **Register in Data Source:**
   Open [`src/data/certifications.ts`](../../src/data/certifications.ts) and add the new entry:

   ```typescript
   {
     id: "unique-certificate-id",
     title: "Official Course / Specialization Title",
     issuer: "Issuing Organization (e.g. IBM, DeepLearning.AI)",
     issueDate: "Month DD, YYYY",
     credentialUrl: "https://coursera.org/verify/<ID>",
     verifyUrl: "https://coursera.org/verify/<ID>",
     image: "/certificates/your-certificate-filename.webp",
     badge: "Professional Certification",
     skills: ["Skill 1", "Skill 2", "Skill 3"]
   }
   ```

3. **Behavior & Fallback:**
   - **Preview Cards:** Renders with `aspect-[4/3]`, `object-cover object-top`, `loading="lazy"`, and the frosted IBM issuer badge.
   - **Interactive Lightbox:** Clicking the card or the **Certificate View** button opens the full-resolution modal with zoom view and keyboard accessibility (`Escape` to close, focus return).
   - **Graceful Fallback:** If an image fails to load or is missing, [`src/components/Certifications.tsx`](../../src/components/Certifications.tsx) automatically renders a stylized fallback card with title, date, and badge without breaking layout integrity.
