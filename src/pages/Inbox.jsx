import { useContext } from "react";
import { MailContext } from "../data-contexts/mail-context";
import { MailCard } from "../components/MailCard";

export function Inbox() {
  const { inboxMails, setInboxMails, starredEmails } = useContext(MailContext);
  const unreadEmailsCount = inboxMails.emails.filter(
    ({ unread }) => unread
  ).length;

  return (
    <div>
      <fieldset>
        <legend>Filters:</legend>
        <label htmlFor="">
          <input
            type="checkbox"
            value={"unreadEmails"}
            onClick={() => setInboxMails({type: "showUnreadEmails"})}
            checked={inboxMails.showUnreadEmails}
          />
          Unread Emails
        </label>
        <label htmlFor="">
          <input
            type="checkbox"
            value={"starredEmails"}
            onClick={() => setInboxMails({type: "showStarredEmails"})}
            checked={inboxMails.showStarredEmails}
          />
          Starred Emails
        </label>
      </fieldset>
      <h2>Unread: {unreadEmailsCount}</h2>
      <ul>
        {starredEmails.map((email) => (
          <MailCard email={email} />
        ))}
      </ul>
    </div>
  );
}
