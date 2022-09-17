FROM gradle:jdk17

WORKDIR /app

COPY . .

RUN chmod +x ./gradlew
RUN ./gradlew build

WORKDIR /app/build/libs

CMD ["java", "-jar", "./backend-0.0.1.jar"]