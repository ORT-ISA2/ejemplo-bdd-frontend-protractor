Feature: Crear estudiante
	Como Usuario del sistema
	Quiero crear un nuevo estudiante
	Para poder verlo en el sistema

@creacionValida
Scenario: Crear válido con todos los datos
	Given La página del sistema "http://localhost:4200/"
    When ingreso el nombre "Carina" en el campo "nombre"
    And ingreso el apellido "Fontan" en el campo "apellido"
    And ingreso el número 6547897 en el campo "nroEstudiante"
    And presiono botón "Crear"
	Then Veo el mensaje "El estudiante fue creado exitosamente"