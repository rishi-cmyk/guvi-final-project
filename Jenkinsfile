pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-creds')
        IMAGE_NAME_DEV = "rjaiswal127/react-app-dev"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: "${env.BRANCH_NAME}", url: 'https://github.com/rishi-cmyk/guvi-final-project.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'chmod +x build/build.sh'
                    sh './build/build.sh'
                }
            }
        }

        stage('Deploy Image') {
            when {
                branch 'main'
            }
            steps {
                script {
                    sh 'chmod +x build/deploy.sh'
                    sh './build/deploy.sh'
                }
            }
        }
    }

    post {
        success {
            echo "Build & Deploy completed successfully!"
        }
        failure {
            echo "Build failed. Check logs."
        }
    }
}

