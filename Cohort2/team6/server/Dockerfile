FROM openjdk:17
RUN microdnf install findutils
COPY . .
RUN ./gradlew assemble
COPY build/libs/team6-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080

CMD ["java", "-jar", "/app.jar"]
