import { render, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

jest.mock("./hooks/useArticles", () => ({
  __esModule: true,
  default: () => ({
    articlesData: [
      {
        source: { id: "wired", name: "Wired" },
        author: "Kate O'Flaherty",
        title:
          "Apple and Google Just Patched Their First Zero-Day Flaws of the Year",
        description:
          "Plus: Google fixes dozens of Android bugs, Microsoft rolls out nearly 50 patches, Mozilla squashes 15 Firefox flaws, and more.",
        url: "https://www.wired.com/story/apple-google-zero-day-flaws-critical-update-january-2024/",
        urlToImage:
          "https://media.wired.com/photos/65b97941d0ba59a59253f238/191:100/w_1280,c_limit/013024-security-critical-update-jan-01.jpg",
        publishedAt: "2024-01-31T12:00:00Z",
        content:
          "Later in January, Google released Chrome 121 to the stable channel, fixing 17 security issues, three of which are rated as having a high impact. These include CVE-2024-0807, a use-after-free flaw in … [+3583 chars]",
      },
      // Add more mock data as needed
    ],
  }),
}));

test("renders App component with articles data", async () => {
  render(<App />);

  await waitFor(() => {
    expect(screen.getByTestId("article-card")).toBeInTheDocument();

    expect(screen.getAllByTestId("article")).toHaveLength(1);
  });
});
