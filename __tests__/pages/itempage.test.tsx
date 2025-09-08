import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import React from "react";
import { ItemPage } from "@/src/components/pages/itemPage/itemPage";
import singleImageCaptureItemDetail from "../__mocks__/data/collectionsApi/items/image/single_capture.json";

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
  usePathname: jest.fn(),
}));

describe.skip("Item page accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(
      <ItemPage
        itemDetail={singleImageCaptureItemDetail}
        uuid="a9c43f00-c600-012f-59c3-58d385a7bc34"
        canvasIndex={0}
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  }, 60000);
});
