import CampaignHero from "@/components/hero/campaignHero";
import { render, screen } from "@testing-library/react";
import { props } from "../../../__tests__/data/homepageProps";
import { imageURL } from "@/utils/utils";
describe("Campaign Hero", () => {
  it("renders the SkeletonLoader component instead of the Campaign Hero", () => {
    (global as any).fetch = jest.fn(() =>
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve({}),
      })
    ) as jest.Mock;

    const { container } = render(<CampaignHero imageID="5273165" />);

    expect(container.classList.contains("chakra-skeleton"));
  });

  // it("renders the Campaign Hero", () => {
  //   (global as any).fetch = jest.fn(() =>
  //     Promise.resolve({
  //       status: 200,
  //       json: () =>
  //         Promise.resolve({
  //           featuredItem: {
  //             imageID: "5273165",
  //             imageSrc: imageURL("5273165"),
  //             uuid: "3a2cced0-12ca-0133-7a6d-58d385a7bbd0",
  //             title:
  //               "Latona Giving Birth to Apollo and Diana on the Island of Delos",
  //             href: `https://qa-digitalcollections.nypl.org/items/3a2cced0-12ca-0133-7a6d-58d385a7bbd0`,
  //           },
  //           numberOfDigitizedItems: "863,848",
  //         }),
  //     })
  //   ) as jest.Mock;
  //   render(<CampaignHero imageID="5273165" />);

  //   expect(screen.getByRole("heading")).toHaveTextContent(
  //     "Explore 863,848 items digitized from The New York Public Library's collections."
  //   );
  // });
});
