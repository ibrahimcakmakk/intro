const fs = require('node:fs');

//dosya yazma
/*fs.writeFile('employees.json', '{"name":"Employee 1 name","salary":2000}', 'utf8',(err) =>{
    if (err) {
        console.log(err);
    }
    console.log("Dosya oluşturuldu..");
});*/
//dosya okuma
/*fs.readFile('employees.json', 'utf8', (err,data)=>{
    if (err) console.log(err);
    console.log(data);
    console.log('Dosya Okundu');
});*/
//veri ekleme
/*fs.appendFile('employees.json','Kodluyoruz','utf8',(err) =>{
    if (err) console.log(err);
    console.log('veri eklendi');
});*/
//dosya silme
/*fs.unlink('employees.json',(err)=>{
    if (err) console.log(err);
    console.log('dosya silindi');
})*/
