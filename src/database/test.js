const Database = require('./db')
const saveOrphanage = require('./saveOrphanage')

Database.then(async(db) => {
    // inserir dados na tabela
    // await saveOrphanage(db, {
    //     lat: "-27.2196028",
    //     lng: "-49.657076",
    //     name: "Lar dos meninos",
    //     about: "Presta assistência à crianças de 06 a 15 anos que encontram-se em situação de risco e/ou vulnerabilidade social.",
    //     whatsapp: "41998815606",
    //     images: [
    //         "https://images.unsplash.com/photo-1562790519-bc8a4a47cd0e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

    //         "https://images.unsplash.com/photo-1582167371270-68a4c033e732?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

    //         "https://images.unsplash.com/photo-1572247324584-a841c32b95ac?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

    //         "https://images.unsplash.com/photo-1595295407820-3563d04518be?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

    //         "https://images.unsplash.com/photo-1599663253423-7cad6e5fae1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

    //         "https://images.unsplash.com/photo-1582167410766-a90eea4787ae?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    //     ].toString(),
    //     instructions: "Venha quando se sentir a vontade e traga muito amor e paciẽncia para dar.",
    //     opening_hours: "Visitas das 18h até 20h.",
    //     open_on_weekends: "0"
    // })

    // consultar dados da tabela
    const selectedData = await db.all("SELECT * FROM orphanages")
    console.log(selectedData)

    // // consultar apenas 1 orfanato
    // const orphanage = await db.all("SELECT * FROM orphanages WHERE id = 3")
    // console.log(orphanage)

    // // deletar dado da tabela
    //await db.run("DELETE FROM orphanages WHERE id = 4")
})