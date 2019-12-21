import React, {useEffect, useState} from 'react';

import { useFormik } from 'formik';

export default ({createPlayer, updatePlayer, player}) => {
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            login: player.login,
            money: player.money,
        },
        onSubmit: values => player.id 
        ? updatePlayer({...values, id: player.id})
        : createPlayer({...values}),
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <h2>{player.id ? 'Update Player' : 'Create Player'}</h2>
            <p>{JSON.stringify(player)}</p>
            <label htmlFor="login">Login</label>
            <input 
                id="login"
                name="login"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.login}
            />
            <label htmlFor="money">Money</label>
            <input 
                id="money"
                name="money"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.money}
            />
            <button type="submit">{player.id ? 'Update Player' : 'Create Player'}</button>
        </form>
    )
}

