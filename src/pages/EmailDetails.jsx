import { useContext } from "react"
import { MailContext } from "../data-contexts/mail-context"
import { useParams } from "react-router-dom"
import { MailCard } from "../components/MailCard"

export function EmailDetails () {
    const {emailId} = useParams()
    const {inboxMails: {emails}} = useContext(MailContext)

    const email= emails.find(({mId}) => mId === emailId)
    return(
        <>
        <MailCard email={email} details/>

        </>
    )
}