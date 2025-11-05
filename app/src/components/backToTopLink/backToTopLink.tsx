import { Icon, Link } from "@nypl/design-system-react-components";

const BackToTopLink = () => {
  return (
    <Link
      minWidth="100px"
      isUnderlined={false}
      hasVisitedState={false}
      gap="xxs"
      variant="action"
      href="#"
    >
      Back to top{"  "}
      <Icon name="arrow" iconRotation="rotate180" size="xsmall" />
    </Link>
  );
};

export default BackToTopLink;
