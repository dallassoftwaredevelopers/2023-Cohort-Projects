import EventCard from "./EventCard";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

const imageUrl =
  "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";

describe("Event Card", () => {
  it("renders Event Card", () => {
    render(
      <EventCard
        eventId="1"
        userId="1"
        title="Event 1"
        date="2023-07-30"
        time="15:00"
        description="test description"
        price={10}
        location="111 Park Vista Blvd, Fort Worth, TX, 76244"
        image_url={imageUrl}
      />
    );
    const eventHeading = screen.getByRole("heading", { name: "Event 1" });
    expect(eventHeading).toBeInTheDocument();
  });
});
