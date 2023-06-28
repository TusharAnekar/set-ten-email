import { useContext } from "react"
import { MailContext } from "../data-contexts/mail-context"
import { MailCard } from "../components/MailCard"

export function Trash () {
    const{inboxMails: { trashEmails },}= useContext(MailContext)
    return (
        <><div>
        <ul>
          {trashEmails.map((email) => (
            <MailCard email={email} />
          ))}
        </ul>
      </div></>
    )
}