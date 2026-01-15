import { useParams, useLocation } from "react-router-dom";

const DebugPage = () => {
  const params = useParams();
  const location = useLocation();

  console.clear();
  console.log("========== DEBUG INFO ==========");
  console.log("1. Current URL:", window.location.href);
  console.log("2. Location pathname:", location.pathname);
  console.log("3. useParams() result:", params);
  console.log("4. Type of params:", typeof params);
  console.log("5. Is params empty?", Object.keys(params).length === 0);
  console.log("6. Keys in params:", Object.keys(params));
  console.log("================================");

  return (
    <div style={{ padding: "20px", fontFamily: "monospace" }}>
      <h1>Debug Page</h1>

      <div
        style={{ background: "#f0f0f0", padding: "15px", marginBottom: "20px" }}
      >
        <h2>Current URL</h2>
        <p>
          <strong>Full URL:</strong> {window.location.href}
        </p>
        <p>
          <strong>Pathname:</strong> {location.pathname}
        </p>
      </div>

      <div
        style={{ background: "#fff3cd", padding: "15px", marginBottom: "20px" }}
      >
        <h2>useParams() Result</h2>
        <pre>{JSON.stringify(params, null, 2)}</pre>
        <p>
          <strong>Number of params:</strong> {Object.keys(params).length}
        </p>
      </div>

      <div style={{ background: "#d1ecf1", padding: "15px" }}>
        <h2>Individual Values</h2>
        <p>
          <strong>categorySlug:</strong> {params.categorySlug || "UNDEFINED"}
        </p>
        <p>
          <strong>projectId:</strong> {params.projectId || "UNDEFINED"}
        </p>
      </div>
    </div>
  );
};

export default DebugPage;
