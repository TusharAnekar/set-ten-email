import { useContext } from "react";
import { MailContext } from "../data-contexts/mail-context";
import { MailCard } from "../components/MailCard";

export function Spam() {
  const {
    inboxMails: { spamEmails },
  } = useContext(MailContext);
  return (
    <>
      <div>
        <ul>
          {spamEmails.map((email) => (
            <MailCard email={email} />
          ))}
        </ul>
      </div>
    </>
  );
}
