import { createContext, useReducer } from "react";

import { mails } from "../apis/fakefetch";

export const MailContext = createContext();

export function MailProvider({ children }) {
  const [inboxMails, setInboxMails] = useReducer(handleReducer, {
    emails: mails,
    trashEmails: [],
    spamEmails: [],
    showUnreadEmails: false,
    showStarredEmails: false
  });

  console.log("showUnreadEmails: ", inboxMails.showUnreadEmails, "showStarredEmails: ", inboxMails.showStarredEmails)
  const unreadEmails = inboxMails.showUnreadEmails ? inboxMails.emails.filter(({unread}) => unread) : inboxMails.emails

  const starredEmails = inboxMails.showStarredEmails ? unreadEmails.filter(({isStarred}) => isStarred) : unreadEmails

  function handleReducer(inboxMails, { type, idToBeToggled }) {
    switch (type) {
      case "toggleUnread":
        return {
          ...inboxMails,
          emails: inboxMails.emails.map((email) =>
            email.mId === idToBeToggled
              ? { ...email, unread: !email.unread }
              : email
          ),
        };

      case "toggleIsStarred":
        return {
          ...inboxMails,
          emails: inboxMails.emails.map((email) =>
            email.mId === idToBeToggled
              ? { ...email, isStarred: !email.isStarred }
              : email
          ),
        };

      case "delete":
        return {
          ...inboxMails,
          emails: inboxMails.emails.filter(({ mId }) => mId !== idToBeToggled),
          trashEmails: [
            ...inboxMails.trashEmails,
            inboxMails.emails.find(({ mId }) => mId === idToBeToggled),
          ],
        };

        case "spam": return{...inboxMails,
          emails: inboxMails.emails.filter(({ mId }) => mId !== idToBeToggled),
          spamEmails: [
            ...inboxMails.spamEmails,
            inboxMails.emails.find(({ mId }) => mId === idToBeToggled),
          ]}

          case "showUnreadEmails": return {
            ...inboxMails,
            showUnreadEmails: !inboxMails.showUnreadEmails,
          }
          case "showStarredEmails":  return{
            ...inboxMails,
            showStarredEmails: !inboxMails.showStarredEmails,
          }
      default:
        return inboxMails;
    }
  }

  return (
    <MailContext.Provider value={{ inboxMails, setInboxMails, starredEmails }}>
      {children}
    </MailContext.Provider>
  );
}
