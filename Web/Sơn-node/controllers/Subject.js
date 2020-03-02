const getTableData = (req, res, db) => {
    db.select('*').from('subject')
      .then(items => {
        if(items.length){
          res.json(items)
        } else {
          res.json({dataExists: 'false'})
        }
      })
      .catch(err => res.status(400).json({dbError: 'db error'}))
  }
  
  const postTableData = (req, res, db) => {
    const { IdSubject, IdTeacher, IdClass, subjectName, fullName, Start, End, Status } = req.body
    db('subject').insert({IdSubject, IdTeacher, IdClass, subjectName, fullName, Start, End, Status})
      .returning('*')
      .then(item => {
        res.json(item)
      })
      .catch(err => res.status(400).json({dbError: 'db error'}))
  }
  
  const putTableData = (req, res, db) => {
    const { IdSubject, IdTeacher, IdClass, subjectName, fullName, Start, End, Status } = req.body
    db('subject').where({IdSubject}).update({IdSubject, IdTeacher, IdClass, subjectName, fullName, Start, End, Status})
      .returning('*')
      .then(item => {
        res.json(item)
      })
      .catch(err => res.status(400).json({dbError: 'db error'}))
  }
  
  const deleteTableData = (req, res, db) => {
    const { IdSubject } = req.body
    db('subject').where({IdSubject}).del()
      .then(() => {
        res.json({delete: 'true'})
      })
      .catch(err => res.status(400).json({dbError: 'db error'}))
  }
  
  module.exports = {
    getTableData,
    postTableData,
    putTableData,
    deleteTableData}