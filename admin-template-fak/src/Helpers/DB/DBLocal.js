import Dexie from 'dexie'

const DBLocal = () => {
    let db = new Dexie('DBLeres')
    db.version(1).stores({
        signa: '++increment, id, latin, signa',
        ditebus: '++increment, id, nilai',
        takaran: '++increment, id, nilai',
    })

    return db
}

export default DBLocal