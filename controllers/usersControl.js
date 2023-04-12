const conn = require("../db/mysqlConn")

//memberikan layanan atau respon
//module sebagai objek controller

module.exports = {
    getAll(req,res){
        conn.query("SELECT * FROM users",(err,result)=> {
            if(err){
                return res.send(err)
            }

            return res.send(result)
        })
    },

    getById(req,res){
        conn.query(`SELECT * FROM users WHERE id = ${req.params.id}`,(err,result)=> {
            if(err){
                return res.send(err)
            }else if(!result.length){
                return res.send(result)
            }
    
            return res.send(result)
        })
    },

    insert(req,res){
        conn.query("INSERT INTO users SET ?",req.body,(err,result,field)=> {
            if(err){
                return res.send(err)
            }
    
            return res.send(result)
        })
    },
    
    edit(req,res){
        const {username,email,password} = req.body
        const sql = `UPDATE users SET username = '${username}', email = '${email}', password = '${password}' WHERE id = '${req.params.id}'`

        conn.query(sql,req.body,(err,result)=> {
            if(err){
                return res.send(err)
            }else if(!result.affectedRows){
                return res.send(result)
            }

            return res.send(result)
        })
    },

    delete(req,res){
        conn.query(`DELETE FROM users WHERE id = '${req.params.id}'`,(err,result,field) => {
            if(err){
                return res.send(err)
            }else if(!result.affectedRows){
                return res.send(result)
            }
    
            return res.send(result)
        })
    }
}