import { Link, Notification } from "@nypl/design-system-react-components";

const NotificationBanner = () => {
  return (
    <Notification
      notificationType="announcement"
      noMargin
      notificationContent={
        <>
          Digital Collections is getting a new look. Prefer the former version?
          Return to the previous{" "}
          <Link href="https://digitalcollections.nypl.org/">
            Digital Collections
          </Link>
          .
        </>
      }
      sx={{
        "> div": {
          justifyContent: "center",
        },
      }}
    />
  );
};

export default NotificationBanner;
