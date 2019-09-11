const db = require('../data/db-config');

module.exports = {
    find,
    findById,
    remove,
    add,
    findSteps,
    update
}
function find() {
   return db('schemes')
   .then(schemes => {
       return schemes;
   })

}

function findById(id) {
    return db('schemes').where({id: id}).first()
    .then(scheme => {
         if(scheme) {
             return scheme;
         } else {
             return null;
         };
    })
}


function remove(id) {
    const deletedScheme = findById(id);
    return db('schemes').where({id: id}).del().then(del => {
        if(deletedScheme) {
            return deletedScheme
        } else {
            return null;
        };
    });
}

function add(scheme) {
    return db('schemes').insert(scheme).then(ids => {
        return findById(ids[0])
    })
}
function update(changes, id) {
    return db('schemes').update(changes).where({id: id})
    .then(result => {
        return findById(id);
    })
}
function findSteps(id) {
    return db('schemes as s')
    .join('steps as st', 's.id', 'st.scheme_id')
    .where({scheme_id: id})
    .select('s.scheme_name', 'st.instructions', 'st.step_number')
    .orderBy('st.step_number')
    
    
}

function addStep(stepData, id) {
    return db('steps').insert(data)
}