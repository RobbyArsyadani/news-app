import { render, screen } from "@testing-library/react";
import ArticleList from "../ArticleList";
import { BrowserRouter } from "react-router";
import type { Article } from "../../types/article";

const mockArticles: Article[] = [
  {
    title: "Judul 1",
    description: "Deskripsi 1",
    url: "https://example.com/1",
    urlToImage: "https://example.com/image1.jpg",
    publishedAt: "2023-01-01T00:00:00Z",
    content: "Konten 1",
    source: { name: "Sumber 1" },
  },
  {
    title: "Judul 2",
    description: "Deskripsi 2",
    url: "https://example.com/2",
    urlToImage: "https://example.com/image2.jpg",
    publishedAt: "2023-01-02T00:00:00Z",
    content: "Konten 2",
    source: { name: "Sumber 2" },
  },
];

describe("ArticleList", () => {
  it("menampilkan semua artikel", () => {
    render(
      <BrowserRouter>
        <ArticleList articles={mockArticles} />
      </BrowserRouter>
    );

    expect(screen.getByText("Judul 1")).toBeInTheDocument();
    expect(screen.getByText("Judul 2")).toBeInTheDocument();
  });
});

