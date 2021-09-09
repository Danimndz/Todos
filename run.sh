#!/bin/sh
apt-get update
apt-get install npm
apt-get install react
apt-get install mysql-server
npm install create-react-app
npm i -g @nestjs/cli
if [-f /root/.my.cnf]; then
    dbname="to_dos2"
    chartset="utf8"
    echo "Creating database..."
    mysql -e "CREATE DATABASE ${dbname} /*\!40100 DEFAULT CHARACTER SET ${charset} */;"
    echo "Database successfuly created!"
    echo "Showing existing databases..."
    mysql -e "show databases;"
    echo ""
    username="dani"
    userpass="prueba1234"
    echo "Creating new user..."
    mysql "CREATE USER ${username}@localhost IDENTIFIED BY '${userpass}';"
	mysql "ALTER USER '${username}'@'localhost' IDENTIFIED WITH mysql_native_password BY '${userpass}';"
    echo "User created!"
    echo ""
    echo "Granting ALL privileges on ${dbname} to ${username}!"
	mysql -e "GRANT ALL PRIVILEGES ON ${dbname}.* TO '${username}'@'localhost';"
	mysql -e "FLUSH PRIVILEGES;"
	mysql -u${username} -p${userpass} -D${dbname} -e "CREATE TABLE todos (idTodo int NOT NULL AUTO_INCREMENT,content varchar(255) NOT NULL,done int NOT NULL,folderIdFolder int DEFAULT NULL,PRIMARY KEY (idTodo),KEY FK_b323c671d0296e8607db6385b07 (folderIdFolder),CONSTRAINT FK_b323c671d0296e8607db6385b07 FOREIGN KEY (folderIdFolder) REFERENCES folder (idFolder) ON DELETE CASCADE ON UPDATE CASCADE)"
	mysql -u${username} -p${userpass} -D${dbname} -e "CREATE TABLE folder (idFolder int NOT NULL AUTO_INCREMENT,name varchar(255) NOT NULL,PRIMARY KEY (idFolder))"
	echo "Done..."
	exit
else
	echo "Please enter root user MySQL password!"
	echo "Note: password will be hidden when typing"
	read rootpasswd
    dbname="to_dos2"
    chartset="utf8"
	echo "Creating new MySQL database..."
	mysql -uroot -p${rootpasswd} -e "CREATE DATABASE ${dbname} /*\!40100 DEFAULT CHARACTER SET ${charset} */;"
	echo "Database successfully created!"
	echo "Showing existing databases..."
	mysql -uroot -p${rootpasswd} -e "show databases;"
	echo ""
    username="dani"
    userpass="prueba1234"    
	echo "Creating new user..."
	mysql -uroot -p${rootpasswd} -e "CREATE USER ${username}@localhost IDENTIFIED BY '${userpass}';"
	echo "User successfully created!"
	echo ""
	echo "Granting ALL privileges on ${dbname} to ${username}!"
	mysql -uroot -p${rootpasswd} -e "GRANT ALL PRIVILEGES ON ${dbname}.* TO '${username}'@'localhost';"
	mysql -uroot -p${rootpasswd} -e "FLUSH PRIVILEGES;"
	echo "Creating table..."
	mysql -u${username} -p${userpass} -D${dbname} -e "CREATE TABLE todos (idTodo int NOT NULL AUTO_INCREMENT,content varchar(255) NOT NULL,done int NOT NULL,folderIdFolder int DEFAULT NULL,PRIMARY KEY (idTodo),KEY FK_b323c671d0296e8607db6385b07 (folderIdFolder),CONSTRAINT FK_b323c671d0296e8607db6385b07 FOREIGN KEY (folderIdFolder) REFERENCES folder (idFolder) ON DELETE CASCADE ON UPDATE CASCADE)"
	mysql -u${username} -p${userpass} -D${dbname} -e "CREATE TABLE folder (idFolder int NOT NULL AUTO_INCREMENT,name varchar(255) NOT NULL,PRIMARY KEY (idFolder))"
	echo "Done..."
fi

cd todos-front
npm install
cd ..
cd todos-back
npm install
cd ..
cd todos-front
npm start &
cd ..
cd todos-back
nest start &



