import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MailContext } from "../data-contexts/mail-context";

export function MailCard({ email, details }) {
  const { inboxMails, setInboxMails } = useContext(MailContext);

  const { mId, unread, isStarred, subject, content } = email;

  return (
    <>
      <li key={mId}>
        <h4>{subject}</h4>
        <p>{content}</p>
        {!details && <div>
          <NavLink to={`/emails/${mId}`}>View Details</NavLink>
        <button onClick={() => setInboxMails({type: "delete", idToBeToggled: mId})}>Delete</button>
        <button onClick={() => setInboxMails({type: "toggleUnread", idToBeToggled: mId})}>Mark as {unread ? "read" : "unread"}</button>
        <button onClick={() => setInboxMails({type: "spam", idToBeToggled: mId})}>Report Spam</button>
        <button onClick={() => setInboxMails({type: "toggleIsStarred", idToBeToggled: mId})}>{isStarred ? "Unstar" : "Star"}</button></div>}
      </li>
    </>
  );
}
