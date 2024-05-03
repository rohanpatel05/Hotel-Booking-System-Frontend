pipeline{
    agent any

    environment {
        CI = 'true'
        IMAGE_NAME = "rohankp/hotel-booking-system-frontend"
        REGISTRY = "https://registry.hub.docker.com"
        REGISTRY_CREDENTIALS_ID = "dockerhub-credentials"
    }
    
    stages{
        stage("Checkout") {
            steps {
                checkout scm
            }
        }
        stage("Install Dependencies") {
            steps{
                sh "npm install"
            }
        }
        stage("Test") {
            steps{
                sh "npm test"
            }
        }
        stage("Build Docker Image"){
            steps{
                script {
                    docker.build("${IMAGE_NAME}:${env.BUILD_ID}")
                }
            }
        }
        stage('Deploy Docker Image') {
            steps {
                script {
                    docker.withRegistry(REGISTRY, REGISTRY_CREDENTIALS_ID) {
                        docker.image("${IMAGE_NAME}:${env.BUILD_ID}").push()
                        docker.image("${IMAGE_NAME}:${env.BUILD_ID}").tag('latest')
                        docker.image("${IMAGE_NAME}:latest").push()
                    }
                }
            }
        }
    }
}