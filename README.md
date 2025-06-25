# PROYECTO NOSQL

## Requisitos
- [MongoDB](https://www.mongodb.com/try/download/community)
- [MOngoDB Shell](https://www.mongodb.com/try/download/shell)

## Instalación
- Copiar el repositorio
```bash
	git clone https://github.com/Jeremy12go/PU3_GBD
```

- creo que no es necesario
```bash 
	npm install express mongoose dotenv multer
```

## Collecciones
- ```mongosh
	db.createCollection("alumnos")	
```

- ```mongosh
	db.createCollection("profesores")
```

- ```mongosh
	db.createCollection("clases")
```

## Datos

- Colección clases ```mongosh
	db.clases.insertMany([
  {
    "_id": "236afcb9-d3da-4c0b-9576-4bb1f51aee34",
    "nombre": "Matemática Aplicada",
    "creditos": 4,
    "syllabus": "",
    "encargado": "dd9c691a-d9b5-420e-bb43-4e83fb8aa8d0"
  },
  {
    "_id": "9ca64eac-b75f-4c7b-aff1-85ab9da05bc9",
    "nombre": "Literatura Moderna",
    "creditos": 6,
    "syllabus": "",
    "encargado": "f27737af-af9e-4c50-8736-dd05186e5c03"
  },
  {
    "_id": "a055681e-2ef8-48a7-a513-a425cc3d52a0",
    "nombre": "Física General",
    "creditos": 5,
    "syllabus": "",
    "encargado": "8b2d8640-958a-4ebf-b90f-7dfe7201eeae"
  },
  {
    "_id": "710439c4-9e19-41a7-848c-a403e2694bfc",
    "nombre": "Biología Celular",
    "creditos": 4,
    "syllabus": "",
    "encargado": "911898af-9573-4a9a-96ed-12a76d1e92d3"
  },
  {
    "_id": "65a134b6-1489-4cde-afed-4f85aadcd327",
    "nombre": "Inglés Técnico",
    "creditos": 4,
    "syllabus": "",
    "encargado": "34bed669-5dd9-4747-a169-4df503849ff1"
  }
])
```

- Coleccion profesores ```mongosh
	db.profesores.insertMany(
[
  {
    "_id": "dd9c691a-d9b5-420e-bb43-4e83fb8aa8d0",
    "nombre": "Andrea Torres",
    "edad": 45,
    "mail": "andrea.torres@uni.cl",
    "telefonos": [
      "+56912345678"
    ]
  },
  {
    "_id": "f27737af-af9e-4c50-8736-dd05186e5c03",
    "nombre": "Carlos Muñoz",
    "edad": 50,
    "mail": "carlos.munoz@uni.cl",
    "telefonos": [
      "+56987654321"
    ]
  },
  {
    "_id": "8b2d8640-958a-4ebf-b90f-7dfe7201eeae",
    "nombre": "Beatriz Salinas",
    "edad": 39,
    "mail": "beatriz.salinas@uni.cl",
    "telefonos": [
      "+56933445566"
    ]
  },
  {
    "_id": "911898af-9573-4a9a-96ed-12a76d1e92d3",
    "nombre": "Jorge León",
    "edad": 42,
    "mail": "jorge.leon@uni.cl",
    "telefonos": [
      "+56911223344"
    ]
  },
  {
    "_id": "34bed669-5dd9-4747-a169-4df503849ff1",
    "nombre": "Natalia Rojas",
    "edad": 36,
    "mail": "natalia.rojas@uni.cl",
    "telefonos": [
      "+56999887766"
    ]
  }
])
```

- Colección alumnos```mongosh
	db.alumnos.insertMany(
[
  {
    "nombre": "Cristina Soto",
    "edad": 22,
    "mail": "cristina.soto@uni.cl",
    "telenofos": [
      "+56927545100"
    ],
    "alumnoRegular": true,
    "clases": [
      "710439c4-9e19-41a7-848c-a403e2694bfc",
      "65a134b6-1489-4cde-afed-4f85aadcd327"
    ]
  },
  {
    "nombre": "Luis Díaz",
    "edad": 18,
    "mail": "luis.díaz@uni.cl",
    "telenofos": [
      "+56999314375"
    ],
    "alumnoRegular": false,
    "clases": [
      "a055681e-2ef8-48a7-a513-a425cc3d52a0",
      "236afcb9-d3da-4c0b-9576-4bb1f51aee34",
      "9ca64eac-b75f-4c7b-aff1-85ab9da05bc9"
    ]
  },
  {
    "nombre": "María Torres",
    "edad": 20,
    "mail": "maría.torres@uni.cl",
    "telenofos": [
      "+56978066344"
    ],
    "alumnoRegular": true,
    "clases": [
      "236afcb9-d3da-4c0b-9576-4bb1f51aee34",
      "65a134b6-1489-4cde-afed-4f85aadcd327"
    ]
  },
  {
    "nombre": "Pedro Castillo",
    "edad": 19,
    "mail": "pedro.castillo@uni.cl",
    "telenofos": [
      "+56963882791"
    ],
    "alumnoRegular": false,
    "clases": [
      "a055681e-2ef8-48a7-a513-a425cc3d52a0",
      "65a134b6-1489-4cde-afed-4f85aadcd327"
    ]
  },
  {
    "nombre": "Javiera Fuentes",
    "edad": 21,
    "mail": "javiera.fuentes@uni.cl",
    "telenofos": [
      "+56989588363"
    ],
    "alumnoRegular": false,
    "clases": [
      "710439c4-9e19-41a7-848c-a403e2694bfc",
      "a055681e-2ef8-48a7-a513-a425cc3d52a0"
    ]
  },
  {
    "nombre": "Martín López",
    "edad": 22,
    "mail": "martín.lópez@uni.cl",
    "telenofos": [
      "+56985280268"
    ],
    "alumnoRegular": true,
    "clases": [
      "710439c4-9e19-41a7-848c-a403e2694bfc",
      "65a134b6-1489-4cde-afed-4f85aadcd327"
    ]
  },
  {
    "nombre": "Ana Gómez",
    "edad": 18,
    "mail": "ana.gómez@uni.cl",
    "telenofos": [
      "+56992161967"
    ],
    "alumnoRegular": true,
    "clases": [
      "9ca64eac-b75f-4c7b-aff1-85ab9da05bc9",
      "236afcb9-d3da-4c0b-9576-4bb1f51aee34"
    ]
  },
  {
    "nombre": "Sebastián Rivas",
    "edad": 25,
    "mail": "sebastián.rivas@ni.cl",
    "telenofos": [
      "+56953777435"
    ],
    "alumnoRegular": false,
    "clases": [
      "9ca64eac-b75f-4c7b-aff1-85ab9da05bc9",
      "236afcb9-d3da-4c0b-9576-4bb1f51aee34",
      "65a134b6-1489-4cde-afed-4f85aadcd327"
    ]
  },
  {
    "nombre": "Camila Navarro",
    "edad": 25,
    "mail": "camila.navarro@uni.cl",
    "telenofos": [
      "+56992473269"
    ],
    "alumnoRegular": false,
    "clases": [
      "710439c4-9e19-41a7-848c-a403e2694bfc",
      "a055681e-2ef8-48a7-a513-a425cc3d52a0",
      "9ca64eac-b75f-4c7b-aff1-85ab9da05bc9"
    ]
  },
  {
    "nombre": "Tomás Pizarro",
    "edad": 21,
    "mail": "tomás.pizarro@uni.cl",
    "telenofos": [
      "+56936424859"
    ],
    "alumnoRegular": true,
    "clases": [
      "65a134b6-1489-4cde-afed-4f85aadcd327",
      "710439c4-9e19-41a7-848c-a403e2694bfc"
    ]
  },
  {
    "nombre": "Isidora Herrera",
    "edad": 25,
    "mail": "isidora.herrera@uni.cl",
    "telenofos": [
      "+56978735685"
    ],
    "alumnoRegular": false,
    "clases": [
      "236afcb9-d3da-4c0b-9576-4bb1f51aee34",
      "65a134b6-1489-4cde-afed-4f85aadcd327"
    ]
  },
  {
    "nombre": "Vicente Saavedra",
    "edad": 21,
    "mail": "vicente.saavedra@uni.cl",
    "telenofos": [
      "+56950776090"
    ],
    "alumnoRegular": false,
    "clases": [
      "236afcb9-d3da-4c0b-9576-4bb1f51aee34",
      "9ca64eac-b75f-4c7b-aff1-85ab9da05bc9"
    ]
  },
  {
    "nombre": "Antonia Bravo",
    "edad": 21,
    "mail": "antonia.bravo@uni.cl",
    "telenofos": [
      "+56981682054"
    ],
    "alumnoRegular": false,
    "clases": [
      "9ca64eac-b75f-4c7b-aff1-85ab9da05bc9",
      "236afcb9-d3da-4c0b-9576-4bb1f51aee34",
      "710439c4-9e19-41a7-848c-a403e2694bfc"
    ]
  },
  {
    "nombre": "Benjamín Lagos",
    "edad": 18,
    "mail": "benjamín.lagos@uni.cl",
    "telenofos": [
      "+56954929091"
    ],
    "alumnoRegular": false,
    "clases": [
      "236afcb9-d3da-4c0b-9576-4bb1f51aee34",
      "9ca64eac-b75f-4c7b-aff1-85ab9da05bc9"
    ]
  },
  {
    "nombre": "Daniela Moya",
    "edad": 20,
    "mail": "daniela.moya@uni.cl",
    "telenofos": [
      "+56948503844"
    ],
    "alumnoRegular": false,
    "clases": [
      "9ca64eac-b75f-4c7b-aff1-85ab9da05bc9",
      "65a134b6-1489-4cde-afed-4f85aadcd327",
      "710439c4-9e19-41a7-848c-a403e2694bfc"
    ]
  },
  {
    "nombre": "Joaquín Araya",
    "edad": 20,
    "mail": "joaquín.araya@uni.cl",
    "telenofos": [
      "+56968300955"
    ],
    "alumnoRegular": false,
    "clases": [
      "a055681e-2ef8-48a7-a513-a425cc3d52a0",
      "236afcb9-d3da-4c0b-9576-4bb1f51aee34",
      "9ca64eac-b75f-4c7b-aff1-85ab9da05bc9"
    ]
  },
  {
    "nombre": "Fernanda Jara",
    "edad": 21,
    "mail": "fernanda.jara@uni.cl",
    "telenofos": [
      "+56963036370"
    ],
    "alumnoRegular": false,
    "clases": [
      "9ca64eac-b75f-4c7b-aff1-85ab9da05bc9",
      "710439c4-9e19-41a7-848c-a403e2694bfc"
    ]
  },
  {
    "nombre": "Gabriel Contreras",
    "edad": 22,
    "mail": "gabriel.contreras@uni.cl",
    "telenofos": [
      "+56913172856"
    ],
    "alumnoRegular": false,
    "clases": [
      "a055681e-2ef8-48a7-a513-a425cc3d52a0",
      "710439c4-9e19-41a7-848c-a403e2694bfc",
      "236afcb9-d3da-4c0b-9576-4bb1f51aee34"
    ]
  },
  {
    "nombre": "Josefa Marín",
    "edad": 23,
    "mail": "josefa.marín@uni.cl",
    "telenofos": [
      "+56937819832"
    ],
    "alumnoRegular": true,
    "clases": [
      "9ca64eac-b75f-4c7b-aff1-85ab9da05bc9",
      "65a134b6-1489-4cde-afed-4f85aadcd327",
      "710439c4-9e19-41a7-848c-a403e2694bfc"
    ]
  },
  {
    "nombre": "Andrés Reyes",
    "edad": 18,
    "mail": "andrés.reyes@uni.cl",
    "telenofos": [
      "+56977078684"
    ],
    "alumnoRegular": false,
    "clases": [
      "710439c4-9e19-41a7-848c-a403e2694bfc",
      "9ca64eac-b75f-4c7b-aff1-85ab9da05bc9"
    ]
  }
])
```
