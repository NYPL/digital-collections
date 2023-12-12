import { Link, Notification, Text } from "@nypl/design-system-react-components";

const NotificationBanner = () => {
  return (
    <Notification
      id="banner"
      sx={{
        margin: "0px !important",
        borderRadius: "0px !important",
        " > div ": {
          justifyContent: "center",
        },
      }}
      notificationContent={
        <Text
          sx={{
            marginBottom: "0px",
            fontWeight: "400",
          }}
        >
          Digital Collections is getting a new look. Return to original
          <Link href="https://digitalcollections.nypl.org/">
            {" "}
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
