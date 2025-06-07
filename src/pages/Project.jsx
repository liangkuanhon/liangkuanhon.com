import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown"; // used to render markdown files dynamically
import { useEffect, useState } from "react";
import rehypeRaw from "rehype-raw"; // allow html in markdown files
import "../styles/markdown.css";

export default function ProjectPage() {
  const { slug } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`/projects/${slug}.md`)
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.text();
      })
      .then(setContent)
      .catch(() => setContent("# Project Not Found"));
  }, [slug]);

  return (
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>
        {content}
      </ReactMarkdown>

  );
}
