import React from 'react';

import { useFormik } from 'formik';

export default ({createDeck, updateDeck, deck, canBeEdited}) => {
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            title: deck.title,
        },
        onSubmit: values => deck.id 
        ? updateDeck({...deck, ...values})
        : createDeck({...values}),
    })

    return (
        canBeEdited ?
        <form onSubmit={formik.handleSubmit}>
            <h2>{deck.id ? 'Update Deck' : 'Create Deck'}</h2>
            <p>{JSON.stringify(deck)}</p>
            <label htmlFor="login">Title</label>
            <input 
                id="title"
                name="title"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.title}
            />
            <button type="submit">{deck.id ? 'Update Deck' : 'Create Deck'}</button>
        </form>
        :
        null
    )
}

