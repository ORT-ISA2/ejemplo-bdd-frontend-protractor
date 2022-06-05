Feature: Crear estudiante
	Como Usuario del sistema
	Quiero crear un nuevo estudiante
	Para poder verlo en el sistema

@creacionValida
Scenario: Crear válido con todos los datos
	Given El nombre "Carina"
	And El apellido "Fontan"
	And El número de estudiante "123456"
	When Creo un "estudiante" con esos valores
	Then Veo el mensaje de éxito con el código "201"
# Crear válido con todos los datos (nombre, apellido, número de estudiante)
# Crear con nombre inválido
# Crear con apellido inválido
# Crear con número de estudiante inválido
# Crear estudiante ya existente