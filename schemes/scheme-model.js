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

}

function findById(id) {
    return db('schemes').where({id: id})
}


function remove(id) {
    return db('schemes').where({id: id}).del();
}

function add(scheme) {
    return db('schemes').insert(scheme)
}
function update(changes, id) {
    return db('schemes').update(changes).where({id: id})
}
function findSteps(id) {
    return db('schemes as s')
    .join('steps as st', 's.id', 'st.scheme_id')
    .where({scheme_id: id})
    .select('st.scheme_id', 'st.instructions', 'st.step_number')
    
}