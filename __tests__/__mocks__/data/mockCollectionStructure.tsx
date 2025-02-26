import { CollectionChildProps } from "@/src/components/collectionStructure/collectionStructure";

export const sampleStructure: CollectionChildProps[] = [
  {
    title: "American literature, 17th century",
    itemCount: "23478",
    children: [
      { title: "Pennsylvanian books", itemCount: "8" },
      { title: "Californian poems", itemCount: "16" },
    ],
  },
  {
    title: "Russian literature",
    itemCount: "2000",
    children: [
      {
        title: "Tolstoy",
        itemCount: "3456",
        children: [
          {
            title: "Anna Karenina",
            itemCount: "36",
            children: [
              { title: "Vronsky", itemCount: "8" },
              { title: "Levin", itemCount: "4" },
              { title: "Kitty", itemCount: "5" },
              { title: "Stiva", itemCount: "8" },
              {
                title: "Anna Arkadyevna Karenina",
                itemCount: "4",
                children: [
                  { title: "Seryozha", itemCount: "5" },
                  { title: "Annie", itemCount: "2" },
                ],
              },
              { title: "Konstantin", itemCount: "5" },
              { title: "Dolly", itemCount: "5" },
              { title: "Ivan", itemCount: "5" },
              { title: "Lydia", itemCount: "5" },
              { title: "Betsy", itemCount: "5" },
            ],
          },
          { title: "War and Peace", itemCount: "67" },
        ],
      },
      {
        title: "Dostoevsky",
        itemCount: "5",
        children: [
          { title: "Crime and Punishment", itemCount: "1" },
          { title: "The Brothers Karamazov", itemCount: "4" },
        ],
      },
    ],
  },
  {
    title: "Science fiction",
    itemCount: "999",
    children: Array.from({ length: 80 }, (_, i) => ({
      title: `Dune: Children ${i + 1}`,
      itemCount: `${i + 1}`,
    })),
  },
  {
    title: "German literature",
    itemCount: "230",
    children: [],
  },
];
