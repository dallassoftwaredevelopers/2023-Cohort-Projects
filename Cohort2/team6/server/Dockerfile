FROM openjdk:17
RUN microdnf install findutils
COPY . .
RUN ./gradlew assemble
EXPOSE 8080

CMD ["java", "-jar", "/build/libs/team6-0.0.1-SNAPSHOT.jar"]
