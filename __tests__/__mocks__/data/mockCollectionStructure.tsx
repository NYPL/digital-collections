import { CollectionChildProps } from "@/src/components/collectionStructure/collectionStructure";

export const sampleStructure: CollectionChildProps[] = [
  {
    title: "American literature, 17th century",
    itemCount: "23478",
    uuid: "a1b2c3d4e5f6g7h8i9j0",
    hasChildren: true,
    children: [
      {
        title: "Pennsylvanian books",
        itemCount: "8",
        uuid: "b1c2d3e4f5g6h7i8j9k0",
        hasChildren: false,
      },
      {
        title: "Californian poems",
        itemCount: "16",
        uuid: "c1d2e3f4g5h6i7j8k9l0",
        hasChildren: false,
      },
    ],
  },
  {
    title: "Russian literature",
    itemCount: "2000",
    uuid: "d1e2f3g4h5i6j7k8l9m0",
    hasChildren: true,
    children: [
      {
        title: "Tolstoy",
        itemCount: "3456",
        uuid: "e1f2g3h4i5j6k7l8m9n0",
        hasChildren: true,
        children: [
          {
            title: "Anna Karenina",
            itemCount: "36",
            uuid: "f1g2h3i4j5k6l7m8n9o0",
            hasChildren: true,
            children: [
              {
                title: "Vronsky",
                itemCount: "8",
                uuid: "g1h2i3j4k5l6m7n8o9p0",
                hasChildren: false,
              },
              {
                title: "Levin",
                itemCount: "4",
                uuid: "h1i2j3k4l5m6n7o8p9q0",
                hasChildren: false,
              },
              {
                title: "Kitty",
                itemCount: "5",
                uuid: "i1j2k3l4m5n6o7p8q9r0",
                hasChildren: false,
              },
              {
                title: "Stiva",
                itemCount: "8",
                uuid: "j1k2l3m4n5o6p7q8r9s0",
                hasChildren: false,
              },
              {
                title: "Anna Arkadyevna Karenina",
                itemCount: "4",
                uuid: "k1l2m3n4o5p6q7r8s9t0",
                hasChildren: true,
                children: [
                  {
                    title: "Seryozha",
                    itemCount: "5",
                    uuid: "l1m2n3o4p5q6r7s8t9u0",
                    hasChildren: false,
                  },
                  {
                    title: "Annie",
                    itemCount: "2",
                    uuid: "m1n2o3p4q5r6s7t8u9v0",
                    hasChildren: false,
                  },
                ],
              },
              {
                title: "Konstantin",
                itemCount: "5",
                uuid: "n1o2p3q4r5s6t7u8v9w0",
                hasChildren: false,
              },
              {
                title: "Dolly",
                itemCount: "5",
                uuid: "o1p2q3r4s5t6u7v8w9x0",
                hasChildren: false,
              },
              {
                title: "Ivan",
                itemCount: "5",
                uuid: "p1q2r3s4t5u6v7w8x9y0",
                hasChildren: false,
              },
              {
                title: "Lydia",
                itemCount: "5",
                uuid: "q1r2s3t4u5v6w7x8y9z0",
                hasChildren: false,
              },
              {
                title: "Betsy",
                itemCount: "5",
                uuid: "r1s2t3u4v5w6x7y8z9a0",
                hasChildren: false,
              },
            ],
          },
          {
            title: "War and Peace",
            itemCount: "67",
            uuid: "s1t2u3v4w5x6y7z8a9b0",
            hasChildren: false,
          },
        ],
      },
      {
        title: "Dostoevsky",
        itemCount: "5",
        uuid: "t1u2v3w4x5y6z7a8b9c0",
        hasChildren: true,
        children: [
          {
            title: "Crime and Punishment",
            itemCount: "1",
            uuid: "u1v2w3x4y5z6a7b8c9d0",
            hasChildren: false,
          },
          {
            title: "The Brothers Karamazov",
            itemCount: "4",
            uuid: "v1w2x3y4z5a6b7c8d9e0",
            hasChildren: false,
          },
        ],
      },
    ],
  },
  {
    title: "Science fiction",
    itemCount: "999",
    uuid: "w1x2y3z4a5b6c7d8e9f0",
    hasChildren: true,
    children: Array.from({ length: 80 }, (_, i) => ({
      title: `Dune: Children ${i + 1}`,
      itemCount: `${i + 1}`,
      uuid: `x${i}y${i + 1}z${i + 2}a${i + 3}b${i + 4}`,
      hasChildren: false,
    })),
  },
  {
    title: "German literature",
    itemCount: "230",
    uuid: "y1z2a3b4c5d6e7f8g9h0",
    hasChildren: false,
    children: [],
  },
];
