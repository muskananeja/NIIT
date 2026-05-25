// content.js - long content tables: offering landing page details

const OFFERING_DETAILS = {
  lft: {
    lede: `When the operating model evolves faster than the learning function, the gap shows up in time-to-competence — not the LMS dashboard.`,
    cd: 'JE',
    challenge: `Learning and Talent functions evolved independently across business units, regions, and teams — leaving **fragmented operating models, inconsistent learner experiences, duplicated investments, and disconnected technologies**. Leaders now expect L&T to enable transformation, but the underlying architecture wasn't built for that role.`,
    whatWeDo: `The hard part isn't designing a better operating model — it's **earning the right to redesign while the function keeps delivering**. We sequence the transformation so today's work funds tomorrow's structure. We don't replace what works; we put a connective tissue around it.`,
    process: [
      { t: 'Learning activity analysis', d: 'Analyze current learning operations across the enterprise; surface initiatives needed to enable transformation.' },
      { t: 'Operating model design', d: 'Define the future-state Learning Operating Model and governance framework — processes, roles, standards, interaction models.' },
      { t: 'Transition playbook', d: 'Build a Learning Operating Model Transition Playbook to operationalize the strategy and guide implementation of key initiatives.' },
      { t: 'Phased roadmap', d: 'Create phased implementation and transition plans to support model redesign, organizational alignment, and adoption of new ways of working.' },
      { t: 'Strategic advisory', d: 'Provide ongoing transformation support across governance, learning operations, stakeholder alignment, and implementation planning.' }
    ],
    outcomes: [
      'Align Learning and Talent strategy, investments, and governance more closely to business priorities and workforce capability needs',
      'Create a more connected, scalable, and business-led Learning ecosystem across functions, geographies, and teams',
      'Improve workforce readiness and agility through more targeted, skills-focused, learner-centric development experiences',
      'Increase operational efficiency, transparency, and consistency across learning processes, technologies, and vendors',
      'Build a stronger foundation for long-term workforce transformation, capability building, and organizational resilience'
    ],
    stories: [
      {
        client: 'Leading Global Pharma', industry: 'Pharma & Life Sciences',
        title: 'Enterprise Learning Transformation Program',
        challenge: 'The client engaged CAS to support a broader **enterprise Learning Transformation** aimed at aligning Learning more closely with **evolving business priorities** and future ways of working. A Learning Function Review identified the need to **redesign the Learning Operating Model** to improve governance, scalability, consistency, and alignment.',
        did: ['Conducted **learning activity analysis** and recommended key initiatives to enable transformation','Developed a comprehensive **Learning Operating Model Transition Playbook**','Defined **lifecycle processes, governance structures, standards, roles, and interaction models** across the enterprise','Created **phased implementation and transition plans**','Provided ongoing strategic advisory across governance, operations, and stakeholder alignment'],
        outcome: 'Established the foundation for a more **agile, scalable, and business-aligned** Learning organization. Enabled **greater consistency in governance, operations, and learner experience** — creating a stronger framework for **skills-focused, personalized, and business-driven learning**.',
        metrics: [{ v: 'Enterprise', l: 'Scope' }, { v: 'Multi-phase', l: 'Transition' }, { v: 'Future-state', l: 'Op model' }]
      },
      {
        client: 'Global Pharma (multi-engagement)', industry: 'Pharma & Life Sciences',
        title: 'Adaptive Learning Organization (ALO) Maturity Lift',
        challenge: 'A multi-business-unit pharma needed to **shift Learning from delivery-focused to a strategic enterprise capability**. Maturity varied across functions; governance, analytics, and operating model needed alignment.',
        did: ['Benchmarked **maturity across Sense / Decide / Evolve** capabilities','Mapped fragmented practices to the **enterprise value chain**','Designed a **phased capability uplift roadmap**','Defined **measurement framework** linked to business outcomes'],
        outcome: '**Repositioned Learning** from request-taker to strategic enabler. Created a **shared maturity baseline** across BUs and a roadmap to close the gaps. Established **early-stage signals** for downstream analytics investment.',
        metrics: [{ v: '3 capabilities', l: 'Sense/Decide/Evolve' }, { v: 'Multi-BU', l: 'Scope' }, { v: 'Phased', l: 'Roadmap' }]
      }
    ]
  },
  acad: {
    lede: `A learning catalogue isn't an academy. The difference is what happens between a course completion and a confident first conversation with a customer.`,
    cd: 'BK',
    challenge: `Functions have content but **no academy structure, onboarding journey, or upskilling pathway**. New hires walk into courses without orientation. Sales teams rely on discounts because they lack product confidence. Leaders want a **scalable academy model** — not a one-time learning solution that has to be rebuilt for the next function.`,
    whatWeDo: `Academies fail when they're built as content libraries first and experiences second. We work **backwards from the moment of confidence** — the first call, the first decision — and design the journey to make that moment inevitable. Then we leave behind a playbook so the next academy doesn't start from scratch.`,
    process: [
      { t: 'Analyze', d: 'Stakeholder workshops and interviews to understand priorities, learner groups, business pain points, and current learning landscape. Review existing catalogue to identify what is available, outdated, or missing.' },
      { t: 'Design', d: 'Define the academy vision and high-level structure. Identify priority roles, core skills, and the learning journeys required for new hires and existing employees.' },
      { t: 'Develop', d: 'Map available content to roles and skills, organize the catalogue into intuitive journeys, and create a list of recommended interventions to fill gaps.' },
      { t: 'Implement', d: 'Create academy wireframes and launch support materials so the client can visualize how the academy works on the learning platform.' },
      { t: 'Evaluate', d: 'Build the Academy Playbook with governance, ownership, processes, content standards, maintenance, measurement, and guidance for future academy development.' }
    ],
    outcomes: [
      'Structured academy model with clear onboarding and upskilling journeys for each function',
      'A guided learning experience — learners understand where to begin and how learning connects to their role',
      'Organized learning catalogue with skill and content gaps identified',
      'Academy Playbook for sustaining the academy over time — governance, ownership, content maintenance, quality standards, measurement',
      'LMS/LXP wireframes making the solution easier for stakeholders to visualize, discuss, and implement'
    ],
    stories: [
      {
        client: 'Qatar Airways', industry: 'Aviation',
        title: 'Qatar Airways Sales Academy',
        challenge: 'The Sales team had learning resources but **no academy structure or guided pathway**. New hires were moving straight into courses without context. **Sales teams were relying on discounts to close deals** — pointing to a deeper need for stronger product understanding and consultative selling skills. The ask was for a **scalable academy model**, not a one-time solution.',
        did: ['Stakeholder workshops + **full content catalogue review**','Defined the **academy vision**, priority sales roles, and core skills','Designed **onboarding journeys** (new hires, lateral movers, experienced hires) and **upskilling journeys**','Built **academy wireframes** for LMS/LXP visualization','Delivered the **Academy Playbook** — governance, ownership, content standards, measurement'],
        outcome: 'Moved Qatar Airways from "we have learning content" to "**we have a clear capability-building experience**." Gave learners a guided journey, organized the catalogue, identified gaps, and created a **sustainable framework that scales to future academies**.',
        metrics: [{ v: '3 personas', l: 'Onboarding paths' }, { v: 'Playbook', l: 'Scaling model' }, { v: 'LMS-ready', l: 'Delivery' }]
      },
      {
        client: 'Aviation Sales Function', industry: 'Aviation',
        title: 'Sales Capability Academy Blueprint',
        challenge: 'Sales leaders needed a **role-based capability builder** — not just a course catalogue. Onboarding was inconsistent and ramp time was longer than commercial targets allowed. Upskilling around **consultative selling and commercial confidence** was underdeveloped.',
        did: ['Mapped **role archetypes** and capability priorities','Designed **modular journeys** by role and tenure','Layered in **blended experiences** — buddy, coach, manager check-ins','Built **measurement points** at each journey milestone'],
        outcome: 'Established a **role-led academy structure** with clear progression paths. Reduced perceived friction for new hires and gave the business a **playbook to replicate** across other commercial functions.',
        metrics: [{ v: 'Role-based', l: 'Architecture' }, { v: 'Blended', l: 'Experience' }, { v: 'Modular', l: 'Scaling' }]
      }
    ]
  },
  adcb: {
    lede: `The bottleneck on AI isn't the tools. It's the workforce's judgement about when to trust them — and where humans should still hold the pen.`,
    cd: 'CB',
    challenge: `Heavy investment in digital platforms and AI tools — but **operational transformation lags**. The challenge isn't technology deployment, it's **redesigning how work gets done in AI-enabled environments**. Capability frameworks are anchored in outdated role structures. Learning investments are disconnected from workforce priorities. Leaders can't tell which digital capabilities actually matter.`,
    whatWeDo: `AI capability is three problems, not one: **fluency for the broad workforce**, **judgement for leaders**, and **depth for specialists**. We refuse to treat them as a single curriculum. We define the capabilities that matter for each, sequence the investment, and build the measurement to prove adoption — not just attendance.`,
    process: [
      { t: 'Strategic context', d: 'Analyze business priorities, job architecture, strategic initiatives, and leadership input on AI.' },
      { t: 'Market benchmarking', d: 'Research peers, adjacent industries, and external skills reports to identify digital, data, and AI capability trends.' },
      { t: 'Capability surfacing', d: 'Facilitate working sessions across the value chain to surface capability gaps and skills priorities.' },
      { t: 'Capability model', d: 'Develop a Digital & AI Skills and Capability Model spanning AI foundations, leadership, human, technical, and deep technical dimensions.' },
      { t: 'Validation workshop', d: 'Run a Future of Work & Digital Capability workshop with senior stakeholders to validate the model against business priorities and constraints.' },
      { t: 'Prioritization', d: 'Apply a structured prioritisation framework to distinguish enterprise-wide quick wins from deeper business-unit-specific capability bets.' },
      { t: 'Implementation roadmap', d: 'Build a roadmap covering 6 workstreams including governance and measurement for integrated, sustained capability development.' }
    ],
    outcomes: [
      'Clearer prioritisation of enterprise AI, digital, and data capabilities tied to business strategy',
      'Better alignment between workforce capability investments and evolving operating models',
      'Stronger leadership readiness for AI-enabled decision-making and organisational change',
      'More consistent governance around digital capability development, trust, and ethical AI adoption',
      'Improved workforce adoption of new tools, workflows, and ways of working',
      'Greater visibility into capability gaps, role evolution, and future workforce requirements'
    ],
    stories: [
      {
        client: 'UCB', industry: 'Pharma & Life Sciences',
        title: 'Digital Capability Model & Implementation Roadmap',
        challenge: 'UCB had ambition to use **digital, data, and AI to accelerate scientific discovery** and improve patient outcomes. But capability requirements were **evolving faster than the existing skills architecture**, and **maturity varied across PVUs**. The organisation needed clarity on **which digital and AI capabilities mattered most** and where to focus upskilling investment.',
        did: ['Analyzed business priorities, **job architecture**, and Techwolf insights','Benchmarked **digital/data/AI trends** across pharma and adjacent industries','Facilitated **working sessions across the value chain** to surface gaps','Built a **Digital & AI Skills and Capability Model** spanning AI foundations, leadership, human, technical, deep-technical','Ran a **Future of Work workshop** to validate against business priorities','Applied a **prioritisation framework** for enterprise vs PVU-specific bets','Developed a **6-workstream roadmap** including governance and measurement'],
        outcome: 'Gave UCB an **evidence-based foundation** for AI capability investment. Translated transformation ambition into a **structured capability model, prioritisation logic, and roadmap**. Positioned UCB to focus near-term on **Data & AI Literacy, Responsible AI, and Adaptive Thinking** at enterprise scale — while recognising deeper specialist capabilities need PVU-led pathways.',
        metrics: [{ v: '5 dimensions', l: 'Capability model' }, { v: '6 workstreams', l: 'Roadmap' }, { v: 'Enterprise+PVU', l: 'Scope' }]
      },
      {
        client: 'Global Biopharma R&D', industry: 'Pharma & Life Sciences',
        title: 'Enterprise AI Fluency Program',
        challenge: 'A biopharma R&D function needed to **build AI fluency across scientists and clinicians**, not just data teams. Existing learning was fragmented and **disconnected from the operating model shifts** AI was driving in discovery and clinical workflows.',
        did: ['Mapped **AI-touched workflows** across discovery, clinical, medical affairs','Built **role-aware capability tracks** — foundations, applied, advanced','Designed **leadership readiness module** on Responsible AI and decision-making','Embedded **adoption signals** into the measurement architecture'],
        outcome: 'Created a **workforce-wide AI fluency baseline** aligned to the operating model. Gave leaders a **decision framework for human-AI augmentation** rather than a generic tech roll-out. Established **measurement of adoption, not just training completion**.',
        metrics: [{ v: '3 tracks', l: 'Role-aware' }, { v: 'Leader+IC', l: 'Coverage' }, { v: 'Adoption', l: 'Measure' }]
      }
    ]
  },
  saf: {
    lede: `Skills frameworks fail when they describe roles instead of decisions. The architecture has to start with what people are choosing between — not what they're doing.`,
    cd: 'GJ',
    challenge: `Skills information lives across **disconnected systems and functions** — producing inconsistent definitions, fragmented job architectures, and limited visibility into actual workforce capability. Talent, learning, performance, and workforce planning all run on different versions of the same truth.`,
    whatWeDo: `We build skills architectures around the **decisions the business needs to make** — not the jobs people happen to hold. The architecture has to survive a reorg; most don't. We design with reuse in mind, so hiring, mobility, performance, and learning all run off one framework instead of four.`,
    process: [
      { t: 'Discovery & stakeholder consultation', d: 'Working sessions with senior stakeholders to identify critical decision moments, capability expectations, and gaps.' },
      { t: 'Capability framework design', d: 'Build the enterprise capability framework — key skills, sub-behaviors, mindset shifts, enablers, and business impacts.' },
      { t: 'Behavioral architecture', d: 'Translate enterprise behaviors into observable actions and practical workplace application using "What, Why, How, Do" definitions.' },
      { t: 'Role-based personas', d: 'Create role-based learner personas, competency grids, and moments-that-matter maps aligned to enterprise roles and decision contexts.' },
      { t: 'Capability development architecture', d: 'Design a scalable, digital-first capability development architecture — learning objectives, modular interventions, governance, scaling models, and measurement.' }
    ],
    outcomes: [
      'Enterprise-wide view of the skills and capabilities needed to support business strategy and future ways of working',
      'Consistent skills definitions, proficiency expectations, and capability frameworks across roles, functions, and talent processes',
      'Visibility into workforce capabilities, skill gaps, and development priorities for more informed talent decisions',
      'Transparent, skills-based approaches to learning, career mobility, staffing, performance management, and workforce planning',
      'Scalable foundation for skills-driven talent practices, workforce agility, and long-term organisational adaptability'
    ],
    stories: [
      {
        client: 'Rio Tinto', industry: 'Mining & Resources',
        title: 'S&OP Leadership Capability Framework',
        challenge: 'Strong **Sales and Operational Planning (S&OP) processes existed**, but **leadership engagement and decision-making behaviors** across GM and MD levels were inconsistent. S&OP was viewed as a **planning process rather than a cross-functional leadership capability** — resulting in **siloed decision-making and inconsistent leader behaviors**.',
        did: ['Working sessions with senior stakeholders to identify **critical S&OP decision moments**','Developed an **S&OP Leadership Behaviors and Mindset Framework**','Created **role-based learner personas** and character sketches','Designed a **role-based learning strategy and capability architecture**','Designed a **scalable capability development journey** and learning resource build plan'],
        outcome: 'Established a **clear, practical definition of effective S&OP leadership**. Enabled the client to move from **process-centric participation to collaborative, business-led decision-making** focused on enterprise value creation. Created a **scalable foundation for leadership onboarding and behavior reinforcement**.',
        metrics: [{ v: 'GM/MD level', l: 'Leadership scope' }, { v: 'Decision moments', l: 'Architecture' }, { v: 'Cross-functional', l: 'Reach' }]
      },
      {
        client: 'Novartis', industry: 'Pharma & Life Sciences',
        title: 'Enterprise Capability Framework — Cross-functional Collaboration',
        challenge: 'As Novartis evolved towards a **unified Enterprise Skills strategy**, **Cross-functional Collaboration and Stakeholder Engagement** were identified as critical priorities to support its **Network Teams model**. Existing efforts were **cohort-based and decentralized** — limiting scalability and consistency.',
        did: ['Discovery workshops to identify **collaboration behaviors and mindset shifts**','Built an **enterprise capability framework** with skills, behaviors, enablers, and business impacts','Designed **behavioral architecture** using "What, Why, How, Do" definitions','Created **role-based competency grids and moments-that-matter maps**','Designed a **scalable, digital-first capability development architecture** with governance and measurement'],
        outcome: 'Helped Novartis advance its shift towards a **networked, enterprise-first organization** by creating a **shared framework for collaboration and decision-making**. Established clearer expectations for **operating in complex, matrixed environments**. Created a strong foundation for **enterprise-wide capability building**.',
        metrics: [{ v: 'Enterprise', l: 'Network Teams' }, { v: 'Digital-first', l: 'Architecture' }, { v: 'Behaviors-led', l: 'Approach' }]
      }
    ]
  },
  lam: {
    lede: `If your dashboard only shows completions, you don't have measurement — you have attendance records. Real measurement starts where the work happens.`,
    cd: 'MW',
    challenge: `Mature learning ecosystems but **limited capability intelligence**. Data sits across LMS, LXP, CRM, workflow, and operational platforms — yet reporting still focuses on completions and satisfaction. Leaders can't link capability investment to **adoption, productivity, or workforce readiness**. The shift to AI-enabled work makes the old reporting model obsolete.`,
    whatWeDo: `Learning analytics done well is **operational, not retrospective**. We design measurement that fires **while the work is happening** — not three months after it ended. We connect learning signals to workflow and outcome signals, and embed the measurement into the decisions, not into a dashboard nobody reads.`,
    process: [
      { t: 'Maturity assessment', d: 'Enterprise-wide stakeholder interviews across commercial, marketing, product, R&D, customer success, and systems leadership to assess current measurement maturity and business alignment.' },
      { t: 'Data architecture review', d: 'Assess learning data architecture, system integration gaps, reporting processes, and data readiness across LMS, CRM, event, and operational platforms.' },
      { t: 'Future-state vision', d: 'Design a learning analytics vision linking learning activities to adoption, utilisation, and commercial performance outcomes.' },
      { t: 'Measurement framework', d: 'Develop a phased measurement framework, analytics roadmap, KPI structure, and governance approach.' },
      { t: 'Alignment workshops', d: 'Facilitate leadership workshops to align stakeholders on definitions, measurement priorities, taxonomy standards, and operating principles.' }
    ],
    outcomes: [
      'Shift learning measurement from retrospective reporting to continuous organisational sensing',
      'Connect learning, workflow, customer, and operational signals into a unified decision-making ecosystem',
      'Improve visibility into capability application, adoption patterns, and behavioural change',
      'Enable AI-assisted identification of performance risks, engagement gaps, and intervention opportunities',
      'Establish scalable governance, taxonomy, and measurement architectures across learning ecosystems',
      'Improve investment decisions by linking capability-building activity to operational and commercial outcomes'
    ],
    stories: [
      {
        client: 'Global Animal Health Diagnostics', industry: 'Animal Health',
        title: 'Customer Education Learning Analytics Strategy',
        challenge: 'A broad customer education ecosystem — **live events, webinars, on-demand learning, trade shows, in-clinic education** — but data was **fragmented across systems** and disconnected from business metrics like **product adoption, utilisation, and customer engagement**. Leadership wanted **clearer evidence of how education influenced commercial outcomes**, especially for strategic diagnostic launches.',
        did: ['Enterprise-wide stakeholder interviews across **commercial, marketing, product, R&D, customer success**','Assessed **learning data architecture** and integration gaps across LMS, CRM, event, and operational platforms','Designed a **future-state analytics vision** linking education to adoption and commercial performance','Developed a **phased measurement framework, analytics roadmap, KPI structure, and governance approach**','Facilitated leadership workshops to align on definitions, measurement priorities, and operating principles'],
        outcome: 'Provided a **structured enterprise view** of how customer education could be measured, governed, and linked to commercial outcomes. Created **stakeholder alignment** on what should be measured and how customer education should be defined. Positioned the organisation to move from **fragmented activity reporting toward integrated, business-aligned learning analytics**.',
        metrics: [{ v: 'Enterprise', l: 'Stakeholder reach' }, { v: 'Multi-system', l: 'Data architecture' }, { v: 'Phased', l: 'Roadmap' }]
      },
      {
        client: 'Global Pharma Commercial', industry: 'Pharma & Life Sciences',
        title: 'Capability Intelligence & Adoption Sensing',
        challenge: 'A commercial learning function had **rich LMS data but limited capability intelligence**. Leaders couldn\'t link capability investment to **commercial KPIs** like product adoption, account growth, or behaviour change in customer-facing reps.',
        did: ['Mapped **signal sources** across LMS, CRM, workflow, and outcomes platforms','Defined a **capability-to-outcome linkage model**','Designed a **continuous sensing architecture** instead of periodic reporting','Built a **governance and decision-rights** model for measurement'],
        outcome: 'Shifted measurement from **retrospective reporting to real-time capability sensing**. Gave commercial leaders **evidence-based view** of where capability investment was paying off. Created the **operating discipline** for AI-enabled analytics adoption.',
        metrics: [{ v: '4 systems', l: 'Signal sources' }, { v: 'Continuous', l: 'Sensing' }, { v: 'AI-ready', l: 'Architecture' }]
      }
    ]
  },
  lsg: {
    lede: `Governance isn't process documentation. It's the operating discipline that decides what gets built, what gets retired, and who gets to break the rules.`,
    cd: 'JE',
    challenge: `**Fragmented learning content development** across regions and functions, with limited governance and quality assurance. **Low visibility into the content lifecycle, compliance, and audit readiness** — critical risk in GxP environments. Heavy reliance on external vendors, with no scalable way to empower internal SMEs.`,
    whatWeDo: `Governance is the system that **decides**; standards are the system that **constrains**. Most clients have neither — and bolt on processes that mimic both. We design the actual system: who chooses, who escalates, who builds, who audits. Then we make it real with the tools and rituals that hold it together.`,
    process: [
      { t: 'Discovery & AS-IS analysis', d: 'Stakeholder interviews and current-state analysis to define gaps and future-state vision.' },
      { t: 'Framework co-design', d: 'Co-design the learning content development framework, aligned with business needs and learning culture.' },
      { t: 'MVP definition', d: 'Develop a Minimum Viable Product with core and advanced service levels.' },
      { t: 'Governance & workflows', d: 'Establish end-to-end governance, workflows, and lifecycle management processes — plus quality assurance checkpoints.' },
      { t: 'Tiered development model', d: 'Introduce a multi-tier development model (e.g. Self-Checkout, Studio, Boutique) to support different complexity levels.' },
      { t: 'Intake system', d: 'Design and implement a structured intake and triage system for learning needs.' },
      { t: 'Beta pilot & activation', d: 'Run beta pilot with refinement cycles. Deliver enablement assets including communication toolkit and activation playbook.' }
    ],
    outcomes: [
      '**Consistent and standardised** approach to learning content development across regions and teams',
      '**Compliance, audit readiness, and quality assurance** through structured governance and checkpoints',
      '**End-to-end visibility** of the content lifecycle — improving control and decision-making',
      '**Reduced dependency on external vendors** by empowering SMEs and internal teams',
      'Improved **speed, scalability, and efficiency** of content development and deployment'
    ],
    stories: [
      {
        client: 'UCB', industry: 'Pharma & Life Sciences',
        title: 'U-KNOW Learning Content Development Framework',
        challenge: 'UCB faced **fragmented and inconsistent** learning content creation across global teams. **No unified governance model** led to inefficiencies, duplication, and lack of standardisation. The organisation needed **stronger compliance mechanisms** to meet **GxP regulatory standards** and improve audit readiness — while reducing reliance on external vendors and empowering internal stakeholders.',
        did: ['Co-designed the **U-KNOW Learning Content Development Framework** aligned with UCB\'s business needs','Conducted discovery, stakeholder interviews, and AS-IS analysis','Developed an **MVP with core and advanced service levels**','Established **end-to-end governance, workflows, and lifecycle management**','Introduced a **three-tier development model**: Self-Checkout, Learning Studio, Learning Boutique','Designed the **Learning Launchpad** for structured intake and triage','Led a beta pilot and refinement cycle','Delivered enablement assets including communication toolkit and activation playbook'],
        outcome: 'Enabled UCB to **standardise and streamline** its learning content development processes globally — significantly improving **consistency, compliance, and efficiency**. Increased visibility across the content lifecycle, **strengthened audit readiness in a regulated environment**, and reduced dependency on external vendors. Established a strong governance foundation for sustainable adoption.',
        metrics: [{ v: '3-tier', l: 'Development model' }, { v: 'GxP', l: 'Audit-ready' }, { v: 'Global', l: 'Scope' }]
      },
      {
        client: 'Rio Tinto Iron Ore', industry: 'Mining & Resources',
        title: 'Governance Model Playbook',
        challenge: '**Fragmented decision-making** across markets and stakeholders. Lack of clarity on **who owned which decisions** across the portfolio. Limited structure for prioritization, escalation, and trade-offs — making it difficult to scale the function as demand grew.',
        did: ['Designed a comprehensive **Governance Model Playbook**','Defined **governance layers** — portfolio, program, and execution','Established **decision rights, ownership, and escalation paths**','Defined **operating cadence** — annual, quarterly, monthly planning cycles','Established clear rules for **prioritization and portfolio trade-offs**'],
        outcome: 'Enabled **consistent and transparent decision-making** across regions. Reduced reliance on informal escalation and relationship-driven decisions. Created a **scalable governance foundation** to support portfolio growth — moving the function from request-taker to portfolio owner.',
        metrics: [{ v: '3 layers', l: 'Governance model' }, { v: 'Annual–monthly', l: 'Cadence' }, { v: 'Multi-region', l: 'Scope' }]
      }
    ]
  },
  po: {
    lede: `Most learning portfolios are bloated for the same reason they were built: nobody owns the retire-decision. The savings sit there waiting for someone to make the call.`,
    cd: 'MW',
    challenge: `**Bloated, fragmented, and underperforming portfolios** — surfaces during LMS/LXP transitions, restructuring, or MLS onboarding. **Thousands of courses with no single source of truth**, 200+ versions of the same topic, outdated assets, inconsistent taxonomy. Learners are overwhelmed; engagement and completion collapse.`,
    whatWeDo: `Optimization isn't about finding what to cut — it's about **confronting what was already broken**. We make the **retire decision the client has been postponing**, with the data to defend it. We don't grade the portfolio politely. We tell you what to keep, what to kill, and what nobody noticed was already gone.`,
    process: [
      { t: 'Phase 1 — Portfolio clean-up', d: 'Consolidate data across LMS/LXP and other systems. Clean and standardize metadata (taxonomy, tags, ownership). Create a single unified catalogue. Identify duplicates, outdated courses, and low-engagement assets.' },
      { t: 'Phase 2 — Content-level optimization', d: 'Review course design and instructional quality. Assess against business relevance, learning effectiveness, modality fit, and content duplication. Assign clear recommendations: retain, retire, refresh, replace, or rationalize.' },
      { t: 'Final deliverables', d: 'Clean, standardized LMS-ready catalogue. Detailed course-level recommendations. Cost-saving and impact analysis. Execution roadmap. Optional governance playbook for sustainability.' }
    ],
    outcomes: [
      'Significant cost reduction and avoidance — e.g. up to $24.9M net savings in year 1 on a recent engagement',
      'Significant reduction in total courses; elimination of duplication and outdated content',
      'Clearer, structured learning pathways; reduced cognitive overload',
      'Improved engagement and completion rates',
      'Reduction in total learning hours — thousands of hours returned to the business',
      'Faster time-to-competence'
    ],
    stories: [
      {
        client: 'Rio Tinto Iron Ore', industry: 'Mining & Resources',
        title: 'Full Portfolio Optimization (Level 2)',
        challenge: 'Portfolio of **3,300+ courses across multiple systems**. **Poor data quality, duplication, unclear ownership**. No clear definition of mandatory learning. Cost and complexity were rising — and learner engagement was declining.',
        did: ['**Consolidated and cleaned** portfolio data across systems','Conducted **full course-level review and optimization**','Built **governance frameworks** and ongoing maintenance processes','Defined **retain / retire / refresh / replace / rationalize** decisions for every asset'],
        outcome: 'Reduced portfolio by **~30%** (766 courses retired). Delivered **$27.6M annual savings potential**. Reduced learning hours by **~197,000 annually**. Established governance for long-term sustainability — transforming learning from a **compliance-heavy burden into a strategic, efficient system**.',
        metrics: [{ v: '$27.6M', l: 'Annual savings' }, { v: '~30%', l: 'Portfolio cut' }, { v: '197K hrs', l: 'Time returned' }]
      },
      {
        client: 'Unilever', industry: 'Consumer Goods',
        title: 'Pathway Optimization & Platform Transition',
        challenge: '**4,700+ learning pathways** in Degreed. **Low engagement, duplication, poor skills alignment**. Transition to Workday required portfolio clean-up — and the team needed evidence-based decisions on what to keep.',
        did: ['Consolidated and analyzed **pathway data**','Optimized **260 strategic pathways**','Improved **metadata, skills tagging, and discoverability**','Identified **engagement and duplication patterns** at scale'],
        outcome: 'Identified **2,400+ pathways for retirement**. Highlighted major engagement gaps (e.g. **2,292 pathways unused in a year**). Created a **prioritized, streamlined portfolio aligned to skills** — ready for the platform transition.',
        metrics: [{ v: '2,400+', l: 'Retired pathways' }, { v: '260', l: 'Strategic kept' }, { v: 'Skills-aligned', l: 'New catalogue' }]
      }
    ]
  },
  lfr: {
    lede: `L&D functions don't usually need a strategy — they need a clear-eyed read of where they are, and the courage to retire what isn't working before adding more.`,
    cd: 'JE',
    challenge: `Learning functions evolve **faster than their structure can absorb**. No clear strategic direction, fragmented operating model, weak linkage to business impact. Common when **new leadership enters**, transformation kicks off, or the function is expected to become a strategic enabler. The patterns are predictable; the fixes are not.`,
    whatWeDo: `Most reviews surface 30 problems and recommend 30 fixes. We surface **the three that actually matter**, sequence them, and tell the client **what to stop doing first**. We benchmark, but we don't hide behind it — the recommendation is sharper than the maturity score.`,
    process: [
      { t: 'Define scope & framework', d: 'Select the maturity model or benchmark (ALO, value chain). Align on scope — full function or targeted areas. Define assessment criteria.' },
      { t: 'AS-IS data collection', d: 'Leadership interviews, stakeholder focus groups, surveys, maturity scoring, document review, site visits, workshops. Capture both quantitative metrics and qualitative insights.' },
      { t: 'Diagnostic & benchmarking', d: 'Assess current maturity against selected framework. Identify gaps vs best practice, root causes of inefficiency, variability across teams.' },
      { t: 'Insight alignment & validation', d: 'Collaborative workshops to validate findings, align stakeholders on key issues, define priority improvement areas and initial solution directions.' },
      { t: 'Future vision & roadmap', d: 'Define target state across operating model, processes, governance, capabilities, and technology. Build a phased roadmap including quick wins and strategic transformation initiatives. Develop supporting business case and investment rationale.' }
    ],
    outcomes: [
      'Clear, evidence-based understanding of current maturity, strengths, and gaps',
      'Alignment across stakeholders on current state reality and transformation priorities',
      'Defined future vision for the learning function',
      'Structured, prioritized roadmap with clear sequencing and investment focus areas',
      'Stronger alignment between learning strategy and business priorities',
      'Learning evolves into a strategic business enabler — governed, scalable, measurable'
    ],
    stories: [
      {
        client: 'Pfizer GCET', industry: 'Pharma & Life Sciences',
        title: 'Global Commercial Learning Operations Transformation',
        challenge: 'Rapidly **expanding remit with fragmented processes and limited governance**. Learning function operating in a **reactive, delivery-focused mode** — with limited ability to link learning to business readiness and outcomes.',
        did: ['Conducted **comprehensive assessment** of the learning function','Defined a **future-state operating model** and transformation playbook','Established **governance principles, operating structure, and measurement framework**','Designed **stakeholder alignment** across global commercial teams'],
        outcome: 'Positioned learning as a **governed enterprise operating system**. Shifted from **reactive delivery to planned, portfolio-driven execution**. Enabled stronger linkage between learning and **commercial readiness**.',
        metrics: [{ v: 'Global', l: 'Scope' }, { v: 'Future-state', l: 'Op model' }, { v: 'Portfolio-led', l: 'Execution' }]
      },
      {
        client: 'Anglo American', industry: 'Mining & Resources',
        title: 'ALO Benchmarking Assessment',
        challenge: 'Learning practices were **fragmented and inconsistent** across disciplines. Limited alignment on **learning needs, roles, and strategic direction**.',
        did: ['Assessed the Technical Academy using the **Adaptive Learning Organization (ALO) model**','Conducted **surveys, focus groups, and stakeholder feedback** sessions','Benchmarked maturity across **Sense, Decide, Evolve** capabilities','Identified **maturity level between fragmented and cohesive**'],
        outcome: 'Highlighted key improvement areas: **data & analytics, learning strategy, governance and roles**. Provided foundation for **continuous improvement planning and future roadmap development**.',
        metrics: [{ v: '3 lenses', l: 'Sense/Decide/Evolve' }, { v: 'Maturity', l: 'Baseline' }, { v: 'Roadmap', l: 'Foundation' }]
      },
      {
        client: 'Siemens Energy', industry: 'Energy & Resources',
        title: 'New Hire Training Transformation Business Case',
        challenge: '**Highly variable and site-specific** training approaches. **Limited standardization** across content, delivery, and infrastructure. Difficulty **scaling training** to meet rapid growth needs.',
        did: ['Conducted **current-state assessment** across multiple sites','Identified **gaps across the training value chain**','Developed a **future vision** and prioritized transformation recommendations','Built a **phased implementation roadmap and business case**'],
        outcome: 'Defined **10 key initiatives** to mature training capability. Enabled shift toward a **standardized, scalable training model** and structured learning journeys. Created a **clear investment roadmap** to support global scale.',
        metrics: [{ v: '10 initiatives', l: 'Roadmap' }, { v: 'Multi-site', l: 'Scope' }, { v: 'Standardized', l: 'Future-state' }]
      }
    ]
  },
  ljp: {
    lede: `A journey isn't a playlist. It's the right learning at the right point of need, supported by the right human at the right moment.`,
    cd: 'BK',
    challenge: `Content is everywhere but the **experience isn't flowing**. Learners don't know what to take first, what matters for their role, or how learning connects to their day-to-day. **New joiners, lateral movers, and experienced hires** all get the same generic onboarding. The cost shows up in ramp time, confidence, and early-tenure attrition.`,
    whatWeDo: `The unit of learning isn't a course — it's a **moment of work**. We design journeys around those moments, not around topics, modalities, or time. We layer in the human: a buddy at week one, a manager check-in at week four, a peer review at week twelve. The courses are the easiest part.`,
    process: [
      { t: 'Understand the learning need', d: 'Discovery discussions to understand learner profiles, business priorities, and where the current experience is breaking down.' },
      { t: 'Review the catalogue', d: 'Review existing content to understand what is available, relevant, repeated, missing, or better suited for different roles and proficiency levels.' },
      { t: 'Map roles, skills, proficiency', d: 'Map courses and learning experiences to role needs, priority skills, and proficiency levels (foundational, proficient, advanced).' },
      { t: 'Design journey architecture', d: 'Create core journey types — onboarding and upskilling. Within onboarding, design plug-and-play models for new hires, lateral movers, and experienced hires.' },
      { t: 'Build blended experiences', d: 'Curate experiences beyond courses — buddy check-ins, mentor/coach conversations, manager meetings, peer learning, expert Q&A, on-the-job shadowing, practice tasks, reflection, job aids.' },
      { t: 'Enable adoption & governance', d: 'Develop supporting RACIs, tools, templates, and guides for managers, buddies, mentors, coaches, and employees. Provide launch and communications guidance.' }
    ],
    outcomes: [
      'Structured onboarding and upskilling journeys giving a clearer way to guide learners through role-relevant development',
      'Different learner groups move through an intentional experience suited to their context (new hires, lateral movers, experienced hires)',
      'Blended, human, practical learning — buddy conversations, manager meetings, peer learning, reflection, on-the-job application',
      'More focused and easier-to-maintain learning pathways supporting proficiency-based development',
      'LMS-ready journey structure supported by tools, templates, and role clarity'
    ],
    stories: [
      {
        client: 'Qatar Airways', industry: 'Aviation',
        title: 'Sales & Business Finance Learning Journeys',
        challenge: 'Sales and Business Finance employees needed a **structured way to build role-relevant capability** and ramp up faster. Salespeople were under pressure to meet targets and **sometimes relying on discounts** — pointing to a deeper need for **product knowledge, consultative selling, and commercial understanding**. Onboarding lacked differentiation for **new joiners, lateral movers, and experienced hires**.',
        did: ['Reviewed the catalogue and **mapped resources to skills, roles, and proficiency levels**','Curated **onboarding journeys** (plug-and-play for 3 learner profiles) and **upskilling journeys**','Built **blended experiences** — buddy meetings, mentor conversations, manager check-ins, peer learning, expert Q&A, shadowing, self-assessments','Developed **RACIs and enablement guides** for managers, buddies, mentors, coaches','Delivered **LMS-ready journey structure** with launch/adoption guidance'],
        outcome: 'Moved learning from "a list of courses" to **"an experience that builds confidence, belonging, and performance readiness"**. The Sales pathway directly supported the business challenge behind target achievement — building **consultative selling, customer focus, negotiation, and commercial confidence**.',
        metrics: [{ v: '3 profiles', l: 'Onboarding paths' }, { v: 'Blended', l: 'Experience' }, { v: '2 functions', l: 'Scope' }]
      },
      {
        client: 'Aviation Commercial', industry: 'Aviation',
        title: 'Proficiency-Based Capability Pathways',
        challenge: 'A commercial function had a **deep content library but no clear sequencing**. Learners were unsure what to take first, what mattered for their role, or how learning connected to **performance expectations**.',
        did: ['Created **proficiency tiers** — foundational, proficient, advanced','Curated **pathways aligned to role and tenure**','Layered in **practice activities and on-the-job application**','Defined **manager and mentor touchpoints** for support'],
        outcome: 'Replaced a content catalogue with a **purposeful, role-aligned learning model**. Learners knew **where to begin and how to progress**. Managers had a clear role in **supporting development beyond completion**.',
        metrics: [{ v: '3 tiers', l: 'Proficiency' }, { v: 'Role-aligned', l: 'Pathways' }, { v: 'Manager-led', l: 'Reinforcement' }]
      }
    ]
  }
};
