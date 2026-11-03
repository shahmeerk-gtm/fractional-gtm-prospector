// Company Fit Score (0–100), Clay formula column
//
// Rules:
//   +30  latest round within the last 6 months   (+15 if within 12 months)
//   +25  2 or more open US sales roles
//   +25  not hiring a RevOps / Marketing Ops role (-25 if they are)
//   +10  under 100 employees
//   +10  CRM is HubSpot or Salesforce
//   "unknown" or blank values score 0
//
// Cutoff used: 65+
//
// Clay formula (columns inserted as {{Column Name}}):

(0)
+ (!{{Round Date}} || {{Round Date}} == "unknown"
    ? 0
    : (moment().diff(moment({{Round Date}} + "-01"), "months") <= 6
        ? 30
        : moment().diff(moment({{Round Date}} + "-01"), "months") <= 12 ? 15 : 0))
+ ((+{{Open Sales Roles}} >= 2) ? 25 : 0)
+ (({{Hiring Ops Role}} || "").toLowerCase() == "yes" ? -25 : 25)
+ ((+{{Employees}} < 100) ? 10 : 0)
+ (({{CRM}} || "").toLowerCase().includes("hubspot") ||
   ({{CRM}} || "").toLowerCase().includes("salesforce") ? 10 : 0)

// Known gap: a company with no recent funding can still reach 60–70 from the
// other signals. Two did (last rounds in 2018 and 2021) and were excluded in
// manual review. Next version: require round_date within 12 months as a filter.
