
// insert estados
db.estados.insertMany( [
   	{ 
	   nombre: "CIUDAD DE MÉXICO" 
	}
]);

// insert municipios
db.municipios.insertMany( [
   	{ 
	   	nombre: "Miguel Hidalgo", 
	   	estado: DBRef("estados", db.estados.findOne({nombre: "CIUDAD DE MÉXICO"})._id)
	},
	{ 
	   	nombre: "Cuauhtémoc", 
	   	estado: DBRef("estados", db.estados.findOne({nombre: "CIUDAD DE MÉXICO"})._id)
	}
]);

// insert colonias
db.colonias.insertMany( [
   	{ 
	   	nombre: "Santa María la Ribera", 
	   	cp: "06400",
	   	municipio: DBRef("municipios", db.municipios.findOne({nombre: "Cuauhtémoc"})._id)
	},
	{ 
	   	nombre: "San Rafael", 
	   	cp: "06400",
	   	municipio: DBRef("municipios", db.municipios.findOne({nombre: "Cuauhtémoc"})._id)
	},
	{ 
	   	nombre: "Guerrero", 
	   	cp: "06300",
	   	municipio: DBRef("municipios", db.municipios.findOne({nombre: "Cuauhtémoc"})._id)
	},
	{ 
	   	nombre: "Anáhuac", 
	   	cp: "11320",
	   	municipio: DBRef("municipios", db.municipios.findOne({nombre: "Miguel Hidalgo"})._id)
	},
	{ 
	   	nombre: "Lomas de Chapultepec I Sección", 
	   	cp: "11000",
	   	municipio: DBRef("municipios", db.municipios.findOne({nombre: "Miguel Hidalgo"})._id)
	},
	{ 
	   	nombre: "Lomas de Chapultepec II Sección", 
	   	cp: "11000",
	   	municipio: DBRef("municipios", db.municipios.findOne({nombre: "Miguel Hidalgo"})._id)
	},
	{ 
	   	nombre: "Lomas de Chapultepec III Sección", 
	   	cp: "11000",
	   	municipio: DBRef("municipios", db.municipios.findOne({nombre: "Miguel Hidalgo"})._id)
	}
]);
