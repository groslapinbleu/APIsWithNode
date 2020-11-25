import { addNewContact, getContacts, getContactWithId } from '../controllers/crmControllers.js'

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
        .put((req, res) => {
            res.send(`PUT /contact/${req.params.contactId} réalisée avec succès`)
        })
        .delete((req, res) => {
            res.send(`DELETE /contact/${req.params.contactId} réalisée avec succès`)
        })
}

export default routes