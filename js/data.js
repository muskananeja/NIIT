// data.js - all data tables: industries, moves, offerings, themes, diagnostic Qs, CDs

const MOVES = {
  // ============ TIER 1 — ACTIVE CLIENTS ============
  't1-whatcomesnext': {
    tier: 1,
    title: 'Have the "what comes next" conversation before close',
    sub: 'Build a structured forward-looking session into the final phase of every engagement.',
    when: 'In the final 4–6 weeks of every active engagement. Non-negotiable for strategic accounts.',
    why: 'The highest-conversion moment in a NIIT engagement is the last fortnight. Access, trust, and context are at their peak. After close, all three decay rapidly.',
    leave: 'A named next opportunity — specific follow-on or adjacent area — surfaced before formal closeout.',
    steps: [
      'Block a 60-minute working session 4 weeks before close',
      'Bring 2–3 specific next-opportunity hypotheses, not an open question',
      'Convert the strongest into a written proposal within 2 weeks of the session'
    ],
    email: {
      subject: 'Setting up our "what comes next" conversation',
      body: `Hi {Name},

As we move into the final stretch of {project}, I wanted to set up our forward-looking session — the one where we step back and look at what we have learned, what is now visible that wasn't before, and where the highest-leverage next move sits.

I will bring two or three specific hypotheses; I would love your reaction to them, and to add what you are seeing from your end.

Could we find 60 minutes in the next two weeks?

{Name}`
    },
    related: ['t1-adjacent', 't1-stakeholder', 't1-qbr']
  },
  't1-adjacent': {
    tier: 1,
    title: 'Surface adjacent opportunities from inside delivery',
    sub: 'Use what you\'re learning during delivery to open new conversations in real time.',
    when: 'Continuously throughout delivery, especially after workshops, steering committees, or any moment with visibility into something outside scope.',
    why: 'Delivery teams hear adjacencies before they become asks. A pattern named to the right stakeholder becomes a follow-on conversation without ever feeling like a sales motion.',
    leave: 'A named observation, attributed to the team\'s on-the-ground view, with a specific question for the right stakeholder.',
    steps: [
      'In every weekly internal team huddle, ask: what have we seen this week that is outside scope?',
      'Identify which observations warrant being raised externally',
      'Raise them in the natural setting — steering committee, working session — not in a separate email'
    ],
    email: {
      subject: 'Something we have been noticing in the {project} work',
      body: `Hi {Name},

In the course of {project}, our team has been noticing {specific observation that falls outside scope}.

It is not something we have been asked to look at, and it is not something we are pitching. But it is a pattern strong enough that I thought it was worth flagging directly.

If it is useful, I would be happy to share what we are seeing in more detail, and what we have seen work in comparable situations.

{Name}`
    },
    related: ['t1-whatcomesnext', 't1-comparable', 't1-stakeholder']
  },
  't1-stakeholder': {
    tier: 1,
    title: 'Deliberately expand the stakeholder map during delivery',
    sub: 'Use workshops, steering committees, and delivery touchpoints to build relationships across functions and leadership layers.',
    when: 'Throughout every strategic engagement. Especially urgent on accounts where the relationship is currently anchored to a single sponsor.',
    why: 'Single-sponsor accounts are fragile. The relationship survives the sponsor moving roles only if it has been deliberately broadened. On strategic accounts, this is a delivery deliverable, not a sales option.',
    leave: 'A living stakeholder map maintained across the engagement — who NIIT has met, who NIIT hasn\'t met, who matters going forward.',
    steps: [
      'Open every engagement with a stakeholder mapping exercise — name, role, owner, strength, last contact, gaps',
      'Update it monthly. Track gaps as actively as strengths',
      'Convert the gaps into intentional touchpoints: invite the right people to the right sessions'
    ],
    email: {
      subject: 'A thought on broadening who is in the room',
      body: `Hi {Name},

As we move into the next phase of {project}, I wanted to suggest something practical: bringing {specific function / leader} into one of the upcoming working sessions.

In our experience, this kind of work lands most cleanly when the perspective from {their function} is represented early. It also surfaces decisions that might otherwise have to be revisited later.

Would you be open to inviting them to {specific session}?

{Name}`
    },
    related: ['t1-whatcomesnext', 't1-adjacent', 't1-jointreview']
  },
  't1-jointreview': {
    tier: 1,
    title: 'Run a joint account review across consulting and delivery',
    sub: 'Bring MLS and consulting teams together at least once per active engagement to align on what is being observed.',
    when: 'At least once during every Tier 1 engagement, ideally at the midpoint. Mandatory for accounts where both teams have parallel access.',
    why: 'The two highest-context teams in NIIT often work without talking to each other. A joint review surfaces commercial signals that neither team sees alone — and turns observations into named next conversations.',
    leave: 'A documented set of opportunities outside current scope, with named owners and a specific next-conversation hypothesis for each.',
    steps: [
      'Schedule a 60-minute joint working session: EM, CD, MLS delivery lead, account director',
      'Three questions: what is the client asking about outside our current scope? What is changing in their environment? Who else have we met that the other team has not?',
      'Assign each opportunity an owner and a target conversation date'
    ],
    email: {
      subject: 'A joint review of where we are at {company}',
      body: `Hi {Name},

I would like to set up a joint working session between our consulting and delivery teams on {company}, covering what we are both seeing in the account.

It is a 60-minute conversation, internal, structured around three questions: what is the client asking about that sits outside current scope, what is changing in their environment that we are seeing from inside, and who else in the organization we should be talking to.

This kind of session typically surfaces 2–3 specific next conversations that one team alone would have missed.

Could you join us in the next 10 days?

{Name}`
    },
    related: ['t1-stakeholder', 't1-adjacent', 't1-whatcomesnext']
  },
  't1-qbr': {
    tier: 1,
    title: 'Anchor every QBR in delivered outcomes and emerging priorities',
    sub: 'Structure client reviews around what was delivered, what we\'re observing now, and what\'s next — not a backwards-looking report.',
    when: 'Every quarterly business review on every strategic account. The structure matters more than the cadence.',
    why: 'A well-structured QBR is itself an outreach move. It demonstrates ongoing attention, surfaces emerging priorities, and gives the CLO a forum to think out loud. Most QBRs are wasted on reporting; they should be used for forward thinking.',
    leave: 'A three-part conversation: outcomes delivered (with measurable impact), observations from the current environment, named next opportunity — even if not yet scoped.',
    steps: [
      'Replace the standard "what we delivered" deck with a three-part structure',
      'Spend no more than a third of the time on past — at least half on forward',
      'Where useful, bring in case studies from comparable industries to anchor a specific next move'
    ],
    email: {
      subject: 'QBR agenda — proposal for how we use the time',
      body: `Hi {Name},

Ahead of our QBR on {date}, I wanted to propose a slightly different structure for how we use the hour together.

Rather than a backward-looking report on what we delivered, I would like to spend a third of the time on outcomes, a third on what we are observing in {company}'s environment that may be worth bringing into your agenda, and a third on where the highest-leverage next move is.

I think it makes the time more valuable for you. Open to your thoughts.

{Name}`
    },
    related: ['t1-whatcomesnext', 't1-stakeholder', 't1-comparable']
  },
  't1-thoughtleadership': {
    tier: 1,
    title: 'Share research, exclusive frameworks, and benchmark findings',
    sub: 'Use thought leadership to anticipate the next agenda — and build a sense of exclusivity for strategic accounts.',
    when: 'Between engagements, during the natural quiet periods of an active relationship. Especially when something new is being published.',
    why: 'A QBR-cadence relationship breaks momentum between sessions. Tactical thought-leadership touchpoints — the benchmark, an upcoming article, a proprietary framework shared only with strategic accounts — keep us mentally present without asking for anything.',
    leave: 'A specific piece of insight, sent with the framing that the client is part of a small group seeing it. Followed by an offer to discuss.',
    steps: [
      'Identify one piece of NIIT thinking that genuinely speaks to where this client is right now',
      'Send it with a one-paragraph note that explains why it specifically applies to them',
      'Offer to walk through it in 30 minutes — not as a pitch'
    ],
    email: {
      subject: 'Sharing this with you ahead of broader release',
      body: `Hi {Name},

We are about to release {piece — e.g. "a new framework on operating model maturity / a section of the 2026 Global Benchmark"}, and I wanted to share it with you ahead of broader publication.

Specifically because of {specific reason this applies to them — e.g. "the conversation we had at the last QBR about governance redesign, or the work you are doing on AI capability"}.

There is a particular section that I think will resonate. Happy to walk through it on a short call — let me know if that would be useful.

{Name}`
    },
    related: ['t1-comparable', 't1-pov', 't1-qbr']
  },
  't1-pov': {
    tier: 1,
    title: 'Invite them to shape a point of view we are developing',
    sub: 'Bring the CLO into the consulting team\'s thinking — generate real intelligence while building intellectual partnership.',
    when: 'When NIIT is actively working through a question that intersects with this client\'s domain. Particularly powerful on accounts where the relationship is strong but feels transactional.',
    why: 'Inviting a senior client to shape thinking, not consume it, changes the energy of the relationship. They become intellectually invested in NIIT\'s point of view — and the consulting team gets real-world signal in return.',
    leave: 'A specific, non-trivial question, a clear ask (15–30 minutes), and a follow-through commitment to share what the final POV looks like.',
    steps: [
      'Identify a question NIIT is genuinely working through where this CLO would have a strong view',
      'Send a short, specific ask — not an open invitation',
      'Send the final POV back to them with their input visibly incorporated'
    ],
    email: {
      subject: 'A question I think you\'d have a strong view on',
      body: `Hi {Name},

NIIT\'s consulting team is currently working through a question that keeps surfacing in our work across {sector}: {specific question — e.g. "At what point does L&D governance become a constraint on transformation rather than an enabler of it — and what does the transition look like?"}.

I think you would have a strong perspective on it, and I would genuinely value your view. We are pulling together a short point of view on this and the people we are speaking to are shaping what it says.

Would you be open to contributing 20 minutes?

{Name}`
    },
    related: ['t1-thoughtleadership', 't1-qbr', 't1-comparable']
  },
  't1-comparable': {
    tier: 1,
    title: 'Reference comparable client work to open the next conversation',
    sub: 'Bring a specific case from a comparable organisation — not a generic case study deck.',
    when: 'When you want to introduce a new idea, capability, or area without it feeling like a pitch. Especially effective in steering committees and QBRs.',
    why: 'A specific reference to comparable work is the most credible way to introduce a new idea inside an active relationship. It positions NIIT as someone with cross-account perspective without ever saying so directly.',
    leave: 'A short, specific story about what another client did, what worked, and the question it raises for this one.',
    steps: [
      'Identify two or three comparable engagements where the parallel is genuinely strong',
      'Frame the story in three sentences: challenge, what we did, outcome',
      'End with a specific question that connects to where this client is now'
    ],
    email: {
      subject: 'Something from our work with a comparable organisation',
      body: `Hi {Name},

In the context of the work we are doing together, I wanted to share something that felt directly relevant. We recently concluded an engagement with a {comparable sector} organisation on {specific challenge} — and the approach we took produced results I think are worth discussing in the context of {company}.

{One sentence on challenge. One sentence on what we did. One sentence on outcome.}

Could we add 15 minutes to our next session to discuss this?

{Name}`
    },
    related: ['t1-adjacent', 't1-qbr', 't1-whatcomesnext']
  },

  // ============ TIER 2 — DORMANT CLIENTS ============
  't2-perspective': {
    tier: 2,
    title: 'Return with a perspective on their own work',
    sub: 'Arrive with a specific, grounded observation about what has changed for them — not a generic check-in.',
    when: 'When you haven\'t spoken to the account in 6+ months and you want the re-entry to feel intentional. Best when something material has actually changed.',
    why: 'A "checking in" email reads as low-effort. A specific observation about how their world has shifted reads as continued attention. The work is in the observation — the email is short.',
    leave: 'One concrete hypothesis about what has changed for them and what it means. Offer to discuss.',
    steps: [
      'Scan their public profile and industry news from the last quarter',
      'Form one specific hypothesis about what has landed for them since the engagement closed',
      'Lead with the hypothesis — not with NIIT'
    ],
    email: {
      subject: 'Thinking about {company} and what has changed since we last worked together',
      body: `Hi {Name},

I have been reflecting on the work we did together on {project}. In the context of what has shifted in {sector} over the past {timeframe} — particularly {specific market change} — I have a specific hypothesis about where the pressure has landed for {company} since we wrapped up.

I think {specific observation}. I could be wrong, but I would value your reaction to it, and would happily discuss it further if it resonates.

{Name}`
    },
    related: ['t2-benchmark', 't2-newstakeholder', 't2-pov']
  },
  't2-benchmark': {
    tier: 2,
    title: 'Use the benchmark to show how the landscape has shifted',
    sub: 'The 2026 Global Learning Benchmark as the lens — not as new content.',
    when: 'When 12+ months have passed since the last engagement. The benchmark gives you a reason to revisit assumptions that were true then but may not be now.',
    why: 'A dormant client doesn\'t need new research — they need a reason to re-examine the decisions they made the last time. The benchmark is a thinly-veiled excuse to do exactly that.',
    leave: 'Two findings that specifically challenge or update the thinking behind the previous engagement.',
    steps: [
      'Re-read the previous SOW and identify two assumptions that may have shifted',
      'Find the benchmark findings that speak to those assumptions',
      'Frame the email as "what this means for where you are now"'
    ],
    email: {
      subject: 'How the picture has shifted since we last worked together',
      body: `Hi {Name},

Since we wrapped up {project}, a lot has moved in how {sector} organizations are approaching {relevant area}.

Our 2026 Global Learning Benchmark captures some of that shift, and a few findings are specifically relevant to where {company} was when we last spoke.

I think it is worth a conversation to work through what it means for where you are now.

{Name}`
    },
    related: ['t2-perspective', 't2-nextchapter', 't2-cadence']
  },
  't2-cd': {
    tier: 2,
    title: 'Introduce a senior NIIT relationship as a standalone reason to reconnect',
    sub: 'A Consulting Director\'s presence in the account is the reason for the conversation — not tied to a project.',
    when: 'When the relationship has gone quiet at the working level but the strategic context still matters to NIIT. Particularly good for accounts where we want to upgrade the seniority of the relationship.',
    why: 'A CD in the account changes the energy of the conversation. It signals NIIT\'s investment in the relationship without asking for anything. People build relationships with people, not with offerings.',
    leave: 'A specific reason this CD is the right person to talk to right now — usually their POV on something the client cares about.',
    steps: [
      'Identify which CD has the most relevant perspective on the client\'s current situation',
      'Have the EM make the introduction — not the CD themselves',
      'Position the call as expert-to-expert, not sales-to-buyer'
    ],
    email: {
      subject: 'An introduction worth making',
      body: `Hi {Name},

I wanted to introduce you to {CD Name}, who leads our practice in {relevant area}.

Given the work we have done together at {company} and the direction the {sector} market is moving, I think a conversation between you would be valuable. {CD Name} brings a perspective on {specific challenge} that I think will resonate with where you are right now.

Would you be interested in a 30-minute introduction call in the coming week?

{Name}`
    },
    related: ['t2-newstakeholder', 't2-perspective', 't2-nextchapter']
  },
  't2-pov': {
    tier: 2,
    title: 'Invite them to shape a point of view we are developing',
    sub: 'Bring the CLO into the consulting team\'s thinking — generates intellectual engagement and real intelligence simultaneously.',
    when: 'When NIIT is genuinely working on a piece of thinking that intersects with this CLO\'s domain. Particularly powerful as a re-engagement after a long quiet period.',
    why: 'Asking a senior person for their view is one of the most flattering and least transactional moves available. It re-opens the relationship at an intellectual level rather than a commercial one.',
    leave: 'A specific question, a clear ask of their time (15–20 minutes), and a commitment to send back the finished thinking with their contribution visible.',
    steps: [
      'Identify one substantive question NIIT is working through where this person would have a view',
      'Send a short, specific ask — not an open invitation to chat',
      'Follow through: share the final POV with their input visibly incorporated'
    ],
    email: {
      subject: 'A question I think you\'d have a strong view on',
      body: `Hi {Name},

NIIT\'s consulting team is currently working through a question that keeps surfacing in our work across {sector}: {specific question — e.g. "At what point does L&D governance become a constraint on transformation rather than an enabler of it — and what does the transition look like?"}.

I think you would have a strong perspective on it, and I would genuinely value your view. We are pulling together a short point of view on this and the people we are speaking to are shaping what it says.

Would you be open to contributing 20 minutes?

{Name}`
    },
    related: ['t2-perspective', 't2-benchmark', 't2-cd']
  },
  't2-newstakeholder': {
    tier: 2,
    title: 'Engage a new stakeholder where the original sponsor has moved on',
    sub: 'Approach the new mandate-holder with the credibility of existing organisational context — not a cold intro.',
    when: 'When the relationship has gone quiet specifically because the original sponsor left, changed roles, or got reorganised out of the relevant scope.',
    why: 'Most competitors approach this as a cold introduction. We have organisational context they don\'t — what was tried, what worked, what the institutional memory looks like. That context is the reason to talk.',
    leave: 'A clear statement of NIIT\'s existing context plus an offer to brief the new person on it.',
    steps: [
      'Confirm the new role-holder and verify scope',
      'Brief the new person on what existed before — without being precious about it',
      'Position the call as value-transfer, not a sales conversation'
    ],
    email: {
      subject: 'Introduction, and some context on our work with {company}',
      body: `Hi {Name},

I am a {role} at NIIT\'s Consulting & Advisory practice. We have done significant work with {company} over the past {timeframe} — most recently on {project/area}.

With the team having evolved since then, I wanted to make sure we stayed connected at {company} and to introduce myself directly. I think the work we did together — and the context we built — could be valuable as you think about {relevant area}.

I would be happy to connect for a short call in the coming week to introduce myself in person, albeit virtually, and carry forward the relationship between our organizations.

{Name}`
    },
    related: ['t2-cd', 't2-perspective', 't2-nextchapter']
  },
  't2-nextchapter': {
    tier: 2,
    title: 'Connect the previous engagement to a logical next chapter',
    sub: 'Bring a specific, reasoned proposal — not an open-ended conversation.',
    when: 'When the previous engagement has an obvious follow-on that nobody has formally proposed. Often the case where the original scope was a Phase 1 and Phase 2 was discussed but never closed.',
    why: 'A specific reasoned proposal beats a generic "let\'s catch up" by an order of magnitude. The CLO can react to something — accept, reject, or negotiate. An open question gets ignored.',
    leave: 'A named follow-on, sized roughly, with a clear connection to what was already done.',
    steps: [
      'Re-read the closeout deck or final report from the previous engagement',
      'Identify the most natural follow-on — same area deeper, or adjacent area',
      'Bring it as a reasoned proposal with rough scope, not an open-ended question'
    ],
    email: {
      subject: 'A natural next chapter to the work we did',
      body: `Hi {Name},

I have been thinking about the work we did together on {project} and where it most naturally extends.

In our experience, the strongest follow-on tends to be {specific area — e.g. "operationalising the governance model we designed, particularly in how it interfaces with the business unit learning leads"}. Several clients we have done similar work with have found this to be where the durable value lives.

I would be happy to walk through what that could look like for {company}, in concrete terms.

{Name}`
    },
    related: ['t2-perspective', 't2-benchmark', 't2-cd']
  },
  't2-cadence': {
    tier: 2,
    title: 'Run a low-frequency, high-relevance insight cadence',
    sub: 'For accounts not yet ready to re-engage formally, maintain presence through quarterly, highly targeted sharing.',
    when: 'On accounts where active outreach has not landed yet, but you want to stay in their orbit. Quarterly cadence — anything more frequent is noise.',
    why: 'Dormant accounts re-engage when the timing is right for them, not when it\'s right for us. The job is to be the firm they think of when that moment comes. Quarterly, targeted insight is the lowest-cost way to hold that position.',
    leave: 'One piece of genuinely relevant content per quarter — a case study, a benchmark finding, a sector observation — sent with a single sentence of context.',
    steps: [
      'Calendar quarterly sends per account — owned by the EM',
      'Each send: one piece of insight + one sentence of "why this matters for you specifically"',
      'No call-to-action. The send is the act'
    ],
    email: {
      subject: 'A short note — relevant to what we discussed last',
      body: `Hi {Name},

A quick note. We just published {specific piece — e.g. "a short observation on how learning functions are responding to AI governance pressure"}, and given our last conversation on {topic}, I wanted to send it to you directly.

No follow-up needed — but I thought it might be useful.

Hope all is well.

{Name}`
    },
    related: ['t2-benchmark', 't2-perspective', 't2-nextchapter']
  },

  // ============ TIER 3 — PROSPECTIVE CLIENTS ============
  't3-benchmark': {
    tier: 3,
    title: 'Share or walk through the 2026 Global Learning Benchmark',
    sub: 'Distribute the research directly, or offer a guided session where findings are contextualised to their sector.',
    when: 'When the account has no consulting context with us, but the CLO is the kind of person who reads benchmarks. Especially good if their industry features in the data.',
    why: 'Research is the cleanest non-commercial entry point. It positions NIIT as a research-backed practice rather than a vendor, and it gives the CLO a low-stakes reason to respond. Also socialises the existence of a consulting team to clients who only know us through Managed Services.',
    leave: 'The findings most relevant to their sector, contextualised. Offer to walk them through it in 30 minutes.',
    steps: [
      'Identify two findings that directly speak to their sector or stated priorities',
      'Send the email below — short, no attachments yet',
      'Follow up within 5 business days if no response, with one of the specific findings'
    ],
    email: {
      subject: 'Research we thought you\'d find relevant: 2026 Global Learning Benchmark',
      body: `Hi {Name},

We recently completed our 2026 Global Learning Benchmark — a study drawing on insights from learning leaders across {X} organizations globally.

Given your role at {company}, a few findings felt directly relevant to the agenda you are likely navigating:

{Insert 1–2 specific findings relevant to their sector — e.g. "Organizations in {industry} are consistently underestimating the capability gap created by AI adoption, and the L&D functions managing it best have one thing in common…"}

Happy to share the full report or walk through the highlights on a short call.

{Name}`
    },
    related: ['t3-sectorpattern', 't3-inflection', 't3-lfr']
  },
  't3-sectorpattern': {
    tier: 3,
    title: 'Lead with a sector-specific pattern or counterintuitive finding',
    sub: 'Open with one observation from recent engagements in their industry — specific enough to demonstrate active presence in their space.',
    when: 'When you have a genuine, defensible observation from comparable client work in this sector. Not for first outreach unless the observation is strong.',
    why: 'A specific sector pattern shows active practice, not generic positioning. It earns intellectual credibility before any service is mentioned and makes the CLO want to hear more.',
    leave: 'One concrete observation, framed as a pattern we have been seeing — plus an offer to walk through what it means for them.',
    steps: [
      'Talk to two CDs about what they have been seeing recently in this sector',
      'Distill the strongest observation into one sentence',
      'Lead the email with the observation, not with NIIT'
    ],
    email: {
      subject: 'A pattern we have been seeing in {sector}',
      body: `Hi {Name},

We have been doing a lot of work across {sector} recently, and there is a pattern that keeps surfacing — specifically: {one-sentence observation that is non-obvious}.

I do not yet know if this is showing up at {company}, but I wanted to share it directly because of the implications it can have on {relevant area}.

Happy to walk through what we are seeing on a short call.

{Name}`
    },
    related: ['t3-benchmark', 't3-inflection', 't3-public']
  },
  't3-inflection': {
    tier: 3,
    title: 'Anchor outreach to a sector inflection in the next 90 days',
    sub: 'Open with the single most significant inflection point facing their industry right now.',
    when: 'When the sector is in a moment of inflection — regulation, a major announcement, a competitor move. Works best when something concrete has just happened.',
    why: 'Demonstrates contextual depth before any service is mentioned. The CLO learns something from the opening email. If you can name the issue more sharply than they can, you become someone worth a 30-minute call.',
    leave: 'A short perspective on what the inflection means for L&D specifically. Offer to share the longer thinking.',
    steps: [
      'Identify the single biggest live issue in their sector right now',
      'Draft a one-paragraph view of what it means for the learning and capability agenda',
      'Open with the issue — not with NIIT'
    ],
    email: {
      subject: '{Specific market event} — and what we are seeing from an L&D perspective',
      body: `Hi {Name},

With {specific event — e.g. "the recent regulation / merger / AI announcement"} gaining attention across {sector}, I wanted to share a perspective on what it typically means for the learning function and capability agenda.

Our consulting and advisory team has been working with organizations navigating similar inflection points, and there are a few things that consistently make the difference.

Happy to share that thinking if it would be useful.

{Name}`
    },
    related: ['t3-sectorpattern', 't3-benchmark', 't3-public']
  },
  't3-public': {
    tier: 3,
    title: 'Use a publicly stated priority as the opening',
    sub: 'Reference something the CLO has said or published — and connect it directly to NIIT\'s thinking.',
    when: 'When the decision-maker has an active public profile — conference talks, LinkedIn posts, annual report quotes, podcasts. The more recent and specific, the better.',
    why: 'Signals that NIIT has done the work to understand who they are, not just what their company does. Avoids the generic-outreach feel entirely. Hard for a CLO to ignore an email that engages with their own stated thinking.',
    leave: 'A specific reaction to their stated view, plus a NIIT angle they may not have considered.',
    steps: [
      'Find the most recent public statement — last 6 months ideal',
      'Identify one place where NIIT\'s experience connects directly',
      'Make the connection the centre of the email, not an afterthought'
    ],
    email: {
      subject: 'Following your talk at {event / publication}',
      body: `Hi {Name},

I was reading your recent {piece / talk / interview} on {topic}, and the point you made about {specific point} resonated with conversations we have been having across {sector}.

We have been working with several organizations on exactly this question — and there is a specific dimension of it that I think is worth a conversation, particularly in the context of {their company / industry}.

Would you be open to a short call in the coming weeks?

{Name}`
    },
    related: ['t3-sectorpattern', 't3-benchmark', 't3-lfr']
  },
  't3-ms-activate': {
    tier: 3,
    title: 'Activate the consulting conversation from within an active delivery engagement',
    sub: 'Where NIIT already has a Managed Services relationship, use the active access window before the SOW closes.',
    when: 'Any prospective client where NIIT runs Managed Services. The delivery team already has access, context, and trust. The risk is that the SOW concludes and the access window closes without a consulting conversation ever happening.',
    why: 'The single highest-conversion entry point in Tier 3. Delivery teams hear the things the client doesn\'t put on a website — what they are struggling with, who else inside the organisation is asking what. That intelligence is wasted if it doesn\'t reach consulting.',
    leave: 'A handoff briefing from the delivery EM to the consulting CD, ideally before the MS engagement enters its closing phase.',
    steps: [
      'In the next delivery team review, ask three questions: what is the client asking about outside our current scope? What is changing in their environment that we are seeing from inside? Who else have we met that consulting is not talking to?',
      'Use the answers to brief the consulting CD assigned to the account',
      'CD makes contact with a specific observation — not a generic introduction'
    ],
    email: {
      subject: 'A consulting perspective on what we are seeing in our work with you',
      body: `Hi {Name},

As our delivery team continues to work with {company} on {current MS / delivery engagement}, a few patterns have surfaced that sit outside the current scope but feel commercially important for you to think about.

{One sentence on the pattern.}
{One sentence on why it matters now.}

Our consulting practice has helped organisations in similar positions think through this — would it be useful to set up a short conversation while the access and context are live?

{Name}`
    },
    related: ['t3-lfr', 't3-inflection', 't3-sectorpattern']
  },
  't3-lfr': {
    tier: 3,
    title: 'Offer the Learning Function Review as a diagnostic session',
    sub: 'Position the LFR as a structured, no-commitment external view — not a scoped proposal.',
    when: 'When the CLO is intellectually curious but cautious, or when the conversation has gone two rounds and needs something concrete to anchor it. Also when a new CLO is in the role and looking to understand what they have inherited.',
    why: 'The LFR is the cheapest way for a new client to experience working with NIIT. It earns the next conversation by giving them something they didn\'t have before — a structured external read on their own function. Almost every Tier 3 conversion in our portfolio passes through this door.',
    leave: 'A clear sense of what the LFR is (8 weeks, structured, board-ready output) and what it isn\'t (a sales process).',
    steps: [
      'Frame the LFR as a diagnostic — not a project',
      'Be specific about the output: an opportunity map they can take to their CEO or board',
      'Quote a fixed scope and timeline so it feels purchasable'
    ],
    email: {
      subject: 'A way to look at {company}\'s learning function from the outside',
      body: `Hi {Name},

Our practice runs a structured eight-week diagnostic called the Learning Function Review — a board-ready external read on how a learning function is currently performing relative to its peers and where the highest-leverage opportunities sit.

It is not a proposal. It is a piece of work in its own right, with a defined scope and a clear output: an opportunity map that you can take to your CEO or board.

Several CLOs new to their role have used it to understand what they have inherited. Others have used it as a defensible input to budget season.

If that would be useful for {company}, I would be happy to walk through how it works.

{Name}`
    },
    related: ['t3-benchmark', 't3-ms-activate', 't3-inflection']
  }
};


const TIER_ORDER = {
  1: ['t1-whatcomesnext', 't1-adjacent', 't1-stakeholder', 't1-jointreview', 't1-qbr', 't1-thoughtleadership', 't1-pov', 't1-comparable'],
  2: ['t2-perspective', 't2-benchmark', 't2-cd', 't2-pov', 't2-newstakeholder', 't2-nextchapter', 't2-cadence'],
  3: ['t3-benchmark', 't3-sectorpattern', 't3-inflection', 't3-public', 't3-ms-activate', 't3-lfr']
};

// ============ PULSE CHECKS (Tier 1) ============

const PULSES = {
  opmodel: {
    title: 'Learning Operating Model Stress Test',
    badge: 'Operating Model',
    intro: 'Five statements. No preparation required. Your instinctive response is the most useful one.',
    statements: [
      'We have clear decision rights for enterprise vs. local learning.',
      'Our learning investment is prioritised against business value, not historical allocation.',
      'The function can rapidly mobilise around strategic shifts.',
      'Business leaders see L&D as a strategic partner, not primarily a service provider.',
      'Our governance is strong enough to scale consistency without killing responsiveness.'
    ],
    bands: [
      { min: 20, label: 'Strong foundation', desc: 'Operating model is healthy. The conversation may be about next horizon or specific acceleration.', color: '#0F7A5A' },
      { min: 13, label: 'Signs of strain', desc: 'Meaningful gaps in at least one dimension. A structured conversation about operating model design is warranted.', color: '#8B5E15' },
      { min: 0, label: 'Strategic redesign needed', desc: 'Function is likely perceived as operational rather than strategic. A Learning Function Review is the logical first step.', color: '#E6007E' }
    ],
    outreach: 'We built a short stress test that helps learning leaders surface where their operating model may be under strain — it may be a useful reflection ahead of our conversation.'
  },
  ai: {
    title: 'AI Workforce Readiness Pulse',
    badge: 'AI Readiness',
    intro: 'Five statements about your organisation\'s AI readiness. Answer for where you actually are — not where you plan to be.',
    statements: [
      'We have a clear strategy for building AI fluency across the workforce.',
      'Our L&D function is leading the AI capability agenda, not reacting to it.',
      'We can articulate what AI-ready looks like at the role level across key populations.',
      'We have learning content and journeys ready to deploy for our priority AI capability gaps.',
      'We have a governance model for how AI tools are adopted and used across the workforce.'
    ],
    bands: [
      { min: 20, label: 'AI-ready foundation', desc: 'Strong position — conversation may focus on execution quality and measurement.', color: '#0F7A5A' },
      { min: 13, label: 'Strategy-execution gap', desc: 'Direction is set but delivery infrastructure is lagging. Enterprise-wide AI Adoption may be relevant.', color: '#8B5E15' },
      { min: 0, label: 'Behind the curve', desc: 'AI strategy is absent or disconnected from L&D. AI Operating Model Transformation is the likely first conversation.', color: '#E6007E' }
    ],
    outreach: 'Given the AI capability questions most learning leaders are navigating, I thought this short pulse check might be worth 5 minutes — it helps surface where the readiness gaps actually sit.'
  },
  portfolio: {
    title: 'Learning Portfolio Governance Pulse',
    badge: 'Portfolio Governance',
    intro: 'Five statements about how well your portfolio is governed. The honest answers are the useful ones.',
    statements: [
      'Our learning portfolio is fully aligned to current business priorities.',
      'We have a clear taxonomy and shared standards across all business units.',
      'We have a process for retiring content that is no longer needed.',
      'We can articulate the cost of maintaining our current portfolio.',
      'Our portfolio decisions are driven by data, not by inertia or internal advocacy.'
    ],
    bands: [
      { min: 20, label: 'Governed and aligned', desc: 'Portfolio is in good shape — conversation may focus on future-proofing or specific cluster investment.', color: '#0F7A5A' },
      { min: 13, label: 'Growing governance gap', desc: 'Portfolio has meaningful alignment and cost issues. Portfolio Optimization or Learning Standards work is likely warranted.', color: '#8B5E15' },
      { min: 0, label: 'Portfolio risk', desc: 'Significant risk of wasted spend, inconsistent quality, and misaligned investment. Structured portfolio audit is the first step.', color: '#E6007E' }
    ],
    outreach: 'I thought this short portfolio governance pulse might be useful — it takes about 5 minutes and often surfaces the conversations that are difficult to have without a neutral prompt.'
  },
  skills: {
    title: 'Skills Activation Check',
    badge: 'Skills & Capability',
    intro: 'Five statements about how well skills data is driving capability decisions in your organisation.',
    statements: [
      'We have a validated skills framework connected to our critical roles.',
      'Our skills data is used to make hiring and development decisions.',
      'Business leaders can articulate the specific capability gaps in their functions.',
      'We have learning pathways mapped to skills, not just content topics.',
      'We can measure skills progress over time at an individual and population level.'
    ],
    bands: [
      { min: 20, label: 'Skills-connected function', desc: 'Strong skills infrastructure — conversation may focus on advanced analytics or specific capability building.', color: '#0F7A5A' },
      { min: 13, label: 'Framework without traction', desc: 'Skills framework exists but isn\'t operationalised. Skills Strategy & Roadmap work is likely the right next step.', color: '#8B5E15' },
      { min: 0, label: 'Flying blind', desc: 'Capability decisions are based on intuition, not data. Skills Architecture & Framework is the first building block.', color: '#E6007E' }
    ],
    outreach: 'We built a short skills activation check for learning leaders — it often surfaces the gap between having a skills framework and actually using it to drive decisions.'
  },
  compliance: {
    title: 'Compliance Learning Confidence Check',
    badge: 'Compliance Learning',
    intro: 'Five statements about the effectiveness of your compliance learning. Be honest — auditors are asking the same questions.',
    statements: [
      'Our compliance training demonstrably changes behaviour, not just awareness.',
      'We can show regulators evidence of competence, not just completion.',
      'Our compliance curriculum is regularly reviewed against actual risk priorities.',
      'Compliance training is designed to be engaging — not just legally sufficient.',
      'We have a clear view of where our compliance training is most and least effective.'
    ],
    bands: [
      { min: 20, label: 'Compliance confidence', desc: 'Solid foundation — conversation may focus on measurement sophistication or adjacent capability clusters.', color: '#0F7A5A' },
      { min: 13, label: 'Effectiveness questions', desc: 'Compliance training exists but effectiveness is uncertain. Learning Standards & Governance work is often the right entry point.', color: '#8B5E15' },
      { min: 0, label: 'Audit exposure', desc: 'Compliance learning is running on completion metrics. This is regulatory risk. A structured audit and redesign conversation is warranted.', color: '#E6007E' }
    ],
    outreach: 'Given how much regulatory scrutiny compliance training is under right now, I thought this short confidence check might be useful — it takes 5 minutes and often raises the questions that need to be asked.'
  }
};


const PULSE_ORDER = ['opmodel', 'ai', 'portfolio', 'skills', 'compliance'];

// ============ RENDER TIER CARDS ============

const ROUTES = {
  // Hub-level routes (top-nav items)
  home:    { page: 'page-home',         topNav: 'home'  },
  pre:     { page: 'page-pre',          topNav: 'pre'   },
  live:    { page: 'page-live',         topNav: 'live'  },
  post:    { page: 'page-post',         topNav: 'post'  },
  saled:   { page: 'page-saled',        topNav: 'saled' },
  offerings: { page: 'page-offerings',  topNav: 'offerings' },
  'offering-detail': { page: 'page-offering-detail', topNav: 'offerings' },

  // Deep routes within Sales Education
  tier1:   { page: 'page-tier1',        topNav: 'saled' },
  tier2:   { page: 'page-tier2',        topNav: 'saled' },
  tier3:   { page: 'page-tier3',        topNav: 'saled' },
  ucb:     { page: 'page-ucb',          topNav: 'saled' },
  logic:   { page: 'page-logic',        topNav: 'saled' },
  move:    { page: 'page-move',         topNav: 'saled' },

  // Deep routes within Hub modes
  industry:       { page: 'page-industry',     topNav: 'pre'  },
  'diag-results': { page: 'page-diag-results', topNav: 'live' },
  engagement:     { page: 'page-engagement',   topNav: 'live' },
};


const THEMES = [
  { n:1, name:'Moment', q:"What's driving this conversation right now?",
    probe:'Every engagement has a catalyst. Knowing it tells you how real the mandate — and budget — is.',
    opts:[
      'Board or CEO mandate — top-down pressure',
      'New CLO or CHRO, looking for an early win',
      'M&A, restructure, or org change in motion',
      'AI / technology shift forcing capability rethink',
      'Cost pressure — portfolio under review',
      'Regulatory or compliance event',
      "L&D team initiative — no external trigger yet"
    ]},
  { n:2, name:'Scale', q:'Is this a pilot, a function, or the enterprise?',
    probe:'Scale tells you which offering tier and what kind of stakeholder you need in the room.',
    opts:[
      'Pilot — one team or one BU',
      'Single function — one capability area across the org',
      'Multi-function — several BUs aligned',
      'Enterprise-wide — whole workforce in scope',
      'Global — multiple regions/markets',
      'Not yet defined — they\'re still scoping'
    ]},
  { n:3, name:'Outcome', q:'What does "done" actually look like for them?',
    probe:'If they can\'t describe done, the project isn\'t real yet. Push for specificity.',
    opts:[
      'A board-ready strategy or roadmap',
      'A specific capability built in a defined population',
      'A function redesigned end-to-end',
      'Measurable business impact on a KPI',
      'A platform or system stood up',
      'A program launched and adopted',
      "They haven't articulated it yet"
    ]},
  { n:4, name:'Gap', q:'What capability do they not have today?',
    probe:'The gap question separates a CAS project from a content order. Listen for what they can\'t do themselves.',
    opts:[
      'Strategy — they don\'t know what to do',
      'Design — they know what but not how',
      'Capacity — they know how but lack hands',
      'Measurement — they can\'t prove what\'s working',
      'Technology — wrong tools or fragmented stack',
      'Skills architecture — no common language',
      'Governance — no operating model across BUs'
    ]},
  { n:5, name:'Timing', q:'When do they need it — and why now?',
    probe:'"Now" usually means a deadline driven by something outside L&D. Find the external clock.',
    opts:[
      'This quarter — board commitment or budget cycle',
      'Within 6 months — tied to a business event',
      '12 months — annual planning anchor',
      'Multi-year transformation',
      'Exploratory — no timeline yet',
      'Reactive — something already broke'
    ]},
  { n:6, name:'AI posture', q:'Where are they on AI — curious, building, or behind?',
    probe:'AI posture is the single biggest signal for offering routing in 2026. Get a clear read.',
    opts:[
      'Behind — no AI capability building yet',
      'Curious — exploring, no plan',
      'Piloting — early experiments in pockets',
      'Building — formal program underway',
      'Scaling — already trying to go enterprise-wide',
      'Operating model rethink — AI is changing how L&D works'
    ]},
  { n:7, name:'Success', q:'How will they measure that it worked?',
    probe:'No measurement plan = no CAS engagement. If they say "completions," gently challenge.',
    opts:[
      'Business KPI movement (revenue, cost, quality, safety)',
      'Capability demonstrated in role',
      'Adoption / behaviour change observed',
      'Speed-to-competency improvement',
      'Retention or engagement of the population',
      'Regulator or auditor accepts the evidence',
      "They haven't decided yet"
    ]},
];


const INDUSTRIES = {
  pharma: {
    icon: '💊',
    short: 'Pharma & Life Sciences',
    full: 'Pharmaceuticals &amp; Life Sciences',
    pitch: 'Regulatory pressure, AI-driven R&amp;D transformation, commercial capability gaps, compliance training at scale.',
    trends: [
      { t: 'AI in drug discovery', d: 'AI-driven R&amp;D is compressing timelines. Organisations need to rapidly build cross-functional AI literacy and new ways of working — across discovery, clinical, medical affairs and commercial.' },
      { t: 'Regulatory complexity', d: 'GxP compliance, FDA and EMA expectations are intensifying. Compliance learning at scale is a growing priority across all major markets, and "completion" is no longer enough — regulators want evidence of competence.' },
      { t: 'Workforce transformation', d: 'Post-merger integration, commercial model shifts and portfolio pivots are driving demand for large-scale capability transformation programmes — usually under tight budget scrutiny.' }
    ],
    challenges: [
      'Learning functions struggle to demonstrate commercial value — training budgets are under pressure and CLOs need to show ROI on capability investment.',
      'Fragmented learning ecosystems — multiple vendors, platforms and legacy content with no coherent architecture or governance framework.',
      'Speed-to-competency gap — commercial teams, medical affairs and R&amp;D need to operate in new ways faster than traditional L&amp;D can support.'
    ],
    engagements: ['lfr', 'ai-otm', 'lft', 'lae', 'po', 'lam']
  },
  energy: {
    icon: '⛽',
    short: 'Oil, Gas & Mining',
    full: 'Energy &amp; Resources',
    pitch: 'Energy transition pressure, workforce reskilling, safety-critical learning, technical capability modernisation.',
    trends: [
      { t: 'Energy transition', d: 'Net-zero commitments and the shift to renewables are reshaping workforce composition. Reskilling at population scale is now a board-level priority, not an HR initiative.' },
      { t: 'Safety-critical learning', d: 'Operational risk environments require demonstrable, audit-ready competence. "Compliance training that changes behaviour" has become the standard — not a stretch goal.' },
      { t: 'Technical capability modernisation', d: 'Digital twins, automation and AI are entering operations faster than the workforce is being prepared. Capability planning is moving from reactive to anticipatory.' }
    ],
    challenges: [
      'Workforce planning and capability planning operate in different silos — leading to reactive, not anticipatory, reskilling programmes.',
      'Safety-critical training is treated as a compliance line item rather than a capability lever — even though it carries the highest organisational risk.',
      'Technical modernisation is driven by engineering; L&amp;D is consulted late, leaving capability gaps that surface only post-deployment.'
    ],
    engagements: ['lfr', 'ai-otm', 'sf', 'lam', 'lsg', 'lae']
  },
  banking: {
    icon: '🏦',
    short: 'Banking & Financial Services',
    full: 'Financial Services',
    pitch: 'Digital transformation, regulatory complexity, financial literacy, leadership pipeline and emerging tech adoption.',
    trends: [
      { t: 'AI and automation in front and back office', d: 'Generative AI is reshaping operations across servicing, advisory and risk. The capability question is no longer "if" but "at what depth and across which roles".' },
      { t: 'Regulatory complexity', d: 'Conduct, financial crime, ESG and AI-specific regulation are converging. Compliance learning has to be defensible to multiple regulators, in multiple jurisdictions, simultaneously.' },
      { t: 'Leadership pipeline pressure', d: 'Senior leader pipelines are thinning at the exact moment hybrid working has weakened informal development. Structured leadership programmes are returning to the centre.' }
    ],
    challenges: [
      'AI adoption is outpacing AI fluency. Front-line capability lags the tools the business is deploying — creating both compliance and value-realisation risk.',
      'Compliance training is structurally separate from capability development — meaning two parallel ecosystems with no shared architecture and high duplicated cost.',
      'Leadership development has been deprioritised through cost cycles; the consequence is now showing up in succession planning.'
    ],
    engagements: ['lfr', 'ai-otm', 'lt', 'lds', 'lsg', 'lam']
  },
  gsi: {
    icon: '🌐',
    short: 'Global System Integrators',
    full: 'Technology Services &amp; GSIs',
    pitch: 'Capability at scale, rapid onboarding, technical upskilling, AI readiness and margin-conscious L&amp;D governance.',
    trends: [
      { t: 'AI readiness at population scale', d: 'GSIs are under direct client pressure to demonstrate AI fluency across delivery teams — fast, measurable, and tied to billable competency frameworks.' },
      { t: 'Margin-conscious L&amp;D governance', d: 'Training is a measurable input cost on every engagement. Governance has shifted from "design quality" to "cost-per-skilled-headcount" with strict ROI evidence.' },
      { t: 'Rapid onboarding', d: 'Hiring at GSI scale means onboarding 1,000+ a quarter without dropping quality. Speed-to-competency is the metric.' }
    ],
    challenges: [
      'AI capability programmes are running across multiple business units with no shared architecture — leading to duplicated cost and uneven outcomes.',
      'Onboarding programmes are optimised for cost, not for time-to-billability — creating margin drag in the first 90 days of every hire.',
      'Skills data exists in three places (HR, delivery, L&amp;D) and never reconciles, so capability decisions are made on instinct.'
    ],
    engagements: ['ai-otm', 'sf', 'lae', 'po', 'lam', 'lfr']
  }
};


const INDUSTRY_ORDER = ['pharma', 'energy', 'banking', 'gsi'];

// ============ ENGAGEMENT DATA (14 types) ============

const ENGAGEMENTS = {
  'lfr': {
    title: 'Learning Function Review &amp; Strategic Roadmap',
    cluster: 'Learning Function Transformation',
    duration: '8–12 weeks',
    format: 'Hybrid (on-site + remote)',
    type: 'Advisory + Diagnostic',
    short: 'A structured diagnostic and advisory engagement that assesses the current state of the learning function, surfaces critical gaps, and co-creates a clear strategic direction — tailored to the organisation\'s specific context and ambitions.',
    challenges: [
      'Learning function lacks strategic alignment — training runs in isolation from business priorities and transformation agendas.',
      'No clear view of what is working — limited measurement capability means investment decisions are made without evidence.',
      'Fragmented vendor and platform landscape with no architecture, governance or rationalisation in place.'
    ],
    approach: [
      { t: 'Stakeholder discovery', d: 'Interviews with L&amp;D, HR and business leaders to surface strategic intent and lived experience.' },
      { t: 'Current state assessment', d: 'Structured review of team, technology, content and governance against a maturity benchmark.' },
      { t: 'Gap &amp; opportunity analysis', d: 'Prioritised view of what is holding the function back and where the highest-impact opportunities lie.' },
      { t: 'Strategic roadmap', d: 'A 12–24 month roadmap co-created with leadership — sequenced, resourced and ready to act on.' }
    ],
    outcomes: [
      'A current-state maturity assessment benchmarked against global best practice, with a clear evidence base for change.',
      'A prioritised strategic roadmap with sequenced initiatives, ownership and investment rationale that can be taken to the board.',
      'Clarity on the right operating model — team structure, governance, vendor relationships and technology architecture.',
      'A shared language and strategic narrative for the L&amp;D function that enables it to engage the business as a credible strategic partner.'
    ],
    cases: [
      { client: 'Global Pharma · Europe', headline: 'Transforming a fragmented L&amp;D function into a strategic capability partner', challenge: 'Post-merger L&amp;D landscape across 6 business units with no shared architecture, 40+ vendors and no measurement framework.', work: 'Conducted a 10-week learning function review across all BUs. Facilitated leadership alignment sessions and co-designed a unified operating model.', outcome: 'Board-approved 18-month transformation roadmap. Vendor landscape reduced by 60%. CLO function repositioned with CEO-level visibility.' },
      { client: 'Global Financial Services · APAC', headline: 'Rebuilding L&amp;D credibility in a cost-pressured environment', challenge: 'L&amp;D team under threat of outsourcing. No evidence of impact. Business leaders disengaged. Training budget cut by 30% in 12 months.', work: '8-week review including a business stakeholder interview programme, measurement framework design and a re-prioritised portfolio.', outcome: 'L&amp;D function retained. New measurement dashboard adopted by CFO office. Two follow-on engagements contracted within 6 months.' }
    ],
    clients: ['Rio Tinto · Mining','BHP · Mining','Anglo American · Mining','Shell · Energy','Siemens Energy · Energy','InnoEnergy · Energy','Boeing · Aerospace','Airbus · Aerospace','Rolls-Royce · Aerospace','Adidas · Consumer Goods']
  },
  'ai-otm': {
    title: 'AI Operating Model Transformation',
    cluster: 'AI &amp; Digital Capability',
    duration: '10–14 weeks',
    format: 'Hybrid',
    type: 'Strategy + Capability Design',
    short: 'A structured engagement to design how a learning function — and the wider workforce — should operate in an AI-enabled environment. Surfaces where AI changes the work itself, where it changes the operating model, and where capability needs to be built deliberately.',
    challenges: [
      'AI adoption is outpacing AI fluency. The workforce is being asked to use tools it hasn\'t been prepared for, with no shared standard for what "AI-ready" means by role.',
      'L&amp;D is unsure whether its own operating model is fit for AI — and is being asked to build AI capability for everyone else while still answering the question for itself.',
      'There is no enterprise view of which workflows AI will change, by how much, by when — leaving capability planning reactive at exactly the moment it should be anticipatory.'
    ],
    approach: [
      { t: 'AI impact mapping', d: 'Identify which workflows, roles and functions AI will materially reshape in the next 12–24 months — with the business, not for it.' },
      { t: 'Capability architecture', d: 'Define AI fluency standards by role family — what every leader, manager and individual contributor needs to be able to do.' },
      { t: 'Operating model redesign', d: 'Redesign the L&amp;D operating model itself for the AI era: roles, decision rights, vendor mix, tech stack, governance.' },
      { t: 'Activation roadmap', d: 'Phased rollout plan with named owners, success metrics and the first 90-day moves.' }
    ],
    outcomes: [
      'An enterprise AI impact map showing where the workforce is most exposed to AI-driven change — and where capability investment should land first.',
      'AI fluency standards by role family, with assessment criteria and learning pathways defined for each.',
      'A redesigned L&amp;D operating model fit for delivering at the speed AI requires — including governance and vendor implications.',
      'A 12-month activation roadmap with sequenced milestones, owners and the first three programmes ready to launch.'
    ],
    cases: [
      { client: 'Global Pharma · NA', headline: 'Defining what AI-ready looks like across 18,000 commercial roles', challenge: 'Aggressive AI adoption push from the CEO with no shared definition of what AI capability meant by role — leading to fragmented training spend and limited business confidence.', work: '12-week engagement to map AI impact by role family, define fluency standards, and design the operating model to deliver at scale.', outcome: 'Enterprise AI capability framework adopted across commercial. First three programmes launched within 90 days of roadmap sign-off.' }
    ],
    clients: ['Boehringer Ingelheim','Novartis','Roche','HSBC','Standard Chartered','Accenture','TCS','Infosys','Shell','BP']
  },
  'lft': {
    title: 'Learning Function Transformation',
    cluster: 'Learning Function Transformation',
    duration: '16–24 weeks',
    format: 'Hybrid',
    type: 'Transformation + Activation',
    short: 'A multi-phase transformation of the learning function — moving from current state through redesign to activation, with NIIT working alongside the L&amp;D leadership team across the full arc rather than handing over at the strategy stage.',
    challenges: [
      'A strategy exists but isn\'t being acted on — typically because the operating model required to deliver it doesn\'t.',
      'The function has been redesigned on paper but transition risk is high — vendors, technology, governance and ways of working all need to shift in sequence.',
      'The L&amp;D leadership team needs an external partner who can stay in the work, not just write the plan.'
    ],
    approach: [
      { t: 'Baseline &amp; design', d: 'Confirm the strategic intent, the current state, and the target operating model — co-created, signed off, costed.' },
      { t: 'Transition planning', d: 'Sequencing of vendor, tech, governance and team transitions, with risk and dependency mapping.' },
      { t: 'Phase 1 activation', d: 'NIIT works alongside the leadership team to launch the first wave — the changes that signal the new direction.' },
      { t: 'Phase 2–3 progression', d: 'Subsequent waves of activation with embedded measurement and steering committee cadence.' },
      { t: 'Capability handover', d: 'Deliberate capability transfer to the in-house team so the function can run independently from the end of the engagement.' }
    ],
    outcomes: [
      'A learning function operating against a clear, signed-off target operating model — not a slide.',
      'First-wave changes visible to the business within the first 90 days.',
      'A measurement framework in flight from week one, so progress is provable.',
      'A capable in-house team that can sustain the new model after NIIT exits.'
    ],
    cases: [
      { client: 'Global Pharma · Europe', headline: 'Eighteen-month transformation that survived a CLO transition', challenge: 'L&amp;D function fragmented across six BUs. Board-approved transformation needed delivery, not another strategy refresh.', work: 'NIIT embedded alongside the L&amp;D leadership team through a phased 18-month transformation across all BUs.', outcome: 'Unified operating model in place. Vendor landscape reduced by 60%. Transformation continued through a mid-programme CLO transition without disruption.' }
    ],
    clients: ['UCB','Boehringer Ingelheim','Pfizer','Standard Chartered','HSBC','Rio Tinto','Shell','Siemens','Adidas','Diageo']
  },
  'lae': {
    title: 'Learning Architecture &amp; Experience',
    cluster: 'Learning Architecture',
    duration: '6–10 weeks',
    format: 'Hybrid',
    type: 'Design + Architecture',
    short: 'A focused redesign of how learning is structured, sequenced and experienced across the organisation — moving from a fragmented content catalogue to a coherent architecture that learners can navigate and the business can govern.',
    challenges: [
      'Learning sits in dozens of places — LMS, intranet, external platforms, shared drives — with no shared taxonomy or navigation.',
      'Learners can\'t find what they need; managers can\'t see what their teams are doing; the business can\'t see what is being invested in.',
      'Every new initiative bolts on a new platform or pathway, deepening the fragmentation rather than resolving it.'
    ],
    approach: [
      { t: 'Audit', d: 'Map the current learning estate — platforms, content, pathways, taxonomies — and the experience of three learner personas.' },
      { t: 'Architecture design', d: 'Define the target architecture: pathways, taxonomies, content lifecycle, ownership, governance.' },
      { t: 'Experience design', d: 'Design the learner-facing experience and the navigation logic — what good looks like.' },
      { t: 'Transition plan', d: 'Sequenced migration plan, with quick wins identified for the first 90 days.' }
    ],
    outcomes: [
      'A target architecture diagram and design specification signed off by L&amp;D and business stakeholders.',
      'A learner experience prototype walking through the three priority journeys.',
      'A migration plan, sized and sequenced, that can be commissioned independently.',
      'Quick wins identified that can ship in the first 90 days to signal the change.'
    ],
    cases: [
      { client: 'Global Energy · APAC', headline: 'From eight platforms to one navigable architecture', challenge: 'Learners faced 8 different platforms with overlapping content and no clear pathway. Time-to-find was the number-one complaint in the engagement survey.', work: '8-week architecture redesign with prototype experience and a costed migration plan.', outcome: 'Migration commissioned. Learner satisfaction up 24 points in the first 6 months post-rollout.' }
    ],
    clients: ['Shell','BP','Anglo American','UCB','Pfizer','HSBC','Standard Chartered','Adidas','Diageo','Rolls-Royce']
  },
  'po': {
    title: 'Portfolio Optimisation',
    cluster: 'Portfolio &amp; Governance',
    duration: '6–10 weeks',
    format: 'Hybrid',
    type: 'Analysis + Strategy',
    short: 'A structured review of the learning portfolio against business priorities, cost, usage and impact — surfacing where investment should grow, hold, or stop. Designed to be defensible to finance and credible to the business.',
    challenges: [
      'Portfolio decisions are made historically — last year\'s mix plus inflation — not against current business priorities.',
      'No shared evidence base on what is working, so cuts are blunt and growth is opportunistic.',
      'Compliance, leadership and capability programmes coexist with no view of relative ROI, making it impossible to defend the mix to the CFO.'
    ],
    approach: [
      { t: 'Portfolio mapping', d: 'Map the full learning portfolio against business priorities, cost, usage, outcome and risk.' },
      { t: 'Investment analysis', d: 'Identify the grow / hold / stop calls with clear rationale and finance-grade evidence.' },
      { t: 'Strategic recommendations', d: 'Reshape the portfolio against the priorities for the next 18–24 months.' }
    ],
    outcomes: [
      'A portfolio investment map with grow / hold / stop calls and the rationale behind each.',
      'A reshaped portfolio costed and sized for the next planning cycle.',
      'A defensible position for the CLO going into budget conversations.'
    ],
    cases: [
      { client: 'Global Bank · EMEA', headline: 'A 30% cost reduction without losing capability', challenge: 'L&amp;D budget cut by 30% with no agreed framework for where to absorb it.', work: '8-week portfolio review with a finance-grade evidence base.', outcome: 'Cost reduction delivered without affecting strategic programmes. CFO office adopted the framework for ongoing reviews.' }
    ],
    clients: ['HSBC','Barclays','Standard Chartered','UCB','Pfizer','Shell','BP','Rio Tinto','Accenture','TCS']
  },
  'lam': {
    title: 'Learning Analytics &amp; Measurement',
    cluster: 'Analytics &amp; Impact',
    duration: '8–12 weeks',
    format: 'Hybrid',
    type: 'Analytics + Architecture',
    short: 'Build the measurement spine for the learning function — moving from completion metrics to evidence of behaviour change, capability progression and business outcome. Designed to be defensible to the CFO and useful to the business.',
    challenges: [
      'Reporting is dominated by completion and satisfaction metrics that no business leader believes.',
      'Data lives in the LMS, the HRIS and three vendor platforms; nothing reconciles, so the CLO can\'t answer the question "is this working?".',
      'When the answer is needed for a board paper, the analyst team builds a one-off spreadsheet — every time.'
    ],
    approach: [
      { t: 'Measurement strategy', d: 'Define what we measure, why, for whom, and how the answer will be used in decision-making.' },
      { t: 'Data architecture', d: 'Map the data sources, define the model, design the integration plan.' },
      { t: 'Dashboard design', d: 'Design the views by audience — CLO, HRBP, business leader, regulator.' },
      { t: 'Operating model', d: 'Define the analytics team, governance and operating cadence to sustain it.' }
    ],
    outcomes: [
      'A measurement framework that answers the three or four questions the business actually asks.',
      'A data architecture and integration plan that\'s costed and ready to commission.',
      'A dashboard design accepted by the CFO office and the business leaders who will use it.',
      'A team and operating model that can run the analytics function ongoing.'
    ],
    cases: [
      { client: 'Global Pharma · NA', headline: 'A measurement framework adopted by the CFO office', challenge: 'L&amp;D investment of $40M annually with no defensible impact story for finance or the board.', work: '10-week engagement to design the measurement spine, data architecture and dashboards.', outcome: 'Framework adopted by CFO. Quarterly capability dashboard now part of the executive review cycle.' }
    ],
    clients: ['Pfizer','UCB','Novartis','HSBC','Standard Chartered','Shell','Rio Tinto','Accenture','Adidas','Diageo']
  },
  'sf': {
    title: 'Skills Framework &amp; Architecture',
    cluster: 'Skills &amp; Capability',
    duration: '8–14 weeks',
    format: 'Hybrid',
    type: 'Strategy + Architecture',
    short: 'A skills framework built to be used, not filed. Defines critical roles, the skills that make them work, the proficiency levels that matter, and the operating model to keep the framework current — without ballooning into 5,000 skills nobody references.',
    challenges: [
      'Existing skills frameworks are either too granular to use or too generic to be actionable.',
      'No clear link between skills data and the decisions it should drive — hiring, development, deployment, succession.',
      'Skills data degrades fast. Without a maintenance operating model, even a good framework is stale within 12 months.'
    ],
    approach: [
      { t: 'Critical role identification', d: 'Identify the role families where skills clarity matters most for the next 18–24 months.' },
      { t: 'Framework design', d: 'Define the skills and proficiency levels for each role family — sized for use, not for completeness.' },
      { t: 'Decision integration', d: 'Connect skills data to the hiring, development and deployment decisions it should drive.' },
      { t: 'Maintenance model', d: 'Define how the framework stays current — ownership, cadence, governance.' }
    ],
    outcomes: [
      'A skills framework covering the critical role families, sized for use.',
      'A clear line of sight from skills data to business decisions.',
      'A maintenance operating model that keeps the framework current.'
    ],
    cases: [
      { client: 'Global GSI · APAC', headline: 'Skills clarity across 12,000 delivery roles', challenge: 'A previous framework had 3,800 skills and was used by nobody. Hiring and deployment ran on instinct.', work: '12-week reset focused on 14 critical role families with a maintenance model defined alongside.', outcome: 'Framework adopted by delivery leadership. Used in hiring and deployment within 90 days of rollout.' }
    ],
    clients: ['TCS','Infosys','Accenture','Wipro','Cognizant','HSBC','Standard Chartered','Pfizer','Shell','Rio Tinto']
  },
  'lt': {
    title: 'Leadership &amp; Talent Development',
    cluster: 'Leadership',
    duration: '12–24 weeks',
    format: 'Hybrid',
    type: 'Design + Delivery',
    short: 'Design and launch leadership programmes that build the bench the business actually needs — anchored to strategy, calibrated by level, and measurable against business outcomes.',
    challenges: [
      'Existing programmes are popular but not measurably building the leadership pipeline the business needs.',
      'Different leadership levels are running on the same content — high-potentials, new managers, senior leaders — diluting impact at every level.',
      'No measurement framework, so investment continues but renewal is precarious every budget cycle.'
    ],
    approach: [
      { t: 'Strategic anchoring', d: 'Align the leadership agenda to the business strategy and the capability gaps it implies.' },
      { t: 'Programme architecture', d: 'Design the architecture by level — high-potential, new manager, senior leader, executive.' },
      { t: 'Experience design', d: 'Design the learner experience for each programme with the measurement spine built in from day one.' },
      { t: 'Launch &amp; iterate', d: 'Launch the priority programmes; iterate based on early evidence.' }
    ],
    outcomes: [
      'A leadership architecture by level, anchored to strategy.',
      'Priority programmes launched with measurement embedded.',
      'An evidence base for ongoing investment and prioritisation.'
    ],
    cases: [
      { client: 'Global Bank · APAC', headline: 'Rebuilding the senior leader pipeline post-hybrid', challenge: 'Senior leader bench had thinned through the hybrid working period. The CEO asked for evidence-based action within 18 months.', work: '20-week design and launch of a tiered leadership architecture with measurement built in.', outcome: 'Senior pipeline metrics moved from red to amber within 12 months. Programme renewed and expanded.' }
    ],
    clients: ['HSBC','Standard Chartered','Barclays','DBS','UCB','Pfizer','Shell','Rio Tinto','Accenture','Adidas']
  },
  'lds': {
    title: 'Learning Design &amp; Studio',
    cluster: 'Learning Design',
    duration: 'Ongoing or 8–16 week sprints',
    format: 'Hybrid',
    type: 'Design + Production',
    short: 'A senior-led learning design and production partnership for the moments when learning has to be exceptional — high-stakes launches, transformations, regulatory programmes, executive education.',
    challenges: [
      'Internal teams can ship at volume but lack the design depth for the high-stakes moments.',
      'External vendors deliver against brief but don\'t bring strategic design thinking.',
      'When stakes are high, the design partner needs to be senior enough to push back on the brief and contribute strategically.'
    ],
    approach: [
      { t: 'Strategic design', d: 'Senior design lead engaged at the brief stage, not after.' },
      { t: 'Production', d: 'NIIT studio capability for end-to-end delivery on the priority programmes.' },
      { t: 'Embedded review', d: 'Built-in moments of stakeholder review to keep the work commercially aligned.' }
    ],
    outcomes: [
      'High-stakes programmes delivered to a design standard the business can be proud of.',
      'Stakeholder confidence in the L&amp;D function as a strategic design partner.',
      'A repeatable design approach the in-house team can apply to subsequent work.'
    ],
    cases: [
      { client: 'Global Pharma · NA', headline: 'A flagship leader programme designed to executive standard', challenge: 'Senior leader programme needed a redesign to match the executive committee\'s expectation of quality.', work: '14-week design and production engagement with a senior NIIT lead.', outcome: 'Programme delivered to CEO sign-off; rolled out to 400 senior leaders globally.' }
    ],
    clients: ['UCB','Pfizer','Novartis','HSBC','Standard Chartered','Shell','BP','Adidas','Diageo','Accenture']
  },
  'lsg': {
    title: 'Learning Standards &amp; Governance',
    cluster: 'Standards &amp; Governance',
    duration: '6–10 weeks',
    format: 'Hybrid',
    type: 'Standards + Governance',
    short: 'Set the standards that allow the learning function to scale consistently without killing responsiveness. Define what good looks like, who decides what, and how exceptions are handled.',
    challenges: [
      'Different parts of the business run learning to different standards, eroding the brand of L&amp;D internally.',
      'Governance is either too loose (chaos) or too tight (paralysis); the operating point is hard to find.',
      'Vendors and internal teams have no shared definition of "good", so quality varies engagement to engagement.'
    ],
    approach: [
      { t: 'Standards definition', d: 'Define the standards by category — design, technology, data, accessibility, brand, vendor.' },
      { t: 'Decision rights', d: 'Map decision rights for enterprise, regional and local — what gets decided where.' },
      { t: 'Exception handling', d: 'Define how exceptions are raised, reviewed and resolved without paralysis.' }
    ],
    outcomes: [
      'A standards framework signed off by the leadership team.',
      'A decision-rights matrix the business can navigate without escalation.',
      'A governance cadence light enough to sustain and strong enough to matter.'
    ],
    cases: [
      { client: 'Global Bank · EMEA', headline: 'Standards that hold across 30 countries', challenge: 'L&amp;D delivery in 30 countries with no shared standards; brand reputation eroding internally.', work: '8-week engagement to define standards and decision rights.', outcome: 'Standards adopted; first-pass quality up materially within 6 months.' }
    ],
    clients: ['HSBC','Standard Chartered','Barclays','UCB','Pfizer','Shell','BP','Rio Tinto','Accenture','TCS']
  },
  'lds2': {
    title: 'Learning Tech Strategy &amp; Rationalisation',
    cluster: 'Tech Strategy',
    duration: '6–10 weeks',
    format: 'Hybrid',
    type: 'Strategy + Architecture',
    short: 'A focused rationalisation of the learning technology stack. Built around the question "what are we trying to enable, and what is the minimum architecture that gets us there reliably?".',
    challenges: [
      'Tech stack has grown by acquisition and accretion — five tools that overlap and one that doesn\'t talk to anything.',
      'Renewal cycles are uncoordinated so consolidation conversations never happen at the right moment.',
      'Strategic decisions are made by the vendor with the loudest sales motion, not the architecture.'
    ],
    approach: [
      { t: 'Capability mapping', d: 'Map the learning capability the business needs against the tools it owns.' },
      { t: 'Stack rationalisation', d: 'Identify the consolidation and retire calls; size the saving.' },
      { t: 'Architecture design', d: 'Define the target architecture and the integration model.' }
    ],
    outcomes: [
      'A target architecture for the learning tech stack.',
      'A consolidation plan with named savings.',
      'A vendor strategy that gives the business leverage on renewals.'
    ],
    cases: [
      { client: 'Global Energy · NA', headline: '$2M annual saving with no loss of capability', challenge: 'Tech stack of 11 tools with overlapping capability; renewal pressure approaching across three of them.', work: '8-week rationalisation engagement aligned to the renewal calendar.', outcome: '$2M annual saving achieved; capability preserved; stack reduced to 6 tools.' }
    ],
    clients: ['Shell','BP','Anglo American','UCB','HSBC','Standard Chartered','Adidas','Diageo','Accenture','TCS']
  },
  'lcg': {
    title: 'Compliance Learning Redesign',
    cluster: 'Compliance',
    duration: '10–14 weeks',
    format: 'Hybrid',
    type: 'Strategy + Redesign',
    short: 'Move compliance learning from a tick-box exercise to a defensible capability. Redesign the curriculum around actual risk priorities, with evidence of competence — not completion — as the standard.',
    challenges: [
      'Regulators are asking for evidence of competence, not evidence of completion.',
      'The current compliance curriculum is huge, mandatory and unloved — and there\'s no shared view of which parts actually mitigate risk.',
      'Compliance and capability development run in parallel ecosystems, multiplying cost and confusing learners.'
    ],
    approach: [
      { t: 'Risk priority mapping', d: 'Map the compliance curriculum against the actual regulatory and operational risk priorities.' },
      { t: 'Redesign', d: 'Redesign the curriculum around competence, not coverage.' },
      { t: 'Evidence design', d: 'Design the evidence base — what we capture, how we report it, how it stands up to audit.' }
    ],
    outcomes: [
      'A compliance curriculum sized to actual risk priorities.',
      'A competence-based evidence model.',
      'A regulator-defensible reporting framework.'
    ],
    cases: [
      { client: 'Global Bank · EMEA', headline: 'Compliance training that satisfies regulators and learners', challenge: 'Regulators were asking for competence evidence the bank could not produce; learners were disengaged.', work: '12-week redesign across the top 5 regulatory areas.', outcome: 'Audit response time cut by 60%. Learner satisfaction up 18 points.' }
    ],
    clients: ['HSBC','Standard Chartered','Barclays','DBS','UCB','Pfizer','Shell','BP','Accenture','TCS']
  },
  'acad': {
    title: 'Academy Design &amp; Build',
    cluster: 'Academy',
    duration: '14–22 weeks',
    format: 'Hybrid',
    type: 'Design + Build',
    short: 'Stand up a functional, technical or leadership academy from strategic intent through to live cohort — design, content, technology, governance and the first wave of delivery.',
    challenges: [
      'A specific capability is named as a strategic priority — sales, data, technology, leadership — and the business wants a focused vehicle, not a course catalogue.',
      'Internal teams can run an academy at steady state but don\'t have the bandwidth to design and stand one up.',
      'Time-to-first-cohort is the metric; everything else is downstream.'
    ],
    approach: [
      { t: 'Strategic frame', d: 'Confirm the academy\'s scope, intent and success measures with the sponsoring leadership.' },
      { t: 'Design', d: 'Curriculum, faculty model, learner experience, technology, governance — designed end to end.' },
      { t: 'Build', d: 'Build the priority content, configure the technology, brief the faculty.' },
      { t: 'Launch', d: 'Run the first cohort with NIIT support; transition to in-house delivery.' }
    ],
    outcomes: [
      'A live academy with the first cohort running.',
      'A clear operating model and governance to sustain it.',
      'An evidence base for the next investment conversation.'
    ],
    cases: [
      { client: 'Global Pharma · NA', headline: 'A commercial academy in 18 weeks', challenge: 'Commercial transformation required a dedicated capability vehicle. CEO sponsorship; tight launch window.', work: '18-week end-to-end design, build and launch of the commercial academy.', outcome: 'First cohort launched on schedule. Three subsequent cohorts contracted.' }
    ],
    clients: ['Pfizer','UCB','Novartis','HSBC','Standard Chartered','Accenture','TCS','Shell','Adidas','Diageo']
  }
};


const ENGAGEMENT_ORDER = ['lfr','ai-otm','lft','lae','po','lam','sf','lt','lds','lsg','lds2','lcg','acad'];

// ============ LOGIC MAP TOGGLE ============

const DIAG_OFFERINGS = {
  lfr:  { id:'lfr',    name:'Learning Function Review & Strategic Roadmap',        tag:'Wedge offering — diagnose the function before prescribing a solution',     cluster:'Wedge',                    outcome:'A board-ready strategic narrative for L&D — with a sequenced plan the business can underwrite.' },
  aotm: { id:'ai-otm', name:'AI Operating Model Transformation',                   tag:'Redesign how L&D operates in an AI-enabled environment',                  cluster:'AI & Digital',             outcome:'An L&D function rebuilt to operate and deliver in an AI-enabled world — not retrofitted to it.' },
  ewai: { id:'ai-otm', name:'Enterprise-Wide AI Adoption',                         tag:'Build AI fluency across the entire workforce — not just tech teams',       cluster:'AI & Digital',             outcome:'A workforce that can work with AI — measurably, at scale, before the window closes.' },
  adcb: { id:'ai-otm', name:'AI & Digital Capability Building Programs',           tag:'Close the AI and digital fluency gap for specific functions',              cluster:'AI & Digital',             outcome:'Specific teams equipped with AI and digital skills — fast, targeted, with evidence of transfer.' },
  lft:  { id:'lft',    name:'Learning Transformation',                             tag:'Redesign the L&D function from the ground up — people, process, purpose',  cluster:'Learning Function Design', outcome:'A learning function that works at the level the business operates — not behind it.' },
  acad: { id:'acad',   name:'Academy Design & Build',                              tag:'Create a branded, scalable learning institution for a defined population',  cluster:'Learning Function Design', outcome:'A branded learning institution that becomes part of why people join — and stay.' },
  cap:  { id:'lt',     name:'Capability Building Program',                         tag:'Close a defined, high-priority capability gap with a structured programme', cluster:'Capability & Skills',      outcome:'A defined capability gap closed — with evidence the business can point to.' },
  ljp:  { id:'lae',    name:'Learning Journeys & Pathways',                        tag:'Design coherent learner experience from novice to expert, end-to-end',      cluster:'Capability & Skills',      outcome:'A learning experience people actually complete, retain, and apply in the role.' },
  po:   { id:'po',     name:'Portfolio Optimisation',                              tag:"Rationalise what exists — retire what doesn't work, invest in what does",   cluster:'Portfolio & Governance',   outcome:"Budget freed from what doesn't work, reinvested in what does — with the data to defend it." },
  lsg:  { id:'lsg',    name:'Learning Standards & Governance',                     tag:'One operating model, one quality standard, one source of truth',            cluster:'Portfolio & Governance',   outcome:"One operating model across every BU — so scale doesn't mean fragmentation." },
  saf:  { id:'sf',     name:'Skills Architecture & Framework',                     tag:'Build the common language for skills across the organisation',              cluster:'Skills Intelligence',      outcome:'A common skills language the business and L&D can both use — and hold each other to.' },
  ssr:  { id:'sf',     name:'Skills Strategy & Roadmap',                           tag:'Translate business strategy into a multi-year skills plan',                 cluster:'Skills Intelligence',      outcome:'A skills roadmap aligned to strategy — not trailing it by two years.' },
  lam:  { id:'lam',    name:'Learning Analytics & Measurement Strategy',           tag:"Build the capability to prove and improve learning's impact on outcomes",    cluster:'Analytics & Technology',   outcome:'Proof that learning moves the metrics the business cares about — not just completions.' },
  tec:  { id:'lds2',   name:'Technology Ecosystem Analysis & Rationalisation',     tag:'Map, evaluate, and simplify the learning technology landscape',             cluster:'Analytics & Technology',   outcome:'A technology landscape that works — fewer platforms, lower cost, better data.' },
};


const DIAG_Qs = [
  {
    id:'moment', label:'Q1 — Business Moment', tierUse:[2,3],
    head:"What's driving this conversation right now?",
    sub:'Every engagement has a catalyst. Understanding it tells you how real the mandate — and budget — is.',
    probe:'"Is this coming from the board, the CHRO, or the L&D team itself?" Top-down means budget is likely real.',
    type:'multi',
    opts:[
      {v:'mandate',   t:'Board or CEO has set capability as a strategic priority',      sig:'STRONG'},
      {v:'crisis',    t:'Something broke or came close to breaking',                     sig:'STRONG'},
      {v:'transform', t:'Major transformation underway — M&A, restructure, new strategy', sig:'STRONG'},
      {v:'strategy',  t:'Strategic cycle or planning refresh',                            sig:'MODERATE'},
      {v:'explore',   t:'Early-stage hypothesis — not yet diagnosed',                     sig:'WEAK'},
    ],
    score(v){const m={
      mandate:  {lfr:3,lft:2,ssr:2},
      crisis:   {lfr:3,cap:2,lsg:2},
      transform:{lft:3,aotm:2,lfr:1},
      strategy: {ssr:2,saf:2,lfr:1},
      explore:  {lfr:2},
    };const p={};(Array.isArray(v)?v:[v]).forEach(k=>{Object.entries(m[k]||{}).forEach(([e,s])=>{p[e]=(p[e]||0)+s;});});return p;}
  },
  {
    id:'scope', label:'Q2 — Scope & Population', tierUse:[1,2,3],
    head:'Who does this need to reach — and how big is the workforce in scope?',
    sub:'This sets the ceiling on what kind of solution makes sense.',
    probe:'"Is that the whole group, or just the population you\'re most concerned about?" Large headcount with a small L&D team is a strong signal.',
    type:'single',
    opts:[
      {v:'enterprise', t:'The whole enterprise — everyone',          sig:'STRONG'},
      {v:'function',   t:'A specific function, BU, or role family',  sig:'STRONG'},
      {v:'ld_itself',  t:'The L&D function itself',                  sig:'STRONG'},
      {v:'leaders',    t:'Leaders and managers specifically',         sig:'STRONG'},
    ],
    score(v){const m={
      enterprise:{ewai:2,lsg:2,tec:2},
      function:  {cap:3,adcb:2,ljp:2},
      ld_itself: {aotm:3,lfr:2,lft:2},
      leaders:   {cap:3,acad:2,ljp:2},
    };return m[v]||{};}
  },
  {
    id:'maturity', label:'Q3 — L&D Maturity', tierUse:[1,2,3],
    head:'How would you honestly describe the L&D function today — and how is it seen by the business?',
    sub:'Not the aspiration — the reality.',
    probe:'"If I asked three senior leaders what L&D does for the business, would I get the same answer?" Variance tells you everything.',
    type:'scale',
    opts:[
      {v:1, n:'1', t:'Order-taker',  d:'Does what it\'s asked. No strategic agenda.'},
      {v:2, n:'2', t:'Organiser',    d:'Has programmes, no clear strategy.'},
      {v:3, n:'3', t:'Builder',      d:'Building credibility. Some strategic work underway.'},
      {v:4, n:'4', t:'Partner',      d:'Consulted by the business. Evidence-based.'},
      {v:5, n:'5', t:'Leader',       d:'Shapes talent strategy. Drives business outcomes.'},
    ],
    score(v){const n=+v;
      if(n===1)return{lfr:3,lsg:2,lft:2};
      if(n===2)return{lfr:3,lft:2,po:2};
      if(n===3)return{saf:2,ljp:2,po:2};
      if(n===4)return{lam:3,saf:2,acad:2};
      return{lam:3,tec:2,ssr:2};}
  },
  {
    id:'gap', label:'Q4 — Primary Capability Gap', tierUse:[1,2,3],
    head:'Where is the biggest distance between what the workforce can do today and what the business needs?',
    sub:'Rank your top 2. "We need training" usually masks something deeper.',
    probe:'"If you had to bet on the one thing that will most limit strategy execution over the next two years — what would it be?"',
    type:'multi', maxSelect:2,
    opts:[
      {v:'ai_digital',    t:'Our people aren\'t ready for AI or the digital shift',           sig:'STRONG'},
      {v:'future_skills', t:'We don\'t have the skills the business will need in 2–3 years',  sig:'STRONG'},
      {v:'leadership',    t:'We\'re not developing leaders fast enough',                       sig:'STRONG'},
      {v:'performance',   t:'People are trained but nothing changes in how they work',         sig:'STRONG'},
      {v:'no_clarity',    t:'No clear picture of what the gap even is',                        sig:'MODERATE'},
    ],
    score(v){const m={
      ai_digital:    {ewai:3,adcb:2,aotm:1},
      future_skills: {ssr:3,saf:2,cap:2},
      leadership:    {cap:3,acad:2,ljp:2},
      performance:   {lam:3,ljp:2,cap:1},
      no_clarity:    {lfr:2,saf:2,lam:1},
    };const p={};(Array.isArray(v)?v:[v]).forEach(k=>{Object.entries(m[k]||{}).forEach(([e,s])=>{p[e]=(p[e]||0)+s;});});return p;}
  },
  {
    id:'estate', label:'Q5 — The Learning Estate', tierUse:[1,2,3],
    head:'What does what they already have look like? Tech, content, governance, vendors.',
    sub:'Select everything — even if underused or broken.',
    probe:'"What would you protect at all costs — and what would you happily walk away from?" That contrast reveals everything.',
    type:'multi',
    opts:[
      {v:'fragmented', t:'Different BUs or regions all doing L&D their own way',     sig:'STRONG'},
      {v:'too_much',   t:'Too much content — unclear what works or what to cut',      sig:'STRONG'},
      {v:'tech_mess',  t:'Multiple platforms and vendors that don\'t integrate',       sig:'STRONG'},
      {v:'no_path',    t:'Content exists but learners don\'t know what to do next',   sig:'STRONG'},
      {v:'greenfield', t:'Very little in place — almost starting from scratch',        sig:'MODERATE'},
    ],
    score(v){const m={
      fragmented:{lsg:3,tec:2,lfr:1},
      too_much:  {po:3,lam:2,ljp:1},
      tech_mess: {tec:3,lsg:2,lam:1},
      no_path:   {ljp:3,acad:2,cap:1},
      greenfield:{lfr:2,cap:2,saf:1},
    };const p={};(Array.isArray(v)?v:[v]).forEach(k=>{Object.entries(m[k]||{}).forEach(([e,s])=>{p[e]=(p[e]||0)+s;});});return p;}
  },
  {
    id:'ai', label:'Q6 — The AI Question', tierUse:[1,2,3],
    head:'Where does AI sit in their agenda — and how loud is the mandate?',
    sub:'AI signals different offerings depending on whether the pressure is on the workforce, the L&D function, or specific teams.',
    probe:'"Has the CEO or board specifically called out AI readiness? Is there a named owner?" That tells you whether it\'s real or rhetoric.',
    type:'single',
    opts:[
      {v:'all_workforce',  t:'Enterprise mandate — board-level, owned, funded',       sig:'STRONG'},
      {v:'ld_model',       t:'L&D itself needs to redesign for an AI-enabled world',  sig:'STRONG'},
      {v:'specific_teams', t:'Specific teams or roles need AI and digital skills',    sig:'MODERATE'},
      {v:'not_yet',        t:'AI is on the agenda but not a real priority',           sig:'WEAK'},
    ],
    score(v){const m={
      all_workforce:  {ewai:3,aotm:2,lsg:1},
      ld_model:       {aotm:3,lft:2,lfr:1},
      specific_teams: {adcb:2,cap:1},
      not_yet:        {},
    };return m[v]||{};}
  },
  {
    id:'measurement', label:'Q7 — Measurement Reality', tierUse:[1,2,3],
    head:'Can the L&D function prove what it delivers to the business?',
    sub:'Honest current state — not aspiration.',
    probe:'"What happens when the CFO asks what learning delivered this year?" Their reaction tells you whether measurement or credibility is the real problem.',
    type:'single',
    opts:[
      {v:'none',       t:'Completions only — no business outcome story at all',         sig:'STRONG'},
      {v:'some',       t:'Data exists but does not connect to business outcomes',        sig:'STRONG'},
      {v:'fragmented', t:'Different teams measure differently — no consistency',         sig:'STRONG'},
      {v:'strong',     t:'We measure well — want data to drive better design decisions', sig:'MODERATE'},
    ],
    score(v){const m={
      none:       {lam:3,lfr:2,po:1},
      some:       {lam:3,tec:2,po:1},
      fragmented: {lsg:3,tec:2,lam:1},
      strong:     {tec:2,lam:2,ssr:1},
    };return m[v]||{};}
  },
  {
    id:'success', label:'Q8 — What Success Looks Like', tierUse:[1,2,3],
    head:'What does the sponsor need to show in 12–18 months?',
    sub:'Rank your top 2. Push past the polite answer — what will make them look credible, and to whom.',
    probe:'"Imagine it\'s 18 months from now and this is a landmark success. What happened — and who is saying it?"',
    type:'multi', maxSelect:2,
    opts:[
      {v:'credibility',  t:'Board credibility — L&D is taken seriously at the top table',     sig:'STRONG'},
      {v:'talent_brand', t:'Talent brand — people join and stay because of how we develop them', sig:'STRONG'},
      {v:'execution',    t:'Execution speed — the business executes strategy faster',          sig:'STRONG'},
      {v:'consistency',  t:'One operating model — no more fragmentation across BUs',           sig:'STRONG'},
      {v:'ai_lead',      t:'AI leadership — workforce ahead of the curve on technology',       sig:'STRONG'},
    ],
    score(v){const m={
      credibility:  {lfr:3,lft:2,lam:2},
      talent_brand: {acad:3,ljp:2,cap:1},
      execution:    {ssr:2,cap:2,saf:2},
      consistency:  {lsg:2,tec:2,saf:1},
      ai_lead:      {ewai:2,aotm:2,adcb:1},
    };const p={};(Array.isArray(v)?v:[v]).forEach(k=>{Object.entries(m[k]||{}).forEach(([e,s])=>{p[e]=(p[e]||0)+s;});});return p;}
  },
];


const CDS = [
  { initials: 'JE', name: 'Johnathon Eighteen', role: 'Practice Lead, Learning Function Transformation', focus: 'Strategy · Transformation · LFR' },
  { initials: 'BK', name: 'Bhawna Kumar',       role: 'Consulting Director, Pharma &amp; Life Sciences',    focus: 'Pharma · Capability · Academy' },
  { initials: 'CB', name: 'Cedric Borzee',      role: 'Consulting Director, AI &amp; Digital Capability',    focus: 'AI · Operating Model · Tech' },
  { initials: 'GJ', name: 'Graham Johnston',    role: 'Consulting Director, Skills &amp; Workforce',         focus: 'Skills · Architecture · Workforce' },
  { initials: 'MW', name: 'Mary Ann Wright',    role: 'Consulting Director, Analytics &amp; Impact',         focus: 'Measurement · Portfolio · Analytics' },
];

// ============ INDUSTRY GRID (Pre-Call) ============

const INDUSTRY_SVG = {
  // Pharma — pill capsule
  pharma: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="8.5" width="19" height="7" rx="3.5"/><line x1="12" y1="8.5" x2="12" y2="15.5"/></svg>`,
  // Energy — flame
  energy: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.5c1 4 5 5.5 5 10a5 5 0 01-10 0c0-2 1-3.5 2.5-5C10 9 11 6 12 2.5z"/><path d="M12 21c1.5-1 2.5-2.5 2.5-4.5 0-1.5-1-2.5-2.5-4-1.5 1.5-2.5 2.5-2.5 4 0 2 1 3.5 2.5 4.5z" opacity=".55"/></svg>`,
  // Banking — bank building with columns
  banking: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-5.5L21 9"/><line x1="2.5" y1="20.5" x2="21.5" y2="20.5"/><line x1="4" y1="9" x2="4" y2="18"/><line x1="9" y1="9" x2="9" y2="18"/><line x1="15" y1="9" x2="15" y2="18"/><line x1="20" y1="9" x2="20" y2="18"/></svg>`,
  // GSI — globe with grid
  gsi: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9.2"/><ellipse cx="12" cy="12" rx="4.2" ry="9.2"/><line x1="2.8" y1="12" x2="21.2" y2="12"/></svg>`,
};


const INDUSTRY_COUNTS = {
  pharma:  '6 offerings · 5 case studies',
  energy:  '6 offerings · 4 case studies',
  banking: '6 offerings · 5 case studies',
  gsi:     '5 offerings · 3 case studies',
};
