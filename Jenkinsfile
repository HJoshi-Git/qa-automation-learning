pipeline {
    agent any

    environment {
        // Correct way to prepend to PATH in Jenkins
        PATH+LOCAL = "/usr/local/bin"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/HJoshi-Git/qa-automation-learning.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                sh 'npx playwright install --with-deps'
                sh 'npx playwright test'
            }
        }
    }

    post {
        always {
            junit '**/test-results/**/*.xml'
            archiveArtifacts artifacts: '**/test-results/**/*.xml', allowEmptyArchive: true
        }
    }
}
