# jsonwebtoken

## Agar restful-api dapat di autentikasi diperlukan jsonwebtoken, karena session tidak dapat digunakan pada restful-api, saat login user berhasil, jsonwebtoken akan menghasilkan token yang mana token tersebut harus dimasukkan (middleware) sebelum dapat mengakses restful-api.

* npm install jsonwebtoken
* pembuatan token adalah saat user melakukan login yaitu di routes users
*