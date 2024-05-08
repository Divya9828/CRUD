const mysql=require('mysql')
const db=mysql.createConnection(
    {
        host:process.env.DB_SERVERNAME,
        user:process.env.DB_USERNAME,
        password:process.env.DB_PASSWORD,
        database:process.env.DB_NAME

    }
)
db.connect((err)=>{
    if(err)
    {
        throw err
    }
})

exports.getAllData=(req,res)=>{
    db.query('select * from registration',(err,results)=>{
        if(results.length>0)
        {
            res.send(results);
           
        }
        else if(err)
        {
            throw err
        }
        else
        {
            res.send({items: 'no more data'});
        }
    })
}

exports.insertData=(req,res)=>{
    var {name,password,place}=req.body;

    db.query('insert into registration (name,password,place) values (?,?,?)',[name,password,place],(err,result)=>{
        res.send('Record insert successfully')
    })

}
exports.getIdByData=(req,res)=>{
    var {id}=req.query;
    db.query('select * from registration where id=?',id,(err,result)=>{
        if(result.length>0)
        {
            res.send(result)
        }
        else
        {
            res.send('No more data')
        }
       
    })
}

exports.updateData=(req,res)=>{
    var {id}=req.query;
    var {password,place}=req.body;
    // console.log(this.getIdByData())
    db.query('update registration set place=?,password=? where id=?' , [place,password,id],(err,result)=>{
        res.send('Updated Successfully')
    })
}


exports.deleteData=(req,res)=>{
    var {id}=req.query;
    db.query('delete from registration where id=?',id,(err,result)=>{
        res.send('Deleted Successfully')
    })
}