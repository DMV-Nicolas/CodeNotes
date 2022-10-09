// Info general
'git status' // Ver el estado de los archivos
'git status -s' // Forma minimalista de 'git status'
'git diff' // Visualizar los cambios de los archivos
'git log' // Listar todos los commits realizados
'git log --oneline' // Forma minimalista de 'git log'

// Comandos basicos
'git init' // Inicializar repositorio
'git add ARCHIVOS' // Agregar archivos al stage
'git commit -m MENSAJE' // Comprometer los archivos del stage
'git remote add origin URL' // Indicar donde se compromete nuestro codigo
'git push -u origin main' // Subir cambios y crear rama en el servidor
'git push' // Subir cambios en el servidor

// Ramas
'git branch' // Ver la rama actual
'git checkout -b RAMA' // Crear nueva rama
'git checkout RAMA' // Cambiar de rama
'git merge RAMA' // Desde master agrega los cambios de la rama

// Restaurar y modificar archivos
'git restore --staged ARCHIVO' // Remover de la etapa de stage
'git restore ARCHIVO' // Restaurar un archivo al original
'git rm ARCHIVO' // Eliminar y pasar a stage
'git mv ARCHIVO POSICION' // Mover o renombrar y pasar a stage