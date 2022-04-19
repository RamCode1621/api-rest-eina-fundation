# Comando para gestions de servidores con linux

cp -a [name directory] [destination path] //para copiar directorio y su contenido

rsync -av [dir] [destination dir] //copi el contedido de un directorio a otro sin tomar encuenta archivos redundantes

du -sh [path] //muestra el espacio en disco que ocupa el contenido de forma resumida el path 

du -sh [path]* //hace lo mismo que el anterio pero de forma detallada

stat [file] //Muestra informacion mas detallada del archivo

zip -r [name of file .zip] [directory or file to compress] //para comprimir archivos o directorios con su contenido

infozip [file.zip] //para ver contenido de un archivo zip sin descomprimir

ps fax //para ver los procesos del sistema de forma ordenada

kill [procces number]  //mata el proceso con el id de proceso ingresado

killall [name procces] //mata todo los procesos con el mismo nombre

curl [url] //retorna la salida de alguna web

curl ifconfig.me //muestra la ip de la red local del dispositovo

df -h // muestra detalle de los dispositivos de almacenamiento

top //muestra los procesos del sistema ordenados por uso de cpu y memoria

Ctrl+z // manda un proceso al background (el proceso se frena mientras esta en el background)

bg //muestra los procesos que estan en segundo plano

sleep 1m //hace que la terminal se quede en espera durante un minuto

fg //para traer un proceso el background al frontground

-----------------------------------

netstat -natup //muestra las interfaces de red con informacion detallada de los procesos que estan corriendo 

tcpdump -i any -p tcp port 80 //se usa para ver el trafico de la red (-i any) para pasar la interfa a ser scaneada para ver el trafico, (-p tcp) para pasarle protocolo que se quiere buscar, (port 80) el puerto que se quiere escuchar.

screen // para crear una nueva terminal independiente que no se cerrara si se corta la conexion ssh

screen -ls // para ver las terminales en ejecucion

screen -r [id] //para abrir la terminal 

Ctrl+a+d // para salir de la terminal creada y volver a la terminal principal

tail [file] //lee las ultimas lineas de un archivo

tail -f [file] //lee las ultimas lineas de un archivo y se queda escuchando cambios en el archivo

nmap // muestra los puertos habiertos de un servidor

cat /proc/cpuinfo //para ver la informacion del servidor

cat /proc/loadavg // para ver directamente la sobre carga del procesador


                   Runtime Edition

        PM2 is a Production Process Manager for Node.js applications
                     with a built-in Load Balancer.

                Start and Daemonize any application:
                $ pm2 start app.js

                Load Balance 4 instances of api.js:
                $ pm2 start api.js -i 4

                Monitor in production:
                $ pm2 monitor

                Make pm2 auto-boot at server restart:
                $ pm2 startup

                To go further checkout:
                http://pm2.io/

