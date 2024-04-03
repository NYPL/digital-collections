import {
  Text,
  Link,
  List,
  Heading,
  Accordion,
  Box,
} from "@nypl/design-system-react-components";

const aboutData = [
  {
    heading: (
      <Heading
        sx={{ marginTop: "xxl" }}
        level="h1"
        size="heading1"
        text="About NYPL Digital Collections"
      />
    ),
    body: (
      <Text sx={{ marginBottom: "xxl", marginTop: "s" }}>
        The New York Public Library (NYPL) Digital Collections platform is the
        primary portal for engaging with our digitized collections and their
        descriptions, over 922,495 items and counting. While that is a small
        fraction of the Library&apos;s overall holdings, it is representative of
        the diversity of our vast collections—from books to videos, maps to
        manuscripts, illustrations to photos, and more.
      </Text>
    ),
  },
  {
    heading: <Heading level="h2" size="heading4" text="How to" />,
    body: (
      <Text sx={{ marginBottom: "xxl", marginTop: "s" }}>
        Discover and download NYPL items spanning research subjects and
        historical eras.
      </Text>
    ),
  },
  // TODO: Replace all DC links to be self-referential
  {
    heading: <Heading level="h2" size="heading4" text="Find items" />,
    body: (
      <Box sx={{ marginBottom: "xxl" }}>
        <Text sx={{ marginTop: "s" }}>
          {" "}
          Looking for something? Start with a{" "}
          <Link href="https://digitalcollections.nypl.org">search</Link> or
          begin browsing by{" "}
          <Link href="https://digitalcollections.nypl.org/search/index?utf8=%E2%9C%93&keywords=">
            item
          </Link>
          ,{" "}
          <Link href="https://digitalcollections.nypl.org/collections">
            collection
          </Link>
          , or{" "}
          <Link href="https://digitalcollections.nypl.org/divisions">
            division
          </Link>
          . For a more extensive user guide and primer, see{" "}
          <Link href="https://www.nypl.org/blog/2015/01/21/digital-collections-platform-intro">
            &quot;NYPL Digital Collections Platform: An Introduction&quot;
          </Link>
          .
        </Text>
        <Text>
          {" "}
          Looking for images you can reuse freely? You can{" "}
          <Link href="https://digitalcollections.nypl.org/search/index?filters%5Brights%5D=pd&keywords=">
            browse just the items that have no known U.S. copyright restrictions
          </Link>
          . When searching, select the Search only public domain items option to
          filter your results to items with no known U.S. copyright
          restrictions. On the Browse page, you can easily turn this filter on
          and off with the Show Only Public Domain button in the upper left
          corner of the page.
        </Text>
        <video style={{ width: "100%", height: "100%" }} controls>
          <source
            src="https://digitalcollections-prod.s3.amazonaws.com/assets/pd_browse-f8b759aeef3ef78c396e2e27b5498528.mp4"
            type="video/mp4"
          />
        </video>
      </Box>
    ),
  },
  {
    heading: <Heading level="h2" size="heading4" text="Download items" />,
    body: (
      <Box sx={{ marginBottom: "xxl" }}>
        <Text sx={{ marginTop: "s" }}>
          To download, navigate to the Download Options section under each item.
          Simply click on your preferred file size and check your browser&apos;s
          download folder for the image.{" "}
        </Text>
        <video style={{ width: "100%", height: "100%" }} controls>
          <source
            src="https://digitalcollections-prod.s3.amazonaws.com/assets/pd_download-f4513d03a49cd6a20013cd7a6b73e8a1.mp4"
            type="video/mp4"
          />
        </video>
      </Box>
    ),
  },
  {
    heading: <Heading level="h2" size="heading4" text="Items & permissions" />,
    body: (
      <Text sx={{ marginBottom: "xxl", marginTop: "s" }}>
        {" "}
        We actively review and label materials in Digital Collections with
        statements that indicate how you may reuse items, and what sort of
        permission, if any, you need to do so.
      </Text>
    ),
  },
  {
    heading: (
      <Heading
        level="h2"
        size="heading4"
        text="Public Domain / no known U.S. copyright restrictions"
      />
    ),
    body: (
      <>
        <Text sx={{ marginTop: "s" }}>
          To date, there are{" "}
          <Link href="https://digitalcollections.nypl.org/search/index?filters%5Brights%5D=pd&keywords=">
            296,687 public domain items
          </Link>{" "}
          in Digital Collections, and that number grows every day. You do not
          need NYPL&apos;s permission to use these items and there are no known
          restrictions on their use. However, these items may be subject to
          rights of privacy, publicity, or other restrictions depending on the
          format of the materials and what the items depict. It is your
          responsibility to respect these rights.{" "}
        </Text>
        <Text>
          Though it is not required, please credit public domain items with,
          &quot;From The New York Public Library,&quot; and provide a link back
          to each item on the Digital Collections website. Doing so helps us
          track how our collection is used, as well as justify releasing even
          more content in the future.{" "}
        </Text>
        <Text sx={{ marginBottom: "xxl" }}>
          For more information about NYPL&apos;s public domain materials and
          projects, see &quot;
          <Link href="https://www.nypl.org/blog/2016/01/05/share-public-domain-collections">
            Free for All: NYPL Enhances Public Domain Collections for Sharing
            and Reuse.
          </Link>
          &quot;
        </Text>
      </>
    ),
  },
  {
    heading: (
      <Heading
        level="h2"
        size="heading4"
        text="Is there a difference between 'Public Domain' & 'no known
        U.S. copyright restrictions'?"
      />
    ),
    body: (
      <>
        <Text sx={{ marginTop: "s" }}>
          Unless you are a lawyer and/or outside of the United States, there
          isn&apos;t really a difference. The term &quot;public domain&quot; is
          not consistently used largely because it means different things in
          different places around the world. And as a U.S.-based library, NYPL
          limits the legal statements it makes about materials to the
          jurisdictions in which it operates.{" "}
        </Text>
        <Text sx={{ marginBottom: "xxl" }}>
          But what does that really mean? When we describe the rights allowances
          or restrictions for a specific item in our collections, we use
          &quot;no known U.S. copyright restrictions.&quot; However, when we are
          speaking more generally—on our websites, blog posts, and in other
          modes of communication with users—we often use &quot;public
          domain,&quot; by which we mean the aggregate collection of items we
          offer to the public without copyright restrictions on reuse.
        </Text>
      </>
    ),
  },
  {
    heading: (
      <Heading
        level="h2"
        size="heading4"
        text="Copyright held or managed by The New York Public Library"
      />
    ),
    body: (
      <Text sx={{ marginBottom: "xxl", marginTop: "s" }}>
        NYPL holds or manages copyright for some items. If you need information
        about reusing these items, please contact{" "}
        <Link href="https://www.nypl.org/help/get-what-you-need/photographic-services/obtaining-images">
          Permissions and Reproductions
        </Link>
        .
      </Text>
    ),
  },
  {
    heading: (
      <Heading level="h2" size="heading4" text="Copyright status undefined" />
    ),
    body: (
      <>
        <Text sx={{ marginTop: "s" }}>
          Not all Digital Collections items have been formally reviewed for
          copyright status. For unmarked items, we do not grant or deny
          permission for reuse. You may want to look into resources that can
          help you determine on your own whether the items are in the public
          domain—and therefore free of copyright restrictions—including &quot;
          <Link href="https://www.copyright.gov/circs/circ22.pdf">
            How to Investigate the Copyright Status of a Work [PDF]
          </Link>
          &quot; from the United States Copyright Office and the{" "}
          <Link href="https://guides.library.cornell.edu/copyright">
            public domain determination chart
          </Link>{" "}
          made available by the Cornell Copyright Information Center.{" "}
        </Text>
        <Text>
          If materials are not in the public domain, it is your responsibility
          to determine and satisfy copyright or other use restrictions when
          publishing or otherwise using the materials. You are solely
          responsible for determining whether your use of any digital object
          requires the permission of any other person or entity, or determining
          whether you can exercise fair use rights. You can learn more about
          fair use on{" "}
          <Link href="https://en.wikipedia.org/wiki/Fair_use">Wikipedia</Link>,
          or review{" "}
          <Link href="https://copyright.columbia.edu/basics/fair-use.html">
            fair use basics
          </Link>{" "}
          and a{" "}
          <Link href="https://copyright.columbia.edu/basics/fair-use/fair-use-checklist.html">
            fair use checklist
          </Link>{" "}
          from Columbia University&apos;s Copyright Advisory Office.{" "}
        </Text>
        <Text sx={{ marginBottom: "xxl" }}>
          Meanwhile, every day we review and update the copyright status of
          Digital Collections items. At this time, we are not able to take
          requests about which items are at the top of our queue for review. If
          you need more information about reusing items in Digital Collections,
          please contact{" "}
          <Link href="https://www.nypl.org/help/get-what-you-need/photographic-services/obtaining-images">
            Permissions and Reproductions
          </Link>
          .
        </Text>
      </>
    ),
  },
  {
    heading: (
      <Heading
        level="h2"
        size="heading4"
        text="Audio and Moving Image Materials"
      />
    ),
    body: (
      <Text sx={{ marginBottom: "xxl", marginTop: "s" }}>
        For more information about the Library&apos;s Audio and Moving Image
        materials, please see our{" "}
        <Link href="https://www.nypl.org/help/get-what-you-need/audio-video-files">
          Audio and Moving Image Preservation and Access Initiative.
        </Link>
      </Text>
    ),
  },
  {
    heading: <Heading level="h2" size="heading4" text="Data" />,
    body: (
      <Text sx={{ marginBottom: "xxl", marginTop: "s" }}>
        Digital Collections is at the core of NYPL&apos;s efforts to enable new
        uses of items, collections, and data.
      </Text>
    ),
  },
  {
    heading: <Heading level="h2" size="heading4" text="Linked projects" />,
    body: (
      <>
        <Text sx={{ marginTop: "s" }}>
          Whenever possible, we link items in Digital Collections to other
          places where you may be able to find out more about them. Some of the
          places we link to include the{" "}
          <Link href="https://www.nypl.org/research/research-catalog?originalUrl=https%3A%2F%2Fcatalog.nypl.org%2F">
            NYPL Catalog
          </Link>
          , <Link href="https://archives.nypl.org/">NYPL Archives Portal</Link>,
          and{" "}
          <Link href="https://dp.la/">Digital Public Library of America</Link>.
        </Text>
        <Text sx={{ marginBottom: "xxl" }}>
          Meanwhile, we also extract data from historical sources and materials,
          and have incorporated links to those data extraction experiments
          wherever possible. Some of those projects include{" "}
          <Link href="https://wayback.archive-it.org/13216/20210520171637/http://maps.nypl.org/warper/">
            Map Warper
          </Link>
          ,{" "}
          <Link href="http://buildinginspector.nypl.org/">
            Building Inspector
          </Link>
          , <Link href="https://stereo.nypl.org/">Stereogranimator</Link>, and{" "}
          <Link href="https://menus.nypl.org/">What&apos;s on the Menu</Link>.
        </Text>
      </>
    ),
  },
  {
    heading: <Heading level="h2" size="heading4" text="Available metadata" />,
    body: (
      <>
        <Text sx={{ marginTop: "s" }}>
          NYPL metadata published via the sources below is released under a{" "}
          <Link href="https://creativecommons.org/publicdomain/zero/1.0/">
            Creative Commons CC0 1.0 Universal Public Domain Dedication
          </Link>
          .
        </Text>
        <List
          type="ul"
          sx={{
            paddingLeft: "s",
            "li::before": {
              color: "ui.border.hover",
            },
          }}
        >
          <li>
            Bulk metadata download: In addition to the full metadata output
            available via API, we&apos;ve added simplified metadata for the{" "}
            <Link href="https://github.com/NYPL-publicdomain/data-and-utilities">
              public domain portion of Digital Collections on GitHub
            </Link>
            , available in CSV and JSON formats.
          </li>
          <li>
            Metadata API: All Digital Collections metadata is available via{" "}
            <Link href="https://api.repo.nypl.org/">
              The New York Public Library Digital Collections API
            </Link>
            . This data is available in XML and JSON.
          </li>
        </List>
        <Text sx={{ marginBottom: "xxl" }}>
          Digital Collections metadata records are also available for bulk
          download via the{" "}
          <Link href="https://pro.dp.la/developers/bulk-download">
            Digital Public Library of America (DPLA)
          </Link>
          . This includes all publicly available record descriptions for items
          on this site. The metadata standard we use is{" "}
          <Link href="https://en.wikipedia.org/wiki/Metadata_Object_Description_Schema">
            MODS
          </Link>
          , and the bulk data offered through DPLA is stored in JSON. The bulk
          download data is refreshed roughly every other month.
        </Text>
      </>
    ),
  },
  {
    heading: <Heading level="h2" size="heading4" text="Platform" />,
    body: (
      <Text sx={{ marginBottom: "xxl", marginTop: "s" }}>
        NYPL uses Fedora Commons software for our repository, while our
        bibliographic, technical, and rights metadata is managed by a custom
        Ruby on Rails app we call—appropriately enough—the Metadata Management
        System. The Digital Collections platform itself is also a Rails
        application, but uses a lot of JavaScript (including libraries such as
        the{" "}
        <Link href="https://openlibrary.org/dev/docs/bookreader">
          Internet Archive&apos;s BookReader
        </Link>
        ).
      </Text>
    ),
  },
  {
    heading: <Heading level="h2" size="heading4" text="Accessibility" />,
    body: (
      <Text sx={{ marginBottom: "xxl", marginTop: "s" }}>
        To learn more about the accessibility of NYPL websites and mobile
        applications, see our{" "}
        <Link href="https://www.nypl.org/policies/web-mobile-accessibility">
          Web & Mobile Accessibility Policy.
        </Link>
      </Text>
    ),
  },
  {
    heading: (
      <Heading
        sx={{ marginTop: "xxl" }}
        size="heading2"
        level="h1"
        text="NYPL's statement on potentially harmful content"
      />
    ),
    body: (
      <Text sx={{ marginTop: "s", marginBottom: "l" }}>
        The Digital Collections platform contains some content that may be
        harmful or difficult to view. We collect materials from many cultures
        and time periods to preserve and make available the historical record.
        As a result, some of the materials presented here may reflect outdated,
        biased, offensive, and possibly violent views and opinions due to
        pervasive systemic intolerance. In addition, some Library divisions
        collect and preserve materials relating to violent or graphic events
        which are preserved for their historical significance.
      </Text>
    ),
  },
  {
    heading: (
      <Heading level="h2" size="heading4" text="Frequently asked questions" />
    ),
    body: (
      <Accordion
        sx={{ marginBottom: "xxl", marginTop: "s" }}
        accordionData={[
          {
            accordionType: "default",
            label:
              "What harmful or difficult content may be found in NYPL's Digital Collections?",
            panel: (
              <>
                <Text sx={{ marginBottom: "xs" }}>Some items may: </Text>
                <List
                  type="ul"
                  sx={{
                    paddingLeft: "s",
                    "li::before": {
                      color: "ui.border.hover",
                    },
                  }}
                >
                  <li>
                    reflect white supremacist and American imperialist
                    ideologies, which include racist, sexist,
                    misogynistic/misogynoir, and xenophobic opinions and
                    attitudes.
                  </li>
                  <li>
                    be discriminatory towards or exclude diverse views on
                    sexuality, gender, ableism, religion, and more.{" "}
                  </li>
                  <li>
                    include graphic content of historical events such as violent
                    death, medical procedures, crime, post mortem photography,
                    wars/terrorist acts, natural disasters and more.
                  </li>
                  <li>
                    demonstrate bias and exclusion in institutional collecting
                    and digitization policies.
                  </li>
                </List>
              </>
            ),
          },
          {
            accordionType: "default",
            label: "Why does NYPL make potentially harmful content available?",
            panel: (
              <Text>
                We collect, preserve, and provide these materials to our patrons
                freely and openly and without censorship. Our collections do
                include depictions and records of people experiencing trauma and
                harm. NYPL seeks to balance the preservation of this history
                with sensitivity to how these materials are presented to and
                perceived by users.
              </Text>
            ),
          },
          {
            accordionType: "default",
            label:
              "How is this material described, and why are some of the terms used in the descriptions harmful?",
            panel: (
              <List
                type="ul"
                sx={{
                  paddingLeft: "s",
                  "li::before": {
                    color: "ui.border.hover",
                  },
                }}
              >
                <li>
                  Librarians, cataloguers, and archivists choose what language
                  to use when describing materials. Some of these descriptions
                  were written many years ago, using language that was accepted
                  at the time.{" "}
                </li>
                <li>
                  Librarians, cataloguers, and archivists often re-use language
                  provided by creators or former owners of the material. This
                  can provide important context, but can also reflect biases and
                  prejudices.{" "}
                </li>
                <li>
                  Librarians, cataloguers, and archivists often use a
                  standardized set of terms, such as the Library of Congress
                  Subject Headings, to describe materials. Some of these terms
                  are outdated, offensive, or insensitive.
                </li>
                <li>
                  Communities with less access to and privilege within libraries
                  and archives have had less control over how they are
                  represented and described.
                </li>
                <li>
                  NYPL is committed to working with its staff and patrons to
                  assess and update descriptions that are harmful.
                </li>
              </List>
            ),
          },
          {
            accordionType: "default",
            label:
              "How are librarians, cataloguers, and archivists working to address this problem and help users better understand such content?",
            panel: (
              <>
                <Text sx={{ marginBottom: "xs" }}>Examples include: </Text>
                <List
                  type="ul"
                  sx={{
                    paddingLeft: "s",
                    "li::before": {
                      color: "ui.border.hover",
                    },
                  }}
                >
                  <li>
                    Working directly with misrepresented and underrepresented
                    communities to improve the ways they are represented.
                  </li>
                  <li>
                    Informing users about the presence and origin of harmful
                    content and providing context.
                  </li>
                  <li>
                    Revising descriptions and standardized sets of descriptive
                    terms, such as Library of Congress Subject Headings,
                    supplementing description with more respectful terms, or
                    creating new standardized terms to describe materials.
                  </li>
                  <li>
                    Researching the problem, listening to patrons, experimenting
                    with solutions, and sharing our findings with each other.
                  </li>
                  <li>
                    Evaluating existing collecting and digitization policies for
                    exclusionary practices and institutional biases that
                    prioritize one culture and/or group over another.{" "}
                  </li>
                  <li>
                    Making an institutional commitment to DEIA (diversity,
                    equity, inclusion, and accessibility).
                  </li>
                </List>
              </>
            ),
          },
          {
            accordionType: "default",
            label: "How can I report harmful content?",
            panel: (
              <>
                <Text>
                  Please note: this process applies only to language found
                  within metadata descriptions of items on Digital Collections,
                  not to the content of the original material. NYPL does not
                  alter the content of original research material.{" "}
                </Text>
                <Text>
                  You can help us by reporting potentially harmful language that
                  you see in item descriptions in Digital Collections.
                </Text>
                <Text sx={{ marginBottom: "xs" }}>
                  Click the feedback form button at the bottom of this page and
                  include:
                </Text>
                <Text>
                  <List
                    type="ul"
                    sx={{
                      paddingLeft: "s",
                      "li::before": {
                        color: "ui.border.hover",
                      },
                    }}
                  >
                    <li>a link to the item on Digital Collections</li>
                    <li>
                      the specific language you feel is harmful and the metadata
                      field name where it can be found (title, topic, genre,
                      etc.)
                    </li>
                    <li>a suggested alternative if you have one</li>
                  </List>
                  NYPL will determine whether or not we will change or remove
                  terms from item descriptions. We will weigh potential harm
                  against considerations such as input from affected
                  communities, accurate preservation of the historical record,
                  professional best practices, and allocation of staff
                  resources.{" "}
                </Text>
                <Text>
                  Adapted from the{" "}
                  <Link href="https://dp.la/about/harmful-language-statement">
                    Digital Public Library of America&apos;s Statement on
                    Potentially Harmful Content
                  </Link>
                  .
                </Text>
              </>
            ),
          },
        ]}
      />
    ),
  },
  {
    heading: <Heading level="h2" size="heading4" text="Contact" />,
    body: (
      <Text sx={{ marginBottom: "xxl", marginTop: "s" }}>
        If you have comments, suggestions, or questions, please email{" "}
        <Link href="mailto:digitalcollections@nypl.org">
          digitalcollections@nypl.org
        </Link>
        .
      </Text>
    ),
  },
  {
    heading: <Heading level="h2" size="heading4" text="Acknowledgements" />,
    body: (
      <Text sx={{ marginBottom: "xxl", marginTop: "s" }}>
        {" "}
        The New York Public Library Digital Collections was made possible by
        leadership support from The Robert W. Wilson Charitable Trust. Other
        major funding has been provided by The Atlantic Philanthropies, with
        additional support from the Stavros Niarchos Foundation, Time Warner
        Inc., the Miriam and Ira D. Wallach Foundation, The Polonsky Foundation,
        The Brown Foundation, Inc., of Houston, Mr. and Mrs. Alberto Vitale, The
        Prospect Hill Foundation, and the Toshiba International Foundation.
      </Text>
    ),
  },
];

export default aboutData;
