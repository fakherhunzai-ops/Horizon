// Each service has an independent editorial and visual story within one page architecture.
export const stories = {
  "ai-automation": {
    eyebrow: "AI AUTOMATION FOR BUSINESS",
    lead: "Remove the work your team ",
    highlight: "should not be doing by hand.",
    copy: "Connect the systems you already use, automate repetitive operational work and give your team more time for the decisions that actually require people.",
    problem: "Your people have become the integration.",
    pain: "Copying enquiries into a CRM, chasing approvals and assembling reports takes attention away from customers. When every handover needs someone to remember, growth creates more admin rather than more capacity.",
    audience:
      "Operations leaders and service teams with repeatable work spread across inboxes, spreadsheets and business applications.",
    deliverTitle: "Less chasing. More completed work.",
    deliver: [
      [
        "Workflow opportunity map",
        "Identify repeatable tasks, exceptions and the handovers worth automating first.",
      ],
      [
        "Connected operational flows",
        "Link intake, records, documents and approval steps through your existing tools.",
      ],
      [
        "Exception handling & visibility",
        "Route unusual cases to a person and make failures visible rather than silently losing work.",
      ],
    ],
    process: [
      "Map the manual work",
      "Check system access",
      "Define rules & exceptions",
      "Connect and test",
      "Monitor the handovers",
    ],
    capabilities: [
      "Workflow mapping",
      "API integration",
      "Approval routing",
      "Operational reporting",
    ],
    flow: ["Inbox", "CRM", "Documents", "Spreadsheet", "Approvals"],
    outputs: [
      "Completed workflow",
      "Updated records",
      "Notifications",
      "Reporting",
    ],
    system: "Automation",
    type: "automation",
    workflowTitle: "One trigger. A coordinated set of actions.",
    useCases: [
      "Route new customer enquiries",
      "Prepare approval packs",
      "Synchronise operational records",
    ],
    faq: [
      [
        "What should we automate first?",
        "Start with frequent, rules-based work that has a clear owner and a measurable cost in time or mistakes. We review exception rates before recommending a workflow.",
      ],
      [
        "Will this replace our current software?",
        "Not by default. We first check whether your existing systems can be connected reliably through supported APIs or other agreed integration methods.",
      ],
      [
        "What happens if an automation fails?",
        "We design visible error states, retry rules where safe and a named human escalation path. Monitoring and operational ownership are agreed before release.",
      ],
    ],
    related: ["ai-agents", "custom-software", "forward-deploy-engineering"],
    proof: [],
    cta: "Which manual handover",
    ctaHighlight: "should disappear?",
    primary: "Talk about an automation opportunity",
  },
  "ai-agents": {
    eyebrow: "AI AGENTS",
    lead: "Give your workflows an ",
    highlight: "intelligent operator.",
    copy: "Build tailored AI agents that can understand requests, work across business systems, take controlled actions and hand important decisions back to people.",
    problem: "A request rarely arrives as a tidy rule.",
    pain: "A customer question may need context, retrieval and several system actions. A fixed automation cannot interpret every variation, while an unconstrained agent can take actions it should not.",
    audience:
      "Teams handling knowledge-heavy requests that need interpretation, controlled tool access and accountable human review.",
    deliverTitle: "Useful autonomy. Explicit boundaries.",
    deliver: [
      [
        "Agent responsibilities",
        "Define what the agent can decide, what it can access and when it must stop.",
      ],
      [
        "Grounded retrieval & tools",
        "Connect approved information sources and narrowly scoped system actions.",
      ],
      [
        "Evaluation & human handoff",
        "Test representative requests, inspect action traces and route consequential decisions to people.",
      ],
    ],
    process: [
      "Define the agent’s remit",
      "Prepare trusted context",
      "Connect scoped tools",
      "Evaluate decisions",
      "Release with oversight",
    ],
    capabilities: [
      "Agent orchestration",
      "Knowledge retrieval",
      "Tool permissions",
      "Human-in-the-loop review",
    ],
    flow: [
      "Request",
      "Reason",
      "Retrieve",
      "Act",
      "Human approval",
      "Complete",
    ],
    system: "Controlled agent run",
    type: "agent",
    workflowTitle: "Reasoning is not permission to act.",
    useCases: [
      "Triage a complex service request",
      "Prepare a source-grounded response",
      "Draft an action for human approval",
    ],
    faq: [
      [
        "How is an agent different from automation?",
        "Automation follows predefined rules. An agent can interpret a request and choose among permitted steps, within boundaries that we explicitly design and evaluate.",
      ],
      [
        "Can an agent change records on its own?",
        "Only if that action is in its agreed permission scope. High-impact or irreversible actions should require approval, and all tool use needs an auditable trace.",
      ],
      [
        "How do you handle unreliable answers?",
        "We test against representative examples, retrieve from approved sources and design abstention or human escalation when evidence is missing. No model is assumed infallible.",
      ],
    ],
    related: ["ai-automation", "backend-development", "product-management"],
    proof: [],
    cta: "Where would a controlled agent",
    ctaHighlight: "make a useful difference?",
  },
  "custom-software": {
    eyebrow: "CUSTOM SOFTWARE",
    lead: "When the tools no longer fit, build the ",
    highlight: "system that does.",
    copy: "Replace spreadsheets, manual workarounds and disconnected tools with dependable software designed around the way your business actually operates.",
    problem: "The workaround has become the way you work.",
    pain: "A growing collection of spreadsheets and bolt-on tools cannot always represent your real process. Teams lose context moving between screens, and nobody can see the whole job.",
    audience:
      "Businesses whose internal operations, client workflows or reporting have outgrown off-the-shelf tooling.",
    deliverTitle: "A platform shaped around the operation.",
    deliver: [
      [
        "Operational product definition",
        "Map users, records and business rules before choosing the architecture.",
      ],
      [
        "Purpose-built application",
        "Create connected screens, workflows and permissions for the people doing the work.",
      ],
      [
        "Migration & ownership plan",
        "Plan data movement, documentation and handover so the platform can belong to your business.",
      ],
    ],
    process: [
      "Observe the operation",
      "Model the business",
      "Design the platform",
      "Build connected journeys",
      "Migrate & hand over",
    ],
    capabilities: [
      "Domain modelling",
      "Web applications",
      "Role-based access",
      "Data migration",
    ],
    flow: ["Spreadsheet", "Email", "Legacy system", "Manual handoffs"],
    outputs: ["Shared records", "Clear ownership", "Live activity"],
    system: "One connected custom platform",
    type: "platform",
    workflowTitle: "From scattered work to one operational view.",
    useCases: [
      "Internal operations workspace",
      "Client service portal",
      "Shared case management",
    ],
    faq: [
      [
        "When is custom software the right choice?",
        "When a distinctive, valuable process cannot be supported well by configuring existing tools. We compare configuration, integration and custom build before recommending a direction.",
      ],
      [
        "Can existing information be migrated?",
        "We assess data quality, source access and mapping requirements, then plan validation and rollback before moving live records.",
      ],
      [
        "How do we avoid depending on one supplier?",
        "Agree repository access, documentation, deployment ownership and handover arrangements up front. Maintainability is a design requirement.",
      ],
    ],
    related: ["product-design", "frontend-development", "backend-development"],
    proof: [],
    cta: "What would a system built around",
    ctaHighlight: "your business look like?",
  },
  "mvp-development": {
    eyebrow: "MVP DEVELOPMENT",
    lead: "Build enough to ",
    highlight: "learn what matters.",
    copy: "Turn a validated idea into a focused first release without spending months building features users may never need.",
    problem: "A first release is not the whole roadmap.",
    pain: "When every feature feels essential, the first opportunity to learn keeps moving further away. A useful MVP tests an important assumption with a coherent experience, not a disconnected list of shortcuts.",
    audience:
      "Founders and funded product teams with a validated opportunity that needs a focused, testable first release.",
    deliverTitle: "A smaller release. A clearer learning goal.",
    deliver: [
      [
        "First-release definition",
        "Agree the core user outcome, risky assumptions and what stays out of scope.",
      ],
      [
        "Prototype & implementation",
        "Test the central journey before building a usable, maintainable first product.",
      ],
      [
        "Launch learning plan",
        "Define feedback, instrumentation and a decision process for what comes next.",
      ],
    ],
    process: [
      "Frame the hypothesis",
      "Prioritise one journey",
      "Prototype the experience",
      "Build & test",
      "Release to learn",
    ],
    capabilities: [
      "Release scoping",
      "Rapid prototyping",
      "Product engineering",
      "Feedback instrumentation",
    ],
    flow: ["Idea", "Prioritise", "Prototype", "Build", "Test", "First release"],
    system: "First-release scope",
    type: "release",
    workflowTitle: "Keep the first release focused on a real question.",
    useCases: [
      "Validate a core product journey",
      "Test a new customer proposition",
      "Replace a manual pilot with software",
    ],
    faq: [
      [
        "What belongs in an MVP?",
        "The smallest coherent experience that lets a real user achieve the central outcome and helps your team test an important assumption.",
      ],
      [
        "Can we add features during the build?",
        "New evidence can change priorities, but changes should have an explicit scope and commercial decision rather than silently expanding the release.",
      ],
      [
        "Will the MVP need to be thrown away?",
        "Not necessarily. We agree the intended lifespan, expected usage and architecture trade-offs so learning speed does not hide avoidable rework.",
      ],
    ],
    related: ["product-design", "ux-ui-design", "product-management"],
    proof: [],
    cta: "What does your first release",
    ctaHighlight: "need to teach you?",
  },
  "product-design": {
    eyebrow: "PRODUCT DESIGN",
    lead: "Turn complex product problems into ",
    highlight: "clear experiences.",
    copy: "Shape products around real user needs, business priorities and technical constraints before expensive development decisions become difficult to reverse.",
    problem: "An attractive screen cannot fix an unclear product.",
    pain: "Teams can agree on features without agreeing on the user’s problem. Unresolved product structure then becomes costly engineering churn and a confusing experience.",
    audience:
      "Product owners and founders making consequential decisions about a new product or an existing experience.",
    deliverTitle: "Evidence before expensive commitments.",
    deliver: [
      [
        "Research & problem framing",
        "Understand users, current behaviour and the business constraints behind the brief.",
      ],
      [
        "Flows & product structure",
        "Translate the core task into journeys, information architecture and product boundaries.",
      ],
      [
        "Validated product direction",
        "Use prototypes and user feedback to refine the experience before implementation.",
      ],
    ],
    process: [
      "Research the context",
      "Frame the user problem",
      "Map the journey",
      "Prototype the structure",
      "Validate the direction",
    ],
    capabilities: [
      "User research",
      "Information architecture",
      "Interaction design",
      "Prototype validation",
    ],
    flow: [
      "Research",
      "Problem framing",
      "User flow",
      "Product structure",
      "Interface",
      "Validation",
    ],
    system: "Product discovery board",
    type: "design",
    workflowTitle: "Trace each interface decision back to a user need.",
    useCases: [
      "Shape a new product proposition",
      "Untangle a complex service journey",
      "Validate a major product change",
    ],
    faq: [
      [
        "Do we need research before designing screens?",
        "We need enough evidence to understand the decision. That can include existing research, stakeholder knowledge, support patterns and targeted user conversations.",
      ],
      [
        "What do engineers receive?",
        "An agreed product structure, annotated flows, interaction states and design decisions with enough context to implement and challenge them sensibly.",
      ],
      [
        "Can you improve an existing product?",
        "Yes. We can investigate a specific journey or structural problem without assuming the whole product needs a redesign.",
      ],
    ],
    related: ["ux-ui-design", "product-management", "mvp-development"],
    proof: [],
    cta: "Which product decision",
    ctaHighlight: "needs more clarity?",
  },
  "ux-ui-design": {
    eyebrow: "UX/UI DESIGN",
    lead: "Make the ",
    highlight: "next action obvious.",
    copy: "Design intuitive user journeys and polished interfaces that reduce friction, improve clarity and make digital products easier to use.",
    problem: "Users should not have to decode the interface.",
    pain: "Competing actions, unclear labels and missing states make simple tasks harder than they need to be. Visual polish only helps when the journey itself makes sense.",
    audience:
      "Teams with a web or mobile product where navigation, task completion or interface consistency is getting in users’ way.",
    deliverTitle: "Clear journeys, down to the last state.",
    deliver: [
      [
        "Journey & usability review",
        "Find friction in navigation, task sequences, language and feedback.",
      ],
      [
        "Responsive interface design",
        "Create clear hierarchy, purposeful components and layouts for different devices.",
      ],
      [
        "States & handoff library",
        "Specify loading, empty, error, focus and success states alongside the happy path.",
      ],
    ],
    process: [
      "Review the current journey",
      "Simplify the task flow",
      "Establish visual hierarchy",
      "Design every state",
      "Check usability",
    ],
    capabilities: [
      "UX audits",
      "Responsive UI design",
      "Accessibility-aware design",
      "Component specifications",
    ],
    flow: ["Messy interface", "Simplified flow", "Clear UI"],
    system: "Task-focused interface",
    type: "interface",
    workflowTitle: "Fewer competing decisions. A clearer next step.",
    useCases: [
      "Simplify a multi-step form",
      "Improve mobile task completion",
      "Unify inconsistent interface patterns",
    ],
    faq: [
      [
        "Is UX/UI only about visual styling?",
        "No. UX considers the task, sequence and feedback; UI gives that structure a clear visual form. We address both rather than repainting a difficult journey.",
      ],
      [
        "Will designs cover mobile and error states?",
        "The agreed scope should include relevant breakpoints and interaction states, including keyboard focus, loading, empty results and validation.",
      ],
      [
        "Can you work with our design system?",
        "Yes. We review existing components first, reuse what works and propose changes only where the system cannot support the intended experience.",
      ],
    ],
    related: ["product-design", "frontend-development", "mvp-development"],
    proof: [],
    cta: "Where are your users",
    ctaHighlight: "getting stuck?",
  },
  "product-management": {
    eyebrow: "PRODUCT MANAGEMENT",
    lead: "Build ",
    highlight: "the right thing",
    tail: " before building more things.",
    copy: "Bring product strategy, prioritisation, requirements and roadmap discipline into teams that need stronger direction without hiring a full-time product leader.",
    problem: "A busy backlog is not a product strategy.",
    pain: "Requests compete for attention while customer needs, commercial priorities and engineering capacity pull in different directions. Teams need a basis for deciding what not to build.",
    audience:
      "Founders and product teams needing fractional product leadership, clearer priorities or a more credible roadmap.",
    deliverTitle: "Direction the whole team can use.",
    deliver: [
      [
        "Product opportunity framing",
        "Connect customer needs to commercial goals and evidence gaps.",
      ],
      [
        "Prioritised roadmap",
        "Make trade-offs explicit and sequence work around outcomes rather than request volume.",
      ],
      [
        "Delivery-ready decisions",
        "Clarify requirements, acceptance criteria and feedback loops without removing team judgement.",
      ],
    ],
    process: [
      "Understand customer needs",
      "Frame opportunities",
      "Make priority decisions",
      "Shape the roadmap",
      "Review what was learned",
    ],
    capabilities: [
      "Product strategy",
      "Opportunity assessment",
      "Roadmap planning",
      "Requirements & acceptance",
    ],
    flow: [
      "Customer need",
      "Opportunity",
      "Priority",
      "Roadmap",
      "Delivery",
      "Learning",
    ],
    system: "Outcome-led roadmap",
    type: "roadmap",
    workflowTitle: "A roadmap should explain why, not just when.",
    useCases: [
      "Reset a feature-led backlog",
      "Lead a first product release",
      "Provide fractional product direction",
    ],
    faq: [
      [
        "Can you act as a fractional product manager?",
        "Yes. We agree the decision remit, working cadence and relationship with your existing leadership and delivery team.",
      ],
      [
        "How do you prioritise competing requests?",
        "We compare the user problem, commercial relevance, evidence, effort and dependencies. The rationale should be visible so priorities can change when evidence changes.",
      ],
      [
        "How is this different from project management?",
        "Product management focuses on what to build and why. Project management coordinates how agreed work moves through people, dependencies and delivery constraints.",
      ],
    ],
    related: ["product-design", "project-management", "mvp-development"],
    proof: [],
    cta: "Does your roadmap need",
    ctaHighlight: "a stronger reason why?",
  },
  "project-management": {
    eyebrow: "PROJECT MANAGEMENT",
    lead: "Keep important technology work ",
    highlight: "moving.",
    copy: "Bring structure, ownership, communication and delivery discipline to projects that are drifting, blocked or becoming harder to coordinate.",
    problem: "Progress stalls between teams, not just inside tasks.",
    pain: "An unclear scope, unowned dependency or unresolved decision can slow the whole project. More status meetings do not help unless someone can turn information into coordinated action.",
    audience:
      "Business sponsors and delivery teams coordinating technology work across stakeholders, suppliers and internal teams.",
    deliverTitle: "A shared plan with named owners.",
    deliver: [
      [
        "Scope & delivery baseline",
        "Establish the agreed work, dependencies and points that need a decision.",
      ],
      [
        "Coordination & risk ownership",
        "Create a practical cadence for updates, blockers, change and escalation.",
      ],
      [
        "Release readiness",
        "Coordinate testing, approvals, handover and communication around the launch.",
      ],
    ],
    process: [
      "Clarify scope",
      "Plan dependencies",
      "Assign owners",
      "Manage risks & changes",
      "Coordinate release",
    ],
    capabilities: [
      "Delivery planning",
      "Dependency coordination",
      "Risk management",
      "Stakeholder communication",
    ],
    flow: ["Scope", "Plan", "Owners", "Risks", "Delivery", "Release"],
    system: "Delivery coordination board",
    type: "plan",
    workflowTitle: "Make the blocker, owner and next decision visible.",
    useCases: [
      "Recover a drifting delivery plan",
      "Coordinate multiple suppliers",
      "Provide fractional project leadership",
    ],
    faq: [
      [
        "Can you join a project already in progress?",
        "Yes. We first establish the actual state of scope, decisions, dependencies and risk before promising a revised plan.",
      ],
      [
        "Will you replace our existing project tools?",
        "Not unless there is a clear need. The goal is reliable coordination and useful visibility, not another tool rollout.",
      ],
      [
        "How are scope changes handled?",
        "We record the requested change, assess its effect on cost, sequence and risk, then seek an explicit decision from the agreed owner.",
      ],
    ],
    related: ["product-management", "qa-testing", "forward-deploy-engineering"],
    proof: [],
    cta: "What is stopping the work",
    ctaHighlight: "from moving forward?",
  },
  "frontend-development": {
    eyebrow: "FRONTEND DEVELOPMENT",
    lead: "Turn product design into interfaces that ",
    highlight: "hold up in production.",
    copy: "Build responsive, accessible and maintainable interfaces with the same attention to detail in implementation as in design.",
    problem: "The design is only as good as the working interface.",
    pain: "A screen can look right in a mock-up and fail with real data, slower connections or a keyboard. Production frontend work has to handle behaviour, layout and edge cases together.",
    audience:
      "Product and engineering teams that need reliable implementation of a new interface or improvements to an existing frontend.",
    deliverTitle: "Design detail, carried into working code.",
    deliver: [
      [
        "Reusable interface components",
        "Implement coherent components with explicit properties, states and accessible behaviour.",
      ],
      [
        "Responsive product journeys",
        "Build screens that adapt to content, devices and real application data.",
      ],
      [
        "Frontend quality checks",
        "Review keyboard operation, rendering performance and integration behaviour before release.",
      ],
    ],
    process: [
      "Review the design contract",
      "Build component foundations",
      "Connect data & states",
      "Check devices & access",
      "Prepare production release",
    ],
    capabilities: [
      "Component engineering",
      "Responsive implementation",
      "Accessibility testing",
      "Frontend performance",
    ],
    flow: [
      "Design system",
      "Components",
      "Responsive UI",
      "Production interface",
    ],
    system: "Interface component library",
    type: "frontend",
    workflowTitle: "One component system, across real screen sizes.",
    useCases: [
      "Implement a new product interface",
      "Replace fragile UI components",
      "Improve responsive application behaviour",
    ],
    faq: [
      [
        "Can you implement an existing design?",
        "Yes. We review flows, states and component definitions with the designers, and identify missing behaviour before implementation.",
      ],
      [
        "How do you approach accessibility?",
        "We use semantic markup, keyboard support, visible focus and appropriate announcements, then test the relevant journeys. Formal compliance requirements should be agreed separately.",
      ],
      [
        "Can you improve performance without a rewrite?",
        "Often. We investigate the bottleneck first, such as unnecessary JavaScript, data loading or rendering work, before recommending targeted changes.",
      ],
    ],
    related: ["ux-ui-design", "backend-development", "qa-testing"],
    proof: [],
    cta: "Is the working interface",
    ctaHighlight: "living up to the design?",
  },
  "backend-development": {
    eyebrow: "BACKEND DEVELOPMENT",
    lead: "Build the systems your product can ",
    highlight: "depend on.",
    copy: "Create reliable APIs, business logic, integrations and backend architecture designed to support real operational demands.",
    problem: "Unclear system boundaries become operational risk.",
    pain: "When rules are scattered across scripts and data moves without clear contracts, a small change can create unexpected failures. Reliability needs intentional architecture and observable behaviour.",
    audience:
      "Teams building or extending a product that needs dependable data, business rules and system connections.",
    deliverTitle: "A reliable foundation behind the interface.",
    deliver: [
      [
        "API & domain design",
        "Define consistent contracts, validation and the rules that belong in each system boundary.",
      ],
      [
        "Data & integrations",
        "Model records, permissions and supported connections with recovery behaviour in mind.",
      ],
      [
        "Operational readiness",
        "Prepare logging, monitoring, deployment and documentation for the people running the system.",
      ],
    ],
    process: [
      "Map domain boundaries",
      "Define API contracts",
      "Model data & permissions",
      "Implement integrations",
      "Test & instrument",
    ],
    capabilities: [
      "API development",
      "Business logic",
      "Database modelling",
      "System observability",
    ],
    flow: [
      "Application",
      "API",
      "Logic",
      "Database",
      "Integrations",
      "Monitoring",
    ],
    system: "Backend architecture",
    type: "architecture",
    workflowTitle: "Follow a request through explicit system boundaries.",
    useCases: [
      "Build a product API",
      "Connect operational systems",
      "Consolidate duplicated business logic",
    ],
    faq: [
      [
        "Can you work with an existing backend?",
        "Yes. We examine the architecture, contracts, tests and operational constraints before choosing targeted changes or a wider migration.",
      ],
      [
        "How do you choose the architecture?",
        "We consider business rules, expected usage, team capability and operational requirements. Complexity needs a specific reason, not a fashion-driven justification.",
      ],
      [
        "What happens after deployment?",
        "We agree monitoring, incident ownership and handover. Logs and failure signals should be useful to the people responsible for the system.",
      ],
    ],
    related: ["frontend-development", "ai-agents", "qa-testing"],
    proof: [],
    cta: "What does your product",
    ctaHighlight: "need to depend on?",
  },
  "qa-testing": {
    eyebrow: "QA & TESTING",
    lead: "Catch problems ",
    highlight: "before your users do.",
    copy: "Build quality into delivery with structured testing, review and release processes designed to reduce avoidable production risk.",
    problem: "A green build is not the same as a ready release.",
    pain: "Critical journeys can fail even when individual changes appear correct. Late testing turns discoverable issues into launch pressure and makes risk difficult to communicate.",
    audience:
      "Teams preparing a release, improving regression coverage or needing an independent view of product quality.",
    deliverTitle: "Evidence for a better release decision.",
    deliver: [
      [
        "Risk-based test plan",
        "Prioritise the journeys, integrations and failure modes that matter to the business.",
      ],
      [
        "Structured execution & defects",
        "Run agreed checks with reproducible findings, clear severity and useful evidence.",
      ],
      [
        "Regression & release review",
        "Verify fixes and report remaining risks so release owners can make an informed decision.",
      ],
    ],
    process: [
      "Identify release risks",
      "Design representative tests",
      "Execute & record",
      "Fix and retest",
      "Review release evidence",
    ],
    capabilities: [
      "Functional testing",
      "Regression testing",
      "Exploratory testing",
      "Release readiness",
    ],
    flow: ["Build", "Test", "Review", "Fix", "Validate", "Release"],
    system: "Quality review pipeline",
    type: "quality",
    workflowTitle: "A defect is not closed until the fix is verified.",
    useCases: [
      "Review a critical customer journey",
      "Prepare a regression test suite",
      "Assess readiness before launch",
    ],
    faq: [
      [
        "Can testing guarantee there are no bugs?",
        "No. Testing provides evidence about known risks and behaviours; it cannot prove the absence of every defect. We make scope and remaining uncertainty explicit.",
      ],
      [
        "Should every test be automated?",
        "No. Repeatable high-value checks are good candidates, while exploratory work and usability review still need human judgement.",
      ],
      [
        "Can you test work built by another team?",
        "Yes. We agree access, environments, expected behaviour and reporting arrangements so findings are actionable for the responsible engineers.",
      ],
    ],
    related: [
      "frontend-development",
      "backend-development",
      "project-management",
    ],
    proof: [],
    cta: "How confident are you",
    ctaHighlight: "in the next release?",
  },
  "forward-deploy-engineering": {
    eyebrow: "FORWARD DEPLOY ENGINEERING",
    lead: "Put engineering ",
    highlight: "closer to the problem.",
    copy: "Work directly with the people using the system to understand real workflows, implement solutions quickly and improve them in context.",
    problem: "Distance from the workflow hides the real constraints.",
    pain: "A requirement passed between teams can lose the details that determine whether a solution is useful. Engineers need access to the working context and a clear path back to the core product team.",
    audience:
      "Organisations implementing technology in live operational settings where user feedback and engineering decisions must stay closely connected.",
    deliverTitle: "Context at the point of implementation.",
    deliver: [
      [
        "Embedded workflow understanding",
        "Observe how the system is actually used and surface constraints a specification can miss.",
      ],
      [
        "Contextual implementation",
        "Build and adapt integrations or product behaviour with the users and technical owners involved.",
      ],
      [
        "Feedback to the core team",
        "Turn field observations into clear product issues, reusable improvements and documented decisions.",
      ],
    ],
    process: [
      "Join the client workflow",
      "Find the practical constraint",
      "Implement with users",
      "Feed back to engineering",
      "Refine & document",
    ],
    capabilities: [
      "Workflow investigation",
      "Applied integration",
      "Client-side implementation",
      "Technical feedback loops",
    ],
    flow: [
      "Client workflow",
      "Forward Deploy Engineer",
      "Product / Engineering team",
    ],
    system: "Continuous field feedback",
    type: "feedback",
    workflowTitle:
      "The field informs the product. The product improves the field.",
    useCases: [
      "Deploy into an unfamiliar workflow",
      "Resolve integration friction in context",
      "Feed operational learning into a product",
    ],
    faq: [
      [
        "Is this simply extra development capacity?",
        "No. The role connects implementation with direct workflow understanding and feeds learning back to product and engineering owners.",
      ],
      [
        "Do engineers need access to client users?",
        "Useful access to users, technical owners and representative environments is central. We agree practical access and security boundaries first.",
      ],
      [
        "How do changes return to the core product?",
        "We keep a clear record of field-specific configuration, reusable changes and product requests, with review and ownership agreed with the core team.",
      ],
    ],
    related: ["custom-software", "project-management", "ai-automation"],
    proof: [],
    cta: "Where should engineering",
    ctaHighlight: "get closer to the work?",
  },
  seo: {
    eyebrow: "SEO",
    lead: "Make your expertise ",
    highlight: "easier to find.",
    copy: "Improve technical foundations, content structure and search visibility so the right audience can discover your business through traditional search.",
    problem: "Useful expertise can still be difficult to discover.",
    pain: "Crawl barriers, unclear page structure and content disconnected from search intent can prevent the right audience from reaching your business. Publishing more pages does not resolve weak foundations.",
    audience:
      "Businesses with genuine expertise and a website that needs a clearer technical and content path to relevant search demand.",
    deliverTitle: "Build visibility on useful foundations.",
    deliver: [
      [
        "Technical search review",
        "Inspect crawlability, indexation signals, internal links and page performance constraints.",
      ],
      [
        "Intent-led content structure",
        "Map relevant queries to useful pages with clear purpose and coherent hierarchy.",
      ],
      [
        "Measurement & improvement plan",
        "Define meaningful visibility and enquiry signals without treating rankings as a guaranteed outcome.",
      ],
    ],
    process: [
      "Review technical access",
      "Understand search intent",
      "Map useful content",
      "Implement foundations",
      "Monitor & refine",
    ],
    capabilities: [
      "Technical SEO",
      "Search intent mapping",
      "Information structure",
      "Search performance review",
    ],
    flow: [
      "Website",
      "Crawl",
      "Search intent",
      "Content",
      "Rankings",
      "Qualified traffic",
    ],
    system: "Search discovery path",
    type: "search",
    workflowTitle: "Connect a relevant query to a genuinely useful page.",
    useCases: [
      "Fix crawl and indexation barriers",
      "Align service pages with search intent",
      "Improve content navigation",
    ],
    faq: [
      [
        "Can you guarantee rankings?",
        "No. Search positions depend on platform decisions, competition and many changing signals. We focus on sound implementation, relevant content and measurable progress.",
      ],
      [
        "Is SEO just adding keywords?",
        "No. Search intent, technical access, information architecture and useful content all matter. Repetition without substance does not make a page more helpful.",
      ],
      [
        "How does SEO relate to GEO and AEO?",
        "They share useful foundations, but traditional search, generative retrieval and direct answers have different presentation and evaluation needs. We avoid treating them as interchangeable labels.",
      ],
    ],
    related: ["geo", "aeo", "ux-ui-design"],
    proof: [],
    cta: "Can the right audience",
    ctaHighlight: "find your expertise?",
  },
  geo: {
    eyebrow: "GENERATIVE ENGINE OPTIMISATION",
    lead: "Make your business understandable to ",
    highlight: "AI search.",
    copy: "Structure content and authority signals so generative search platforms can better understand, retrieve and reference your expertise.",
    problem: "If your expertise is ambiguous, retrieval becomes harder.",
    pain: "Inconsistent business descriptions, unsupported claims and disconnected content make it difficult for systems to identify what your business knows. A generative answer needs source material it can interpret and reference.",
    audience:
      "Expert-led businesses that want their public information to be clearer and more useful in generative discovery.",
    deliverTitle: "Clear sources for generative discovery.",
    deliver: [
      [
        "Entity & expertise review",
        "Clarify how the business, services and subject expertise are described across the website.",
      ],
      [
        "Retrieval-friendly content",
        "Structure self-contained explanations with consistent terminology and appropriate source context.",
      ],
      [
        "Evidence & observation plan",
        "Improve verifiable authority signals and review how selected systems represent the business without promising inclusion.",
      ],
    ],
    process: [
      "Audit expertise signals",
      "Clarify entities & topics",
      "Structure source content",
      "Connect supporting evidence",
      "Observe retrieval behaviour",
    ],
    capabilities: [
      "Entity clarity",
      "Content structure",
      "Source attribution",
      "Generative discovery review",
    ],
    flow: [
      "Brand content",
      "Structured information",
      "AI retrieval",
      "Generated answer",
    ],
    system: "Generative retrieval path",
    type: "retrieval",
    workflowTitle: "Make the source understandable before chasing the answer.",
    useCases: [
      "Clarify a specialist service offering",
      "Organise an expertise library",
      "Improve source context for AI retrieval",
    ],
    faq: [
      [
        "Can you guarantee an AI platform will cite us?",
        "No. Retrieval and citation decisions belong to the platform and can vary by query, model and time. We improve clarity and evidence, not promise placement.",
      ],
      [
        "How is GEO different from SEO?",
        "GEO focuses on how generative systems interpret and retrieve expertise. Technical access and useful content overlap with SEO, but the resulting answer is not a traditional ranked page list.",
      ],
      [
        "Do we need to publish AI-generated content?",
        "No. The priority is accurate, useful, evidence-backed material about your actual expertise. Content volume is not a substitute for authority or clarity.",
      ],
    ],
    related: ["seo", "aeo", "product-design"],
    proof: [],
    cta: "Is your expertise",
    ctaHighlight: "clear enough to retrieve?",
  },
  aeo: {
    eyebrow: "ANSWER ENGINE OPTIMISATION",
    lead: "Create answers machines can ",
    highlight: "confidently surface.",
    copy: "Structure useful, direct and authoritative content for answer engines and AI-powered discovery experiences.",
    problem: "A question deserves more than a page of vague copy.",
    pain: "Important answers can be buried in broad marketing language, separated from their evidence or written without a clear question in mind. That makes them less useful to people and harder for machines to interpret.",
    audience:
      "Businesses with recurring customer questions and expertise that can be expressed as clear, supported answers.",
    deliverTitle: "Direct answers with visible evidence.",
    deliver: [
      [
        "Question & intent map",
        "Identify the questions customers actually ask and the context behind them.",
      ],
      [
        "Answer-led content modules",
        "Write concise, self-contained answers with appropriate depth, limitations and supporting detail.",
      ],
      [
        "Evidence & markup review",
        "Connect claims to sources and apply suitable structured data where it accurately represents the page.",
      ],
    ],
    process: [
      "Collect real questions",
      "Identify the underlying intent",
      "Write the direct answer",
      "Attach supporting evidence",
      "Review answer presentation",
    ],
    capabilities: [
      "Question research",
      "Answer architecture",
      "Evidence-led content",
      "Structured data review",
    ],
    flow: [
      "Question",
      "Intent",
      "Structured answer",
      "Evidence",
      "AI/search response",
    ],
    system: "Answer evidence chain",
    type: "answer",
    workflowTitle: "One clear question. An answer that can stand on its own.",
    useCases: [
      "Build a useful service FAQ",
      "Explain a complex buying decision",
      "Structure evidence-backed technical answers",
    ],
    faq: [
      [
        "Is AEO just an FAQ page?",
        "No. FAQs are one useful format, but answer-led structure can also improve service pages, guides and technical explanations when it fits the actual user question.",
      ],
      [
        "Does structured data guarantee an answer feature?",
        "No. Markup describes eligible content; it does not force a platform to display it. It must accurately match what is visible on the page.",
      ],
      [
        "How do you choose which questions to answer?",
        "We use customer conversations, support queries and relevant search intent. Questions should help a real decision rather than exist only to capture a phrase.",
      ],
    ],
    related: ["seo", "geo", "product-design"],
    proof: [],
    cta: "Which customer question",
    ctaHighlight: "needs a better answer?",
  },
};
// No approved client case studies have been supplied. Keep proof references empty
// rather than promoting illustrative examples into evidence.
