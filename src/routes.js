const { 
  addNoteHandler, 
  getAllNotesHandler, 
  getNoteByIdHandler,
  editNoteByIdHandler,
  deleteNoteByIdHandler,
   } = require('./handler');

const routes = [
  //untuk menambahkan catatan
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
    options: {
    cors: {
      origin: ['*'],
    },
  },
  },

  //untuk mendapatkan semua catatan
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
 },

 //untuk mendapatkan catatan berdasarkan id
 {
  method: 'GET',
  path: '/notes/{id}',
  handler: getNoteByIdHandler,
},

//untuk mengedit catatan berdasarkan id
{
  method: 'PUT',
  path: '/notes/{id}',
  handler: editNoteByIdHandler,
},

//untuk menghapus catatan berdasarkan id
{
  method: 'DELETE',
  path: '/notes/{id}',
  handler: deleteNoteByIdHandler,
},
];
 
const notes = [];
module.exports = routes;