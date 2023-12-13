import { Link, Notification, Text } from "@nypl/design-system-react-components";

const NotificationBanner = () => {
  return (
    <Notification
      noMargin
      isCentered
      notificationContent={
        <Text
          sx={{
            marginBottom: "0px",
            fontWeight: "400",
          }}
        >
          Digital Collections is getting a new look. Prefer the former version?
          Return to the previous{" "}
          <Link href="https://digitalcollections.nypl.org/">
            Digital Collections
          </Link>
          .
        </Text>
      }
      showIcon={false}
    />
  );
};

export default NotificationBanner;
