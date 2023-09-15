const path = require('path');

const app = require('express')()
  .get('*', (req, res) => {
    if (req.path.includes('teacher/block')) res.sendFile(path.join(__dirname, '/pages/teacher_block.html'))
    else if (req.path.includes('parent/block')) res.sendFile(path.join(__dirname, '/pages/parent_block.html'))
    else if (req.path.includes('parent/pause')) res.sendFile(path.join(__dirname, '/pages/parent_pause.html'))
    else if (req.path.includes('x3/block')) res.sendFile(path.join(__dirname, '/pages/x3_block.html'))
    else if (req.path.includes('__dev')) res.status(500).sendFile(path.join(__dirname + '/note.txt'))
    else res.sendFile(path.join(__dirname + '/pages/admin_block.html'))
  })
  .listen(8080, () => console.log('i love goguardian security xd'));