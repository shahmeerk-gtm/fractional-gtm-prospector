# First-line prompt

**Column type:** Clay "Use AI"
**Model:** Claude Sonnet
**Output:** `first_line` (Text)

## v2 (current)

```
Write the first line of a cold email to {{First Name}} ({{Title}}) at {{Company}}, which makes {{What they do}} and has {{Employees}} employees. They raised a {{Round}} in {{Round Date}} and have {{Open Sales Roles}} open sales roles.

Goal: show you understand their specific go-to-market, not just that they're hiring. Think about who {{Company}} likely sells to (developers, enterprises, SMBs, research labs, etc.) and name one concrete GTM problem a company like this usually hits at this stage. For example: turning self-serve or API signups into sales leads, spotting which big accounts already use the product, giving new reps a clean target list, or tracking pipeline by segment.

Rules:
- One sentence, under 25 words.
- Don't start with "With." Don't use the phrase "ramp faster."
- Frame the problem as something companies like theirs often face, not as a claim about them. Only use the facts given.
- Don't state the funding amount. Only mention the number of sales roles if it's 2 or more.
- No flattery, no "I noticed / I saw," no exclamation points. Write like a peer, plainly.
```

## v1 (replaced)

```
Write the opening line of a cold email to {{First Name}}, {{Title}} at {{Company}} ({{What they do}}, {{Employees}} employees).
Facts you can use: they raised a {{Round}} in {{Round Date}} and have {{Open Sales Roles}} open sales roles.
The sender is a GTM engineer who builds outbound, enrichment, and CRM reporting systems. The point of the line: new reps ramp faster when the pipeline, routing, and CRM behind them are set up early.
Rules: one sentence, under 25 words. Mention the raise or the sales hiring, not both if it gets long. No flattery. No exclamation points. Don't state the amount raised. Sound like a person, not a template.
```

## Why v1 was replaced

v1 gave the model only generic facts (round, date, number of roles) plus a fixed point to make, so every line came out as the same sentence with the numbers swapped:

> "With four sales roles open at [Company], new reps will ramp noticeably faster if the pipeline, routing, and CRM are already built when they start."

v2 makes the model reason about each company's business model and buyer. The lines became specific to each company: an open-source framework moving into enterprise, a two-sided GPU marketplace, an API with a self-serve and an enterprise tier.

The remaining weakness is that many v2 lines share a "[type of company] often struggle to tell which…" structure, which echoes the examples in the prompt. With a small list, a quick hand edit fixes this; at scale I'd remove the examples or ask for two structurally different options per contact.
