"use client";
import { Link, List } from "@nypl/design-system-react-components";

const AllMapsList = ({ data }) => {
  return (
    <>
      <List id="nypl-list" showRowDividers title="Map Warper Maps" type="dl">
        {data.map((record, index) => {
          return (
            <>
              <dt>
                <Link
                  key={index}
                  href={`/maps/${record.uuid}`}
                  aria-label={record.name}
                >
                  {record.name}
                </Link>
              </dt>
              <dd>{record.description}</dd>
            </>
          );
        })}
      </List>
    </>
  );
};

export default AllMapsList;
