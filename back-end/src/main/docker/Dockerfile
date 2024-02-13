FROM azul/zulu-openjdk:17-latest
LABEL authors="Filipe"
ARG JAR_FILE=*.jar
COPY ${JAR_FILE} app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app.jar"]