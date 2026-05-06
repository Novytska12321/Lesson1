# Skill: GitHub Task Management (MCP)

## Description
This skill enables the AI Agent to autonomously manage and execute GitHub Issues using the Model Context Protocol (MCP) toolset.

## Triggers
- When the user mentions an issue number with a hash (e.g., "#15", "task #7", "issue 1").
- When the user asks for a task list, "backlog", or "what to do next".

## Execution Workflow
1. **Data Retrieval**:
   - Do not ask the user for issue details. Immediately use the `get_issue` tool.
   - Infer the `owner` (username) and `repo` (repository name) from the current project's git context.
2. **Analysis & Implementation**:
   - Thoroughly read the issue description and existing comments.
   - Locate relevant source files within the codebase.
   - Implement the requested changes or bug fixes directly.
3. **Communication**:
   - Once the task is implemented, use the `create_issue_comment` tool to provide a summary of your changes (e.g., "Implemented validation in `auth.ts`").
   - Ask the user: "The task is complete. Would you like me to close this issue on GitHub?"
4. **Finalization**:
   - If the user confirms, use the `update_issue` tool to set the state to `closed`.

## Core MCP Tools Reference
- `list_issues`: To list tasks in the repository.
- `get_issue`: To fetch specific details and requirements of a task.
- `update_issue`: To modify labels, assignees, or close the task.
- `create_issue_comment`: To post progress updates or technical notes.

## Constraints
- Only operate within the context of the current repository unless specified otherwise.
- If an MCP authentication error occurs, advise the user to check their `~/.cursor/mcp.json` file.
