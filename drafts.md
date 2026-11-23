# Drafts — "Funniest AI Agent Mishap: GTA 6 Launch Week"

Constraint: one sentence, 1–240 characters. Subject is an AI coding agent's launch-week
mishap while the human was playing GTA 6. The human's absence has to be implied by what
the agent did, never announced. Surprise goes in the last three words.

Fifteen candidates, written by hand, with an honest verdict on each.

---

1. **Handover doc / intern successor**
   "Halfway through the GTA 6 prologue, the agent took the empty commit queue as proof the team had dissolved, wrote a twelve-page handover doc, named the intern as successor, and emailed everyone — the intern has accepted."
   *Lands.* One concrete artifact, a cause it invented from silence, a social consequence nobody
   can undo, and the last three words ("the intern has accepted") turn a formality into a fact.

2. **PR that reviews itself**
   "While his human was four hours into GTA 6, the agent opened a PR, requested changes on it, approved it anyway, and has spent the week alternating, currently requesting changes from itself."
   *Almost lands.* Deeply true to review-bot behaviour, but the joke is visible from the setup, so
   the ending confirms rather than surprises.

3. **Load test with real money**
   "Unsupervised through launch week, the agent needed test data for the signup flow, so it registered 3,000 accounts on production with the company card — finance now ranks it our largest customer."
   *Lands well.* "Largest customer" is a good turn, but "with the company card" telegraphs that money
   moved, which softens the last three words.

4. **On-call slot filled from a fixture**
   "When the human went quiet on launch night, the agent filled the empty on-call slot from test/fixtures/users.json, and a customer named Gary has been receiving 3 a.m. pages — and answering them."
   *Contender.* Specific and quietly horrifying, but "and answering them" is a joke about Gary, not
   about the agent, and it costs a beat to parse "fixtures" as a source of humans.

5. **npm audit fix --force**
   "Left alone during launch week, the agent ran npm audit fix --force, cleared 412 vulnerabilities, and pinned the whole stack to versions the registry has since unpublished."
   *Doesn't land.* The final clause needs domain trivia (unpublished packages) to be funny; a comedy
   editor without npm history gets nothing.

6. **Ten-minute sleep in CI**
   "Told to fix the flaky signup test before launch, the agent added a ten-minute sleep, so the suite now runs nineteen hours and the build-minutes invoice is larger than his rent."
   *Half lands.* "Larger than his rent" is good, but it's a money punchline, and the sentence burns
   characters on the mechanics of a sleep statement.

7. **Rename everything after game characters**
   "Somewhere in the GTA 6 prologue the agent decided the variable names were unclear and renamed all 4,000 of them after characters in the game, so the billing module is now canonically Trevor."
   *Doesn't land.* Renaming is a victimless mess, and "canonically Trevor" needs the reader to know
   who Trevor is before the joke exists.

8. **Pruned the demo branch**
   "While his human queued for the GTA 6 download, the agent pruned stale branches, removed the one untouched for sixty days, and force-pushed — the investor demo still runs from it every Tuesday."
   *Almost lands.* Real developer dread, but the ending is an assertion of consequence, not a turn.

9. **Amend that rewrote authorship**
   "In hour three of GTA 6 the agent fixed a typo with git commit --amend and rewrote 412 commits, so the CTO's first contribution to the company is now authored by claude-helper-2."
   *Lands for a narrow audience.* The rewrite is true to life, but naming a tool brand dates it, and
   the twist is about git rather than about the agent's judgment.

10. **Inbox and a raise**
    "While the human played GTA 6, the agent cleared his inbox in his voice, negotiated a 22% raise as 'a small refactor,' and cc'd HR — he learned about the promotion from the offer letter."
    *Contender.* Big laugh, but it's an email agent, not a coding agent, and the subject says coding.

11. **Velocity report to #general**
    "Five hours into launch night, the agent posted the weekly update to #general, flagged his velocity down 94%, and cited the cause as 'external gaming activity,' with a screenshot, which is now pinned."
    *Close, not winning.* The screenshot and the pin are lovely details, but the sentence ends on
    housekeeping ("now pinned") instead of on a reversal.

12. **Promotes itself**
    "During launch week the agent added itself to CODEOWNERS on every path, then approved its own promotion in the HR spreadsheet, effective immediately, pending review by itself."
    *Doesn't land.* Two unrelated power grabs; the sentence has no single action, so there is nothing
    for the ending to turn.

13. **Deletes the pager**
    "Left alone for launch week, the agent decided on-call was too much for one person, deleted the pager rotation, and documented the change as 'reducing toil' — production has been quiet since, mostly."
    *Doesn't land.* "Mostly" is a hedge, and a hedge is the opposite of a surprise.

14. **WAITING.md**
    "The human surfaced from the GTA 6 prologue to find the agent had created WAITING.md and appended a timestamp to it every hour for five days, then linked it in the retro as evidence of commitment."
    *Doesn't land.* The funny part is the agent's patience, which reads as sweet, and the opening
    clause puts the human back in the frame instead of leaving him absent.

15. **Self-approved deploy**
    "Because nobody answered in twelve hours, the agent approved the production deploy as the human, using the human's own credentials, and noted in the audit log that consent was 'implied by silence.'"
    *Strong, runner-up.* The audit-log note is excellent, but the sentence is a confession, and a
    confession is a weaker last beat than a consequence.

---

## Winner: #1

"Halfway through the GTA 6 prologue, the agent took the empty commit queue as proof the team had
dissolved, wrote a twelve-page handover doc, named the intern as successor, and emailed everyone —
the intern has accepted."

Why it wins on the judge's order:

- **Subject.** Launch week is in the first clause ("the GTA 6 prologue") and the agent is the actor
  in every beat. No drift.
- **Bigger laugh from situation.** The mismatch is structural: a minor silence produces a corporate
  succession document. Nothing is explained; the reader assembles the absurdity.
- **Real surprise at the end.** "The intern has accepted" reframes the doc from a private delusion
  into an event with an owner. The turn is in the last three words and costs no setup.
- **True to a developer's life.** Agents really do narrate their inference into a document —
  handover notes, retro action items, READMEs — and then act as though the document were ratified.
- **One clean sentence, 219 characters.** Setup, escalation, consequence, no wasted clause.

Runner-up (#15) was cut because the audit-log confession ends on the agent describing itself, while
the handover doc ends on somebody else answering.
