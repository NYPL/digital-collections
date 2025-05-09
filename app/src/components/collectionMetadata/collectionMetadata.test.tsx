import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CollectionMetadata from "./collectionMetadata";
import { CollectionModel } from "@/src/models/collection";

const mockData = {
  title: "Sample Collection",
  uuid: "123-uuid",
  abstract: "This is a sample abstract.",
  accessCondition: ["Open access"],
  archivesCollectionID: "12345",
  bNumber: "b1234567",
  contentNote: ["Content note 1", "Content note 2"],
  dateCaptured: "2022",
  dateCreated: "2020",
  dateIssued: "2021",
  dateOther: "",
  displayNames: ["Sample Name"],
  divisionSlug: "research-division",
  divisionTitle: "Research Division",
  edition: "2nd Edition",
  extent: "200 pages",
  form: "Book",
  genres: ["Fiction"],
  languages: ["English"],
  names: [{ name: "John Doe", roles: ["cre", "creator"] }],
  place: "New York",
  shelfLocator: "QA123",
  tableOfContents: ["Chapter 1", "Chapter 2"],
  topics: ["Science (Topic)", "Mathematics (Name)"],
  typeOfResource: ["Text"],
  yearBegin: 2020,
  yearEnd: 2022,
} as CollectionModel;

describe("CollectionMetadata component", () => {
  it("renders collection data", () => {
    render(<CollectionMetadata data={mockData} />);

    expect(screen.getByText("Collection data")).toBeInTheDocument();
    expect(
      screen.getByText("This collection is also available:")
    ).toBeInTheDocument();
    expect(screen.getByText("This is a sample abstract.")).toBeInTheDocument();
    expect(screen.getByText("Date created:"));
    expect(screen.getByText("Research Division")).toBeInTheDocument();
  });

  it("shows more collection data on expand", () => {
    render(<CollectionMetadata data={mockData} />);

    const toggleButton = screen.getByText(/See more collection data/i);
    fireEvent.click(toggleButton);

    expect(screen.getByText("Genres")).toBeInTheDocument();
    expect(screen.getByText("Fiction")).toBeInTheDocument();
    expect(screen.getByText("Topics")).toBeInTheDocument();
    expect(screen.getByText("Science")).toBeInTheDocument();
    expect(screen.getByText("Names")).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Access condition")).toBeInTheDocument();
    expect(screen.getByText("Open access")).toBeInTheDocument();
  });

  it("toggles between expanded and collapsed states", () => {
    render(<CollectionMetadata data={mockData} />);

    const toggleButton = screen.getByText(/See more collection data/i);
    fireEvent.click(toggleButton);
    expect(screen.getByText(/See less collection data/i)).toBeInTheDocument();

    fireEvent.click(toggleButton);
    expect(screen.getByText(/See more collection data/i)).toBeInTheDocument();
  });

  it("renders names with correct formatting including role", () => {
    render(<CollectionMetadata data={mockData} />);
    const toggleButton = screen.getByText(/See more collection data/i);
    fireEvent.click(toggleButton);

    expect(screen.getByRole("link", { name: "John Doe" })).toBeInTheDocument();
    expect(screen.getByText(", creator")).toBeInTheDocument();
  });

  it("renders date links with correct search URLs", () => {
    render(<CollectionMetadata data={mockData} />);

    expect(
      screen.getByRole("link", { name: "2020" }).getAttribute("href")
    ).toBe("/search/index?filters=%5BdateStart%3D2020%5D");

    expect(
      screen.getByRole("link", { name: "2021" }).getAttribute("href")
    ).toBe("/search/index?filters=%5BdateStart%3D2021%5D");

    expect(
      screen.getByRole("link", { name: "2022" }).getAttribute("href")
    ).toBe("/search/index?filters=%5BdateStart%3D2022%5D");
  });
});
