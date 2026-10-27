import React from "react";
import {
  ArrowRight,
  ArrowDown,
  Check,
  CheckCircle2,
  FileText,
  Database,
  ShieldCheck,
  Code2,
  Search,
  Layers,
  UserRound,
  GitBranch,
} from "lucide-react";
const MessageQuestion = () => <FileText size={18} />;
const nodeIcons = [FileText, Search, Database, Code2, UserRound, CheckCircle2];
function Node({ text, index = 0, active = false }) {
  const Icon = nodeIcons[index % nodeIcons.length];
  return (
    <div className={"story-node " + (active ? "node-active" : "")}>
      <Icon size={15} />
      <span>{text}</span>
      {active && <span className="story-chip">REVIEW</span>}
    </div>
  );
}
function Interface({ frontend = false }) {
  return (
    <div
      className={"interface-preview " + (frontend ? "responsive-preview" : "")}
    >
      <div className="preview-desktop">
        <div className="preview-top">
          <span className="tiny-brand">H</span>
          <span>{frontend ? "Component workspace" : "Customer workspace"}</span>
          <i />
        </div>
        <div className="preview-content">
          <aside>
            <i />
            <i />
            <i />
          </aside>
          <div>
            <small>
              {frontend ? "RESPONSIVE COMPONENT" : "YOUR NEXT STEP"}
            </small>
            <strong>
              {frontend ? "One system. Every screen." : "Review your request"}
            </strong>
            <div className="preview-field">
              {frontend ? "Default · Focus · Error" : "Contact details"}
              <Check size={12} />
            </div>
            <div className="preview-field">
              {frontend ? "Keyboard-ready navigation" : "Documents attached"}
              <Check size={12} />
            </div>
            <span className="preview-action">
              {frontend ? "Component ready" : "Continue to review"}{" "}
              <ArrowRight size={12} />
            </span>
          </div>
        </div>
      </div>
      <div className="preview-mobile">
        <span className="tiny-brand">H</span>
        <div className="skeleton" />
        <div className="skeleton" />
        <div className="preview-action">{frontend ? "Ready" : "Next"} →</div>
      </div>
    </div>
  );
}
export default function ServiceStoryVisual({ story, expanded = false }) {
  const t = story.type;
  const branched = ["automation", "platform"].includes(t);
  return (
    <figure
      className={`story-visual story-${t} ${expanded ? "story-expanded" : ""}`}
      aria-label={story.workflowTitle}
    >
      <div className="story-visual-bar">
        <span>
          {expanded ? "SYSTEM / WORKFLOW" : "SERVICE / " + story.eyebrow}
        </span>
        <span className="story-status">DESIGN VIEW</span>
      </div>
      {branched ? (
        <div className="story-branches">
          <div>
            <div className="story-column-label">
              {t === "platform" ? "BEFORE / DISCONNECTED" : "BUSINESS INPUTS"}
            </div>
            {story.flow.map((n, i) => (
              <Node text={n} index={i} key={n} />
            ))}
          </div>
          <div className="story-bridge">
            <ArrowRight className="bridge-in" size={21} />
            <div className="story-engine">
              <Layers size={22} />
              <strong>{story.system}</strong>
            </div>
            <ArrowRight className="bridge-out" size={21} />
          </div>
          <div>
            <div className="story-column-label">
              {t === "platform" ? "AFTER / CONNECTED" : "COORDINATED OUTPUTS"}
            </div>
            {story.outputs.map((n, i) => (
              <Node text={n} index={5} key={n} />
            ))}
          </div>
        </div>
      ) : t === "interface" || t === "frontend" ? (
        <>
          <div className="story-stage-strip">
            {story.flow.map((n, i) => (
              <React.Fragment key={n}>
                <span>{n}</span>
                {i < story.flow.length - 1 && <ArrowRight size={12} />}
              </React.Fragment>
            ))}
          </div>
          <Interface frontend={t === "frontend"} />
          {t === "interface" && (
            <div className="interface-comparison">
              <span>
                BEFORE <s>Competing actions · unclear labels</s>
              </span>
              <ArrowRight size={14} />
              <span>
                AFTER <b>One obvious next step</b>
              </span>
            </div>
          )}
        </>
      ) : t === "feedback" ? (
        <>
          <div className="feedback-loop">
            {story.flow.map((n, i) => (
              <React.Fragment key={n}>
                <div className={i === 1 ? "feedback-engine" : ""}>
                  <UserRound size={22} />
                  <strong>{n}</strong>
                </div>
                {i < 2 && <span aria-label="bidirectional connection">↔</span>}
              </React.Fragment>
            ))}
          </div>
          <div className="feedback-return">
            ↳ Observe → Implement → Review → Feed back ↲
          </div>
        </>
      ) : t === "roadmap" || t === "plan" ? (
        <>
          <div className="story-stage-strip">
            {story.flow.map((n) => (
              <span key={n}>{n}</span>
            ))}
          </div>
          <div className="planning-board">
            {(t === "roadmap"
              ? [
                  "Now / Customer need",
                  "Next / Opportunity",
                  "Later / Learning",
                ]
              : ["Scoped / Owner", "In progress / Risk", "Ready / Release"]
            ).map((n, i) => (
              <div key={n}>
                <small>{n}</small>
                {[0, 1].map((j) => (
                  <div className="planning-note" key={j}>
                    <span>
                      {
                        (t === "roadmap"
                          ? [
                              "Core user journey",
                              "Validate assumptions",
                              "Prioritised work",
                              "Feedback review",
                              "New opportunity",
                              "Evidence needed",
                            ]
                          : [
                              "Dependency agreed",
                              "Scope confirmed",
                              "Blocker identified",
                              "Decision owner",
                              "Readiness check",
                              "Handover plan",
                            ])[i * 2 + j]
                      }
                    </span>
                    <div className="skeleton" />
                    <span className="story-chip">
                      {i === 0 ? "AGREED" : i === 1 ? "REVIEW" : "PLANNED"}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </>
      ) : t === "search" ? (
        <>
          <div className="discovery-query">
            <Search size={16} />
            <span>Search for relevant expertise</span>
          </div>
          <div className="search-intent-line">
            Website → Crawl → Search intent → Content
          </div>
          <div className="search-results-preview">
            <small>SEARCH VISIBILITY / RANKINGS</small>
            {[
              "Expertise matched to search intent",
              "A useful service explanation",
              "A practical guide to the problem",
            ].map((n, i) => (
              <div className="search-result" key={n}>
                <span>
                  horizon /{" "}
                  {i === 0 ? "services" : i === 1 ? "expertise" : "insights"}
                </span>
                <strong>{n}</strong>
                <div className="skeleton long" />
                <div className="skeleton" />
              </div>
            ))}
          </div>
          <div className="source-card">
            <span className="story-column-label">
              INTENDED OUTCOME / QUALIFIED TRAFFIC
            </span>
            <p>Rankings and traffic are not guaranteed.</p>
          </div>
        </>
      ) : t === "retrieval" ? (
        <>
          <div className="retrieval-sources">
            {[
              "Brand content",
              "Structured information",
              "Supporting sources",
            ].map((n, i) => (
              <Node text={n} index={i} key={n} />
            ))}
          </div>
          <div className="retrieval-connectors">
            <span>╲</span>
            <ArrowDown size={15} />
            <span>╱</span>
          </div>
          <div className="retrieval-engine">
            <Search size={18} />
            <strong>AI retrieval</strong>
            <span>Identify → Retrieve → Reference</span>
          </div>
          <div className="retrieval-connectors">
            <ArrowDown size={15} />
          </div>
          <div className="generated-answer">
            <span className="story-column-label">GENERATED ANSWER</span>
            <strong>Expertise, understood in context.</strong>
            <div className="skeleton long" />
            <div className="skeleton" />
            <div className="citation-tags">
              <span>Source [1]</span>
              <span>Context [2]</span>
            </div>
            <p>Illustrative citation pattern — inclusion is not guaranteed.</p>
          </div>
        </>
      ) : t === "answer" ? (
        <>
          <div className="answer-question">
            <MessageQuestion />
            <span className="story-column-label">QUESTION</span>
            <strong>What does the customer need to know?</strong>
          </div>
          <div className="answer-evidence-grid">
            <div>
              <span className="story-column-label">INTENT</span>
              <p>Understand a decision, not just a keyword.</p>
            </div>
            <div>
              <span className="story-column-label">EVIDENCE</span>
              <ShieldCheck size={19} />
              <p>Sources, context and limitations.</p>
            </div>
          </div>
          <div className="structured-answer">
            <span className="story-column-label">STRUCTURED ANSWER</span>
            <strong>A direct response, supported by evidence.</strong>
            <div className="skeleton long" />
            <div className="skeleton" />
            <div className="answer-footer">
              <CheckCircle2 size={13} /> Clear question · useful answer ·
              verified context
            </div>
          </div>
          <div className="answer-response">
            <ArrowRight size={14} /> AI/search response{" "}
            <small>Platform display is not guaranteed</small>
          </div>
        </>
      ) : (
        <>
          <div className="story-node-grid">
            {story.flow.map((n, i) => (
              <div className="story-sequence-item" key={n}>
                <small>0{i + 1}</small>
                <Node
                  text={n}
                  index={i}
                  active={
                    (t === "agent" && n === "Human approval") ||
                    (t === "quality" && n === "Validate")
                  }
                />
                {i < story.flow.length - 1 && (
                  <ArrowRight className="sequence-arrow" size={13} />
                )}
              </div>
            ))}
          </div>
          {t === "agent" ? (
            <div className="story-control">
              <ShieldCheck size={17} />
              <span>
                Scoped tool access{" "}
                <b>Human approval before consequential actions</b>
              </span>
            </div>
          ) : t === "architecture" ? (
            <div className="architecture-contract">
              <Code2 size={17} />
              <code>request → validate → authorise → execute → observe</code>
            </div>
          ) : t === "quality" ? (
            <div className="quality-review">
              <span>Issue found</span>
              <GitBranch size={17} />
              <span>Fix → Retest</span>
              <ShieldCheck size={17} />
              <span>Release decision</span>
            </div>
          ) : t === "design" ? (
            <div className="design-artifacts">
              <span>
                Research notes
                <div className="skeleton" />
                <div className="skeleton short" />
              </span>
              <span>
                User journey<div className="artifact-flow">○ — ◇ — ○</div>
              </span>
              <span>
                Prototype
                <div className="artifact-screen" />
              </span>
            </div>
          ) : (
            <div className="release-scope">
              <span className="story-chip">IN THE FIRST RELEASE</span>
              <strong>One useful journey</strong>
              <span>Learn before expanding scope</span>
            </div>
          )}
        </>
      )}
      <figcaption>
        <span className="story-status-dot" />
        {story.system}
        <small>Illustrative system — not a live integration</small>
      </figcaption>
    </figure>
  );
}
