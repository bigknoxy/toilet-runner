# Release Verification Skill

## Purpose

Mandatory verification workflow for Toilet Runner game releases. This skill ensures NO release goes to production without proper QA testing using `/qa` and `/browse` skills.

## When to Use

**MANDATORY before:**
- Creating a GitHub release
- Deploying to production (GitHub Pages)
- Merging PRs that will auto-deploy

**Invoke with:** `/release-verification` or when user says "ship", "release", "deploy"

## Verification Checklist

### Step 1: Production URL Check
```bash
curl -s https://bigknoxy.github.io/toilet-runner/ | head -5
```
Must return valid HTML with 200 status.

### Step 2: QA Testing (Required)
Use `/qa` skill with:
- URL: https://bigknoxy.github.io/toilet-runner/
- Tier: Standard (or Exhaustive for major releases)
- Focus: Both existing functionality AND new features

**QA must verify:**
- Game loads without console errors
- Start screen displays correctly
- Gameplay works (can start, dodge obstacles)
- Coin system works (collection, balance display)
- Near-miss rewards work (if in release)
- Shop works (if modified)
- No JavaScript errors in console
- Performance is smooth (55-60 FPS target)

### Step 3: Browse Verification (Required)
Use `/browse` skill to:
- Navigate to production URL
- Take screenshot of start screen
- Click "Start" and verify game starts
- Play briefly and verify gameplay
- Check console for errors
- Take screenshots as evidence

### Step 4: Feature-Specific Verification

For each feature in the release, verify it works:

**Example: Near-miss coin rewards**
- Play game
- Dodge obstacle in adjacent lane closely
- Verify "+Score +Coins!" popup appears
- Verify coin balance increases

**Example: New skins**
- Open shop
- Verify new skin is available
- Purchase/unlock if possible
- Apply skin and verify it displays

### Step 5: Regression Testing

Verify existing features still work:
- Lane switching (left/right)
- Jump mechanic
- Coin collection
- Score display
- Game over screen
- Restart functionality
- Sound on/off
- Leaderboard display

## Success Criteria

Release is APPROVED only if:
- ✅ QA testing passes (no critical/high issues)
- ✅ Browse verification shows game works
- ✅ No console errors
- ✅ New features work as expected
- ✅ No regressions in existing features

## Failure Handling

If verification fails:
1. STOP the release process
2. Document issues found
3. Fix issues in code
4. Re-run verification
5. Only proceed when all checks pass

## Example Invocation

```
User: "ship the near-miss feature"
→ Invoke /release-verification
→ Run /qa on production URL
→ Run /browse to verify
→ If passes, proceed with /ship
→ If fails, stop and report issues
```

## Integration with /ship Skill

The `/ship` skill should automatically invoke `/release-verification` before completing. If verification fails, /ship should abort with clear message about what failed.

## Notes

- Never skip verification due to time pressure
- A broken production release is worse than a delayed release
- Screenshots are required as evidence
- Console errors are blocking issues
- Performance regressions are blocking issues
