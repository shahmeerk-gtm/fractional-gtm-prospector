# Research agent prompt

**Column type:** Clay "Use AI" → Web research (Claygent)
**Model:** Claude Sonnet
**Cost:** ~1.7–1.9 Clay credits per company, 30–100 seconds per row

## Prompt

```
Research {{Company}} ({{Domain}}). Return JSON: {"round": "", "amount": "", "round_date": "YYYY-MM", "open_sales_roles": number, "hiring_ops_role": "yes/no", "crm": "HubSpot/Salesforce/other/unknown", "source_url": ""}. Check recent funding news, their careers page, and their website. Use "unknown" if you can't confirm.

If the careers page doesn't load, check their job board on Greenhouse, Lever, Ashby, or LinkedIn Jobs. Only count roles based in the US or remote-US.
```

## Output fields

| Field | Type |
|---|---|
| round | Text |
| amount | Text |
| round_date | Text (YYYY-MM) |
| open_sales_roles | Number |
| hiring_ops_role | Text (yes/no) |
| crm | Text |
| confidence | Text (low/medium/high), returned by Claygent |
| source_url | URL |

## Notes

- The second paragraph was added after testing: careers pages often failed to load, and some companies' sales roles were offshore.
- Round names come back inconsistent ("Seed", "Later Stage VC", "Accelerator/Corporate investment"), so scoring uses `round_date`, not `round`.
- Amounts weren't always reliable, so they're never used in scoring or outreach without checking the source URL.
