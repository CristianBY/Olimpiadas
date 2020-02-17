create table preguntas(
    id int(2) primary key,
    pregunta varchar (250)
    );


create table respuestas(
    id int(2),
    respuesta1 varchar (250),
    respuesta2 varchar (250),
    respuesta3 varchar (250),
    respuesta4 varchar (250)

    );

create table correcta(
    id int(2),
    correcta varchar(250)
)


CREATE USER  olimpiadas 
IDENTIFIED BY  'abc123.' ;
GRANT ALL ON  olimpiadas.*
TO  olimpiadas ;

SET GLOBAL validate_password_length = 7;

insert into preguntas values (1, '¿En qué ciudad se hicieron los primeros juegos olímpicos?');
insert into preguntas values (2, '¿Cuál es el país que más medallas ha ganado en toda la historia de las Olimpiadas?');
insert into preguntas values (3, '¿En qué ciudad de España se celebraron las últimas olimpiadas en nuestro país?');
insert into preguntas values (4, '¿Cuantas medallas olímpicas ha ganado Rafael Nadal?');
insert into preguntas values (5, '¿Cual de estos deportes no se practica en las olimpiadas?');
insert into preguntas values (6, '¿Cuántas medallas ha conseguido Cristiano Ronaldo?');
insert into preguntas values (7, '¿Cuántas kilómetros tiene la prueba de la maratón?');
insert into preguntas values (8, 'Usain Bolt fue el mejor en:');
insert into preguntas values (9,'¿Cuántas medallas de oro ha conseguido España en futbol?');
insert into preguntas values (10,'¿En que ciudad son las olimpiadas este año?');







insert into respuestas values (1,'Olimpia','Cádiz', 'Dos Hermanas', 'Atenas');
insert into respuestas values (2,'Rusia','Guatemala', 'Estados Unidos','China');
insert into respuestas values (3,'Murcia', 'Barcelona','Madrid', 'Bilbao');
insert into respuestas values (4,'1', '2','3', '4');
insert into respuestas values (5,'Atletismo', 'Futbol','Rugby', 'Formula 1');
insert into respuestas values (6,'0', '2','4', '1');
insert into respuestas values (7,'42', '10','5', '23');
insert into respuestas values (8,'753 Metros', '10000 Metros','100 Metros', 'Tiro al pichón');
insert into respuestas values (9,'0', '2','4', '1');
insert into respuestas values (10,'Trebujena','Tegucigalpa', 'Tokio', 'Nueva York');









insert into correcta values (1,'A');
insert into correcta values (2,'C');
insert into correcta values (3,'B');
insert into correcta values (4,'B');
insert into correcta values (5,'D');
insert into correcta values (6,'A');
insert into correcta values (7,'A');
insert into correcta values (8,'C');
insert into correcta values (9,'D');
insert into correcta values (10,'C');







