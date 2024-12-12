export const mockFeaturedItemResponse = {
  headers: { status: "success", code: "200", message: "ok" },
  numResults: "1",
  capture: {
    uuid: "67b040f0-228a-0132-e62e-58d385a7b928",
    imageLinks: {
      imageLink: [
        "http://images.nypl.org/index.php?id=5164604&t=t&download=1&suffix=67b040f0-228a-0132-e62e-58d385a7b928.001",
        "http://images.nypl.org/index.php?id=5164604&t=f&download=1&suffix=67b040f0-228a-0132-e62e-58d385a7b928.001",
        "http://images.nypl.org/index.php?id=5164604&t=b&download=1&suffix=67b040f0-228a-0132-e62e-58d385a7b928.001",
        "http://images.nypl.org/index.php?id=5164604&t=r&download=1&suffix=67b040f0-228a-0132-e62e-58d385a7b928.001",
        "http://images.nypl.org/index.php?id=5164604&t=q&download=1&suffix=67b040f0-228a-0132-e62e-58d385a7b928.001",
        "http://images.nypl.org/index.php?id=5164604&t=v&download=1&suffix=67b040f0-228a-0132-e62e-58d385a7b928.001",
        "http://images.nypl.org/index.php?id=5164604&t=g&download=1&suffix=67b040f0-228a-0132-e62e-58d385a7b928.001",
        "http://images.nypl.org/index.php?id=5164604&t=w&download=1&suffix=67b040f0-228a-0132-e62e-58d385a7b928.001",
        "http://images.nypl.org/index.php?id=5164604&t=s&download=1&suffix=67b040f0-228a-0132-e62e-58d385a7b928.001",
        "http://images.nypl.org/index.php?id=5164604&t=j&download=1&suffix=67b040f0-228a-0132-e62e-58d385a7b928.001",
      ],
    },
    apiUri:
      "http://api.repo.nypl.org/api/v2/items/mods/67b040f0-228a-0132-e62e-58d385a7b928",
    typeOfResource: "still image",
    imageID: "5164604",
    sortString: "0000000001|0000000007|0000000014|0000000001",
    itemLink:
      "http://digitalcollections.nypl.org/items/67b040f0-228a-0132-e62e-58d385a7b928",
    highResLink: "https://link.nypl.org/GyZyYkQfEeSTtU9llX1nUwH",
    title: "Roadside sandwich shop. Ponchatoula, Louisiana",
    dateDigitized: "2015-05-19T15:05:21Z",
    rightsStatement:
      'The New York Public Library believes that this item is in the public domain under the laws of the United States, but did not make a determination as to its copyright status under the copyright laws of other countries. This item may not be in the public domain under the laws of other countries. Though not required, if you want to credit us as the source, please use the following statement, "From The New York Public Library," and provide a link back to the item on our Digital Collections site. Doing so helps us track how our collection is used and helps justify freely releasing even more content in the future.',
    rightsStatementURI: "http://rightsstatements.org/vocab/NoC-US/1.0/",
  },
};

export const mockItemResponse = {
  headers: {
    status: {
      $: "success",
    },
    code: {
      $: "200",
    },
    message: {
      $: "ok",
    },
  },
  mods: {
    version: "3.4",
    schemaLocation:
      "http://www.loc.gov/mods/v3 http://www.loc.gov/standards/mods/v3/mods-3-4.xsd",
    titleInfo: {
      type: "",
      authority: "",
      usage: "primary",
      supplied: "yes",
      lang: "",
      script: "",
      title: {
        $: "View of High Bridge and the Harlem River",
      },
    },
    name: {
      type: "personal",
      authority: "naf",
      valueURI: "http://id.loc.gov/authorities/names/n78047535",
      usage: "primary",
      namePart: {
        $: "Bennett, W. J. (William James), 1787-1844",
      },
      role: {
        roleTerm: [
          {
            valueURI: "http://id.loc.gov/vocabulary/relators/art",
            authority: "marcrelator",
            type: "code",
            $: "art",
          },
          {
            valueURI: "http://id.loc.gov/vocabulary/relators/art",
            authority: "marcrelator",
            type: "text",
            $: "Artist",
          },
        ],
      },
    },
    typeOfResource: {
      $: "still image",
    },
    genre: {
      authority: "lctgm",
      valueURI: "http://id.loc.gov/vocabulary/graphicMaterials/tgm003279",
      $: "Drawings",
    },
    note: [
      {
        type: "citation/reference",
        $: "Stokes 1844-E-131",
      },
      {
        type: "citation/reference",
        $: "Deák 526",
      },
    ],
    subject: [
      {
        topic: {
          authority: "lcsh",
          valueURI: "http://id.loc.gov/authorities/subjects/sh85016829",
          $: "Bridges",
        },
        geographic: [
          {
            authority: "naf",
            valueURI: "http://id.loc.gov/authorities/names/n80126293",
            $: "New York (State)",
          },
          {
            $: "New York",
          },
        ],
      },
      {
        authority: "lcsh",
        valueURI: "http://id.loc.gov/authorities/subjects/sh88003387",
        geographic: {
          authority: "lcsh",
          valueURI: "http://id.loc.gov/authorities/subjects/sh88003387",
          $: "Harlem River (N.Y.)",
        },
      },
      {
        topic: {
          authority: "lcsh",
          valueURI:
            "http://id.loc.gov/authorities/childrensSubjects/sj96005480",
          $: "Fishing",
        },
        geographic: [
          {
            authority: "naf",
            valueURI: "http://id.loc.gov/authorities/names/n80126293",
            $: "New York (State)",
          },
          {
            $: "New York",
          },
        ],
      },
    ],
    identifier: [
      {
        type: "local_hades_collection",
        displayLabel: "Hades Collection Guide ID (legacy)",
        $: "190",
      },
      {
        type: "local_hades",
        displayLabel: "Hades struc ID (legacy)",
        $: "118669",
      },
      {
        type: "uuid",
        $: "cfd3ac90-c5ed-012f-4b69-58d385a7bc34",
      },
    ],
    location: {
      physicalLocation: [
        {
          authority: "marcorg",
          type: "repository",
          $: "nn",
        },
        {
          type: "division",
          $: "The Miriam and Ira D. Wallach Division of Art, Prints and Photographs: Print Collection",
        },
        {
          type: "division_short_name",
          $: "Wallach Division: Print Collection",
        },
        {
          type: "code",
          $: "PRN",
        },
      ],
    },
    originInfo: {
      dateCreated: {
        encoding: "w3cdtf",
        keyDate: "yes",
        $: "1844",
      },
    },
    physicalDescription: [
      {
        extent: {
          $: "1 drawing ; 30.5 x 49.6 cm",
        },
      },
      {
        form: {
          authority: "lctgm",
          valueURI: "http://id.loc.gov/vocabulary/graphicMaterials/tgm011580",
          $: "Watercolors",
        },
      },
    ],
    relatedItem: {
      type: "host",
      titleInfo: {
        title: {
          $: "Individual prints, drawings, paintings and maps in the Stokes Collection.",
        },
      },
      identifier: [
        {
          type: "uuid",
          $: "0c284e10-c5ed-012f-a66d-58d385a7bc34",
        },
        {
          type: "local_hades",
          $: "607811",
        },
      ],
      relatedItem: {
        type: "host",
        titleInfo: {
          title: {
            $: "I. N. Phelps Stokes Collection of American Historical Prints",
          },
        },
        identifier: [
          {
            type: "uuid",
            $: "c901a3b0-c5ec-012f-9493-58d385a7bc34",
          },
          {
            type: "local_hades",
            $: "258154",
          },
          {
            type: "local_hades_collection",
            $: "190",
          },
        ],
      },
    },
  },
  numResults: {
    $: "1",
  },
  capture: {
    uuid: {
      $: "510d47d9-7c7c-a3d9-e040-e00a18064a99",
    },
    apiUri: {
      $: "http://api.repo.nypl.org/api/v2/items/mods/510d47d9-7c7c-a3d9-e040-e00a18064a99",
    },
    typeOfResource: {
      $: "still image",
    },
    imageID: {
      $: "54795",
    },
    sortString: {
      $: "0000000001|0000000011|0000000430|0000000001",
    },
    itemLink: {
      $: "http://digitalcollections.nypl.org/items/510d47d9-7c7c-a3d9-e040-e00a18064a99",
    },
    highResLink: {
      $: "https://link.nypl.org/3iIRPl9YEd2naebMmVbNCAA",
    },
    orderInSequence: {
      $: "1",
    },
    isPartOfSequence: {
      $: "true",
    },
    totalInSequence: {
      $: "1",
    },
    title: {
      $: "View of High Bridge and the Harlem River",
    },
    rightsStatement: {
      $: 'The New York Public Library believes that this item is in the public domain under the laws of the United States, but did not make a determination as to its copyright status under the copyright laws of other countries. This item may not be in the public domain under the laws of other countries. Though not required, if you want to credit us as the source, please use the following statement, "From The New York Public Library," and provide a link back to the item on our Digital Collections site. Doing so helps us track how our collection is used and helps justify freely releasing even more content in the future.',
    },
    rightsStatementURI: {
      $: "http://rightsstatements.org/vocab/NoC-US/1.0/",
    },
  },
};

export const mockCollectionsResponse = {
  headers: { status: "success", code: "200", message: "ok" },
  numResults: "954924",
  page: "1",
  perPage: "40",
  collection: [
    {
      uuid: "60932400-20f2-0138-8583-05c43d448773",
      title: "Posada Collection",
      url: "https://digitalcollections.nypl.org/collections/posada-collection#/?tab=navigation",
      imageID: "58270299",
      numberOfDigitizedItems: 34,
      containsOnSiteMaterials: true,
      containsAVMaterial: false,
    },
    {
      uuid: "724303e0-c6bb-012f-afbd-58d385a7bc34",
      title: "MAVO",
      url: "https://digitalcollections.nypl.org/collections/mavo#/?tab=navigation",
      imageID: null,
      numberOfDigitizedItems: 35,
      containsOnSiteMaterials: true,
      containsAVMaterial: false,
    },
    {
      uuid: "6b6532b0-5df7-013b-36f8-0242ac110002",
      title: "Austin Hansen photograph collection",
      url: "https://digitalcollections.nypl.org/collections/austin-hansen-photograph-collection#/?tab=navigation",
      imageID: "58300996",
      numberOfDigitizedItems: 65,
      containsOnSiteMaterials: true,
      containsAVMaterial: false,
    },
    {
      uuid: "5b996640-c31c-0139-0bac-0242ac110004",
      title:
        "Arthur Alfonso Schomburg papers Arthur Alfonso Schomburg papers Arthur Alfonso Schomburg papers",
      url: "https://digitalcollections.nypl.org/collections/arthur-alfonso-schomburg-papers#/?tab=navigation",
      imageID: null,
      numberOfDigitizedItems: 55,
      containsOnSiteMaterials: true,
      containsAVMaterial: false,
    },
    {
      uuid: "d3802d10-f49a-0139-3bff-0242ac110002",
      title: "Friedman-Abeles photographs",
      url: "https://digitalcollections.nypl.org/collections/friedman-abeles-photographs#/?tab=navigation",
      imageID: "58498722",
      numberOfDigitizedItems: 35,
      containsOnSiteMaterials: false,
      containsAVMaterial: false,
    },
    {
      uuid: "e5462600-c5d9-012f-a6a3-58d385a7bc34",
      title: "Farm Security Administration Photographs",
      url: "https://digitalcollections.nypl.org/collections/farm-security-administration-photographs#/?tab=navigation",
      imageID: "1952272",
      numberOfDigitizedItems: 36,
      containsOnSiteMaterials: false,
      containsAVMaterial: false,
    },
    {
      uuid: "812e5770-c60c-012f-7167-58d385a7bc34",
      title: "Changing New York",
      url: "https://digitalcollections.nypl.org/collections/changing-new-york#/?tab=navigation",
      imageID: "58447105",
      numberOfDigitizedItems: 37,
      containsOnSiteMaterials: false,
      containsAVMaterial: false,
    },
    {
      uuid: "f7ffc990-c5ae-012f-eb75-58d385a7bc34",
      title:
        "The Black Experience in Children's Books: Selections from Augusta Baker's Bibliographies",
      url: "https://digitalcollections.nypl.org/collections/the-black-experience-in-childrens-books-selections-from-augusta-bakers#/?tab=about",
      imageID: "56958645",
      numberOfDigitizedItems: 153,
      containsOnSiteMaterials: false,
      containsAVMaterial: false,
    },
    {
      uuid: "60932400-20f2-0138-8583-05c43d448773",
      title: "Posada Collection",
      url: "https://digitalcollections.nypl.org/collections/posada-collection#/?tab=navigation",
      imageID: "58270299",
      numberOfDigitizedItems: 34,
      containsOnSiteMaterials: true,
      containsAVMaterial: false,
    },
    {
      uuid: "724303e0-c6bb-012f-afbd-58d385a7bc34",
      title: "MAVO",
      url: "https://digitalcollections.nypl.org/collections/mavo#/?tab=navigation",
      imageID: null,
      numberOfDigitizedItems: 35,
      containsOnSiteMaterials: true,
      containsAVMaterial: false,
    },
    {
      uuid: "6b6532b0-5df7-013b-36f8-0242ac110002",
      title: "Austin Hansen photograph collection",
      url: "https://digitalcollections.nypl.org/collections/austin-hansen-photograph-collection#/?tab=navigation",
      imageID: "58300996",
      numberOfDigitizedItems: 65,
      containsOnSiteMaterials: true,
      containsAVMaterial: false,
    },
    {
      uuid: "5b996640-c31c-0139-0bac-0242ac110004",
      title:
        "Arthur Alfonso Schomburg papers Arthur Alfonso Schomburg papers Arthur Alfonso Schomburg papers",
      url: "https://digitalcollections.nypl.org/collections/arthur-alfonso-schomburg-papers#/?tab=navigation",
      imageID: null,
      numberOfDigitizedItems: 55,
      containsOnSiteMaterials: true,
      containsAVMaterial: false,
    },
    {
      uuid: "d3802d10-f49a-0139-3bff-0242ac110002",
      title: "Friedman-Abeles photographs",
      url: "https://digitalcollections.nypl.org/collections/friedman-abeles-photographs#/?tab=navigation",
      imageID: "58498722",
      numberOfDigitizedItems: 35,
      containsOnSiteMaterials: false,
      containsAVMaterial: false,
    },
    {
      uuid: "e5462600-c5d9-012f-a6a3-58d385a7bc34",
      title: "Farm Security Administration Photographs",
      url: "https://digitalcollections.nypl.org/collections/farm-security-administration-photographs#/?tab=navigation",
      imageID: "1952272",
      numberOfDigitizedItems: 36,
      containsOnSiteMaterials: false,
      containsAVMaterial: false,
    },
    {
      uuid: "812e5770-c60c-012f-7167-58d385a7bc34",
      title: "Changing New York",
      url: "https://digitalcollections.nypl.org/collections/changing-new-york#/?tab=navigation",
      imageID: "58447105",
      numberOfDigitizedItems: 37,
      containsOnSiteMaterials: false,
      containsAVMaterial: false,
    },
    {
      uuid: "f7ffc990-c5ae-012f-eb75-58d385a7bc34",
      title:
        "The Black Experience in Children's Books: Selections from Augusta Baker's Bibliographies",
      url: "https://digitalcollections.nypl.org/collections/the-black-experience-in-childrens-books-selections-from-augusta-bakers#/?tab=about",
      imageID: "56958645",
      numberOfDigitizedItems: 153,
      containsOnSiteMaterials: false,
      containsAVMaterial: false,
    },
    {
      uuid: "60932400-20f2-0138-8583-05c43d448773",
      title: "Posada Collection",
      url: "https://digitalcollections.nypl.org/collections/posada-collection#/?tab=navigation",
      imageID: "58270299",
      numberOfDigitizedItems: 34,
      containsOnSiteMaterials: true,
      containsAVMaterial: false,
    },
    {
      uuid: "724303e0-c6bb-012f-afbd-58d385a7bc34",
      title: "MAVO",
      url: "https://digitalcollections.nypl.org/collections/mavo#/?tab=navigation",
      imageID: null,
      numberOfDigitizedItems: 35,
      containsOnSiteMaterials: true,
      containsAVMaterial: false,
    },
    {
      uuid: "6b6532b0-5df7-013b-36f8-0242ac110002",
      title: "Austin Hansen photograph collection",
      url: "https://digitalcollections.nypl.org/collections/austin-hansen-photograph-collection#/?tab=navigation",
      imageID: "58300996",
      numberOfDigitizedItems: 65,
      containsOnSiteMaterials: true,
      containsAVMaterial: false,
    },
    {
      uuid: "5b996640-c31c-0139-0bac-0242ac110004",
      title:
        "Arthur Alfonso Schomburg papers Arthur Alfonso Schomburg papers Arthur Alfonso Schomburg papers",
      url: "https://digitalcollections.nypl.org/collections/arthur-alfonso-schomburg-papers#/?tab=navigation",
      imageID: null,
      numberOfDigitizedItems: 55,
      containsOnSiteMaterials: true,
      containsAVMaterial: false,
    },
    {
      uuid: "d3802d10-f49a-0139-3bff-0242ac110002",
      title: "Friedman-Abeles photographs",
      url: "https://digitalcollections.nypl.org/collections/friedman-abeles-photographs#/?tab=navigation",
      imageID: "58498722",
      numberOfDigitizedItems: 35,
      containsOnSiteMaterials: false,
      containsAVMaterial: false,
    },
    {
      uuid: "e5462600-c5d9-012f-a6a3-58d385a7bc34",
      title: "Farm Security Administration Photographs",
      url: "https://digitalcollections.nypl.org/collections/farm-security-administration-photographs#/?tab=navigation",
      imageID: "1952272",
      numberOfDigitizedItems: 36,
      containsOnSiteMaterials: false,
      containsAVMaterial: false,
    },
    {
      uuid: "812e5770-c60c-012f-7167-58d385a7bc34",
      title: "Changing New York",
      url: "https://digitalcollections.nypl.org/collections/changing-new-york#/?tab=navigation",
      imageID: "58447105",
      numberOfDigitizedItems: 37,
      containsOnSiteMaterials: false,
      containsAVMaterial: false,
    },
    {
      uuid: "f7ffc990-c5ae-012f-eb75-58d385a7bc34",
      title:
        "The Black Experience in Children's Books: Selections from Augusta Baker's Bibliographies",
      url: "https://digitalcollections.nypl.org/collections/the-black-experience-in-childrens-books-selections-from-augusta-bakers#/?tab=about",
      imageID: "56958645",
      numberOfDigitizedItems: 153,
      containsOnSiteMaterials: false,
      containsAVMaterial: false,
    },
    {
      uuid: "60932400-20f2-0138-8583-05c43d448773",
      title: "Posada Collection",
      url: "https://digitalcollections.nypl.org/collections/posada-collection#/?tab=navigation",
      imageID: "58270299",
      numberOfDigitizedItems: 34,
      containsOnSiteMaterials: true,
      containsAVMaterial: false,
    },
    {
      uuid: "724303e0-c6bb-012f-afbd-58d385a7bc34",
      title: "MAVO",
      url: "https://digitalcollections.nypl.org/collections/mavo#/?tab=navigation",
      imageID: null,
      numberOfDigitizedItems: 35,
      containsOnSiteMaterials: true,
      containsAVMaterial: false,
    },
    {
      uuid: "6b6532b0-5df7-013b-36f8-0242ac110002",
      title: "Austin Hansen photograph collection",
      url: "https://digitalcollections.nypl.org/collections/austin-hansen-photograph-collection#/?tab=navigation",
      imageID: "58300996",
      numberOfDigitizedItems: 65,
      containsOnSiteMaterials: true,
      containsAVMaterial: false,
    },
    {
      uuid: "5b996640-c31c-0139-0bac-0242ac110004",
      title:
        "Arthur Alfonso Schomburg papers Arthur Alfonso Schomburg papers Arthur Alfonso Schomburg papers",
      url: "https://digitalcollections.nypl.org/collections/arthur-alfonso-schomburg-papers#/?tab=navigation",
      imageID: null,
      numberOfDigitizedItems: 55,
      containsOnSiteMaterials: true,
      containsAVMaterial: false,
    },
    {
      uuid: "d3802d10-f49a-0139-3bff-0242ac110002",
      title: "Friedman-Abeles photographs",
      url: "https://digitalcollections.nypl.org/collections/friedman-abeles-photographs#/?tab=navigation",
      imageID: "58498722",
      numberOfDigitizedItems: 35,
      containsOnSiteMaterials: false,
      containsAVMaterial: false,
    },
    {
      uuid: "e5462600-c5d9-012f-a6a3-58d385a7bc34",
      title: "Farm Security Administration Photographs",
      url: "https://digitalcollections.nypl.org/collections/farm-security-administration-photographs#/?tab=navigation",
      imageID: "1952272",
      numberOfDigitizedItems: 36,
      containsOnSiteMaterials: false,
      containsAVMaterial: false,
    },
    {
      uuid: "812e5770-c60c-012f-7167-58d385a7bc34",
      title: "Changing New York",
      url: "https://digitalcollections.nypl.org/collections/changing-new-york#/?tab=navigation",
      imageID: "58447105",
      numberOfDigitizedItems: 37,
      containsOnSiteMaterials: false,
      containsAVMaterial: false,
    },
    {
      uuid: "f7ffc990-c5ae-012f-eb75-58d385a7bc34",
      title:
        "The Black Experience in Children's Books: Selections from Augusta Baker's Bibliographies",
      url: "https://digitalcollections.nypl.org/collections/the-black-experience-in-childrens-books-selections-from-augusta-bakers#/?tab=about",
      imageID: "56958645",
      numberOfDigitizedItems: 153,
      containsOnSiteMaterials: false,
      containsAVMaterial: false,
    },
    {
      uuid: "60932400-20f2-0138-8583-05c43d448773",
      title: "Posada Collection",
      url: "https://digitalcollections.nypl.org/collections/posada-collection#/?tab=navigation",
      imageID: "58270299",
      numberOfDigitizedItems: 34,
      containsOnSiteMaterials: true,
      containsAVMaterial: false,
    },
    {
      uuid: "724303e0-c6bb-012f-afbd-58d385a7bc34",
      title: "MAVO",
      url: "https://digitalcollections.nypl.org/collections/mavo#/?tab=navigation",
      imageID: null,
      numberOfDigitizedItems: 35,
      containsOnSiteMaterials: true,
      containsAVMaterial: false,
    },
    {
      uuid: "6b6532b0-5df7-013b-36f8-0242ac110002",
      title: "Austin Hansen photograph collection",
      url: "https://digitalcollections.nypl.org/collections/austin-hansen-photograph-collection#/?tab=navigation",
      imageID: "58300996",
      numberOfDigitizedItems: 65,
      containsOnSiteMaterials: true,
      containsAVMaterial: false,
    },
    {
      uuid: "5b996640-c31c-0139-0bac-0242ac110004",
      title:
        "Arthur Alfonso Schomburg papers Arthur Alfonso Schomburg papers Arthur Alfonso Schomburg papers",
      url: "https://digitalcollections.nypl.org/collections/arthur-alfonso-schomburg-papers#/?tab=navigation",
      imageID: null,
      numberOfDigitizedItems: 55,
      containsOnSiteMaterials: true,
      containsAVMaterial: false,
    },
    {
      uuid: "d3802d10-f49a-0139-3bff-0242ac110002",
      title: "Friedman-Abeles photographs",
      url: "https://digitalcollections.nypl.org/collections/friedman-abeles-photographs#/?tab=navigation",
      imageID: "58498722",
      numberOfDigitizedItems: 35,
      containsOnSiteMaterials: false,
      containsAVMaterial: false,
    },
    {
      uuid: "e5462600-c5d9-012f-a6a3-58d385a7bc34",
      title: "Farm Security Administration Photographs",
      url: "https://digitalcollections.nypl.org/collections/farm-security-administration-photographs#/?tab=navigation",
      imageID: "1952272",
      numberOfDigitizedItems: 36,
      containsOnSiteMaterials: false,
      containsAVMaterial: false,
    },
    {
      uuid: "812e5770-c60c-012f-7167-58d385a7bc34",
      title: "Changing New York",
      url: "https://digitalcollections.nypl.org/collections/changing-new-york#/?tab=navigation",
      imageID: "58447105",
      numberOfDigitizedItems: 37,
      containsOnSiteMaterials: false,
      containsAVMaterial: false,
    },
    {
      uuid: "f7ffc990-c5ae-012f-eb75-58d385a7bc34",
      title:
        "The Black Experience in Children's Books: Selections from Augusta Baker's Bibliographies",
      url: "https://digitalcollections.nypl.org/collections/the-black-experience-in-childrens-books-selections-from-augusta-bakers#/?tab=about",
      imageID: "56958645",
      numberOfDigitizedItems: 153,
      containsOnSiteMaterials: false,
      containsAVMaterial: false,
    },
    {
      uuid: "60932400-20f2-0138-8583-05c43d448773",
      title: "Posada Collection",
      url: "https://digitalcollections.nypl.org/collections/posada-collection#/?tab=navigation",
      imageID: "58270299",
      numberOfDigitizedItems: 34,
      containsOnSiteMaterials: true,
      containsAVMaterial: false,
    },
    {
      uuid: "724303e0-c6bb-012f-afbd-58d385a7bc34",
      title: "MAVO",
      url: "https://digitalcollections.nypl.org/collections/mavo#/?tab=navigation",
      imageID: null,
      numberOfDigitizedItems: 35,
      containsOnSiteMaterials: true,
      containsAVMaterial: false,
    },
    {
      uuid: "6b6532b0-5df7-013b-36f8-0242ac110002",
      title: "Austin Hansen photograph collection",
      url: "https://digitalcollections.nypl.org/collections/austin-hansen-photograph-collection#/?tab=navigation",
      imageID: "58300996",
      numberOfDigitizedItems: 65,
      containsOnSiteMaterials: true,
      containsAVMaterial: false,
    },
    {
      uuid: "5b996640-c31c-0139-0bac-0242ac110004",
      title:
        "Arthur Alfonso Schomburg papers Arthur Alfonso Schomburg papers Arthur Alfonso Schomburg papers",
      url: "https://digitalcollections.nypl.org/collections/arthur-alfonso-schomburg-papers#/?tab=navigation",
      imageID: null,
      numberOfDigitizedItems: 55,
      containsOnSiteMaterials: true,
      containsAVMaterial: false,
    },
    {
      uuid: "d3802d10-f49a-0139-3bff-0242ac110002",
      title: "Friedman-Abeles photographs",
      url: "https://digitalcollections.nypl.org/collections/friedman-abeles-photographs#/?tab=navigation",
      imageID: "58498722",
      numberOfDigitizedItems: 35,
      containsOnSiteMaterials: false,
      containsAVMaterial: false,
    },
    {
      uuid: "e5462600-c5d9-012f-a6a3-58d385a7bc34",
      title: "Farm Security Administration Photographs",
      url: "https://digitalcollections.nypl.org/collections/farm-security-administration-photographs#/?tab=navigation",
      imageID: "1952272",
      numberOfDigitizedItems: 36,
      containsOnSiteMaterials: false,
      containsAVMaterial: false,
    },
    {
      uuid: "812e5770-c60c-012f-7167-58d385a7bc34",
      title: "Changing New York",
      url: "https://digitalcollections.nypl.org/collections/changing-new-york#/?tab=navigation",
      imageID: "58447105",
      numberOfDigitizedItems: 37,
      containsOnSiteMaterials: false,
      containsAVMaterial: false,
    },
    {
      uuid: "f7ffc990-c5ae-012f-eb75-58d385a7bc34",
      title:
        "The Black Experience in Children's Books: Selections from Augusta Baker's Bibliographies",
      url: "https://digitalcollections.nypl.org/collections/the-black-experience-in-childrens-books-selections-from-augusta-bakers#/?tab=about",
      imageID: "56958645",
      numberOfDigitizedItems: 153,
      containsOnSiteMaterials: false,
      containsAVMaterial: false,
    },
  ],
};
