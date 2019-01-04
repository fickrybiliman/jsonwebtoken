# jsonwebtoken

## Agar restful-api dapat di autentikasi diperlukan jsonwebtoken, karena session tidak dapat digunakan pada restful-api, saat login user berhasil, jsonwebtoken akan menghasilkan token yang mana token tersebut harus dimasukkan (middleware) sebelum dapat mengakses restful-api.

* install jsonwebtoken **npm install jsonwebtoken**
* pembuatan token adalah saat user melakukan login yaitu di **routes users**
* import atau require jsonwebtoken **const jwt = require('jsonwebtoken')**
* jwt sign dilakukan pada routes users login post
* ubah middleware dari session ke jsonwebtoken

* ubah error handler di app.js dari menampilkan error di view ke tampilan error json
* hapus res.render('error');
* tambah res.status(err.status || 500); menjadi res.status(err.status || 500).json({message: err.message});

* masukkan token di header form
