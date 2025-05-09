pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/EvanGka/reedsy-qa-task.git'
            }
        }
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Cypress tests') {
            steps {
                sh 'npx xvfb-run --auto-servernum --server-args="-screen 0 1280x720x24" npx cypress run'
            }
        }
    }
}
