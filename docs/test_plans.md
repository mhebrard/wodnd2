# Test Plans

## Navigation & Campaign Feature Test

**Objective**: Verify the navigation structure, campaign listing, dynamic theming, and scenario rendering.

### Steps

1.  **Home Page Access**
    -   Go to `http://localhost:3000`
    -   **Verify**: Navbar displays "Home", "Rules", "Campaigns", "Characters" in that order.

2.  **Campaign Listing**
    -   Click on "Campaigns" in the Navbar.
    -   **Verify**: "The Lost Mines" and "Demon Hunter" cards are displayed.
    -   **Verify**: Each card displays its specific theme colors (borders, icons).

3.  **Demon Hunter Campaign (Purple/Blue Theme)**
    -   Click on the "Demon Hunter" card.
    -   **Verify**: Page title is "Demon Hunter".
    -   **Verify**: Theme colors are Purple (Primary) and Blue (Secondary).
    -   **Verify**: Scenarios "The Awakening" and "The Subway Hunt" are listed.

4.  **Scenario Rendering**
    -   Click on "The Awakening".
    -   **Verify**: Page title is "The Awakening".
    -   **Verify**: Content renders correctly (text, images).
    -   **Verify**: Theme colors persist (Purple/Blue).

5.  **Navigation & Breadcrumbs**
    -   Click the "Demon Hunter" breadcrumb link to go back to the campaign detail.
    -   Click "Back to Campaigns" to return to the main list.

6.  **The Lost Mines Campaign (Amber/Red Theme)**
    -   Click on "The Lost Mines".
    -   **Verify**: Page title is "The Lost Mines".
    -   **Verify**: Theme colors are Amber (Primary) and Red (Secondary).
    -   **Verify**: "Chapter 1: The Gathering" is listed.
    -   Click on "Chapter 1: The Gathering".
    -   **Verify**: Content renders correctly.

7.  **Pagination & Ordering Test**
    -   **Rules**:
        -   Go to `/rules/core`.
        -   **Verify**: "Next Rule" link points to "Character Sheet" (Order 2).
        -   Click "Next Rule".
        -   **Verify**: "Previous Rule" link points to "Core Rules" (Order 1).
    -   **Scenarios**:
        -   Go to `/campaigns/demon-hunter/scenario-1`.
        -   **Verify**: "Next Chapter" link points to "The Subway Hunt" (Order 2).
        -   Click "Next Chapter".
        -   **Verify**: "Previous Chapter" link points to "The Awakening" (Order 1).

8.  **Dynamic Landing Page & Character Theming**
    -   **Landing Page**:
        -   Go to `http://localhost:3000`.
        -   **Verify**: Hero title uses neutral colors (Slate-200/500).
        -   **Verify**: "Latest Scenario" card displays campaign name (e.g., "Demon Hunter") in top-left tag.
        -   **Verify**: "New Challenger" card displays campaign name (e.g., "The Lost Mines") in top-left tag.
        -   **Verify**: Cards use correct campaign theme colors.
    -   **Characters Page**:
        -   Go to `http://localhost:3000/characters`.
        -   **Verify**: Character cards display Campaign Name in top-left styled tag.
        -   **Verify**: Level is displayed in top-right.
        -   **Verify**: Each card uses its campaign's specific theme colors.
