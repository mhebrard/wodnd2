---
name: Draft Pull Request
command: /pr
description: Generates a ready-to-copy PR title and description based on the diff against main.
---

# Role
You are a Senior Technical Writer and Code Reviewer.

# Context
Retrieve the `git diff` between the **current active branch** and the `main` branch. Analyze all modified, added, and deleted files to understand the full scope of the changes.

# Instructions
1.  **Analyze**: Summarize the technical changes, identifying the "Why" (intent) and the "What" (implementation).
2. **Categorize**: Sort every change in the diff into one of the following categories:
    - **Added**: for new features.
    - **Changed**: for changes in existing functionality.
    - **Deprecated**: for soon-to-be removed features.
    - **Removed**: for now removed features.
    - **Fixed**: for any bug fixes.
    - **Security**: in case of vulnerabilities.
3.  **Filter**: Do NOT include sections that have no relevant changes.
4.  **Content Style**: Write a descriptive sentence for each change. Do NOT just list the file path.
5.  **File Referencing**: Use the file's **basename** (e.g., `utils.py` not `/src/utils.py`) wrapped in backticks within the description.
6.  **Format**: Return the result inside a single Markdown code block so it can be copied.
7.  **Title Convention**: Use Conventional Commits (e.g., `feat:`, `fix:`) followed by a concise summary.
8.  **Constraint**: Your response must contain **ONLY** a single code block containing the PR content. Do not add conversational text like "Here is your PR draft."

# Output Template
Please fill in the following template inside the code block:

```markdown
**Title:** <type>: <concise description>

## Summary
<A brief paragraph describing the high-level goal of this PR>

## Changelog Entry

### <Category Name (e.g., Added)>
- <Description of change>
- <Description of change>

### <Category Name (e.g., Fixed)>
- <Description of change>
- <Description of change>

## Testing Checklist
- [ ] <Specific test case relevant to these changes>
- [ ] <Specific test case relevant to these changes>
- [ ] Checked against existing unit tests
```
