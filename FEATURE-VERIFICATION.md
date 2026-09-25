# Website claims checked against isolated beta, September 25, 2026

- Pipeline stages, values, contact search, custom stages: Pipeline.gs, Product.gs, PipelineUI.html. Live populated board and confirmed stage writes checked.
- Templates, merge variables, preview, owner-only test: Campaigns.gs, Templates.gs, PreviewDialog.html. One owner email delivered to Inbox.
- Scheduled follow-ups: Sequences.gs, Delivery.gs. Automated tests verify dependency timing, duplicate prevention and reply/unsubscribe suppression. No live hourly trigger test claimed.
- Manual replies: markContactReplied and markAsReplied. No inbox scanning.
- CSV mapping/deduplication: Home.html and Product.gs. Duplicate email checks, not broad name/phone deduplication.
- Appearance and outcome sounds: all five panels; browser preference persistence. Live dark Settings and pipeline verified.
- Send log: durable ledger states. Sent means service acceptance, not guaranteed delivery.
- Unsubscribe: signed POST confirmed live. Scope is this sender's outreach in this spreadsheet, not every sender or workbook.

Removed unsupported marketing: open tracking, automatic reply detection, unlimited sending, Calendar/Meet scheduling UI, SMS, date reporting, archives, team accounts, instant Marketplace installation, unverified social proof/testimonials and adoption statistics.

Owner approved $5/month per user for full access. Team features are explicitly coming soon; no subscription is available yet. Google service limits continue to apply.
