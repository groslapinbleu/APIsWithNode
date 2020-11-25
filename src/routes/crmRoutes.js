import { 
    addNewContact, 
    getContacts, 
    getContactWithId,
    updateContact,
    deleteContact } from '../controllers/crmControllers.js'

const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            // ceci est un middleware
            console.log(`req.originalUrl = ${req.originalUrl}`)
            console.log(`req.method = ${req.method}`)
            next()
        },
            getContacts
        )
        .post(addNewContact)

    app.route('/contact/:contactId')
        .get(getContactWithId)
        .put(updateContact)
        .delete(deleteContact)
}

export default routes