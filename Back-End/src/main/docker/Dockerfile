FROM azul/zulu-openjdk:17-latest
LABEL authors="Filipe"
VOLUME /tmp
COPY target/*.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]