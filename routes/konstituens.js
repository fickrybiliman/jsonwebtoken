var express = require('express');
var router = express.Router();
const models = require('../models');

//middlewares for check express-session
// const { checkAuthSession } = require('../middlewares/auth');

// router.get('/', checkAuthSession, function(req, res, next) {
router.get('/', function(req, res, next) {
   models.Konstituen.findAll({include: [{model: models.Kecamatan}, {model: models.Kelurahan}]}).then(konstituens => {
      // console.log(konstituens)
      models.Kecamatan.findAll().then(kecamatans => {
         models.Kelurahan.findAll().then(kelurahans => {
            res.status(200).json({message: "Read Data Konstituen", data: konstituens});
         })
      })
   }).catch(err => {
      console.log(err);
      res.status(500).json({message: "Something Went Wrong (Terjadi Kesalahan)"});
   })
});

// router.get('/viewPerKecamatan/:id', (req, res, next) => {
//    const kecamatanId = req.params.id;
//    models.Konstituen.findAll({
//       include: [{model: models.Kecamatan}, 
//                 {model: models.Kelurahan}],
//       where: {kecamatanID: kecamatanId}
//    }).then(konstituens => {
//       // console.log(konstituens)
//       models.Kecamatan.findAll().then(kecamatans => {
//          // console.log(kecamatans)
//          models.Kecamatan.findOne({where: {id: kecamatanId}}).then(namaKecamatan => {
//             models.Kelurahan.findAll().then(kelurahans => {
//                res.render('konstituen/viewPerKecamatan', {konstituen: konstituens, kecamatan: kecamatans, namaKecamatan: namaKecamatan, kelurahan: kelurahans});
//             })
//          })
//       })
//    }).catch(err => {
//       console.log(err);
//       res.render('konstituen/index');
//    })
// });

router.get('/viewPerKelurahan/:id', (req, res, next) => {
   const kelurahanId = req.params.id;
   models.Konstituen.findAll({
      include: [{model: models.Kecamatan}, 
                {model: models.Kelurahan}],
      where: {kelurahanID: kelurahanId}
   }).then(konstituens => {
      // console.log(konstituens)
      models.Kelurahan.findAll().then(kelurahans => {
         // console.log(kecamatans)
         models.Kelurahan.findOne({where: {id: kelurahanId}}).then(namaKelurahan => {
            models.Kecamatan.findAll().then(kecamatans => {
               res.render('konstituen/viewPerKelurahan', {konstituen: konstituens, kelurahan: kelurahans, namaKelurahan: namaKelurahan, kecamatan: kecamatans});
            })
         })
      })
   }).catch(err => {
      console.log(err);
      res.render('konstituen/index');
   })
});

// router.get('/add', checkAuthSession, (req, res, next) => {
// router ini hanya untuk menampilkan form add, di disable saja
// router.get('/add', (req, res, next) => {
//    models.Kecamatan.findAll().then(kecamatans => {
//       // console.log(kecamatans)
//       models.Kelurahan.findAll().then(kelurahans => {
//          res.render('konstituen/add', {kecamatan: kecamatans, kelurahan: kelurahans});
//       }) 
//    }).catch(err => {
//       console.log(err);
//       res.render('konstituen/add');
//    })
// });

router.post('/', (req, res, next) => {
   const {nama, nik, hp, alamat, kecamatanID, kelurahanID, tps} = req.body;
   models.Konstituen.create({nama, nik, hp, alamat, kecamatanID, kelurahanID, tps}).then(konstituen => {
      res.status(201).json({message: "Konstituen Created", data: konstituen});
   }).catch(err => {
      console.log(err);
      res.status(500).json({message: "Something Went Wrong (Terjadi Kesalahan)"});
   })
});

// router.get('/edit/:id', checkAuthSession, (req, res, next) => {
// router ini hanya untuk menampilkan form edit, di disable saja
// router.get('/edit/:id', (req, res, next) => {
//    const konstituenId = req.params.id;
//    models.Kecamatan.findAll().then(kecamatans => {
//       models.Kelurahan.findAll().then(kelurahans => {
//          models.Konstituen.findOne({where: {id: konstituenId}}).then(konstituen => { 
//             // console.log(kelurahans)
//             res.render('konstituen/edit', {konstituen: konstituen, kecamatan: kecamatans, kelurahan: kelurahans});
//          })
//       })
//    }).catch(err => {
//       console.log(err);
//       res.redirect('/konstituens');
//    })
// });

router.put('/:id', (req, res, next) => {
   const konstituenId = req.params.id;
   const {nama, nik, hp, alamat, kecamatanID, kelurahanID, tps} = req.body;
   models.Konstituen.findOne({where: {id: konstituenId}}).then(konstituen => {
      return konstituen.update({
         nama,
         nik,
         hp,
         alamat,
         kecamatanID,
         kelurahanID,
         tps
      })
   }).then(updatedKonstituen => {
      res.status(201).json({message: "Konstituen with Id : " + konstituenId + "is Updated", data: updatedKonstituen})
   }).catch(err => {
      console.log(err);
      res.status(500).json({message: "Something Went Wrong (Terjadi Kesalahan)"});
   })
});

router.delete('/:id', (req, res, next) => {
   const konstituenId = req.params.id;
   models.Konstituen.findOne({where: {id: konstituenId}}).then(konstituen => {
      return konstituen.destroy();
   }).then(konstituen => {
      res.status(200).json({message : "Delete Konstituen with Id : " + konstituenId})
   }).catch(err => {
      console.log(err);
      res.status(500).json({message: "Something Went Wrong (Terjadi Kesalahan)"});
   })
});

module.exports = router;