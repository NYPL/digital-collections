"use client";
import React from "react";
import {
  Card,
  CardHeading,
  CardContent,
  StatusBadge,
  TagSet,
  Flex,
  Text,
  Box,
  Tooltip,
} from "@nypl/design-system-react-components";
import SearchCardType, {
  SearchResultRecordType,
  SearchResultHighlightType,
} from "@/src/types/SearchCardType";
import { TRUNCATED_SEARCH_CARD_LENGTH } from "@/src/config/constants";
import parse from "html-react-parser";

export interface SearchCardProps {
  result: SearchCardType;
  keywords: string;
  isLargerThanLargeTablet: boolean;
}

const onSiteMaterialBadge = (recordType: SearchResultRecordType) => {
  return (
    <StatusBadge sx={{ margin: "0p" }} type="informative">
      {recordType === "Item"
        ? "Available on-site only"
        : "Contains on-site only materials"}
    </StatusBadge>
  );
};

// TODO: update recordType
const contentTypeTag = (result: SearchCardType) => {
  const displayLabel =
    result.recordType === "Item"
      ? result.contentType === "Image" && result.containsMultipleCaptures
        ? "Multiple images"
        : result.contentType
        ? result.contentType
        : "nullContentType"
      : result.recordType
      ? result.recordType
      : "nullRecordType";

  return (
    <TagSet
      tagSetData={[
        { id: `type-${result.uuid}`, label: displayLabel ? displayLabel : "" },
      ]}
      type="filter"
      sx={{ margin: 0 }}
    />
  );
};

const getHighlightText = (highlights: SearchResultHighlightType) => {
  console.log("getHighlightText: ", highlights);
  return highlights?.map((highlight, index) => {
    console.log("highlight is: ", highlight);
    // return highlightedText({
    //   highlight: highlight,
    //   keyword: keywords,
    // })
    return (
      <>
        <Box noOfLines={2}>
          <Text
            as="span"
            sx={{
              fontWeight: "400",
              margin: 0,
            }}
          >
            {highlight.field}:{parse(highlights.text)}
          </Text>
          <span key={index}>{parse(highlights.text)}</span>
        </Box>
      </>
    );
  });
};

const highlightedText = ({ highlight, keyword }) => {
  const words = highlight.text.split(" ");
  const keywords = keyword.split(" ");

  return (
    <Box noOfLines={2}>
      {words.length > 0 && words[0] !== "" ? (
        <Text
          as="span"
          sx={{
            fontWeight: "400",
            margin: 0,
          }}
        >
          {highlight.field}:{" "}
        </Text>
      ) : (
        <></>
      )}

      {words.map((word: string, index: number) => {
        const isKeyword = keywords.some(
          (keyword: string) => keyword.toLowerCase() === word.toLowerCase()
        );

        return (
          <span key={index}>
            {isKeyword ? (
              <Text
                sx={{
                  // TODO: Replace with design token.
                  backgroundColor: "rgba(249, 224, 142, 0.70)",
                  margin: 0,
                  display: "inline",
                  // dangerouslySetInnerHTML={{ __html: `${word}`}}
                }}
              >
                {word}
              </Text>
            ) : (
              parse(word)
              // word
            )}
            {index < words.length - 1 ? " " : ""}
          </span>
        );
      })}
    </Box>
  );
};

export const SearchCard = ({
  result,
  keywords,
  isLargerThanLargeTablet,
}: SearchCardProps) => {
  console.log("result.highlights is: ", result.highlights);
  const truncatedTitle = result.title.length > TRUNCATED_SEARCH_CARD_LENGTH;
  const card = (
    <Card
      id={result.uuid}
      imageProps={{
        alt: "",
        aspectRatio: "sixteenByNine",
        id: result.imageID
          ? `image-${result.imageID}`
          : `no-image-${result.uuid}`,
        isAtEnd: false,
        isLazy: true,
        size: "default",
        src: result.imageURL,
      }}
      mainActionLink={result.url}
      layout="row"
      // Card width 225 and content width 720
      maxWidth="945px"
    >
      <CardHeading
        level="h3"
        size="heading5"
        marginBottom="xxs"
        noOfLines={3}
        sx={{
          ":focus-within": {
            outline: "2px solid var(--nypl-colors-ui-link-primary)",
            "> a": {
              outline: "none",
            },
          },
        }}
      >
        {result.title}
      </CardHeading>
      <CardContent>
        <Flex flexDir="column" gap="xs">
          {result.containsOnSiteMaterial &&
            onSiteMaterialBadge(result.recordType)}
          {/* {console.log("result is: ", result)} */}
          {console.log("result.highlights is: ", result.highlights)}
          {console.log(
            "result.highlights.length is: ",
            result.highlights.length
          )}

          {console.log("result.highlights[0] is: ", result.highlights[0])}
          {keywords?.length > 0 &&
            // console.log("result.highlights in keywords?.length > 0 case  is: ", result.highlights) // returns correct data
            getHighlightText(result.hightlights)}

          {/* {keywords?.length > 0 &&
            highlightedText({
              highlight: result.highlights[0],
              keyword: keywords,
            })} */}
          {contentTypeTag(result)}
        </Flex>
      </CardContent>
    </Card>
  );

  const cardWithTooltip =
    isLargerThanLargeTablet && truncatedTitle ? (
      <Tooltip content={result.title}>{card}</Tooltip>
    ) : (
      card
    );

  return cardWithTooltip;
};

export default SearchCard;
